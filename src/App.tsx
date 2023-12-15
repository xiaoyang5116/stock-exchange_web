import { Grid, GridItem, Show, Text } from "@chakra-ui/react";
import Nav from "./components/Nav";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"header" "main"`,
        sm: `"nav header" "nav main"`,
      }}
      templateRows={{
        base: "24px 1fr",
        sm: "38px 1fr",
      }}
      templateColumns={{
        base: "1fr",
        sm: "70px 1fr",
      }}
      minH={"100vh"}
      gap='2'
      bg={"#FAFAFA"}
    >
      <GridItem area={'header'}>
        <Text color={"#241717"} mt={{
          base: "0",
          sm: "15px"
        }}>Header</Text>
      </GridItem>
      <Show above={"sm"}>
        <GridItem bg='#fff' area={'nav'}>
          <Nav />
        </GridItem>
      </Show>
      <GridItem bg='#fff' area={'main'} borderRadius="5px">
        <Text color={"#000"}>Main</Text>
      </GridItem>
    </Grid >
  );
}

export default App;
