import './App.css';
import { Link, NavLink } from 'react-router-dom';

function App() {
  const produk = [
    { id: 1, nama: 'Black Garlic Original', harga: 'Rp 25.000', img: '/black-garlic1.png' },
    { id: 2, nama: 'Black Garlic Premium', harga: 'Rp 50.000', img: '/black-garlic2.png' },
    { id: 3, nama: 'Black Garlic Gold', harga: 'Rp 90.000', img: '/black-garlic3.png' }
  ];

  return (
    <div className="container">
      <nav className="navbar">
        {/* Mengganti teks dengan tag gambar */}
        <Link to="/" className="logo-link">
          <img 
            src="/logo-black-garlic.png" 
            alt="Dewata Black Garlic" 
            style={{ height: '50px', display: 'block' }} 
          />
        </Link>
        
        <ul className="nav-links">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-active" : ""}>
              Beranda
            </NavLink>
          </li>
          <li>
            <NavLink to="/produk" className={({ isActive }) => isActive ? "nav-active" : ""}>
              Produk
            </NavLink>
          </li>
          <li>
            <NavLink to="/tentang" className={({ isActive }) => isActive ? "nav-active" : ""}>
              Tentang Kami
            </NavLink>
          </li>
        </ul>
      </nav>

      <header className="hero">
        <h1>Produk Black Garlic</h1>
        <p>Pilih produk kesehatan terbaik untuk keluarga Anda.</p>
      </header>

      <div className="product-grid">
        {produk.map((item) => (
          <div key={item.id} className="card">
            <img src={item.img} alt={item.nama} className="card-img" />
            <h3>{item.nama}</h3>
            <p className="price">{item.harga}</p>
            <button className="wa-btn" onClick={() => window.open(`https://wa.me/6281234567890`)}>
              Beli via WhatsApp
            </button>
          </div>
        ))}
      </div>

      {/* Section: Kenapa Black Garlic */}
      <section style={{ padding: '60px 5%', textAlign: 'center', backgroundColor: '#fff' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#1c1c1c' }}>Mengapa Harus Mengonsumsi Black Garlic?</h2>
        <p style={{ maxWidth: '700px', margin: '0 auto 40px', color: '#4a4a4a', fontSize: '1.1rem' }}>
          Black Garlic kami diproses secara alami untuk mengunci nutrisi terbaik. Berikut adalah manfaat yang akan dirasakan tubuh Anda:
        </p>

        <div className="why-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '30px', 
          maxWidth: '1000px', 
          margin: '0 auto' 
        }}>
          <div className="why-item">
            <h3 style={{ color: '#bf9b30', marginBottom: '10px' }}>Tinggi Antioksidan</h3>
            <p style={{ fontSize: '0.9rem' }}>Kandungan antioksidan berkali lipat lebih tinggi dari bawang putih biasa.</p>
          </div>
          <div className="why-item">
            <h3 style={{ color: '#bf9b30', marginBottom: '10px' }}>Kesehatan Jantung</h3>
            <p style={{ fontSize: '0.9rem' }}>Membantu menjaga tekanan darah dan menurunkan kolesterol jahat.</p>
          </div>
          <div className="why-item">
            <h3 style={{ color: '#bf9b30', marginBottom: '10px' }}>Imunitas Tubuh</h3>
            <p style={{ fontSize: '0.9rem' }}>Memperkuat sistem imun agar Anda tidak mudah terserang penyakit.</p>
          </div>
        </div>
      </section>

      {/* Bagian testimoni sekarang sudah ada di dalam return */}
      <section className="testimoni-section" id="testimoni">
        <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#1c1c1c' }}>Testimoni</h2>
        
        {/* Pastikan div scroll-nya membungkus SEMUA kartu */}
        <div className="testimoni-scroll">
          <div className="testimoni-card">
            <p>"Kesehatan jantung saya membaik setelah rutin konsumsi Dewata Black Garlic. Sangat rekomended!"</p>
            <h4>- Arya Budi, Denpasar</h4>
          </div>
          
          <div className="testimoni-card">
            <p>"Bawang hitamnya legit, tidak terlalu asam dan tidak lembek. Kualitas premium banget, beda sama yang pernah saya beli di tempat lain."</p>
            <h4>- Siti Andriani, Jakarta</h4>
          </div>
          
          <div className="testimoni-card">
            <p>"Produk original dan pengiriman sangat cepat. Sangat puas belanja di sini!"</p>
            <h4>- Andi Prasetyo, Surabaya</h4>
          </div>

          <div className="testimoni-card">
            <p>"Setelah rutin konsumsi 3 butir sehari, stamina saya jauh lebih baik dan tidak gampang capek. Cocok banget buat yang punya kesibukan padat!"</p>
            <h4>- Made Ariawan, Tabanan</h4>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
