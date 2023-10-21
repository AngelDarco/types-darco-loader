import { Route } from "wouter";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
const Routes = () => {
  return (
    <>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/projects">
        <Home />
      </Route>
    </>
  );
};
export default Routes;
