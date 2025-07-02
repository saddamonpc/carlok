// Static Database setiap gedung, lokasi, dan ruangan di Fakultas Ilmu Komputer, Universitas Indonesia

// Default image path (jika foto lokasi / denah tidak ada)
const DEFAULT_IMAGE = '/locations/default.jpg';

export const locations = [
  // Buildings
  {
    id: 'gedung-a',
    name: 'Gedung A',
    category: 'buildings',
    description: 'Gedung A memiliki dua lantai dan digunakan untuk pelajaran di laboratorium komputer. Lantai atas digunakan untuk ruangan staf dan dosen, ruang rapat, dll.',
    floors: [
      'Gedung A - Lantai 1',
      'Gedung A - Lantai 2'
    ],
    images: [
      '/locations/Gedung Lama/Gedung A/Lantai 1/Entrance1_1.jpg',
      '/locations/Gedung Lama/Gedung A/Lantai 1/Entrance2.jpg',
      '/locations/Gedung Lama/Gedung A/Lantai 1/Entrance3.jpg'
    ]
  },
  {
    id: 'gedung-b',
    name: 'Gedung B',
    category: 'buildings',
    description: 'Gedung B memiliki enam lantai dan memiliki perpustakaan, auditorium, fungsi administrasi dan sekretariat, ruang kuliah, dll.',
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
  },
  {
    id: 'gedung-c',
    name: 'Gedung C',
    category: 'buildings',
    description: 'Gedung C memiliki tiga lantai dan memiliki aneka ragam fungsi, seperti ruang kuliah, ruangan dosen dan staf, laboratorium, dll.',
    floors: [
      'Gedung C - Lantai 1',
      'Gedung C - Lantai 2',
      'Gedung C - Lantai 3'
    ],
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
    description: 'Gedung Baru memiliki tujuh lantai dan terpisah dari Gedung Lama (A, B, dan C). Gedung Baru memiliki berbagai fungsi, termasuk ruang kuliah, laboratorium, ruang dosen, dan memiliki fasilitas umum, seperti Musholla, UKS, dll.',
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

  // Gedung A - Locations
  // Lantai 1
  {
    id: 'gedung-a-1100-dapur',
    name: '1100 - Dapur',
    category: 'dining',
    description: 'Ruang 1100 dapur di Gedung A dekat Pos Satpam.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 1/1100 - Dapur.jpg']
  },
  {
    id: 'gedung-a-1101-dapur',
    name: '1101 - Dapur',
    category: 'dining',
    description: 'Ruang 1101 dapur di Gedung A dekat Pos Satpam.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 1/1101 - Dapur.jpg']
  },
  {
    id: 'gedung-a-1102-musholla-pria',
    name: '1102 - Musholla Pria',
    category: 'religious',
    description: 'Musholla pria untuk ibadah dan sholat.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 1/1102 - Musholla Pria.jpg']
  },
  {
    id: 'gedung-a-1103-lab-komputer',
    name: '1103 - Lab Komputer',
    category: 'labs',
    description: 'Ruang 1103 Lab komputer untuk sesi lab dan juga kelas.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 1/1103 - Lab Komputer.jpg']
  },
  {
    id: 'gedung-a-1105-lab-komputer',
    name: '1105 - Lab Komputer',
    category: 'labs',
    description: 'Ruang 1105 Lab komputer untuk sesi lab dan juga kelas.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 1/1105 - Lab Komputer.jpg']
  },
  {
    id: 'gedung-a-1106-lab-komputer',
    name: '1106 - Lab Komputer',
    category: 'labs',
    description: 'Ruang 1106 Lab komputer untuk sesi lab dan juga kelas.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 1/1106  - Lab Komputer.jpg']
  },
  {
    id: 'gedung-a-1107-lab-komputer',
    name: '1107 - Lab Komputer',
    category: 'labs',
    description: 'Ruang 1107 Lab komputer untuk sesi lab dan juga kelas.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 1/1107 - Lab Komputer.jpg']
  },
  {
    id: 'gedung-a-1109-lab-komputer',
    name: '1109 - Lab Komputer',
    category: 'labs',
    description: 'Ruang 1109 Lab komputer untuk sesi lab dan juga kelas.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 1/1109 - Lab Komputer.jpg']
  },
  {
    id: 'gedung-a-1110-lab-babe',
    name: '1110 - Lab Babe',
    category: 'labs',
    description: 'Ruang 1110 Lab Babe.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 1/1110 - Lab Babe.jpg']
  },
  {
    id: 'gedung-a-1114-lab-cisco',
    name: '1114 - Lab Cisco',
    category: 'labs',
    description: 'Ruang 1114 Lab Cisco.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 1/1114 - Lab Cisco.jpg']
  },
  {
    id: 'gedung-a-1117',
    name: '1117',
    category: 'facilities',
    description: '1117 di Gedung A.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 1/1117.jpg']
  },  {
    id: 'gedung-a-1120-lab-ta',
    name: '1120 - Lab TA',
    category: 'labs',
    description: '1120 Lab TA.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 1/1120 - Lab TA.jpg']
  },
  {
    id: 'gedung-a-pos-satpam-entrance2',
    name: 'Pos Satpam Pintu Masuk Selatan Gedung A',
    category: 'security',
    description: 'Pos Satpam di pintu masuk selatan Gedung A (dekat parkiran).',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 1/Pos Satpam Entrance2.jpg']
  },
  {
    id: 'gedung-a-pos-satpam-entrance3',
    name: 'Pos Satpam East Entrance Gedung A',
    category: 'security',
    description: 'Pos satpam di pintu masuk timur Gedung A (dekat Yoshinoya dan tenda hijau).',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 1/Pos Satpam Entrance3.jpg']
  },
  {
    id: 'gedung-a-selasar-lantai-1',
    name: 'Selasar',
    category: 'common-areas',
    description: 'Selasar / tempat bersantai di lantai 1 Gedung A.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 1/Selasar_1.jpg']
  },
  {
    id: 'gedung-a-toilet-pria-lantai-1',
    name: 'Toilet Pria',
    category: 'toilet',
    description: 'Toilet pria di lantai 1 Gedung A.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 1/Toilet Pria.jpg']
  },
  {
    id: 'gedung-a-toilet-wanita-lantai-1',
    name: 'Toilet Wanita',
    category: 'toilet',
    description: 'Toilet wanita di lantai 1 Gedung A.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 1/Toilet Wanita.jpg']
  },

  // Gedung A - Lantai 2
  {
    id: 'gedung-a-1200-lim-yohanes-stefanus',
    name: '1200 - Lim Yohanes Stefanus',
    category: 'offices',
    description: 'Ruang Dosen Drs. Lim Yohanes Stefanus, M.Math., Ph.D terletak di Gedung A Lantai 2.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1200 - Lim Yohanes Stefanus.jpg']
  },
  {
    id: 'gedung-a-1202-aniati-murni-arymurthy',
    name: '1202 - Aniati Murni Arymurthy',
    category: 'offices',
    description: 'Ruang Dosen Prof. Dr. Ir. Aniati Murni Arymurthy, M.Sc terletak di Gedung A Lantai 2.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1202 - Aniati Murni Arymurthy.jpg']
  },
  {
    id: 'gedung-a-1204-belawati-h-widjaja',
    name: '1204 - Belawati H. Widjaja',
    category: 'offices',
    description: 'Ruang dosen Prof. Dra. Belawati H. Widjaja, M.Sc., Ph.D terletak di Gedung A Lantai 2.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1204 - Belawati H. Widjaja.jpg']
  },
  {
    id: 'gedung-a-1205',
    name: '1205 - Ruang Humas',
    category: 'administration',
    description: 'Room 1205 - Humas di Gedung A.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1205.jpg']
  },
  {
    id: 'gedung-a-1206',
    name: '1206',
    category: 'offices',
    description: 'Ruang staf 1206 di Gedung A.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1206.jpg']
  },
  {
    id: 'gedung-a-1207-wisnu-jatmiko',
    name: '1207 - Wisnu Jatmiko',
    category: 'offices',
    description: 'Ruang Dosen Prof. Dr. Eng. Wisnu Jatmiko, S.T., M.Kom terletak di Gedung A Lantai 2.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1207 - Wisnu Jatmiko.jpg']
  },
  {
    id: 'gedung-a-1209-multiple-faculty',
    name: '1209 - Bagyo Y Moelyodihardjo - Bobby A.A. Nazief - Dadan Hardianto',
    category: 'offices',
    description: 'Ruang Dosen bersama untuk Ir. Bagyo Y. Moeliodihardjo, M.Sc., Drs. Bobby A. A. Nazief, M.Sc., Ph.D., dan Dadan Hardianto, S.Kom., M.Kom terletak di Gedung A Lantai 2.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1209 - Bagyo Y Moelyodihardjo - Bobby A.A. Nazief - Dadan Hardianto.jpg']
  },
  {
    id: 'gedung-a-1210',
    name: '1210',
    category: 'offices',
    description: 'Ruang staf 1210 in Gedung A.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1210.jpg']
  },
  {
    id: 'gedung-a-1211-muhammad-rifki-shihab-panca-hadi-putra',
    name: '1211 - Muhammad Rifki Shihab - Panca Hadi Putra',
    category: 'offices',
    description: 'Ruang Dosen bersama untuk Dr. Muhammad Rifki Shihab, B.B.A., M.Sc. dan Dr. Panca Hadi Putra terletak di Gedung A Lantai 2.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1211 - Muhammad Rifki Shihab - Panca Hadi Putra.jpg']
  },
  {
    id: 'gedung-a-1212-ari-saptawijaya-wakil-dekan',
    name: '1212 - Ari Saptawijaya - Wakil Dekan',
    category: 'administration',
    description: 'Ruang Wakil Dekan Ari Saptawijaya, S.Kom., M.Sc., Ph.D terletak di Gedung A Lantai 2.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1212 - Ari Saptawijaya - Wakil Dekan.jpg']
  },
  {
    id: 'gedung-a-1213-ruang-rapat-b',
    name: '1213 - Ruang Rapat B',
    category: 'meeting-rooms',
    description: 'Ruang Rapat B untuk meeting dan kepentingan akademik maupun administrasi.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1213 - Ruang Rapat B.jpg']
  },
  {
    id: 'gedung-a-1214-achmad-nizar-hidayanto-wakil-dekan',
    name: '1214 - Achmad Nizar Hidayanto - Wakil Dekan',
    category: 'administration',
    description: 'Ruang Wakil Dekan Prof. Dr. Achmad Nizar Hidayanto, S.Kom., M.Kom terletak di Gedung A Lantai 2.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1214 - Achmad Nizar Hidayanto - Wakil Dekan.jpg']
  },
  {
    id: 'gedung-a-1215-ruang-rapat-a',
    name: '1215 - Ruang Rapat A',
    category: 'meeting-rooms',
    description: 'Ruang Rapat B untuk meeting dan kepentingan akademik maupun administrasi.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1215 - Ruang Rapat A.jpg']
  },
  {
    id: 'gedung-a-1216-heru-suhartanto',
    name: '1216 - Heru Suhartanto',
    category: 'offices',
    description: 'Ruang Dosen Prof. Drs. Heru Suhartanto, M.Sc., Ph.D terletak di Gedung A Lantai 2.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1216 - Heru Suhartanto.jpg']
  },
  {
    id: 'gedung-a-1217-ruang-makan',
    name: '1217 - Ruang Makan',
    category: 'dining',
    description: 'Ruang 1217 untuk ruang makan di Gedung A.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1217 - Ruang Makan.jpg']
  },
  {
    id: 'gedung-a-1218-tjan-chan-basaruddin',
    name: '1218 - Tjan \'Chan\' Basaruddin',
    category: 'offices',
    description: 'Ruang Dosen Prof. Drs. Tjan \'Chan\' Basaruddin, M.Sc., Ph.D terletak di Gedung A Lantai 2.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1218 - Tjan \'Chan\' Basaruddin.jpg']
  },
  {
    id: 'gedung-a-1219-ruang-transit-dosen',
    name: '1219 - Ruang Transit Dosen',
    category: 'facilities',
    description: 'Ruang 1219 untuk ruang transit dosen.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1219 - Ruang Transit Dosen.jpg']
  },
  {
    id: 'gedung-a-1220-erdefi-rakun',
    name: '1220 - Erdefi Rakun',
    category: 'offices',
    description: 'Ruang Dosen Dr. Ir. Erdefi Rakun, M.Sc terletak di Gedung A Lantai 2.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1220 - Erdefi Rakun.jpg']
  },
  {
    id: 'gedung-a-1221-ruang-kelas',
    name: '1221 - Ruang Kelas',
    category: 'classrooms',
    description: 'Ruang 1221 untuk ruang kelas.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1221 - Ruang Kelas.jpg']
  },
  {
    id: 'gedung-a-1222-eko-k-budiardjo',
    name: '1222 - Eko K. Budiardjo',
    category: 'offices',
    description: 'Ruang Dosen Prof. Dr. Ir. Eko Kuswardono Budiardjo, M.Sc terletak di Gedung A Lantai 2.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1222 - Eko K. Budiardjo.jpg']
  },
  {
    id: 'gedung-a-1223-lab-s2',
    name: '1223 - Lab S2',
    category: 'labs',
    description: 'Ruang 1223 untuk laboratorium S2.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1223 - Lab S2.jpg']
  },
  {
    id: 'gedung-a-1224',
    name: '1224',
    category: 'offices',
    description: 'Ruang staf 1224 di Gedung A.',
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
    description: 'Laboratorium Doktoral (S3) di Gedung A Lantai 2.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1227 - Lab S3.jpg']
  },
  {
    id: 'gedung-a-1228-dana-indra-sensuse',
    name: '1228 - Dana Indra Sensuse',
    category: 'offices',
    description: 'Ruang Dosen Prof. Ir. Dana Indra Sensuse, M.LIS., Ph.D. terletak di Gedung A Lantai 2.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1228 - Dana Indra Sensuse.jpg']
  },
  {
    id: 'gedung-a-1229-lab-ta-kp',
    name: '1229 - Lab TA-KP',
    category: 'labs',
    description: 'Laboratorium untuk Tugas Akhir (TA) dan Kerja Praktek (KP).',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1229 - Lab TA-KP.jpg']
  },
  {
    id: 'gedung-a-1230-multiple-faculty-2',
    name: '1230 - Dina Chahyati - Ika Alfina - Siti Aminah',
    category: 'offices',
    description: 'Ruang Dosen bersama untuk Dr. Dina Chahyati, S.Kom., M.Kom., Dr. Ika Alfina, dan Dr. Siti Aminah, S.Kom., M.Kom. terletak di Gedung A Lantai 2.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1230 - Dina Chahyati - Ika Alfina - Siti Aminah.jpg']
  },
  {
    id: 'gedung-a-1231-intelligent-robots-systems',
    name: '1231 - Intelligent Robots and Systems',
    category: 'labs',
    description: 'Laboratorium untuk penelitian robot dan sistem.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1231 - Intelligent Robots and Systems.jpg']
  },
  {
    id: 'gedung-a-1232-multiple-faculty-3',
    name: '1232 - Yova Ruldeviyani - Evi Yulianti - Laksmita Rahadianti',
    category: 'offices',
    description: 'Ruang Dosen bersama untuk Yova Ruldeviyani, S.Kom., M.Kom., Evi Yulianti, S.Kom., M.Kom., Ph.D., dan Dr.Eng. Laksmita Rahadianti, S.Kom., M.Sc. terletak di Gedung A Lantai 2.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1232 - Yova Ruldeviyani - Evi Yulianti - Laksmita Rahadianti.jpg']
  },
  {
    id: 'gedung-a-1234-yugo-kartono-isal',
    name: '1234 - Yugo Kartono Isal',
    category: 'offices',
    description: 'Ruang Dosen Dr. Drs. R. Yugo Kartono Isal, M.Sc. terletak di Gedung A Lantai 2.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1234 - Yugo Kartono Isal.jpg']
  },  {
    id: 'gedung-a-1236',
    name: '1236',
    category: 'offices',
    description: 'Ruang Staf 1236 di Gedung A Lantai 2.',
    building: 'gedung-a',
    floor: 'Gedung A - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung A/Lantai 2/1236.jpg']
  },

  // Gedung B - Locations
  // Lantai 1 utama
  {
    id: 'gedung-b-2101-2102-auditorium',
    name: '2101-2102 - Auditorium',
    category: 'lecture-halls',
    description: 'Auditorium untuk kuliah, seminar, dan acara besar terletak di Gedung B Lantai 1.',
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
    description: 'Ruang panel listrik 2A22 untuk infrastruktur gedung.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 1 utama',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 1 utama/2A22 - Ruang Panel.jpg']
  },
  {
    id: 'gedung-b-2a23-ruang-panel',
    name: '2A23 - Ruang Panel',
    category: 'facilities',
    description: 'Ruang panel listrik 2A23 untuk infrastruktur gedung.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 1 utama',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 1 utama/2A23 - Ruang Panel.jpg']
  },
  {
    id: 'gedung-b-perpustakaan',
    name: 'Perpustakaan',
    category: 'study-spaces',
    description: 'Perpustakaan Fasilkom di Gedung B Lantai 1 memberi fasilitas ruang baca, mezzanine, dan koleksi buku untuk mahasiswa dan staf.',
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
    description: 'Ruang baca yang menyediakan tempat belajar yang tenang.',
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
    description: 'Kantor staf perpustakaan untuk administrasi dan bantuan.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 1 utama',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 1 utama/Staf Perpustakaan.jpg']
  },
  {
    id: 'gedung-b-elevator-lantai-1-utama',
    name: 'Elevator',
    category: 'elevator',
    description: 'Lift / Elevator untuk akses nyaman menuju lantai lain di Gedung B.',
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
    description: 'Tangga darurat untuk evakuasi dari Gedung B.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 1 utama',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 1 utama/Lantai 1 - Emergency Exit.jpg']
  },
  {
    id: 'gedung-b-entrance-lantai-1-utama',
    name: 'Entrance',
    category: 'facilities',
    description: 'Pintu masuk utama ke Gedung B - Lantai 1.',
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
    description: 'Fasilitas toilet khusus untuk staf.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 1 utama',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 1 utama/Toilet Khusus Staf.jpg']
  },  {
    id: 'gedung-b-toilet-staf-lantai-1-utama',
    name: 'Toilet Staf',
    category: 'toilet',
    description: 'Fasilitas toilet khusus untuk staf.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 1 utama',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 1 utama/Toilet Staf.jpg']
  },

  // Gedung B - Lantai 1 atas (Mezzanine)
  {
    id: 'gedung-b-2117-2b04-quiet-room',
    name: '2117-2B04 - Quiet Room',
    category: 'study-spaces',
    description: 'Ruang baca tenang 2117-2B04 di lantai mezzanine untuk belajar.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 1 atas',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 1 atas/2117-2B04 - Quiet Room.jpg']
  },
  {
    id: 'gedung-b-2118-2b03-quiet-room',
    name: '2118-2B03 - Quiet Room',
    category: 'study-spaces',
    description: 'Ruang baca tenang 2118-2B03 di lantai mezzanine untuk belajar.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 1 atas',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 1 atas/2118-2B03 - Quiet Room.jpg']
  },
  {
    id: 'gedung-b-mezzanine',
    name: 'Perpustakaan (Lantai Mezzanine)',
    category: 'study-spaces',
    description: 'Lantai Mezzanine Perpustakaan Fasilkom menyediakan ruang baca tambahan dan quiet room.',
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
    description: 'Ruang ibadah, sholat, dan doa untuk mahasiswa dan staf wanita di Gedung B.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 2/2209 - Musholla Wanita.jpg']
  },
  {
    id: 'gedung-b-2210-wudhu-wanita',
    name: '2210 - Wudhu Wanita',
    category: 'religious',
    description: 'Area wudhu untuk mahasiswa dan staf wanita sebelum sholat.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 2/2210 - Wudhu Wanita.jpg']
  },
  {
    id: 'gedung-b-2211-musholla-pria',
    name: '2211 - Musholla Pria',
    category: 'religious',
    description: 'Ruang ibadah, sholat, dan doa untuk mahasiswa dan staf pria di Gedung B.',
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
    description: 'Outsource kebersihan untuk menjaga kebersihan di Gedung B.',
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
    description: 'Ruang RISTEK untuk kegiatan teknologi dan riset mahasiswa.',
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
    description: 'Ruang BEM (Badan Eksekutif Mahasiswa) untuk kegiatan pemerintahan mahasiswa.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 2/2216 - Ruang BEM.jpg']
  },
  {
    id: 'gedung-b-2217-ruang-panel',
    name: '2217 - Ruang Panel',
    category: 'facilities',
    description: 'Ruang panel listrik 2217 untuk infrastruktur gedung.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 2/2217 - Ruang Panel.jpg']
  },
  {
    id: 'gedung-b-elevator-lantai-2',
    name: 'Elevator',
    category: 'elevator',
    description: 'Lift / elevator untuk akses nyaman menuju lantai lain di Gedung B.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 2/Elevator.jpg']
  },
  {
    id: 'gedung-b-emergency-exit-lantai-2',
    name: 'Emergency Exit',
    category: 'facilities',
    description: 'Tangga darurat untuk evakuasi aman dari lantai dua Gedung B.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 2/Emergency Exit.jpg']
  },
  {
    id: 'gedung-b-loket-kemahasiswaan-riset',
    name: 'Loket Kemahasiswaan dan Riset',
    category: 'administration',
    description: 'Loket untuk layanan kemahasiswaan dan riset.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 2/Loket Kemahasiswaan dan Riset.jpg']
  },
  {
    id: 'gedung-b-loket-sekre',
    name: 'Loket Sekre',
    category: 'administration',
    description: 'Loket Sekretaris untuk bantuan administrasi umum.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 2/Loket Sekre.jpg']
  },
  {
    id: 'gedung-b-sekre-square',
    name: 'Sekre Square',
    category: 'common-areas',
    description: 'Area berkumpul untuk mahasiswa dan staf di sekitar loket sekretaris.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 2/Sekre Square.jpg']
  },
  {
    id: 'gedung-b-sekre',
    name: 'Sekre',
    category: 'administration',
    description: 'Ruang Sekretaris untuk layanan administrasi umum dan dukungan mahasiswa.',
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
    description: 'Area selasar di lantai 2 Gedung B yang menyediakan tempat untuk berkumpul dan bersantai.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 2/Selasar.jpg']
  },  {
    id: 'gedung-b-toilet-pria-lantai-2',
    name: 'Toilet Pria',
    category: 'toilet',
    description: 'Fasilitas toilet pria di lantai dua Gedung B.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 2/Toilet Pria.jpg']
  },  {
    id: 'gedung-b-toilet-wanita-lantai-2',
    name: 'Toilet Wanita',
    category: 'toilet',
    description: 'Fasilitas toilet wanita di lantai dua Gedung B.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 2/Toilet Wanita.jpg']
  },

  // Gedung B - Lantai 3
  {
    id: 'gedung-b-2301-ruang-kuliah',
    name: '2301 - Ruang Kuliah',
    category: 'classrooms',
    description: 'Ruang kuliah 2301 untuk kegiatan belajar mengajar.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 3/2301 - Ruang Kuliah.jpg']
  },
  {
    id: 'gedung-b-2302-ruang-kuliah',
    name: '2302 - Ruang Kuliah',
    category: 'classrooms',
    description: 'Ruang kuliah 2302 untuk kegiatan belajar mengajar.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 3/2302 - Ruang Kuliah.jpg']
  },
  {
    id: 'gedung-b-2303-ruang-kuliah',
    name: '2303 - Ruang Kuliah',
    category: 'classrooms',
    description: 'Ruang kuliah 2303 untuk kegiatan belajar mengajar.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 3/2303 - Ruang Kuliah.jpg']
  },
  {
    id: 'gedung-b-2304-ruang-kuliah',
    name: '2304 - Ruang Kuliah',
    category: 'classrooms',
    description: 'Ruang kuliah 2304 untuk kegiatan belajar mengajar.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 3/2304 - Ruang Kuliah.jpg']
  },
  {
    id: 'gedung-b-2305-ruang-kuliah',
    name: '2305 - Ruang Kuliah',
    category: 'classrooms',
    description: 'Ruang kuliah 2305 untuk kegiatan belajar mengajar.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 3/2305 - Ruang Kuliah.jpg']
  },
  {
    id: 'gedung-b-2306-ruang-kuliah',
    name: '2306 - Ruang Kuliah',
    category: 'classrooms',
    description: 'Ruang kuliah 2306 untuk kegiatan belajar mengajar.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 3/2306 - Ruang Kuliah.jpg']
  },
  {
    id: 'gedung-b-2307-ruang-kuliah',
    name: '2307 - Ruang Kuliah',
    category: 'classrooms',
    description: 'Ruang kuliah 2307 untuk kegiatan belajar mengajar.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 3/2307 - Ruang Kuliah.jpg']
  },
  {
    id: 'gedung-b-2308-ruang-panel',
    name: '2308 - Ruang Panel',
    category: 'facilities',
    description: 'Ruang panel listrik 2308 untuk infrastruktur Gedung B.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 3/2308 - Ruang Panel.jpg']
  },
  {
    id: 'gedung-b-elevator-lantai-3',
    name: 'Elevator',
    category: 'elevator',
    description: 'Lift / elevator untuk akses nyaman ke lantai lain di Gedung B.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 3/Elevator.jpg']
  },  {
    id: 'gedung-b-emergency-exit-lantai-3',
    name: 'Emergency Exit',
    category: 'facilities',
    description: 'Tangga darurat untuk evakuasi aman dari lantai tiga Gedung B.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 3/Emergency Exit.jpg']
  },

  // Gedung B - Lantai 4
  {
    id: 'gedung-b-2401-ruang-kuliah',
    name: '2401 - Ruang Kuliah',
    category: 'classrooms',
    description: 'Ruang kuliah 2401 untuk kegiatan belajar mengajar.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 4',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 4/2401 - Ruang Kuliah.jpg']
  },
  {
    id: 'gedung-b-2402-ruang-kuliah',
    name: '2402 - Ruang Kuliah',
    category: 'classrooms',
    description: 'Ruang kuliah 2402 untuk kegiatan belajar mengajar.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 4',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 4/2402 - Ruang Kuliah.jpg']
  },
  {
    id: 'gedung-b-2403-ruang-kuliah',
    name: '2403 - Ruang Kuliah',
    category: 'classrooms',
    description: 'Ruang kuliah 2403 untuk kegiatan belajar mengajar.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 4',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 4/2403 - Ruang Kuliah.jpg']
  },
  {
    id: 'gedung-b-2404-ruang-kuliah',
    name: '2404 - Ruang Kuliah',
    category: 'classrooms',
    description: 'Ruang kuliah 2404 untuk kegiatan belajar mengajar.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 4',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 4/2404 - Ruang Kuliah.jpg']
  },
  {
    id: 'gedung-b-2405-ruang-kuliah',
    name: '2405 - Ruang Kuliah',
    category: 'classrooms',
    description: 'Ruang kuliah 2405 untuk kegiatan belajar mengajar.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 4',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 4/2405 - Ruang Kuliah.jpg']
  },
  {
    id: 'gedung-b-2406-ruang-kuliah',
    name: '2406 - Ruang Kuliah',
    category: 'classrooms',
    description: 'Ruang kuliah 2406 untuk kegiatan belajar mengajar.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 4',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 4/2406 - Ruang Kuliah.jpg']
  },
  {
    id: 'gedung-b-2407-2400-ruang-panel',
    name: '2407-2400 - Ruang Panel',
    category: 'facilities',
    description: 'Ruang panel listrik 2407-2400 untuk infrastruktur Gedung B.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 4',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 4/2407-2400 - Ruang Panel.jpg']
  },
  {
    id: 'gedung-b-elevator-lantai-4',
    name: 'Elevator',
    category: 'elevator',
    description: 'Lift / elevator untuk akses nyaman ke lantai lain di Gedung B.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 4',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 4/Elevator.jpg']
  },
  {
    id: 'gedung-b-emergency-exit-lantai-4',
    name: 'Emergency Exit',
    category: 'facilities',
    description: 'Tangga darurat untuk evakuasi aman dari lantai empat Gedung B.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 4',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 4/Emergency Exit.jpg']
  },
  {
    id: 'gedung-b-toilet-pria-lantai-4',
    name: 'Toilet Pria',
    category: 'toilet',
    description: 'Toilet pria di lantai empat Gedung B.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 4',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 4/Toilet Pria.jpg']
  },
  {
    id: 'gedung-b-toilet-wanita-lantai-4',
    name: 'Toilet Wanita',
    category: 'toilet',
    description: 'Toilet wanita di lantai empat Gedung B.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 4',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 4/Toilet Wanita.jpg']
  },

  // Gedung B - Lantai 5
  {
    id: 'gedung-b-2500-ruang-panel',
    name: '2500 - Ruang Panel',
    category: 'facilities',
    description: 'Ruang panel listrik 2500 untuk infrastruktur Gedung B.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 5',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 5/2500 - Ruang Panel.jpg']
  },
  {
    id: 'gedung-b-2501-ruang-teknisi',
    name: '2501 - Ruang Teknisi',
    category: 'facilities',
    description: 'Ruang teknisi untuk pemeliharaan gedung dan dukungan teknis.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 5',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 5/2501 - Ruang Teknisi.jpg']
  },
  {
    id: 'gedung-b-2502-ruang-kuliah',
    name: '2502 - Ruang Kuliah',
    category: 'classrooms',
    description: 'Ruang kuliah 2502 untuk kegiatan belajar mengajar.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 5',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 5/2502 - Ruang Kuliah.jpg']
  },
  {
    id: 'gedung-b-2503-lab-jaringan-komputer',
    name: '2503 - Lab Jaringan Komputer',
    category: 'labs',
    description: 'Laboratorium jaringan komputer 2503 di Gedung B - Lantai 5.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 5',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 5/2503 - Lab Jaringan Komputer.jpg']
  },
  {
    id: 'gedung-b-2504-ruang-it-sti',
    name: '2504 - Ruang IT - STI',
    category: 'offices',
    description: 'Ruang kantor departemen IT dan STI (Sistem dan Teknologi Informasi).',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 5',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 5/2504 - Ruang IT - STI.jpg']
  },
  {
    id: 'gedung-b-balkon-lantai-5',
    name: 'Balkon',
    category: 'common-areas',
    description: 'Area balkon di lantai lima Gedung B yang menyediakan ruang terbuka dan pemandangan.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 5',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 5/Balkon.jpg']
  },
  {
    id: 'gedung-b-elevator-lantai-5',
    name: 'Elevator',
    category: 'elevator',
    description: 'Lift / elevator untuk akses nyaman ke lantai lain di Gedung B.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 5',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 5/Elevator.jpg']
  },
  {
    id: 'gedung-b-emergency-exit-lantai-5',
    name: 'Emergency Exit',
    category: 'facilities',
    description: 'Tangga darurat untuk evakuasi aman dari lantai lima Gedung B.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 5',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 5/Emergency Exit.jpg']
  },
  {
    id: 'gedung-b-selasar-lantai-5',
    name: 'Selasar',
    category: 'common-areas',
    description: 'Area selasar di lantai lima Gedung B yang menyediakan ruang berkumpul dan bersantai.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 5',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 5/Selasar.jpg']
  },
  {
    id: 'gedung-b-toilet-pria-lantai-5',
    name: 'Toilet Pria',
    category: 'toilet',
    description: 'Toilet pria di lantai lima Gedung B.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 5',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 5/Toilet Pria.jpg']
  },
  {
    id: 'gedung-b-toilet-wanita-lantai-5',
    name: 'Toilet Wanita',
    category: 'toilet',
    description: 'Toilet wanita di lantai lima Gedung B.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 5',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 5/Toilet Wanita.jpg']
  },

  // Gedung B - Lantai 6
  {
    id: 'gedung-b-2601-ruang-kuliah',
    name: '2601 - Ruang Kuliah',
    category: 'classrooms',
    description: 'Ruang kuliah 2601 untuk kegiatan belajar mengajar.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 6',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 6/2601 - Ruang Kuliah.jpg']
  },
  {
    id: 'gedung-b-2602-ruang-kuliah',
    name: '2602 - Ruang Kuliah',
    category: 'classrooms',
    description: 'Ruang kuliah 2602 untuk kegiatan belajar mengajar.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 6',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 6/2602 - Ruang Kuliah.jpg']
  },
  {
    id: 'gedung-b-2603-ruang-kuliah',
    name: '2603 - Ruang Kuliah',
    category: 'classrooms',
    description: 'Ruang kuliah 2603 untuk kegiatan belajar mengajar.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 6',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 6/2603 - Ruang Kuliah.jpg']
  },
  {
    id: 'gedung-b-2604-ruang-kuliah',
    name: '2604 - Ruang Kuliah',
    category: 'classrooms',
    description: 'Ruang kuliah 2604 untuk kegiatan belajar mengajar.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 6',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 6/2604 - Ruang Kuliah.jpg']
  },
  {
    id: 'gedung-b-elevator-lantai-6',
    name: 'Elevator',
    category: 'elevator',
    description: 'Lift / elevator untuk akses nyaman ke lantai lain di Gedung B.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 6',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 6/Lantai 6 - Elevator.jpg']
  },
  {
    id: 'gedung-b-emergency-exit-lantai-6',
    name: 'Emergency Exit',
    category: 'facilities',
    description: 'Tangga darurat untuk evakuasi aman dari lantai enam Gedung B.',
    building: 'gedung-b',
    floor: 'Gedung B - Lantai 6',
    images: ['/locations/Gedung Lama/Gedung B/Lantai 6/Lantai 6 - Emergency Exit.jpg']
  },

  // Gedung C - Locations
  // Lantai 1
  {
    id: 'gedung-c-3115-gudang',
    name: '3115 - Gudang',
    category: 'facilities',
    description: 'Gudang 3115 (tertulis 3103) untuk penyimpanan di Gedung C.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 1/3103.jpg']
  },
  {
    id: 'gedung-c-3111-ruang-kuliah',
    name: '3111 - Ruang Kuliah',
    category: 'classrooms',
    description: 'Ruang kuliah 3111 untuk kegiatan belajar mengajar.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 1/3111 - Ruang Kuliah.jpg']
  },
  {
    id: 'gedung-c-3112-ruang-kuliah',
    name: '3112 - Ruang Kuliah',
    category: 'classrooms',
    description: 'Ruang kuliah 3112 untuk kegiatan belajar mengajar.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 1/3112 - Ruang Kuliah.jpg']
  },
  {
    id: 'gedung-c-3113-ruang-makan-staf',
    name: '3113 - Ruang Makan Staf',
    category: 'dining',
    description: 'Ruang makan staf untuk kegiatan makan dan istirahat staf.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 1/3113 - Ruang Makan Staf.jpg']
  },
  {
    id: 'gedung-c-3114-ruang-kuliah',
    name: '3114 - Ruang Kuliah',
    category: 'classrooms',
    description: 'Ruang kuliah 3114 untuk kegiatan belajar mengajar.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 1/3114 - Ruang Kuliah.jpg']
  },
  {
    id: 'gedung-c-kantin',
    name: 'Kantin',
    category: 'dining',
    description: 'Kantin utama kampus yang menawarkan makanan dan minuman untuk mahasiswa dan staf.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 1/Kantin.jpg']
  },
  {
    id: 'gedung-c-ppsi-ruang-staf-dsti',
    name: 'PPSi - Ruang Staf - DSTI',
    category: 'offices',
    description: 'PPSI (Pusat Pelayanan Sistem Informasi) staff office untuk pelayanan DSTI (Direktorat Sistem dan Teknologi Informasi).',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 1/PPSi - Ruang Staf - DSTI.jpg']
  },
  {
    id: 'gedung-c-selasar-lantai-1',
    name: 'Selasar',
    category: 'common-areas',
    description: 'Area selasar di lantai satu Gedung C yang menyediakan ruang untuk beristirahat dan berkumpul.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 1/Selasar.jpg']
  },
  {
    id: 'gedung-c-toilet-pria-lantai-1',
    name: 'Toilet Pria',
    category: 'toilet',
    description: 'Fasilitas toilet pria di lantai satu Gedung C.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 1/Toilet Pria.jpg']
  },
  {
    id: 'gedung-c-toilet-wanita-lantai-1',
    name: 'Toilet Wanita',
    category: 'toilet',
    description: 'Fasilitas toilet wanita di lantai satu Gedung C.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 1/Toilet Wanita.jpg']
  },  {
    id: 'gedung-c-yoshinoya',
    name: 'Yoshinoya',
    category: 'dining',
    description: 'Restoran Yoshinoya yang menawarkan makanan Jepang di kampus.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 1',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 1/Yoshinoya.jpg']
  },

  // Gedung C - Lantai 2
  {
    id: 'gedung-c-3200',
    name: '3200',
    category: 'offices',
    description: 'Ruang staf 3200 di Gedung C.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/3200.jpg']
  },
  {
    id: 'gedung-c-3200a',
    name: '3200A',
    category: 'offices',
    description: 'Ruang staf 3200A di Gedung C.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/3200A.jpg']
  },
  {
    id: 'gedung-c-3201',
    name: '3201',
    category: 'offices',
    description: 'Ruang staf 3201 di Gedung C.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/3201.jpg']
  },
  {
    id: 'gedung-c-3202-government-business-lab',
    name: '3202 - Government and Business Lab',
    category: 'labs',
    description: 'Laboratorium Pemerintahan dan Bisnis (Government and Business Lab) di Gedung C - Lantai 2.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/3202 - Government and Business Lab.jpg']
  },
  {
    id: 'gedung-c-3203',
    name: '3203',
    category: 'offices',
    description: 'Ruang staf 3203 di Gedung C.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/3203.jpg']
  },
  {
    id: 'gedung-c-3204-rse-lab',
    name: '3204 - RSE-Reliable Software Engineering Lab',
    category: 'labs',
    description: 'Laboratorium Reliable Software Engineering (RSE) terletak di Gedung C - Lantai 2.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/3204 - RSE-Reliable Software Engineering Lab.jpg']
  },
  {
    id: 'gedung-c-3205-bob-hardian',
    name: '3205 - Bob Hardian',
    category: 'offices',
    description: 'Ruang Dosen Ir. Bob Hardian Syahbuddin, M.Kom., Ph.D terletak di Gedung C - Lantai 2.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/3205 - Bob Hardian.jpg']
  },
  {
    id: 'gedung-c-3206-pusilkom-ui',
    name: '3206 - Pusilkom Universitas Indonesia',
    category: 'administration',
    description: 'Pusilkom (Pusat Ilmu Komputer) Universitas Indonesia terletak di Gedung C - Lantai 2.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/3206 - Pusilkom Universitas Indonesia.jpg']
  },
  {
    id: 'gedung-c-3207',
    name: '3207',
    category: 'offices',
    description: 'Ruang staf 3207 di Gedung C.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/3207.jpg']
  },
  {
    id: 'gedung-c-3209',
    name: '3209',
    category: 'offices',
    description: 'Ruang staf 3209 di Gedung C.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/3209.jpg']
  },
  {
    id: 'gedung-c-3210-pusilkom-ui',
    name: '3210 - Pusilkom Universitas Indonesia',
    category: 'administration',
    description: 'Pusilkom (Pusat Ilmu Komputer) Universitas Indonesia terletak di Gedung C - Lantai 2.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/3210 - Pusilkom Universitas Indonesia.jpg']
  },
  {
    id: 'gedung-c-3210a',
    name: '3210A',
    category: 'offices',
    description: 'Ruang staf 3210A di Gedung C.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/3210A.jpg']
  },
  {
    id: 'gedung-c-3211-direktur-wakil-direktur-pusilkom',
    name: '3211 - Direktur dan Wakil Direktur Pusat Ilmu Komputer Universitas Indonesia',
    category: 'administration',
    description: 'Ruang Direktur dan Wakil Direktur Pusat Ilmu Komputer (Center for Computer Science) Universitas Indonesia.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/3211 - Direktur dan Wakil Direktur Pusat Ilmu Komputer Universitas Indonesia.jpg']
  },
  {
    id: 'gedung-c-3212a',
    name: '3212A',
    category: 'offices',
    description: 'Ruang staf 3212A di Gedung C.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/3212A.jpg']
  },
  {
    id: 'gedung-c-3212b',
    name: '3212B',
    category: 'offices',
    description: 'Ruang staf 3212B di Gedung C.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/3212B.jpg']
  },
  {
    id: 'gedung-c-3213-multiple-faculty',
    name: '3213 - Annisa Monicha - Nilamsari Putri Utami - Pudy Prima',
    category: 'offices',
    description: 'Ruang staf pengajar tidak tetap bersama Annisa Monicha Sari, S.Kom., M.Kom., Nilamsari Putri Utami, S.Kom., M.Sc., dan Pudy Prima, M.Kom..',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/3213 - Annisa Monicha - Nilamsari Putri Utami - Pudy Prima.jpg']
  },
  {
    id: 'gedung-c-3214-ml-cv-lab',
    name: '3214 - Machine Learning and Computer Vision Lab',
    category: 'labs',
    description: 'Laboratorium Machine Learning dan Computer Vision untuk penelitian kecerdasan buatan dan pengolahan citra.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/3214 - Machine Learning and Computer Vision Lab.jpg']
  },
  {
    id: 'gedung-c-3215',
    name: '3215',
    category: 'offices',
    description: 'Ruang staf 3215 di Gedung C.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/3215.jpg']
  },
  {
    id: 'gedung-c-3217-indra-budi',
    name: '3217 - Indra Budi',
    category: 'offices',
    description: 'Ruang Dosen Prof. Dr. Indra Budi, S.Kom., M.Kom. terletak di Gedung C - Lantai 2.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/3217 - Indra Budi.jpg']
  },
  {
    id: 'gedung-c-3218-information-retrieval-lab',
    name: '3218 - Information Retrieval Lab',
    category: 'labs',
    description: 'Laboratorium Information Retrieval yang terletak di Gedung C - Lantai 2.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/3218 - Information Retrieval Lab.jpg']
  },
  {
    id: 'gedung-c-3219',
    name: '3219',
    category: 'offices',
    description: 'Ruang staf 3219 di Gedung C.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/3219.jpg']
  },
  {
    id: 'gedung-c-3220',
    name: '3220',
    category: 'offices',
    description: 'Ruang staf 3220 di Gedung C.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/3220.jpg']
  },
  {
    id: 'gedung-c-3221-multiple-faculty',
    name: '3221 - Alfan Farizki Wicaksono - Ichlashul Affan - Ammar Fathin Sabili',
    category: 'offices',
    description: 'Ruang Dosen dan Staf bersama Alfan Farizki Wicaksono, S.T., M.Sc., Ph.D., Ichlasul Affan, S.Kom., M.Kom., dan Ammar Fathin Sabili, Ph.D.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/3221 - Alfan Farizki Wicaksono - Ichlashul Affan - Ammar Fathin Sabili.jpg']
  },
  {
    id: 'gedung-c-3223-adila-alfa-krisnadhi',
    name: '3223 - Adila Alfa Krisnadhi',
    category: 'offices',
    description: 'Ruang Dosen Adila Alfa Krisnadhi, S.Kom., M.Sc., Ph.D. terletak di Gedung C - Lantai 2.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/3223 - Adila Alfa Krisnadhi.jpg']
  },
  {
    id: 'gedung-c-toilet-pria-lantai-2',
    name: 'Toilet Pria',
    category: 'toilet',
    description: 'Fasilitas toilet pria di lantai dua Gedung C.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/Toilet Pria.jpg']
  },  {
    id: 'gedung-c-toilet-wanita-lantai-2',
    name: 'Toilet Wanita',
    category: 'toilet',
    description: 'Fasilitas toilet wanita di lantai dua Gedung C.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 2',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 2/Toilet Wanita.jpg']
  },

  // Gedung C - Lantai 3
  {
    id: 'gedung-c-3301',
    name: '3301',
    category: 'offices',
    description: 'Ruang staf 3301 di Gedung C.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 3/3301.jpg']
  },
  {
    id: 'gedung-c-3302-setiadi-yazid-suryana-setiawan',
    name: '3302 - Setiadi Yazid - Suryana Setiawan',
    category: 'offices',
    description: 'Ruang Dosen bersama Ir. Setiadi Yazid, M.Sc., Ph.D. dan Ir. Suryana Setiawan, M.Sc., Ph.D. terletak di Gedung C - Lantai 3.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 3/3302 - Setiadi Yazid - Suryana Setiawan.jpg']
  },
  {
    id: 'gedung-c-3303',
    name: '3303',
    category: 'offices',
    description: 'Ruang staf 3303 di Gedung C.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 3/3303.jpg']
  },
  {
    id: 'gedung-c-3305-enterprise-computing-lab',
    name: '3305 - Enterprise Computing Lab',
    category: 'labs',
    description: 'Laboratorium Enterprise Computing yang terletak di Gedung C - Lantai 3.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 3/3305 - Enterprise Computing Lab.jpg']
  },
  {
    id: 'gedung-c-3307',
    name: '3307',
    category: 'offices',
    description: 'Ruang staf 3307 di Gedung C.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 3/3307.jpg']
  },
  {
    id: 'gedung-c-3308',
    name: '3308',
    category: 'offices',
    description: 'Ruang staf 3308 di Gedung C.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 3/3308.jpg']
  },
  {
    id: 'gedung-c-3310-multiple-faculty',
    name: '3310 - Arlisa Yuliawati - Ika Chandra Hapsari - Maya Retno Ayu S',
    category: 'offices',
    description: 'Ruang Dosen dan Staf bersama Arlisa Yuliawati, M.Kom, Ika Chandra Hapsari, M.Kom, dan Dr. Maya Retno Ayu Setyautami, M.Kom. terletak di Gedung C - Lantai 3.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 3/3310 - Arlisa Yuliawati - Ika Chandra Hapsari - Maya Retno Ayu S.jpg']
  },
  {
    id: 'gedung-c-3312-multiple-faculty',
    name: '3312 - Khumaisa Nuraini - Pudy Prima - Mei Silviana Saputri - Annisa Monicha Sari',
    category: 'offices',
    description: 'Ruang Staf bersama Khumaisa Nuraini, Pudy Prima, M.Kom., Mei Silviana Saputri, M.Kom., dan Annisa Monicha Sari, M.Kom. terletak di Gedung C - Lantai 3.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 3/3312 - Khumaisa Nuraini - Pudy Prima - Mei Silviana Saputri - Annisa Monicha Sari.jpg']
  },
  {
    id: 'gedung-c-3316-3103-meeting-room-digital-library',
    name: '3316-3103 - Meeting Room Digital Library and Distance Learning Lab - 3103',
    category: 'meeting-rooms',
    description: 'Ruang rapat / meeting Laboratorium Digital Library dan Distance Learning terletak di Gedung C - Lantai 3.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 3/3316-3103 - Meeting Room Digital Library and Distance Learning Lab - 3103.jpg']
  },
  {
    id: 'gedung-c-3317',
    name: '3317',
    category: 'offices',
    description: 'Ruang staf 3317 di Gedung C.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 3/3317.jpg']
  },
  {
    id: 'gedung-c-3318-muhammad-mishbah-raja-oktovin',
    name: '3318 - Muhammad Mishbah - Raja Oktovin Parhasian Damanik',
    category: 'offices',
    description: 'Ruang Staf bersama Muhammad Mishbah, M.Kom., dan Raja Oktovin Parhasian Damanik, M.Sc. terletak di Gedung C - Lantai 3.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 3/3318 - Muhammad Mishbah - Raja Oktovin Parhasian Damanik.jpg']
  },
  {
    id: 'gedung-c-3326-wahyu-catur-wibowo',
    name: '3326 - Wahyu Catur Wibowo',
    category: 'offices',
    description: 'Ruang Dosen Ir. Wahyu Catur Wibowo, M.Sc., Ph.D. terletak di Gedung C - Lantai 3.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 3/3326 - Wahyu Catur Wibowo.jpg']
  },
  {
    id: 'gedung-c-musholla-lantai-3',
    name: 'Musholla',
    category: 'religious',
    description: 'Ruang Musholla untuk kegiatan ibadah, sholat, dan doa di lantai tiga Gedung C.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 3/Musholla.jpg']
  },
  {
    id: 'gedung-c-selasar-lantai-3',
    name: 'Selasar',
    category: 'common-areas',
    description: 'Area selasar di lantai tiga Gedung C untuk berkumpul dan bersantai.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 3/Selasar.jpg']
  },
  {
    id: 'gedung-c-toilet-pria-lantai-3',
    name: 'Toilet Pria',
    category: 'toilet',
    description: 'Fasilitas toilet pria di lantai tiga Gedung C.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 3/Toilet Pria.jpg']
  },  {
    id: 'gedung-c-toilet-wanita-lantai-3',
    name: 'Toilet Wanita',
    category: 'toilet',
    description: 'Fasilitas toilet wanita di lantai tiga Gedung C.',
    building: 'gedung-c',
    floor: 'Gedung C - Lantai 3',
    images: ['/locations/Gedung Lama/Gedung C/Lantai 3/Toilet Wanita.jpg']
  },

  // Gedung Baru - Locations
  // Lantai Dasar
  {
    id: 'gedung-baru-ad01-ruang-arsip',
    name: 'AD01 - Ruang Arsip',
    category: 'administration',
    description: 'Ruang Arsip untuk penyimpanan dokumen dan arsip penting.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai Dasar',
    images: ['/locations/Gedung Baru/Lantai Dasar/AD01 - Ruang Arsip.jpg']
  },
  {
    id: 'gedung-baru-ad02-ruang-staf-keuangan',
    name: 'AD02 - Ruang Staf Keuangan',
    category: 'administration',
    description: 'Ruang Staf Keuangan untuk administrasi keuangan.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai Dasar',
    images: ['/locations/Gedung Baru/Lantai Dasar/AD02 - Ruang Staf Keuangan.jpg']
  },
  {
    id: 'gedung-baru-ad02a-ruang-uks',
    name: 'AD02A - Ruang UKS',
    category: 'facilities',
    description: 'Ruang UKS (Unit Kesehatan Sekolah) menyediakan layanan kesehatan dasar.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai Dasar',
    images: ['/locations/Gedung Baru/Lantai Dasar/AD02A - Ruang UKS.jpg']
  },
  {
    id: 'gedung-baru-ad03-ruang-sekretariat-akademik',
    name: 'AD03 - Ruang Sekretariat Akademik',
    category: 'administration',
    description: 'Ruang Sekretariat Akademik untuk administrasi dan layanan akademis.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai Dasar',
    images: ['/locations/Gedung Baru/Lantai Dasar/AD03 - Ruang Sekretariat Akademik.jpg']
  },
  {
    id: 'gedung-baru-ad04-ruang-pengelolaan-pemeliharaan-fasilkom',
    name: 'AD04 - Ruang Pengelolaan dan Pemeliharaan Fasilkom',
    category: 'facilities',
    description: 'Ruang Pengelolaan dan Pemeliharaan Fasilkom untuk infrastruktur gedung.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai Dasar',
    images: ['/locations/Gedung Baru/Lantai Dasar/AD04 - Ruang Pengelolaan dan Pemeliharaan Fasilkom.jpg']
  },
  {
    id: 'gedung-baru-ad05-ruang-it',
    name: 'AD05 - Ruang IT',
    category: 'facilities',
    description: 'Ruang IT untuk layanan teknis.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai Dasar',
    images: ['/locations/Gedung Baru/Lantai Dasar/AD05 - Ruang IT.jpg']
  },
  {
    id: 'gedung-baru-ad10-ruang-panel',
    name: 'AD10 - Ruang Panel',
    category: 'facilities',
    description: 'Ruang panel listrik untuk infrastruktur Lantai Dasar Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai Dasar',
    images: ['/locations/Gedung Baru/Lantai Dasar/AD10 - Ruang Panel.jpg']
  },  {
    id: 'gedung-baru-ad12-ruang-dapur',
    name: 'AD12 - Ruang Dapur',
    category: 'dining',
    description: 'Fasilitas dapur terletak di Gedung Baru - Lantai Dasar.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai Dasar',
    images: ['/locations/Gedung Baru/Lantai Dasar/AD12 - Ruang Dapur.jpg']
  },
  {
    id: 'gedung-baru-kantin',
    name: 'Kantin',
    category: 'dining',
    description: 'Kantin Gedung Baru yang menawarkan makanan dan minuman untuk pengujung, mahasiswa, dan staf.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai Dasar',
    images: ['/locations/Gedung Baru/Lantai Dasar/Kantin.png']
  },
  {
    id: 'gedung-baru-ad14-ruang-kebersihan',
    name: 'AD14 - Ruang Kebersihan',
    category: 'facilities',
    description: 'Ruang penyimpanan perlengkapan kebersihan dan janitorial.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai Dasar',
    images: ['/locations/Gedung Baru/Lantai Dasar/AD14 - Ruang Kebersihan.jpg']
  },
  {
    id: 'gedung-baru-ad15-toilet-pria',
    name: 'AD15 - Toilet Pria',
    category: 'toilet',
    description: 'Fasilitas toilet pria di Lantai Dasar Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai Dasar',
    images: ['/locations/Gedung Baru/Lantai Dasar/AD15 - Toilet Pria.jpg']
  },
  {
    id: 'gedung-baru-ad16-toilet-difable',
    name: 'AD16 - Toilet Difable',
    category: 'toilet',
    description: 'Fasilitas toilet difabel di Lantai Dasar Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai Dasar',
    images: ['/locations/Gedung Baru/Lantai Dasar/AD16 - Toilet Difable.jpg']
  },
  {
    id: 'gedung-baru-ad19-musholla-wanita',
    name: 'AD19 - Musholla Wanita',
    category: 'religious',
    description: 'Ruang ibadah, sholat, dan doa untuk mahasiswa dan staf wanita di Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai Dasar',
    images: ['/locations/Gedung Baru/Lantai Dasar/AD19 - Musholla Wanita.jpg']
  },
  {
    id: 'gedung-baru-ad20-tempat-wudhu-pria',
    name: 'AD20 - Tempat Wudhu Pria',
    category: 'religious',
    description: 'Tempat wudhu untuk mahasiswa dan staf pria sebelum beribadah di Musholla Pria.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai Dasar',
    images: ['/locations/Gedung Baru/Lantai Dasar/AD20 - Tempat Wudhu Pria.jpg']
  },
  {
    id: 'gedung-baru-ad21-tempat-wudhu-wanita',
    name: 'AD21 - Tempat Wudhu Wanita',
    category: 'religious',
    description: 'Tempat wudhu untuk mahasiswa dan staf wanita sebelum beribadah di Musholla Wanita.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai Dasar',
    images: ['/locations/Gedung Baru/Lantai Dasar/AD21 - Tempat Wudhu Wanita.jpg']
  },
  {
    id: 'gedung-baru-ad22-musholla-pria',
    name: 'AD22 - Musholla Pria',
    category: 'religious',
    description: 'Ruang ibadah, sholat, dan berdoa untuk mahasiswa dan staf pria di Gedung Baru.',
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
    description: 'Pos satpam yang memberikan bantuan kepada pengunjung dan surveillance gedung baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai Dasar',
    images: ['/locations/Gedung Baru/Lantai Dasar/Pos Informasi dan Security.jpg']
  },  {
    id: 'gedung-baru-pos-satpam-lobi',
    name: 'Pos Satpam Lobi',
    category: 'security',
    description: 'Pos satpam yang terletak di lobi gedung baru untuk surveillance dan bantuan.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai Dasar',
    images: ['/locations/Gedung Baru/Lantai Dasar/Pos Satpam Lobi.jpg']
  },

  // Gedung Baru - Lantai 1
  {
    id: 'gedung-baru-a101-lab-komputer',
    name: 'A101 - Lab Komputer',
    category: 'labs',
    description: 'Laboratorium komputer A101 untuk pembelajaran kelas, sesi lab, maupun untuk ruang ujian.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 1',
    images: ['/locations/Gedung Baru/Lantai 1/A101 - Lab Komputer.jpg']
  },
  {
    id: 'gedung-baru-a102-lab-komputer',
    name: 'A102 - Lab Komputer',
    category: 'labs',
    description: 'Laboratorium komputer A102 untuk pembelajaran kelas, sesi lab, maupun untuk ruang ujian.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 1',
    images: ['/locations/Gedung Baru/Lantai 1/A102 - Lab Komputer.jpg']
  },
  {
    id: 'gedung-baru-a103-lab-komputer',
    name: 'A103 - Lab Komputer',
    category: 'labs',
    description: 'Laboratorium komputer A103 untuk pembelajaran kelas, sesi lab, maupun untuk ruang ujian.',
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
    description: 'Laboratorium komputer A104 untuk pembelajaran kelas, sesi lab, maupun untuk ruang ujian.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 1',
    images: ['/locations/Gedung Baru/Lantai 1/A104 - Lab Komputer.jpg']
  },
  {
    id: 'gedung-baru-a105-lab-komputer',
    name: 'A105 - Lab Komputer',
    category: 'labs',
    description: 'Laboratorium komputer A105 untuk pembelajaran kelas, sesi lab, maupun untuk ruang ujian.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 1',
    images: ['/locations/Gedung Baru/Lantai 1/A105 - Lab Komputer.jpg']
  },
  {
    id: 'gedung-baru-a106-lab-komputer',
    name: 'A106 - Lab Komputer',
    category: 'labs',
    description: 'Laboratorium komputer A106 untuk pembelajaran kelas, sesi lab, maupun untuk ruang ujian.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 1',
    images: ['/locations/Gedung Baru/Lantai 1/A106 - Lab Komputer.jpg']
  },
  {
    id: 'gedung-baru-a107-ruang-kelas',
    name: 'A107 - Ruang Kelas',
    category: 'classrooms',
    description: 'Ruang Kuliah A107 untuk kegiatan belajar mengajar.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 1',
    images: ['/locations/Gedung Baru/Lantai 1/A107- Ruang Kelas.jpg']
  },
  {
    id: 'gedung-baru-a108-ruang-kelas',
    name: 'A108 - Ruang Kelas',
    category: 'classrooms',
    description: 'Ruang Kuliah A108 untuk kegiatan belajar mengajar.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 1',
    images: ['/locations/Gedung Baru/Lantai 1/A108- Ruang Kelas.jpg']
  },
  {
    id: 'gedung-baru-a109-ruang-kelas',
    name: 'A109 - Ruang Kelas',
    category: 'classrooms',
    description: 'Ruang Kuliah A109 untuk kegiatan belajar mengajar.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 1',
    images: ['/locations/Gedung Baru/Lantai 1/A109- Ruang Kelas.jpg']
  },
  {
    id: 'gedung-baru-a110-ruang-kelas',
    name: 'A110 - Ruang Kelas',
    category: 'classrooms',
    description: 'Ruang Kuliah A110 untuk kegiatan belajar mengajar.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 1',
    images: ['/locations/Gedung Baru/Lantai 1/A110- Ruang Kelas.jpg']
  },
  {
    id: 'gedung-baru-a112-emergency-exit',
    name: 'A112 - Emergency Exit',
    category: 'facilities',
    description: 'Tangga darurat A112 untuk evakuasi dari Gedung Baru. Terletak di Lantai 1, sebelah lift.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 1',
    images: ['/locations/Gedung Baru/Lantai 1/A112 - Emergency Exit.jpg']
  },
  {
    id: 'gedung-baru-elevator-lantai-1',
    name: 'Elevator',
    category: 'elevator',
    description: 'Akses elevator / lift untuk akses nyaman menuju lantai lain di Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 1',
    images: ['/locations/Gedung Baru/Lantai 1/Elevator.jpg']
  },
  {
    id: 'gedung-baru-plaza-lantai-1',
    name: 'Plaza',
    category: 'common-areas',
    description: 'Area plaza untuk berkumpul dan bersantai terletak di Gedung Baru - Lantai 1.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 1',
    images: ['/locations/Gedung Baru/Lantai 1/Plaza.jpg']
  },
  {
    id: 'gedung-baru-ruang-humas-lantai-1',
    name: 'Ruang Humas',
    category: 'administration',
    description: 'Ruang Humas untuk komunikasi dan hubungan media terletak di Gedung Baru - Lantai 1.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 1',
    images: ['/locations/Gedung Baru/Lantai 1/Ruang Humas.jpg']
  },

  // Gedung Baru - Lantai 2
  {
    id: 'gedung-baru-a201-auditorium',
    name: 'A201 - Auditorium',
    category: 'lecture-halls',
    description: 'Auditorium A201 untuk kuliah umum, seminar, dan acara akademik.',
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
    description: 'Ruang kontrol proyektor A202 untuk proyektor auditorium.',
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
    description: 'Ruang persiapan auditorium A205 untuk persiapan auditorium.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 2',
    images: ['/locations/Gedung Baru/Lantai 2/A205 - Ruang Persiapan Auditorium.jpg']
  },
  {
    id: 'gedung-baru-a206-ruang-kelas',
    name: 'A206 - Ruang Kelas',
    category: 'classrooms',
    description: 'Ruang Kelas A206 untuk kegiatan belajar mengajar.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 2',
    images: ['/locations/Gedung Baru/Lantai 2/A206 - Ruang Kelas.jpg']
  },
  {
    id: 'gedung-baru-a207-ruang-kelas',
    name: 'A207 - Ruang Kelas',
    category: 'classrooms',
    description: 'Ruang Kelas A207 untuk kegiatan belajar mengajar.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 2',
    images: ['/locations/Gedung Baru/Lantai 2/A207 - Ruang Kelas.jpg']
  },
  {
    id: 'gedung-baru-a208-ruang-kelas',
    name: 'A208 - Ruang Kelas',
    category: 'classrooms',
    description: 'Ruang Kelas A208 untuk kegiatan belajar mengajar.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 2',
    images: ['/locations/Gedung Baru/Lantai 2/A208 - Ruang Kelas.jpg']
  },
  {
    id: 'gedung-baru-a209-ruang-kelas',
    name: 'A209 - Ruang Kelas',
    category: 'classrooms',
    description: 'Ruang Kelas A209 untuk kegiatan belajar mengajar.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 2',
    images: ['/locations/Gedung Baru/Lantai 2/A209 - Ruang Kelas.jpg']
  },
  {
    id: 'gedung-baru-a210-ruang-dosen',
    name: 'A210 - Ruang Dosen',
    category: 'offices',
    description: 'Ruang Dosen A210.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 2',
    images: ['/locations/Gedung Baru/Lantai 2/A210  - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a211-tangga-darurat',
    name: 'A211 - Tangga Darurat',
    category: 'facilities',
    description: 'Tangga darurat A211 untuk evakuasi aman dari gedung. Terletak di Lantai 2, sebelah lift.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 2',
    images: ['/locations/Gedung Baru/Lantai 2/A211 - Emergency Stairs.jpg']
  },
  {
    id: 'gedung-baru-a212-ruang-panel',
    name: 'A212 - Ruang Panel',
    category: 'facilities',
    description: 'Ruang panel listrik A212 untuk infrastruktur gedung Lantai 2 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 2',
    images: ['/locations/Gedung Baru/Lantai 2/A212 - Ruang Panel.jpg']
  },
  {
    id: 'gedung-baru-a213-toilet-wanita',
    name: 'A213 - Toilet Wanita',
    category: 'toilet',
    description: 'Fasilitas toilet wanita A213 di Lantai 2 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 2',
    images: ['/locations/Gedung Baru/Lantai 2/A213 - Toilet Wanita.jpg']
  },
  {
    id: 'gedung-baru-a214-janitor',
    name: 'A214 - Janitor',
    category: 'facilities',
    description: 'Ruang Janitor A214 untuk perlengkapan kebersihan.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 2',
    images: ['/locations/Gedung Baru/Lantai 2/A214 - Janitor.jpg']
  },
  {
    id: 'gedung-baru-a215-toilet-pria',
    name: 'A215 - Toilet Pria',
    category: 'toilet',
    description: 'Fasilitas toilet pria A215 di Lantai 2 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 2',
    images: ['/locations/Gedung Baru/Lantai 2/A215 - Toilet Pria.jpg']
  },
  {
    id: 'gedung-baru-a216-toilet-staf',
    name: 'A216 - Toilet Staf',
    category: 'toilet',
    description: 'Fasilitas toilet staf A216 di Lantai 2 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 2',
    images: ['/locations/Gedung Baru/Lantai 2/A216 - Toilet Staf.jpg']
  },
  {
    id: 'gedung-baru-balkon-lantai-2-1',
    name: 'Balkon',
    category: 'common-areas',
    description: 'Area balkon di Lantai 2 Gedung Baru menyediakan ruang terbuka.',
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
    description: 'Lift / elevator untuk akses menuju lantai lain di Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 2',
    images: ['/locations/Gedung Baru/Lantai 2/Elevator.jpg']
  },
  {
    id: 'gedung-baru-selasar-lantai-2',
    name: 'Selasar',
    category: 'common-areas',
    description: 'Area selasar di Lantai 2 Gedung Baru menyediakan ruang berkumpul dan bersantai.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 2',
    images: ['/locations/Gedung Baru/Lantai 2/Selasar.jpg']
  },

  // Gedung Baru - Lantai 3
  {
    id: 'gedung-baru-a301-lab-komputer',
    name: 'A301 - Lab Komputer',
    category: 'labs',
    description: 'Laboratorium komputer A301 untuk pembelajaran kelas, sesi lab, maupun untuk ruang ujian.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 3',
    images: ['/locations/Gedung Baru/Lantai 3/A301 - Lab Komputer.jpg']
  },
  {
    id: 'gedung-baru-a302-lab-komputer',
    name: 'A302 - Lab Komputer',
    category: 'labs',
    description: 'Laboratorium komputer A302 untuk pembelajaran kelas, sesi lab, maupun untuk ruang ujian.',
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
    description: 'Laboratorium komputer A303 untuk pembelajaran kelas, sesi lab, maupun untuk ruang ujian.',
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
    description: 'Laboratorium komputer A304 untuk pembelajaran kelas, sesi lab, maupun untuk ruang ujian.',
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
    description: 'Ruang Kelas A305 untuk kegiatan belajar mengajar.',
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
    description: 'Ruang Kelas A306 untuk kegiatan belajar mengajar.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 3',
    images: [
      '/locations/Gedung Baru/Lantai 3/A306_1 - Ruang Kelas.jpg',
      '/locations/Gedung Baru/Lantai 3/A306_2 - Ruang Kelas.jpg'
    ]
  },
  {
    id: 'gedung-baru-a307-tangga-darurat',
    name: 'A307 - Tangga Darurat',
    category: 'facilities',
    description: 'Tangga darurat A307 untuk evakuasi darurat. Terletak di Lantai 3 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 3',
    images: ['/locations/Gedung Baru/Lantai 3/A307 - Emergency Stairs.jpg']
  },
  {
    id: 'gedung-baru-janitor-lantai-3',
    name: 'Janitor',
    category: 'facilities',
    description: 'Ruang janitor di Lantai 3 Gedung Baru untuk perlengkapan kebersihan.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 3',
    images: ['/locations/Gedung Baru/Lantai 3/Janitor.jpg']
  },
  {
    id: 'gedung-baru-toilet-pria-lantai-3',
    name: 'Toilet Pria',
    category: 'toilet',
    description: 'Fasilitas toilet pria di Lantai 3 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 3',
    images: ['/locations/Gedung Baru/Lantai 3/Toilet Pria.jpg']
  },
  {
    id: 'gedung-baru-toilet-wanita-lantai-3',
    name: 'Toilet Wanita',
    category: 'toilet',
    description: 'Fasilitas toilet wanita di Lantai 3 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 3',
    images: ['/locations/Gedung Baru/Lantai 3/Toilet Wanita.jpg']
  },

  // Gedung Baru - Lantai 4 
  {
    id: 'gedung-baru-a401-a408-kaprodi-wakil-dekan',
    name: 'A401-A408 - Ruang Kaprodi - Ruang Wakil Dekan',
    category: 'offices',
    description: 'Pintu masuk untuk akses A401-A408 yang menampung Ruang Kaprodi dan Ruang Wakil Dekan di Lantai 4 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A401-A408 - Ruang Kaprodi - Ruang Wakil Dekan.jpg']
  },
  {
    id: 'gedung-baru-a409-ruang-sidang',
    name: 'A409 - Ruang Sidang',
    category: 'meeting-rooms',
    description: 'Ruang Sidang A409 untuk sidang akademik di Lantai 4 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A409 - Ruang Sidang.jpg']
  },
  {
    id: 'gedung-baru-a410-faculty-lounge',
    name: 'A410 - Faculty Lounge',
    category: 'common-areas',
    description: 'Ruang Faculty Lounge A410 untuk staf maupun dosen untuk berkumpul dan bersantai. Terdapat dapur kecil dan area santai.',
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
    description: 'Ruang Dosen A410 No. 11 untuk staf di Lantai 4 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A410 - No. 11 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a411-no-12-ruang-dosen',
    name: 'A411 - No. 12 - Ruang Dosen',
    category: 'offices',
    description: 'Ruang Dosen A411 No. 12 untuk staf di Lantai 4 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A411 - No. 12 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a412-no-13-ruang-dosen',
    name: 'A412 - No. 13 - Ruang Dosen',
    category: 'offices',
    description: 'Ruang Dosen A412 No. 13 untuk staf di Lantai 4 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A412 - No. 13 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a413-no-14-ruang-dosen',
    name: 'A413 - No. 14 - Ruang Dosen',
    category: 'offices',
    description: 'Ruang Dosen A413 No. 14 untuk staf di Lantai 4 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A413 - No. 14 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a414-no-15-ruang-dosen',
    name: 'A414 - No. 15 - Ruang Dosen',
    category: 'offices',
    description: 'Ruang Dosen A414 No. 15 untuk staf di Lantai 4 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A414 - No. 15 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a415-no-16-ruang-dosen',
    name: 'A415 - No. 16 - Ruang Dosen',
    category: 'offices',
    description: 'Ruang Dosen A415 No. 16 untuk staf di Lantai 4 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A415 - No. 16 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a416-no-19-ruang-dosen',
    name: 'A416 - No. 19 - Ruang Dosen',
    category: 'offices',
    description: 'Ruang Dosen A416 No. 19 untuk staf di Lantai 4 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A416 - No. 19 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a417-no-18-ruang-dosen',
    name: 'A417 - No. 18 - Ruang Dosen',
    category: 'offices',
    description: 'Ruang Dosen A417 No. 18 untuk staf di Lantai 4 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A417 - No. 18 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a418-no-17-musholla-pria',
    name: 'A418 - No. 17 - Musholla Pria',
    category: 'religious',
    description: 'Ruang Musholla Pria A418 untuk kegiatan ibadah, sholat, dan doa di Lantai 4 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A418 - No. 17 - Musholla Pria.jpg']
  },
  {
    id: 'gedung-baru-a419-no-20-ruang-dosen',
    name: 'A419 - No. 20 - Ruang Dosen',
    category: 'offices',
    description: 'Ruang Dosen A419 No. 20 untuk staf di Lantai 4 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A419 - No. 20 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a420-no-21-ruang-dosen',
    name: 'A420 - No. 21 - Ruang Dosen',
    category: 'offices',
    description: 'Ruang Dosen A420 No. 21 untuk staf di Lantai 4 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A420 - No. 21 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a421-no-22-musholla-wanita',
    name: 'A421 - No. 22 - Musholla Wanita',
    category: 'religious',
    description: 'Ruang Musholla Wanita A421 untuk kegiatan ibadah, sholat, dan doa di Lantai 4 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A421 - No. 22 - Musholla Wanita.jpg']
  },
  {
    id: 'gedung-baru-a422-no-27-ruang-dosen',
    name: 'A422 - No. 27 - Ruang Dosen',
    category: 'offices',
    description: 'Ruang Dosen A422 No. 27 untuk staf di Lantai 4 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A422 - No. 27 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a423-no-26-ruang-dosen',
    name: 'A423 - No. 26 - Ruang Dosen',
    category: 'offices',
    description: 'Ruang Dosen A423 No. 26 untuk staf di Lantai 4 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A423 - No. 26 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a424-no-25-ruang-dosen',
    name: 'A424 - No. 25 - Ruang Dosen',
    category: 'offices',
    description: 'Ruang Dosen A424 No. 25 untuk staf di Lantai 4 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A424 - No. 25 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a425-no-24-ruang-dosen',
    name: 'A425 - No. 24 - Ruang Dosen',
    category: 'offices',
    description: 'Ruang Dosen A425 No. 24 untuk staf di Lantai 4 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A425 - No. 24 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a426-no-23-ruang-dosen',
    name: 'A426 - No. 23 - Ruang Dosen',
    category: 'offices',
    description: 'Ruang Dosen A426 No. 23 untuk staf di Lantai 4 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A426 - No. 23 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a427-no-28-ruang-dosen',
    name: 'A427 - No. 28 - Ruang Dosen',
    category: 'offices',
    description: 'Ruang Dosen A427 No. 28 untuk staf di Lantai 4 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A427 - No. 28 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a428-no-29-ruang-dosen',
    name: 'A428 - No. 29 - Ruang Dosen',
    category: 'offices',
    description: 'Ruang Dosen A428 No. 29 untuk staf di Lantai 4 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A428 - No. 29 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a429-no-30-ruang-dosen',
    name: 'A429 - No. 30 - Ruang Dosen',
    category: 'administration',
    description: 'Ruang Dosen A429 No. 30 untuk staf di Lantai 4 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A429 - No. 30 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a430-no-31-ruang-dosen',
    name: 'A430 - No. 31 - Ruang Dosen',
    category: 'offices',
    description: 'Ruang Dosen A430 No. 31 untuk staf di Lantai 4 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A430 - No. 31 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a431-no-32-ruang-dosen',
    name: 'A431 - No. 32 - Ruang Dosen',
    category: 'offices',
    description: 'Ruang Dosen A431 No. 32 untuk staf di Lantai 4 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A431 - No. 32 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a432-no-34-ruang-dosen',
    name: 'A432 - No. 34 - Ruang Dosen',
    category: 'offices',
    description: 'Ruang Dosen A432 No. 34 untuk staf di Lantai 4 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A432 - No. 34 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a433-no-33-ruang-dosen',
    name: 'A433 - No. 33 - Ruang Dosen',
    category: 'offices',
    description: 'Ruang Dosen A433 No. 33 untuk staf di Lantai 4 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A433 - No. 33 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a434-no-35-ruang-dosen',
    name: 'A434 - No. 35 - Ruang Dosen',
    category: 'offices',
    description: 'Ruang Dosen A434 No. 35 untuk staf di Lantai 4 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A434 - No. 35 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a435-no-36-ruang-dosen',
    name: 'A435 - No. 36 - Ruang Dosen',
    category: 'offices',
    description: 'Ruang Dosen A435 No. 36 untuk staf di Lantai 4 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A435 - No. 36 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a436-no-37-ruang-dosen',
    name: 'A436 - No. 37 - Ruang Dosen',
    category: 'offices',
    description: 'Ruang Dosen A436 No. 37 untuk staf di Lantai 4 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A436 - No. 37 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a437-ruang-laktasi',
    name: 'A437 - Ruang Laktasi',
    category: 'facilities',
    description: 'Ruang Laktasi A437 di Lantai 4 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A437 - Ruang Laktasi.jpg']
  },
  {
    id: 'gedung-baru-a438-ruang-studio-a',
    name: 'A438 - Ruang Studio A',
    category: 'facilities',
    description: 'Ruang Studio A438 di Lantai 4 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A438 - Ruang Studio A.jpg']
  },
  {
    id: 'gedung-baru-a439-ruang-rapat',
    name: 'A439 - Ruang Rapat',
    category: 'meeting-rooms',
    description: 'Ruang Rapat A439 di Lantai 4 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A439 - Ruang Rapat.jpg']
  },
  {
    id: 'gedung-baru-a443-ruang-panel',
    name: 'A443 - Ruang Panel',
    category: 'facilities',
    description: 'Ruang Panel A443 untuk infrastruktur gedung terletak di Lantai 4 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A443 - Ruang Panel.jpg']
  },
  {
    id: 'gedung-baru-a444-toilet-wanita',
    name: 'A444 - Toilet Wanita',
    category: 'toilet',
    description: 'Ruang Toilet Wanita A444 di Lantai 4 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A444 - Toilet Wanita.jpg']
  },
  {
    id: 'gedung-baru-a445-toilet-pria',
    name: 'A445 - Toilet Pria',
    category: 'toilet',
    description: 'Ruang Toilet Pria A445 di Lantai 4 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A445 - Toilet Pria.jpg']
  },
  {
    id: 'gedung-baru-a446-toilet-khusus-staf',
    name: 'A446 - Toilet Khusus Staf',
    category: 'toilet',
    description: 'Ruang Toilet Khusus Staf A446 di Lantai 4 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A446 - Toilet Khusus Staf.jpg']
  },
  {
    id: 'gedung-baru-a447-ruang-kebersihan',
    name: 'A447 - Ruang Kebersihan',
    category: 'facilities',
    description: 'Ruang Kebersihan A447 untuk kebersihan di Lantai 4 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/A447 - Ruang Kebersihan.jpg']
  },
  {
    id: 'gedung-baru-elevator-lantai-4',
    name: 'Elevator',
    category: 'elevator',
    description: 'Lift / elevator untuk akses nyaman menuju lantai lain di Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/Elevator.jpg']
  },
  {
    id: 'gedung-baru-tangga-darurat-lantai-4',
    name: 'Tangga Darurat',
    category: 'facilities',
    description: 'Tangga darurat untuk evakuasi yang aman di Lantai 4 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 4',
    images: ['/locations/Gedung Baru/Lantai 4/Emergency Stairs.jpg']
  },
  
  // Gedung Baru - Lantai 5
  {
    id: 'gedung-baru-a501-lab-riset',
    name: 'A501 - Lab Riset',
    category: 'labs',
    description: 'Ruang Laboratorium Riset A501 di Lantai 5 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/A501 - Lab Riset.jpg']
  },
  {
    id: 'gedung-baru-a502-computer-systems-lab',
    name: 'A502 - Computer Systems Lab',
    category: 'labs',
    description: 'Ruang Laboratorium Sistem Komputer (Computer Systems Lab) A502 di Lantai 5 Gedung Baru.',
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
    description: 'Ruang Laboratorium Riset A503 di Lantai 5 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/A503 - Lab Riset.jpg']
  },
  {
    id: 'gedung-baru-a505-no-5-ruang-dosen',
    name: 'A505 - No. 5 - Ruang Dosen',
    category: 'offices',
    description: 'Ruang Dosen A505 No. 5 di Lantai 5 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/A505 - No. 5 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a506-no-6-ruang-dosen',
    name: 'A506 - No. 6 - Ruang Dosen',
    category: 'offices',
    description: 'Ruang Dosen A506 No. 6 di Lantai 5 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/A506 - No. 6 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a507-no-7-ruang-dosen',
    name: 'A507 - No. 7 - Ruang Dosen',
    category: 'offices',
    description: 'Ruang Dosen A507 No. 7 di Lantai 5 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/A507 - No. 7 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a508-satrio-yudhoatmojo',
    name: 'A508 - No. 8 - Ruang Dosen - Satrio Yudhoatmojo',
    category: 'offices',
    description: 'Ruang Dosen A508 No. 8 untuk Satrio Yudhoatmojo, Ph.D. terletak di Lantai 5 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/A508 - No. 8 - Ruang Dosen - Satrio Yudhoatmojo.jpg']
  },
  {
    id: 'gedung-baru-a509-no-12-ruang-dosen',
    name: 'A509 - No. 12 - Ruang Dosen',
    category: 'offices',
    description: 'Ruang Dosen A509 No. 12 di Lantai 5 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/A509 - No. 12 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a510-no-11-ruang-dosen',
    name: 'A510 - No. 11 - Ruang Dosen',
    category: 'offices',
    description: 'Ruang Dosen A510 No. 11 di Lantai 5 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/A510 - No. 11 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a511-no-10-ruang-dosen',
    name: 'A511 - No. 10 - Ruang Dosen',
    category: 'offices',
    description: 'Ruang Dosen A511 No. 10 di Lantai 5 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/A511 - No. 10 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a512-no-9-musholla',
    name: 'A512 - No. 9 - Musholla',
    category: 'religious',
    description: 'Ruang Musholla A512 untuk beribadah, sholat, dan doa terletak di Lantai 5 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/A512 - No. 9 - Musholla.jpg']
  },
  {
    id: 'gedung-baru-a513-no-13-ruang-dosen',
    name: 'A513 - No. 13 - Ruang Dosen',
    category: 'offices',
    description: 'Ruang Dosen A513 No. 13 di Lantai 5 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/A513 - No. 13 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a514-no-14-ruang-dosen',
    name: 'A514 - No. 14 - Ruang Dosen',
    category: 'offices',
    description: 'Ruang Dosen A514 No. 14 di Lantai 5 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/A514 - No. 14 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a515-no-15-ruang-dosen',
    name: 'A515 - No. 15 - Ruang Dosen',
    category: 'offices',
    description: 'Ruang Dosen A515 No. 15 di Lantai 5 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/A515 - No. 15 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a516-no-16-ruang-dosen',
    name: 'A516 - No. 16 - Ruang Dosen',
    category: 'offices',
    description: 'Ruang Dosen A516 No. 16 di Lantai 5 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/A516 - No. 16 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a517-competitive-programming-study-club',
    name: 'A517 - Competitive Programming Study Club',
    category: 'student-organizations',
    description: 'Studi Klub Competitive Programming A517 (Competitive Programming Study Club) untuk mahasiswa yang tertarik dalam competitive programming.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/A517 - Competitive Programming Study Club.jpg']
  },
  {
    id: 'gedung-baru-a518-ruang-kelas',
    name: 'A518 - Ruang Kelas',
    category: 'classrooms',
    description: 'Ruang Kelas A518 untuk kegiatan belajar mengajar',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/A518 - Ruang Kelas.jpg']
  },
  {
    id: 'gedung-baru-a519-ruang-rapat',
    name: 'A519 - Ruang Rapat',
    category: 'meeting-rooms',
    description: 'Ruang Rapat A519 untuk meeting / rapat terletak di Lantai 5 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/A519 - Ruang Rapat.jpg']
  },
  {
    id: 'gedung-baru-a520-lab-riset',
    name: 'A520 - Lab Riset',
    category: 'labs',
    description: 'Ruang Lab Riset A520 untuk penelitian terletak di Lantai 5 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/A520 - Lab Riset.jpg']
  },
  {
    id: 'gedung-baru-a521-lab-riset',
    name: 'A521 - Lab Riset',
    category: 'labs',
    description: 'Ruang Lab Riset A521 untuk penelitian terletak di Lantai 5 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/A521 - Lab Riset.jpg']
  },
  {
    id: 'gedung-baru-a523-ruang-panel',
    name: 'A523 - Ruang Panel',
    category: 'facilities',
    description: 'Ruang Panel A523 untuk infrastruktur gedung terletak di Lantai 5 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/A523 - Ruang Panel.jpg']
  },
  {
    id: 'gedung-baru-a527-janitor',
    name: 'A527 - Janitor',
    category: 'facilities',
    description: 'Ruang Janitor A527 untuk kebersihan gedung terletak di Lantai 5 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/A527 - Janitor.jpg']
  },
  {
    id: 'gedung-baru-lantai-5-elevator',
    name: 'Elevator',
    category: 'elevator',
    description: 'Lift / elevator untuk akses nyaman menuju lantai lain di Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/Elevator.jpg']
  },
  {
    id: 'gedung-baru-lantai-5-tangga-darurat',
    name: 'Tangga Darurat',
    category: 'facilities',
    description: 'Tangga darurat untuk evakuasi darurat Gedung Baru. Terletak di Lantai 5, sebelah lift.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/Emergency Stairs.jpg']
  },
  {
    id: 'gedung-baru-lantai-5-toilet-khusus-dosen',
    name: 'Toilet Khusus Dosen',
    category: 'toilet',
    description: 'Fasilitas toilet khusus untuk dosen.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/Toilet Khusus Dosen.jpg']
  },
  {
    id: 'gedung-baru-lantai-5-toilet-pria',
    name: 'Toilet Pria',
    category: 'toilet',
    description: 'Fasilitas toilet pria terletak di Lantai 5 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/Toilet Pria.jpg']
  },
  {
    id: 'gedung-baru-lantai-5-toilet-wanita',
    name: 'Toilet Wanita',
    category: 'toilet',
    description: 'Fasilitas toilet wanita terletak di Lantai 5 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 5',
    images: ['/locations/Gedung Baru/Lantai 5/Toilet Wanita.jpg']
  },
  
  // Gedung Baru - Lantai 6
  {
    id: 'gedung-baru-a601-ruang-kelas',
    name: 'A601 - Ruang Kelas',
    category: 'classrooms',
    description: 'Ruang Kelas A601 untuk kegiatan belajar mengajar.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 6',
    images: ['/locations/Gedung Baru/Lantai 6/A601 - Ruang Kelas.jpg']
  },
  {
    id: 'gedung-baru-a602-ruang-kelas',
    name: 'A602 - Ruang Kelas',
    category: 'classrooms',
    description: 'Ruang Kelas A602 untuk kegiatan belajar mengajar.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 6',
    images: ['/locations/Gedung Baru/Lantai 6/A602 - Ruang Kelas.jpg']
  },
  {
    id: 'gedung-baru-a603-no-3-ruang-dosen',
    name: 'A603 - No. 3 - Ruang Dosen',
    category: 'offices',
    description: 'Ruang Dosen A603 No. 3 terletak di Lantai 6 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 6',
    images: ['/locations/Gedung Baru/Lantai 6/A603 - No. 3 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a604-no-4-ruang-dosen',
    name: 'A604 - No. 4 - Ruang Dosen',
    category: 'offices',
    description: 'Ruang Dosen A604 No. 4 terletak di Lantai 6 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 6',
    images: ['/locations/Gedung Baru/Lantai 6/A604 - No. 4 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a605-no-5-ruang-dosen',
    name: 'A605 - No. 5 - Ruang Dosen',
    category: 'offices',
    description: 'Ruang Dosen A605 No. 5 terletak di Lantai 6 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 6',
    images: ['/locations/Gedung Baru/Lantai 6/A605 - No. 5 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a606-no-6-ruang-dosen',
    name: 'A606 - No. 6 - Ruang Dosen',
    category: 'offices',
    description: 'Ruang Dosen A606 No. 6 terletak di Lantai 6 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 6',
    images: ['/locations/Gedung Baru/Lantai 6/A606 - No. 6 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a607-ruang-kelas',
    name: 'A607 - Ruang Kelas',
    category: 'classrooms',
    description: 'Ruang Kelas A607 untuk kegiatan belajar mengajar.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 6',
    images: ['/locations/Gedung Baru/Lantai 6/A607 - Ruang Kelas.jpg']
  },
  {
    id: 'gedung-baru-a608-ruang-kelas',
    name: 'A608 - Ruang Kelas',
    category: 'classrooms',
    description: 'Ruang Kelas A608 untuk kegiatan belajar mengajar.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 6',
    images: ['/locations/Gedung Baru/Lantai 6/A608 - Ruang Kelas.jpg']
  },
  {
    id: 'gedung-baru-a609-ruang-kelas',
    name: 'A609 - Ruang Kelas',
    category: 'classrooms',
    description: 'Ruang Kelas A609 untuk kegiatan belajar mengajar.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 6',
    images: ['/locations/Gedung Baru/Lantai 6/A609 - Ruang Kelas.jpg']
  },
  {
    id: 'gedung-baru-a610-ruang-kelas',
    name: 'A610 - Ruang Kelas',
    category: 'classrooms',
    description: 'Ruang Kelas A610 untuk kegiatan belajar mengajar.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 6',
    images: ['/locations/Gedung Baru/Lantai 6/A610 - Ruang Kelas.jpg']
  },
  {
    id: 'gedung-baru-a611-ruang-kelas',
    name: 'A611 - Ruang Kelas',
    category: 'classrooms',
    description: 'Ruang Kelas A611 untuk kegiatan belajar mengajar.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 6',
    images: ['/locations/Gedung Baru/Lantai 6/A611 - Ruang Kelas.jpg']
  },
  {
    id: 'gedung-baru-a612-ruang-kelas',
    name: 'A612 - Ruang Kelas',
    category: 'classrooms',
    description: 'Ruang Kelas A612 untuk kegiatan belajar mengajar.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 6',
    images: ['/locations/Gedung Baru/Lantai 6/A612 - Ruang Kelas.jpg']
  },
  {
    id: 'gedung-baru-a613-no-13-ruang-dosen',
    name: 'A613 - No. 13 - Ruang Dosen',
    category: 'offices',
    description: 'Ruang Dosen A613 No. 13 terletak di Lantai 6 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 6',
    images: ['/locations/Gedung Baru/Lantai 6/A613 - No. 13 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a614-no-14-ruang-dosen',
    name: 'A614 - No. 14 - Ruang Dosen',
    category: 'offices',
    description: 'Ruang Dosen A614 No. 14 terletak di Lantai 6 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 6',
    images: ['/locations/Gedung Baru/Lantai 6/A614 - No. 14 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a615-no-15-ruang-dosen',
    name: 'A615 - No. 15 - Ruang Dosen',
    category: 'offices',
    description: 'Ruang Dosen A615 No. 15 terletak di Lantai 6 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 6',
    images: ['/locations/Gedung Baru/Lantai 6/A615 - No. 15 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a617-ruang-panel',
    name: 'A617 - Ruang Panel',
    category: 'facilities',
    description: 'Ruang Panel Listrik untuk manajemen infrastruktur Lantai 6 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 6',
    images: ['/locations/Gedung Baru/Lantai 6/A617 - Ruang Panel.jpg']
  },
  {
    id: 'gedung-baru-a618-toilet-wanita',
    name: 'A618 - Toilet Wanita',
    category: 'toilet',
    description: 'Ruang Toilet Wanita terletak di Lantai 6 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 6',
    images: ['/locations/Gedung Baru/Lantai 6/A618 - Toilet Wanita.jpg']
  },
  {
    id: 'gedung-baru-a619-toilet-pria',
    name: 'A619 - Toilet Pria',
    category: 'toilet',
    description: 'Ruang Toilet Pria terletak di Lantai 6 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 6',
    images: ['/locations/Gedung Baru/Lantai 6/A619 - Toilet Pria.jpg']
  },
  {
    id: 'gedung-baru-a620-toilet-difable',
    name: 'A620 - Toilet Difable',
    category: 'toilet',
    description: 'Ruang Toilet Difabel terletak di Lantai 6 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 6',
    images: ['/locations/Gedung Baru/Lantai 6/A620 - Toilet Difable.jpg']
  },
  {
    id: 'gedung-baru-a621-ruang-kebersihan',
    name: 'A621 - Ruang Kebersihan',
    category: 'facilities',
    description: 'Ruang Kebersihan A621 untuk kebersihan Lantai 6 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 6',
    images: ['/locations/Gedung Baru/Lantai 6/A621 - Ruang Kebersihan.jpg']
  },
  {
    id: 'gedung-baru-lantai-6-elevator',
    name: 'Elevator',
    category: 'elevator',
    description: 'Lift / Elevator untuk akses nyaman menuju lantai lain Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 6',
    images: ['/locations/Gedung Baru/Lantai 6/Elevator.jpg']
  },
  {
    id: 'gedung-baru-lantai-6-tangga-darurat',
    name: 'Tangga Darurat',
    category: 'facilities',
    description: 'Tangga darurat untuk evakuasi darurat Gedung Baru. Terletak di Lantai 6, sebelah lift.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 6',
    images: ['/locations/Gedung Baru/Lantai 6/Emergency Exit.jpg']
  },
  {
    id: 'gedung-baru-lantai-6-selasar',
    name: 'Selasar',
    category: 'common-areas',
    description: 'Area selasar Gedung Baru Lantai 6.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 6',
    images: ['/locations/Gedung Baru/Lantai 6/Selasar.jpg']
  },
  
  // Gedung Baru - Lantai 7
  {
    id: 'gedung-baru-a701-no-1-lab-riset',
    name: 'A701 - No. 1 - Lab Riset',
    category: 'labs',
    description: 'Ruang Laboratorium Riset terletak di Lantai 7 Gedung Baru.',
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
    description: 'Ruang Program Pascasarjana (Postgraduate) No. 3 untuk pembelajaran.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 7',
    images: ['/locations/Gedung Baru/Lantai 7/A702 - No. 3 - Ruang Postgraduate.jpg']
  },
  {
    id: 'gedung-baru-a702-no-4-ruang-postgraduate',
    name: 'A702 - No. 4 - Ruang Postgraduate',
    category: 'classrooms',
    description: 'Ruang Program Pascasarjana (Postgraduate) No. 4 untuk pembelajaran.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 7',
    images: ['/locations/Gedung Baru/Lantai 7/A702 - No. 4 - Ruang Postgraduate.jpg']
  },
  {
    id: 'gedung-baru-a703-no-8-ruang-kelas',
    name: 'A703 - No. 8 - Ruang Kelas',
    category: 'classrooms',
    description: 'Ruang Kelas A703 untuk kegiatan belajar mengajar.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 7',
    images: ['/locations/Gedung Baru/Lantai 7/A703 - No. 8 - Ruang Kelas.jpg']
  },
  {
    id: 'gedung-baru-a704-no-7-ruang-kelas',
    name: 'A704 - No. 7 - Ruang Kelas',
    category: 'classrooms',
    description: 'Ruang Kelas A704 untuk kegiatan belajar mengajar.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 7',
    images: ['/locations/Gedung Baru/Lantai 7/A704 - No. 7 - Ruang Kelas.jpg']
  },
  {
    id: 'gedung-baru-a705-no-6-ruang-dosen',
    name: 'A705 - No. 6 - Ruang Dosen',
    category: 'offices',
    description: 'Ruang Dosen A705 No. 6 terletak di Lantai 7 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 7',
    images: ['/locations/Gedung Baru/Lantai 7/A705 - No. 6 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a706-no-5-ruang-dosen',
    name: 'A706 - No. 5 - Ruang Dosen',
    category: 'offices',
    description: 'Ruang Dosen A706 No. 5 terletak di Lantai 7 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 7',
    images: ['/locations/Gedung Baru/Lantai 7/A706 - No. 5 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a707-no-9-ruang-dosen',
    name: 'A707 - No. 9 - Ruang Dosen',
    category: 'offices',
    description: 'Ruang Dosen A707 No. 9 terletak di Lantai 7 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 7',
    images: ['/locations/Gedung Baru/Lantai 7/A707 - No. 9 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a708-no-10-ruang-dosen',
    name: 'A708 - No. 10 - Ruang Dosen',
    category: 'offices',
    description: 'Ruang Dosen A708 No. 10 terletak di Lantai 7 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 7',
    images: ['/locations/Gedung Baru/Lantai 7/A708 - No. 10 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a709-no-11-ruang-dosen',
    name: 'A709 - No. 11 - Ruang Dosen',
    category: 'offices',
    description: 'Ruang Dosen A709 No. 11 terletak di Lantai 7 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 7',
    images: ['/locations/Gedung Baru/Lantai 7/A709 - No. 11 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a710-no-12-ruang-dosen',
    name: 'A710 - No. 12 - Ruang Dosen',
    category: 'offices',
    description: 'Ruang Dosen A710 No. 12 terletak di Lantai 7 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 7',
    images: ['/locations/Gedung Baru/Lantai 7/A710 - No. 12 - Ruang Dosen.jpg']
  },
  {
    id: 'gedung-baru-a711-ruang-postgraduate',
    name: 'A711 - Ruang Postgraduate',
    category: 'classrooms',
    description: 'Ruang Program Pascasarjana (Postgraduate) untuk pembelajaran.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 7',
    images: ['/locations/Gedung Baru/Lantai 7/A711 - Ruang Postgraduate.jpg']
  },
  {
    id: 'gedung-baru-a712-ruang-kelas-internasional',
    name: 'A712 - Ruang Kelas Internasional',
    category: 'classrooms',
    description: 'Ruang Kelas Internasional A712 untuk kegiatan belajar mengajar Kelas Internasional.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 7',
    images: ['/locations/Gedung Baru/Lantai 7/A712 - Ruang Kelas Internasional.jpg']
  },
  {
    id: 'gedung-baru-a713-ruang-kelas-internasional',
    name: 'A713 - Ruang Kelas Internasional',
    category: 'classrooms',
    description: 'Ruang Kelas Internasional A713 untuk kegiatan belajar mengajar Kelas Internasional.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 7',
    images: ['/locations/Gedung Baru/Lantai 7/A713 - Ruang Kelas Internasional.jpg']
  },
  {
    id: 'gedung-baru-a714-ruang-kelas-internasional',
    name: 'A714 - Ruang Kelas Internasional',
    category: 'classrooms',
    description: 'Ruang Kelas Internasional A714 untuk kegiatan belajar mengajar Kelas Internasional.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 7',
    images: ['/locations/Gedung Baru/Lantai 7/A714 - Ruang Kelas Internasional.jpg']
  },
  {
    id: 'gedung-baru-a715-ruang-kelas-internasional',
    name: 'A715 - Ruang Kelas Internasional',
    category: 'classrooms',
    description: 'Ruang Kelas Internasional A715 untuk kegiatan belajar mengajar Kelas Internasional.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 7',
    images: ['/locations/Gedung Baru/Lantai 7/A715- Ruang Kelas Internasional.jpg']
  },
  {
    id: 'gedung-baru-a716-ruang-postgraduate',
    name: 'A716 - Ruang Postgraduate',
    category: 'classrooms',
    description: 'Ruang Program Pascasarjana (Postgraduate) untuk pembelajaran.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 7',
    images: ['/locations/Gedung Baru/Lantai 7/A716 - Ruang Postgraduate.jpg']
  },
  {
    id: 'gedung-baru-a718-ruang-panel',
    name: 'A718 - Ruang Panel',
    category: 'facilities',
    description: 'Ruang panel listrik untuk infrastruktur lantai 7 gedung baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 7',
    images: ['/locations/Gedung Baru/Lantai 7/A718 - Ruang Panel.jpg']
  },
  {
    id: 'gedung-baru-a719-toilet-wanita',
    name: 'A719 - Toilet Wanita',
    category: 'toilet',
    description: 'Ruang Toilet Wanita terletak di Lantai 7 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 7',
    images: ['/locations/Gedung Baru/Lantai 7/A719 - Toilet Wanita.jpg']
  },
  {
    id: 'gedung-baru-a720-toilet-pria',
    name: 'A720 - Toilet Pria',
    category: 'toilet',
    description: 'Ruang Toilet Pria terletak di Lantai 7 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 7',
    images: ['/locations/Gedung Baru/Lantai 7/A720 - Toilet Pria.jpg']
  },
  {
    id: 'gedung-baru-a721-toilet-difable',
    name: 'A721 - Toilet Difable',
    category: 'toilet',
    description: 'Ruang Toilet Difabel terletak di Lantai 7 Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 7',
    images: ['/locations/Gedung Baru/Lantai 7/A721 - Toilet Difable.jpg']
  },
  {
    id: 'gedung-baru-a722-ruang-kebersihan',
    name: 'A722 - Ruang Kebersihan',
    category: 'facilities',
    description: 'Ruang Kebersihan untuk kebersihan lantai 7 gedung baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 7',
    images: ['/locations/Gedung Baru/Lantai 7/A722 - Ruang Kebersihan.jpg']
  },
  {
    id: 'gedung-baru-lantai-7-elevator',
    name: 'Elevator',
    category: 'elevator',
    description: 'Lift / elevator untuk akses nyaman menuju lantai lain di Gedung Baru.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 7',
    images: ['/locations/Gedung Baru/Lantai 7/Elevator.jpg']
  },
  {
    id: 'gedung-baru-lantai-7-tangga-darurat',
    name: 'Tangga Darurat',
    category: 'facilities',
    description: 'Tangga darurat untuk keperluan evakuasi darurat. Terletak di Lantai 7, sebelah lift.',
    building: 'gedung-baru',
    floor: 'Gedung Baru - Lantai 7',
    images: ['/locations/Gedung Baru/Lantai 7/Emergency Stairs.jpg']
  }
  
];

// Export default image for use in other components
export const defaultLocationImage = DEFAULT_IMAGE;
