var InputUserName=document.getElementById("UserName");
var InputUserMail=document.getElementById("UserMail");
var InputUserPassword=document.getElementById("UserPass");
var message = document.getElementById("errorMessage");


var Users=[];

function NameValidation() {
    var name = InputUserName.value;
    var RegExName = /^[A-Za-z]{2,10}[0-9]?$/;
    var message = document.getElementById("errorMessage");

    if (RegExName.test(name) == true) {
        InputUserName.classList.add("is-valid");
        InputUserName.classList.remove("is-invalid");
        message.classList.add("d-none")
    }
    else{
        InputUserName.classList.remove("is-valid");
        InputUserName.classList.add("is-invalid");
        message.innerHTML=("invalid Name")
    }
}

function MailValidation() {
    var Mail = InputUserMail.value;
    var RegExMail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    

    if (RegExMail.test(Mail) == true) {
        InputUserMail.classList.add("is-valid");
        InputUserMail.classList.remove("is-invalid");
        message.classList.add("d-none")
    }
    else{
        InputUserMail.classList.remove("is-valid");
        InputUserMail.classList.add("is-invalid");
        message.innerHTML=("invalid Mail")
    }
}

function AddData(){
    var user ={
        name:InputUserName.value,
        Mail:InputUserMail.value,
        password:InputUserPassword.value
    }
    if (user.Mail.length == 0 || user.password.length ==0 || user.name.length==0) {
        message.innerHTML =("All inputs are required");
        message.classList.add("text-danger");
        message.classList.rmove("text-success");
    }
    else
    {
        Users.push(user);
        localStorage.setItem("UserData" , JSON.stringify(Users));
        location.href= "./index.html";
    }


}
if (localStorage.getItem != null) {
    Users = JSON.parse(localStorage.getItem("UserData"));
}
else{
    Users = [];
}

function LoginFun(){
   
    if ( InputUserMail.value== '' || InputUserPassword == '') {
        message.innerHTML =("All inputs are required");
        message.classList.add("text-danger");
        message.classList.remove("text-success");
    }
    else
    {
        chechUser();

    }
    
}

function chechUser(){
    for (let i = 0; i < Users.length; i++) {
        if (InputUserMail.value == Users[i].Mail && InputUserPassword.value == Users[i].password) {
            var Name = Users[i].name ;
            localStorage.setItem ("HomeName" , Name);
            console.log(i);
            location.href = './Home.html';
            break;
        } 
    }
    
}

var NHome = localStorage.getItem("HomeName");
var WelcomeUser=document.getElementById("WelcomeUser").innerHTML+=(NHome);
