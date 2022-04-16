import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';


function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    const [errorMessage, setErrorMessage] = useState('');

    

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
              } else {
                setErrorMessage('');
              }
            } else {
                if (!e.target.value.length) {
                  setErrorMessage(`${e.target.name} is required.`);
                } else {
                  setErrorMessage('');
                }
              
          }  
          if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
          }
        setFormState({...formState, [e.target.name]: e.target.value })
      }
      
     
      
      function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
      }

    return (
        <section id="contact" className='contact-me'>
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
              <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
            </div>
            <div>
              <label htmlFor="email">Email address:</label>
              <input type="email" defaultValue={email} name="email" onBlur={handleChange} />
            </div>
            <div>
            <label htmlFor="message">Message:</label>
            <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
            </div>
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
            <button type="submit">Submit</button>
          </form>
        </section>
        );
}

export default ContactForm;
