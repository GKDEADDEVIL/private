// Credentials.js
import React from "react";
import styled from "styled-components";
import Credential from "./Credential"; // Assuming it's in the same 'components' folder

const Container = styled.div`
  max-width: 600px;
  padding: 12px;
  border-radius: 30px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  padding-bottom: 20px;
`;

const Credentials = () => {
    return (
        <Container>
            <Title>My Credentials Vault</Title>
            <Credential
                title="Gmail"
                username="yourEmail@gmail.com"
                password="yourGmailPassword"
            />
            <Credential
                title="Gmail"
                username="yourEmail@gmail.com"
                password="yourGmailPassword"
            />
            <Credential
                title="Gmail"
                username="yourEmail@gmail.com"
                password="yourGmailPassword"
            />
            <Credential
                title="Gmail"
                username="yourEmail@gmail.com"
                password="yourGmailPassword"
            />
            <Credential
                title="Gmail"
                username="yourEmail@gmail.com"
                password="yourGmailPassword"
            />
        </Container>
    );
};

export default Credentials;
