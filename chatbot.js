/* =====================================================================
   Kang Raka — chatbot Kampus Hejo (Tim Batagor, OKK 35 Unpad)
   Satu file data jawaban yang dipakai bersama oleh website dan game.
   Untuk menambah topik: tambahkan objek baru di KB, beri label di QRT,
   lalu masukkan id-nya ke salah satu kategori di CATS.
   ===================================================================== */
(function () {
  const NAME = 'Kang Raka';
  const hi = c => (c && c.name ? `Halo, ${c.name}!` : 'Halo!');

  const KB = [
    { id: 'salam', a: c => `${hi(c)} Aku ${NAME}, petugas informasi Kampus Hejo. Mau tanya soal maggot, pemilahan sampah, proyek MAGOPRENEUR, atau tips kuliah?`, n: ['maggot', 'proyek', 'waktu'] },
    { id: 'siapa', a: `Aku ${NAME}, petugas informasi Kampus Hejo dari Tim Batagor. Aku chatbot sederhana yang menjawab topik-topik pilihan seputar maggot BSF, proyek MAGOPRENEUR, cara bermain game, dan beberapa tips kuliah.`, n: ['proyek', 'maggot'] },

    // --- tentang maggot
    { id: 'maggot', a: 'Maggot adalah larva lalat Black Soldier Fly (BSF), nama ilmiahnya <i>Hermetia illucens</i>. Larva ini memakan sampah organik seperti sisa makanan, lalu mengubahnya menjadi biomassa larva dan kasgot. Proses ini disebut biokonversi.', n: ['aman', 'siklus', 'boleh'] },
    { id: 'aman', a: 'Lalat BSF dewasa tidak makan karena hidup dari cadangan energi yang dikumpulkan saat masih larva. Ia juga tidak hinggap di makanan manusia, jadi BSF tidak dikenal sebagai penyebar penyakit seperti lalat rumah. Biopond yang dipantau kelembapannya dan diberi pakan dengan takaran pas juga tidak menimbulkan bau menyengat.', n: ['siklus', 'bau'] },
    { id: 'siklus', a: 'Siklus hidup BSF: telur → larva → prepupa → pupa → lalat dewasa. Fase yang mengurai sampah adalah larva (maggot). Saat menjadi prepupa, larva cenderung merayap keluar dari media untuk mencari tempat kering, dan perilaku ini sering dimanfaatkan untuk panen.', n: ['maggot', 'manfaat'] },
    { id: 'manfaat', a: 'Maggot kaya protein, sehingga bisa dipakai sebagai pakan ikan dan unggas, dan menjadi alternatif bagi pakan komersial yang harganya terus naik. Sisa medianya, kasgot, dipakai sebagai pupuk organik.', n: ['jual', 'kasgot'] },

    // --- pemilahan & biopond
    { id: 'boleh', a: 'Yang cocok untuk biopond adalah sampah organik sisa makanan, misalnya sisa nasi, sayuran, potongan lauk, dan kulit buah. Sebelum diberikan, sisa makanan dicacah ringan supaya lebih mudah dimakan maggot.', n: ['tidak', 'bau', 'pilah'] },
    { id: 'tidak', a: 'Yang tidak boleh masuk biopond: plastik, plastik klip, styrofoam, tusuk sate, tisu, kaleng, dan botol. Maggot tidak bisa mengurainya dan sampah ini justru mencemari media. Karena itu sampah organik harus dibersihkan dulu dari kontaminan sebelum diolah.', n: ['pilah', 'boleh'] },
    { id: 'pilah', a: 'Memilah dari sumbernya membuat sampah organik tidak tercampur anorganik, jadi bisa langsung diolah tanpa disortir ulang. Hal ini juga sejalan dengan UU No. 18 Tahun 2008 tentang Pengelolaan Sampah, yang menekankan pengurangan dan penanganan sampah dari sumbernya.', n: ['tidak', 'kegiatan'] },
    { id: 'bau', a: 'Bau biasanya muncul kalau pakan diberikan melebihi kemampuan makan larva atau media terlalu lembap. Sisa yang tidak termakan akan membusuk. Karena itu pakan diberikan bertahap dan kondisi biopond dipantau secara berkala.', n: ['boleh', 'aman'] },
    { id: 'metana', a: 'Sisa makanan yang berakhir di TPA bersama sampah lain terurai tanpa oksigen dan menghasilkan gas metana, salah satu gas rumah kaca. Kajian Bappenas juga mencatat timbulan food loss and waste di Indonesia mencapai puluhan juta ton per tahun. Mengolahnya di sumber dengan maggot membantu mengurangi beban TPA.', n: ['masalah', 'proyek'] },

    // --- hasil & usaha
    { id: 'kasgot', a: 'Kasgot adalah sisa media dan kotoran larva setelah proses biokonversi. Kasgot dikumpulkan dan dikemas sebagai pupuk organik untuk tanaman di area kampus, atau dijual.', n: ['manfaat', 'jual'] },
    { id: 'jual', a: 'Maggot segar atau kering cocok untuk pembudidaya ikan dan peternak unggas, sedangkan kasgot cocok untuk petani dan perawatan taman. Dalam rencana kami, keberlanjutan proyek didukung kemitraan dengan perikanan lokal.', n: ['kering', 'bisnis'] },
    { id: 'kering', a: 'Maggot segar banyak mengandung air sehingga cepat rusak. Setelah dikeringkan, kadar airnya turun sehingga lebih awet dan mudah disimpan maupun dikirim.', n: ['jual', 'bisnis'] },
    { id: 'bisnis', a: 'MAGOPRENEUR adalah singkatan dari <b>Maggot Eco-Preneurship</b>: usaha yang menghasilkan keuntungan sekaligus menjaga lingkungan. Dari sisa makanan kantin dihasilkan pakan alternatif tinggi protein dan pupuk organik kasgot yang bernilai jual, membentuk ekonomi sirkular di kampus.', n: ['jual', 'proyek'] },

    // --- proyek kami
    { id: 'proyek', a: '<b>MAGOPRENEUR</b> (Maggot Eco-Preneurship) adalah proyek aksi sosial Tim Batagor, Kelompok OKK 35 Universitas Padjadjaran, bertema Kampus Hejo. Kami mengolah sisa makanan Kantin FIKOM melalui biokonversi maggot BSF lewat tahapan Collecting, Biokonversi, dan Upcycle.', n: ['masalah', 'target', 'kegiatan'] },
    { id: 'masalah', a: 'Berdasarkan observasi dan estimasi kami, Kantin FIKOM menghasilkan sekitar <b>15–25 kg sampah organik per hari</b> (75–125 kg per minggu operasional). Selama ini sebagian besar masih tercampur dengan sampah anorganik dan langsung diangkut ke TPA tanpa dipilah atau dimanfaatkan.', n: ['target', 'metana'] },
    { id: 'target', a: 'Target luaran kami: (1) terbentuknya alur pemilahan dan sistem biokonversi di Kantin FIKOM, (2) reduksi volume sampah organik kantin hingga <b>50–70% per hari</b>, (3) produk pakan alternatif dan pupuk kasgot, serta (4) media edukasi pengelolaan sampah untuk pedagang dan mahasiswa.', n: ['kegiatan', 'tim'] },
    { id: 'kegiatan', a: 'Kegiatan kami terbagi empat tahap: (1) <b>Persiapan & edukasi kantin</b>: koordinasi dengan pedagang dan penyediaan wadah sampah organik terpisah; (2) <b>Collecting</b>: mengumpulkan dan membersihkan sisa makanan dari kontaminan; (3) <b>Biokonversi</b>: memberi pakan ke baby maggot dan memantau biopond; (4) <b>Upcycle</b>: memanen maggot dan kasgot.', n: ['target', 'tim'] },
    { id: 'tim', a: 'Tim Batagor terdiri dari 8 mahasiswa lintas fakultas di Unpad: Psikologi, Teknik Geologi, MIPA, Ilmu Budaya, Kedokteran, Perikanan dan Ilmu Kelautan, serta Ilmu Komunikasi, dengan dosen fasilitator Dr. Mia Uswatun Hasanah, S.Si., MT. Profil lengkapnya ada di bagian Meet the Team di website kami.', n: ['proyek', 'hejo'] },
    { id: 'hejo', a: '"Hejo" berasal dari bahasa Sunda yang berarti hijau. Kampus Hejo mengajak warga kampus mewujudkan lingkungan yang bersih dan berkelanjutan, dan proyek kami mendukungnya lewat pengelolaan sisa makanan kantin.', n: ['proyek', 'bisnis'] },

    // --- tips bermain
    { id: 'main', a: 'Alur game Feed The Maggot: (1) pilah sampah organik di Kantin FIKOM, (2) isi bibit dan beri pakan di Rumah Maggot, (3) panen, lalu (4) olah dan jual hasilnya di Gudang Upcycle. Uangnya bisa dipakai untuk upgrade di Pos Kampus Hejo. Jangan lupa pungut sampah yang berceceran di jalan.', n: ['tipskantin', 'biopond', 'upgrade'] },
    { id: 'tipskantin', a: 'Tips di kantin: geser keranjang ke barang organik saja. Setiap 5 tangkapan benar berturut-turut memberi bonus uang. Tiga kali menangkap sampah anorganik akan menghentikan pemilahan.', n: ['biopond', 'main'] },
    { id: 'biopond', a: 'Tips biopond: beri pakan saat bar pakan mulai turun, jangan saat masih tinggi. Tekan "Aduk media" setiap ada kesempatan supaya pertumbuhan lebih cepat. Kalau biopond dibiarkan lapar terlalu lama, kualitas panen turun.', n: ['upgrade', 'main'] },
    { id: 'upgrade', a: 'Uang di game didapat dari pesanan di Gudang Upcycle, kuis, bonus kombo, dan memungut sampah plastik. Upgrade yang paling terasa di awal biasanya wadah sampah yang lebih besar dan biopond tambahan.', n: ['kuis', 'main'] },
    { id: 'kuis', a: 'Kuis ada di Pos Kampus Hejo: 4 soal acak, dan setiap jawaban benar mendapat Rp2.000. Setelah selesai, kuis berikutnya tersedia lagi sebentar kemudian dengan soal yang berbeda.', n: ['main', 'maggot'] },

    // --- tips kuliah
    { id: 'waktu', a: 'Tips manajemen waktu: catat semua tenggat tugas di satu kalender, pecah tugas besar menjadi langkah kecil, dan kerjakan dari yang tenggatnya paling dekat. Sisakan juga waktu istirahat, karena jadwal yang terlalu padat justru membuat fokus cepat habis.', n: ['belajar', 'organisasi', 'sehat'] },
    { id: 'belajar', a: 'Tips belajar efektif: baca ulang catatan di hari yang sama setelah kelas, latihan soal alih-alih hanya membaca, dan belajar bareng teman untuk saling menjelaskan materi. Kalau ada yang belum paham, tanyakan ke dosen atau asisten sedini mungkin.', n: ['waktu', 'sehat'] },
    { id: 'organisasi', a: 'Tips menyeimbangkan organisasi dan akademik: pilih kegiatan yang sesuai minat dan kapasitasmu, komunikasikan jadwal kuliah ke tim sejak awal, dan tidak apa-apa menolak tugas tambahan kalau memang sedang penuh.', n: ['waktu', 'sehat'] },
    { id: 'sehat', a: 'Tips menjaga kondisi selama kuliah: tidur cukup, makan teratur, dan sempatkan bergerak atau olahraga ringan. Kalau mulai merasa terbebani, ceritakan ke teman atau keluarga, atau manfaatkan layanan konseling di kampus.', n: ['waktu', 'belajar'] },

    { id: 'makasih', a: 'Sama-sama! Kalau ada yang ingin ditanyakan lagi, pilih topik lain kapan saja.', n: ['proyek', 'maggot'] }
  ];

  const QRT = {
    salam: 'Halo', siapa: 'Kamu siapa?',
    maggot: 'Apa itu maggot BSF?', aman: 'Lalat BSF aman?', siklus: 'Siklus hidup BSF', manfaat: 'Manfaat maggot',
    boleh: 'Apa yang boleh masuk biopond?', tidak: 'Apa yang tidak boleh?', pilah: 'Kenapa harus dipilah?', bau: 'Kenapa biopond bisa bau?', metana: 'Kenapa tidak dibuang ke TPA?',
    kasgot: 'Kasgot itu apa?', jual: 'Dijual ke mana?', kering: 'Kenapa dikeringkan?', bisnis: 'Apa itu MAGOPRENEUR?',
    proyek: 'Tentang proyek ini', masalah: 'Seberapa banyak sampahnya?', target: 'Apa target proyek ini?', kegiatan: 'Apa saja kegiatannya?', tim: 'Siapa Tim Batagor?', hejo: 'Arti Kampus Hejo',
    main: 'Cara bermain', tipskantin: 'Tips di kantin', biopond: 'Tips biopond', upgrade: 'Cara dapat uang', kuis: 'Tentang kuis',
    waktu: 'Manajemen waktu', belajar: 'Belajar efektif', organisasi: 'Organisasi & akademik', sehat: 'Jaga kondisi selama kuliah',
    makasih: 'Terima kasih'
  };

  const CATS = [
    ['Proyek MAGOPRENEUR', ['proyek', 'masalah', 'target', 'kegiatan', 'tim', 'hejo']],
    ['Tentang maggot BSF', ['maggot', 'aman', 'siklus', 'manfaat']],
    ['Pemilahan & biopond', ['boleh', 'tidak', 'pilah', 'bau', 'metana']],
    ['Hasil & usaha', ['kasgot', 'jual', 'kering', 'bisnis']],
    ['Tips bermain game', ['main', 'tipskantin', 'biopond', 'upgrade', 'kuis']],
    ['Tips kuliah', ['waktu', 'belajar', 'organisasi', 'sehat']]
  ];

  function answer(id, ctx) {
    const it = KB.find(x => x.id === id);
    if (!it) return null;
    return { html: typeof it.a === 'function' ? it.a(ctx || {}) : it.a, next: it.n.filter(x => x !== id) };
  }

  /* ---------------- widget untuk website ---------------- */
  const AVATAR = `<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="32" fill="#e9f4ee"/>
    <path d="M14 64c1-13 8-19 18-19s17 6 18 19z" fill="#6a994e" stroke="#21313a" stroke-width="2.5"/>
    <circle cx="32" cy="30" r="13" fill="#f1c08f" stroke="#21313a" stroke-width="2.5"/>
    <path d="M18.5 27a13.5 13.5 0 0 1 27 0z" fill="#2a9d8f" stroke="#21313a" stroke-width="2.5"/>
    <path d="M40 26l12 2-5 3h-8z" fill="#1f7368" stroke="#21313a" stroke-width="2.5" stroke-linejoin="round"/>
    <circle cx="27" cy="32" r="1.8" fill="#21313a"/><circle cx="37" cy="32" r="1.8" fill="#21313a"/>
    <path d="M28 37q4 3 8 0" fill="none" stroke="#21313a" stroke-width="2" stroke-linecap="round"/></svg>`;

  function mountWidget() {
    const css = `
#kr-btn{position:fixed;right:18px;bottom:18px;z-index:1000;display:flex;align-items:center;gap:10px;background:#1f7368;color:#fff;border:none;border-radius:99px;padding:6px 16px 6px 6px;font:800 14px "Plus Jakarta Sans",system-ui,sans-serif;cursor:pointer;box-shadow:0 8px 24px rgba(20,60,50,.35);transition:transform .15s}
#kr-btn:hover{transform:translateY(-2px)}
#kr-btn .av{width:44px;height:44px;border-radius:50%;overflow:hidden;background:#fff;flex-shrink:0}
#kr-btn .av svg,#kr-panel .av svg{width:100%;height:100%;display:block}
#kr-btn .dot{position:absolute;top:4px;left:40px;width:12px;height:12px;border-radius:50%;background:#e9c46a;border:2px solid #1f7368}
#kr-panel{position:fixed;right:18px;bottom:84px;z-index:1001;width:min(380px,calc(100vw - 24px));height:min(600px,calc(100dvh - 110px));background:#eef3ef;border-radius:20px;box-shadow:0 18px 50px rgba(20,40,40,.35);display:none;flex-direction:column;overflow:hidden;font-family:"Plus Jakarta Sans",system-ui,sans-serif;color:#21313a}
#kr-panel.on{display:flex;animation:krIn .2s ease-out}
@keyframes krIn{from{opacity:0;transform:translateY(12px)}}
#kr-panel .hd{display:flex;align-items:center;gap:10px;padding:12px 14px;background:#1f7368;color:#fff}
#kr-panel .av{width:42px;height:42px;border-radius:12px;overflow:hidden;background:#fff;flex-shrink:0}
#kr-panel .hd b{display:block;font-size:16px}#kr-panel .hd small{font-size:12px;opacity:.85}
#kr-panel .x{margin-left:auto;background:rgba(255,255,255,.15);border:none;color:#fff;width:34px;height:34px;border-radius:10px;font-size:18px;cursor:pointer}
#kr-log{flex:1;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:8px}
#kr-log .m{max-width:86%;padding:9px 12px;border-radius:16px;font-size:14px;line-height:1.5;animation:krIn .18s ease-out}
#kr-log .b{background:#fff;align-self:flex-start;border-bottom-left-radius:4px;box-shadow:0 2px 6px rgba(33,49,58,.08)}
#kr-log .u{background:#2a9d8f;color:#fff;align-self:flex-end;border-bottom-right-radius:4px}
#kr-log .t{color:#5f6b72;font-style:italic}
#kr-qr{display:flex;flex-wrap:wrap;gap:6px;padding:10px 12px 14px;max-height:46%;overflow-y:auto;background:#fff;border-top:1px solid #e6dfcf}
#kr-qr .c{width:100%;font-size:11px;font-weight:800;letter-spacing:.5px;text-transform:uppercase;color:#5f6b72;margin-top:4px}
#kr-qr button{background:#fff;border:1.5px solid #8ecdb8;color:#1f7368;border-radius:99px;padding:7px 12px;font:700 12.5px "Plus Jakarta Sans",system-ui,sans-serif;cursor:pointer}
#kr-qr button:hover{background:#e6f4ef}
#kr-qr button.all{background:#2a9d8f;color:#fff;border-color:#2a9d8f}
@media(max-width:480px){#kr-btn .lbl{display:none}#kr-btn{padding:6px}#kr-panel{right:12px;bottom:76px}}`;
    const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
    const btn = document.createElement('button'); btn.id = 'kr-btn'; btn.setAttribute('aria-label', 'Tanya ' + NAME);
    btn.innerHTML = `<span class="av">${AVATAR}</span><span class="dot"></span><span class="lbl">Tanya ${NAME}</span>`;
    const pn = document.createElement('div'); pn.id = 'kr-panel'; pn.setAttribute('role', 'dialog'); pn.setAttribute('aria-label', 'Chat dengan ' + NAME);
    pn.innerHTML = `<div class="hd"><span class="av">${AVATAR}</span><div><b>${NAME}</b><small>Petugas informasi Kampus Hejo</small></div><button class="x" aria-label="Tutup">×</button></div><div id="kr-log"></div><div id="kr-qr"></div>`;
    document.body.appendChild(btn); document.body.appendChild(pn);
    const log = pn.querySelector('#kr-log'), qr = pn.querySelector('#kr-qr');
    let busy = false, started = false;
    const add = (cls, html) => { const d = document.createElement('div'); d.className = 'm ' + cls; d.innerHTML = html; log.appendChild(d); log.scrollTop = 1e6; };
    const chip = (label, fn, cls) => { const b = document.createElement('button'); b.type = 'button'; b.textContent = label; if (cls) b.className = cls; b.onclick = fn; qr.appendChild(b); };
    function showAll() { qr.innerHTML = ''; CATS.forEach(([t, ids]) => { const h = document.createElement('div'); h.className = 'c'; h.textContent = t; qr.appendChild(h); ids.forEach(id => chip(QRT[id], () => ask(id))); }); qr.scrollTop = 0; }
    function ask(id) {
      if (busy) return; busy = true; add('u', QRT[id]);
      const t = document.createElement('div'); t.className = 'm b t'; t.textContent = NAME + ' sedang mengetik…'; log.appendChild(t); log.scrollTop = 1e6;
      setTimeout(() => { t.remove(); busy = false; const r = answer(id); add('b', r.html); qr.innerHTML = ''; r.next.slice(0, 3).forEach(n => chip(QRT[n], () => ask(n))); chip('Semua topik', showAll, 'all'); }, 500 + Math.random() * 300);
    }
    function open(id) {
      pn.classList.add('on');
      if (!started) { started = true; add('b', `Halo! Aku ${NAME}, petugas informasi Kampus Hejo. Pilih topik di bawah yang ingin kamu tanyakan, seputar proyek MAGOPRENEUR, maggot BSF, cara bermain game, atau tips kuliah.`); showAll(); }
      if (id) ask(id);
    }
    btn.onclick = () => (pn.classList.contains('on') ? pn.classList.remove('on') : open());
    pn.querySelector('.x').onclick = () => pn.classList.remove('on');
    window.KR.open = open;
  }

  window.KR = { NAME, KB, QRT, CATS, answer, mountWidget, AVATAR };
})();
