import { useState } from 'react';
import '../styles/General.css';

function General() {
  const [editMode, setEditMode] = useState(true);
  const [name, setName] = useState('John Doe');
  const [location, setLocation] = useState('Toronto, CA A1B 2C3');
  const [phone, setPhone] = useState('(999)-999-9999');
  const [email, setEmail] = useState('example@mail.com');

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleLocation = (e) => {
    setLocation(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
  };
  function handleEdit() {
    setEditMode(true);
  }

  return (
    <div id="general-container">
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <h1>General Information</h1>
          <label>
            <span>Full Name: </span>
            <input
              type="text"
              onChange={handleName}
              value={name}
              placeholder="John Doe"
            />
          </label>
          <label>
            <span>Location: </span>
            <input
              type="text"
              onChange={handleLocation}
              value={location}
              placeholder="Toronto CA, A1B 2C3"
            />
          </label>
          <label>
            <span>Phone Number: </span>
            <input
              type="text"
              onChange={handlePhone}
              value={phone}
              placeholder="(999)-999-9999"
            />
          </label>
          <label>
            <span>Email: </span>
            <input
              type="text"
              onChange={handleEmail}
              value={email}
              placeholder="example@mail.com"
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      ) : (
        <>
          <header>
            <h1>{name}</h1>
          </header>
          <div id="information-container">
            {location} • Phone: {phone} • Email: {email}
          </div>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
}

export default General;
