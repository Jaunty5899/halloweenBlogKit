import "./Button.css";

function Button({ data }) {
  return (
    <>
      <button className="btn">
        <span>{data}</span>
      </button>
    </>
  );
}

export default Button;
