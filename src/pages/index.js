import IconBxBaseball from "@/components/IconBxBaseball";
import IconBxBasketball from "@/components/IconBxBasketball";
import MLB from "@/components/MLB/MLB";
import TabSelection from "@/components/TabSelection";
import { Tabs, Box, Tab } from "grommet";
import { useState } from "react";

export default function Home() {
  const [index, setIndex] = useState("MLB");
  return (
    <>
      <TabSelection index={index} setIndex={setIndex} />
      <Box pad={{ horizontal: "small" }}>
        {index === "MLB" ? <MLB /> : <div></div>}
      </Box>
    </>
  );
}
