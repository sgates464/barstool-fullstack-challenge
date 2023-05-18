import {
  Card,
  Text,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  Box,
} from "grommet";
export default function PlayerStatsCard({ players, team, totals }) {
  return (
    <Card background="white" width="100%" overflow="scroll" height="100%">
      <CardHeader pad="small">
        <Text size="large">{team} Player Stats</Text>
      </CardHeader>
      <Table>
        <TableHeader style={{ background: "#EEEEEE" }}>
          <TableRow>
            <TableCell scope="col" border>
              Player
            </TableCell>
            <TableCell scope="col" border>
              FG
            </TableCell>
            <TableCell scope="col" border>
              3PT
            </TableCell>
            <TableCell scope="col" border>
              REB
            </TableCell>
            <TableCell scope="col" border>
              AST
            </TableCell>
            <TableCell scope="col" border>
              STL
            </TableCell>
            <TableCell scope="col" border>
              BLK
            </TableCell>
            <TableCell scope="col" border>
              TO
            </TableCell>
            <TableCell scope="col" border>
              PTS
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell scope="row">
              <Text>Starters</Text>
            </TableCell>
          </TableRow>
          {players.map((player, idx) => {
            if (player.is_starter) {
              return (
                <TableRow key={idx}>
                  <TableCell scope="row" border>
                    <Box gap="small" direction="row" align="center">
                      <Text>{player.display_name}</Text>
                      <Text size="small">{player.position}</Text>
                    </Box>
                  </TableCell>
                  <TableCell scope="row" border>
                    {player.field_goals_made}-{player.field_goals_attempted}
                  </TableCell>
                  <TableCell scope="row" border>
                    {player.three_point_field_goals_made}-
                    {player.three_point_field_goals_attempted}
                  </TableCell>
                  <TableCell scope="row" border>
                    {player.defensive_rebounds + player.offensive_rebounds}
                  </TableCell>
                  <TableCell scope="row" border>
                    {player.assists}
                  </TableCell>
                  <TableCell scope="row" border>
                    {player.steals}
                  </TableCell>
                  <TableCell scope="row" border>
                    {player.blocks}
                  </TableCell>
                  <TableCell scope="row" border>
                    {player.turnovers}
                  </TableCell>
                  <TableCell scope="row" border>
                    {player.points}
                  </TableCell>
                </TableRow>
              );
            }
          })}
          <TableRow>
            <TableCell scope="row">
              <Text>Bench</Text>
            </TableCell>
          </TableRow>
          {players.map((player, idx) => {
            if (!player.is_starter) {
              return (
                <TableRow key={idx}>
                  <TableCell scope="row" border>
                    <Box gap="small" direction="row" align="center">
                      <Text>{player.display_name}</Text>
                      <Text size="small">{player.position}</Text>
                    </Box>
                  </TableCell>
                  <TableCell scope="row" border>
                    {player.field_goals_made}-{player.field_goals_attempted}
                  </TableCell>
                  <TableCell scope="row" border>
                    {player.three_point_field_goals_made}-
                    {player.three_point_field_goals_attempted}
                  </TableCell>
                  <TableCell scope="row" border>
                    {player.defensive_rebounds + player.offensive_rebounds}
                  </TableCell>
                  <TableCell scope="row" border>
                    {player.assists}
                  </TableCell>
                  <TableCell scope="row" border>
                    {player.steals}
                  </TableCell>
                  <TableCell scope="row" border>
                    {player.blocks}
                  </TableCell>
                  <TableCell scope="row" border>
                    {player.turnovers}
                  </TableCell>
                  <TableCell scope="row" border>
                    {player.points}
                  </TableCell>
                </TableRow>
              );
            }
          })}

          <TableRow>
            <TableCell scope="row" border>
              <Text weight="bolder">TEAM</Text>
            </TableCell>
            <TableCell scope="row" border>
              <Text weight="bolder">
                {totals.field_goals_made} - {totals.field_goals_attempted}
              </Text>
            </TableCell>
            <TableCell scope="row" border>
              <Text weight="bolder">
                {totals.three_point_field_goals_made} -{" "}
                {totals.three_point_field_goals_attempted}
              </Text>
            </TableCell>
            <TableCell scope="row" border>
              {totals.defensive_rebounds + totals.offensive_rebounds}
            </TableCell>
            <TableCell scope="row" border>
              {totals.assists}
            </TableCell>
            <TableCell scope="row" border>
              {totals.steals}
            </TableCell>
            <TableCell scope="row" border>
              {totals.blocks}
            </TableCell>
            <TableCell scope="row" border>
              {totals.turnovers}
            </TableCell>
            <TableCell scope="row" border>
              {totals.points}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  );
}
