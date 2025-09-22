import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminProvider } from "../contexts/AdminContext";
import SiteLayout from "../components/layouts/SiteLayout";
import Home from "../pages/user/Home";
import Portfolio from "../pages/user/Portfolio";
import Resume from "../pages/user/Resume";
import Contact from "../pages/user/Contact";
import AdminLogin from "../pages/admin/Login";
import AdminDashboard from "../pages/admin/Dashboard";
import ProtectedRoute from "../components/admin/ProtectedRoute";

function App() {
  return (
    <AdminProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Route>
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route 
            path="/admin/dashboard" 
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </BrowserRouter>
    </AdminProvider>
  );
}

export default App;
