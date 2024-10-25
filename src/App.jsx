import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contracts from "./pages/contracts/Contracts";
import Layout from "./pages/layout";
import Projects from "./pages/projects/Projects";
import AddContracts from "./pages/contracts/AddContracts";
import FirstMainForm from "./pages/contracts/firstMainForm/FirstMainForm";
import BOQ from "./pages/contracts/BOQ/BOQ";
import Deduction from "./pages/contracts/deduction/Deduction";
import Addition from "./pages/contracts/addition/Addition";
import Summary from "./pages/contracts/summary/Summary";
function App() {
  const route = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Projects />,
        },
        {
          path: "contracts",
          element: <Contracts />,
        },
        {
          path: "/contract/addContract",
          element: <AddContracts />,
          children: [
            {
              path: "",
              element: <FirstMainForm />,
            },
            {
              path: "BOQ",
              element: <BOQ />,
            },
            {
              path: "deduction",
              element: <Deduction />,
            },
            {
              path: "addition",
              element: <Addition />,
            },
            {
              path: "summary",
              element: <Summary />,
            },
          ],
        },
      ],
    },
  ]);;
  return (
    <>
      <RouterProvider router={route}></RouterProvider>
    </>
  );
}

export default App;
