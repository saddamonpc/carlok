// Detailed information about campus locations

// Default image path to avoid repetition
const DEFAULT_IMAGE = '/locations/default.jpg';

export const locations = [
  // Buildings
  {
    id: 'gedung-a',
    name: 'Gedung A',
    category: 'buildings',
    description: 'Gedung A houses the Faculty of Computer Science with modern classrooms, laboratories, and office spaces.',
    floors: ['Gedung A - Lantai 1', 'Gedung A - Lantai 2'],
    images: [
      '/locations/Gedung Lama/Gedung A/Lantai 1/Entrance1_1.jpg',
      '/locations/Gedung Lama/Gedung A/Lantai 1/Entrance2.jpg',
      '/locations/Gedung Lama/Gedung A/Lantai 1/Entrance3.jpg'
    ]
  },  {
    id: 'gedung-b',
    name: 'Gedung B',
    category: 'buildings',
    description: 'Gedung B is the main academic building featuring multiple lecture halls, classrooms, and faculty offices. This building serves as the central hub for many undergraduate courses and administrative functions.',
    floors: [
      'Gedung B - Lantai 1 utama', 
      'Gedung B - Lantai 1 atas', 
      'Gedung B - Lantai 2', 
      'Gedung B - Lantai 3',
      'Gedung B - Lantai 4',
      'Gedung B - Lantai 5',
      'Gedung B - Lantai 6',
      'Gedung B - Luar Kantin'
    ],
    images: [
      '/locations/Gedung Lama/Gedung B/Lantai 1 utama/Entrance_1.jpg',
      '/locations/Gedung Lama/Gedung B/Lantai 1 utama/Entrance_2.jpg'
    ]
  },  {
    id: 'gedung-c',
    name: 'Gedung C',
    category: 'buildings',
    description: 'Gedung C.',
    floors: ['Gedung C - Lantai 1', 'Gedung C - Lantai 2', 'Gedung C - Lantai 3'],
    images: [
      '/locations/Gedung Lama/Gedung C/Lantai 1/Entrance_1.jpg',
      '/locations/Gedung Lama/Gedung C/Lantai 1/Entrance_2.jpg',
      '/locations/Gedung Lama/Gedung C/Lantai 1/Entrance_3.jpg',
      '/locations/Gedung Lama/Gedung C/Lantai 1/Entrance_4.jpg'
    ]
  },
  {
    id: 'gedung-baru',
    name: 'Gedung Baru',
    category: 'buildings',
    description: 'Gedung Baru is the newest addition to the campus, featuring modern facilities and state-of-the-art infrastructure. This building houses various academic departments and provides contemporary learning environments.',
    floors: [
      'Gedung Baru - Lantai Dasar',
      'Gedung Baru - Lantai 1',
      'Gedung Baru - Lantai 2',
      'Gedung Baru - Lantai 3',
      'Gedung Baru - Lantai 4',
      'Gedung Baru - Lantai 5',
      'Gedung Baru - Lantai 6',
      'Gedung Baru - Lantai 7'
    ],
    images: [
      '/locations/Gedung Baru/Lantai Dasar/Lobi_1.jpg',
      '/locations/Gedung Baru/Lantai Dasar/Lobi_2.jpg',
      '/locations/Gedung Baru/Lantai Dasar/Lobi_3.jpg',
    ]  },

  // Gedung A - Individual Locations
  // Lantai 1
  {
    id: 'gedung-a-1100-dapur',
    name: '1100 - Dapur',
    category: 'dining',
    description: 'Kitchen facility on the first floor of Gedung A.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 1/1100 - Dapur.jpg']
  },
  {
    id: 'gedung-a-1101-dapur',
    name: '1101 - Dapur',
    category: 'dining',
    description: 'Additional kitchen facility on the first floor of Gedung A.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 1/1101 - Dapur.jpg']
  },
  {
    id: 'gedung-a-1102-musholla-pria',
    name: '1102 - Musholla Pria',
    category: 'religious',
    description: 'Prayer room for male students and staff in Gedung A.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 1/1102 - Musholla Pria.jpg']
  },
  {
    id: 'gedung-a-1103-lab-komputer',
    name: '1103 - Lab Komputer',
    category: 'labs',
    description: 'Computer laboratory for programming and software development courses.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 1/1103 - Lab Komputer.jpg']
  },
  {
    id: 'gedung-a-1105-lab-komputer',
    name: '1105 - Lab Komputer',
    category: 'labs',
    description: 'Computer laboratory equipped with modern workstations for student practicum.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 1/1105 - Lab Komputer.jpg']
  },
  {
    id: 'gedung-a-1106-lab-komputer',
    name: '1106 - Lab Komputer',
    category: 'labs',
    description: 'Computer laboratory for advanced programming and system administration.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 1/1106  - Lab Komputer.jpg']
  },
  {
    id: 'gedung-a-1107-lab-komputer',
    name: '1107 - Lab Komputer',
    category: 'labs',
    description: 'Computer laboratory specializing in database and web development.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 1/1107 - Lab Komputer.jpg']
  },
  {
    id: 'gedung-a-1109-lab-komputer',
    name: '1109 - Lab Komputer',
    category: 'labs',
    description: 'Computer laboratory for multimedia and graphics programming.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 1/1109 - Lab Komputer.jpg']
  },
  {
    id: 'gedung-a-1110-lab-babe',
    name: '1110 - Lab Babe',
    category: 'labs',
    description: 'Specialized laboratory for advanced computer science research.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 1/1110 - Lab Babe.jpg']
  },
  {
    id: 'gedung-a-1114-lab-cisco',
    name: '1114 - Lab Cisco',
    category: 'labs',
    description: 'Cisco networking laboratory for network administration and security courses.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 1/1114 - Lab Cisco.jpg']
  },
  {
    id: 'gedung-a-1117',
    name: '1117',
    category: 'facilities',
    description: '1117 in Gedung A.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 1/1117.jpg']
  },  {
    id: 'gedung-a-1120-lab-ta',
    name: '1120 - Lab TA',
    category: 'labs',
    description: 'Final project (Tugas Akhir) laboratory for thesis work and research.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 1/1120 - Lab TA.jpg']
  },
  {
    id: 'gedung-a-entrance1-1-lantai-1',
    name: 'Entrance 1',
    category: 'facilities',
    description: 'Main entrance 1 to Gedung A providing access to the first floor.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 1',
    images: [
      '/locations/Gedung Lama/Gedung A/Lantai 1/Entrance1_1.jpg',
      '/locations/Gedung Lama/Gedung A/Lantai 1/Entrance1_2.jpg',
      '/locations/Gedung Lama/Gedung A/Lantai 1/Entrance1_3.jpg'
    ]
  },
  {
    id: 'gedung-a-pos-satpam-entrance2',
    name: 'Pos Satpam South Entrance Gedung A',
    category: 'security',
    description: 'Security post positioned at South Entrance for monitoring and safety control.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 1/Pos Satpam Entrance2.jpg']
  },
  {
    id: 'gedung-a-pos-satpam-entrance3',
    name: 'Pos Satpam East Entrance Gedung A',
    category: 'security',
    description: 'Security post positioned at East Entrance for monitoring and safety control.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 1/Pos Satpam Entrance3.jpg']
  },
  {
    id: 'gedung-a-selasar-lantai-1',
    name: 'Selasar',
    category: 'common-areas',
    description: 'Corridor area on the first floor of Gedung A providing circulation space.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 1/Selasar_1.jpg']
  },
  {
    id: 'gedung-a-toilet-pria-lantai-1',
    name: 'Toilet Pria',
    category: 'toilet',
    description: 'Male restroom facility on the first floor of Gedung A.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 1/Toilet Pria.jpg']
  },
  {
    id: 'gedung-a-toilet-wanita-lantai-1',
    name: 'Toilet Wanita',
    category: 'toilet',
    description: 'Female restroom facility on the first floor of Gedung A.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 1/Toilet Wanita.jpg']
  },

  // Gedung A - Lantai 2
  {
    id: 'gedung-a-1200-lim-yohanes-stefanus',
    name: '1200 - Lim Yohanes Stefanus',
    category: 'offices',
    description: 'Faculty office of Lim Yohanes Stefanus.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1200 - Lim Yohanes Stefanus.jpg']
  },
  {
    id: 'gedung-a-1202-aniati-murni-arymurthy',
    name: '1202 - Aniati Murni Arymurthy',
    category: 'offices',
    description: 'Faculty office of Aniati Murni Arymurthy.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1202 - Aniati Murni Arymurthy.jpg']
  },
  {
    id: 'gedung-a-1204-belawati-h-widjaja',
    name: '1204 - Belawati H. Widjaja',
    category: 'offices',
    description: 'Faculty office of Belawati H. Widjaja.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1204 - Belawati H. Widjaja.jpg']
  },
  {
    id: 'gedung-a-1205',
    name: '1205 - Ruang Humas',
    category: 'administration',
    description: 'Room 1205 for Humas in Gedung A.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1205.jpg']
  },
  {
    id: 'gedung-a-1206',
    name: '1206',
    category: 'offices',
    description: 'Office room 1206 in Gedung A.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1206.jpg']
  },
  {
    id: 'gedung-a-1207-wisnu-jatmiko',
    name: '1207 - Wisnu Jatmiko',
    category: 'offices',
    description: 'Faculty office of Wisnu Jatmiko.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1207 - Wisnu Jatmiko.jpg']
  },
  {
    id: 'gedung-a-1209-multiple-faculty',
    name: '1209 - Bagyo Y Moelyodihardjo - Bobby A.A. Nazief - Dadan Hardianto',
    category: 'offices',
    description: 'Shared faculty office for Bagyo Y Moelyodihardjo, Bobby A.A. Nazief, and Dadan Hardianto.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1209 - Bagyo Y Moelyodihardjo - Bobby A.A. Nazief - Dadan Hardianto.jpg']
  },
  {
    id: 'gedung-a-1210',
    name: '1210',
    category: 'offices',
    description: 'Office room 1210 in Gedung A.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1210.jpg']
  },
  {
    id: 'gedung-a-1211-muhammad-rifki-shihab-panca-hadi-putra',
    name: '1211 - Muhammad Rifki Shihab - Panca Hadi Putra',
    category: 'offices',
    description: 'Shared faculty office for Muhammad Rifki Shihab and Panca Hadi Putra.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1211 - Muhammad Rifki Shihab - Panca Hadi Putra.jpg']
  },
  {
    id: 'gedung-a-1212-ari-saptawijaya-wakil-dekan',
    name: '1212 - Ari Saptawijaya - Wakil Dekan',
    category: 'administration',
    description: 'Office of Vice Dean Ari Saptawijaya.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1212 - Ari Saptawijaya - Wakil Dekan.jpg']
  },
  {
    id: 'gedung-a-1213-ruang-rapat-b',
    name: '1213 - Ruang Rapat B',
    category: 'meeting-rooms',
    description: 'Meeting room B for faculty and administrative meetings.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1213 - Ruang Rapat B.jpg']
  },
  {
    id: 'gedung-a-1214-achmad-nizar-hidayanto-wakil-dekan',
    name: '1214 - Achmad Nizar Hidayanto - Wakil Dekan',
    category: 'administration',
    description: 'Office of Vice Dean Achmad Nizar Hidayanto.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1214 - Achmad Nizar Hidayanto - Wakil Dekan.jpg']
  },
  {
    id: 'gedung-a-1215-ruang-rapat-a',
    name: '1215 - Ruang Rapat A',
    category: 'meeting-rooms',
    description: 'Meeting room A for faculty and administrative meetings.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1215 - Ruang Rapat A.jpg']
  },
  {
    id: 'gedung-a-1216-heru-suhartanto',
    name: '1216 - Heru Suhartanto',
    category: 'offices',
    description: 'Faculty office of Heru Suhartanto.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1216 - Heru Suhartanto.jpg']
  },
  {
    id: 'gedung-a-1217-ruang-makan',
    name: '1217 - Ruang Makan',
    category: 'dining',
    description: 'Dining room for faculty and staff.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1217 - Ruang Makan.jpg']
  },
  {
    id: 'gedung-a-1218-tjan-chan-basaruddin',
    name: '1218 - Tjan \'Chan\' Basaruddin',
    category: 'offices',
    description: 'Faculty office of Tjan \'Chan\' Basaruddin.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1218 - Tjan \'Chan\' Basaruddin.jpg']
  },
  {
    id: 'gedung-a-1219-ruang-transit-dosen',
    name: '1219 - Ruang Transit Dosen',
    category: 'facilities',
    description: 'Transit room for faculty members.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1219 - Ruang Transit Dosen.jpg']
  },
  {
    id: 'gedung-a-1220-erdefi-rakun',
    name: '1220 - Erdefi Rakun',
    category: 'offices',
    description: 'Faculty office of Erdefi Rakun.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1220 - Erdefi Rakun.jpg']
  },
  {
    id: 'gedung-a-1221-ruang-kelas',
    name: '1221 - Ruang Kelas',
    category: 'classrooms',
    description: 'Classroom 1221 for lectures and seminars.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1221 - Ruang Kelas.jpg']
  },
  {
    id: 'gedung-a-1222-eko-k-budiardjo',
    name: '1222 - Eko K. Budiardjo',
    category: 'offices',
    description: 'Faculty office of Eko K. Budiardjo.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1222 - Eko K. Budiardjo.jpg']
  },
  {
    id: 'gedung-a-1223-lab-s2',
    name: '1223 - Lab S2',
    category: 'labs',
    description: 'Graduate (S2) laboratory for master\'s degree research.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1223 - Lab S2.jpg']
  },
  {
    id: 'gedung-a-1224',
    name: '1224',
    category: 'offices',
    description: 'Office room 1224 in Gedung A.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1224.jpg']
  },
  {
    id: 'gedung-a-1225',
    name: '1225',
    category: 'offices',
    description: 'Office room 1225 in Gedung A.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1225.jpg']
  },
  {
    id: 'gedung-a-1226',
    name: '1226',
    category: 'offices',
    description: 'Office room 1226 in Gedung A.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1226.jpg']
  },
  {
    id: 'gedung-a-1227-lab-s3',
    name: '1227 - Lab S3',
    category: 'labs',
    description: 'Doctoral (S3) laboratory for PhD research.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1227 - Lab S3.jpg']
  },
  {
    id: 'gedung-a-1228-dana-indra-sensuse',
    name: '1228 - Dana Indra Sensuse',
    category: 'offices',
    description: 'Faculty office of Dana Indra Sensuse.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1228 - Dana Indra Sensuse.jpg']
  },
  {
    id: 'gedung-a-1229-lab-ta-kp',
    name: '1229 - Lab TA-KP',
    category: 'labs',
    description: 'Laboratory for final projects (Tugas Akhir) and internships (Kerja Praktek).',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1229 - Lab TA-KP.jpg']
  },
  {
    id: 'gedung-a-1230-multiple-faculty-2',
    name: '1230 - Dina Chahyati - Ika Alfina - Siti Aminah',
    category: 'offices',
    description: 'Shared faculty office for Dina Chahyati, Ika Alfina, and Siti Aminah.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1230 - Dina Chahyati - Ika Alfina - Siti Aminah.jpg']
  },
  {
    id: 'gedung-a-1231-intelligent-robots-systems',
    name: '1231 - Intelligent Robots and Systems',
    category: 'labs',
    description: 'Research laboratory for intelligent robotics and systems.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1231 - Intelligent Robots and Systems.jpg']
  },
  {
    id: 'gedung-a-1232-multiple-faculty-3',
    name: '1232 - Yova Ruldeviyani - Evi Yulianti - Laksmita Rahadianti',
    category: 'offices',
    description: 'Shared faculty office for Yova Ruldeviyani, Evi Yulianti, and Laksmita Rahadianti.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1232 - Yova Ruldeviyani - Evi Yulianti - Laksmita Rahadianti.jpg']
  },
  {
    id: 'gedung-a-1234-yugo-kartono-isal',
    name: '1234 - Yugo Kartono Isal',
    category: 'offices',
    description: 'Faculty office of Yugo Kartono Isal.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1234 - Yugo Kartono Isal.jpg']
  },  {
    id: 'gedung-a-1236',
    name: '1236',
    category: 'offices',
    description: 'Office room 1236 in Gedung A.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1236.jpg']
  },

  // Gedung B - Individual Locations
  // Lantai 1 utama
  {
    id: 'gedung-b-2101-2102-auditorium',
    name: '2101-2102 - Auditorium',
    category: 'lecture-halls',
    description: 'Large auditorium space combining rooms 2101 and 2102 for major lectures and events.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 1 utama',
    images: [
      '/locations/Gedung Lama/Gedung B/Lantai 1 utama/2101_1-2102_1 - Auditorium.jpg',
      '/locations/Gedung Lama/Gedung B/Lantai 1 utama/2102_2 - Auditorium.jpg',
      '/locations/Gedung Lama/Gedung B/Lantai 1 utama/2102_3 - Auditorium.jpg'
    ]
  },
  {
    id: 'gedung-b-2a22-ruang-panel',
    name: '2A22 - Ruang Panel',
    category: 'facilities',
    description: 'Electrical panel room 2A22 for building infrastructure.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 1 utama',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 1 utama/2A22 - Ruang Panel.jpg']
  },
  {
    id: 'gedung-b-2a23-ruang-panel',
    name: '2A23 - Ruang Panel',
    category: 'facilities',
    description: 'Electrical panel room 2A23 for building infrastructure.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 1 utama',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 1 utama/2A23 - Ruang Panel.jpg']
  },
  {
    id: 'gedung-b-perpustakaan',
    name: 'Perpustakaan',
    category: 'study-spaces',
    description: 'Main library facility with extensive collection of academic resources and research materials.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 1 utama',
    images: [
      '/locations/Gedung Lama/Gedung B/Lantai 1 utama/Perpustakaan_1.jpg',
      '/locations/Gedung Lama/Gedung B/Lantai 1 utama/Perpustakaan_2.jpg',
      '/locations/Gedung Lama/Gedung B/Lantai 1 utama/Perpustakaan_3.jpg'
    ]
  },
  {
    id: 'gedung-b-ruang-baca',
    name: 'Ruang Baca',
    category: 'study-spaces',
    description: 'Reading room providing quiet study space for students and faculty.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 1 utama',
    images: [
      '/locations/Gedung Lama/Gedung B/Lantai 1 utama/Ruang Baca_1.jpg',
      '/locations/Gedung Lama/Gedung B/Lantai 1 utama/Ruang Baca_2.jpg'
    ]
  },
  {
    id: 'gedung-b-staf-perpustakaan',
    name: 'Staf Perpustakaan',
    category: 'offices',
    description: 'Library staff office for administration and support services.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 1 utama',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 1 utama/Staf Perpustakaan.jpg']
  },
  {
    id: 'gedung-b-elevator-lantai-1-utama',
    name: 'Elevator',
    category: 'elevator',
    description: 'Elevator access for vertical transportation in Gedung B.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 1 utama',
    images: [
      '/locations/Gedung Lama/Gedung B/Lantai 1 utama/Lantai 1 - Elevator_1.jpg',
      '/locations/Gedung Lama/Gedung B/Lantai 1 utama/Lantai 1 - Elevator_2.jpg'
    ]
  },
  {
    id: 'gedung-b-emergency-exit-lantai-1-utama',
    name: 'Emergency Exit',
    category: 'facilities',
    description: 'Emergency exit for safe evacuation from Gedung B.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 1 utama',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 1 utama/Lantai 1 - Emergency Exit.jpg']
  },
  {
    id: 'gedung-b-entrance-lantai-1-utama',
    name: 'Entrance',
    category: 'facilities',
    description: 'Main entrance to Gedung B - Lantai 1 utama.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 1 utama',
    images: [
      '/locations/Gedung Lama/Gedung B/Lantai 1 utama/Entrance_1.jpg',
      '/locations/Gedung Lama/Gedung B/Lantai 1 utama/Entrance_2.jpg'
    ]
  },  {
    id: 'gedung-b-toilet-khusus-staf-lantai-1-utama',
    name: 'Toilet Khusus Staf',
    category: 'toilet',
    description: 'Special restroom facility for staff members.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 1 utama',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 1 utama/Toilet Khusus Staf.jpg']
  },  {
    id: 'gedung-b-toilet-staf-lantai-1-utama',
    name: 'Toilet Staf',
    category: 'toilet',
    description: 'Staff restroom facility.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 1 utama',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 1 utama/Toilet Staf.jpg']
  },

  // Gedung B - Lantai 1 atas (Mezzanine)
  {
    id: 'gedung-b-2117-2b04-quiet-room',
    name: '2117-2B04 - Quiet Room',
    category: 'study-spaces',
    description: 'Quiet study room 2117-2B04 on the mezzanine level for focused individual study.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 1 atas',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 1 atas/2117-2B04 - Quiet Room.jpg']
  },
  {
    id: 'gedung-b-2118-2b03-quiet-room',
    name: '2118-2B03 - Quiet Room',
    category: 'study-spaces',
    description: 'Quiet study room 2118-2B03 on the mezzanine level for focused individual study.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 1 atas',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 1 atas/2118-2B03 - Quiet Room.jpg']
  },
  {
    id: 'gedung-b-mezzanine',
    name: 'Perpustakaan (Lantai Mezzanine)',
    category: 'study-spaces',
    description: 'Mezzanine level of the library providing additional study space and overview of the main library floor.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 1 atas',
    images: [
      '/locations/Gedung Lama/Gedung B/Lantai 1 atas/Mezzanine_1.jpg',
      '/locations/Gedung Lama/Gedung B/Lantai 1 atas/Mezzanine_2.jpg',
      '/locations/Gedung Lama/Gedung B/Lantai 1 atas/Mezzanine_3.jpg'
    ]
  },

  // Gedung B - Lantai 2
  {
    id: 'gedung-b-2209-musholla-wanita',
    name: '2209 - Musholla Wanita',
    category: 'religious',
    description: 'Prayer room for female students and staff in Gedung B.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 2/2209 - Musholla Wanita.jpg']
  },
  {
    id: 'gedung-b-2210-wudhu-wanita',
    name: '2210 - Wudhu Wanita',
    category: 'religious',
    description: 'Ablution area for female students and staff before prayers.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 2/2210 - Wudhu Wanita.jpg']
  },
  {
    id: 'gedung-b-2211-musholla-pria',
    name: '2211 - Musholla Pria',
    category: 'religious',
    description: 'Prayer room for male students and staff in Gedung B.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 2',
    images: [
      '/locations/Gedung Lama/Gedung B/Lantai 2/2211_1 - Musholla Pria.jpg',
      '/locations/Gedung Lama/Gedung B/Lantai 2/2211_2 - Musholla Pria.jpg'
    ]
  },
  {
    id: 'gedung-b-2214-outsource-kebersihan',
    name: '2214 - Outsource Kebersihan',
    category: 'facilities',
    description: 'Outsource cleaning service office for maintaining cleanliness in Gedung B.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 2',
    images: [
      '/locations/Gedung Lama/Gedung B/Lantai 2/2214 and 2215_1.jpg',
      '/locations/Gedung Lama/Gedung B/Lantai 2/2214 and 2215_2.jpg',
      '/locations/Gedung Lama/Gedung B/Lantai 2/2214 and 2215_3.jpg'
    ]
  },
  {
    id: 'gedung-b-2215-ristek',
    name: '2215 - RISTEK',
    category: 'student-organizations',
    description: 'RISTEK office for student technology and research activities.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 2',
    images: [
      '/locations/Gedung Lama/Gedung B/Lantai 2/2214 and 2215_1.jpg',
      '/locations/Gedung Lama/Gedung B/Lantai 2/2214 and 2215_2.jpg',
      '/locations/Gedung Lama/Gedung B/Lantai 2/2214 and 2215_3.jpg'
    ]
  },
  {
    id: 'gedung-b-2216-ruang-bem',
    name: '2216 - Ruang BEM',
    category: 'student-organizations',
    description: 'Student Executive Board (BEM) office for student government activities.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 2/2216 - Ruang BEM.jpg']
  },
  {
    id: 'gedung-b-2217-ruang-panel',
    name: '2217 - Ruang Panel',
    category: 'facilities',
    description: 'Electrical panel room 2217 for building infrastructure.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 2/2217 - Ruang Panel.jpg']
  },
  {
    id: 'gedung-b-elevator-lantai-2',
    name: 'Elevator',
    category: 'elevator',
    description: 'Elevator access for vertical transportation on the second floor of Gedung B.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 2/Elevator.jpg']
  },
  {
    id: 'gedung-b-emergency-exit-lantai-2',
    name: 'Emergency Exit',
    category: 'facilities',
    description: 'Emergency exit for safe evacuation from the second floor of Gedung B.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 2/Emergency Exit.jpg']
  },
  {
    id: 'gedung-b-loket-kemahasiswaan-riset',
    name: 'Loket Kemahasiswaan dan Riset',
    category: 'administration',
    description: 'Student affairs and research service counter for administrative services.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 2/Loket Kemahasiswaan dan Riset.jpg']
  },
  {
    id: 'gedung-b-loket-sekre',
    name: 'Loket Sekre',
    category: 'administration',
    description: 'Secretary service counter for general administrative assistance.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 2/Loket Sekre.jpg']
  },
  {
    id: 'gedung-b-sekre-square',
    name: 'Sekre Square',
    category: 'common-areas',
    description: 'Central square area near the secretary offices for student gathering and waiting.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 2/Sekre Square.jpg']
  },
  {
    id: 'gedung-b-sekre',
    name: 'Sekre',
    category: 'administration',
    description: 'Main secretary office for general administrative services and student support.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 2',
    images: [
      '/locations/Gedung Lama/Gedung B/Lantai 2/Sekre_1.jpg',
      '/locations/Gedung Lama/Gedung B/Lantai 2/Sekre_2.jpg'
    ]
  },
  {
    id: 'gedung-b-selasar-lantai-2',
    name: 'Selasar',
    category: 'common-areas',
    description: 'Corridor area on the second floor of Gedung B providing circulation space.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 2/Selasar.jpg']
  },  {
    id: 'gedung-b-toilet-pria-lantai-2',
    name: 'Toilet Pria',
    category: 'toilet',
    description: 'Male restroom facility on the second floor of Gedung B.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 2/Toilet Pria.jpg']
  },  {
    id: 'gedung-b-toilet-wanita-lantai-2',
    name: 'Toilet Wanita',
    category: 'toilet',
    description: 'Female restroom facility on the second floor of Gedung B.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 2/Toilet Wanita.jpg']
  },

  // Gedung B - Lantai 3
  {
    id: 'gedung-b-2301-ruang-kuliah',
    name: '2301 - Ruang Kuliah',
    category: 'classrooms',
    description: 'Lecture room 2301 for classes and academic activities.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 3/2301 - Ruang Kuliah.jpg']
  },
  {
    id: 'gedung-b-2302-ruang-kuliah',
    name: '2302 - Ruang Kuliah',
    category: 'classrooms',
    description: 'Lecture room 2302 for classes and academic activities.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 3/2302 - Ruang Kuliah.jpg']
  },
  {
    id: 'gedung-b-2303-ruang-kuliah',
    name: '2303 - Ruang Kuliah',
    category: 'classrooms',
    description: 'Lecture room 2303 for classes and academic activities.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 3/2303 - Ruang Kuliah.jpg']
  },
  {
    id: 'gedung-b-2304-ruang-kuliah',
    name: '2304 - Ruang Kuliah',
    category: 'classrooms',
    description: 'Lecture room 2304 for classes and academic activities.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 3/2304 - Ruang Kuliah.jpg']
  },
  {
    id: 'gedung-b-2305-ruang-kuliah',
    name: '2305 - Ruang Kuliah',
    category: 'classrooms',
    description: 'Lecture room 2305 for classes and academic activities.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 3/2305 - Ruang Kuliah.jpg']
  },
  {
    id: 'gedung-b-2306-ruang-kuliah',
    name: '2306 - Ruang Kuliah',
    category: 'classrooms',
    description: 'Lecture room 2306 for classes and academic activities.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 3/2306 - Ruang Kuliah.jpg']
  },
  {
    id: 'gedung-b-2307-ruang-kuliah',
    name: '2307 - Ruang Kuliah',
    category: 'classrooms',
    description: 'Lecture room 2307 for classes and academic activities.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 3/2307 - Ruang Kuliah.jpg']
  },
  {
    id: 'gedung-b-2308-ruang-panel',
    name: '2308 - Ruang Panel',
    category: 'facilities',
    description: 'Electrical panel room 2308 for building infrastructure.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 3/2308 - Ruang Panel.jpg']
  },
  {
    id: 'gedung-b-elevator-lantai-3',
    name: 'Elevator',
    category: 'elevator',
    description: 'Elevator access for vertical transportation on the third floor of Gedung B.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 3/Elevator.jpg']
  },  {
    id: 'gedung-b-emergency-exit-lantai-3',
    name: 'Emergency Exit',
    category: 'facilities',
    description: 'Emergency exit for safe evacuation from the third floor of Gedung B.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 3/Emergency Exit.jpg']
  },

  // Gedung B - Lantai 4
  {
    id: 'gedung-b-2401-ruang-kuliah',
    name: '2401 - Ruang Kuliah',
    category: 'classrooms',
    description: 'Lecture room 2401 for classes and academic activities.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 4',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 4/2401 - Ruang Kuliah.jpg']
  },
  {
    id: 'gedung-b-2402-ruang-kuliah',
    name: '2402 - Ruang Kuliah',
    category: 'classrooms',
    description: 'Lecture room 2402 for classes and academic activities.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 4',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 4/2402 - Ruang Kuliah.jpg']
  },
  {
    id: 'gedung-b-2403-ruang-kuliah',
    name: '2403 - Ruang Kuliah',
    category: 'classrooms',
    description: 'Lecture room 2403 for classes and academic activities.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 4',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 4/2403 - Ruang Kuliah.jpg']
  },
  {
    id: 'gedung-b-2404-ruang-kuliah',
    name: '2404 - Ruang Kuliah',
    category: 'classrooms',
    description: 'Lecture room 2404 for classes and academic activities.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 4',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 4/2404 - Ruang Kuliah.jpg']
  },
  {
    id: 'gedung-b-2405-ruang-kuliah',
    name: '2405 - Ruang Kuliah',
    category: 'classrooms',
    description: 'Lecture room 2405 for classes and academic activities.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 4',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 4/2405 - Ruang Kuliah.jpg']
  },
  {
    id: 'gedung-b-2406-ruang-kuliah',
    name: '2406 - Ruang Kuliah',
    category: 'classrooms',
    description: 'Lecture room 2406 for classes and academic activities.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 4',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 4/2406 - Ruang Kuliah.jpg']
  },
  {
    id: 'gedung-b-2407-2400-ruang-panel',
    name: '2407-2400 - Ruang Panel',
    category: 'facilities',
    description: 'Electrical panel room 2407-2400 for building infrastructure.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 4',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 4/2407-2400 - Ruang Panel.jpg']
  },
  {
    id: 'gedung-b-elevator-lantai-4',
    name: 'Elevator',
    category: 'elevator',
    description: 'Elevator access for vertical transportation on the fourth floor of Gedung B.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 4',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 4/Elevator.jpg']
  },
  {
    id: 'gedung-b-emergency-exit-lantai-4',
    name: 'Emergency Exit',
    category: 'facilities',
    description: 'Emergency exit for safe evacuation from the fourth floor of Gedung B.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 4',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 4/Emergency Exit.jpg']
  },
  {
    id: 'gedung-b-toilet-pria-lantai-4',
    name: 'Toilet Pria',
    category: 'toilet',
    description: 'Male restroom facility on the fourth floor of Gedung B.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 4',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 4/Toilet Pria.jpg']
  },
  {
    id: 'gedung-b-toilet-wanita-lantai-4',
    name: 'Toilet Wanita',
    category: 'toilet',
    description: 'Female restroom facility on the fourth floor of Gedung B.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 4',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 4/Toilet Wanita.jpg']
  },

  // Gedung B - Lantai 5
  {
    id: 'gedung-b-2500-ruang-panel',
    name: '2500 - Ruang Panel',
    category: 'facilities',
    description: 'Electrical panel room 2500 for building infrastructure.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 5',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 5/2500 - Ruang Panel.jpg']
  },
  {
    id: 'gedung-b-2501-ruang-teknisi',
    name: '2501 - Ruang Teknisi',
    category: 'facilities',
    description: 'Technician room for building maintenance and technical support.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 5',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 5/2501 - Ruang Teknisi.jpg']
  },
  {
    id: 'gedung-b-2502-ruang-kuliah',
    name: '2502 - Ruang Kuliah',
    category: 'classrooms',
    description: 'Lecture room 2502 for classes and academic activities.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 5',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 5/2502 - Ruang Kuliah.jpg']
  },
  {
    id: 'gedung-b-2503-lab-jaringan-komputer',
    name: '2503 - Lab Jaringan Komputer',
    category: 'labs',
    description: 'Computer networking laboratory for network administration and infrastructure courses.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 5',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 5/2503 - Lab Jaringan Komputer.jpg']
  },
  {
    id: 'gedung-b-2504-ruang-it-sti',
    name: '2504 - Ruang IT - STI',
    category: 'offices',
    description: 'IT department office for STI (Sistem dan Teknologi Informasi) services and support.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 5',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 5/2504 - Ruang IT - STI.jpg']
  },
  {
    id: 'gedung-b-balkon-lantai-5',
    name: 'Balkon',
    category: 'common-areas',
    description: 'Balcony area on the fifth floor providing outdoor space and views.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 5',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 5/Balkon.jpg']
  },
  {
    id: 'gedung-b-elevator-lantai-5',
    name: 'Elevator',
    category: 'elevator',
    description: 'Elevator access for vertical transportation on the fifth floor of Gedung B.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 5',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 5/Elevator.jpg']
  },
  {
    id: 'gedung-b-emergency-exit-lantai-5',
    name: 'Emergency Exit',
    category: 'facilities',
    description: 'Emergency exit for safe evacuation from the fifth floor of Gedung B.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 5',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 5/Emergency Exit.jpg']
  },
  {
    id: 'gedung-b-selasar-lantai-5',
    name: 'Selasar',
    category: 'common-areas',
    description: 'Corridor area on the fifth floor of Gedung B providing circulation space.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 5',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 5/Selasar.jpg']
  },
  {
    id: 'gedung-b-toilet-pria-lantai-5',
    name: 'Toilet Pria',
    category: 'toilet',
    description: 'Male restroom facility on the fifth floor of Gedung B.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 5',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 5/Toilet Pria.jpg']
  },
  {
    id: 'gedung-b-toilet-wanita-lantai-5',
    name: 'Toilet Wanita',
    category: 'toilet',
    description: 'Female restroom facility on the fifth floor of Gedung B.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 5',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 5/Toilet Wanita.jpg']
  },

  // Gedung B - Lantai 6
  {
    id: 'gedung-b-2601-ruang-kuliah',
    name: '2601 - Ruang Kuliah',
    category: 'classrooms',
    description: 'Lecture room 2601 for classes and academic activities.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 6',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 6/2601 - Ruang Kuliah.jpg']
  },
  {
    id: 'gedung-b-2602-ruang-kuliah',
    name: '2602 - Ruang Kuliah',
    category: 'classrooms',
    description: 'Lecture room 2602 for classes and academic activities.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 6',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 6/2602 - Ruang Kuliah.jpg']
  },
  {
    id: 'gedung-b-2603-ruang-kuliah',
    name: '2603 - Ruang Kuliah',
    category: 'classrooms',
    description: 'Lecture room 2603 for classes and academic activities.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 6',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 6/2603 - Ruang Kuliah.jpg']
  },
  {
    id: 'gedung-b-2604-ruang-kuliah',
    name: '2604 - Ruang Kuliah',
    category: 'classrooms',
    description: 'Lecture room 2604 for classes and academic activities.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 6',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 6/2604 - Ruang Kuliah.jpg']
  },
  {
    id: 'gedung-b-elevator-lantai-6',
    name: 'Elevator',
    category: 'elevator',
    description: 'Elevator access for vertical transportation on the sixth floor of Gedung B.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 6',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 6/Lantai 6 - Elevator.jpg']
  },
  {
    id: 'gedung-b-emergency-exit-lantai-6',
    name: 'Emergency Exit',
    category: 'facilities',
    description: 'Emergency exit for safe evacuation from the sixth floor of Gedung B.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 6',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 6/Lantai 6 - Emergency Exit.jpg']
  },

  // Gedung C
  // Lantai 1
  {
    id: 'gedung-c-3103',
    name: '3103',
    category: 'classrooms',
    description: 'Room 3103 in Gedung C for classes and academic activities.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 1/3103.jpg']
  },
  {
    id: 'gedung-c-3111-ruang-kuliah',
    name: '3111 - Ruang Kuliah',
    category: 'classrooms',
    description: 'Lecture room 3111 for classes and academic activities.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 1/3111 - Ruang Kuliah.jpg']
  },
  {
    id: 'gedung-c-3112-ruang-kuliah',
    name: '3112 - Ruang Kuliah',
    category: 'classrooms',
    description: 'Lecture room 3112 for classes and academic activities.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 1/3112 - Ruang Kuliah.jpg']
  },
  {
    id: 'gedung-c-3113-ruang-makan-staf',
    name: '3113 - Ruang Makan Staf',
    category: 'dining',
    description: 'Staff dining room for faculty and staff meals and breaks.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 1/3113 - Ruang Makan Staf.jpg']
  },
  {
    id: 'gedung-c-3114-ruang-kuliah',
    name: '3114 - Ruang Kuliah',
    category: 'classrooms',
    description: 'Lecture room 3114 for classes and academic activities.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 1/3114 - Ruang Kuliah.jpg']
  },
  {
    id: 'gedung-c-kantin',
    name: 'Kantin',
    category: 'dining',
    description: 'Main campus cafeteria offering affordable meals and snacks for students and staff.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 1/Kantin.jpg']
  },
  {
    id: 'gedung-c-ppsi-ruang-staf-dsti',
    name: 'PPSi - Ruang Staf - DSTI',
    category: 'offices',
    description: 'PPSI (Pusat Pelayanan Sistem Informasi) staff office for DSTI (Direktorat Sistem dan Teknologi Informasi) services.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 1/PPSi - Ruang Staf - DSTI.jpg']
  },
  {
    id: 'gedung-c-selasar-lantai-1',
    name: 'Selasar',
    category: 'common-areas',
    description: 'Corridor area on the first floor of Gedung C providing circulation space.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 1/Selasar.jpg']
  },
  {
    id: 'gedung-c-toilet-pria-lantai-1',
    name: 'Toilet Pria',
    category: 'toilet',
    description: 'Male restroom facility on the first floor of Gedung C.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 1/Toilet Pria.jpg']
  },
  {
    id: 'gedung-c-toilet-wanita-lantai-1',
    name: 'Toilet Wanita',
    category: 'toilet',
    description: 'Female restroom facility on the first floor of Gedung C.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 1/Toilet Wanita.jpg']
  },  {
    id: 'gedung-c-yoshinoya',
    name: 'Yoshinoya',
    category: 'dining',
    description: 'Yoshinoya restaurant franchise offering Japanese fast food on campus.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 1/Yoshinoya.jpg']
  },

  // Gedung C - Lantai 2
  {
    id: 'gedung-c-3200',
    name: '3200',
    category: 'offices',
    description: 'Office room 3200 in Gedung C.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/3200.jpg']
  },
  {
    id: 'gedung-c-3200a',
    name: '3200A',
    category: 'offices',
    description: 'Office room 3200A in Gedung C.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/3200A.jpg']
  },
  {
    id: 'gedung-c-3201',
    name: '3201',
    category: 'offices',
    description: 'Office room 3201 in Gedung C.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/3201.jpg']
  },
  {
    id: 'gedung-c-3202-government-business-lab',
    name: '3202 - Government and Business Lab',
    category: 'labs',
    description: 'Government and Business Laboratory for research and development in public administration and business applications.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/3202 - Government and Business Lab.jpg']
  },
  {
    id: 'gedung-c-3203',
    name: '3203',
    category: 'offices',
    description: 'Office room 3203 in Gedung C.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/3203.jpg']
  },
  {
    id: 'gedung-c-3204-rse-lab',
    name: '3204 - RSE-Reliable Software Engineering Lab',
    category: 'labs',
    description: 'Reliable Software Engineering Laboratory focusing on software quality, testing, and reliability research.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/3204 - RSE-Reliable Software Engineering Lab.jpg']
  },
  {
    id: 'gedung-c-3205-bob-hardian',
    name: '3205 - Bob Hardian',
    category: 'offices',
    description: 'Faculty office of Bob Hardian.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/3205 - Bob Hardian.jpg']
  },
  {
    id: 'gedung-c-3206-pusilkom-ui',
    name: '3206 - Pusilkom Universitas Indonesia',
    category: 'administration',
    description: 'Pusilkom (Pusat Ilmu Komputer) Universitas Indonesia administrative office.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/3206 - Pusilkom Universitas Indonesia.jpg']
  },
  {
    id: 'gedung-c-3207',
    name: '3207',
    category: 'offices',
    description: 'Office room 3207 in Gedung C.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/3207.jpg']
  },
  {
    id: 'gedung-c-3209',
    name: '3209',
    category: 'offices',
    description: 'Office room 3209 in Gedung C.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/3209.jpg']
  },
  {
    id: 'gedung-c-3210-pusilkom-ui',
    name: '3210 - Pusilkom Universitas Indonesia',
    category: 'administration',
    description: 'Pusilkom (Pusat Ilmu Komputer) Universitas Indonesia administrative office.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/3210 - Pusilkom Universitas Indonesia.jpg']
  },
  {
    id: 'gedung-c-3210a',
    name: '3210A',
    category: 'offices',
    description: 'Office room 3210A in Gedung C.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/3210A.jpg']
  },
  {
    id: 'gedung-c-3211-direktur-wakil-direktur-pusilkom',
    name: '3211 - Direktur dan Wakil Direktur Pusat Ilmu Komputer Universitas Indonesia',
    category: 'administration',
    description: 'Office of the Director and Vice Director of Pusat Ilmu Komputer (Center for Computer Science) Universitas Indonesia.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/3211 - Direktur dan Wakil Direktur Pusat Ilmu Komputer Universitas Indonesia.jpg']
  },
  {
    id: 'gedung-c-3212a',
    name: '3212A',
    category: 'offices',
    description: 'Office room 3212A in Gedung C.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/3212A.jpg']
  },
  {
    id: 'gedung-c-3212b',
    name: '3212B',
    category: 'offices',
    description: 'Office room 3212B in Gedung C.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/3212B.jpg']
  },
  {
    id: 'gedung-c-3213-multiple-faculty',
    name: '3213 - Annisa Monicha - Nilamsari Putri Utami - Pudy Prima',
    category: 'offices',
    description: 'Shared faculty office for Annisa Monicha, Nilamsari Putri Utami, and Pudy Prima.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/3213 - Annisa Monicha - Nilamsari Putri Utami - Pudy Prima.jpg']
  },
  {
    id: 'gedung-c-3214-ml-cv-lab',
    name: '3214 - Machine Learning and Computer Vision Lab',
    category: 'labs',
    description: 'Machine Learning and Computer Vision Laboratory for artificial intelligence and image processing research.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/3214 - Machine Learning and Computer Vision Lab.jpg']
  },
  {
    id: 'gedung-c-3215',
    name: '3215',
    category: 'offices',
    description: 'Office room 3215 in Gedung C.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/3215.jpg']
  },
  {
    id: 'gedung-c-3217-indra-budi',
    name: '3217 - Indra Budi',
    category: 'offices',
    description: 'Faculty office of Indra Budi.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/3217 - Indra Budi.jpg']
  },
  {
    id: 'gedung-c-3218-information-retrieval-lab',
    name: '3218 - Information Retrieval Lab',
    category: 'labs',
    description: 'Information Retrieval Laboratory focusing on search engines, data mining, and information extraction research.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/3218 - Information Retrieval Lab.jpg']
  },
  {
    id: 'gedung-c-3219',
    name: '3219',
    category: 'offices',
    description: 'Office room 3219 in Gedung C.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/3219.jpg']
  },
  {
    id: 'gedung-c-3220',
    name: '3220',
    category: 'offices',
    description: 'Office room 3220 in Gedung C.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/3220.jpg']
  },
  {
    id: 'gedung-c-3221-multiple-faculty',
    name: '3221 - Alfan Farizki Wicaksono - Ichlashul Affan - Ammar Fathin Sabili',
    category: 'offices',
    description: 'Shared faculty office for Alfan Farizki Wicaksono, Ichlashul Affan, and Ammar Fathin Sabili.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/3221 - Alfan Farizki Wicaksono - Ichlashul Affan - Ammar Fathin Sabili.jpg']
  },
  {
    id: 'gedung-c-3223-adila-alfa-krisnadhi',
    name: '3223 - Adila Alfa Krisnadhi',
    category: 'offices',
    description: 'Faculty office of Adila Alfa Krisnadhi.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/3223 - Adila Alfa Krisnadhi.jpg']
  },
  {
    id: 'gedung-c-toilet-pria-lantai-2',
    name: 'Toilet Pria',
    category: 'toilet',
    description: 'Male restroom facility on the second floor of Gedung C.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/Toilet Pria.jpg']
  },  {
    id: 'gedung-c-toilet-wanita-lantai-2',
    name: 'Toilet Wanita',
    category: 'toilet',
    description: 'Female restroom facility on the second floor of Gedung C.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/Toilet Wanita.jpg']
  },

  // Gedung C - Lantai 3
  {
    id: 'gedung-c-3301',
    name: '3301',
    category: 'offices',
    description: 'Office room 3301 in Gedung C.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 3/3301.jpg']
  },
  {
    id: 'gedung-c-3302-setiadi-yazid-suryana-setiawan',
    name: '3302 - Setiadi Yazid - Suryana Setiawan',
    category: 'offices',
    description: 'Shared faculty office for Setiadi Yazid and Suryana Setiawan.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 3/3302 - Setiadi Yazid - Suryana Setiawan.jpg']
  },
  {
    id: 'gedung-c-3303',
    name: '3303',
    category: 'offices',
    description: 'Office room 3303 in Gedung C.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 3/3303.jpg']
  },
  {
    id: 'gedung-c-3305-enterprise-computing-lab',
    name: '3305 - Enterprise Computing Lab',
    category: 'labs',
    description: 'Enterprise Computing Laboratory focusing on business applications and enterprise software development.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 3/3305 - Enterprise Computing Lab.jpg']
  },
  {
    id: 'gedung-c-3307',
    name: '3307',
    category: 'offices',
    description: 'Office room 3307 in Gedung C.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 3/3307.jpg']
  },
  {
    id: 'gedung-c-3308',
    name: '3308',
    category: 'offices',
    description: 'Office room 3308 in Gedung C.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 3/3308.jpg']
  },
  {
    id: 'gedung-c-3310-multiple-faculty',
    name: '3310 - Arlisa Yuliawati - Ika Chandra Hapsari - Maya Retno Ayu S',
    category: 'offices',
    description: 'Shared faculty office for Arlisa Yuliawati, Ika Chandra Hapsari, and Maya Retno Ayu S.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 3/3310 - Arlisa Yuliawati - Ika Chandra Hapsari - Maya Retno Ayu S.jpg']
  },
  {
    id: 'gedung-c-3312-multiple-faculty',
    name: '3312 - Khumaisa Nuraini - Pudy Prima - Mei Silviana Saputri - Annisa Monicha Sari',
    category: 'offices',
    description: 'Shared faculty office for Khumaisa Nuraini, Pudy Prima, Mei Silviana Saputri, and Annisa Monicha Sari.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 3/3312 - Khumaisa Nuraini - Pudy Prima - Mei Silviana Saputri - Annisa Monicha Sari.jpg']
  },
  {
    id: 'gedung-c-3316-3103-meeting-room-digital-library',
    name: '3316-3103 - Meeting Room Digital Library and Distance Learning Lab - 3103',
    category: 'meeting-rooms',
    description: 'Meeting room for Digital Library and Distance Learning Laboratory activities and conferences.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 3/3316-3103 - Meeting Room Digital Library and Distance Learning Lab - 3103.jpg']
  },
  {
    id: 'gedung-c-3317',
    name: '3317',
    category: 'offices',
    description: 'Office room 3317 in Gedung C.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 3/3317.jpg']
  },
  {
    id: 'gedung-c-3318-muhammad-mishbah-raja-oktovin',
    name: '3318 - Muhammad Mishbah - Raja Oktovin Parhasian Damanik',
    category: 'offices',
    description: 'Shared faculty office for Muhammad Mishbah and Raja Oktovin Parhasian Damanik.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 3/3318 - Muhammad Mishbah - Raja Oktovin Parhasian Damanik.jpg']
  },
  {
    id: 'gedung-c-3326-wahyu-catur-wibowo',
    name: '3326 - Wahyu Catur Wibowo',
    category: 'offices',
    description: 'Faculty office of Wahyu Catur Wibowo.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 3/3326 - Wahyu Catur Wibowo.jpg']
  },
  {
    id: 'gedung-c-musholla-lantai-3',
    name: 'Musholla',
    category: 'religious',
    description: 'Prayer room (Musholla) on the third floor of Gedung C for worship and spiritual activities.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 3/Musholla.jpg']
  },
  {
    id: 'gedung-c-selasar-lantai-3',
    name: 'Selasar',
    category: 'common-areas',
    description: 'Corridor area on the third floor of Gedung C providing circulation space.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 3/Selasar.jpg']
  },
  {
    id: 'gedung-c-toilet-pria-lantai-3',
    name: 'Toilet Pria',
    category: 'toilet',
    description: 'Male restroom facility on the third floor of Gedung C.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 3/Toilet Pria.jpg']
  },  {
    id: 'gedung-c-toilet-wanita-lantai-3',
    name: 'Toilet Wanita',
    category: 'toilet',
    description: 'Female restroom facility on the third floor of Gedung C.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 3/Toilet Wanita.jpg']
  },

  // Gedung Baru - Lantai Dasar
  {
    id: 'gedung-baru-ad01-ruang-arsip',
    name: 'AD01 - Ruang Arsip',
    category: 'administration',
    description: 'Archive room for storing administrative documents and records.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai Dasar',
    images: ['/locations/Gedung Baru/Lantai Dasar/AD01 - Ruang Arsip.jpg']
  },
  {
    id: 'gedung-baru-ad02-ruang-staf-keuangan',
    name: 'AD02 - Ruang Staf Keuangan',
    category: 'administration',
    description: 'Finance staff office for financial administration and accounting services.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai Dasar',
    images: ['/locations/Gedung Baru/Lantai Dasar/AD02 - Ruang Staf Keuangan.jpg']
  },
  {
    id: 'gedung-baru-ad02a-ruang-uks',
    name: 'AD02A - Ruang UKS',
    category: 'facilities',
    description: 'Health clinic (Unit Kesehatan Sekolah) providing basic medical services for students and staff.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai Dasar',
    images: ['/locations/Gedung Baru/Lantai Dasar/AD02A - Ruang UKS.jpg']
  },
  {
    id: 'gedung-baru-ad03-ruang-sekretariat-akademik',
    name: 'AD03 - Ruang Sekretariat Akademik',
    category: 'administration',
    description: 'Academic secretariat office for academic administration and student services.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai Dasar',
    images: ['/locations/Gedung Baru/Lantai Dasar/AD03 - Ruang Sekretariat Akademik.jpg']
  },
  {
    id: 'gedung-baru-ad04-ruang-pengelolaan-pemeliharaan-fasilkom',
    name: 'AD04 - Ruang Pengelolaan dan Pemeliharaan Fasilkom',
    category: 'facilities',
    description: 'Facility management and maintenance office for Fasilkom building operations.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai Dasar',
    images: ['/locations/Gedung Baru/Lantai Dasar/AD04 - Ruang Pengelolaan dan Pemeliharaan Fasilkom.jpg']
  },
  {
    id: 'gedung-baru-ad05-ruang-it',
    name: 'AD05 - Ruang IT',
    category: 'facilities',
    description: 'IT support office for technical services and computer maintenance.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai Dasar',
    images: ['/locations/Gedung Baru/Lantai Dasar/AD05 - Ruang IT.jpg']
  },
  {
    id: 'gedung-baru-ad10-ruang-panel',
    name: 'AD10 - Ruang Panel',
    category: 'facilities',
    description: 'Electrical panel room for building infrastructure and power distribution.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai Dasar',
    images: ['/locations/Gedung Baru/Lantai Dasar/AD10 - Ruang Panel.jpg']
  },  {
    id: 'gedung-baru-ad12-ruang-dapur',
    name: 'AD12 - Ruang Dapur',
    category: 'dining',
    description: 'Kitchen facility for food preparation and catering services.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai Dasar',
    images: ['/locations/Gedung Baru/Lantai Dasar/AD12 - Ruang Dapur.jpg']
  },
  {
    id: 'gedung-baru-kantin',
    name: 'Kantin',
    category: 'dining',
    description: 'Main cafeteria of Gedung Baru offering meals and snacks for students and staff.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai Dasar',
    images: ['/locations/Gedung Baru/Lantai Dasar/Kantin.png']
  },
  {
    id: 'gedung-baru-ad14-ruang-kebersihan',
    name: 'AD14 - Ruang Kebersihan',
    category: 'facilities',
    description: 'Cleaning supplies and janitorial storage room.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai Dasar',
    images: ['/locations/Gedung Baru/Lantai Dasar/AD14 - Ruang Kebersihan.jpg']
  },
  {
    id: 'gedung-baru-ad15-toilet-pria',
    name: 'AD15 - Toilet Pria',
    category: 'toilet',
    description: 'Male restroom facility on the ground floor of Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai Dasar',
    images: ['/locations/Gedung Baru/Lantai Dasar/AD15 - Toilet Pria.jpg']
  },
  {
    id: 'gedung-baru-ad16-toilet-difable',
    name: 'AD16 - Toilet Difable',
    category: 'toilet',
    description: 'Accessible restroom facility for persons with disabilities.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai Dasar',
    images: ['/locations/Gedung Baru/Lantai Dasar/AD16 - Toilet Difable.jpg']
  },
  {
    id: 'gedung-baru-ad19-musholla-wanita',
    name: 'AD19 - Musholla Wanita',
    category: 'religious',
    description: 'Prayer room for female students and staff in Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai Dasar',
    images: ['/locations/Gedung Baru/Lantai Dasar/AD19 - Musholla Wanita.jpg']
  },
  {
    id: 'gedung-baru-ad20-tempat-wudhu-pria',
    name: 'AD20 - Tempat Wudhu Pria',
    category: 'religious',
    description: 'Ablution area for male students and staff before prayers.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai Dasar',
    images: ['/locations/Gedung Baru/Lantai Dasar/AD20 - Tempat Wudhu Pria.jpg']
  },
  {
    id: 'gedung-baru-ad21-tempat-wudhu-wanita',
    name: 'AD21 - Tempat Wudhu Wanita',
    category: 'religious',
    description: 'Ablution area for female students and staff before prayers.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai Dasar',
    images: ['/locations/Gedung Baru/Lantai Dasar/AD21 - Tempat Wudhu Wanita.jpg']
  },
  {
    id: 'gedung-baru-ad22-musholla-pria',
    name: 'AD22 - Musholla Pria',
    category: 'religious',
    description: 'Prayer room for male students and staff in Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai Dasar',
    images: [
      '/locations/Gedung Baru/Lantai Dasar/AD22_1 - Musholla Pria.jpg',
      '/locations/Gedung Baru/Lantai Dasar/AD22_2 - Musholla Pria.jpg'
    ]
  },
  {
    id: 'gedung-baru-pos-informasi-security',
    name: 'Pos Informasi dan Security',
    category: 'security',
    description: 'Information and security post providing visitor assistance and building security monitoring.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai Dasar',
    images: ['/locations/Gedung Baru/Lantai Dasar/Pos Informasi dan Security.jpg']
  },  {
    id: 'gedung-baru-pos-satpam-lobi',
    name: 'Pos Satpam Lobi',
    category: 'security',
    description: 'Security guard post positioned in the lobby for monitoring and access control.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai Dasar',
    images: ['/locations/Gedung Baru/Lantai Dasar/Pos Satpam Lobi.jpg']
  },

  // Gedung Baru - Lantai 1
  {
    id: 'gedung-baru-a101-lab-komputer',
    name: 'A101 - Lab Komputer',
    category: 'labs',
    description: 'Computer laboratory A101 equipped with modern workstations for programming and software development courses.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 1',
    images: ['/locations/Gedung Baru/Lantai 1/A101 - Lab Komputer.jpg']
  },
  {
    id: 'gedung-baru-a102-lab-komputer',
    name: 'A102 - Lab Komputer',
    category: 'labs',
    description: 'Computer laboratory A102 for advanced programming and system administration courses.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 1',
    images: ['/locations/Gedung Baru/Lantai 1/A102 - Lab Komputer.jpg']
  },
  {
    id: 'gedung-baru-a103-lab-komputer',
    name: 'A103 - Lab Komputer',
    category: 'labs',
    description: 'Computer laboratory A103 for database and web development courses.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 1',
    images: [
      '/locations/Gedung Baru/Lantai 1/A103_1  - Lab Komputer.jpg',
      '/locations/Gedung Baru/Lantai 1/A103_2  - Lab Komputer.jpg'
    ]
  },
  {
    id: 'gedung-baru-a104-lab-komputer',
    name: 'A104 - Lab Komputer',
    category: 'labs',
    description: 'Computer laboratory A104 for multimedia and graphics programming courses.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 1',
    images: ['/locations/Gedung Baru/Lantai 1/A104 - Lab Komputer.jpg']
  },
  {
    id: 'gedung-baru-a105-lab-komputer',
    name: 'A105 - Lab Komputer',
    category: 'labs',
    description: 'Computer laboratory A105 for network programming and cybersecurity courses.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 1',
    images: ['/locations/Gedung Baru/Lantai 1/A105 - Lab Komputer.jpg']
  },
  {
    id: 'gedung-baru-a106-lab-komputer',
    name: 'A106 - Lab Komputer',
    category: 'labs',
    description: 'Computer laboratory A106 for artificial intelligence and machine learning courses.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 1',
    images: ['/locations/Gedung Baru/Lantai 1/A106 - Lab Komputer.jpg']
  },
  {
    id: 'gedung-baru-a107-ruang-kelas',
    name: 'A107 - Ruang Kelas',
    category: 'classrooms',
    description: 'Classroom A107 for lectures and seminars.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 1',
    images: ['/locations/Gedung Baru/Lantai 1/A107- Ruang Kelas.jpg']
  },
  {
    id: 'gedung-baru-a108-ruang-kelas',
    name: 'A108 - Ruang Kelas',
    category: 'classrooms',
    description: 'Classroom A108 for lectures and seminars.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 1',
    images: ['/locations/Gedung Baru/Lantai 1/A108- Ruang Kelas.jpg']
  },
  {
    id: 'gedung-baru-a109-ruang-kelas',
    name: 'A109 - Ruang Kelas',
    category: 'classrooms',
    description: 'Classroom A109 for lectures and seminars.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 1',
    images: ['/locations/Gedung Baru/Lantai 1/A109- Ruang Kelas.jpg']
  },
  {
    id: 'gedung-baru-a110-ruang-kelas',
    name: 'A110 - Ruang Kelas',
    category: 'classrooms',
    description: 'Classroom A110 for lectures and seminars.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 1',
    images: ['/locations/Gedung Baru/Lantai 1/A110- Ruang Kelas.jpg']
  },
  {
    id: 'gedung-baru-a112-emergency-exit',
    name: 'A112 - Emergency Exit',
    category: 'facilities',
    description: 'Emergency exit A112 for safe evacuation from Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 1',
    images: ['/locations/Gedung Baru/Lantai 1/A112 - Emergency Exit.jpg']
  },
  {
    id: 'gedung-baru-elevator-lantai-1',
    name: 'Elevator',
    category: 'elevator',
    description: 'Elevator access for vertical transportation on the first floor of Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 1',
    images: ['/locations/Gedung Baru/Lantai 1/Elevator.jpg']
  },
  {
    id: 'gedung-baru-plaza-lantai-1',
    name: 'Plaza',
    category: 'common-areas',
    description: 'Open plaza area on the first floor providing gathering space and circulation.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 1',
    images: ['/locations/Gedung Baru/Lantai 1/Plaza.jpg']
  },  {
    id: 'gedung-baru-ruang-humas',
    name: 'Ruang Humas',
    category: 'administration',
    description: 'Public relations office for communications and media relations.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 1',
    images: ['/locations/Gedung Baru/Lantai 1/Ruang Humas.jpg']
  },

  // Gedung Baru - Lantai 2
  {
    id: 'gedung-baru-a201-auditorium',
    name: 'A201 - Auditorium',
    category: 'lecture-halls',
    description: 'Main auditorium A201 for major lectures, conferences, and academic events.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 2',
    images: [
      '/locations/Gedung Baru/Lantai 2/A201_1 - Auditorium.jpg',
      '/locations/Gedung Baru/Lantai 2/A201_2 - Auditorium.jpg'
    ]
  },
  {
    id: 'gedung-baru-a202-ruang-proyektor',
    name: 'A202 - Ruang Proyektor',
    category: 'facilities',
    description: 'Projector control room A202 for auditorium audio-visual support.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 2',
    images: [
      '/locations/Gedung Baru/Lantai 2/A202_1 - Ruang Proyektor.jpg',
      '/locations/Gedung Baru/Lantai 2/A202_2 - Ruang Proyektor.jpg'
    ]
  },
  {
    id: 'gedung-baru-a205-ruang-persiapan-auditorium',
    name: 'A205 - Ruang Persiapan Auditorium',
    category: 'facilities',
    description: 'Auditorium preparation room A205 for event setup and backstage activities.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 2',
    images: ['/locations/Gedung Baru/Lantai 2/A205 - Ruang Persiapan Auditorium.jpg']
  },
  {
    id: 'gedung-baru-a206-ruang-kelas',
    name: 'A206 - Ruang Kelas',
    category: 'classrooms',
    description: 'Classroom A206 for lectures and seminars.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 2',
    images: ['/locations/Gedung Baru/Lantai 2/A206 - Ruang Kelas.jpg']
  },
  {
    id: 'gedung-baru-a207-ruang-kelas',
    name: 'A207 - Ruang Kelas',
    category: 'classrooms',
    description: 'Classroom A207 for lectures and seminars.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 2',
    images: ['/locations/Gedung Baru/Lantai 2/A207 - Ruang Kelas.jpg']
  },
  {
    id: 'gedung-baru-a208-ruang-kelas',
    name: 'A208 - Ruang Kelas',
    category: 'classrooms',
    description: 'Classroom A208 for lectures and seminars.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 2',
    images: ['/locations/Gedung Baru/Lantai 2/A208 - Ruang Kelas.jpg']
  },
  {
    id: 'gedung-baru-a209-ruang-kelas',
    name: 'A209 - Ruang Kelas',
    category: 'classrooms',
    description: 'Classroom A209 for lectures and seminars.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 2',
    images: ['/locations/Gedung Baru/Lantai 2/A209 - Ruang Kelas.jpg']
  },
  {
    id: 'gedung-baru-a210-ruang-dosen',
    name: 'A210 - Ruang Dosen',
    category: 'offices',
    description: 'Faculty room A210.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 2',
    images: ['/locations/Gedung Baru/Lantai 2/A210  - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a211-emergency-stairs',
    name: 'A211 - Emergency Stairs',
    category: 'facilities',
    description: 'Emergency staircase A211 for safe evacuation from the building.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 2',
    images: ['/locations/Gedung Baru/Lantai 2/A211 - Emergency Stairs.jpg']
  },
  {
    id: 'gedung-baru-a212-ruang-panel',
    name: 'A212 - Ruang Panel',
    category: 'facilities',
    description: 'Electrical panel room A212 for building infrastructure and power distribution.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 2',
    images: ['/locations/Gedung Baru/Lantai 2/A212 - Ruang Panel.jpg']
  },
  {
    id: 'gedung-baru-a213-toilet-wanita',
    name: 'A213 - Toilet Wanita',
    category: 'toilet',
    description: 'Female restroom facility A213 on the second floor of Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 2',
    images: ['/locations/Gedung Baru/Lantai 2/A213 - Toilet Wanita.jpg']
  },
  {
    id: 'gedung-baru-a214-janitor',
    name: 'A214 - Janitor',
    category: 'facilities',
    description: 'Janitor room A214 for cleaning supplies and maintenance equipment storage.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 2',
    images: ['/locations/Gedung Baru/Lantai 2/A214 - Janitor.jpg']
  },
  {
    id: 'gedung-baru-a215-toilet-pria',
    name: 'A215 - Toilet Pria',
    category: 'toilet',
    description: 'Male restroom facility A215 on the second floor of Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 2',
    images: ['/locations/Gedung Baru/Lantai 2/A215 - Toilet Pria.jpg']
  },
  {
    id: 'gedung-baru-a216-toilet-staf',
    name: 'A216 - Toilet Staf',
    category: 'toilet',
    description: 'Staff restroom facility A216 on the second floor of Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 2',
    images: ['/locations/Gedung Baru/Lantai 2/A216 - Toilet Staf.jpg']
  },
  {
    id: 'gedung-baru-balkon-lantai-2-1',
    name: 'Balkon',
    category: 'common-areas',
    description: 'Balcony area on the second floor providing outdoor space and views.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 2',
    images: [
      '/locations/Gedung Baru/Lantai 2/Balkon_1.jpg',
      '/locations/Gedung Baru/Lantai 2/Balkon_2.jpg'
    ]
  },
  {
    id: 'gedung-baru-elevator-lantai-2',
    name: 'Elevator',
    category: 'elevator',
    description: 'Elevator access for vertical transportation on the second floor of Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 2',
    images: ['/locations/Gedung Baru/Lantai 2/Elevator.jpg']
  },
  {
    id: 'gedung-baru-selasar-lantai-2',
    name: 'Selasar',
    category: 'common-areas',
    description: 'Corridor area on the second floor of Gedung Baru providing circulation space.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 2',
    images: ['/locations/Gedung Baru/Lantai 2/Selasar.jpg']
  },

  // Gedung Baru - Lantai 3
  {
    id: 'gedung-baru-a301-lab-komputer',
    name: 'A301 - Lab Komputer',
    category: 'labs',
    description: 'Computer laboratory A301 on the third floor of Gedung Baru equipped with computers for practical learning.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 3',
    images: ['/locations/Gedung Baru/Lantai 3/A301 - Lab Komputer.jpg']
  },
  {
    id: 'gedung-baru-a302-lab-komputer',
    name: 'A302 - Lab Komputer',
    category: 'labs',
    description: 'Computer laboratory A302 on the third floor of Gedung Baru with modern computing facilities.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 3',
    images: [
      '/locations/Gedung Baru/Lantai 3/A302_1 -  - Lab Komputer.jpg',
      '/locations/Gedung Baru/Lantai 3/A302_2  - Lab Komputer.jpg'
    ]
  },
  {
    id: 'gedung-baru-a303-lab-komputer',
    name: 'A303 - Lab Komputer',
    category: 'labs',
    description: 'Computer laboratory A303 on the third floor of Gedung Baru for computer science and IT courses.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 3',
    images: [
      '/locations/Gedung Baru/Lantai 3/A303_1 - Lab Komputer.jpg',
      '/locations/Gedung Baru/Lantai 3/A303_2 - Lab Komputer.jpg'
    ]
  },
  {
    id: 'gedung-baru-a304-lab-komputer',
    name: 'A304 - Lab Komputer',
    category: 'labs',
    description: 'Computer laboratory A304 on the third floor of Gedung Baru providing digital learning environment.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 3',
    images: [
      '/locations/Gedung Baru/Lantai 3/A304_1 - Lab Komputer.jpg',
      '/locations/Gedung Baru/Lantai 3/A304_2 - Lab Komputer.jpg'
    ]
  },
  {
    id: 'gedung-baru-a305-ruang-kelas',
    name: 'A305 - Ruang Kelas',
    category: 'classrooms',
    description: 'Classroom A305 on the third floor of Gedung Baru for lectures and academic activities.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 3',
    images: [
      '/locations/Gedung Baru/Lantai 3/A305_1 - Ruang Kelas.jpg',
      '/locations/Gedung Baru/Lantai 3/A305_2 - Ruang Kelas.jpg'
    ]
  },
  {
    id: 'gedung-baru-a306-ruang-kelas',
    name: 'A306 - Ruang Kelas',
    category: 'classrooms',
    description: 'Classroom A306 on the third floor of Gedung Baru designed for interactive learning sessions.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 3',
    images: [
      '/locations/Gedung Baru/Lantai 3/A306_1 - Ruang Kelas.jpg',
      '/locations/Gedung Baru/Lantai 3/A306_2 - Ruang Kelas.jpg'
    ]
  },
  {
    id: 'gedung-baru-a307-emergency-stairs',
    name: 'A307 - Emergency Stairs',
    category: 'facilities',
    description: 'Emergency staircase A307 on the third floor of Gedung Baru for safe evacuation during emergencies.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 3',
    images: ['/locations/Gedung Baru/Lantai 3/A307 - Emergency Stairs.jpg']
  },
  {
    id: 'gedung-baru-janitor-lantai-3',
    name: 'Janitor',
    category: 'facilities',
    description: 'Janitor room on the third floor of Gedung Baru for cleaning supplies and maintenance equipment.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 3',
    images: ['/locations/Gedung Baru/Lantai 3/Janitor.jpg']
  },
  {
    id: 'gedung-baru-toilet-pria-lantai-3',
    name: 'Toilet Pria',
    category: 'toilet',
    description: 'Male restroom facility on the third floor of Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 3',
    images: ['/locations/Gedung Baru/Lantai 3/Toilet Pria.jpg']
  },
  {
    id: 'gedung-baru-toilet-wanita-lantai-3',
    name: 'Toilet Wanita',
    category: 'toilet',
    description: 'Female restroom facility on the third floor of Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 3',
    images: ['/locations/Gedung Baru/Lantai 3/Toilet Wanita.jpg']
  },

  // Gedung Baru - Lantai 4 
  {
    id: 'gedung-baru-a401-a408-kaprodi-wakil-dekan',
    name: 'A401-A408 - Ruang Kaprodi - Ruang Wakil Dekan',
    category: 'offices',
    description: 'Administrative offices A401-A408 housing the Program Director and Vice Dean offices on the fourth floor of Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A401-A408 - Ruang Kaprodi - Ruang Wakil Dekan.jpg']
  },
  {
    id: 'gedung-baru-a409-ruang-sidang',
    name: 'A409 - Ruang Sidang',
    category: 'meeting-rooms',
    description: 'Meeting room A409 for formal sessions and academic hearings on the fourth floor of Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A409 - Ruang Sidang.jpg']
  },
  {
    id: 'gedung-baru-a410-faculty-lounge',
    name: 'A410 - Faculty Lounge',
    category: 'common-areas',
    description: 'Faculty lounge A410 providing a comfortable space for faculty members to relax and collaborate.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: [
      '/locations/Gedung Baru/Lantai 4/A410_1 - Faculty Lounge.jpg',
      '/locations/Gedung Baru/Lantai 4/A410_2 - Faculty Lounge.jpg',
      '/locations/Gedung Baru/Lantai 4/A410_3 - Faculty Lounge.jpg'
    ]
  },
  {
    id: 'gedung-baru-a410-no-11-ruang-dosen',
    name: 'A410 - No. 11 - Ruang Dosen',
    category: 'offices',
    description: 'Faculty office A410 No. 11 for academic staff on the fourth floor of Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A410 - No. 11 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a411-no-12-ruang-dosen',
    name: 'A411 - No. 12 - Ruang Dosen',
    category: 'offices',
    description: 'Faculty office A411 No. 12 for academic staff on the fourth floor of Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A411 - No. 12 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a412-no-13-ruang-dosen',
    name: 'A412 - No. 13 - Ruang Dosen',
    category: 'offices',
    description: 'Faculty office A412 No. 13 for academic staff on the fourth floor of Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A412 - No. 13 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a413-no-14-ruang-dosen',
    name: 'A413 - No. 14 - Ruang Dosen',
    category: 'offices',
    description: 'Faculty office A413 No. 14 for academic staff on the fourth floor of Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A413 - No. 14 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a414-no-15-ruang-dosen',
    name: 'A414 - No. 15 - Ruang Dosen',
    category: 'offices',
    description: 'Faculty office A414 No. 15 for academic staff on the fourth floor of Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A414 - No. 15 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a415-no-16-ruang-dosen',
    name: 'A415 - No. 16 - Ruang Dosen',
    category: 'offices',
    description: 'Faculty office A415 No. 16 for academic staff on the fourth floor of Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A415 - No. 16 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a416-no-19-ruang-dosen',
    name: 'A416 - No. 19 - Ruang Dosen',
    category: 'offices',
    description: 'Faculty office A416 No. 19 for academic staff on the fourth floor of Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A416 - No. 19 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a417-no-18-ruang-dosen',
    name: 'A417 - No. 18 - Ruang Dosen',
    category: 'offices',
    description: 'Faculty office A417 No. 18 for academic staff on the fourth floor of Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A417 - No. 18 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a418-no-17-musholla-pria',
    name: 'A418 - No. 17 - Musholla Pria',
    category: 'religious',
    description: 'Male prayer room A418 for Islamic worship on the fourth floor of Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A418 - No. 17 - Musholla Pria.jpg']
  },
  {
    id: 'gedung-baru-a419-no-20-ruang-dosen',
    name: 'A419 - No. 20 - Ruang Dosen',
    category: 'offices',
    description: 'Faculty office A419 No. 20 for academic staff on the fourth floor of Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A419 - No. 20 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a420-no-21-ruang-dosen',
    name: 'A420 - No. 21 - Ruang Dosen',
    category: 'offices',
    description: 'Faculty office A420 No. 21 for academic staff on the fourth floor of Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A420 - No. 21 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a421-no-22-musholla-wanita',
    name: 'A421 - No. 22 - Musholla Wanita',
    category: 'religious',
    description: 'Female prayer room A421 for Islamic worship on the fourth floor of Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A421 - No. 22 - Musholla Wanita.jpg']
  },
  {
    id: 'gedung-baru-a422-no-27-ruang-dosen',
    name: 'A422 - No. 27 - Ruang Dosen',
    category: 'offices',
    description: 'Faculty office A422 No. 27 for academic staff on the fourth floor of Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A422 - No. 27 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a423-no-26-ruang-dosen',
    name: 'A423 - No. 26 - Ruang Dosen',
    category: 'offices',
    description: 'Faculty office A423 No. 26 for academic staff on the fourth floor of Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A423 - No. 26 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a424-no-25-ruang-dosen',
    name: 'A424 - No. 25 - Ruang Dosen',
    category: 'offices',
    description: 'Faculty office A424 No. 25 for academic staff on the fourth floor of Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A424 - No. 25 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a425-no-24-ruang-dosen',
    name: 'A425 - No. 24 - Ruang Dosen',
    category: 'offices',
    description: 'Faculty office A425 No. 24 for academic staff on the fourth floor of Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A425 - No. 24 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a426-no-23-ruang-dosen',
    name: 'A426 - No. 23 - Ruang Dosen',
    category: 'offices',
    description: 'Faculty office A426 No. 23 for academic staff on the fourth floor of Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A426 - No. 23 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a427-no-28-ruang-dosen',
    name: 'A427 - No. 28 - Ruang Dosen',
    category: 'offices',
    description: 'Faculty office A427 No. 28 for academic staff on the fourth floor of Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A427 - No. 28 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a428-no-29-ruang-dosen',
    name: 'A428 - No. 29 - Ruang Dosen',
    category: 'offices',
    description: 'Faculty office A428 No. 29 for academic staff on the fourth floor of Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A428 - No. 29 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a429-no-30-ruang-dosen',
    name: 'A429 - No. 30 - Ruang Dosen',
    category: 'administration',
    description: 'Faculty office A429 No. 30 for academic staff on the fourth floor of Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A429 - No. 30 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a430-no-31-ruang-dosen',
    name: 'A430 - No. 31 - Ruang Dosen',
    category: 'offices',
    description: 'Faculty office A430 No. 31 for academic staff on the fourth floor of Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A430 - No. 31 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a431-no-32-ruang-dosen',
    name: 'A431 - No. 32 - Ruang Dosen',
    category: 'offices',
    description: 'Faculty office A431 No. 32 for academic staff on the fourth floor of Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A431 - No. 32 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a432-no-34-ruang-dosen',
    name: 'A432 - No. 34 - Ruang Dosen',
    category: 'offices',
    description: 'Faculty office A432 No. 34 for academic staff on the fourth floor of Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A432 - No. 34 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a433-no-33-ruang-dosen',
    name: 'A433 - No. 33 - Ruang Dosen',
    category: 'offices',
    description: 'Faculty office A433 No. 33 for academic staff on the fourth floor of Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A433 - No. 33 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a434-no-35-ruang-dosen',
    name: 'A434 - No. 35 - Ruang Dosen',
    category: 'offices',
    description: 'Faculty office A434 No. 35 for academic staff on the fourth floor of Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A434 - No. 35 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a435-no-36-ruang-dosen',
    name: 'A435 - No. 36 - Ruang Dosen',
    category: 'offices',
    description: 'Faculty office A435 No. 36 for academic staff on the fourth floor of Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A435 - No. 36 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a436-no-37-ruang-dosen',
    name: 'A436 - No. 37 - Ruang Dosen',
    category: 'offices',
    description: 'Faculty office A436 No. 37 for academic staff on the fourth floor of Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A436 - No. 37 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a437-ruang-studio-b',
    name: 'A437 - Ruang Studio B',
    category: 'facilities',
    description: 'Studio room B A437 for multimedia production and creative activities on the fourth floor of Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A437 - Ruang Studio B.jpg']
  },
  {
    id: 'gedung-baru-a438-ruang-studio-a',
    name: 'A438 - Ruang Studio A',
    category: 'facilities',
    description: 'Studio room A A438 on the fourth floor of Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A438 - Ruang Studio A.jpg']
  },
  {
    id: 'gedung-baru-a439-ruang-rapat',
    name: 'A439 - Ruang Rapat',
    category: 'meeting-rooms',
    description: 'Meeting room A439 on the fourth floor of Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A439 - Ruang Rapat.jpg']
  },
  {
    id: 'gedung-baru-a443-ruang-panel',
    name: 'A443 - Ruang Panel',
    category: 'facilities',
    description: 'Electrical panel room A443 for building infrastructure management on the fourth floor of Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A443 - Ruang Panel.jpg']
  },
  {
    id: 'gedung-baru-a444-toilet-wanita',
    name: 'A444 - Toilet Wanita',
    category: 'toilet',
    description: 'Female restroom facility A444 on the fourth floor of Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A444 - Toilet Wanita.jpg']
  },
  {
    id: 'gedung-baru-a445-toilet-pria',
    name: 'A445 - Toilet Pria',
    category: 'toilet',
    description: 'Male restroom facility A445 on the fourth floor of Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A445 - Toilet Pria.jpg']
  },
  {
    id: 'gedung-baru-a446-toilet-khusus-staf',
    name: 'A446 - Toilet Khusus Staf',
    category: 'toilet',
    description: 'Staff-only restroom facility A446 on the fourth floor of Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A446 - Toilet Khusus Staf.jpg']
  },
  {
    id: 'gedung-baru-a447-ruang-kebersihan',
    name: 'A447 - Ruang Kebersihan',
    category: 'facilities',
    description: 'Cleaning supplies room A447 for maintenance equipment on the fourth floor of Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A447 - Ruang Kebersihan.jpg']
  },
  {
    id: 'gedung-baru-elevator-lantai-4',
    name: 'Elevator',
    category: 'elevator',
    description: 'Elevator access for vertical transportation on the fourth floor of Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/Elevator.jpg']
  },
  {
    id: 'gedung-baru-emergency-stairs-lantai-4',
    name: 'Emergency Stairs',
    category: 'facilities',
    description: 'Emergency staircase for safe evacuation on the fourth floor of Gedung Baru.',
    building: 'gedung-baru',    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/Emergency Stairs.jpg']
  },
  
  // Gedung Baru - Lantai 5
  {
    id: 'gedung-baru-a501-lab-riset',
    name: 'A501 - Lab Riset',
    category: 'labs',
    description: 'Research laboratory for faculty and students.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/A501 - Lab Riset.jpg']
  },
  {
    id: 'gedung-baru-a502-computer-systems-lab',
    name: 'A502 - Computer Systems Lab',
    category: 'labs',
    description: 'Computer systems laboratory for practical learning and research.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: [
      '/locations/Gedung Baru/Lantai 5/A502_1 - Computer Systems Lab.jpg',
      '/locations/Gedung Baru/Lantai 5/A502_2 - Computer Systems Lab.jpg'
    ]
  },
  {
    id: 'gedung-baru-a503-lab-riset',
    name: 'A503 - Lab Riset',
    category: 'labs',
    description: 'Research laboratory for faculty and students.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/A503 - Lab Riset.jpg']
  },
  {
    id: 'gedung-baru-a505-no-5-ruang-dosen',
    name: 'A505 - No. 5 - Ruang Dosen',
    category: 'offices',
    description: 'Faculty office room number 5.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/A505 - No. 5 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a506-no-6-ruang-dosen',
    name: 'A506 - No. 6 - Ruang Dosen',
    category: 'offices',
    description: 'Faculty office room number 6.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/A506 - No. 6 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a507-no-7-ruang-dosen',
    name: 'A507 - No. 7 - Ruang Dosen',
    category: 'offices',
    description: 'Faculty office room number 7.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/A507 - No. 7 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a508-satrio-yudhoatmojo',
    name: 'A508 - No. 8 - Ruang Dosen - Satrio Yudhoatmojo',
    category: 'offices',
    description: 'Faculty office room number 8, office of Satrio Yudhoatmojo.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/A508 - No. 8 - Ruang Dosen - Satrio Yudhoatmojo.jpg']
  },
  {
    id: 'gedung-baru-a509-no-12-ruang-dosen',
    name: 'A509 - No. 12 - Ruang Dosen',
    category: 'offices',
    description: 'Faculty office room number 12.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/A509 - No. 12 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a510-no-11-ruang-dosen',
    name: 'A510 - No. 11 - Ruang Dosen',
    category: 'offices',
    description: 'Faculty office room number 11.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/A510 - No. 11 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a511-no-10-ruang-dosen',
    name: 'A511 - No. 10 - Ruang Dosen',
    category: 'offices',
    description: 'Faculty office room number 10.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/A511 - No. 10 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a512-no-9-musholla',
    name: 'A512 - No. 9 - Musholla',
    category: 'religious',
    description: 'Prayer room (Musholla) for worship.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/A512 - No. 9 - Musholla.jpg']
  },
  {
    id: 'gedung-baru-a513-no-13-ruang-dosen',
    name: 'A513 - No. 13 - Ruang Dosen',
    category: 'offices',
    description: 'Faculty office room number 13.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/A513 - No. 13 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a514-no-14-ruang-dosen',
    name: 'A514 - No. 14 - Ruang Dosen',
    category: 'offices',
    description: 'Faculty office room number 14.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/A514 - No. 14 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a515-no-15-ruang-dosen',
    name: 'A515 - No. 15 - Ruang Dosen',
    category: 'offices',
    description: 'Faculty office room number 15.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/A515 - No. 15 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a516-no-16-ruang-dosen',
    name: 'A516 - No. 16 - Ruang Dosen',
    category: 'offices',
    description: 'Faculty office room number 16.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/A516 - No. 16 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a517-competitive-programming-study-club',
    name: 'A517 - Competitive Programming Study Club',
    category: 'student-organizations',
    description: 'Study club for competitive programming activities.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/A517 - Competitive Programming Study Club.jpg']
  },
  {
    id: 'gedung-baru-a518-ruang-kelas',
    name: 'A518 - Ruang Kelas',
    category: 'classrooms',
    description: 'Classroom for lectures and academic activities.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/A518 - Ruang Kelas.jpg']
  },
  {
    id: 'gedung-baru-a519-ruang-rapat',
    name: 'A519 - Ruang Rapat',
    category: 'meeting-rooms',
    description: 'Meeting room for faculty and administrative meetings.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/A519 - Ruang Rapat.jpg']
  },
  {
    id: 'gedung-baru-a520-lab-riset',
    name: 'A520 - Lab Riset',
    category: 'labs',
    description: 'Research laboratory for faculty and students.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/A520 - Lab Riset.jpg']
  },
  {
    id: 'gedung-baru-a521-lab-riset',
    name: 'A521 - Lab Riset',
    category: 'labs',
    description: 'Research laboratory for faculty and students.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/A521 - Lab Riset.jpg']
  },
  {
    id: 'gedung-baru-a523-ruang-panel',
    name: 'A523 - Ruang Panel',
    category: 'facilities',
    description: 'Electrical panel room for building infrastructure.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/A523 - Ruang Panel.jpg']
  },
  {
    id: 'gedung-baru-a527-janitor',
    name: 'A527 - Janitor',
    category: 'facilities',
    description: 'Janitor room for building maintenance staff.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/A527 - Janitor.jpg']
  },
  {
    id: 'gedung-baru-lantai-5-elevator',
    name: 'Elevator',
    category: 'elevator',
    description: 'Elevator access for Gedung Baru Lantai 5.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/Elevator.jpg']
  },
  {
    id: 'gedung-baru-lantai-5-emergency-stairs',
    name: 'Emergency Stairs',
    category: 'facilities',
    description: 'Emergency staircase for evacuation purposes.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/Emergency Stairs.jpg']
  },
  {
    id: 'gedung-baru-lantai-5-toilet-khusus-dosen',
    name: 'Toilet Khusus Dosen',
    category: 'toilet',
    description: 'Special toilet facility for faculty members.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/Toilet Khusus Dosen.jpg']
  },
  {
    id: 'gedung-baru-lantai-5-toilet-pria',
    name: 'Toilet Pria',
    category: 'toilet',
    description: 'Men\'s restroom facility.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/Toilet Pria.jpg']
  },
  {
    id: 'gedung-baru-lantai-5-toilet-wanita',
    name: 'Toilet Wanita',
    category: 'toilet',
    description: 'Women\'s restroom facility.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/Toilet Wanita.jpg']
  },
  
  // Gedung Baru - Lantai 6
  {
    id: 'gedung-baru-a601-ruang-kelas',
    name: 'A601 - Ruang Kelas',
    category: 'classrooms',
    description: 'Classroom for lectures and academic activities.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 6',
    images: ['/locations/Gedung Baru/Lantai 6/A601 - Ruang Kelas.jpg']
  },
  {
    id: 'gedung-baru-a602-ruang-kelas',
    name: 'A602 - Ruang Kelas',
    category: 'classrooms',
    description: 'Classroom for lectures and academic activities.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 6',
    images: ['/locations/Gedung Baru/Lantai 6/A602 - Ruang Kelas.jpg']
  },
  {
    id: 'gedung-baru-a603-no-3-ruang-dosen',
    name: 'A603 - No. 3 - Ruang Dosen',
    category: 'offices',
    description: 'Faculty office room number 3.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 6',
    images: ['/locations/Gedung Baru/Lantai 6/A603 - No. 3 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a604-no-4-ruang-dosen',
    name: 'A604 - No. 4 - Ruang Dosen',
    category: 'offices',
    description: 'Faculty office room number 4.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 6',
    images: ['/locations/Gedung Baru/Lantai 6/A604 - No. 4 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a605-no-5-ruang-dosen',
    name: 'A605 - No. 5 - Ruang Dosen',
    category: 'offices',
    description: 'Faculty office room number 5.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 6',
    images: ['/locations/Gedung Baru/Lantai 6/A605 - No. 5 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a606-no-6-ruang-dosen',
    name: 'A606 - No. 6 - Ruang Dosen',
    category: 'offices',
    description: 'Faculty office room number 6.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 6',
    images: ['/locations/Gedung Baru/Lantai 6/A606 - No. 6 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a607-ruang-kelas',
    name: 'A607 - Ruang Kelas',
    category: 'classrooms',
    description: 'Classroom for lectures and academic activities.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 6',
    images: ['/locations/Gedung Baru/Lantai 6/A607 - Ruang Kelas.jpg']
  },
  {
    id: 'gedung-baru-a608-ruang-kelas',
    name: 'A608 - Ruang Kelas',
    category: 'classrooms',
    description: 'Classroom for lectures and academic activities.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 6',
    images: ['/locations/Gedung Baru/Lantai 6/A608 - Ruang Kelas.jpg']
  },
  {
    id: 'gedung-baru-a609-ruang-kelas',
    name: 'A609 - Ruang Kelas',
    category: 'classrooms',
    description: 'Classroom for lectures and academic activities.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 6',
    images: ['/locations/Gedung Baru/Lantai 6/A609 - Ruang Kelas.jpg']
  },
  {
    id: 'gedung-baru-a610-ruang-kelas',
    name: 'A610 - Ruang Kelas',
    category: 'classrooms',
    description: 'Classroom for lectures and academic activities.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 6',
    images: ['/locations/Gedung Baru/Lantai 6/A610 - Ruang Kelas.jpg']
  },
  {
    id: 'gedung-baru-a611-ruang-kelas',
    name: 'A611 - Ruang Kelas',
    category: 'classrooms',
    description: 'Classroom for lectures and academic activities.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 6',
    images: ['/locations/Gedung Baru/Lantai 6/A611 - Ruang Kelas.jpg']
  },
  {
    id: 'gedung-baru-a612-ruang-kelas',
    name: 'A612 - Ruang Kelas',
    category: 'classrooms',
    description: 'Classroom for lectures and academic activities.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 6',
    images: ['/locations/Gedung Baru/Lantai 6/A612 - Ruang Kelas.jpg']
  },
  {
    id: 'gedung-baru-a613-no-13-ruang-dosen',
    name: 'A613 - No. 13 - Ruang Dosen',
    category: 'offices',
    description: 'Faculty office room number 13.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 6',
    images: ['/locations/Gedung Baru/Lantai 6/A613 - No. 13 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a614-no-14-ruang-dosen',
    name: 'A614 - No. 14 - Ruang Dosen',
    category: 'offices',
    description: 'Faculty office room number 14.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 6',
    images: ['/locations/Gedung Baru/Lantai 6/A614 - No. 14 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a615-no-15-ruang-dosen',
    name: 'A615 - No. 15 - Ruang Dosen',
    category: 'offices',
    description: 'Faculty office room number 15.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 6',
    images: ['/locations/Gedung Baru/Lantai 6/A615 - No. 15 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a617-ruang-panel',
    name: 'A617 - Ruang Panel',
    category: 'facilities',
    description: 'Electrical panel room for building infrastructure.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 6',
    images: ['/locations/Gedung Baru/Lantai 6/A617 - Ruang Panel.jpg']
  },
  {
    id: 'gedung-baru-a618-toilet-wanita',
    name: 'A618 - Toilet Wanita',
    category: 'toilet',
    description: 'Women\'s restroom facility.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 6',
    images: ['/locations/Gedung Baru/Lantai 6/A618 - Toilet Wanita.jpg']
  },
  {
    id: 'gedung-baru-a619-toilet-pria',
    name: 'A619 - Toilet Pria',
    category: 'toilet',
    description: 'Men\'s restroom facility.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 6',
    images: ['/locations/Gedung Baru/Lantai 6/A619 - Toilet Pria.jpg']
  },
  {
    id: 'gedung-baru-a620-toilet-difable',
    name: 'A620 - Toilet Difable',
    category: 'toilet',
    description: 'Accessible restroom facility for persons with disabilities.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 6',
    images: ['/locations/Gedung Baru/Lantai 6/A620 - Toilet Difable.jpg']
  },
  {
    id: 'gedung-baru-a621-ruang-kebersihan',
    name: 'A621 - Ruang Kebersihan',
    category: 'facilities',
    description: 'Cleaning room for building maintenance supplies.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 6',
    images: ['/locations/Gedung Baru/Lantai 6/A621 - Ruang Kebersihan.jpg']
  },
  {
    id: 'gedung-baru-lantai-6-elevator',
    name: 'Elevator',
    category: 'elevator',
    description: 'Elevator access for Gedung Baru Lantai 6.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 6',
    images: ['/locations/Gedung Baru/Lantai 6/Elevator.jpg']
  },
  {
    id: 'gedung-baru-lantai-6-emergency-exit',
    name: 'Emergency Exit',
    category: 'facilities',
    description: 'Emergency exit for evacuation purposes.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 6',
    images: ['/locations/Gedung Baru/Lantai 6/Emergency Exit.jpg']
  },
  {
    id: 'gedung-baru-lantai-6-selasar',
    name: 'Selasar',
    category: 'common-areas',
    description: 'Corridor/hallway area of Gedung Baru Lantai 6.',
    building: 'gedung-baru',    floor: 'Gedung Baru - Lantai 6',
    images: ['/locations/Gedung Baru/Lantai 6/Selasar.jpg']
  },
  
  // Gedung Baru - Lantai 7
  {
    id: 'gedung-baru-a701-no-1-lab-riset',
    name: 'A701 - No. 1 - Lab Riset',
    category: 'labs',
    description: 'Research laboratory for faculty and students.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 7',
    images: [
      '/locations/Gedung Baru/Lantai 7/A701 - No. 1_1 - Lab Riset.jpg',
      '/locations/Gedung Baru/Lantai 7/A701 - No. 1_2 - Lab Riset.jpg'
    ]
  },
  {
    id: 'gedung-baru-a702-no-3-ruang-postgraduate',
    name: 'A702 - No. 3 - Ruang Postgraduate',
    category: 'classrooms',
    description: 'Postgraduate program room for advanced studies.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 7',
    images: ['/locations/Gedung Baru/Lantai 7/A702 - No. 3 - Ruang Postgraduate.jpg']
  },
  {
    id: 'gedung-baru-a702-no-4-ruang-postgraduate',
    name: 'A702 - No. 4 - Ruang Postgraduate',
    category: 'classrooms',
    description: 'Postgraduate program room for advanced studies.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 7',
    images: ['/locations/Gedung Baru/Lantai 7/A702 - No. 4 - Ruang Postgraduate.jpg']
  },
  {
    id: 'gedung-baru-a703-no-8-ruang-kelas',
    name: 'A703 - No. 8 - Ruang Kelas',
    category: 'classrooms',
    description: 'Classroom for lectures and academic activities.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 7',
    images: ['/locations/Gedung Baru/Lantai 7/A703 - No. 8 - Ruang Kelas.jpg']
  },
  {
    id: 'gedung-baru-a704-no-7-ruang-kelas',
    name: 'A704 - No. 7 - Ruang Kelas',
    category: 'classrooms',
    description: 'Classroom for lectures and academic activities.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 7',
    images: ['/locations/Gedung Baru/Lantai 7/A704 - No. 7 - Ruang Kelas.jpg']
  },
  {
    id: 'gedung-baru-a705-no-6-ruang-dosen',
    name: 'A705 - No. 6 - Ruang Dosen',
    category: 'offices',
    description: 'Faculty office room number 6.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 7',
    images: ['/locations/Gedung Baru/Lantai 7/A705 - No. 6 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a706-no-5-ruang-dosen',
    name: 'A706 - No. 5 - Ruang Dosen',
    category: 'offices',
    description: 'Faculty office room number 5.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 7',
    images: ['/locations/Gedung Baru/Lantai 7/A706 - No. 5 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a707-no-9-ruang-dosen',
    name: 'A707 - No. 9 - Ruang Dosen',
    category: 'offices',
    description: 'Faculty office room number 9.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 7',
    images: ['/locations/Gedung Baru/Lantai 7/A707 - No. 9 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a708-no-10-ruang-dosen',
    name: 'A708 - No. 10 - Ruang Dosen',
    category: 'offices',
    description: 'Faculty office room number 10.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 7',
    images: ['/locations/Gedung Baru/Lantai 7/A708 - No. 10 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a709-no-11-ruang-dosen',
    name: 'A709 - No. 11 - Ruang Dosen',
    category: 'offices',
    description: 'Faculty office room number 11.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 7',
    images: ['/locations/Gedung Baru/Lantai 7/A709 - No. 11 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a710-no-12-ruang-dosen',
    name: 'A710 - No. 12 - Ruang Dosen',
    category: 'offices',
    description: 'Faculty office room number 12.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 7',
    images: ['/locations/Gedung Baru/Lantai 7/A710 - No. 12 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a711-ruang-postgraduate',
    name: 'A711 - Ruang Postgraduate',
    category: 'classrooms',
    description: 'Postgraduate program room for advanced studies.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 7',
    images: ['/locations/Gedung Baru/Lantai 7/A711 - Ruang Postgraduate.jpg']
  },
  {
    id: 'gedung-baru-a712-ruang-kelas-internasional',
    name: 'A712 - Ruang Kelas Internasional',
    category: 'classrooms',
    description: 'International classroom for international programs and activities.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 7',
    images: ['/locations/Gedung Baru/Lantai 7/A712 - Ruang Kelas Internasional.jpg']
  },
  {
    id: 'gedung-baru-a713-ruang-kelas-internasional',
    name: 'A713 - Ruang Kelas Internasional',
    category: 'classrooms',
    description: 'International classroom for international programs and activities.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 7',
    images: ['/locations/Gedung Baru/Lantai 7/A713 - Ruang Kelas Internasional.jpg']
  },
  {
    id: 'gedung-baru-a714-ruang-kelas-internasional',
    name: 'A714 - Ruang Kelas Internasional',
    category: 'classrooms',
    description: 'International classroom for international programs and activities.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 7',
    images: ['/locations/Gedung Baru/Lantai 7/A714 - Ruang Kelas Internasional.jpg']
  },
  {
    id: 'gedung-baru-a715-ruang-kelas-internasional',
    name: 'A715 - Ruang Kelas Internasional',
    category: 'classrooms',
    description: 'International classroom for international programs and activities.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 7',
    images: ['/locations/Gedung Baru/Lantai 7/A715- Ruang Kelas Internasional.jpg']
  },
  {
    id: 'gedung-baru-a716-ruang-postgraduate',
    name: 'A716 - Ruang Postgraduate',
    category: 'classrooms',
    description: 'Postgraduate program room for advanced studies.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 7',
    images: ['/locations/Gedung Baru/Lantai 7/A716 - Ruang Postgraduate.jpg']
  },
  {
    id: 'gedung-baru-a718-ruang-panel',
    name: 'A718 - Ruang Panel',
    category: 'facilities',
    description: 'Electrical panel room for building infrastructure.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 7',
    images: ['/locations/Gedung Baru/Lantai 7/A718 - Ruang Panel.jpg']
  },
  {
    id: 'gedung-baru-a719-toilet-wanita',
    name: 'A719 - Toilet Wanita',
    category: 'toilet',
    description: 'Women\'s restroom facility.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 7',
    images: ['/locations/Gedung Baru/Lantai 7/A719 - Toilet Wanita.jpg']
  },
  {
    id: 'gedung-baru-a720-toilet-pria',
    name: 'A720 - Toilet Pria',
    category: 'toilet',
    description: 'Men\'s restroom facility.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 7',
    images: ['/locations/Gedung Baru/Lantai 7/A720 - Toilet Pria.jpg']
  },
  {
    id: 'gedung-baru-a721-toilet-difable',
    name: 'A721 - Toilet Difable',
    category: 'toilet',
    description: 'Accessible restroom facility for persons with disabilities.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 7',
    images: ['/locations/Gedung Baru/Lantai 7/A721 - Toilet Difable.jpg']
  },
  {
    id: 'gedung-baru-a722-ruang-kebersihan',
    name: 'A722 - Ruang Kebersihan',
    category: 'facilities',
    description: 'Cleaning room for building maintenance supplies.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 7',
    images: ['/locations/Gedung Baru/Lantai 7/A722 - Ruang Kebersihan.jpg']
  },
  {
    id: 'gedung-baru-lantai-7-elevator',
    name: 'Elevator',
    category: 'elevator',
    description: 'Elevator access for Gedung Baru Lantai 7.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 7',
    images: ['/locations/Gedung Baru/Lantai 7/Elevator.jpg']
  },
  {
    id: 'gedung-baru-lantai-7-emergency-stairs',
    name: 'Emergency Stairs',
    category: 'facilities',
    description: 'Emergency staircase for evacuation purposes.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 7',
    images: ['/locations/Gedung Baru/Lantai 7/Emergency Stairs.jpg']
  }
  
];

// Export default image for use in other components
export const defaultLocationImage = DEFAULT_IMAGE;
