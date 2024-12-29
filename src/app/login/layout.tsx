"use client";

import { Bounce, ToastContainer } from "react-toastify";

export function ToastProvider() {
  return (
    <ToastContainer
      position="top-center"
      autoClose={5000}
      limit={3}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Bounce}
    />
  );
}
