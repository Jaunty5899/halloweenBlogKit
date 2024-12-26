import "./Highlight.css";

function Highlight() {
  return (
    <div className="highlight">
      <img src="https://picsum.photos/420/240" alt="" />
      <div className="event">
        <div className="date">
          <span>31</span>
          <span>Oct</span>
        </div>
        <div className="title">
          <span>THE 5 BEST MOVIES TO WATCH ON HALLOWEEN</span>
          <span>by Nora Johnson</span>
        </div>
      </div>
    </div>
  );
}

export default Highlight;
