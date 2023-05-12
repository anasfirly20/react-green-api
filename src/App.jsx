import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";

const MainPage = lazy(() => import("./pages/Main/MainPage"));

const App = () => {
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
                path="/"
                element={<MainPage title="Whatsapp green-api" />}
              />
            </Routes>
          </Suspense>
        </HelmetProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
