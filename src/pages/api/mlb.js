// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { kv } from "@vercel/kv";
export default function handler(req, res) {
  const now = Date.now();
  const nowInSeconds = Math.round(now / 1000);

  // get cached data and run stale check
  kv.get("mlb").then((data) => {
    if (data) {
      // if data exists and is not stale, return it
      if (nowInSeconds - data.updated_at < 15) {
        res.status(200).json(data);
      } else {
        // otherwise get new data and cache it with a new timestamp
        fetch(
          "https://chumley.barstoolsports.com/dev/data/games/eed38457-db28-4658-ae4f-4d4d38e9e212.json"
        )
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            kv.set("mlb", { ...data, updated_at: nowInSeconds });
            res.status(200).json(data);
          });
      }
    } else {
      // if data doesn't exist, get it and cache it with a timestamp
      fetch(
        "https://chumley.barstoolsports.com/dev/data/games/eed38457-db28-4658-ae4f-4d4d38e9e212.json"
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          kv.set("mlb", data);
          res.status(200).json(data);
        });
    }
  });
}
