import React, { useState, lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";

const MainPage = lazy(() => import("./pages/Main/MainPage"));
const LoginPage = lazy(() => import("./pages/Login/Login"));

const App = () => {
  const getIdInstance = localStorage.getItem("idInstance");
  const getApiTokenInstance = localStorage.getItem("apiTokenInstance");

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
              <Route path="*" element={<Navigate to="/" />} />
              {getIdInstance && getApiTokenInstance ? (
                <Route
                  path="/main"
                  element={<MainPage title="Whatsapp green-api" />}
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
