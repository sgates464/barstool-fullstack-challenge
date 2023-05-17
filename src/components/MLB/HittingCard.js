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
export default function HittingCard({ batters, team, totals }) {
  return (
    <Card background="white" width="100%" overflow="scroll" height="100%">
      <CardHeader pad="small">
        <Text size="large">{team} Batting</Text>
      </CardHeader>
      <Table>
        <TableHeader style={{ background: "#EEEEEE" }}>
          <TableRow>
            <TableCell scope="col" border>
              Player
            </TableCell>
            <TableCell scope="col" border>
              AB
            </TableCell>
            <TableCell scope="col" border>
              H
            </TableCell>
            <TableCell scope="col" border>
              R
            </TableCell>
            <TableCell scope="col" border>
              RBI
            </TableCell>
            <TableCell scope="col" border>
              HR
            </TableCell>
            <TableCell scope="col" border>
              AVG
            </TableCell>
            <TableCell scope="col" border>
              OBP
            </TableCell>
            <TableCell scope="col" border>
              SLG
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {batters.map((batter, idx) => (
            <TableRow key={idx}>
              <TableCell scope="row" border>
                <Box gap="small" direction="row" align="center">
                  <Text>{batter.display_name}</Text>
                  <Text size="small">{batter.position}</Text>
                </Box>
              </TableCell>
              <TableCell scope="row" border>
                {batter.at_bats}
              </TableCell>
              <TableCell scope="row" border>
                {batter.hits}
              </TableCell>
              <TableCell scope="row" border>
                {batter.runs}
              </TableCell>
              <TableCell scope="row" border>
                {batter.rbi}
              </TableCell>
              <TableCell scope="row" border>
                {batter.home_runs}
              </TableCell>
              <TableCell scope="row" border>
                {batter.avg_string}
              </TableCell>
              <TableCell scope="row" border>
                {batter.obp_string}
              </TableCell>
              <TableCell scope="row" border>
                {batter.slg_string}
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell scope="row" border>
              <Text weight="bolder">TEAM</Text>
            </TableCell>
            <TableCell scope="row" border>
              <Text weight="bolder">{totals.at_bats}</Text>
            </TableCell>
            <TableCell scope="row" border>
              <Text weight="bolder">{totals.hits}</Text>
            </TableCell>
            <TableCell scope="row" border>
              <Text weight="bolder">{totals.runs}</Text>
            </TableCell>
            <TableCell scope="row" border>
              <Text weight="bolder">{totals.rbi}</Text>
            </TableCell>
            <TableCell scope="row" border>
              <Text weight="bolder">{totals.home_runs}</Text>
            </TableCell>
            <TableCell scope="row" border>
              <Text weight="bolder">{totals.avg_string}</Text>
            </TableCell>
            <TableCell scope="row" border>
              <Text weight="bolder">{totals.obp_string}</Text>
            </TableCell>
            <TableCell scope="row" border>
              <Text weight="bolder">{totals.slg_string}</Text>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  );
}
