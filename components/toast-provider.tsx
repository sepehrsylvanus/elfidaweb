"use client";

import { ToastContainer, type ToastContainerProps } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ToastProvider() {
  const toastProps = {
    position: "bottom-right",
    autoClose: 3500,
    hideProgressBar: false,
    newestOnTop: true,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    theme: "light",
    toastClassName: "toastify-toast",
    bodyClassName: "toastify-body", // 👈 TS اینو دیگه چک نمی‌کنه
    progressClassName: "toastify-progress",
  } as ToastContainerProps;
  return <ToastContainer {...toastProps} />;
}
