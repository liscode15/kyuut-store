import React, { useState } from 'react';
import './App.css';

// Impor semua gambar dari folder assets. Sesuaikan nama file jika berbeda.
import gambar1 from './assets/gambar-1.jpg';
import gambar2 from './assets/gambar-2.jpg';
import gambar3 from './assets/gambar-3.jpg';
import gambar4 from './assets/gambar-4.jpg';
import gambar5 from './assets/gambar-5.jpg';
import gambar6 from './assets/gambar-6.jpg';
import gambar7 from './assets/gambar-7.jpg';
import gambar8 from './assets/gambar-8.jpg';
import gambar9 from './assets/gambar-9.jpg';

// Buat array yang berisi semua gambar
const productImages = [
  gambar1, gambar2, gambar3, gambar4, gambar5,
  gambar6, gambar7, gambar8, gambar9
];

// Komponen Card Produk
function ProductCard({ imageSrc, style }) {
  const [selectedSize, setSelectedSize] = useState('');

  const sizes = ['S', 'M'];

  const handleOrder = () => {
    if (!selectedSize) {
      alert('Pilih Ukuran terlebih dahulu!');
      return;
    }

    const phoneNumber = '6287815884094';
    const message = `Halo kak, saya mau pesan produknya.%0APilihan saya:%0AUkuran: ${selectedSize}%0ATerima kasih!`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="product-card" style={style}>
      <img src={imageSrc} alt="Product" className="product-image" />
      <div className="product-options">
        <div className="option-group">
          <label htmlFor="size-select">Ukuran</label>
          <select id="size-select" value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
            <option value="">Pilih Ukuran</option>
            {sizes.map((size, index) => (
              <option key={index} value={size}>{size}</option>
            ))}
          </select>
        </div>
      </div>
      <button className="order-button" onClick={handleOrder}>
        PESAN
      </button>
    </div>
  );
}

// Komponen Utama (Menampilkan Grid Produk)
function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>KYUUT</h1>
      </header>
      <h2 className="collection-title">CUTBRAY COLLECTION</h2>
      <main>
        <div className="product-grid">
          {productImages.map((image, index) => (
            <ProductCard 
              key={index} 
              imageSrc={image} 
              style={{ animationDelay: `${index * 0.1}s` }} 
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;