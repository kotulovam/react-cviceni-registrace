import { useState } from 'react';
import './style.css';

export const HomePage = () => {
  const [userName, setUserName] = useState('');
  const [country, setCountry] = useState('Česká republika');
  const [newsletterAccepted, setNewsletterAccepted] = useState(false);

  let message;
  if (userName === '') {
    message = <div className="message">Uživatelské jméno je povinný údaj</div>;
  }

  let checkboxMessage = newsletterAccepted
    ? 'a dostávat pravidelně novinky.'
    : 'a o novinky nemá zájem.';

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Uživatel ${userName} ze země ${country} se chce zaregistrovat ${checkboxMessage} `,
    );
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
          <label>
            <input
              checked={newsletterAccepted}
              onChange={(e) => setNewsletterAccepted(e.target.checked)}
              type="checkbox"
            />
            Chci pravidelně dostávat novinky do mé e-mailové schránky.
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
