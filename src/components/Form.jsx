import { useState } from "react"

export default function Form() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employment: "",
    favColor: ""
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    });

  }

  function handleSubmit(event){
    event.preventDefault();

  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="firstName"
        type="text"
        value={formData.firstName}
        placeholder="First Name"
        onChange={handleChange}
      />

      <input
        name="lastName"
        type="text"
        value={formData.lastName}
        placeholder="Last Name"
        onChange={handleChange}
      />

      <input
        name="email"
        type="text"
        value={formData.email}
        placeholder="Email"
        onChange={handleChange}
      />

      <textarea
        name="comments"
        value={formData.comments}
        placeholder="comments"
        onChange={handleChange}
      />

      <input
        name="isFriendly"
        type="checkbox"
        id="isFriendly"
        checked={formData.isFriendly}
        onChange={handleChange}
      />
      <label htmlFor="isFriendly">Are you friendly ?</label>


      <br />
      <br />

      <fieldset>
        <legend>Current employment status</legend>

        <input
          type="radio"
          id="unemployed"
          name="employment"
          value="unemployed"
          checked={formData.employment === "unemployed"}
          onChange={handleChange}
        />
        <label htmlFor="unemployed">Unemployed</label>
        <br />


        <input
          type="radio"
          id="part-time"
          name="employment"
          value="part-time"
          checked={formData.employment === "part-time"}
          onChange={handleChange}
        />
        <label htmlFor="part-time">Part-time</label>
        <br />


        <input
          type="radio"
          id="full-time"
          name="employment"
          value="full-time"
          checked={formData.employment === "full-time"}
          onChange={handleChange}
        />
        <label htmlFor="full-time">Full-time</label>
        <br />


        <label htmlFor="favColor">What is your favorite color?</label>
        <br />
        <select
          id="favColor"
          value={formData.favColor}
          onChange={handleChange}
          name="favColor"
        >
          <option value="">--Choose--</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>

        <button type="submit">Submit</button>

      </fieldset>

    </form>
  )
}