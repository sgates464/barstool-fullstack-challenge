// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { kv } from "@vercel/kv";
export default function handler(req, res) {
  const now = Date.now();
  const nowInSeconds = Math.round(now / 1000);
  let nbaData = {};
  // get cached data and run stale check
  kv.get("nba").then((data) => {
    if (data) {
      // if data exists and is not stale, return it
      if (nowInSeconds - data.updated_at < 15) {
        res.status(200).json(data);
      } else {
        // otherwise get new data and cache it with a new timestamp
        fetch(
          "https://chumley.barstoolsports.com/dev/data/games/6c974274-4bfc-4af8-a9c4-8b926637ba74.json"
        )
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            kv.set("nba", { ...data, updated_at: nowInSeconds });
            res.status(200).json(data);
          });
      }
    } else {
      // if data doesn't exist, get it and cache it with a timestamp
      fetch(
        "https://chumley.barstoolsports.com/dev/data/games/6c974274-4bfc-4af8-a9c4-8b926637ba74.json"
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          kv.set("nba", data);
          res.status(200).json(data);
        });
    }
  });
}
