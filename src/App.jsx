
import "./App.css";
import { SignUp } from "./component/Auth/signUp";
import { Dashboard } from "./component/dashboard/dashboard";
import { ContextProvider } from "./config/context";
import { MainLayout } from "./pageLayout";
import { Route, Routes } from "react-router";

function App() {
  const data = ContextProvider()
  console.log(data)
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
