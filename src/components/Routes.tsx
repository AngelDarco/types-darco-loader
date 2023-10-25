import { Route } from "wouter";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Offers from "./pages/offers/Offers";
import Price from "./pages/price/Price";
import Clients from "./pages/clients/Clients";
import Contact from "./pages/contact/Contact";
import Car from "./pages/car/Car";
const Routes = () => {
  return (
    <>
    <Route path="/" component={Home} />
    <Route path="/offers" component={Offers} />
    <Route path="/prices" component={Price} />
    <Route path="/about" component={About} />
    <Route path="/clients" component={Clients} />
    <Route path="/contact" component={Contact} />
    <Route path="/car" component={Car} />
    </>
  );
};
export default Routes;
