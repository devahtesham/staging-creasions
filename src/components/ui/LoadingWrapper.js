"use client";

import { useEffect, useState } from "react";
import Loading from "@/components/ui/loading"; 

export default function LoadingWrapper({ children }) {
  const [loading, setLoading] = useState(true);
  const [loadingClass, setLoadingClass] = useState("");

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setLoading(false); 
    }, 3500); 

    const hideTimer = setTimeout(() => {
      setLoadingClass("loading-finish");

    }, 3200); 

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  // Hiding Scroll bar
  useEffect(() => {
    if (loading) {
      document.documentElement.style.overflowY = 'hidden'; 
    } else {
      document.documentElement.style.overflowY = 'auto';
    }

    return () => {
      document.documentElement.style.overflowY = 'auto';
    };
  }, [loading]);


  return (
    <>
      {loading ? (
        <div className={`loading-container ${loadingClass}`}>
          <Loading />
        </div>
      ) : (
        <div className="main-content">
          {children}
        </div>
      )}
    </>
  );
}
