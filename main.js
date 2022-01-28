Webcam.set({
    width:360,
    height:250,
    image_format: 'png',
    png_quality:90,
})
camera = document.getElementById("webcam");

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var Textbox = document.getElementById("textarea1");
function start()
{
    document.getElementById("textarea1").innerHTML="";
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    if(content=="take my selfie")
    {
        console.log("taking selfie ---")
        speak();
    }

    document.getElementById("textarea1").innerHTML= content;
    speak();
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data = "taking your selfie in 5 seconds"
    
    var utterthis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(webcam);
    setTimeout(function()
    {
        take_snapshot();
        save();
    },5000);

}
    
function take_snapshot(){
    webcam.snap(function(data_uri){
        document.getElementById("photo").innerHTML='<img id="selfie_img" src ="'+data_uri+'">';

    });
}

function save(){
    link = document.getElementById("link")
    image= document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}

