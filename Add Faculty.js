function validate(){
    var fname = document.getElementById("FacultyName").value;
    var qname = document.getElementById("Qualification").value;
    var ename = document.getElementById("Experience").value;
    var sname = document.getElementById("Skillset").value;

    if ( fname == null || fname == "") {
        document.getElementById("FName").innerHTML="Please Enter The Faculty Name !!!";
        
       
 }
    if ( qname == null || qname == "") {
        document.getElementById("QName").innerHTML="Please Enter The Qualification !!!";

    
    }
    if ( ename == null || ename == "") {
        document.getElementById("EName").innerHTML="Please Enter The Experience !!!";
        
       
 }
    if ( sname == null || sname == "") {
        document.getElementById("SName").innerHTML="Please Enter Your Pasaword !!!";

        return false;
    }
    if(fname.length < 5){  
        document.getElementById("FName").innerHTML="Faculty Name length must be atleast 5 characters !!!";
      
        return false;  
    } 
    if(fname.length > 20){  
        document.getElementById("FName").innerHTML="Faculty Name length must not exceed 20 characters !!!";
  
        return false;   
    }
    if(qname.length < 2){  
        document.getElementById("QName").innerHTML="Qualification  must be atleast 2 characters !!!";
        return false;   
      
    } 
    if(qname.length > 10){  
        document.getElementById("QName").innerHTML="Qualification must not exceed 10 characters !!!";
  
        return false;   
    } 
    if(ename.length < 5){  
        document.getElementById("EName").innerHTML="Experience must be atleast 5 characters !!!";
      
        return false;  
    } 
    if(ename.length > 10){  
        document.getElementById("EName").innerHTML="Experience must not exceed 10 characters !!!";
  
        return false;   
    }
    if(sname.length < 5){  
        document.getElementById("SName").innerHTML="Skillset must be atleast 5 characters !!!";
        return false;   
      
    } 
    if(sname.length > 10){  
        document.getElementById("SName").innerHTML="Skillset must not exceed 10 characters !!!";
  
        return false;   
    } 

    // else {
    //     alert("Welcome To AKKA UNIVERSITY");
    //  }


     else if( fname == "Rangaraj" && qname == "PHD" && ename == "12-Years" && sname == "Doctorate"){
        alert("Faculty Is Added Successfully");
        location.reload();
    }

 else {
        document.getElementById("FName").innerHTML = "Invalid Data !!!",
        document.getElementById("QName").innerHTML = "Invalid Data !!!";
        document.getElementById("EName").innerHTML = "Invalid Data !!!",
        document.getElementById("PWord").innerHTML = "Invalid Data !!!";
    }

}