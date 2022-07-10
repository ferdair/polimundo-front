const moduleVuelos = {
  namespaced: true,

  state: {
    lista: [
      {
        id: "caf0811d-fdae-4022-b7b7-ea03453e3e5e",
        precio: "$1879.94",
        aerolinea: "Osinski, Schuster and Rau",
        n_escalas: 5,
        duracion: 36,
        ciudad_origen: "Melíssi",
        ciudad_destino: "Tifni",
        hora_salida: "10:37 AM",
        hora_llegada: "7:31 PM",
      },
      {
        id: "5dbbd19c-97d4-46d7-b015-44366a774617",
        precio: "$1752.18",
        aerolinea: "Jacobi-Yundt",
        n_escalas: 4,
        duracion: 24,
        ciudad_origen: "Zhifudao",
        ciudad_destino: "Coripata",
        hora_salida: "12:41 PM",
        hora_llegada: "9:39 PM",
      },
      {
        id: "95f78a37-42d4-453b-95d4-ad454a14f26f",
        precio: "$1439.46",
        aerolinea: "Hamill Group",
        n_escalas: 2,
        duracion: 28,
        ciudad_origen: "Laslovo",
        ciudad_destino: "Bahía Blanca",
        hora_salida: "3:53 AM",
        hora_llegada: "3:34 AM",
      },
      {
        id: "57699cf0-0fa3-4389-8743-5a280bde2ad1",
        precio: "$1098.21",
        aerolinea: "Graham, Roberts and Ruecker",
        n_escalas: 4,
        duracion: 36,
        ciudad_origen: "Lonya Chico",
        ciudad_destino: "Seren",
        hora_salida: "6:34 AM",
        hora_llegada: "2:43 AM",
      },
      {
        id: "503dcd31-64b5-481a-b9c1-02ef6d6c2ef4",
        precio: "$1894.71",
        aerolinea: "Larson, Marvin and Leffler",
        n_escalas: 5,
        duracion: 14,
        ciudad_origen: "Banjar Sembunggede",
        ciudad_destino: "Boyu",
        hora_salida: "7:02 PM",
        hora_llegada: "7:28 PM",
      },
      {
        id: "0aad34c6-8eb3-430c-8388-9be3ea930d48",
        precio: "$1253.45",
        aerolinea: "Corkery LLC",
        n_escalas: 3,
        duracion: 25,
        ciudad_origen: "Cruz de los Milagros",
        ciudad_destino: "Kalapagada",
        hora_salida: "8:28 AM",
        hora_llegada: "6:40 AM",
      },
      {
        id: "58286b81-88ad-425c-a990-471a5dac0bcf",
        precio: "$2171.92",
        aerolinea: "Skiles, Murray and Bayer",
        n_escalas: 5,
        duracion: 36,
        ciudad_origen: "Sabana Grande de Boyá",
        ciudad_destino: "Waikambila",
        hora_salida: "9:47 PM",
        hora_llegada: "11:40 AM",
      },
      {
        id: "1b99340b-3252-4adb-b911-b904af4bc0d6",
        precio: "$758.69",
        aerolinea: "Kub, Steuber and Swift",
        n_escalas: 5,
        duracion: 34,
        ciudad_origen: "Srokowo",
        ciudad_destino: "Liangjing",
        hora_salida: "9:59 AM",
        hora_llegada: "1:31 AM",
      },
      {
        id: "7fc030cd-447d-4b86-a7bc-802f03e42f08",
        precio: "$864.97",
        aerolinea: "King Inc",
        n_escalas: 5,
        duracion: 35,
        ciudad_origen: "Xubu",
        ciudad_destino: "Semënovskoye",
        hora_salida: "1:23 AM",
        hora_llegada: "7:43 AM",
      },
      {
        id: "6cf58983-3ac4-4fea-854f-c316d9107654",
        precio: "$955.54",
        aerolinea: "Nicolas-Oberbrunner",
        n_escalas: 4,
        duracion: 27,
        ciudad_origen: "Padaan",
        ciudad_destino: "Truskavets",
        hora_salida: "4:57 PM",
        hora_llegada: "9:54 AM",
      },
      {
        id: "ef69107c-8246-48c4-941c-c0d9c585f043",
        precio: "$605.94",
        aerolinea: "D'Amore-Fadel",
        n_escalas: 5,
        duracion: 17,
        ciudad_origen: "København",
        ciudad_destino: "Kattaqo’rg’on",
        hora_salida: "11:54 PM",
        hora_llegada: "6:43 PM",
      },
      {
        id: "52462c94-1dfc-4f73-afa7-f59194f43c62",
        precio: "$1161.69",
        aerolinea: "Rau, Sanford and Pagac",
        n_escalas: 2,
        duracion: 39,
        ciudad_origen: "Youkounkoun",
        ciudad_destino: "Krynki",
        hora_salida: "10:29 PM",
        hora_llegada: "12:18 PM",
      },
      {
        id: "f6171750-7c8a-43ac-99ff-193b0ce5c79a",
        precio: "$1701.44",
        aerolinea: "Nolan, Hauck and Feeney",
        n_escalas: 2,
        duracion: 36,
        ciudad_origen: "Dayong",
        ciudad_destino: "Sarangmeduro",
        hora_salida: "11:42 AM",
        hora_llegada: "7:09 PM",
      },
      {
        id: "57c77c6d-c692-43d5-8210-b052363d4b2b",
        precio: "$467.55",
        aerolinea: "Klocko, Wyman and Volkman",
        n_escalas: 1,
        duracion: 33,
        ciudad_origen: "El Cantón de San Pablo",
        ciudad_destino: "Lençóis Paulista",
        hora_salida: "3:21 AM",
        hora_llegada: "3:31 AM",
      },
      {
        id: "40009e19-74c7-4b79-8a7a-223095c888b6",
        precio: "$1718.14",
        aerolinea: "Halvorson Group",
        n_escalas: 2,
        duracion: 27,
        ciudad_origen: "Dhahab",
        ciudad_destino: "Áyios Vasílios",
        hora_salida: "10:20 AM",
        hora_llegada: "5:45 PM",
      },
      {
        id: "4e2df917-8def-4101-9b7c-532bad4d394b",
        precio: "$1063.07",
        aerolinea: "Shields-Greenfelder",
        n_escalas: 4,
        duracion: 14,
        ciudad_origen: "Palaiseau",
        ciudad_destino: "Nueva Guinea",
        hora_salida: "10:47 PM",
        hora_llegada: "8:50 PM",
      },
      {
        id: "051a501d-11e5-4405-b20e-2522781acf76",
        precio: "$512.63",
        aerolinea: "Jones, Bode and Fritsch",
        n_escalas: 5,
        duracion: 8,
        ciudad_origen: "Arada",
        ciudad_destino: "Fyllingsdalen",
        hora_salida: "8:40 PM",
        hora_llegada: "11:03 PM",
      },
      {
        id: "d8b4e931-a1c6-41f2-98f6-32297745b8e4",
        precio: "$1697.41",
        aerolinea: "Davis-Yost",
        n_escalas: 5,
        duracion: 18,
        ciudad_origen: "Zhenlong",
        ciudad_destino: "Henglin",
        hora_salida: "7:10 AM",
        hora_llegada: "12:44 AM",
      },
      {
        id: "22d5e708-42ca-4f2d-b3b4-0132e0ea571d",
        precio: "$1491.81",
        aerolinea: "Emard, Little and Krajcik",
        n_escalas: 3,
        duracion: 13,
        ciudad_origen: "Taytayan",
        ciudad_destino: "Wincrange",
        hora_salida: "5:22 AM",
        hora_llegada: "3:25 PM",
      },
      {
        id: "5e31620c-cf47-476c-ab77-1b43507c11e7",
        precio: "$465.03",
        aerolinea: "Christiansen-Walter",
        n_escalas: 2,
        duracion: 40,
        ciudad_origen: "Keboireng",
        ciudad_destino: "Guankou",
        hora_salida: "1:50 PM",
        hora_llegada: "11:04 AM",
      },
    ],
  },

  mutations: {},

  actions: {},
};

export default moduleVuelos;
