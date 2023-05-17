import TeamCard from "./TeamCard";
import { Box, Text } from "grommet";
export default function TeamBox({ away, home, status }) {
  return (
    <Box direction="row" align="center" justify="center" gap="medium">
      <TeamCard team={away.team_info} />
      <Text
        size="large"
        color={away.score > home.score && "brand"}
        weight="bolder"
      >
        {away.score}
      </Text>
      <Text size="large">{status === "completed" ? "Final" : "-"}</Text>
      <Text
        size="large"
        color={home.score > away.score && "brand"}
        weight="bolder"
      >
        {home.score}
      </Text>
      <TeamCard team={home.team_info} />
    </Box>
  );
}
