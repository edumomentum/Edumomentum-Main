"use client";
// src/app/layout.jsx
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";

const metadata = {
  title: "EduMomentum",
  description: "Parent Company with Multiple Brands",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>{/* You can add additional head elements here */}</head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
