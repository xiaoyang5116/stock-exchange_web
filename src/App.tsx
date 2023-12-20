import { Grid, GridItem, Show } from "@chakra-ui/react";
import Nav from "./components/Nav";
import Header from "./components/Header/Header";
import EmbeddedStock from "./components/EmbeddedStock";
import StockSidebar from "./components/StockSidebar/StockSidebar";
import DealList from "./components/StockSidebar/DealList";
import FooterNav from "./components/FooterNav";

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
        <main className="h-full w-full flex flex-col overflow-hidden sm:p-10 xl:flex-row ">
          <EmbeddedStock />
          <div>
            <StockSidebar />
            <DealList />
          </div>
        </main>
        <FooterNav />
      </GridItem>
    </Grid>
  );
}
export default App;
