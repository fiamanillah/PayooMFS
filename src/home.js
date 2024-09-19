console.log(localStorage.getItem("storedBalance"))

let accountBalance = document.getElementById("balance");

if (!localStorage.getItem("storedBalance")) {
    accountBalance.innerHTML = 0;
} else {
    accountBalance.innerText = localStorage.getItem("storedBalance");
}



let transactionHistorySection = document.getElementById("transactionHistorySection");

if (localStorage.getItem("transactionStorage") == '') {
    transactionHistorySection.innerHTML = ''
} else {
    transactionHistorySection.innerHTML = localStorage.getItem("transactionStorage")
}


let actionBtn = document.querySelectorAll(".action-Btn");
actionBtn.forEach(element => {
    element.addEventListener("click", ()=>{
        actionBtn.forEach( i => i.classList.remove("btn-active"));

        element.classList.add("btn-active")

        document.querySelectorAll(".action-sections").forEach(element =>{
            element.classList.remove("action-section-active")
        })

        if (element.id == "addMoney") {
            document.getElementById("addMoneySection").classList.add("action-section-active")
        }else if (element.id == "cashOut") {
            document.getElementById("withdrawMoneySection").classList.add("action-section-active")
        }else if(element.id == "transaction"){
            document.getElementById("transactionSection").classList.add("action-section-active")
        }
        console.log(element.id);
        
    })
});

function moneyAdd(){
    
    let addAmmount = parseInt(document.getElementById("ammountToAdd").value);
    let pin = document.getElementById("addPIN");
    if (pin.value == 1234) {
        let numAccountBalance = parseInt(accountBalance.innerText);

        let newBalance = numAccountBalance + addAmmount;

        localStorage.setItem("storedBalance", newBalance);

        accountBalance.innerText = newBalance;

        let transactionMsg = `${addAmmount} added to the account`;


        let transactionElement = document.createElement("div");
        transactionElement.innerHTML = `<div class="flex items-center gap-3 w-full p-3 text-slate-500 rounded-xl bg-slate-200">
                                            <img src="./image/transaction.svg" alt="" srcset="">
                                            <span>${transactionMsg}</span>
                                        </div>`;
        transactionHistorySection.insertBefore(transactionElement, transactionHistorySection.firstChild);

        localStorage.setItem("transactionStorage" , transactionHistorySection.innerHTML);

        

 
    }else{
        alert("Wrong Pin")
    }

}

let addMoneyBtn = document.getElementById("addMoneyBtn");

addMoneyBtn.addEventListener("click", moneyAdd);



function moneyWithdraw(){
    let ammountToWithdraw = document.getElementById("ammountToWithdraw").value;
    let outPIN = document.getElementById("outPIN");
    if (outPIN.value == 1234) {

        if (ammountToWithdraw > parseInt(accountBalance.innerText)) {
            alert("Low Balance")
        } else {
            let numAccountBalance = parseInt(accountBalance.innerText);

        let newBalance = numAccountBalance - ammountToWithdraw;

        localStorage.setItem("storedBalance", newBalance);

        accountBalance.innerText = localStorage.getItem("storedBalance");

        let transactionMsg = `${ammountToWithdraw} Withrawed from account`;


        let transactionElement = document.createElement("div");
        transactionElement.innerHTML = `<div class="flex items-center gap-3 w-full p-3 text-slate-500 rounded-xl bg-slate-200">
                                            <img src="./image/transaction.svg" alt="" srcset="">
                                            <span>${transactionMsg}</span>
                                        </div>`;
        transactionHistorySection.insertBefore(transactionElement, transactionHistorySection.firstChild);

        localStorage.setItem("transactionStorage" , transactionHistorySection.innerHTML);
        }

        

    }else{
        alert("Wrong Pin")
    }

}


let withdrawMoneyBtn = document.getElementById("withdrawMoneyBtn");

withdrawMoneyBtn.addEventListener("click", moneyWithdraw)







