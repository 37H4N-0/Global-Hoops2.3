const shoeDatabase = [
  // NIKE LINES
  { id: 1, brand: "NIKE", line: "LEBRON SERIES", name: "LeBron 21 'Dragonhead'", date: "2026-04-20T10:00:00", price: 200, hype: 5, tech: "Air Zoom + Cushlon", img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/0329433d-c019-4822-8b4e-28268c15985b/lebron-xxi-basketball-shoes-SPh6ms.png" },
  { id: 2, brand: "NIKE", line: "KD SERIES", name: "KD 17 'Sunrise'", date: "2026-05-15T10:00:00", price: 150, hype: 4, tech: "Air Zoom + TPU Shank", img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/60451a94-486a-495c-9c98-17a7e3d23f39/kd17-basketball-shoes-0pB6Dq.png" },
  { id: 3, brand: "NIKE", line: "KOBE SERIES", name: "Kobe 6 Protro 'Italian Camo'", date: "2026-04-13T10:00:00", price: 190, hype: 5, tech: "Zoom Turbo Foam", img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/28877146-5991-455b-b9d0-f1d2932f9191/kobe-vi-protro-basketball-shoes-6X6v6C.png" },

  // JORDAN LINES
  { id: 4, brand: "JORDAN", line: "TATUM SERIES", name: "Tatum 2 'Vortex'", date: "2026-04-18T10:00:00", price: 125, hype: 4, tech: "Air Foam + Zoom", img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/3757e841-f09b-4682-9f37-6f81e64c3c35/tatum-2-basketball-shoes-v4V9L6.png" },
  { id: 5, brand: "JORDAN", line: "ZION SERIES", name: "Zion 3 'Muddy Waters'", date: "2026-04-05T10:00:00", price: 140, hype: 3, tech: "Formula 23 + Zoom", img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/61e89f81-9988-4665-9831-7e8c37c2d7f8/zion-3-basketball-shoes-SPh6ms.png" },

  // ADIDAS LINES
  { id: 6, brand: "ADIDAS", line: "ANTHONY EDWARDS", name: "AE1 'Ascent'", date: "2026-04-22T10:00:00", price: 120, hype: 5, tech: "Jet Boost", img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7f6517a618e04099a43e49e061c27df6_9366/AE_1_Velocity_Blue_Shoes_Blue_IF1864_01_standard.jpg" },
  { id: 7, brand: "ADIDAS", line: "DONOVAN MITCHELL", name: "D.O.N. Issue 6", date: "2026-05-30T10:00:00", price: 120, hype: 3, tech: "Lightstrike Pro", img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/33b0066b1e8e45308638686e686e686e_9366/DON_Issue_5_Shoes_Black_IF1864_01_standard.jpg" },

  // PUMA LINES
  { id: 8, brand: "PUMA", line: "LAMELO BALL", name: "MB.03 'Spark'", date: "2026-04-12T10:00:00", price: 125, hype: 5, tech: "Nitro Foam", img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:f3f3f3,w_600,h_600/global/309851/01/sv01/fnd/PNA/fmt/png/MB.03-Blue-Hive-Basketball-Shoes" },
  { id: 9, brand: "PUMA", line: "BREANNA STEWART", name: "Stewie 3 'Tokyo'", date: "2026-05-10T10:00:00", price: 125, hype: 3, tech: "ProFoam+", img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:f3f3f3,w_600,h_600/global/309851/01/sv01/fnd/PNA/fmt/png/Stewie-2-Basketball-Shoes" },

  // ASIAN & BOUTIQUE LINES
  { id: 10, brand: "LI-NING", line: "WAY OF WADE", name: "WoW 11 'White Hot'", date: "2026-04-01T10:00:00", price: 225, hype: 5, tech: "Boom Tech", img: "https://www.wayofwade.com/cdn/shop/files/1_2989c79e-4e5d-4c81-998a-2c4033c5e8d5_800x.png" },
  { id: 11, brand: "ANTA", name: "Kai 1 'Triple Black'", line: "KYRIE IRVING", date: "2026-04-28T10:00:00", price: 125, hype: 5, tech: "NitroEdge", img: "https://images.complex.com/complex/images/c_fill,f_auto,g_center,w_1200/fl_lossy,pg_1/v9qjvz6j8f5m7k4n5o9d/anta-kai-1-artist-on-court" },
  { id: 12, brand: "361", name: "DVD 2.0 Dinwiddie", line: "SPENCER DINWIDDIE", date: "2026-03-22T10:00:00", price: 100, hype: 3, tech: "Enertia Foam", img: "https://www.361usa.com/cdn/shop/files/DVD2-1_800x.jpg" },
  { id: 13, brand: "UNDER ARMOUR", line: "CURRY BRAND", name: "Curry 12 'Dub Nation'", date: "2026-04-15T10:00:00", price: 160, hype: 4, tech: "UA Flow", img: "https://underarmour.scene7.com/is/image/UnderArmour/3026620-100_DEFAULT?wid=566&hei=708" }
];

function getStockHtml(shoe, isFuture) {
  if (isFuture) return "";
  if (shoe.hype === 5) return '<span class="stock-badge stock-sold">SOLD OUT</span>';
  if (shoe.hype === 4) return '<span class="stock-badge stock-low">LOW STOCK</span>';
  return '<span class="stock-badge stock-ok">AVAILABLE</span>';
}

function renderShoes() {
  const query = document.getElementById('search-bar').value.toLowerCase();
  const priceMax = document.getElementById('price-filter').value;
  const fGrid = document.getElementById('future-grid');
  const rGrid = document.getElementById('recent-grid');
  fGrid.innerHTML = ''; rGrid.innerHTML = '';
  const now = new Date().getTime();

  shoeDatabase.forEach(shoe => {
    if (query && !shoe.name.toLowerCase().includes(query) && !shoe.brand.toLowerCase().includes(query) && !shoe.line.toLowerCase().includes(query)) return;
    if (priceMax !== 'all' && shoe.price > parseInt(priceMax)) return;

    const isFuture = new Date(shoe.date).getTime() > now;
    const card = document.createElement('div');
    card.className = 'shoe-card';
    card.onclick = () => openModal(shoe);
    
    const statusTag = isFuture 
      ? `<div id="timer-${shoe.id}" class="timer-box">00:00:00</div>` 
      : `<div class="status-label">RELEASED ${getStockHtml(shoe, false)}</div>`;
    
    card.innerHTML = `
      <div class="image-container"><img src="${shoe.img}"></div>
      <div class="hype-meter">${"🔥".repeat(shoe.hype)}</div>
      <span class="line-tag">${shoe.brand} // ${shoe.line}</span>
      ${statusTag}
      <div class="shoe-name">${shoe.name}</div>
      <div class="shoe-price" style="font-size:0.8rem; color:#888;">$${shoe.price} // ${shoe.tech}</div>
    `;

    if (isFuture) { fGrid.appendChild(card); updateTimer(shoe.date, `timer-${shoe.id}`); } 
    else { rGrid.appendChild(card); }
  });
}

function updateTimer(targetDate, elementId) {
  const target = new Date(targetDate).getTime();
  const timer = setInterval(() => {
    const diff = target - new Date().getTime();
    if (diff < 0) { clearInterval(timer); renderShoes(); return; }
    const d = Math.floor(diff/864e5), h = Math.floor((diff%864e5)/36e5), m = Math.floor((diff%36e5)/6e4), s = Math.floor((diff%6e4)/1000);
    const el = document.getElementById(elementId);
    if (el) el.innerText = `${d}D:${h}H:${m}M:${s}S`;
  }, 1000);
}

function openModal(shoe) {
  const isFuture = new Date(shoe.date).getTime() > new Date().getTime();
  const btn = isFuture 
    ? `<button class="notify-btn">SET DROP NOTIFICATION</button>`
    : `<a href="https://stockx.com/search?s=${encodeURIComponent(shoe.name)}" target="_blank" class="buy-btn">SHOP COLLECTION</a>`;

  document.getElementById('modal-body').innerHTML = `
    <img src="${shoe.img}" style="width:100%; filter: drop-shadow(0 30px 60px rgba(0,0,0,0.2));">
    <div class="modal-info">
      <p style="color:var(--accent); font-weight:900;">${shoe.line}</p>
      <h2>${shoe.name}</h2>
      <p style="text-transform:none; color:#666; line-height:1.6;">Official signature performance tool for the 2026 season. Featuring elite-grade ${shoe.tech} for high-impact protection.</p>
      <div style="border-top:1px solid var(--border); margin-top:20px; padding-top:20px; font-size:0.9rem;">
        <p><strong>RETAIL:</strong> $${shoe.price}</p>
        <p><strong>LINEAGE:</strong> ${shoe.line}</p>
        <p><strong>ENGINEERING:</strong> ${shoe.tech}</p>
      </div>
      ${btn}
    </div>`;
  document.getElementById('modal').style.display = "block";
  document.body.classList.add('modal-open');
}

function initHero() {
  const highHype = shoeDatabase.filter(s => s.hype === 5);
  const shoe = highHype[Math.floor(Math.random() * highHype.length)];
  document.getElementById('featured-hero').innerHTML = `
    <div class="hero-content">
      <div class="hero-text"><h3>SIGNATURE SPOTLIGHT</h3><h2>${shoe.name}</h2><button class="buy-btn" style="width:auto; padding:15px 40px;" onclick="openModalById(${shoe.id})">TECH SPECS</button></div>
      <div class="hero-img"><img src="${shoe.img}"></div>
    </div>`;
}

window.openModalById = (id) => openModal(shoeDatabase.find(s => s.id === id));
document.getElementById('search-bar').oninput = renderShoes;
document.getElementById('price-filter').onchange = renderShoes;
document.getElementById('theme-toggle').onclick = () => document.body.classList.toggle('dark-theme');
document.querySelector('.modal-close').onclick = () => { document.getElementById('modal').style.display = "none"; document.body.classList.remove('modal-open'); }

setInterval(() => { document.getElementById('live-clock').innerText = new Date().toLocaleTimeString(); }, 1000);
initHero(); renderShoes();
