import React, { useState } from 'react';
// import { validateEmail } from '../../utils/helpers';


function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
      }
      
    
      function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
      }

      
    return (
        <section className='contact-me'>
          <h1>Contact me</h1>
          <h3>402-206-9200</h3>
                <h3>
                    <a href="mailto:mailahnheidi@gmail.com">mailahnheidi@gmail.com</a>
                </h3>
                <h3>
                    <a href="https://github.com/hmailahn">GitHub</a>
                </h3>
                <h3>
                    <a href="https://www.linkedin.com/in/heidi-mailahn-15005a136/">LinkedIn</a>
                </h3>
                <form id="contact-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" defaultValue={name} onChange={handleChange} name="name" />
            </div>
            <div>
              <label htmlFor="email">Email address:</label>
              <input type="email" defaultValue={email} name="email" onChange={handleChange} />
            </div>
            <div>
            <label htmlFor="message">Message:</label>
            <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </section>
        );
}

export default ContactForm;
