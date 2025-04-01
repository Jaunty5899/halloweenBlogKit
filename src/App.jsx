import "./App.css";
import Button from "./Button.jsx";
import News from "./News.jsx";
import Highlight from "./Highlight.jsx";

function App() {
  return (
    <div className="container">
      <div className="columnOne">
        <Button data="LOG IN" />
        <Button data="SUBSCRIBE" />
        <News data="Decorate your home for Halloween" />
        <News data="DIY Halloween costumes" />
      </div>
      <div className="columnTwo">
        <Highlight />
        <Button data="CATEGORIES" />
        <Button data="CATEGORIES" />
        <Button data="CATEGORIES" />
        <Button data="CATEGORIES" />
        <Button data="CATEGORIES" />
        <Button data="CATEGORIES" />
      </div>
    </div>
  );
}

export default App;
