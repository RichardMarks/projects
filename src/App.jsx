import { Content } from "./Content";
import { GameEngines } from "./GameEngines";
import { Hero } from "./Hero";
import { Intro } from "./Intro";
import { Nav } from "./Nav";
import { Outro } from "./Outro";
import { Tools } from "./Tools";
import { Games } from "./Games";

function App() {
  return (
    <>
      <Nav />
      {/* <Hero /> */}
      <Content>
        <Intro />
        <Games />
        <Tools />
        <GameEngines />
        <Outro />
      </Content>
    </>
  );
}

export default App;
