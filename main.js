function startFunc(){
    console.log("function called : startFunc{}");
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/74RrRkB9T/model.json", function(){
        console.log("modelLoaded!");
        classifier.classify(not_name);
    });
}

function not_name(error, results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
    }
}