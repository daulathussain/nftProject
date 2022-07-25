import { useState } from "react";
import { ThemeProvider } from "next-themes";

//IMTERNAL INPORT
import "../styles/globals.css";
import { NavBar, Footer, Sidebar } from "../components";

const MyApp = ({ Component, pageProps }) => {
  const [opneSidebar, setOpneSidebar] = useState(false);
  return (
    // <ThemeProvider attribute="class">
    <div>
      <NavBar opneSidebar={opneSidebar} setOpneSidebar={setOpneSidebar} />

      {opneSidebar ? (
        <Sidebar opneSidebar={opneSidebar} setOpneSidebar={setOpneSidebar} />
      ) : (
        ""
      )}

      <div>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
    // </ThemeProvider>
  );
};

export default MyApp;
