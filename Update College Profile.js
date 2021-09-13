function validate(){
    var cname = document.getElementById("collegeName").value;
   var uname = document.getElementById("UserName").value;
    var pname = document.getElementById("Password").value;
    var cmnumber = document.getElementById("CollegeMobileNumber").value; 
    var Address = document.getElementById("Address").value;
 
    if ( cname == null || cname == "") {
        document.getElementById("CName").innerHTML="Please Enter Your College Name !!!";
        
       
 }

    if ( uname == null || uname == "") {
        document.getElementById("UName").innerHTML="Please Enter Your User Name !!!";
        
       
 }
    if ( pname == null || pname == "") {
        document.getElementById("PName").innerHTML="Please Enter Your PassWord !!!";

    
    }
//     if ( cmnumber == null || cmnumber == "") {
//         cmnumber.setCustomValidity('Enter phone number!');
        
       
//  }
    if ( cmnumber == null || cmnumber == "") {
        document.getElementById("CMNumber").innerHTML="Please Enter Your Mobile Number !!!";
        
       
 }

    if ( Address == null || Address == "") {
        document.getElementById("Address").innerHTML="Please Enter Your Address !!!";

        return false;
    }
    if(cname.length < 5){  
        document.getElementById("FName").innerHTML="College Name length must be atleast 5 characters !!!";
      
        return false;  
    } 
    if(cname.length > 15){  
        document.getElementById("FName").innerHTML="College Name length must not exceed 15 characters !!!";
  
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
    if(cmnumber.length < 10){  
        document.getElementById("CMNumber").innerHTML=" Mobile Number must be atleast 10 characters !!!";
        return false;   
      
    } 
    if(cmnumber.length > 10){  
        document.getElementById("CMNumber").innerHTML="Mobile Number must not exceed 10 characters !!!";
  
        return false;   
    } 
    // if(email.length < 5){  
    //     document.getElementById("Email").innerHTML="Experience must be atleast 5 characters !!!";
      
    //     return false;  
    // } 
    // if(email.length > 20){  
    //     document.getElementById("Email").innerHTML="Experience must not exceed 20 characters !!!";
  
    //     return false;   
    // }
    // if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){  
    //     alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
    //     return false;  
    //     }
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


    else if( cname == "INDUS" && lname == "Pandey"  && pname == "admin"&& cmnumber == "9876543210" && Address == " Anything" ){
        alert("College Updated Successfully");
        location.reload();
    }

 else {
        document.getElementById("CName").innerHTML = "Invalid Data !!!",
        document.getElementById("UName").innerHTML = "Invalid Data !!!",
        document.getElementById("PName").innerHTML = "Invalid Data !!!";
        document.getElementById("MNumber").innerHTML = "Invalid Data !!!";
        document.getElementById("Address").innerHTML = "Invalid Data !!!";
    
    }
}