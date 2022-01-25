import { useState } from "react";
import { ClockContainer } from "./components/ClockContainer";
import { ThemeContainer } from "./components/ThemeContainer";
import ThemeData from "./Data/ThemeData";
import "./styles.css";

export function App() {
  const [fallbackColor, setFallbackColor] = useState("#ffffff");
  const [lineraBackground, setLinearBackground] = useState(
    "linear-gradient(225deg, #ECE9E6 0%, #FFFFFF 100%)"
  );
  const styledBackground = {
    background: `${fallbackColor} ${lineraBackground} no-repeat`
  };
  return (
    <div className="App" style={styledBackground}>
      <ThemeContainer
        setLinearBackground={setLinearBackground}
        setFallbackColor={setFallbackColor}
        ThemeData={ThemeData}
      />
      <ClockContainer
        borderStyle={lineraBackground}
        WatchContainerStyle={styledBackground}
      />
    </div>
  );
}
