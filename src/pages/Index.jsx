import React, { useState } from "react";
import { Container, VStack, Text, Input, Button, Textarea, Box, IconButton } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  const [inputText, setInputText] = useState("");
  const [riskType, setRiskType] = useState("");
  const [outputText, setOutputText] = useState("");

  const handleInputChange = (e) => setInputText(e.target.value);
  const handleRiskTypeChange = (e) => setRiskType(e.target.value);
  const handleSubmit = () => {
    // Placeholder for processing logic
    setOutputText(`Processed: ${inputText} with risk type: ${riskType}`);
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
      </VStack>
    </Container>
  );
};

export default Index;
