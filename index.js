var app = require('express')();
var http = require('http').server(app);





var natural = require('natural'),
classifier = new natural.BayesClassifier();
classifier.addDocument(['unit', 'test'], 'software');
classifier.addDocument(['bug', 'program'], 'software');
classifier.addDocument(['drive', 'capacity'], 'hardware');
classifier.addDocument(['power', 'supply'], 'hardware');

classifier.train();

classifier.save('classifier.json', function(err, classifier) {
    // the classifier is saved to the classifier.json file!
    console.log(classifier);
 });
 natural.BayesClassifier.load('interation.json', null, function(err, classifier) {
     console.log(classifier.classify('did the tests pass?'));
 });
console.log(classifier);







http.listen(3000, function(){
  console.log('listening on *:3000');
})
