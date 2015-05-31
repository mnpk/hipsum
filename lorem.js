var fs = require('fs');
var words = fs.readFileSync('db/guunmong.txt').toString().split("\n");
var words_dot = fs.readFileSync('db/guunmong-dot.txt').toString().split("\n");

var get_random_word = function() {
  return words[Math.floor(Math.random()*words.length)];
}

var get_random_dot_word = function() {
  return words_dot[Math.floor(Math.random()*words_dot.length)];
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

var get_lorem = function(num_of_p, length_of_p, c) {
  var lorem = [];
  for (var i = 0; i < num_of_p; i++) {
    var p = get_random_p(length_of_p);
    if (c == 1) p = chickenize(p);
    lorem.push(p);
  }
  return lorem.join('\n');
}

var get_lorem_json = function(num_of_p, length_of_p, c) {
  var lorem = [];
  for (var i = 0; i < num_of_p; i++) {
    var p = get_random_p(length_of_p);
    if (c == 1) p = chickenize(p);
    lorem.push(p);
  }
  return {"result": lorem};
}

var chickenize = function(str) {
  return str.replace(/[가-힣][가-힣]/g, '치킨');
}

module.exports = {
  lorem: get_lorem,
  lorem_json: get_lorem_json,
}

// console.log(chickenize(get_lorem(1, 20)));
