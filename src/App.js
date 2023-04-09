import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import Header from "./layout/Header";
import HomeContextProvider from "./context/homeContext/HomeContext";

function App() {
  return (
    <HomeContextProvider>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </HomeContextProvider>
  );
}

export default App;
