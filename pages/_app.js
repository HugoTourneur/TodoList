import { createContext, useState } from "react";
import "../styles/globals.css";

const context = createContext();

const MyApp = ({ Component, pageProps }) => {
  const [state, setState] = useState([]);
  const [showAddListModal, setShowAddListModal] = useState(false);

  setState;

  return (
    <context.Provider
      value={{ state, setState, showAddListModal, setShowAddListModal }}
    >
      <Component {...pageProps} />
    </context.Provider>
  );
};

export default MyApp;
export { context };
