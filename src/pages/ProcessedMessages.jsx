import React, { useState } from "react";
import { Box, Button, List, ListItem, Text } from "@chakra-ui/react";

const ProcessedMessages = () => {
  const [messages, setMessages] = useState([
    { id: 1, content: "Message 1", riskScore: 45, riskType: "Type A", description: "Description A" },
    { id: 2, content: "Message 2", riskScore: 75, riskType: "Type B", description: "Description B" },
  ]);

  const removeMessage = (id) => {
    setMessages(messages.filter((message) => message.id !== id));
  };

  return (
    <Box p={4}>
      <Text fontSize="2xl" mb={4}>
        Processed Messages
      </Text>
      <List spacing={3}>
        {messages.map((message) => (
          <ListItem key={message.id}>
            <Text>Sentence: {message.content}</Text>
            <Text>Risk Score: {message.riskScore}</Text>
            <Text>Risk Behaviour: {message.riskType}</Text>
            <Text>Description: {message.description}</Text>
            <Button colorScheme="red" onClick={() => removeMessage(message.id)} mt={2}>
              Remove
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ProcessedMessages;
