function registration()
{

    var name= document.getElementById("t1").value;
    var email= document.getElementById("t3").value;
    var mob= document.getElementById("t2").value;
    var pwd= document.getElementById("t4").value;           
    var cpwd= document.getElementById("t5").value;
    var dob= document.getElementById("t6").value;           
    //var gend= document.getElementById("rr").value;
    
    //email id expression code
    var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var letters = /^[A-Za-z\.]+$/;
    var let = /^[0-9]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(name=='')
    {
        alert('Please enter your name!');
    }
    else if(!letters.test(name))
    {
        alert('Enter only Alphabet letters');
        t1.value=" ";
    }
    else if(mob=='')
    {
        alert('Please enter Mobile Number');
    }
    else if(!let.test(mob))
    {
        alert('Enter Numbers only');
        t2.value=" ";
    }
    else if(mob.length < 10)
    {
      alert("Atleast 10 digits");
     
    }
    else if(mob.length > 10)
    {
      alert("10 digits only");
      t2.value=" ";
    }
    
    else if(dob=='')
    {
        alert('Please choose DOB');
    }
    
    else if(email=='')
    {
        alert('Please Enter Email Id');
    }
    else if (!filter.test(email))
    {
        alert('Invalid email');
    }
    
    else if(pwd=='')
    {
        alert('Please enter Password');
    }

    else if(!pwd_expression.test(pwd))
    {
        alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
    }
    else if(cpwd=='')
    {
        alert('Enter Confirm Password');
    }
    
    else if(pwd != cpwd)
    {
        alert ('Password not Matched');
    }
    else if(document.getElementById("t5").value.length < 6)
    {
        alert ('Password minimum length is 6');
    }
    else if(document.getElementById("t5").value.length > 12)
    {
        alert ('Password max length is 12');
    }
    else
    {                                           
           
           // Redirecting to other page or webste code. 
           alert('Thank you for ur Registration!  USER ID:ss@10decoders.in Password:Sindhu1611!');
                                                   
        window.setTimeout(function () {
            window.location.replace("http://127.0.0.1:5500/Javasript/log.html");
            console.log("Working");
          });
          window.onbeforeunload = null;
              
    }
}