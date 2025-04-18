/**
 * Manual mapping of location IDs to their corresponding images
 * Format: locationId: [array of image paths]
 */

// Default image path to avoid repetition
const DEFAULT_IMAGE = '/locations/default.jpg';

export const locationImages = {
  // Buildings
  'gedung-a': ['/locations/Gedung Lama/Gedung A/Entrance1.jpg',
        '/locations/Gedung Lama/Gedung A/Entrance2.jpg',
        '/locations/Gedung Lama/Gedung A/Entrance3.jpg'],
  'gedung-b': ['/locations/Gedung Lama/Gedung B/Entrance1.jpg',
        '/locations/Gedung Lama/Gedung B/Entrance2.jpg'],
  'gedung-c': ['/locations/Gedung Lama/Gedung C/Entrance1.jpg',
        '/locations/Gedung Lama/Gedung C/Entrance2.jpg',
        '/locations/Gedung Lama/Gedung C/Entrance3.jpg',
        '/locations/Gedung Lama/Gedung C/Entrance4.jpg'],
  
  // Labs
  'lab-r1103': ['/locations/Gedung Lama/Gedung A/Lab Komputer - Ruang 1103.jpg'],
  
  // Lecture halls
  'aula-ruang-2101': ['/locations/Gedung Lama/Gedung B/Aula.jpg'],
  
  // Study spaces
    'perpustakaan': ['/locations/Gedung Lama/Gedung B/Perpustakaan1.jpg',
        '/locations/Gedung Lama/Gedung B/Perpustakaan2.jpg',
        '/locations/Gedung Lama/Gedung B/Perpustakaan3.jpg'],
  
  // Facilities
    'cafeteria': ['/locations/Gedung Lama/Gedung C/Cafeteria1.jpg',
        '/locations/Gedung Lama/Gedung C/Cafeteria2.jpg',
        '/locations/Gedung Lama/Gedung C/Cafeteria3.jpg',
        '/locations/Gedung Lama/Gedung C/Cafeteria4.jpg',
        '/locations/Gedung Lama/Gedung C/Cafeteria5.jpg',
        '/locations/Gedung Lama/Gedung C/Cafeteria6.jpg',
  ],
  
  // Administration
  'sekre-akademik': [DEFAULT_IMAGE],
  
  // Default fallback
  'default': [DEFAULT_IMAGE]
};