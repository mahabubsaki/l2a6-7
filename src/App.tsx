import { Fragment } from "react";
import Navbar from "./components/ui/Navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from 'sonner';

const App = () => {
  return (
    <Fragment>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Outlet />
      </main>
      <Toaster richColors position="top-center" />
    </Fragment>
  );
};

export default App;