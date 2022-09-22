const errorContainer = "validate";
const errorClass = "border-danger invalid-feedback";  
const validClass = "border-success"
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
    required: true,
    number:true,
    minlength:6,
    maxlength:13
  },
  message: {
    required: true,
    minlength:20
  },
};
const messages = {
  fullname: {
      required:"Nombre Completo requerido",
      minLength: jQuery.validator.format("Nombre Completo invalido"),
      maxlength:jQuery.validator.format("Nombre Completo invalido")
  },
  email: {
    required: "Email requerido",
    email: "Email invalido",
  },
  phone: {
      required:"Teléfono requerido",
      number:"Teléfono invalido",
      minLength: jQuery.validator.format("Longitud invalida"),
      maxlength:jQuery.validator.format("Longitud invalida"),
  },
  message: {
    required:"Mensaje requerido",
    minlength: jQuery.validator.format("Longitud minima 20 caracteres"),
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
    validClass,
    rules,
    messages,
    debug: true,
    submitHandler: (form) => sendEmail(form, alerts),/* sendEmail ==> sendemail.js */
};

const elementsForm = $("#form")[0].elements
for (let i = 0; i < elementsForm.length - 1; i++) {
  $(elementsForm[i]).val($(elementsForm[i]).val().trim())
}

$("#form").validate(options);
