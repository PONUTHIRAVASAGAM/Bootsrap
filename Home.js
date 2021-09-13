function validate(){
    var lname = document.getElementById("UserName").value;
    var pname = document.getElementById("Password").value;

    if ( lname == null || lname == "") {
        document.getElementById("UName").innerHTML="Please Enter Your User Name !!!";
        
       
 }
    if ( pname == null || pname == "") {
        document.getElementById("PWord").innerHTML="Please Enter Your Pasaword !!!";

        return false;
    }
    if(lname.length < 5){  
        document.getElementById("UName").innerHTML="UserName length must be atleast 5 characters !!!";
      
        return false;  
    } 
    if(lname.length > 15){  
        document.getElementById("UName").innerHTML="UserName length must not exceed 15 characters !!!";
  
        return false;   
    }
    if(pname.length < 8){  
        document.getElementById("PWord").innerHTML="Password length must be atleast 8 characters !!!";
        return false;   
      
    } 
    if(pname.length > 16){  
        document.getElementById("PWord").innerHTML="Password length must not exceed 16 characters !!!";
  
        return false;   
    } 



     else if( lname == "admin" && pname == "1234567890"){
        alert("Welcome To AKKA UNIVERSITY");
        location.href="After Admin Login"
    }
         else if( lname == "INDUS" && pname == "9876543210"){
        alert("Welcome To INDUS College Of Engineering");
        location.href = "After College Login.html"
    }
    else if( lname == "Rangaraj" && pname == "8888888888" ){
    alert("Welcom  Rangaraj Pandey ");
    location.reload();
}

 else {
        document.getElementById("UName").innerHTML = "Invalid UserName !!!",
        document.getElementById("PWord").innerHTML = "Invalid Password !!!";
        return false; 
    }

}

