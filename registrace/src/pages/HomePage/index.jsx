import { useState } from 'react';
import './style.css';

export const HomePage = () => {
  const [userName, setUserName] = useState('');
  const [country, setCountry] = useState('Česká republika');

  let message;
  if (userName === '') {
    message = <div className="message">Uživatelské jméno je povinný údaj</div>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Uživatel ${userName} ze země ${country} se chce zaregistrovat.`);
  };

  return (
    <div className="container">
      <main>
        <form onSubmit={handleSubmit}>
          <p>Uživatelské jméno:</p>
          <input
            type="text"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <label>
            Země původu:
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="Chorvatsko">Chorvatsko</option>
              <option value="Česká republika">Česká republika</option>
              <option value="Polsko">Polsko</option>
              <option value="Slovenská republika">Slovenská republika</option>
            </select>
          </label>
          <button type="submit" disabled={userName === ''}>
            Registrovat
          </button>
        </form>
        {message}
      </main>
    </div>
  );
};
