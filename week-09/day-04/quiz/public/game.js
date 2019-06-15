const question = document.querySelector('#question');
const ans1 = document.querySelector('#a-1');
const ans2 = document.querySelector('#a-2');
const ans3 = document.querySelector('#a-3');
const ans4 = document.querySelector('#a-4');
const allAns = document.querySelector('.question-container');
let score = 0;

window.onload = () => {
    getNewQuestion()
}
// function chnColor(ans) {
//     ans.style.backgroundColor = "red"
// }

function chkAns(ans) {
    if (ans.value == 1) {
        let scoreTag = document.querySelector("#score-value")
        ans.style.backgroundColor = "green"
        score++
        scoreTag.innerHTML = score;
        console.log(score)
    } else {
        ans.style.backgroundColor = "red"
    }
}

function getNewQuestion() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'api/game');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = data => {
        let qa = JSON.parse(data.target.response);
        //console.log('from BE: ', qa);
        document.querySelectorAll(".answer").forEach((button) => {
            button.style.backgroundColor = "powderBlue"
        });
        question.innerHTML = qa.question;
        ans1.innerHTML = qa.answers[0].answer;
        ans2.innerHTML = qa.answers[1].answer;
        ans3.innerHTML = qa.answers[2].answer;
        ans4.innerHTML = qa.answers[3].answer;

        ans1.value = qa.answers[0].is_correct;
        ans2.value = qa.answers[1].is_correct;
        ans3.value = qa.answers[2].is_correct;
        ans4.value = qa.answers[3].is_correct;
    };

    xhr.send();
}
allAns.addEventListener('click', (event) => {
    event.preventDefault();
    //event.stopPropagation();

    if (event.target.id === 'a-1') {
        event.preventDefault();
        chkAns(ans1);
        setTimeout(() => { getNewQuestion() }, 3000);
    }
    if (event.target.id === 'a-2') {
        //setTimeout(() => {chnColor(ans2)}, 1000);
        chkAns(ans2);
        setTimeout(() => { getNewQuestion() }, 3000);
    }
    if (event.target.id === 'a-3') {
        //chnColor(ans3)
        chkAns(ans3)
        setTimeout(() => { getNewQuestion() }, 3000);
    }
    if (event.target.id === 'a-4') {
        //chnColor(ans4)
        chkAns(ans4)
        setTimeout(() => { getNewQuestion() }, 3000);
    }
});