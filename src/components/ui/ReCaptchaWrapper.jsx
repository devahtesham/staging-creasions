"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import ReCaptchaInitializer from "./ReCaptchaInitializer";

export default function ReCaptchaWrapper({ children }) {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>
      <ReCaptchaInitializer />
      {children}
    </GoogleReCaptchaProvider>
  );
}
