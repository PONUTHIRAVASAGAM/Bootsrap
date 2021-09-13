function validate(){
    var fname = document.getElementById("Feedback").value;
 
    if ( fname == null || fname == "") {
        document.getElementById("Fname").innerHTML="Please Enter Your Feedback !!!";
        
        return false;
 }
 if(fname.length < 5){  
    document.getElementById("Fname").innerHTML="Feedback must be atleast 5 characters !!!";
    return false;   
  
} 
if(fname.length > 200){  
    document.getElementById("Fname").innerHTML="Address must not exceed 200 characters !!!";

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
    // if(Address.length < 5){  
    //     document.getElementById("Address").innerHTML="Address must be atleast 5 characters !!!";
    //     return false;   
      
    // } 
    // if(Address.length > 100){  
    //     document.getElementById("Address").innerHTML="Address must not exceed 100 characters !!!";
  
    //     return false;   
    // } 
    // else {
    //     alert("Welcome To AKKA UNIVERSITY");
    //  }


    else if( fname == "INDUS" ){
        alert("Student Feedback Send Successfully");
        location.reload();
    }

    // else {
    //     document.getElementById("Fname").innerHTML = "Invalid Data !!!",
    
    
    // }
}