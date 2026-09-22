import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const Wrapper = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  background-color: #FFF8ED;
`;

const Title = styled.h2`
  color: #39683B;
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

const TextArea = styled.textarea`
  padding: 0.5rem;
  margin-top: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  margin-top: 1.5rem;
  padding: 0.75rem;
  background-color: #39683B;
  color: #FFE7C9;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

function Volunteer() {
  const { t } = useTranslation();
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', role: '', notes: '' });

  const handleAuth = (e) => {
    e.preventDefault();
    if (password === 'letmein') setAuthenticated(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${t('volunteer.volunteerPrompt')} ${JSON.stringify(formData)}`);
    setFormData({ name: '', email: '', role: '', notes: '' });
  };

  if (!authenticated) {
    return (
      <Wrapper>
        <Title>{t('components.volunteer.passwordPrompt')}</Title>
        <Form onSubmit={handleAuth}>
          <Label>{t('components.volunteer.password')}</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">{t('components.volunteer.submit')}</Button>
        </Form>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Title>{t('components.volunteer.posting.title')}</Title>
      <Form onSubmit={handleSubmit}>
        <Label>{t('components.volunteer.posting.name')}</Label>
        <Input name="name" value={formData.name} onChange={handleChange} />

        <Label>{t('components.volunteer.posting.email')}</Label>
        <Input name="email" value={formData.email} onChange={handleChange} />

        <Label>{t('components.volunteer.posting.role')}</Label>
        <Input name="role" value={formData.role} onChange={handleChange} />

        <Label>{t('components.volunteer.posting.notes')}</Label>
        <TextArea name="notes" rows={4} value={formData.notes} onChange={handleChange} />

        <Button type="submit">{t('components.volunteer.posting.post')}</Button>
      </Form>
    </Wrapper>
  );
}

export default Volunteer;