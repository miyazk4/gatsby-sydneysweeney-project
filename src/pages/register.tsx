import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import registerStyles from "./register.module.scss"
import cn from "classnames"
import Head from "../components/head"

interface FormInputs {
  email?: string
  firstName?: string
  lastName?: string
}

const Register = () => {
  const initialState = {
    email: "",
    firstName: "",
    lastName: "",
  }

  const [values, setValues] = useState<FormInputs>(initialState)
  const [error, setErrors] = useState<FormInputs>({})
  console.log(initialState)

  const handleChange = e => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  const validation = () => {
    const errors: FormInputs = {} // É outro objeto
    if (!values.firstName) {
      errors.firstName = "Please fill out this field"
    } else if (values.firstName.length < 3) {
      errors.firstName =
        "First name must be at least three(3) characters long. Please try again."
    }
    if (!values.lastName) {
      errors.lastName = "Please fill out this field"
    } else if (values.lastName.length < 3) {
      errors.lastName =
        "Last name must be at least three(3) characters long. Please try again."
    }
    if (!values.email) {
      errors.email = "Please fill out this field"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email was not written properly. Please try again."
    }
    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = e => {
    if (validation()) {
      submit()

      return true
    }
    e.preventDefault()
  }

  const submit = () => {
    console.log("submitted successfully")
  }

  console.log(values)

  return (
    <Layout>
      <Head title="Register" />
      <div className={registerStyles.wrapper}>
        <h1 className={registerStyles.title}>Register</h1>
        <p className={registerStyles.information}>
          If you want to keep updated about Sydney Sweeney's activity, please
          register below to receive our newsletter.
        </p>
        <div className={registerStyles.formWrapper}>
          <h2 className={registerStyles.subtitle}>
            The Sydney Sweeney Registration form:
          </h2>
          <div className={registerStyles.formContainer}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className={registerStyles.form}
            >
              <div className={registerStyles.inputContainer}>
                <input
                  type="email"
                  name="email"
                  defaultValue={values.email}
                  onChange={handleChange}
                  placeholder="example@example.com"
                  className={cn(registerStyles.formInput, {
                    [registerStyles.errorInput]: error.email,
                  })}
                />
                {error.email && (
                  <p className={registerStyles.error}>{error.email}</p>
                )}
              </div>
              <div className={registerStyles.inputContainer}>
                <input
                  type="text"
                  name="firstName"
                  defaultValue={values.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  className={cn(registerStyles.formInput, {
                    [registerStyles.errorInput]: error.firstName,
                  })}
                />
                {error.firstName && (
                  <p className={registerStyles.error}>{error.firstName}</p>
                )}
              </div>
              <div className={registerStyles.inputContainer}>
                <input
                  type="text"
                  name="lastName"
                  defaultValue={values.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  className={cn(registerStyles.formInput, {
                    [registerStyles.errorInput]: error.lastName,
                  })}
                />
                {error.lastName && (
                  <p className={registerStyles.error}>{error.lastName}</p>
                )}
              </div>
              <div className={registerStyles.btnContainer}>
                <button className={registerStyles.btn} type="submit">
                  Subscribe!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Register
