import React, { useState } from 'react';
import styled from 'styled-components';
import { RiFileCopyLine } from 'react-icons/ri';

const CredentialItem = styled.div`
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  position: relative;
`;

const CredentialField = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 8px;
`;

const CredentialTitle = styled.h3`
  margin-bottom: 5px;
  color: #333;
`;

const CredentialLabel = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

const CredentialValue = styled.span`
  color: #666;
`;

const CopyButtonContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 5px;
  right: 5px;
`;

const CopyButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  transition: transform 0.3s ease;

  svg {
    width: 20px;
    height: 20px;
    fill: #4caf50;
  }

  &:hover {
    transform: scale(1.2);
  }

  &:not(:last-child) {
    margin-right: 5px;
  }
`;
const NotePad = styled.textarea`
  width: 300px;
  height: 300px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  resize: vertical;
  position: fixed;
  bottom: 20px;
  right: 20px;
`;
const Notification = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #4caf50;
  color: white;
  padding: 8px 16px;
  border-radius: 5px;
  display: ${({ show }) => (show ? 'block' : 'none')};
`;

const Credential = ({ title, username, password }) => {
    const [usernameCopied, setUsernameCopied] = useState(false);
    const [passwordCopied, setPasswordCopied] = useState(false);
    const [note, setNote] = useState('');
    const handleCopyUsername = (usernameToCopy) => {
        navigator.clipboard.writeText(usernameToCopy);
        setUsernameCopied(true);
        setTimeout(() => setUsernameCopied(false), 2000);
    };
    const handleCopyPassword = (passwordToCopy) => {
        navigator.clipboard.writeText(passwordToCopy);
        setPasswordCopied(true);
        setTimeout(() => setPasswordCopied(false), 2000);
    };
    const handleNoteChange = (event) => {
        setNote(event.target.value);
    };
    return (
        <div>
            <CredentialItem>
                <CredentialTitle>{title}</CredentialTitle>
                <CredentialField>
                    <CredentialLabel>Username/Email:</CredentialLabel>
                    <CredentialValue>{username}</CredentialValue>
                </CredentialField>
                <CredentialField>
                    <CredentialLabel>Password:</CredentialLabel>
                    <CredentialValue>{password}</CredentialValue>
                </CredentialField>
                <CopyButtonContainer>
                    <CopyButton onClick={() => handleCopyUsername(username)}>
                        <RiFileCopyLine />
                    </CopyButton>
                    <CopyButton onClick={() => handleCopyPassword(password)}>
                        <RiFileCopyLine />
                    </CopyButton>
                </CopyButtonContainer>
            </CredentialItem>
            <NotePad
                placeholder="Write notes here..."
                value={note}
                onChange={handleNoteChange}
            />
        </div>
    );
};

export default Credential;
