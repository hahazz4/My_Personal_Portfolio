// function sendEmail(event){
//     console.log(process.env.SERVICE_ID);
//     console.log(process.env.TEMPLATE_ID);

//     event.preventDefault();
    
//     //Gets the form data
//     var form = document.getElementById('contactForm');
//     var name = form.elements.userName.value;
//     var email = form.elements.userEmail.value;
//     var message = form.elements.userMessage.value;

//     //Sending the email
//     emailjs.send(process.env.SERVICE_ID, process.env.TEMPLATE_ID, {
//         from_name: name,
//         from_email: email,
//         message: message
//     }).then(function (response){
//         console.log('Email sent successfully:', response.status, response.text);

//         //Resets the form if email is sent
//         form.reset();
//         alert('Thank you for your message. I will try my best to get back to you ASAP!');
//     }).catch(function (error){
//         console.log('Error sending email:', error);
//         alert('Sorry, the message did not send successfully. Please try again.');
//     });
// }
 
// //triggers sendEmail function to the form's submit event
// var form = document.getElementById('contactForm');
// form.addEventListener('submit', sendEmail);

function sendEmail(){
    var userName = encodeURIComponent(document.getElementsByName('userName')[0].value);
    var userEmail = encodeURIComponent(document.getElementsByName('userEmail')[0].value);
    var subject = encodeURIComponent(document.getElementsByName('subject')[0].value);
    var body = encodeURIComponent(document.getElementsByName('body')[0].value);

    var mailtoUrl = "mailto:asim.zeerak@gmail.com?subject=" + subject + "&body=" + body + "%0A%0AFrom%3A%20" + userName + "%0AEmail%3A%20" + userEmail;

    window.location.href = mailtoUrl;

    //Outputs a message to user to show if the email went through successfully.
    document.getElementById("status_message").textContent = "Thank you, your default mail app is setting your message up. Remember to submit it on the app. I will get back to you as soon as I can :)";
}