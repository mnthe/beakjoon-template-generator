# Beakjoon Online Judge Template Generator

백준 온라인 저지용 템플릿 생성기

## How to Use
----

### 1. Grunt 및 node module 설치
```bash
$ npm install -g grunt
$ npm install
```

### 2. Grunt Task 실행
```bash
# grunt create:{language-extension}:{problem-number}:{output-folder(optional)}
$ grunt create:cs:10718
$ grunt create
```

## How to Make Template
----
### 1. Create Template File
원하는대로 템플릿을 만든 뒤 `template.{language-extension}` 파일명으로 templates 폴더에 넣는다.


### 2. Keyword in Template
아래의 Keyword는 문제의 텍스트로 자동 치환된다.

- {{TITLE_TEXT}}: 문제의 제목으로 치환됨

- {{PROBLEM_TEXT}}: 문제 설명 텍스트로 치환

- {{INPUT_TEXT}}: 문제의 입력 설명 텍스트로 치환

- {{OUTPUT_TEXT}}: 문제의 출력 설명 텍스트로 치환

- {{INPUTS}}: 예제 입력의 각 줄을 하나의 스트링으로 하여 `','` 로 연결한 텍스트로 치환
    ```
    예제 입력)
    3 1
    5 3
    5
    5

    치환된 텍스트)
    "3 1", "5 3", "5", "5"
    ```

- {{OUTPUTS}}: 예제 출력의 각 줄을 하나의 스트링으로 하여 `','` 로 연결한 텍스트로 치환
    ```
    예제 입력)
    강한친구 대한육군
    강한친구 대한육군

    치환된 텍스트)
    "강한친구 대한육군", "강한친구 대한육군"
    ```
