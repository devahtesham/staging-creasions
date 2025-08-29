"use client"; 

import { useEffect } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function ReCaptchaInitializer() {
  const { executeRecaptcha } = useGoogleReCaptcha();

  useEffect(() => {
    if (executeRecaptcha) {
      executeRecaptcha("page_load").then((token) => {
        // console.log("reCAPTCHA executed:", token);
      });
    }
  }, [executeRecaptcha]);

  return null;
}
