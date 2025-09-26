import React, { useState } from 'react';

const TestMatematica = () => {
  // Stato per le risposte
  const [risposte, setRisposte] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: ''
  });

  // Funzione per gestire il cambio delle risposte
  const handleChange = (event) => {
    const { name, value } = event.target;
    setRisposte((prevRisposte) => ({
      ...prevRisposte,
      [name]: value
    }));
  };

  // Funzione per gestire l'invio del modulo
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Risposte inviate:', risposte);
    alert('Risposte inviate! Guarda la console per i dettagli.');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Domanda 1: Quanto fa 5 + 3?</legend>
          <input
            type="radio"
            id="q1a"
            name="q1"
            value="6"
            onChange={handleChange}
            checked={risposte.q1 === '6'}
          />
          <label htmlFor="q1a">6</label><br />

          <input
            type="radio"
            id="q1b"
            name="q1"
            value="7"
            onChange={handleChange}
            checked={risposte.q1 === '7'}
          />
          <label htmlFor="q1b">7</label><br />

          <input
            type="radio"
            id="q1c"
            name="q1"
            value="8"
            onChange={handleChange}
            checked={risposte.q1 === '8'}
          />
          <label htmlFor="q1c">8</label><br />

          <input
            type="radio"
            id="q1d"
            name="q1"
            value="9"
            onChange={handleChange}
            checked={risposte.q1 === '9'}
          />
          <label htmlFor="q1d">9</label><br />
        </fieldset>

        <fieldset>
          <legend>Domanda 2: Quanto fa 10 - 4?</legend>
          <input
            type="radio"
            id="q2a"
            name="q2"
            value="5"
            onChange={handleChange}
            checked={risposte.q2 === '5'}
          />
          <label htmlFor="q2a">5</label><br />

          <input
            type="radio"
            id="q2b"
            name="q2"
            value="6"
            onChange={handleChange}
            checked={risposte.q2 === '6'}
          />
          <label htmlFor="q2b">6</label><br />

          <input
            type="radio"
            id="q2c"
            name="q2"
            value="4"
            onChange={handleChange}
            checked={risposte.q2 === '4'}
          />
          <label htmlFor="q2c">4</label><br />

          <input
            type="radio"
            id="q2d"
            name="q2"
            value="3"
            onChange={handleChange}
            checked={risposte.q2 === '3'}
          />
          <label htmlFor="q2d">3</label><br />
        </fieldset>

        <fieldset>
          <legend>Domanda 3: Quanto fa 7 x 2?</legend>
          <input
            type="radio"
            id="q3a"
            name="q3"
            value="12"
            onChange={handleChange}
            checked={risposte.q3 === '12'}
          />
          <label htmlFor="q3a">12</label><br />

          <input
            type="radio"
            id="q3b"
            name="q3"
            value="14"
            onChange={handleChange}
            checked={risposte.q3 === '14'}
          />
          <label htmlFor="q3b">14</label><br />

          <input
            type="radio"
            id="q3c"
            name="q3"
            value="16"
            onChange={handleChange}
            checked={risposte.q3 === '16'}
          />
          <label htmlFor="q3c">16</label><br />

          <input
            type="radio"
            id="q3d"
            name="q3"
            value="15"
            onChange={handleChange}
            checked={risposte.q3 === '15'}
          />
          <label htmlFor="q3d">15</label><br />
        </fieldset>

        <fieldset>
          <legend>Domanda 4: Quanto fa 20 ÷ 4?</legend>
          <input
            type="radio"
            id="q4a"
            name="q4"
            value="3"
            onChange={handleChange}
            checked={risposte.q4 === '3'}
          />
          <label htmlFor="q4a">3</label><br />

          <input
            type="radio"
            id="q4b"
            name="q4"
            value="4"
            onChange={handleChange}
            checked={risposte.q4 === '4'}
          />
          <label htmlFor="q4b">4</label><br />

          <input
            type="radio"
            id="q4c"
            name="q4"
            value="5"
            onChange={handleChange}
            checked={risposte.q4 === '5'}
          />
          <label htmlFor="q4c">5</label><br />

          <input
            type="radio"
            id="q4d"
            name="q4"
            value="6"
            onChange={handleChange}
            checked={risposte.q4 === '6'}
          />
          <label htmlFor="q4d">6</label><br />
        </fieldset>

        <button type="submit">Invia Risposte</button>
      </form>
    </div>
  );
};

export default TestMatematica;
