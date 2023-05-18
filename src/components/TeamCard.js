import { Card, Text, Box } from "grommet";
import IconBxBaseball from "./IconBxBaseball";

export default function TeamCard({ team, advantage }) {
  if (advantage === "away") {
    return (
      <Card
        direction="row"
        background="white"
        width="100%"
        align="center"
        justify="center"
        gap="medium"
        pad="small"
      >
        <Box direction="row" align="center" justify="center" fill gap="small">
          <IconBxBaseball />
          <Text textAlign="center" size="medium" weight="bolder">
            {team.full_name}
          </Text>
          <Text textAlign="center" size="small">
            {advantage}
          </Text>
        </Box>
      </Card>
    );
  }

  if (advantage === "home") {
    return (
      <Card
        direction="row"
        background="white"
        width="100%"
        align="center"
        justify="center"
        gap="medium"
        pad="small"
      >
        <Box direction="row" align="center" justify="center" fill gap="small">
          <Text textAlign="center" size="small">
            {advantage}
          </Text>

          <Text textAlign="center" size="medium" weight="bolder">
            {team.full_name}
          </Text>
          <IconBxBaseball />
        </Box>
      </Card>
    );
  }
}
