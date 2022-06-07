https://teachablemachine.withgoogle.com/models/dJzxZCtk-/

function ce(){
    classifier.classify(gotResults);
}



function gr(){
navigator.mediaDevices.getUserMedia({audio: true});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/dJzxZCtk-/model.json', ce);
}