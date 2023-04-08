import React from "react";

import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import PleaseWait from "./Components/PleaseWait";
const LazyIndex = React.lazy(() => import("./Components/Index"));
const NotFound = React.lazy(() => import("./Components/PageNotFound"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<PleaseWait />}>
              <LazyIndex />
            </React.Suspense>
          }
        />
        <Route
          path="*"
          element={
            <React.Suspense fallback={<PleaseWait />}>
              <NotFound />
            </React.Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
