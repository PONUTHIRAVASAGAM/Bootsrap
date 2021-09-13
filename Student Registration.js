function validate(){
    var fname = document.getElementById("FirstName").value;
    var lname = document.getElementById("LastName").value;
    var uname = document.getElementById("UserName").value;
    var pname = document.getElementById("Password").value;
    var mnumber = document.getElementById("MobileNumber").value;
    var email = document.getElementById("Emailid").value;
    var atposition=email.indexOf("@");  
    var dotposition=email.lastIndexOf("."); 
    var Address = document.getElementById("Address").value;
 
    if ( fname == null || fname == "") {
        document.getElementById("FName").innerHTML="Please Enter Your First Name !!!";
        
       
 }
    if ( lname == null || lname == "") {
        document.getElementById("LName").innerHTML="Please Enter Your Last Name !!!";

    }
    if ( uname == null || uname == "") {
        document.getElementById("UName").innerHTML="Please Enter Your User Name !!!";
        
       
 }
    if ( pname == null || pname == "") {
        document.getElementById("PName").innerHTML="Please Enter Your PassWord !!!";

    
    }
    if ( mnumber == null || mnumber == "") {
        document.getElementById("MNumber").innerHTML="Please Enter Your Mobile Number !!!";
        
       
 }
    if ( email == null || email == "") {
        document.getElementById("Email").innerHTML="Please Enter Your Mail-id !!!";


    }
    if ( Address == null || Address == "") {
        document.getElementById("Address").innerHTML="Please Enter Your Address !!!";

        return false;
    }
    if(fname.length < 5){  
        document.getElementById("FName").innerHTML="First Name length must be atleast 5 characters !!!";
      
        return false;  
    } 
    if(fname.length > 15){  
        document.getElementById("FName").innerHTML="First Name length must not exceed 15 characters !!!";
  
        return false;   
    }
    if(lname.length < 5){  
        document.getElementById("LName").innerHTML="Last Name length must be atleast 5 characters !!!";
        return false;   
      
    } 
    if(lname.length > 15){  
        document.getElementById("LName").innerHTML="Last Name length must not exceed 15 characters !!!";
  
        return false;   
    } 
    if(uname.length < 5){  
        document.getElementById("UName").innerHTML="User Name length must be atleast 5 characters !!!";
      
        return false;  
    } 
    if(uname.length > 15){  
        document.getElementById("UName").innerHTML="User Name length must not exceed 15 characters !!!";
  
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
    if(mnumber.length < 10){  
        document.getElementById("MNumber").innerHTML=" Mobile Number must be atleast 10 characters !!!";
        return false;   
      
    } 
    if(mnumber.length > 10){  
        document.getElementById("MNumber").innerHTML="Mobile Number must not exceed 10 characters !!!";
  
        return false;   
    } 
    if(email.length < 5){  
        document.getElementById("Email").innerHTML="Email-ID  must be atleast 5 characters !!!";
      
        return false;  
    } 
    if(email.length > 20){  
        document.getElementById("Email").innerHTML="Email-ID must not exceed 20 characters !!!";
  
        return false;   
    }
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){  
        alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
        return false;  
        }
    if(Address.length < 5){  
        document.getElementById("Address").innerHTML="Address must be atleast 5 characters !!!";
        return false;   
      
    } 
    if(Address.length > 100){  
        document.getElementById("Address").innerHTML="Address must not exceed 100 characters !!!";
  
        return false;   
    } 
    // else {
    //     alert("Welcome To AKKA UNIVERSITY");
    //  }


    else if( fname == "Rangaraj" && lname == "Pandey" && uname == "admin" && pname == "admin"&& mnumber == "9876543210" &&  email=="Rangarajpandey@akkauniv.edu" && Address == " Anything" ){
        alert("Student Registered Successfully");
        location.reload();
    }

 else {
        document.getElementById("FName").innerHTML = "Invalid Data !!!",
        document.getElementById("LName").innerHTML = "Invalid Data !!!";
        document.getElementById("UName").innerHTML = "Invalid Data !!!",
        document.getElementById("PName").innerHTML = "Invalid Data !!!";
        document.getElementById("MNumber").innerHTML = "Invalid Data !!!";
        document.getElementById("Email").innerHTML = "Invalid Data !!!",
        document.getElementById("Address").innerHTML = "Invalid Data !!!";
    
    }
}