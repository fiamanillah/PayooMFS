document.getElementById("login").addEventListener("click", function(event){
    event.preventDefault();
    
    let num = document.getElementById("number").value;
    let pass = document.getElementById("password").value;


    if(num == 1234 && pass == 1234){
        window.location.href = "./home.html"
    }else(
        alert("Wrong")
    )

    console.log(num , pass)

});

