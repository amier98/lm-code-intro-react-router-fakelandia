import { Route, Routes } from "react-router-dom";
import ConfessionPage from "../confession/confession";
import HomePage from "../homePage";
import MainLayout from "../layout/mainLayout";
import Misdeamenaors from "../misdemeanour/misdeameanour";

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route path="home" index element={<HomePage />} />
      <Route path="misdeameanors" element={<Misdeamenaors />} />
      <Route path="confession" element={<ConfessionPage />} />
    </Route>
  </Routes>
);

export default Router;
