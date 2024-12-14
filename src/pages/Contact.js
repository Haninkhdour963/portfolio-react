import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prepare form data from state values
    const formData = new FormData(e.target);
    formData.append("access_key", "c2065045-61df-4012-8d97-1b71fe0e5f42");  // Add your access key here

    // Convert FormData to JSON
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        console.log("Success", res);
        Swal.fire({
          title: "Success",
          text: "Message sent successfully!",
          icon: "success"
        });
        // Reset the form after successful submission
        setEmail('');
        setMessage('');
      } else {
        Swal.fire({
          title: "Error",
          text: "Something went wrong. Please try again.",
          icon: "error"
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      Swal.fire({
        title: "Error",
        text: "There was a problem with the submission. Please try again later.",
        icon: "error"
      });
    }
  };

  return (
    <div id="contact" className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
  name="message"
  placeholder="Your Message"
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  required
  rows="5"
  cols="50"
  style={{ color: 'black', fontSize: '14px' }}  // Makes text black and readable
></textarea>
        <button type="submit">Send</button>
      </form>
      <div className="contact-info">
        <p>If you prefer, you can reach me through the following platforms:</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/haneen-khdour/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/Haninkhdour963" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
