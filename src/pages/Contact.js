import React from 'react';

const Contact = () => {
  return (
    <div>
      <h2>Contact Us</h2>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" />
        </div>
        <div>
          <label>Message:</label>
          <textarea></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
