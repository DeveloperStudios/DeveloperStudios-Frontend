"use client"

import { ReactLenis } from "lenis/react";
import { Toaster } from "react-hot-toast";

export default function Providers({ children }) {
  return (
    <ReactLenis root>
      <Toaster position="top-right" reverseOrder={false} />
      {children}
    </ReactLenis>
  );
}