import React, { useState, useEffect } from 'react';

const FlightBooker = () => {
  const [flightType, setFlightType] = useState('one-way');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const getTodayDate = () => new Date().toISOString().split('T')[0];

  useEffect(() => {
    const today = new Date(getTodayDate());
    const dep = new Date(departureDate);
    const ret = new Date(returnDate);

    if (!departureDate || dep < today) {
      setIsFormValid(false);
      return;
    }

    if (flightType === 'return') {
      if (!returnDate || ret < dep) {
        setIsFormValid(false);
        return;
      }
    }

    setIsFormValid(true);
  }, [flightType, departureDate, returnDate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (flightType === 'one-way') {
      alert(`You have booked a one-way flight on ${departureDate}.`);
    } else {
      alert(`You have booked a return flight from ${departureDate} to ${returnDate}.`);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Flight Booker</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label>
          Flight Type:
          <select
            value={flightType}
            onChange={(e) => setFlightType(e.target.value)}
            style={styles.input}
          >
            <option value="one-way">One-Way Flight</option>
            <option value="return">Return Flight</option>
          </select>
        </label>

        <label>
          Departure Date:
          <input
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            min={getTodayDate()}
            style={styles.input}
          />
        </label>

        {flightType === 'return' && (
          <label>
            Return Date:
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              min={departureDate || getTodayDate()}
              style={styles.input}
            />
          </label>
        )}

        <button type="submit" disabled={!isFormValid} style={styles.button(isFormValid)}>
          Book Flight
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    fontFamily: 'Arial',
    backgroundColor: '#f9f9f9'
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  input: {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
    boxSizing: 'border-box'
  },
  button: (enabled) => ({
    padding: '10px',
    backgroundColor: enabled ? '#007bff' : '#ccc',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: enabled ? 'pointer' : 'not-allowed'
  })
};

export default FlightBooker;
