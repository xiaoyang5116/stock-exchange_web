import { Grid, GridItem, Show } from "@chakra-ui/react";
import Nav from "./components/Nav";
import Header from "./components/Header";
// import EmbeddedStock from "./components/EmbeddedStock";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        sm: `"nav main"`,
      }}
      templateColumns={{
        base: "1fr",
        sm: "70px 1fr",
      }}
      minH={"100vh"}
      gap="10px"
      bg={"#FAFAFA"}
    >
      <Show above={"sm"}>
        <GridItem bg="#fff" area={"nav"}>
          <Nav />
        </GridItem>
      </Show>
      <GridItem area={"main"} borderRadius="5px">
        <Header />
        {/* <EmbeddedStock /> */}
      </GridItem>
    </Grid>
  );
}

export default App;
