import "../styles/globals.css";
import { useState, useContext, createContext } from "react";

const context = createContext();

const MyApp = ({ Component, pageProps }) => {
  const [state, setState] = useState([]);

  setState;

  return (
    <context.Provider value={{ state, setState }}>
      <Component {...pageProps} />
    </context.Provider>
  );
};

export default MyApp;
export { context };
