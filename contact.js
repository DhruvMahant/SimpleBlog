function contact(){

   
    if(validation())
    {
       alert("Message has been sent!!");
      document.getElementById("txtname").value = "";
    document.getElementById("txtemail").value = "";
    document.getElementById("phnNum").value = "";
    document.getElementById("txtmsg").value = "";
     
    }

}


function validation(){

    var name = document.getElementById("txtname").value;
    var email = document.getElementById("txtemail").value;
    var phonenumber = document.getElementById("phnNum").value;
    var message = document.getElementById("txtmsg").value;

    var boo = false;

    var containNum = /\d/g;
    if(name == "" || containNum.test(name))
    {
        document.getElementById("nameError").style.display = "block";
        alert("inside naem");
        boo = false;
    }
    else{
        document.getElementById("nameError").style.display = "none";
        boo=true;
    }

        var emailregex =  /\u0040/;
    if(email == "" || !emailregex.test(email) || !/.com$/.test(email))
    {
        document.getElementById("emailError").style.display = "block";
        boo = false;
    }
    else{
        document.getElementById("emailError").style.display = "none";
        boo = true;
        
    }

    if(phonenumber == "" || isNaN(phonenumber) || phonenumber.length != 10 )
    {
        document.getElementById("phnNumError").style.display = "block";
        boo = false;
    }
    else{
        document.getElementById("phnNumError").style.display = "none";
        boo = true;
    }

    if(message == "")
    {
        document.getElementById("msgError").style.display = "block";
        boo = false;
    }
    else{
        document.getElementById("msgError").style.display = "none";
        boo = true;
    }


    return boo;

}