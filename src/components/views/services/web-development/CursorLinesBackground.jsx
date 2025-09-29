"use client";
import { useEffect, useRef } from "react";

export default function CursorLinesBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const lineCount = 80;
    let spacing = width / lineCount;

    let mouseX = width / 3;
    let mouseY = height / 3;
    let radius = 250;
    let showCircle = false;

    // mouse move
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      showCircle = true;
    };

    // mouse leave
    const handleMouseLeave = () => {
      showCircle = false;
    };

    // resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      spacing = width / lineCount;
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // faint lines
      ctx.strokeStyle = "rgba(0, 102, 255, 0)";
      ctx.lineWidth = 1;
      for (let i = 0; i < lineCount; i++) {
        let x = i * spacing;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // highlight only inside circle
      // highlight only inside circle
if (showCircle) {
  ctx.save();

  // radial gradient mask
  let gradient = ctx.createRadialGradient(mouseX, mouseY, radius * 0.8, mouseX, mouseY, radius);
  gradient.addColorStop(0, "rgba(17, 38, 225, 0.73)");  // full color inside
  gradient.addColorStop(1, "rgba(0, 0, 0, 0)");  // fade out at edge

  ctx.strokeStyle = gradient;
  ctx.shadowBlur = 120;
  ctx.shadowColor = "rgba(0, 102, 255, 0.26)";

  for (let i = 0; i < lineCount; i++) {
    let x = i * spacing;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }

  ctx.restore();
  ctx.shadowBlur = 0;
}

    }

    function animate() {
      draw();
      requestAnimationFrame(animate);
    }

    animate();

    // cleanup
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="backgroundHover"
    />
  );
}
