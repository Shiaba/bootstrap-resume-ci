function sendMail(contactForm) {
    emailjs.send("gmail", "rosie", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false;  // To block from loading a new page
}
/*
function sendMail() {
    var sendEmails = {
        name: document.getElementById("name").value,
        email: document.getElementById("emailadress").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_0x87949";
    const templateID = "template_5naxywl";

    emailjs.send(serviceID, templateID, sendEmails)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("emailadress").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message sent successfully!!");

        })
        .catch(err => console.log(err));

}
*/