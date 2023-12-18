document.getElementById('submit').onclick = check;

function check(){
    var email = document.getElementById('email').value;
    var comment = document.getElementById('com').value;
    var rate = document.getElementById('rate').value;

   if(email == ""){
    alert("khong dc bo trong.");
    return
   }
   if(comment == ""){
    alert("khong dc bo trong.");
    return
   }
   if(rate == ""){
    alert("khong dc bo trong.");
    return
   }

   var mailcheck = /^([a-zA-Z0-9_\.-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   if(!mailcheck.test(email)){
         alert("email khong dung.");
         return 
   }   
    var number = /^([0-9_-]{1,2}$)/;
    if(!number.test(rate)){
        alert("Rate phai la so.");
        return
    }
}


    