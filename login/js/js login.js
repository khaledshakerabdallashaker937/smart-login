var loginForm = document.getElementById('loginForm')
var signEmail = document.getElementById('signEmail')
var signPassword =document.getElementById('signPassword')
var allUsers = [];
if(localStorage.getItem('allUsers')!=null){
    allUsers = JSON.parse(localStorage.getItem('allUsers'))
}
//console.log(allUsers);


loginForm.addEventListener('Submit',function(e){
  e.preventDefault()      //to make type of button submit ..to don't allow button to make refresh
    console.log("Hello") ;  
login();

})

function login(){
    var userData = {
        email:signEmail.value,
        password:signPassword.value
    }
    

    if(isLoginValid(userData)==true){

        console.log('you logged in'); 
        alertLogin.classList.replace('d-block','d-none');
        window.location.href="../" //////location don't work 
    }
    
    else{

        alertLogin.classList.replace('d-none','d-block');
        console.log('user not found'); 
    }
}

function isLoginValid(userData){
 for(var i=0 ;i<allUsers.length;i++){
    if(allUsers[i].email.toLowerCase()==userData.email.toLowerCase() && allUsers[i].password == userData.password){
        console.log("userFound");
        localStorage.setItem('userName',allUsers[i].name)
        return true
    }
}
}


