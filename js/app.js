function login(){
    let emailInput= document.getElementById("emailInput").value;
    let passwordInput = document.getElementById("userpass").value;

    let dataObject = {
        email : emailInput,
        password : userpass
    }
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let tokenObject = JSON.parse(this.responseText);
            
            Cookies.set("user",dataObject.email);
            Cookies.set("Token", tokenObject);
           

        window.open("home.html","_self")
        } else if(this.readyState !=4){
            document.getElementById("loginStatus").innerHTML=  "LOADING";


        } else{
            document.getElementById("loginStatus").innerHTML= "login error"
        }

    };
    ajax.open("POST", "https://reqres.in/api/login",true);
    ajax.setRequestHeader("content-Type","application/json");
    ajax.send(JSON.stringify(dataObject));
}

document.getElementById("loginsubmit").addEventListener("click",login)