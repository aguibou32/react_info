import { useState } from 'react';
import './SignUp.css'
export default function SignUp() {


  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    joinedNewsLetter: true
  });

  function handleChange(event) {

    // event.preventDefault();

    const { name, value, checked, type } = event.target;

    setFormData((prevFormDataState) => {
      return {
        ...prevFormDataState,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }


  function handleSubmit(event) {
    event.preventDefault();

    if (formData.password === formData.confirmPassword) {
      console.log("Successfully signed in !");
    } else {
      console.log("Passwords do not match !");
      return ; // In case the passwords do not match, the program will stop running on this line. Meaning the bellow if statement will not run
    }

    if (formData.joinedNewsLetter === true) {
      console.log("Thanks for signing up to our newsletter !");
    }
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email address"
          className="form--input"
        />
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="form--input"
        />
        <input
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm password"
          className="form--input"
        />

        <div className="form--marketing">
          <input
            name="joinedNewsLetter"
            id="joinedNewsLetter"
            checked={formData.joinedNewsLetter}
            type="checkbox"
            onChange={handleChange}
          />
          <label htmlFor="joinedNewsLetter">I want to join the newsletter</label>
        </div>
        <button
          type="submit"
          className="form--submit"
        >
          Sign up
        </button>
      </form>
    </div>
  )
}