import { Heading, Header, Box } from "grommet";

export default function BoxScoreHeader() {
  return (
    <Box elevation="small">
      <Header justify="center" pad="medium" align="center" background="white">
        <Heading level="1" margin="none">
          Box Score App
        </Heading>
      </Header>
    </Box>
  );
}
