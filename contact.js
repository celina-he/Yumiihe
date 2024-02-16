
// sending emails
message = "Message Sent Sucessfully"

function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "yumiihewebsite@gmail.com",
        Password : "SuperDuperCoolWebsite963",
        To : 'yoshiiteo@gmail.com',
        From : doccument.getElementById("email").value,
        Subject : "Contact Form Submission",
        Body : "Name: " + doccument.getElementById("name").value + 
            "<br> Email: " + doccument.getElementById("email").value +
            "<br> Message: " + doccument.getElementById("message").value
    }).then( 
        message => alert(message)
    );
}