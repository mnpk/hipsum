# 한글 로렘 입숨 (Hipsum)

![screenshot](http://i.imgur.com/ugIlfIz.jpg)

http://hipsum.mnpk.org

## About
한글로 된 로렘 입숨 텍스트 생성기 입니다. 

API 를 제공합니다. 터미널에서 
```
curl -s 'http://hipsum.mnpk.org/api/lorem.txt'
```
같은 걸 할 수 있습니다. 

또는 Vim에서 
```
:read !curl -s 'http://hipsum.mnpk.org/api/lorem.txt'
```
명령으로 한글 로렘 입숨 텍스트를 즉시 입력할 수 있습니다.

## API
#### JSON
```
GET /api/lorem
```

##### Parameters

|이름|값|설명|
|----|--|----|
|p|int|문단 수 (기본: 2)|
|l|int|문단 길이 (기본: 20)|
|c|i0 or 1|?? (기본:0)|

##### Response
```json
{
  "result": ["example", "example"]
}
``` 

#### Raw text
```
GET /api/lorem.txt
```

##### Parameters

|이름|값|설명|
|----|--|----|
|p|int|문단 수 (기본: 2)|
|l|int|문단 길이 (기본: 20)|
|c|i0 or 1|?? (기본: 0)|
