'use strict';
let question = document.querySelector("#question").value
let answers = [
    { answer1: document.querySelector("#answer-1").value, is_correct: document.querySelector("#a-1").value === "answer-1" },
    { answer2: document.querySelector("#answer-2").value, is_correct: document.querySelector("#a-2").value === "answer-2" },
    { answer3: document.querySelector("#answer-3").value, is_correct: document.querySelector("#a-3").value === "answer-3" },
    { answer3: document.querySelector("#answer-4").value, is_correct: document.querySelector("#a-4").value === "answer-4" },
]

let sendQA = {}
console.log(document.querySelector("#a-1").value === "answer-1")

let xhr = new XMLHttpRequest
xhr.open('POST', 'api/questions');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = data => {
    console.log(data)
}
xhr.send(sendData)


