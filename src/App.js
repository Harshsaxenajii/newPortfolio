import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./Components/Index";
import PleaseWait from "./Components/PleaseWait";

const NotFound = React.lazy(() => import("./Components/PageNotFound"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
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
