"use client"
import { useState } from "react";

export default function ColorBoxLayout({ children, left, right }) {

  const [isSidebar , setIsSidebar] = useState(false)
  return (
    <section>
      {children}
      {isSidebar ? left : right}
       <button onClick={() => setIsSidebar(!isSidebar)}>change</button>
    </section>
  );
}
