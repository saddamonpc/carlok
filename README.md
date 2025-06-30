# Cari Lokasi (CARLOK) Fasilkom UI

Cari Lokasi (**CARLOK**) adalah aplikasi berbasis web peta kampus untuk menavigasi Fakultas Ilmu Komputer Universitas Indonesia (Fasilkom UI). Aplikasi ini memungkinkan pengguna menemukan lokasi ruangan, fasilitas, dan area di kampus Fasilkom UI.

Silahkan di akses aplikasinya via [carlok.vercel.app](https://carlok.vercel.app/), atau lihat dokumentasi di [`/docs/README.md`](./docs/README.md)

![CARLOK](/public/images/CARLOK_preview1.png)
![CARLOK](/public/images/CARLOK_preview2.png)

## Abstrak / Abstract
<details>
<summary>Tekan disini untuk melihat Abstrak</summary>
Fakultas Ilmu Komputer (Fasilkom), Universitas Indonesia adalah salah satu fakultas terkemuka yang berfokus pada bidang ilmu komputer dan sistem informasi di Indonesia. Namun, arsitektur Fasilkom memiliki empat gedung dan tata ruang yang rumit, sehingga susah dinavigasi oleh pengunjung maupun mahasiswa baru. Tidak terdapat aplikasi untuk menavigasi Fasilkom dengan baik. Oleh karena itu, penelitian ini bertujuan untuk mengembangkan aplikasi berbasis web Cari Lokasi (CARLOK) yang mendukung pengunjung dan mahasiswa Fasilkom untuk menavigasi Gedung Lama dan Baru Fasilkom. Penelitian ini berfokus dalam pengembangan CARLOK melalui proses User-Centered Design (UCD) dan Software Development Life Cycle (SDLC) model rapid throwaway prototyping. Di awal proses, pencarian data dilakukan dengan kuesioner dan survey lapangan untuk memahami kebutuhan user, lalu pembangunan prototype CARLOK didesain berdasasrkan analisa data yang dikumpulkan dan dievaluasikan oleh pengguna dari berbagai demografi. Setelah itu, aplikasi CARLOK dikembangkan dari prototype dengan React dan Next.js, dan delapan fitur dibuat untuk navigasi. Berdasarkan hasil evaluasi dengan wawancara pengguna, CARLOK merupakan aplikasi yang baik untuk membantu pengguna navigasi Fasilkom dan telah mencapai rata-rata skor System Usability Scale (SUS) sebesar 81.0 dari 17 responden, yang berarti skor usability pengguna termasuk dalam kategori ‘Excellent’.
</details>

<details>
<summary>Click here to see the Abstract</summary>
The Faculty of Computer Science (Fasilkom), Universitas Indonesia, is one of the most prominent faculties for computer science and information systems in Indonesia. However, Fasilkom’s architecture is difficult to navigate for visitors and new students, due to having four buildings and a complicated layout. There has been no decent navigation application to get directions to certain locations and rooms in Fasilkom, so this research aims to develop Cari Lokasi (CARLOK), a web-based application designed to help visitors and students of Fasilkom navigate the Fasilkom Old and New Buildings. This research focuses on the development of CARLOK through User-Centered Design (UCD) process and the Software Development Life Cycle (SDLC) model, rapid throwaway prototyping model. Early in the process, data collection was carried out with questionnaires and field surveys to understand user requirements, and later a prototype of CARLOK was designed based on the analysed data and evaluated by users of various demographics. Later, the CARLOK application was developed from the prototype with React and Next.js framework, and eight features were created for navigation. Overall, based on evaluation from user interviews, CARLOK is a viable application to help users navigate Fasilkom and has reached an average System Usability Scale (SUS) score of 81.0 from 17 respondents, which is an ‘Excellent’ score for user usability.
</details>


## Tech Stack
- **JavaScript Library**: React
- **Framework**: Next.js
- **Search**: Fuse.js (fuzzy search)
- **Deployment**: GitHub + Vercel

## Struktur Project
```
carlok/
├── components/             # React components
│   ├── Floor.js            # Komponen denah lantai
│   ├── layout.js           # Layout wrapper
│   ├── Map.js              # Komponen peta utama
│   └── SearchBar.js        # Komponen search
├── pages/                  # Next.js pages (routing)
│   ├── categories/         # Halaman kategori
│   ├── locations/          # Detail lokasi
│   ├── maps/               # Denah
│   └── index.js            # Homepage
├── lib/data/               # Database
│   ├── categories.js       # Data kategori
│   └── locations.db.js     # Static Database lokasi
├── public/                 # Static assets
│   ├── denah2/             # Floor plans
│   ├── locations/          # Location photos
│   └── images/             # General images
├── docs/                   # Dokumentasi
└── styles/                 # General CSS files
```

## Self-hosting Installation
   ```bash
   git clone https://github.com/saddamonpc/carlok.git
   cd carlok
   npm install
   npm run dev
   ```

## Dokumentasi
Dokumentasi lengkap tersedia di direktori [`/docs`](./docs/):

- [`README.md`](./docs/README.md) - Dokumentasi utama
- [`architecture.md`](./architecture.md) - Overview arsitektur sistem
- [`components.md`](./components.md) - Dokumentasi komponen
- [`routing.md`](./routing.md) - Dokumentasi routing

## Contact
Silakan hubungi saya:
- Mohammad Saddam Mashuri
- **Email**: saddamonpc@gmail.com

## License
Project ini menggunakan [MIT License](LICENSE).
