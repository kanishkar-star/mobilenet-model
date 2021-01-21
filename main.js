Webcam.set({
width:310,
height:300,
img_format:'png',
png_quality:100,

constraints:{
facingMode:'environment'
}
});

camera = document.getElementById("camera");

Webcam.attach(camera);

function take_snapshot(){
    Webcam.snap(function(data_uri){
     document.getElementById("result").innerHTML = "<img id='captured_img' src='" + data_uri + "'>"
    });
}

console.log("Ml5 Version : ", ml5.version);

classifier = ml5.imageClassifier('MobileNet', Model_loaded);

function Model_loaded(){
    console.log("Model Loaded!!");
}

function identify(){
 img=document.getElementById("captured_img");
 classifier.classify(img, got_result)
}

function got_result(error, result){
    if(error){
        console.error(error)
    }
    else{
        console.log(result);
        document.getElementById("object_name").innerHTML = result[0].label;
    }
}