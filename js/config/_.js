"use strict";


const sendEmail = (form, alerts = {}) => {

  const elementsForm = $("#form :input");
for (let i = 0; i < elementsForm.length - 1; i++) {
  $(elementsForm[i]).val($(elementsForm[i]).val().trim());
}
  const $fullname = $(elementsForm[0]).val();
  const $email = $(elementsForm[1]).val();
  const $phone = $(elementsForm[2]).val();
  const $message = $(elementsForm[3]).val();
  const emailTo = "styleeventosdeportivos@gmail.com";
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
      status === "success" ? (
        alerts.success(),
        form.reset()
      ) : (alerts.error())
    })
    .fail(() => {
      alerts.error();
    });
};
