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
export default function PitchingCard({ pitchers, team }) {
  return (
    <Card background="white" width="100%" height="100%" overflow="scroll">
      <CardHeader pad="small">
        <Text size="large">{team} Pitching</Text>
      </CardHeader>
      <Table>
        <TableHeader style={{ background: "#EEEEEE" }}>
          <TableRow>
            <TableCell scope="col" border>
              Player
            </TableCell>
            <TableCell scope="col" border>
              IP
            </TableCell>
            <TableCell scope="col" border>
              H
            </TableCell>
            <TableCell scope="col" border>
              R
            </TableCell>
            <TableCell scope="col" border>
              ER
            </TableCell>
            <TableCell scope="col" border>
              HR
            </TableCell>
            <TableCell scope="col" border>
              K
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pitchers.map((pitcher, idx) => (
            <TableRow key={idx}>
              <TableCell scope="row" border>
                <Box gap="small" direction="row" align="center">
                  <Text>{pitcher.display_name}</Text>
                </Box>
              </TableCell>
              <TableCell scope="row" border>
                {pitcher.innings_pitched}
              </TableCell>
              <TableCell scope="row" border>
                {pitcher.hits_allowed}
              </TableCell>
              <TableCell scope="row" border>
                {pitcher.runs_allowed}
              </TableCell>
              <TableCell scope="row" border>
                {pitcher.earned_runs}
              </TableCell>
              <TableCell scope="row" border>
                {pitcher.home_runs_allowed}
              </TableCell>
              <TableCell scope="row" border>
                {pitcher.strike_outs}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
