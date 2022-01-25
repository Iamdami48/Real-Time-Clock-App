export function WatchContainer({
  WatchContainerStyle,
  borderStyle,
  getSeconds,
  getMinutes,
  getHours
}) {
  return (
    <div className="watch-container" style={WatchContainerStyle}>
      <p className="header">Time</p>
      <div
        className="clock"
        style={{
          backgroundImage: `linear-gradient(var(--dark-color), var(--dark-color)), 
          ${borderStyle}`
        }}
      >
        <span className="time hand12"></span>
        <span className="time hand9"></span>
        <span className="time hand3"></span>
        <span className="time hand9"></span>
        <span className="middle-point" style={WatchContainerStyle}></span>
        <div
          className="second-warpper"
          style={{ transform: `rotatez(${getSeconds * 6}deg)` }}
        >
          <span className="seconds" style={WatchContainerStyle}></span>
        </div>
        <div
          className="second-warpper"
          style={{ transform: `rotatez(${getMinutes * 6}deg)` }}
        >
          <span className="seconds minutes" style={WatchContainerStyle}></span>
        </div>
        <div
          className="second-warpper"
          style={{ transform: `rotatez(${getHours * 30}deg)` }}
        >
          <span className="seconds minutes" style={WatchContainerStyle}></span>
        </div>
      </div>
    </div>
  );
}
