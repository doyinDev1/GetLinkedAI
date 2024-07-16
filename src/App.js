import Header from "./components/Header/Header";
import classes from './App.module.css'
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";

function App() {
  return (
    <div className={classes.container}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
