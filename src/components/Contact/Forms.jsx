import emailjs from '@emailjs/browser';
import React, { useEffect, useRef, useState } from 'react';
import isEmail from 'validator/lib/isEmail';
import isMobilePhone from 'validator/lib/isMobilePhone';
import Input from './Input';
import { IoSend } from 'react-icons/io5';

function Forms() {
  const form = useRef();
  const [emailValue, setEmailValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setIsDisabled(!isEmail(emailValue) || !isMobilePhone(phoneValue, 'pt-BR'));
  }, [emailValue, phoneValue]);

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmailValue(value);
    } else if (name === 'phone') {
      const phoneNumber = value.replace(/[^\d]/g, '')
      if (phoneNumber.length < 3) {
        setPhoneValue(phoneNumber);
      } else if (phoneNumber.length < 8) {
        setPhoneValue(`(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`);
      } else {
        setPhoneValue(`(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7)}`);
      }
    }
  }

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_ao5htql', 'template_60k676i', e.target, 'user_jWBF295ZL89zz4Nbl1CdS')
      .then((result) => {
        alert('Email enviado com sucesso!');
        console.log(result.text);
      }, (error) => {
        alert('Ocorreu um erro ao enviar o email. Tente novamente mais tarde.');
        console.log(error.text);
      });
  }

  return (
    <form
      className="flex flex-col items-center justify-center w-full my-4 h-full
      scroll-smooth"
      ref={ form }
      id="contact"
      onSubmit={ sendEmail }
    >
      <h2
        className="text-center mt-4
        text-secondary md:text-7xl text-4xl font-bold font-black-ops py-2
        md:w-full"
      >
        Entre em contato, tire suas dúvidas
      </h2>
      <div
        className="flex flex-col md:flex-row items-center w-full my-4"
      >
        <div
          className="flex flex-col items-center justify-center w-full"
        >
          <Input
            id="subject"
            type="text"
            name="subject"
            label="Assunto"
            placeholder="Ex.: Interesse em contratação"
          />
          <Input
            id="name"
            type="text"
            name="name"
            label="Nome"
            placeholder="Nome"
          />
          <Input
            value={ emailValue }
            className={ isEmail(emailValue) ? 'bg-green-200' : 'bg-red-200' }
            id="email"
            type="email"
            name="email"
            label="Email"
            placeholder="example@example.com"
            onChange={ (e) => handleChange(e) }
          />
          <Input
            value={ phoneValue}
            className={ isMobilePhone(phoneValue, 'pt-BR') ? 'bg-green-200' : 'bg-red-200' }
            id="phone"
            type="text"
            name="phone"
            label="Telefone de Contato"
            placeholder="ex.: (21) 99999-9999"
            onChange={ (e) => handleChange(e) }
          />
        </div>
        <div
          className="flex flex-col justify-center items-center w-full
          h-full md:ml-5"
        >
          <label
            htmlFor="message"
            className="text-gray-700 font-bold my-3 text-2xl"
          >
            Mensagem
          </label>
          <textarea
            className="px-6 py-4 border border-gray-400 rounded-lg focus:outline-none 
                  focus:border-gray-500 w-full font-medium text-lg
                  md:h-[400px] h-[200px] resize-none
                  b-gray-200 border-l-2"
            name="message"
          />
        </div>
      </div>
      <button
        type="submit"
        className="disabled:bg-red-300 cursor-pointer bg-green-500
          md:hover:scale-110 text-white font-bold py-2 px-4 rounded-lg
          mt-5 w-full text-2xl"
        disabled={ isDisabled }
      >
        <div
          className="flex items-center justify-center w-full"
        >
          { isDisabled ? <span className="ml-2">Preencha todos os campos</span> : 'Enviar' }
          <IoSend className={`${isDisabled && 'hidden'} ml-2`} />
        </div>
      </button>
    </form>
  )
}

export default Forms
