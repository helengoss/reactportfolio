import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /*the form now works as I have created a formspree link for handling the email */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://formspree.io/f/xkopeqky", {
      method: "POST",
      body: new FormData(e.target),
      headers: { Accept: "application/json" },
    });
    if (response.ok) {
      setSubmitted(true);
    }
  };

  // usestate is used here as first name is captured and inserted, its a nice personal touch
  if (submitted) {
    return (
      <div style={styles.page}>
        <h2>Thanks, {formData.firstName}!</h2>
        <p>Your message has been received. I'll be in touch soon.</p>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <h2>Contact Me</h2>
      <p>Feel free to contact me about anything you need to know</p>
      <form onSubmit={handleSubmit} style={styles.form}>

        <div style={styles.row}>
          <div style={styles.field}>
            <label style={styles.label}>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
          <div style={styles.field}>
            <label style={styles.label}>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
        </div>

        <div style={styles.field}>
          <label style={styles.label}>Email <span style={styles.required}>*</span></label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.field}>
          <label style={styles.label}>Comment</label>
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            rows={5}
            style={{ ...styles.input, resize: "vertical" }}
          />
        </div>

        <button type="submit" style={styles.button}>Send Message</button>
      </form>
    </div>
  );
};

const styles = {
  page: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "1.5rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1.2rem",
  },
  row: {
    display: "flex",
    gap: "1rem",
  },
  field: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    gap: "0.3rem",
  },
  label: {
    fontSize: "0.9rem",
    fontWeight: "600",
  },
  input: {
    padding: "0.6rem 0.8rem",
    border: "1px solid #ddd",
    borderRadius: "6px",
    fontSize: "1rem",
    width: "100%",
    boxSizing: "border-box",
  },
  required: {
    color: "#ef7809ff",
  },
  button: {
    padding: "0.7rem 1.5rem",
    backgroundColor: "#ef7809ff",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    alignSelf: "flex-start",
  },
};

export default ContactPage;
