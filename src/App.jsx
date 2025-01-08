import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import LoginPage from "./assets/pages/Login";
import { BrowserRouter as Router} from 'react-router-dom';
import AppRoutes from "./assets/routes/AppRoutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;
