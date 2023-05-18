import { Box, ResponsiveContext, Spinner, Text } from "grommet";
import { useContext, useEffect, useState } from "react";

import TeamBox from "../TeamBox";
import MLBBoxScore from "./BoxScore";
import HittingCard from "./HittingCard";
import PitchingCard from "./PitchingCard";

export default function MLB() {
  const [home, setHome] = useState({});
  const [away, setAway] = useState({});
  const [event, setEvent] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  const size = useContext(ResponsiveContext);

  useEffect(() => {
    fetch("/api/mlb")
      .then((res) => res.json())
      .then((data) => {
        setHome({
          team_info: data.home_team,
          scores: data.home_period_scores,
          errors: data.home_errors,
          batters: data.home_batters,
          pitchers: data.home_pitchers,
          fielding: data.home_fielding,
          batter_totals: data.home_batter_totals,
        });
        setAway({
          team_info: data.away_team,
          scores: data.away_period_scores,
          errors: data.away_errors,
          batters: data.away_batters,
          pitchers: data.away_pitchers,
          fielding: data.away_fielding,
          batter_totals: data.away_batter_totals,
        });
        setEvent(data.event_information);
        setIsLoaded(true);
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
      <MLBBoxScore home={home} away={away} />
      <Box
        direction={size === "small" ? "column" : "row"}
        gap="medium"
        align="start"
        justify="center"
        height="600px"
      >
        <HittingCard
          batters={away.batters}
          team={away.team_info.abbreviation}
          totals={away.batter_totals}
        />
        <HittingCard
          batters={home.batters}
          team={home.team_info.abbreviation}
          totals={home.batter_totals}
        />
      </Box>
      <Box
        direction={size === "small" ? "column" : "row"}
        gap="medium"
        align="start"
        justify="center"
      >
        <PitchingCard
          pitchers={away.pitchers}
          team={away.team_info.abbreviation}
        />
        <PitchingCard
          pitchers={home.pitchers}
          team={home.team_info.abbreviation}
        />
      </Box>
      <Box height="small" />
    </Box>
  );
}
