const question = document.querySelector('#question');
const ans1 = document.querySelector('#a-1');
const ans2 = document.querySelector('#a-2');
const ans3 = document.querySelector('#a-3');
const ans4 = document.querySelector('#a-4');
const allAns = document.querySelector('.question-container');


window.onload = () => {
    getNewQuestion()
}
function chnColor (ans) {
    ans.style.backgroundColor = "red"
}
function chkAns (ans) {
if (ans.answer.is_correct === 1) {

}
}

function getNewQuestion() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'api/game');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = data => {
        let qa = JSON.parse(data.target.response);
        console.log('from BE: ', qa);
        question.innerHTML = qa.question;
        ans1.innerHTML = qa.answers[0].answer;
        ans2.innerHTML = qa.answers[1].answer;
        ans3.innerHTML = qa.answers[2].answer;
        ans4.innerHTML = qa.answers[3].answer;
       

        // if (data.target.status === 200) {
        //   let resData = JSON.parse(data.target.response)
        // } else if (data.target.status === 400) {
        // }
    
    xhr.send();
}
allAns.addEventListener('click', (event) => {
    if (event.target.id === 'a-1'){
        chnColor(ans1)
        chkAns()
        setTimeout(getNewQuestion(),3000);
    }
    if (event.target.id === 'a-1'){
        getNewQuestion();
    }
    if (event.target.id === 'a-1'){
        getNewQuestion();
    }
    if (event.target.id === 'a-1'){
        getNewQuestion();
    }
});