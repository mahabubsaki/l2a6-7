import { Fragment } from "react";
import Navbar from "./components/ui/Navbar";
import { Outlet } from "react-router-dom";


const App = () => {
  return (
    <Fragment>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
};

export default App;