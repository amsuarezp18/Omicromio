import React from "react";
import useFormSignup from "./useForm";
import validate from "./validateInfo";
import "./FormSignUp.css";
import { FormattedMessage } from "react-intl";

export default function Form({ submitForm }) {
  const { handleChange, values, handleSubmit, errors } = useFormSignup(
    submitForm,
    validate,
  );
  let roleTeacher = "Teacher";
  let roleStdent = "Student";
  let rolePrincipal = "Principal";
  let enterUsername = "Enter username"
  let enterFName = "Enter Fisrt name"
  let enterSName = "Enter Second name"
  let enterLName = "Enter Last name"
  let enterEmail = "Enter email"
  let enterSchool = "Enter school"
  let enterPhone = "Enter phone number"
  let enterPassword = "Enter password"
  let enterConfirm = "Confirm your password"

  if (navigator.language.startsWith("es")) {
    roleTeacher = "Profesor";
    roleStdent = "Estudiante";
    rolePrincipal = "Rector";
    enterUsername = "Ingresa usuario"
    enterFName = "Ingresa primer nombre"
    enterSName = "Ingresa segundo nombre"
    enterLName = "Ingresa apellido"
    enterEmail = "Ingresa email"
    enterSchool = "Ingresa colegio"
    enterPhone = "Ingresa celular"
    enterPassword = "Ingresa contraseña"
    enterConfirm = "Confirma contraseña"
  }

  return (
    <div className="section-as-signup">
      <div className="container-step-signup">
        <form className="form-signup" onSubmit={handleSubmit}>
          <div className="py-3 border-gray border-top ">
            <div className="container-grid-up bd-up">
              <div className="bd-grid-up">
                <div className="form-inputs-up">
                  {/* Username */}
                  <label htmlFor="username" className="form-label">
                    <FormattedMessage id="login.main.username" />
                  </label>
                  <input
                    className="form-input-up"
                    type="text"
                    name="username"
                    placeholder={enterUsername}
                    value={values.username}
                    onChange={handleChange}
                    id="username"
                  />
                  {errors.username && <p>{errors.username}</p>}
                </div>

                {/* First name */}
                <div className="form-inputs-up">
                  <label htmlFor="firstName" className="form-label">
                    <FormattedMessage id="sign.up.first.name" />
                  </label>
                  <input
                    className="form-input-up"
                    type="text"
                    name="firstName"
                    placeholder={enterFName}
                    value={values.firstName}
                    onChange={handleChange}
                    id="firstName"
                  />
                  {errors.firstName && <p>{errors.firstName}</p>}
                </div>

                {/* Second name */}
                <div className="form-inputs-up">
                  <label htmlFor="secondName" className="form-label">
                    <FormattedMessage id="sign.up.second.name" />
                  </label>
                  <input
                    className="form-input-up"
                    type="text"
                    name="secondName"
                    placeholder={enterSName}
                    value={values.secondName}
                    onChange={handleChange}
                    id="secondName"
                  />
                  {errors.secondName && <p>{errors.secondName}</p>}
                </div>

                {/* Last name */}
                <div className="form-inputs-up">
                  <label htmlFor="lastName" className="form-label">
                    <FormattedMessage id="sign.up.last.name" />
                  </label>
                  <input
                    className="form-input-up"
                    type="text"
                    name="lastName"
                    placeholder={enterLName}
                    value={values.lastName}
                    onChange={handleChange}
                    id="lastName"
                  />
                  {errors.lastName && <p>{errors.lastName}</p>}
                </div>

                {/* Email */}
                <div className="form-inputs-up">
                  <label htmlFor="email" className="form-label">
                    <FormattedMessage id="sign.up.email" />
                  </label>
                  <input
                    className="form-input-up"
                    type="email"
                    name="email"
                    placeholder={enterEmail}
                    value={values.email}
                    onChange={handleChange}
                    id="email"
                  />
                  {errors.email && <p>{errors.email}</p>}
                </div>
              </div>
              <div className="bd-grid-up">
                {/* School */}
                <div className="form-inputs-up">
                  <label htmlFor="school" className="form-label">
                    <FormattedMessage id="sign.up.school" />
                  </label>
                  <input
                    className="form-input-up"
                    type="text"
                    name="school"
                    placeholder={enterSchool}
                    value={values.school}
                    onChange={handleChange}
                    id="school"
                  />
                  {errors.school && <p>{errors.school}</p>}
                </div>

                <div className="form-inputs-up">
                  <label htmlFor="rol" className="form-label">
                    <FormattedMessage id="sign.up.role" />
                  </label>
                  <select className="width-role" name="rol" id="rol">
                    <option value="profesor">{roleTeacher}</option>
                    <option value="estudiante">{roleStdent}</option>
                    <option value="rector">{rolePrincipal}</option>
                  </select>
                </div>

                <div className="form-inputs-up">
                  <label htmlFor="phone" className="form-label">
                    <FormattedMessage id="sign.up.cellphone" />
                  </label>
                  <input
                    className="form-input-up"
                    type="text"
                    name="phone"
                    placeholder={enterPhone}
                    value={values.phone}
                    onChange={handleChange}
                    id="phone"
                  />
                  {errors.phone && <p>{errors.phone}</p>}
                </div>

                {/* Password 1 */}
                <div className="form-inputs-up">
                  <label htmlFor="password" className="form-label">
                    <FormattedMessage id="login.main.password" />
                  </label>
                  <input
                    className="form-input-up"
                    type="password"
                    name="password"
                    placeholder={enterPassword}
                    value={values.password}
                    onChange={handleChange}
                    id="password"
                  />
                  {errors.password && <p>{errors.password}</p>}
                </div>
                {/* Password 2 */}
                <div className="form-inputs-up">
                  <label htmlFor="password2" className="form-label">
                    <FormattedMessage id="sign.up.confirm.pass" />
                  </label>
                  <input
                    className="form-input-up"
                    type="password"
                    name="password2"
                    placeholder={enterConfirm}
                    value={values.password2}
                    onChange={handleChange}
                    id="password2"
                  />
                  {errors.password2 && <p>{errors.password2}</p>}
                </div>
              </div>
            </div>
            <div className="d-flex flex-row justify-content-center align-items-center px-3 mb-3">
              <button
                className="btn btn-secondary text-uppercase button--color-purple"
                type="submit"
              >
                <FormattedMessage id="login.register" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
