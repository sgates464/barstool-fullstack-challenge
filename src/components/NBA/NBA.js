import { useContext, useEffect, useState } from "react";
import TeamBox from "../TeamBox";
import { Box, ResponsiveContext, Spinner } from "grommet";
import NBABoxScore from "./BoxScore";
import PlayerStatsCard from "./PlayerStatsCard";

export default function NBA() {
  const [home, setHome] = useState({});
  const [away, setAway] = useState({});
  const [event, setEvent] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const size = useContext(ResponsiveContext);

  useEffect(() => {
    fetch("/api/nba").then((res) => {
      res.json().then((data) => {
        setHome({
          team_info: data.home_team,
          scores: data.home_period_scores,
          stats: data.home_stats,
          totals: data.home_totals,
        });
        setAway({
          team_info: data.away_team,
          scores: data.away_period_scores,
          stats: data.away_stats,
          totals: data.away_totals,
        });
        setEvent(data.event_information);
        setIsLoaded(true);
      });
    });
  }, []);

  if (!isLoaded) {
    return (
      <Box basis="large" justify="center" align="center">
        <Spinner size="xlarge" />
      </Box>
    );
  }

  return (
    <Box gap="medium">
      <TeamBox
        away={{
          team_info: away.team_info,
          score: away.scores.reduce((a, b) => a + b, 0),
        }}
        home={{
          team_info: home.team_info,
          score: home.scores.reduce((a, b) => a + b, 0),
        }}
        status={event.status}
      />
      <NBABoxScore home={home} away={away} />
      <Box
        direction={size === "small" ? "column" : "row"}
        gap="medium"
        align="start"
        justify="center"
      >
        <PlayerStatsCard
          players={away.stats}
          team={away.team_info.abbreviation}
          totals={away.totals}
        />
        <PlayerStatsCard
          players={home.stats}
          team={home.team_info.abbreviation}
          totals={home.totals}
        />
      </Box>
      <Box height="small" />
    </Box>
  );
}
