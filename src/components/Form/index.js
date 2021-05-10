import React, { useState } from 'react';
import './index.scss';

export default function Form() {
  const sizeCompanies = [{
    size: 'micro',
    label: 'Hasta 10',
  }, {
    size: 'small',
    label: 'Entre 11 y 50',
  }, {
    size: 'medium',
    label: 'Entre 51 y 250',
  }, {
    size: 'big',
    label: 'Mayor a 250',
  }];
  const initialData = {
    name: '',
    email: '',
    nameCompany: '',
    sizeCompany: '',
    phone: '',
  };
  const [contact, setContact] = useState(initialData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendContact = () => {
    if (!contact.name || !contact.email || !contact.nameCompany || !contact.sizeCompany) {
      return false;
    }
    return fetch(`${process.env.REACT_APP_API_URL}contacts`, {
      method: 'POST',
      body: JSON.stringify(contact),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        document.getElementById('option-by-default').selected = true;
        setContact(initialData);
        return true;
      });
  };
  return (
    <section className="form-container">
      <div className="toScroll" id="form" />
      <div className="form-box">
        <form>
          <div className="left">
            <div className="field-box">
              <h2>¡Completa para que te contacten!</h2>

              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="right">
            <div className="field-box">
              <span>Nombre</span>
              <input onChange={handleChange} value={contact.name} type="text" name="name" id="name" />
            </div>
            <div className="field-box">
              <span>Empresa</span>
              <input onChange={handleChange} value={contact.nameCompany} type="text" name="nameCompany" id="nameCompany" />
            </div>
            <div className="field-box">
              <span>Tamaño de empresa</span>
              <select onChange={handleChange} name="sizeCompany" id="sizeCompany">
                <option selected disabled id="option-by-default">Seleccion cantidad de empleados</option>
                {
                  sizeCompanies.map((elem) => {
                    return (<option value={elem.size}>{elem.label}</option>);
                  })
                }
              </select>
            </div>
            <div className="field-box">
              <span>Mail</span>
              <input onChange={handleChange} value={contact.email} type="text" name="email" id="email" />
            </div>
          </div>
        </form>
        <div className="send-box">
          <button onClick={sendContact} type="button" className="btn" id="send-contact">Enviar</button>
        </div>
      </div>
    </section>
  );
}
