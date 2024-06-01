
     
   function checkEmail(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

let email = "apple@email.com";
if (checkEmail(email)) {
    alert("Email goo.");
} else {
    alert("Email not.");
}
