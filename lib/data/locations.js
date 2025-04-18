// Detailed information about campus locations
export const locations = [
  // Buildings
  {
    id: 'gedung-a',
    name: 'Gedung A',
    category: 'buildings',
    description: 'Gedung A houses the Faculty of Computer Science with modern classrooms, laboratories, and office spaces.',
    floors: ['Gedung A - Lantai 1', 'Gedung A - Lantai 2'],
    amenities: ['Elevators', 'Wheelchair Access', 'Restrooms', 'Water Fountains']
  },
  {
    id: 'gedung-b',
    name: 'Gedung B',
    category: 'buildings',
    description: 'Gedung B is the main academic building featuring multiple lecture halls, classrooms, and faculty offices. This building serves as the central hub for many undergraduate courses and administrative functions.',
    floors: [
      'Gedung B Lantai 1 utama', 
      'Gedung B Lantai 1 atas', 
      'Gedung B Lantai 2', 
      'Gedung B Lantai 3',
      'Gedung B Lantai 4',
      'Gedung B Lantai 5',
      'Gedung B Lantai 6',
      'Gedung B Luar Kantin'
    ],
    amenities: ['Elevators', 'Wheelchair Access', 'Cafeteria', 'Student Lounge', 'Restrooms', 'Water Fountains']
  },
  {
    id: 'gedung-c',
    name: 'Gedung C',
    category: 'buildings',
    description: 'Gedung C.',
    floors: ['Gedung C - Lantai 1', 'Gedung C - Lantai 2', 'Gedung C - Lantai 3'],
    amenities: ['Elevators', 'Wheelchair Access', 'Research Labs', 'Study Areas', 'Restrooms']
  },
  
  // Lecture Halls
  {
    id: 'aula-ruang-2101',
    name: 'Aula - Ruang 2101',
    category: 'lecture-halls',
    description: 'A medium-sized lecture hall on the first floor of Gedung B. This hall features comfortable seating for 100 students and is equipped with the latest presentation technology.',
    building: 'gedung-b',
    floor: 'Gedung B Lantai 1 utama',
    capacity: 50,
    amenities: ['Dual Projectors', 'Digital Podium', 'Acoustic Panels', 'Climate Control']
  },
  
  // Labs
  {
    id: 'lab-r1103',
    name: 'Computer Lab - Ruang 1103',
    category: 'labs',
    description: 'A computer lab on the first floor of Gedung A. The lab is equipped with numerous workstations running the latest software for programming.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 1',
    equipment: ['PCs'],
    software: ['Visual Studio Code']
  },
  
  // Study Spaces
  {
    id: 'perpustakaan',
    name: 'Perpustakaan',
    category: 'study-spaces',
    description: 'A quiet study area on the first floor of Gedung B. The space offers individual study carrels, group study rooms, and comfortable seating for extended study sessions.',
    building: 'gedung-b',
    floor: 'Gedung B Lantai 1 utama',
    seats: 75,
    amenities: ['Power Outlets', 'Wi-Fi', 'Adjustable Lighting', 'Bookable Group Study Rooms']
  },
  
  // Facilities
  {
    id: 'cafeteria',
    name: 'Main Cafeteria',
    category: 'facilities',
    description: 'Cafeteria located outside Gedung C. Offers a variety of food options including local and international cuisine at affordable prices.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 1',
    seatingCapacity: 70,
    foodOptions: ['Indonesian Cuisine', 'Western Food', 'Vegetarian Options', 'Beverages', 'Snacks']
  },
  
  // Administration
  {
    id: 'sekre-akademik',
    name: 'Sekre Akademik',
    category: 'administration',
    description: 'The main administrative office on the second floor of Gedung B. Students can visit this office for registration, academic records, financial aid, and other administrative services.',
    building: 'gedung-b',
    floor: 'Gedung B Lantai 2',
    services: ['Registration', 'Transcripts', 'Financial Aid', 'ID Cards', 'General Inquiries']
  }
];