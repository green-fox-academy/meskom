'use strict';
const form = document.querySelector("form");
const parent = document.querySelector(".question-container");

window.onload = () => {
    loadQuestions();

}
function loadQuestions() {
    parent.innerHTML = '';
    let xhr = new XMLHttpRequest;
    xhr.open('GET', 'api/questions');
    xhr.onload = data => {
        let questions = JSON.parse(data.target.response);
        console.log(questions[0].id);
        questions.forEach((qu) => {
            let newLi = document.createElement("Li");
            newLi.innerHTML = qu.question;
            let del = document.createElement('a');
            let id = qu.id
            del.innerText = '   -->       delete'
            del.addEventListener('click', (e) => {
                e.preventDefault;
                let delRequest = new XMLHttpRequest;
                delRequest.open('DELETE', `/api/questions/${id}`);
                delRequest.onload = data => {
                    console.log(data);
                    loadQuestions();
                }
                delRequest.send();
            });
            newLi.appendChild(del);
            parent.appendChild(newLi);
        });
    }
    xhr.send();
}


form.addEventListener('submit', (event) => {
    event.preventDefault();
    submit();
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
    xhr.send(JSON.stringify(sendQA));
    loadQuestions();
    form.reset();
}



