import { useState } from 'react';
import './style.css';

export const HomePage = () => {
  const [userName, setUserName] = useState('');

  let message;
  if (userName === '') {
    message = <div className="message">Uživatelské jméno je povinný údaj</div>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Uživatel ${userName} se chce zaregistrovat.`);
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
          <button type="submit" disabled={userName === ''}>
            Registrovat
          </button>
        </form>
        {message}
      </main>
    </div>
  );
};
