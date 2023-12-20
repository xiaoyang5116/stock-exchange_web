import { Grid, GridItem, Show } from "@chakra-ui/react";
import Nav from "./components/Nav";
import Header from "./components/Header/Header";
import EmbeddedStock from "./components/EmbeddedStock";
import StockSidebar from "./components/StockSidebar";

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
    >
      <Show above={"sm"}>
        <GridItem area={"nav"}>
          <Nav />
        </GridItem>
      </Show>
      <GridItem area={"main"} borderRadius="5px" className="flex flex-col">
        <Header />
        <main className="h-full flex flex-col sm:m-10">
          <EmbeddedStock />
          <StockSidebar />
        </main>
      </GridItem>
    </Grid>
  );
}
export default App;
