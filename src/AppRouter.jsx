import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  UsersPage,
  TodayPage,
  DashboardPage,
  LoginPage,
  ReservationHistoryPage,
  HomePage,
} from "./pages";
import Navbar from "./components/navbar/Navbar";

function AppRouter() {
  return (
    <Routes>
      <Route index element={<LoginPage />} />
      <Route path="/" element={<Navbar />}>
        <Route path="home-page" element={<HomePage />} />
        <Route path="dashboard-page" element={<DashboardPage />} />
        <Route path="users-page" element={<UsersPage />} />
        <Route path="today-page" element={<TodayPage />} />
        <Route
          path="reservation-history"
          element={<ReservationHistoryPage />}
        />
      </Route>

      <Route path="*" element={<Navigate to="home-page" />} />
    </Routes>
  );
}

export default AppRouter;
