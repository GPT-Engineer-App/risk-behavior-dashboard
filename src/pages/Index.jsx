import React, { useState } from "react";
import { Container, VStack, Text, Input, Button, Textarea, Box, Link } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  const [inputText, setInputText] = useState("");
  const [riskType, setRiskType] = useState("");
  const [outputText, setOutputText] = useState("");

  const [riskScore, setRiskScore] = useState(0);

  const navigate = useNavigate();
  const [processedMessages, setProcessedMessages] = useState([]);

  const handleInputChange = (e) => setInputText(e.target.value);
  const handleRiskTypeChange = (e) => setRiskType(e.target.value);
  const handleSubmit = () => {
    // Placeholder for processing logic
    const score = Math.floor(Math.random() * 100) + 1;
    const newMessage = { text: inputText, riskType, riskScore: score };
    setProcessedMessages([...processedMessages, newMessage]);
    setOutputText(`Processed: ${inputText} with risk type: ${riskType}`);
    setRiskScore(score);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">LLM Dashboard</Text>
        <Input placeholder="Enter risk type" value={riskType} onChange={handleRiskTypeChange} />
        <Textarea placeholder="Enter your sentence here" value={inputText} onChange={handleInputChange} />
        <Button onClick={handleSubmit} colorScheme="teal" leftIcon={<FaRocket />}>
          Submit
        </Button>
        {outputText && (
          <Box p={4} borderWidth={1} borderRadius="md" width="100%">
            <Text>{outputText}</Text>
          </Box>
        )}
        {outputText && (
          <Box p={4} borderWidth={1} borderRadius="md" width="100%">
            <Text>Risk Score: {riskScore}</Text>
          </Box>
        )}
        <Link onClick={() => navigate("/processed-messages")}>View Processed Messages</Link>
      </VStack>
    </Container>
  );
};

export default Index;
