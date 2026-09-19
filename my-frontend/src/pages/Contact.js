// my-frontend/src/pages/Contact.js is not used anymore
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.section`
  padding: 2em;
  max-width: 68%;
  margin: 0 auto;
  background-color: #FFF8ED;
  border-radius: 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
`;

const LeftPanel = styled.div`
  padding: 0.5em;
  flex: 1;
  min-width: 280px;
  text-align: center;
`;

const ContactTitle = styled.h2`
  margin-bottom: 1rem;
  color: #382F2F;
`;

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ContactItem = styled.li`
  margin-bottom: 0.5rem;

  a {
    color: #382F2F;
    text-decoration: none;
  }
`;

const SocialIcons = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1.5rem;
  justify-content: center;

  img {
    width: 70px;
    height: 70px;
  }
`;

const RightPanel = styled.div`
  margin-top: 2rem;
  margin-left: 5rem;
  flex: 1;
  max-width: 500px;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-top: 1rem;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-top: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const SubmitButton = styled.button`
  margin-top: 1.5rem;
  background-color: #39683B;
  color: #FFE7C9;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
`;

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mcgillId: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setStatus('Thank you! We’ll get back to you soon.');
    setFormData({ firstName: '', lastName: '', email: '', mcgillId: '' });
  };

  return (
    <Container>
      <LeftPanel>
        <ContactTitle>Contact Us</ContactTitle>
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ color: '#382F2F' }}>Get in touch with MycoNurseries today!</h3>
          <p>If you have any questions, comments, or are interested in collaborating with us, our contact form is a good place to start.</p>
          <p>Fill out the relevant information and someone from the MycoNurseries team will get back to you soon.</p>
        </div>
        <ContactList>
          <ContactItem>
            Email: myconurseries@gmail.com
          </ContactItem>
        </ContactList>
        <SocialIcons>
          <a href="https://www.instagram.com/myconurseries" target="_blank" rel="noreferrer">
            <img src={process.env.PUBLIC_URL + "/assets/social/logo-instagram.png"} alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61555856812571" target="_blank" rel="noreferrer">
            <img src={process.env.PUBLIC_URL + "/assets/social/logo-facebook.png"} alt="Facebook" />
          </a>
          <a href="https://www.linkedin.com/company/myconurseries/posts/?feedView=all" target="_blank" rel="noreferrer">
            <img src={process.env.PUBLIC_URL + "/assets/social/logo-linkedin.png"} alt="LinkedIn" />
          </a>
          <a href="https://www.youtube.com/@MycoNurseries" target="_blank" rel="noreferrer">
            <img src={process.env.PUBLIC_URL + "/assets/social/logo-youtube.png"} alt="Youtube" />
          </a>


        </SocialIcons>
      </LeftPanel>

      <RightPanel>

        <Form onSubmit={handleSubmit}>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            required
          />

          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            required
          />

          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <Label htmlFor="message">Message</Label>
          <Input
            id="message"
            name="message"
            type="text"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <SubmitButton type="submit">Send</SubmitButton>
        </Form>

        {status && <p style={{ marginTop: '1rem', color: '#39683B' }}>{status}</p>}
      </RightPanel>
    </Container>
  );
}

export default Contact;

