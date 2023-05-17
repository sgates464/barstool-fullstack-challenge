import { Card, Text, Box } from "grommet";
import IconBxBaseball from "./IconBxBaseball";
import IconBxBasketball from "./IconBxBasketball";

export default function TabSelection({ index, setIndex }) {
  return (
    <Box
      align="center"
      justify="center"
      pad="small"
      direction="row"
      gap="medium"
    >
      <Box
        background={index === "MLB" ? "brand" : "white"}
        width="small"
        align="center"
        justify="center"
        direction="row"
        gap="small"
        pad="xsmall"
        round="small"
        onClick={() => {
          setIndex("MLB");
        }}
        hoverIndicator="brand"
        focusIndicator={false}
      >
        <IconBxBaseball />
        <Text size="large" weight="bold">
          MLB
        </Text>
      </Box>
      <Box
        background={index === "NBA" ? "brand" : "white"}
        width="small"
        align="center"
        justify="center"
        direction="row"
        gap="small"
        pad="xsmall"
        round="small"
        onClick={() => {
          setIndex("NBA");
        }}
        hoverIndicator="brand"
        focusIndicator={false}
      >
        <IconBxBasketball />
        <Text size="large" weight="bold">
          NBA
        </Text>
      </Box>
    </Box>
  );
}
