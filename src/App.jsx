import { Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import MissingPage from "./pages/MissingPage";
import CircleDesign from "./components/CircleDesign";
import useRefresh from "./hook/userRefresh";
import { useEffect } from "react";
import { AllRoutes } from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {

  const { refreshLogin } = useRefresh();
  const navigate = useNavigate();
  const queryClient = new QueryClient();

  useEffect(() => {
    const handleRefresh = async () => {
      const accessToken = await refreshLogin();

      if (accessToken) {
        const lastVisited = localStorage.getItem("lastVisited") || "/";
        localStorage.removeItem("lastVisited");
        navigate(lastVisited, { replace: true });
      }
    };

    handleRefresh();
  }, [refreshLogin]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="dashboard" element={<DashboardPage />} />

            {AllRoutes()}

            <Route path="*" element={<MissingPage />} />
          </Route>
        </Routes>
        <CircleDesign />
      </QueryClientProvider>
    </>
  );
}

export default App;
