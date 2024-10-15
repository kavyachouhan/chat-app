import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ChatDisplay from './components/ChatDisplay';
import MessageInput from './components/MessageInput';
import { Box, Container, Typography } from '@mui/material';

const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <Typography variant="h4" align="center" sx={{ my: 4 }}>Chat Interface</Typography>
        <Box sx={{ maxWidth: '600px', margin: '0 auto' }}>
          <ChatDisplay />
          <MessageInput />
        </Box>
      </Container>
    </Provider>
  );
};

export default App;
