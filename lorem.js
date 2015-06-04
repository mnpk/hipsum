var fs = require('fs');
var words = fs.readFileSync('db/guunmong.txt').toString().split("\n");
var words_dot = fs.readFileSync('db/guunmong-dot.txt').toString().split("\n");

var get_random_word = function(db) {
  return db[Math.floor(Math.random()*db.length)];
}

var get_random_p = function(l) {
  var p = [];

  // 자연스러운 문장 길이를 위해서 주어진 길이를 기준으로 100% ~ 150% 범위로
  // 실제 문장 길이를 다시 정한다.
  l = Math.floor(l * (Math.random() / 2 + 1));
  for (var i = 0; i < l; i++) {
    p.push(get_random_word(words));
  }
  p = p.join(' ');

  // 문장이 마침 부호(. 또는 ?)로 끝나지 않을 경우,
  // 마침 부호로 끝나는 단어를 하나 더 추가해서 문장을 완성한다.
  if (p.substr(-1) !== '.' && p.substr(-1) !== '?') {
    p = p + ' ' + (get_random_word(words_dot));
  }
  return p;
}

var get_lorem = function(p, l, c) {
  var lorem = [];
  for (var i = 0; i < p; i++) {
    var paragraph = get_random_p(l);
    if (c == 1) paragraph = chickenize(paragraph);
    lorem.push(paragraph);
  }
  return lorem;
}

var chickenize = function(str) {
  // 치킨치킨
  return str.replace(/[가-힣][가-힣]/g, '치킨');
}

var get_lorem_json = function(p, l, c) {
  return {"result": get_lorem(p, l, c)};
}

var get_lorem_txt = function(p, l, c) {
  return get_lorem(p, l, c).join('\n');
}


module.exports = {
  lorem_txt: get_lorem_txt,
  lorem_json: get_lorem_json,
}

