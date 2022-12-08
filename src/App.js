import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootLayout from "./components/root/RootLayout";
import Api from "./pages/Api";
import Todo from "./pages/Todo";
import Home from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="/api" element={<Api />}></Route>
      <Route path="/todo" element={<Todo />}></Route>
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
