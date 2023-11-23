import { Content } from "./Content";
import { GameEngines } from "./GameEngines";
import { Hero } from "./Hero";
import { Intro } from "./Intro";
import { Nav } from "./Nav";
import { Outro } from "./Outro";
import { Tools } from "./Tools";
import { Games } from "./Games";
import { LightboxProvider } from "./Lightbox";

function App() {
  return (
    <LightboxProvider>
      <div id="home" />
      <Nav />
      <Hero />
      <Content>
        <Intro />
        <Games />
        <Tools />
        <GameEngines />
        <div className="min-h-[96px]" />
      </Content>
      <Outro />
    </LightboxProvider>
  );
}

export default App;
