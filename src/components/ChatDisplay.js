import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography, Paper } from '@mui/material';

const ChatDisplay = () => {
  const messages = useSelector((state) => state.chat.messages);
  
  // Create a reference to the chat container
  const chatEndRef = useRef(null);

  // Auto-scroll to the bottom when messages change
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <Box sx={{ height: '400px', overflowY: 'scroll', p: 2, border: '1px solid lightgray' }}>
      {messages.map((msg, idx) => (
        <Paper key={idx} sx={{ padding: '10px', marginBottom: '10px', backgroundColor: msg.user.id === '1' ? '#d0f0c0' : '#f0d0c0' }}>
          <Typography variant="body1">{msg.text}</Typography>
          <Typography variant="caption">{msg.timestamp}</Typography>
        </Paper>
      ))}

      {/* This element ensures the chat will scroll to the bottom */}
      <div ref={chatEndRef} />
    </Box>
  );
};

export default ChatDisplay;
