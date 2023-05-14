import React, { useState, lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";

// Utils
import { getIdInstance, getApiTokenInstance } from "../utils";

const MainPage = lazy(() => import("./pages/Main/MainPage"));
const LoginPage = lazy(() => import("./pages/Login/Login"));

const App = () => {
  const idInstance = getIdInstance();
  const apiTokenInstance = getApiTokenInstance();

  return (
    <>
      <BrowserRouter>
        <HelmetProvider>
          <Suspense
            fallback={
              <section className="flex flex-col items-center justify-center min-h-screen">
                <h1>Loading...</h1>
              </section>
            }
          >
            <Routes>
              <Route
                path="*"
                element={
                  <Navigate to={idInstance && apiTokenInstance ? "/" : "/"} />
                }
              />
              {idInstance && apiTokenInstance ? (
                <Route
                  path="/"
                  element={<MainPage title="Main | Whatsapp green-api" />}
                />
              ) : (
                <Route
                  path="/"
                  element={<LoginPage title="Login | Whatsapp green-api" />}
                />
              )}
            </Routes>
          </Suspense>
        </HelmetProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
