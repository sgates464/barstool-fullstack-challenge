import { Heading, Header, Box, Text, Button } from "grommet";
import { Github } from "grommet-icons";

export default function BoxScoreHeader() {
  return (
    <Box elevation="small">
      <Header justify="between" pad="medium" align="center" background="white">
        <Heading level="1" margin="none">
          Box Score App
        </Heading>
        <Box direction="row" gap="medium" align="center">
          <Text>By Samuel Gates</Text>
          <Button href="https://github.com/sgates464" hoverIndicator>
            <Github size="large" />
          </Button>
        </Box>
      </Header>
    </Box>
  );
}
