Webcam.set({
    width:365,
    height:345,
    image_format:"png",
    png_quality:90
});

var camera=document.getElementById("webcam");
Webcam.attach("#webcam");

function clickpic(){
    Webcam.snap(function(data_uri){
        document.getElementById("imageidentify").innerHTML='<img id="pic" src="'+data_uri+'"/>'
    });
}
identify=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/VYiufrssS/model.json",modelloaded)

function modelloaded(){
    console.log("model has loaded");
}

function identifybutton(){
   pic=document.getElementById("pic")
    identify.classify(pic,gotresult)
}

function gotresult(error,results){
if(error){
    console.log(error)
}
else{
    console.log(results)
    document.getElementById("object").innerHTML=results[0].label;
    document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(2);

}
}