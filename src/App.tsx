import "./App.css";


import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";
import Main from "./components/Main";

function App(): JSX.Element {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <Main />
    </div>
  );
}

export default App;
