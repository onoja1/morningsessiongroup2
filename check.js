var check = function(schoolfees, fees){
    var schoolfees = 50000
    var fees = document.getElementById("fees").value
    var answer = Number(schoolfees) - Number(fees)
    var dead = Number(fees) - Number(schoolfees)
    document.getElementById("message").value = answer
    document.getElementById("message").value = dead
    if(fees===""){
    document.getElementById("message").innerHTML = "This input is required"
   }
   else if(schoolfees > dead){
       document.getElementById("message").innerHTML = "you have a balance of" + dead
   }
   else if(answer < schoolfees){
       document.getElementById("message").innerHTML = "you are owing" + answer
   }

}

