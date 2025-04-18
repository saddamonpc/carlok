// Detailed information about campus locations
export const locations = [
  // Buildings
  {
    id: 'gedung-a',
    name: 'Gedung A',
    category: 'buildings',
    description: 'Gedung A houses the Faculty of Engineering with modern classrooms, laboratories, and office spaces. The building features state-of-the-art facilities for engineering education and research.',
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
    description: 'Gedung C is dedicated to science and research facilities, housing advanced laboratories and research centers. The building is designed for collaborative research and features specialized equipment for scientific study.',
    floors: ['Gedung C - Lantai 1', 'Gedung C - Lantai 2', 'Gedung C - Lantai 3'],
    amenities: ['Elevators', 'Wheelchair Access', 'Research Labs', 'Study Areas', 'Restrooms']
  },
  
  // Lecture Halls
  {
    id: 'lecture-hall-a101',
    name: 'Lecture Hall A101',
    category: 'lecture-halls',
    description: 'A spacious lecture hall located on the first floor of Gedung A. The hall can accommodate up to 150 students and is equipped with modern audiovisual equipment for enhanced learning experiences.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 1',
    capacity: 150,
    amenities: ['Projector', 'Surround Sound System', 'Interactive Whiteboard', 'Tiered Seating', 'Accessible Seating']
  },
  {
    id: 'lecture-hall-b201',
    name: 'Lecture Hall B201',
    category: 'lecture-halls',
    description: 'A medium-sized lecture hall on the second floor of Gedung B. This hall features comfortable seating for 100 students and is equipped with the latest presentation technology.',
    building: 'gedung-b',
    floor: 'Gedung B Lantai 2',
    capacity: 100,
    amenities: ['Dual Projectors', 'Digital Podium', 'Acoustic Panels', 'Climate Control']
  },
  
  // Labs
  {
    id: 'computer-lab-a102',
    name: 'Computer Lab A102',
    category: 'labs',
    description: 'A state-of-the-art computer lab on the first floor of Gedung A. The lab is equipped with 40 high-performance workstations running the latest software for programming, CAD, and multimedia design.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 1',
    equipment: ['40 High-Performance PCs', '3D Printers', 'Scanner', 'Digital Drawing Tablets'],
    software: ['AutoCAD', 'Adobe Creative Suite', 'Visual Studio', 'MATLAB']
  },
  {
    id: 'physics-lab-c201',
    name: 'Physics Lab C201',
    category: 'labs',
    description: 'A comprehensive physics laboratory on the second floor of Gedung C. The lab is designed for conducting experiments in mechanics, electricity, magnetism, and optics.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    equipment: ['Oscilloscopes', 'Force Sensors', 'Optical Benches', 'Electrical Circuit Components'],
    experiments: ['Wave Motion', 'Circuit Analysis', 'Light Diffraction', 'Magnetic Fields']
  },
  
  // Study Spaces
  {
    id: 'library-b302',
    name: 'Library Study Area B302',
    category: 'study-spaces',
    description: 'A quiet study area on the third floor of Gedung B. The space offers individual study carrels, group study rooms, and comfortable seating for extended study sessions.',
    building: 'gedung-b',
    floor: 'Gedung B Lantai 3',
    seats: 75,
    amenities: ['Power Outlets', 'Wi-Fi', 'Adjustable Lighting', 'Bookable Group Study Rooms']
  },
  
  // Facilities
  {
    id: 'cafeteria-b1',
    name: 'Main Cafeteria',
    category: 'facilities',
    description: 'The main campus cafeteria located outside Gedung B. Offers a variety of food options including local and international cuisine at affordable prices.',
    building: 'gedung-b',
    floor: 'Gedung B Luar Kantin',
    seatingCapacity: 200,
    foodOptions: ['Indonesian Cuisine', 'Western Food', 'Vegetarian Options', 'Beverages', 'Snacks']
  },
  
  // Administration
  {
    id: 'admin-office-a201',
    name: 'Administrative Office',
    category: 'administration',
    description: 'The main administrative office on the second floor of Gedung A. Students can visit this office for registration, academic records, financial aid, and other administrative services.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    services: ['Registration', 'Transcripts', 'Financial Aid', 'ID Cards', 'General Inquiries']
  }
];