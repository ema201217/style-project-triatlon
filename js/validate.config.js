const errorContainer = "#fullname-error, #email-error, #message-error";
const errorClass = "text-danger";
const rules = {
  fullname: {
    required: true,
    minlength:5,
    maxlength:40
  },
  email: {
    required: true,
    email: true,
  },
  phone: {
    number:true,
    minlength:6,
    maxlength:13
  },
  message: {
    required: true,
  },
};
const messages = {
  fullname: {
      required:"El nombre completo es requerido",
      minlength: jQuery.validator.format("Ingrese su nombre completo"),
      maxlength:jQuery.validator.format("Se supero los 40 caracteres")
  },
  email: {
    required: "El email es requerido",
    email: "Ingrese un email valido",
  },
  message: "Ingrese un mensaje",
  phone: {
      number:"Ingrese un teléfono valido",
      minlength: jQuery.validator.format("Ingrese un teléfono valido"),
      maxlength:jQuery.validator.format("Ingrese un teléfono valido"),
  }
};
const alerts = {
  success: () =>
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Mensaje enviado",
      showConfirmButton: false,
      timer: 2000,
    }),
  error: () =>
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Error al enviar el mensaje",
      showConfirmButton: false,
      timer: 2000,
    }),
};
const options = {
    errorContainer,
    errorClass,
    rules,
    messages,
    debug: true,
    submitHandler: (form) => sendEmail(form, alerts), /* sendEmail ==> sendemail.js */
};

const elementsForm = $("#form")[0].elements
for (let i = 0; i < elementsForm.length - 1; i++) {
  $(elementsForm[i]).val($(elementsForm[i]).val().trim())
}

$("#form").validate(options);
