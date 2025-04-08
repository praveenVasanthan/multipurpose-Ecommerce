import "./styles/App.css";
import { MyContext } from "./context/Context";
// import { useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainRouter from "./routes/MainRouter";

function App() {
  // const { webName } = useContext(MyContext);
  const Router = createBrowserRouter(MainRouter);
  return <RouterProvider router={Router} />;
}

export default App;
