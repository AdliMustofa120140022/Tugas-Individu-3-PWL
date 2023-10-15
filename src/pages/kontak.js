import React, { useState, useContext } from "react";
import { Form, Button, Container } from 'react-bootstrap';

const MessageContext = React.createContext();

export default function Kontak() {
    return (
        <Container>
            <h2>
                Kontak Kami
            </h2>
            <Form.Label>Nama</Form.Label>
            <Form.Control type="text" placeholder="Masukkan Nama" />
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="nama@gmail.com" />
            
            Pesan :
            <MessageProvider>
                <MessagesForm />
                <MessageList />
            </MessageProvider>
        </Container>
    );
}

function MessageProvider({ children }) {
    const [messages, setMessages] = useState([]);
    return (
        <MessageContext.Provider value={{ messages, setMessages }} >
            {children}
        </MessageContext.Provider>
    )
}

function MessagesForm() {
    const { messages, setMessages } = useContext(MessageContext);
    const [newMessages, setNewMessages] = useState('');

    const handleInputChange = (event) => {
        setNewMessages(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // Trim the newMessages value and check if it's empty
        if (!newMessages.trim()) return;

        const newMessageObject = {
            text: newMessages,
        }

        setMessages([...messages, newMessageObject])
        setNewMessages("");
    }

    return (
        <>
            <Form>
                <Form.Group>
                    <Form.Control type="text" onChange={handleInputChange} value={newMessages} />
                    <Button className="btn btn-primary" onClick={handleSubmit}>Kirim</Button>
                </Form.Group>
            </Form>
        </>
    );
}

function MessageList() {
    const { messages } = useContext(MessageContext);

    return (
        <>
            <p><strong>Total Pesan Terkirim:</strong> {messages.length}</p>
            <strong>Teks yang berhasil dikirim:</strong>
            {messages.map((message, index) => (
                <p key={index}>{message.text}</p>
            ))}
        </>
    );
}
