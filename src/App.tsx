
import { Header, Box, Heading, Text, Button } from '@primer/react';
import {Avatar} from '@primer/react';

function App() {
  return (
    <Box>
      <Header>
        <Header.Item>
          <Header.Link href="#" sx={{ fontSize: 2 }}>
            <span>GitHub</span>
          </Header.Link>
        </Header.Item>
        <Header.Item full>Menu</Header.Item>
        <Header.Item sx={{ mr: 0 }}>
          <Avatar src="https://github.com/octocat.png" size={20} square alt="@octocat" />
        </Header.Item>
      </Header>
      <Box p={4} display="flex" flexDirection="column" alignItems="center">
        <Heading as="h1">Hello, Primer!</Heading>
        <Text as="p" fontSize={3}>
          This is a sample application using Primer Design System.
        </Text>
        <Button variant="primary">Click me!</Button>
      </Box>
    </Box>
  );
}

export default App;