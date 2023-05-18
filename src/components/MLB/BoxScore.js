import {
  Card,
  Table,
  TableCell,
  TableHeader,
  TableRow,
  TableBody,
} from "grommet";
export default function MLBBoxScore({ home, away }) {
  return (
    <Card width="100%" background="white" overflow="scroll">
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell scope="col" border></TableCell>
            {home.scores.map((score, index) => (
              <TableCell key={index} scope="col" border>
                {index + 1}
              </TableCell>
            ))}
            <TableCell scope="col" border>
              R
            </TableCell>
            <TableCell scope="col" border>
              H
            </TableCell>
            <TableCell scope="col" border>
              E
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell scope="row" border>
              {away.team_info.abbreviation}
            </TableCell>
            {away.scores.map((score, index) => (
              <TableCell key={index} scope="row" border>
                {score}
              </TableCell>
            ))}
            <TableCell scope="row" border>
              {away.scores.reduce((a, b) => a + b, 0)}
            </TableCell>
            <TableCell scope="row" border>
              {away.batter_totals.hits}
            </TableCell>
            <TableCell scope="row" border>
              {away.errors}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell scope="row" border>
              {home.team_info.abbreviation}
            </TableCell>
            {home.scores.map((score, index) => (
              <TableCell key={index} scope="row" border>
                {score}
              </TableCell>
            ))}
            <TableCell scope="row" border>
              {home.scores.reduce((a, b) => a + b, 0)}
            </TableCell>
            <TableCell scope="row" border>
              {home.batter_totals.hits}
            </TableCell>
            <TableCell scope="row" border>
              {home.errors}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  );
}
