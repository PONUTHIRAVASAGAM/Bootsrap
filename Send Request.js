function validate(){
    var mname = document.getElementById("Name").value;
   var cname = document.getElementById("College").value;
    var rname = document.getElementById("RequestFor").value;

    if ( mname == null || mname == "") {
        document.getElementById("MName").innerHTML="Please Enter Your  Name !!!";
        
       
 }

    if ( cname == null || cname == "") {
        document.getElementById("CName").innerHTML="Please Enter Your College Name !!!";
        
       
 }
    if ( rname == null || rname == "") {
        document.getElementById("RName").innerHTML="Please Enter Your Feedback !!!";
        return false;
    
    }

    if(mname.length < 5){  
        document.getElementById("MName").innerHTML=" Name length must be atleast 5 characters !!!";
      
        return false;  
    } 
    if(mname.length > 15){  
        document.getElementById("MName").innerHTML=" Name length must not exceed 15 characters !!!";
  
        return false;   
    }

    if(cname.length < 5){  
        document.getElementById("CName").innerHTML="College Name length must be atleast 5 characters !!!";
      
        return false;  
    } 
    if(cname.length > 15){  
        document.getElementById("CName").innerHTML="College Name length must not exceed 15 characters !!!";
  
        return false;   
    }
    if(rname.length < 5){  
        document.getElementById("RName").innerHTML="Request must be atleast 5 characters !!!";
        return false;   
      
    } 
    if(rname.length > 15){  
        document.getElementById("RName").innerHTML="Request must not exceed 15 characters !!!";
  
        return false;   
    } 

    else if( mname == "Pandey" && cname == "INDUS"  && rname == "admin"){
        alert("Request Send Successfully");
        location.reload();
    }

 else {
        document.getElementById("MName").innerHTML = "Invalid Data !!!",
        document.getElementById("CName").innerHTML = "Invalid Data !!!",
        document.getElementById("RName").innerHTML = "Invalid Data !!!";

    }
}