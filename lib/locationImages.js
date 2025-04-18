/**
 * Manual mapping of location IDs to their corresponding images
 * Format: locationId: [array of image paths]
 */

// Default image path to avoid repetition
const DEFAULT_IMAGE = '/locations/default.jpg';

export const locationImages = {
  // Buildings
  'gedung-a': [DEFAULT_IMAGE],
  'gedung-b': [DEFAULT_IMAGE],
  'gedung-c': [DEFAULT_IMAGE],
  
  // Labs
  'lab-r1103': ['/locations/Gedung Lama/Gedung A/Lab Komputer - Ruang 1103.jpg'],
  
  // Lecture halls
  'aula-ruang-2101': [DEFAULT_IMAGE],
  
  // Study spaces
  'perpustakaan': [DEFAULT_IMAGE],
  
  // Facilities
  'cafeteria': [DEFAULT_IMAGE],
  
  // Administration
  'sekre-akademik': [DEFAULT_IMAGE],
  
  // Default fallback
  'default': [DEFAULT_IMAGE]
};