var signupForm = document.getElementById("registerForm");

var signName = document.getElementById("signName")
var signEmail = document.getElementById("signEmail")
var signPassword = document.getElementById("signPassword")

var nameAlert = document.getElementById("nameAlert")
var emailAlert = document.getElementById("emailAlert")
var passwordAlert = document.getElementById("passwordAlert")
var existAlert = document.getElementById("existAlert")
var successAlert = document.getElementById("successAlert")

var allUsers = []
if (localStorage.getItem('allUsers') != null) {
   allUsers = JSON.parse(localStorage.getItem('allUsers',))

}
console.log(signupForm);



signupForm.addEventListener('submit', function (e) {
   e.preventDefault(); //to make button default not for refresh

   checkIfAllInputAREValid()
   if (checkIfAllInputAREValid()) {
      AddUser()
   }

   //console.log("hello");    


   //validateInput( /^[A-Za-z\-\'\s]+$/ ,signName,nameAlert) 
   //validateInput( /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ,signEmail,emailAlert) 
   //validateInput( /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/ ,signPassword,passwordAlert)      
});


function AddUser() {
   var newuser = {
      name: signName.value,
      email: signEmail.value,
      Password: signPassword.value
   }
   if (isAlreadyExist(newuser) == true) {

      console.log("already Exist");
      existAlert.classList.replace('d-none', 'd-block')
   } else {
      existAlert.classList.replace('d-block', 'd-none')
      successAlert.classList.replace('d-none', 'd-block')
      allUsers.push(newuser)
      console.log(newuser);
      localStorage.setItem('allUsers', JSON.stringify(allUsers))
      setTimeout(function () {

        location.href = './../login/index.html'
      }, 3000) ////time of excuting
      //////////////////////////////////////////false location

      
   }

   // var newuser = {
   //    name: signName.value,
   //    email: signEmail.value,
   //    Password: signPassword.value
   // }
   // allUsers.push(newuser)
   // console.log(newuser);
   // localStorage.setItem('allUsers', JSON.stringify(allUsers))

}

function isAlreadyExist(newUser) {

   //console.log(new);
   for (i = 0; i < allUsers.length; i++) {

      if (allUsers[i].email.toLowerCase() == newUser.email.toLowerCase() && allUsers[i].name == newUser.name) {
         console.log('email is already exist');
         return true
      }
   }

}
''.toLowerCase()

///////////////////////////////////////////////////////////////////////////////////////////
//!validate inputs

function validateInput(Regex, element, alertMss) {

   var pattern = Regex;

   if (pattern.test(element.value)) {
      alertMss.classList.replace("d-block", "d-none")
      element.classList.remove('is-invalid');
      element.classList.add('is-valid');
      return true;

   } else {

      alertMss.classList.add('is-invalid');
      alertMss.classList.replace('d-none', 'd-block');
      return false

   }

}




//////////////////////////////////////////////////////////////////////////////////////
//!validate all inputs togerther
function checkIfAllInputAREValid() {
   if (validateInput(/^[A-Za-z\-\'\s]+$/, signName, nameAlert) == true &&
      validateInput(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, signEmail, emailAlert) == true &&
      validateInput(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/, signPassword, passwordAlert) == true
   ) {

      console.log('all input are valid')
      return true
   } else {

      console.log('something went wrong !')
      return false
   }

}
