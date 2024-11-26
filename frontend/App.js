import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import { AuthProvider } from "./useAuth";

const App = () => (
    <AuthProvider>
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    </AuthProvider>
);

export default App;

