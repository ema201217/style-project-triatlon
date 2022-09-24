"use strict";
const a = ["xkeysib","a4aaac80dae33ad2158ef5e9e64b149efe653d5323728fb27e0a144ac1a4652c","zWG1gpwrJ7XqdTyN"];

const sendEmail = (form, alerts = {}) => {

  const elementsForm = $("#form :input");
for (let i = 0; i < elementsForm.length - 1; i++) {
  $(elementsForm[i]).val($(elementsForm[i]).val().trim());
}
  const $fullname = $(elementsForm[0]).val();
  const $email = $(elementsForm[1]).val();
  const $phone = $(elementsForm[2]).val();
  const $message = $(elementsForm[3]).val();
  const emailTo = "style.triatlon@gmail.com";
  const htmlContent = `Nombre completo: <strong>${$fullname}</strong>
                        <br>
                        Email: <strong>${$email}</strong>
                        <br>
                        Teléfono: <strong>${$phone}</strong>
                        <br>
                        Mensaje: <strong>${$message}</strong>
                      `;

  const data = {
    name: "Web Style",
    subject: "Contacto",
    to: [{ email: emailTo, name: "Style Web Triatlón" }],
    sender: {
      name: $fullname,
      email: $email,
    },
    type: "classic",
    htmlContent: htmlContent,
  };

   $.ajax({
    url: "https://api.sendinblue.com/v3/smtp/email",
    type: "POST",
    headers: {
      "api-key": a.join('-'),
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: JSON.stringify(data),
  })
    .done((_, status) => {
      console.log(status);
      status === "success" && (
        alerts.success(),
        form.reset()
      )
    })
    .fail((err) => {
      console.log(err);
      alerts.error();
    });
};
