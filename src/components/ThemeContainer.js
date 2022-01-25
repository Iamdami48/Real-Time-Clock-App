import React from "react";
// import ThemeData from "../Data/ThemeData";
export function ThemeContainer({
  setFallbackColor,
  setLinearBackground,
  ThemeData
}) {
  //Function To Change App Theme
  const changeThings = (theme) => {
    const themeMetaColor = document.querySelector("meta[name=theme-color]");
    themeMetaColor.content = theme.fallBackColor;
    setLinearBackground(theme.backgroundImage);
    setFallbackColor(theme.fallBackColor);
  };
  return (
    <div className="theme-container">
      <label>
        {ThemeData.map((theme, index) => (
          <label key={index}>
            <div
              className="themeSelector"
              style={{
                background: `${theme.fallBackColor} ${theme.backgroundImage}`
              }}
              // onClick={() => event(theme.backgroundImage)}
              onClick={() => changeThings(theme)}
            ></div>
          </label>
        ))}
      </label>
    </div>
  );
}
