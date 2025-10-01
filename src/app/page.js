"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const homeSection = document.getElementById("home");

    function createBall() {
      const ball = document.createElement("div");
      ball.classList.add("falling-ball");

      const colors = ["#ff4d4d", "#ffeb3b", "#4caf50", "#8e24aa"];
      ball.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      ball.style.left = Math.random() * 100 + "vw";
      ball.style.animationDuration = 3 + Math.random() * 4 + "s";
      ball.style.width = ball.style.height =
        10 + Math.random() * 20 + "px";

      homeSection.appendChild(ball);

      setTimeout(() => {
        ball.remove();
      }, 7000);
    }

    const interval = setInterval(createBall, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      {/* HOME */}
      <section id="home" className="section">
        <h1>Welcome to Fafa-Fufu Studio</h1>
        <p>
          Kami adalah studio kreatif yang bergerak di bidang desain, teknologi,
          dan inovasi. Gulir ke bawah untuk tahu lebih banyak.
        </p>

        <div className="game-items">
          <div className="game-item red"></div>
          <div className="game-item yellow"></div>
          <div className="game-item green"></div>
          <div className="game-item purple"></div>
        </div>

        {/* Wave ke About */}
        <div className="wave">
          <svg
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#ffecb3"
              d="M0,160L80,170.7C160,181,320,203,480,197.3C640,192,800,160,960,165.3C1120,171,1280,213,1360,234.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <h1>About Us</h1>
        <p>
          Fafa-Fufu Studio berfokus pada pembuatan aplikasi modern, desain
          kreatif, dan solusi digital inovatif untuk berbagai kebutuhan klien.
          <br />
          Salah satu karya kami adalah <strong>Tap n Match</strong>, game dengan
          nuansa ceria, penuh warna, dan gaya kartunis minimalis.
        </p>

        
        <div className="wave">
  <svg viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="#ffecb3"
      d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200 120 L0 120 Z"
    />
  </svg>
</div>
      </section>

      
      <section id="contact" className="section">
        <h1>Contact Us</h1>
        <p>
          Email: contact@fafafufu.com <br />
          WhatsApp: +62 812-3456-7890
        </p>
      </section>
    </main>
  );
}
