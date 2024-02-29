import "./App.css";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import Porfolio from "./components/Portfolio/Porfolio";
import Todo from "./components/TodoPrac/Todo";

function App() {
  return (
    <>
      <Navigation />
      <Porfolio />
      <Todo />
      <Footer />
    </>
  );
}

export default App;
