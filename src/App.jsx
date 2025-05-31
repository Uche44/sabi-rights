import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AccountTypeProvider } from "./context/AccountTypeContext";
import AuthContextProvider from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import Auth from "./pages/auth/Auth";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import SetUserProfile from "./pages/SetUserProfile";
import DashboardLayout from "./layout/DashBoardLayout";
import UserDashboard from "./pages/dashboard/UserDashboard";
import NgoDashboard from "./pages/dashboard/NgoDashboard";

const App = () => {
  return (
    <BrowserRouter>
      <AccountTypeProvider>
        <AuthContextProvider>
          <Routes>
            <Route
              path="/"
              element={<HomePage />}
            />

            <Route
              path="/auth"
              element={<Auth />}
            >
              <Route
                path="login"
                element={<Login />}
              />
              <Route
                path="signup"
                element={<SignUp />}
              />
            </Route>

            <Route
              path="/user-profile"
              element={<SetUserProfile />}
            />
            <Route
              path="/dashboard"
              element={<DashboardLayout />}
            >
              <Route
                path="user"
                element={<UserDashboard />}
              />
              <Route
                path="ngo"
                element={<NgoDashboard />}
              />
            </Route>
          </Routes>
        </AuthContextProvider>
      </AccountTypeProvider>
    </BrowserRouter>
  );
};

export default App;
