# Arsitektur Sistem

Dokumentasi lengkap tentang arsitektur dan desain sistem aplikasi CARLOK.

## Overview Arsitektur

CARLOK dibangun menggunakan arsitektur **JAMstack** (JavaScript, APIs, Markup) dengan Next.js sebagai framework utama. Aplikasi ini menggunakan pendekatan **Static Site Generation (SSG)** untuk performa optimal.

## Arsitektur High-Level

```
┌─────────────────────────────────────┐
│           Frontend (Next.js)        │
├─────────────────────────────────────┤
│  ┌─────────────┐ ┌─────────────────┐ │
│  │   Pages     │ │   Components    │ │
│  │             │ │                 │ │
│  │ • index.js  │ │ • Map.js        │ │
│  │ • [id].js   │ │ • Floor.js      │ │
│  │ • ...       │ │ • SearchBar.js  │ │
│  └─────────────┘ └─────────────────┘ │
├─────────────────────────────────────┤
│           Data Layer                │
│  ┌─────────────┐ ┌─────────────────┐ │
│  │ Static JSON │ │ Image Assets    │ │
│  │             │ │                 │ │
│  │ • locations │ │ • Floor plans   │ │
│  │ • categories│ │ • Photos        │ │
│  └─────────────┘ └─────────────────┘ │
├─────────────────────────────────────┤
│         Build & Deploy              │
│         (Vercel/Netlify)            │
└─────────────────────────────────────┘
```

## Struktur Aplikasi

### 1. Presentation Layer (UI Components)

#### **Components**
- **Map.js**: Komponen utama untuk peta interaktif
- **Floor.js**: Komponen untuk menampilkan denah lantai
- **SearchBar.js**: Komponen pencarian dengan fuzzy search
- **Layout.js**: Wrapper layout untuk konsistensi UI

#### **Pages (Route Handlers)**
- **index.js**: Homepage dengan peta kampus
- **categories/[categoryId].js**: Halaman kategori lokasi
- **locations/[locationId].js**: Detail lokasi individual
- **maps/[buildingId].js**: Denah gedung per lantai

### 2. Business Logic Layer

#### **Search Engine**
```javascript
// Fuzzy search dengan Fuse.js
const fuseOptions = {
  keys: ['name', 'id', 'description'],
  threshold: 0.2,
  includeScore: true
};
```

#### **Filtering System**
- Filter berdasarkan kategori
- Filter berdasarkan gedung
- Filter berdasarkan lantai
- Kombinasi multiple filters

#### **Navigation Logic**
- Dynamic routing dengan Next.js
- State management untuk filter
- URL parameter handling

### 3. Data Layer

#### **Data Sources**
```
lib/data/
├── categories.js     # Master data kategori
└── locations.db.js   # Master data lokasi
```

#### **Data Models**

**Category Model:**
```javascript
{
  id: string,           // Unique identifier
  name: string,         // Display name
  description: string,  // Category description
  icon: string         // Emoji icon
}
```

**Location Model:**
```javascript
{
  id: string,           // Unique identifier
  name: string,         // Location name
  category: string,     // Category reference
  description: string,  // Detailed description
  building: string,     // Building reference
  floor: string,        // Floor information
  images: string[]      // Image paths
}
```

### 4. Asset Management

#### **Static Assets Structure**
```
public/
├── denah2/           # Floor plan images
│   ├── Gedung A/
│   ├── Gedung B/
│   ├── Gedung C/
│   └── Gedung Baru/
├── locations/        # Location photos
│   ├── Gedung Lama/
│   └── Gedung Baru/
└── images/          # General assets
```

## Design Patterns

### 1. **Component Composition Pattern**
```javascript
// Layout composition
<Layout>
  <Map>
    <SearchBar />
    <CategoryFilter />
    <LocationList />
  </Map>
</Layout>
```

### 2. **Render Props Pattern**
```javascript
// Floor component dengan render props
<TransformWrapper>
  {({ zoomIn, zoomOut, resetTransform }) => (
    <FloorControls 
      onZoomIn={zoomIn}
      onZoomOut={zoomOut}
      onReset={resetTransform}
    />
  )}
</TransformWrapper>
```

### 3. **Custom Hook Pattern**
```javascript
// Custom hook untuk search logic
const useLocationSearch = (locations, query) => {
  return useMemo(() => {
    if (!query) return locations;
    return fuse.search(query).map(result => result.item);
  }, [locations, query]);
};
```

## State Management

### **Local State (useState)**
- Filter selections (category, building, floor)
- Search query
- UI state (selected image, floor index)

### **Derived State (useMemo)**
- Filtered locations
- Available floors for selected building
- Search results

### **No Global State**
Aplikasi ini tidak menggunakan Redux atau Context API karena:
- State relatif sederhana
- Tidak ada shared state complex
- Performance optimal dengan local state

## Performance Optimizations

### 1. **Static Site Generation (SSG)**
```javascript
// Pre-generate semua halaman pada build time
export async function getStaticPaths() {
  const paths = locations.map(location => ({
    params: { locationId: location.id }
  }));
  return { paths, fallback: false };
}
```

### 2. **Image Optimization**
```javascript
// Next.js Image component untuk lazy loading
<Image
  src={imagePath}
  alt={location.name}
  width={800}
  height={600}
  priority={isMainImage}
  loading={isMainImage ? "eager" : "lazy"}
/>
```

### 3. **Code Splitting**
- Automatic code splitting per page
- Component-level splitting dengan dynamic imports

### 4. **Search Optimization**
```javascript
// Memoized search instance
const fuse = useMemo(() => 
  new Fuse(enhancedLocations, fuseOptions), 
  [enhancedLocations]
);
```

## Security Considerations

### **Client-Side Security**
- Input sanitization pada search queries
- XSS prevention dengan proper escaping
- Image path validation

### **Build-Time Security**
- Static generation mengeliminasi runtime vulnerabilities
- No server-side code execution
- CDN delivery untuk asset security

## Scalability Considerations

### **Data Scaling**
- JSON-based data mudah di-maintain
- Dapat dipindah ke CMS atau database jika perlu
- Incremental build support

### **Performance Scaling**
- CDN untuk global distribution
- Image optimization automatic
- Static caching strategies

### **Feature Scaling**
- Modular component architecture
- Easy plugin system untuk fitur baru
- API-ready architecture

## Technology Stack Detail

### **Core Framework**
- **Next.js 13+**: React framework dengan SSG
- **React 18**: UI library dengan concurrent features

### **Styling**
- **CSS Modules**: Scoped styling
- **Responsive Design**: Mobile-first approach

### **Search & Interaction**
- **Fuse.js**: Fuzzy search library
- **react-zoom-pan-pinch**: Pan/zoom functionality

### **Build & Deploy**
- **Vercel**: Recommended deployment platform
- **Webpack**: Module bundler (built-in Next.js)

## Development Workflow

### **Development Process**
1. **Local Development**: `npm run dev`
2. **Build Testing**: `npm run build`
3. **Static Export**: `npm run export` (jika diperlukan)
4. **Deployment**: Git push → Auto deploy

### **File Structure Convention**
```
├── components/       # Reusable UI components
├── pages/           # Route definitions
├── lib/             # Utility functions & data
├── public/          # Static assets
├── styles/          # Global styles
└── docs/           # Documentation
```

## Monitoring & Analytics

### **Performance Monitoring**
- Next.js built-in analytics
- Web Vitals tracking
- Bundle analysis

### **User Analytics**
- Page view tracking
- Search query analytics
- User journey mapping

## Future Architecture Considerations

### **Potential Migrations**
1. **Database Integration**: PostgreSQL + Prisma
2. **CMS Integration**: Strapi atau Contentful
3. **Real-time Features**: Socket.io untuk live updates
4. **Mobile App**: React Native dengan shared components

### **API Layer**
Struktur siap untuk API integration:
```javascript
// Future API structure
/api/
├── locations/
├── categories/
├── search/
└── analytics/
```
