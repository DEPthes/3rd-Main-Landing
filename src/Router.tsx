import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "@pages/MainPage";
import Layout from "@components/common/Layout";
import ServicePage from "@pages/ServicePage";
import HelpPage from "@pages/HelpPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/help" element={<HelpPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
