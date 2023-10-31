
var emailjs="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"


(function () {
        emailjs.init("ErtuG5RWbvTQ40Que");
      })();
        // listen to the form submission
        document
          .getElementById("contact-form")
          .addEventListener("submit", function (event) {
            event.preventDefault();
  
            const serviceID = "service_6koh0hb";
            const templateID = "template_e6w0wlw";
            let nome = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let phoneNumber = document.getElementById("phoneNumber").value;
						let message = document.getElementById("message").value;
						console.log(message);
            var contactParam ={
                from_nome:nome,
                from_email:email,
                from_telefone:phoneNumber,
								from_message:message
            }
            // send the email here
            emailjs.send(serviceID, templateID, contactParam).then(
              (response) => {
                console.log("SUCCESS!", response.status, response.text);
                alert("SUCCESSO - Seu email foi registrado!");
              },
              (error) => {
                console.log("FAILED...", error);
                alert("FAILED...", error);
              }
            );
          });
