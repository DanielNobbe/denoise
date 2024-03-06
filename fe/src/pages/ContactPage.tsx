import React from 'react';
import styled, { css } from 'styled-components';

const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 70vh;
`;

const SectionText = styled.p`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
`;

const ContactInfoUpperContainer = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 2rem;
  border: 0.1rem solid rgb(163, 163, 163);
  background: rgb(250, 250, 250);
  margin: 2rem auto;
  padding: 0.5rem;
`;

const ContactInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 1rem;
`;

const ContactInfo = styled.p`
  font-size: larger;
`;

const ContactIcon = styled.img`
  cursor: default;
  height: 2.5rem;
`;

export const ContactPage = () => {
    return (
        <Section id="contact">
            <SectionText>Get in Touch</SectionText>
            <Title>Contact Us</Title>
            <ContactInfoUpperContainer>
                <ContactInfoContainer>
                    <ContactIcon src="/email.png" alt="Email icon" />
                    <ContactInfo><a href="mailto:support@denoise.com">support@denoise.com</a></ContactInfo>
                </ContactInfoContainer>
                <ContactInfoContainer>
                    <ContactIcon src="/linkedin.png" alt="LinkedIn icon" />
                    <ContactInfo><a href="https://www.linkedin.com">LinkedIn</a></ContactInfo>
                </ContactInfoContainer>
            </ContactInfoUpperContainer>
        </Section>
    );
};