var fs = require('fs');
var words = fs.readFileSync('db/guunmong.txt').toString().split("\n");
var words_length = words.length
var words_dot = fs.readFileSync('db/guunmong-dot.txt').toString().split("\n");
var words_dot_length = words_dot.length

var length_short = 20;
var length_medium = 50;
var length_long  = 80;

var get_random_word = function() {
  return words[Math.floor(Math.random()*words_length)];
}

var get_random_dot_word = function() {
  return words_dot[Math.floor(Math.random()*words_dot_length)];
}

var get_random_p = function(length) {
  var p = [];
  length = Math.floor(length * (Math.random() / 2 + 1));
  for (var i = 0; i < length; i++) {
    p.push(get_random_word());
  }
  p = p.join(' ');
  if (p.substr(-1) !== '.' && p.substr(-1) !== '?') {
    p = p + ' ' + (get_random_dot_word());
  }
  return p;
}

var get_lorem = function(num_of_p, length_of_p) {
  var lorem = [];
  for (var i = 0; i < num_of_p; i++) {
    lorem.push(get_random_p(length_of_p));
  }
  return lorem.join('\n\n');
}

var get_lorem_json = function(num_of_p, length_of_p) {
  var lorem = [];
  for (var i = 0; i < num_of_p; i++) {
    lorem.push(get_random_p(length_of_p));
  }
  return {"result": lorem};
}

module.exports = {
  lorem: get_lorem,
  lorem_json: get_lorem_json
}
