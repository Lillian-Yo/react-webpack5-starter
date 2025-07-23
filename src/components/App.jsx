import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import routes from "../routes";

export const App = () => {
  return (
    <BrowserRouter>
      <nav>
        {routes.map((route) => (
          <Link key={route.path} to={route.path} style={{ marginRight: 8 }}>
            {route.label}
          </Link>
        ))}
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map((route) => {
            const LazyComponent = lazy(route.loader);
            return (
              <Route
                key={route.path}
                path={route.path}
                element={<LazyComponent />}
              />
            );
          })}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
