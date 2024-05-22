import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Button } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <Box bg="gray.100" p={4}>
      <Flex justify="space-between">
        <Button as={Link} to="/">
          Home
        </Button>
        <Button as={Link} to="/processed-messages">
          Processed Messages
        </Button>
      </Flex>
    </Box>
  );
};

export default Navigation;
