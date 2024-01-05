import { Outlet } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import { Misdemeanour } from "../../types/misdemeanours.types";
import useMisdeamnorContext from "../hooks/useContextMisdeamenour";

export const MisdeamnorContext = createContext<Misdemeanour[]>([]);

function MainLayout() {
  const data = useMisdeamnorContext();

  return (
    <>
      <main>
        <MisdeamnorContext.Provider value={data || []}>
          <Outlet />
        </MisdeamnorContext.Provider>
      </main>
    </>
  );
}

export default MainLayout;
