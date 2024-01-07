import { Outlet } from "react-router-dom";
import { MisdeamnorFilterProvider } from "../hooks/filterMisdemeanourContext";

const MainLayout: React.FC = () => {
  return (
    <main>
      <MisdeamnorFilterProvider>
        <Outlet />
      </MisdeamnorFilterProvider>
    </main>
  );
};

export default MainLayout;
