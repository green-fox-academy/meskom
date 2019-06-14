'use strict';

function createList(data) {
    let parent = document.querySelector(".item-list")
    for (let i = 0; i < data.length; i++) {
        let newLi = document.createElement("li");
        newLi.innerHTML = ` ${data[i].title} (highest bid: ${data[i].highest_bid}, ${data[i].bidders_name} )`
        parent.appendChild(newLi)
    }
}
function fillDrop(data) {
    let parent = document.querySelector(".items")
    for (let i = 0; i < data.length; i++) {
        let newOption = document.createElement("option");
        newOption.value = data[i].id;
        newOption.innerHTML = data[i].title
        parent.appendChild(newOption)
    }
}
let xhr = new XMLHttpRequest
xhr.open('GET', 'api/items', true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = data => {
    let info = JSON.parse(data.target.response);
    console.log(info);
    createList(info);
    fillDrop(info);
}
xhr.send();



let form = document.querySelector(".form");
form.addEventListener('submit', (e) => {
    event.preventDefault();
    event.stopPropagation();
    let sendinfo = {
        name: document.querySelector('#bidder').value,
        amount: document.querySelector('#amount').value,
    }
    console.log(sendinfo);
    let itemsid = document.querySelector("#auction-items").value
    console.log(itemsid);
    let xhr = new XMLHttpRequest
    xhr.open('POST', `api/items/${itemsid}/bids`, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = data => {
        if (data.target.status === 200) {
            console.log('ok')
            let info = JSON.parse(data.target.response);
            console.log(info);
            let message = document.querySelector('.message');
            message.innerHTML = info.message;
            
            if (info.message == 'Auction is over!' || info.message === 'Successful!') {
                // document.querySelector("#bidder").innerHTML='';
               // document.querySelector("#amount").innerHTML='';
               console.log('refresh') 
               location.reload(); 

            }

        }
        else { console.log('error van') }

    }
    xhr.send(JSON.stringify(sendinfo));
})



