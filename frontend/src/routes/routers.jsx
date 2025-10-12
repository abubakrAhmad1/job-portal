import { Routes, Route } from "react-router-dom";
import SignInPage from "../features/auth/components/Signin";
import SignUpPage from "../features/auth/components/Signup";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
}
