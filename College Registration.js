function validate(){
    var cname = document.getElementById("collegeName").value;
   var email = document.getElementById("collegeEmail").value;
    var pname = document.getElementById("Password").value;
    var rpname = document.getElementById("RepeatePassword").value;

    if ( cname == null || cname == "") {
        document.getElementById("CName").innerHTML="Please Enter Your College Name !!!";
        
       
 }

    if ( email == null || email == "") {
        document.getElementById("Email").innerHTML="Please Enter Your User Name !!!";
        
       
 }
    if ( pname == null || pname == "") {
        document.getElementById("PName").innerHTML="Please Enter Your PassWord !!!";

    
    }

    if ( rpname == null || rpname == "") {
        document.getElementById("CMNumber").innerHTML="Please Enter Your Mobile Number !!!";
        
       
 }

    if(cname.length < 5){  
        document.getElementById("FName").innerHTML="College Name length must be atleast 5 characters !!!";
      
        return false;  
    } 
    if(cname.length > 15){  
        document.getElementById("FName").innerHTML="College Name length must not exceed 15 characters !!!";
  
        return false;   
    }

    if(email.length < 5){  
        document.getElementById("UName").innerHTML="Email-Id length must be atleast 5 characters !!!";
      
        return false;  
    } 
    if(email.length > 20){  
        document.getElementById("UName").innerHTML="Email-Id length must not exceed 20 characters !!!";
  
        return false;   
    }
    if(pname.length < 5){  
        document.getElementById("PName").innerHTML="PassWord  must be atleast 5 characters !!!";
        return false;   
      
    } 
    if(pname.length > 15){  
        document.getElementById("PName").innerHTML="PassWord must not exceed 15 characters !!!";
  
        return false;   
    } 
    var check = function(){
    if(document.getElementById("Password").value == document.getElementById("RepeatePassword").value ){  
        document.getElementById("PName").innerHTML=" Password Match...!!! ";
        return false;   
      
    } 
    else{  
        document.getElementById("RPName").innerHTML="Password Not Match...!!!";
  
        return false;   
    } 

}

    else ( cname == "INDUS" && email == "Pandey@123.com" && pname == "admin" ){
        alert("College Registered Successfully");
        location.reload();
    }

 else {
        document.getElementById("CName").innerHTML = "Invalid Data !!!",
        document.getElementById("Email").innerHTML = "Invalid Data !!!",
        document.getElementById("PName").innerHTML = "Invalid Data !!!";
        document.getElementById("RPName").innerHTML = "Invalid Data !!!";
    
    }
}