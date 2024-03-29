import { Fragment } from "react";
import Navbar from "./components/ui/Navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from 'sonner';
import Footer from "./components/ui/Footer";

const App = () => {
  return (
    <Fragment>
      <nav>
        <Navbar />
      </nav>
      <main className="my-4 px-6 md:px-0">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
      <Toaster duration={3000} richColors position="top-center" visibleToasts={1} />
    </Fragment>
  );
};

export default App;