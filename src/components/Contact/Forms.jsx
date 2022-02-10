import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

function Forms() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('gmail', 'template_60k676i', e.target, 'user_jWBF295ZL89zz4Nbl1CdS')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <form
      ref={ form }
      id="contact"
      onSubmit={ sendEmail }
    >
      <input
        type="text"
        name="subject"
      />
      <input
        type="text"
        name="name"
      />
      <input
        type="email"
        name="email"
      />
      <input
        type="text"
        name="phone"
      />
      <textarea
        name="message"
      />
    </form>
  )
}

export default Forms
