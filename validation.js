function faith(){
    var fullname = document.getElementById("fullname").value
    var email = document.getElementById("email").value
    var phonenumber = document.getElementById("phonenumber").value
    var password = document.getElementById("password").value
    var confirmpassword = document.getElementById("confirmpassword").value

     if(fullname === "" || email === "" || phonenumber === "" || password === "" || confirmpassword === ""){
         document.getElementById("message").innerHTML = "This input is required"
     }
     else if(password != confirmpassword){
         document.getElementById("message").innerHTML = "confirmpassword does not match password"
     }
     else if(password.length < 4 || confirmpassword.length < 4){
         document.getElementById("message").innerHTML = "password must be more than 3 characters"
     }
     else if(password.length > 11 || confirmpassword.length > 11){
         document.getElementById("message").innerHTML = "password must not be more than 11 characters"
     }
     else if(!fullname.match(/^[A-Za-z]+$/)){
         document.getElementById("message").innerHTML = "enter a valid name"
     }
     else if(fullname.length > 15){
         document.getElementById("message").innerHTML = "name must not be more than 15 characters"
     }
     else if(!email.match(/\S+@\S+\.\S+/)){
         document.getElementById("message").innerHTML = "enter a valid email"
     }

     else{
         document.getElementById("message").innerHTML = "Registration successful"
     }

 }