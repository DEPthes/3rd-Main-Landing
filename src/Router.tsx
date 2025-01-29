import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "@pages/MainPage";
import Layout from "@components/Layout";
import ServicePage from "@pages/ServicePage";
import HelpPage from "@pages/HelpPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/service/:id" element={<ServiceDetailPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/help" element={<HelpPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
