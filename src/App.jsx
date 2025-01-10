import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./assets/routes/AppRoutes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUsers } from "./assets/redux/features/userDetailsSlice";

function App() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);
  return (
    <>
      <Router>
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;
