import "../src/index.css";
import Article from "./components/article/Article";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import Right from "./components/right/Right";

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="flexbox">
        <Article />
        <Main />
        <Right />
      </div>
    </div>
  );
}

export default App;
