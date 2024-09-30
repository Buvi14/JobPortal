import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/app-layout";
import Landing from "./pages/landing";
import Onboarding from "./pages/onboarding";
import Jobs from "./pages/job";
import PostJob from "./pages/post-job";
import SavedJobs from "./pages/saved-jobs";
import MyJobs from "./pages/my-jobs";
import JobListing from "./pages/job-listing";
import { ThemeProvider } from "./components/theme-provide";
import ProtectedRoute from "./components/proctected-route";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/onboarding",
        element: <ProtectedRoute><Onboarding /></ProtectedRoute>
        ,
      },
      {
        path: "/jobs",
        element: <ProtectedRoute><JobListing /></ProtectedRoute>,
      },
      {
        path: "/job/:id",
        element: <ProtectedRoute>
          <Jobs />
        </ProtectedRoute>,
      },
      {
        path: "/post-job",
        element: <ProtectedRoute><PostJob /></ProtectedRoute>,
      },
      {
        path: "/saved-jobs",
        element: <ProtectedRoute><SavedJobs /></ProtectedRoute>,
      },
      {
        path: "/my-jobs",
        element: <ProtectedRoute><MyJobs /></ProtectedRoute>,
      },
    ],
  },
]);
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
