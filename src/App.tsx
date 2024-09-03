import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import TopBarProgress from "react-topbar-progress-indicator";

import Router from "./Router";

import "./App.css";

const App = () => {
  TopBarProgress.config({
    barColors: {
      "0": "#fff",
      "0.3": "#6fbe95",
      "0.6": "#53e618",
      "1.0": "#e62118",
    },
    shadowBlur: 5,
  });

  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <>
            <TopBarProgress />
          </>
        }
      >
        <Router />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
