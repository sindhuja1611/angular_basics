function registration()
{

    var email= document.getElementById("t1").value;
    var pwd= document.getElementById("t2").value;

    
    var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(email=='')
    {
        alert('Please Enter Email Id');
        
    }
    else if (!filter.test(email))
    {
        alert('Invalid email');
        t1.value=' ';
        
    }
    
    
    else if(pwd=='')
    {
        alert('Please enter Password');
        
    }

    else if(!pwd_expression.test(pwd))
    {
        alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
        t2.value=' ';
        
    }
    
    else if(document.getElementById("t2").value.length < 6)
    {
        alert ('Password minimum length is 6');
        
    }
    else if(document.getElementById("t2").value.length > 12)
    {
        alert ('Password max length is 12');
        

    }
    else if(email == 'ss@10decoders.in' && pwd =='Sindhu1611!' )
    {                                           
        window.setTimeout(function () {
            window.location.replace("http://127.0.0.1:5500/Javasript/website.html");
            console.log("Working");
            window.onbeforeunload = null;
          });
          
             
            
              
    }
    else{
        alert("Wrong User");
        t1.value=" ";
        t2.value=" ";
    }
  
}