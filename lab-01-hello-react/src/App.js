import "./App.css";
import Navbar from "./Navbar/Navbar";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

function App() {
  return (
    <div >
      <div>
      <div>
        <Navbar />
      </div>
      <div  className="App-header">
        <h1>Say hello to my little firend ReactJS</h1>
        <p>
          You will learn how to use the most popular frontend library and become
          a super Ninja developer
        </p>
        <button>Awesome!</button>

      </div>
      </div>

      <div className="divInferior">
        <div className="optionsDivs">
          <img src={icon1} alt="icon1" />
          <h2>Declarative</h2>
          <h3>React makes ir painless to create interactive UIs.</h3>
        </div>
        <div className="optionsDivs">
          <img src={icon2} alt="icon2" />
          <h2>Components</h2>
          <h3>Build encapsulated components that manage their state</h3>
        </div>
        <div className="optionsDivs">
          <img src={icon3} alt="icon3" />
          <h2>Single-Way</h2>
          <h3>A set of inmutable values are passed to the component's</h3>
        </div>
        <div className="optionsDivs">
          <img src={icon4} alt="icon4" />
          <h2>JSX</h2>
          <h3>Statically-typed designed to run on the modern browsers.</h3>
        </div>
      </div>
    </div>
  );
}
export default App;
