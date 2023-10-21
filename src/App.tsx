import "./App.css";
import Routes from "./components/Routes";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App w-full h-screen">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
