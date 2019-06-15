'use strict';
const form = document.querySelector("form")

form.addEventListener('submit', (event) => {
    event.preventDefault();
    submit()
})
function submit() {
    let newQuestion = document.querySelector("#question").value
    let newAnswers = [
        { answer: document.querySelector("#answer-1").value, is_correct: document.querySelector("#a-1").checked ? 1 : 0 },
        { answer: document.querySelector("#answer-2").value, is_correct: document.querySelector("#a-2").checked ? 1 : 0 },
        { answer: document.querySelector("#answer-3").value, is_correct: document.querySelector("#a-3").checked ? 1 : 0 },
        { answer: document.querySelector("#answer-4").value, is_correct: document.querySelector("#a-4").checked ? 1 : 0 },
    ]
    let sendQA = { question: newQuestion, answers: newAnswers }
    console.log(sendQA);
    let xhr = new XMLHttpRequest
    xhr.open('POST', 'api/questions');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = data => {
        console.log(data)
    }
    //let sendQA = { question: newQuestion, answers: newAnswers }
    xhr.send(JSON.stringify(sendQA));
}

//console.log(sendQA)
// console.log(document.querySelector("#a-1").checked? 1 : 0)
// console.log(document.querySelector("#a-2").checked? 1 : 0)
// console.log(document.querySelector("#a-3").checked? 1 : 0)
// console.log(document.querySelector("#a-4").checked? 1 : 0)



