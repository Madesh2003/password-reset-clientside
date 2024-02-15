import React from "react";
import Form from "./Components/Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResetPassword from "./Components/ResetPassword";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/resetpassword/:token" element={<ResetPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
