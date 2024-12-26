import "./News.css";

function News({ data }) {
  return (
    <div className="news-box">
      <img src="https://picsum.photos/220/140" alt="" />
      <h3>{data}</h3>
    </div>
  );
}

export default News;
