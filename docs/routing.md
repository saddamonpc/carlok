# Panduan Routing

Dokumentasi lengkap tentang sistem routing dalam aplikasi CARLOK menggunakan Next.js.

## Overview Routing Next.js

CARLOK menggunakan file-based routing dari Next.js, di mana setiap file dalam direktori `pages/` secara otomatis menjadi route yang dapat diakses.

## Struktur Routing

### Halaman Utama
- **Route**: `/`
- **File**: `pages/index.js`
- **Komponen**: Homepage dengan komponen Map
- **Deskripsi**: Halaman utama aplikasi yang menampilkan peta kampus interaktif

### Halaman Kategori
- **Route**: `/categories/[categoryId]`
- **File**: `pages/categories/[categoryId].js`
- **Parameter**: `categoryId` - ID kategori (labs, classrooms, offices, dll.)
- **Deskripsi**: Menampilkan semua lokasi dalam kategori tertentu

**Contoh URL:**
- `/categories/labs` - Semua laboratorium
- `/categories/classrooms` - Semua ruang kelas
- `/categories/offices` - Semua ruang dosen/staff

### Halaman Detail Lokasi
- **Route**: `/locations/[locationId]`
- **File**: `pages/locations/[locationId].js`
- **Parameter**: `locationId` - ID unik lokasi
- **Deskripsi**: Detail lengkap tentang lokasi tertentu dengan foto dan informasi

**Contoh URL:**
- `/locations/gedung-baru-a101-lab-komputer`
- `/locations/gedung-b-perpustakaan`

### Halaman Denah Gedung
- **Route**: `/maps/[buildingId]`
- **File**: `pages/maps/[buildingId].js`
- **Parameter**: `buildingId` - ID gedung (gedung-a, gedung-b, gedung-c, gedung-baru)
- **Deskripsi**: Menampilkan denah semua lantai dalam gedung tertentu

**Contoh URL:**
- `/maps/gedung-baru` - Denah Gedung Baru
- `/maps/gedung-b` - Denah Gedung B

### Redirect Route
- **Route**: `/maps`
- **File**: `pages/maps/index.js`
- **Deskripsi**: Redirect ke halaman utama (`/`)

## Dynamic Routing

### Parameter Dinamis

#### [categoryId].js
```javascript
// Mengambil parameter dari URL
const { categoryId } = router.query;

// Static paths yang di-generate
export async function getStaticPaths() {
  const paths = categories.map(category => ({
    params: { categoryId: category.id }
  }));
  
  return {
    paths,
    fallback: false,
  };
}
```

#### [locationId].js
```javascript
// Mengambil parameter dari URL
const { locationId } = router.query;

// Static paths untuk semua lokasi
export async function getStaticPaths() {
  const paths = locations.map(location => ({
    params: { locationId: location.id }
  }));
  
  return {
    paths,
    fallback: false,
  };
}
```

#### [buildingId].js
```javascript
// Parameter gedung yang didukung
export async function getStaticPaths() {
  return {
    paths: [
      { params: { buildingId: 'gedung-a' } },
      { params: { buildingId: 'gedung-b' } },
      { params: { buildingId: 'gedung-c' } },
      { params: { buildingId: 'gedung-baru' } },
    ],
    fallback: false,
  };
}
```

## Navigation

### Navigasi Antar Halaman

#### Dari Homepage ke Kategori
```javascript
// Link dari halaman utama ke kategori
<Link href={`/categories/${category.id}`}>
  {category.name}
</Link>
```

#### Dari Kategori ke Detail Lokasi
```javascript
// Link dari daftar kategori ke detail lokasi
<Link href={`/locations/${location.id}`}>
  {location.name}
</Link>
```

#### Dari Detail Lokasi ke Denah Gedung
```javascript
// Link dari detail lokasi ke denah gedung
<Link href={`/locations/${location.building}`}>
  {buildingName}
</Link>
```

### Back Navigation
Setiap halaman memiliki link kembali:
```javascript
<Link href="/">
  ← Balik ke Peta Kampus
</Link>
```

## URL Structure

### Konvensi Penamaan
- **Kebab-case**: Semua ID menggunakan format kebab-case
- **Descriptive**: URL yang mudah dibaca dan SEO-friendly
- **Hierarchical**: Struktur yang mencerminkan hierarki informasi

### Contoh URL Lengkap
```
https://carlok.vercel.app/
├── categories/
│   ├── labs
│   ├── classrooms
│   ├── offices
│   └── facilities
├── locations/
│   ├── gedung-baru-a101-lab-komputer
│   ├── gedung-b-perpustakaan
│   └── gedung-a-1105-lab-komputer
└── maps/
    ├── gedung-a
    ├── gedung-b
    ├── gedung-c
    └── gedung-baru
```

## Meta Data dan SEO

### Dynamic Meta Tags
Setiap halaman memiliki meta tags yang dinamis:

```javascript
// Halaman kategori
<Head>
  <title>{category.name} - Campus Map</title>
  <meta name="description" content={`Browse all ${category.name.toLowerCase()} on campus`} />
</Head>

// Halaman detail lokasi
<Head>
  <title>{`${location.name} - Campus Map`}</title>
  <meta name="description" content={location.description} />
</Head>
```

## Error Handling

### 404 Handling
```javascript
// Jika ID tidak ditemukan
if (!location) {
  return {
    notFound: true,
  };
}
```

### Fallback Strategy
```javascript
// Router fallback check
if (router.isFallback) {
  return <div>Loading...</div>;
}
```

## Performance Optimization

### Static Generation
- Semua route menggunakan `getStaticProps` dan `getStaticPaths`
- Pre-generated pada build time untuk performance optimal
- Fallback disabled untuk predictable behavior

### Link Prefetching
Next.js secara otomatis melakukan prefetch untuk Link components yang visible di viewport.

## Best Practices

1. **Consistent Naming**: Gunakan konvensi kebab-case untuk semua ID
2. **SEO Friendly**: URL yang descriptive dan mudah dibaca
3. **Error Handling**: Selalu handle case ketika data tidak ditemukan
4. **Performance**: Gunakan static generation untuk semua route
5. **User Experience**: Provide loading states dan clear navigation
