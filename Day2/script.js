function onSubmit() { 
    // alert ("link");
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;

    
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email",email);
    localStorage.setItem("number", number);

 /* localStorage.getItem("firstName");
    localStorage.getItem("lastName");
    localStorage.getItem("email");
    localStorage.getItem("number");
    console.log("Submit");*/


}

