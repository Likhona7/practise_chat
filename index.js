var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//
// var natural = require('natural'),
// classifier = new natural.BayesClassifier();
// classifier.addDocument(['unit', 'test'], 'software');
// classifier.addDocument(['bug', 'program'], 'software');
// classifier.addDocument(['drive', 'capacity'], 'hardware');
// classifier.addDocument(['power', 'supply'], 'hardware');
//
// classifier.train();
//
// classifier.save('classifier.json', function(err, classifier) {
//     // the classifier is saved to the classifier.json file!
//     console.log(classifier);
//  });
//  natural.BayesClassifier.load('interation.json', null, function(err, classifier) {
//      console.log(classifier.classify('did the tests pass?'));
//  });
// console.log(classifier);
//

app.get('/', function(req, res){
  res.sendfile('index.html');
});


io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
})
