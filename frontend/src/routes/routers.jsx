import { Routes, Route } from "react-router-dom";
import SignInPage from "../features/auth/components/Signin";
import SignUpPage from "../features/auth/components/Signup";
import JobList from "../features/jobs/components/JobList";
import MobileLayout from "../layouts/MobileLayout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/joblist" element={<JobList />} />
      <Route path="/dashboard" element={<MobileLayout />}>
        <Route path="list" element={<JobList />} />
      </Route>
    </Routes>
  );
}
