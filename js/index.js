addRegister = () => {

    let spam = document.getElementById("spam");
    let name = document.getElementById("name").value;
    let subject = document.getElementById("subject").value;
    let email = document.getElementById("email").value;
    let contact = document.getElementById("contact").value;

    if (spam.checked) { 
        alert("Welcome" + " " + name +"!" + " " + "Thank you for your interest in" +" " + subject + "!" + " "  + "We will contact you via the email provided:" + " "+ email + ", or alternatively on the phone number:" +" "+ contact + ".");
      } else {
        alert("Well,well,well... why dont you want to sign up for our newsletter...you dont seem to be that interested"+" "+name+"!"+" "+"If you want to sign up,you better CHECK that spam box!" );
      }


    console.log(spam,name,subject,email,contact);
}





