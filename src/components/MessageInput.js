import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage, receiveMessage } from '../features/chatSlice';
import { TextField, Button, Box } from '@mui/material';

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const user = useSelector((state) => state.chat.user);

  const handleSendMessage = () => {
    if (message.trim()) {
      dispatch(sendMessage({
        text: message,
        user,
        timestamp: new Date().toLocaleTimeString(),
      }));
      setMessage('');

      // Simulate receiving a message after a delay
      setTimeout(() => {
        dispatch(receiveMessage({
          text: "This is a simulated response",
          user: { id: '2', name: 'Bot' },
          timestamp: new Date().toLocaleTimeString(),
        }));
      }, 2000);
    }
  };

  return (
    <Box sx={{ display: 'flex', mt: 2 }}>
      <TextField
        fullWidth
        variant="outlined"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
      />
      <Button variant="contained" onClick={handleSendMessage} sx={{ ml: 2 }}>
        Send
      </Button>
    </Box>
  );
};

export default MessageInput;
