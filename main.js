function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio : true
    });

    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/j4JddyuvF/model.json', modelLoaded);

}

function modelLoaded() {
    classifier.classify(got_result);
}

function got_result(error, results) {
    if (error) {
        console.log(error);
    }

    else {
        console.log(results);
    }

}