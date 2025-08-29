import Image from "next/image";
import "./loading.css"; 
import Logo from "/public/footer-logo.webp";

export default function Loading() {
  return (
    <div className="loading-container">
      <div className="logo-container pulse-animation"> {/* Add pulse-animation class */}
        <Image 
          src={Logo} 
          alt="Loading" 
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
    </div>
  );
}
