function validation(){
    
    var firstname = document.getElementById("FirstName").value;
    var lastname = document.getElementById("LastName").value;
    var age = document.getElementById("Age").value;
      
    var contact = document.getElementById("Contact").value;
    var userid = document.getElementById("UserId").value;
    var emailid = document.getElementById("EmailID").value;
    var password = document.getElementById("Password").value;
    var confirmpassword = document.getElementById("ConfirmPassword").value;
    var sub = document.getElementById("sub").value;  
      
   
    if (isNaN(age)) {
      alert("Age must be number. Please Input Correctly");
    }
    
    if(age == null)
	  {
	  document.getElementById("Age").style.borderColor ="red";
	  }
    
    
    if (isNaN(contact) || contact.length < 10) {
        alert("Contact must be number. Please Input Correctly");
      }
    
    if(contact == null)
    {
    	 document.getElementById("Contact").style.borderColor ="red";
    	}
    
    
    if (isNaN(userid)) {
        alert("UserID must be number. Please Input Correctly");
      }
    
   
    
    if(password != confirmpassword){
        alert("Password doesn't match");
    }
    
   
     if (password.length < 8) {
        alert("Password must be of minimum 8 characters");
       }
     if(password.length == 0){
    	 document.getElementById("Password").style.borderColor = "red";
     }
     
    if (email.length < 1) {
      alert("Invalid Email");
    	} 
    else {
      var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
      var validEmail = regEx.test(EmailID);
      if (!validEmail) {
        alert("Invalid Email Please enter correctly");
      }
    }
    
    
    if(sub)
    	{
    	if(firstname == null)
    	{
    	document.getElementById("FirstName").style.backgroundcolor="red";
    	}
    	if(lasttname == null)
    	{
    	document.getElementById("LasttName").style.backgroundcolor="red";
    	}
    	
    	  if(age==null)
    		  document.getElementById("age").style.bordercolor="red" ;
    	  
    	  if(contact == null){
    	    	document.getElementById("Contact").style.backgroundcolor="red";
    	    }
    	  if(userid == null){
    	    	document.getElementById("UserId").style.backgroundcolor="red";
    	  }
    	  if(emailid == null)
      	{
      	document.getElementById("EmailID").style.backgroundcolor="red";
      	}
    	  if(password == null){
    	    		document.getElementById("Password").style.backgroundcolor="red";
    	    }
    	  if(confirmpassword == null)
    		{
    		document.getElementById("ConfirmPassword").style.backgroundcolor="red";
    		}
    	  
    	  
    	    }
    	}
    
    
  
