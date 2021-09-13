function validate(){
    var subject = document.getElementById("subject").value;
 
    if ( fname == null || fname == "") {
        document.getElementById("Fname").innerHTML="Please Enter Your Feedback !!!";
        
        return false;
 }
 if(subject.length < 5){  
    document.getElementById("Fname").innerHTML="Feedback must be atleast 5 characters !!!";
    return false;   
  
} 
if(subject.length > 200){  
    document.getElementById("Fname").innerHTML="Address must not exceed 200 characters !!!";

    return false;   
} 

    else if( subject == "INDUS" ){
        alert("College Feedback Send Successfully");
        location.reload();
    }

    // else {
    //     document.getElementById("Fname").innerHTML = "Invalid Data !!!",
    
    
    // }
}