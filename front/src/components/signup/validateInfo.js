export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Username required";
    if(navigator.language.startsWith('es'))
    errors.username = "Usuario requerido";
  }

  if (!values.firstName.trim()) {
    errors.firstName = "First Name required";
    if(navigator.language.startsWith('es'))
    errors.firstName = "Primer nombre requerido";
  }

  if (!values.lastName.trim()) {
    errors.lastName = "Last Name required";
    if(navigator.language.startsWith('es'))
    errors.lastName = "Apellido requerido";
  }

  if (!values.secondName.trim()) {
    errors.secondName = "Second Name required";
    if(navigator.language.startsWith('es'))
    errors.secondName = "Segundo nombre requerido";
  }

  if (!values.school.trim()) {
    errors.school = "School  required";
    if(navigator.language.startsWith('es'))
    errors.school = "Colegio requerido";
  }

  if (!values.phone) {
    errors.phone = "Phone number required";
    if(navigator.language.startsWith('es'))
    errors.phone = "Numero de celular requerido";
  } else if (!/\d{10}$/.test(values.phone)) {
    errors.phone = "Phone number is invalid";
    if(navigator.language.startsWith('es'))
    errors.phone = "Numero de celular requerido";
  }

  if (!values.email) {
    errors.email = "Email required";
    if(navigator.language.startsWith('es'))
    errors.email = "Email requerido";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
    if(navigator.language.startsWith('es'))
    errors.email = "Email invalido";
  }
  if (!values.password) {
    errors.password = "Password is required";
    if(navigator.language.startsWith('es'))
    errors.password = "Contraseña requerida";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
    if(navigator.language.startsWith('es'))
    errors.password = "Contraseña requiere al menos 6 caracteres";
  }

  if (!values.password2) {
    errors.password2 = "Password is required";
    if(navigator.language.startsWith('es'))
    errors.password2 = "Contraseña requerida";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Passwords do not match";
    if(navigator.language.startsWith('es'))
    errors.password2 = "Contraseñas no coinciden";
  }
  return errors;
}
