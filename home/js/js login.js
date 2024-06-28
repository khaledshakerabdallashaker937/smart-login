var userName = localStorage.getItem('userName');
var logBtn = document.getElementById('logBtn')

var allUsers = [];
if(localStorage.getItem('allUsers')!=null){
    allUsers=JSON.parse(localStorage.getItem('allUsers'))
}
console.log(allUsers);


userNameWrapper.innerHTML = userName

logBtn.addEventListener('click',function(){
    localStorage.removeItem('userName')
})