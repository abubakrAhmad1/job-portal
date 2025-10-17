import { Routes, Route, Navigate } from "react-router-dom"; // ← Add Navigate here
import SignInPage from "../features/auth/components/Signin";
import SignUpPage from "../features/auth/components/Signup";
import JobList from "../features/jobs/components/JobList";
import MobileLayout from "../layouts/MobileLayout";
import CreateJobForm from "../features/jobs/components/CreateJob";
import ProtectedLayout from "../layouts/ProtectedLayout";
import Welcome from "../features/jobs/components/Welcome";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signin" replace />} />
      <Route path="/app" element={<ProtectedLayout />}>
        <Route path="createjob" element={<CreateJobForm />} />
        <Route path="dashboard" element={<MobileLayout />}>
          <Route path="list" element={<JobList />} />
        </Route>
      </Route>
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/joblist" element={<JobList />} />
      <Route path="/welcome" element = {<Welcome />}/>
    </Routes>
  );
}