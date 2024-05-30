
import { Header, Box, Heading, Text, Button } from '@primer/react';
import { Card } from '@primer/react-brand';
import { Avatar } from '@primer/react';

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
      <Card href="https://github.com">
        <Card.Heading>Code search & code view</Card.Heading>
        <Card.Label>Limited</Card.Label>
        <Card.Description>
          Enables you to rapidly search, navigate, and understand code, right from
          GitHub.com.
        </Card.Description>
      </Card>
    </Box>
  );
}

export default App;