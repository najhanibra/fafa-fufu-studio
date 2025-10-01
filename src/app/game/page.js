import Image from "next/image";

export default function GamePage() {
  return (
    <main>
      {/* Section 1 - Intro Game */}
      <section id="game" className="section game-section">
        <h1 className="text-4xl font-bold text-center mb-6">Tap n Match</h1>

        {/* Kotak Berputar */}
        <div className="game-preview flex justify-center mb-6">
          <div className="center-box rotating">
            <div className="side red"></div>
            <div className="side yellow"></div>
            <div className="side green"></div>
            <div className="side purple"></div>
          </div>
        </div>

        <p className="text-center max-w-2xl mx-auto">
          <strong>Tap n Match</strong> adalah game puzzle refleks seru di mana
          kamu harus memutar kotak di tengah agar warnanya sesuai dengan bola
          berwarna yang jatuh dari atas. Semakin lama kamu bermain, bola akan
          jatuh semakin cepat! ⚡ Tes reflekmu dan capai skor tertinggi 🎯
        </p>
      </section>

      {/* Section 2 - Fitur */}
      <section className="section">
        <h2 className="text-2xl font-bold mb-4 text-center">✨ Fitur Utama</h2>
        <ul className="features space-y-2 text-center">
          <li>🎨 Warna ceria: merah, kuning, hijau, ungu</li>
          <li>⚡ Gameplay cepat & menantang</li>
          <li>📈 Tingkat kesulitan meningkat seiring waktu</li>
          <li>🏆 Sistem skor untuk menguji refleksmu</li>
        </ul>
      </section>

      {/* Section 3 - Preview */}
      <section className="section preview-section">
        <h2 className="text-3xl font-bold text-center mb-8">📸 Preview Game</h2>

        <div className="preview-images flex flex-col md:flex-row items-center md:justify-center gap-8">
          <figure className="text-center">
            <Image
              src="/images/preview1.png"
              alt="Preview 1"
              width={400}
              height={0}
              style={{ height: "auto", borderRadius: "16px" }}
            />
            <figcaption className="mt-2">🎮 Tampilan Menu Utama</figcaption>
          </figure>

          <figure className="text-center">
            <Image
              src="/images/preview2.png"
              alt="Preview 2"
              width={400}
              height={0}
              style={{ height: "auto", borderRadius: "16px" }}
            />
            <figcaption className="mt-2">⚡ Gameplay Berlangsung</figcaption>
          </figure>

          <figure className="text-center">
            <Image
              src="/images/preview3.png"
              alt="Preview 3"
              width={400}
              height={0}
              style={{ height: "auto", borderRadius: "16px" }}
            />
            <figcaption className="mt-2">🏆 Skor & Hasil Akhir</figcaption>
          </figure>
        </div>
      </section>

      {/* Section 4 - CTA */}
      <section className="section text-center">
        <h2 className="text-2xl font-bold mb-4">🚀 Segera Rilis!</h2>
        <p className="mb-4">
          Nantikan <strong>Tap n Match</strong> di platform Android & iOS.  
          Jangan lewatkan update terbaru dari kami!
        </p>
        <a href="/#contact" className="download-btn">
          Hubungi Kami
        </a>
      </section>
    </main>
  );
}
