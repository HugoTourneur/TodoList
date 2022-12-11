import { createContext, useState } from "react";
import "../styles/globals.css";

const context = createContext();

const MyApp = ({ Component, pageProps }) => {
  const [state, setState] = useState([]);
  const [showAddListModal, setShowAddListModal] = useState(false);
  const [displayedList, setDisplayedList] = useState(["hell", "o"]);

  setState;

  return (
    <context.Provider
      value={{
        state,
        setState,
        showAddListModal,
        setShowAddListModal,
        displayedList,
        setDisplayedList,
      }}
    >
      <Component {...pageProps} />
    </context.Provider>
  );
};

export default MyApp;
export { context };
