import { Grid, GridItem ,Show} from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid  templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`,
    }}>
      <GridItem area={"nav"} py='2.5'>
       <Navbar />
      </GridItem>
      <Show>
      <GridItem area={"aside"} >
        <GameGrid />
        {/* <h1>Aside</h1> */}
      </GridItem>
      </Show>
      <GridItem area={"main"} >
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
