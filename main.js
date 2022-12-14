Prediction1= "";

Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality: 90
});
camera= document.getElementById("camera");
Webcam.attach('#camera')
function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= '<img id="captured_image" src="'+data_uri+'">'

    });
}
console.log("ml5 version:",ml5.version)
classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/fDPS1ISed/model.json",model_loaded);
function model_loaded(){
    console.log("mode_loaded")
}
function check(){
    img= document.getElementById("captured_image");
    classifier.classify(img, gotResult)
}
function gotResult(error,results){
if(error){
    console.log(error)

}
else{
    console.log(results)
    document.getElementById("result").innerHTML= result[0].label;
    prediction1= result[0].label;
    speak()
if(result[0].label=="victory"){
document.getElementById("update_emoji").innerHTML= "&#9996;"
}
if(result[0].label=="best"){
    document.getElementById("update_emoji").innerHTML= "&#128077;"
}
if(result[0].label== "amazing"){
    document.getElementById("update_emoji").innerHTML+ "&#128076;"
}
}
}

