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
      className="flex flex-col items-center justify-center w-full max-w-md"
      ref={ form }
      id="contact"
      onSubmit={ sendEmail }
    >
      <label htmlFor="subject">
        Assunto
      </label>
      <input
        id="subject"
        type="text"
        name="subject"
        placeholder="Ex.: Interesse em contratação"
      />
      <label htmlFor="name">
        Nome
      </label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Nome"
      />
      <label htmlFor="email">
        Email
      </label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Email"
      />
      <label htmlFor="phone">
        Telefone de contato
      </label>
      <input
        id="phone"
        type="text"
        name="phone"
        placeholder="ex.: (21) 99999-9999"
      />
      <label htmlFor="message">
        Mensagem
      </label>
      <textarea
        name="message"
      />
    </form>
  )
}

export default Forms
