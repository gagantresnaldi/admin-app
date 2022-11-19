export const SIDEBAR_LINK = [
  {
    title: "Product",
    items: [
      { name: "Harga", icon: "dashboard" },
      { name: "Kategori", icon: "box" },
      { name: "Product Listing", icon: "price" },
    ],
  },
  {
    title: "Marketing",
    items: [
      { name: "Banner", icon: "dashboard" },
      { name: "Promo Produk", icon: "box" },
      { name: "Voucher", icon: "price" },
    ],
  },
  {
    title: "Toko",
    items: [
      { name: "Zona", icon: "dashboard" },
      { name: "Geofencing", icon: "dashboard" },
      { name: "Akun Toko", icon: "dashboard", active: "true" },
      { name: "Membership Toko", icon: "price" },
      {
        name: "Stock",
        icon: "box",
        child: ["Banner", "Diskon", "Promo"],
      },
      { name: "Human Resource", icon: "price" },
    ],
  },
  {
    title: "Driver",
    items: [
      { name: "Akun Driver", icon: "dashboard" },
      { name: "Aktifitas Order", icon: "box" },
    ],
  },
  {
    title: "Pengguna",
    items: [
      { name: "Akun Pengguna", icon: "dashboard" },
      {
        name: "Membership Pengguna",
        icon: "box",
      },
    ],
  },
  {
    title: "Customer Service",
    items: [
      { name: "Komplain", icon: "dashboard" },
      { name: "Aktifitas Order", icon: "box" },
    ],
  },
];

export const OUTLET_BARU = {
  title: "Outlet Baru",
  fields: {
    left: "Nama Outlet",
    right: "Tanggal Daftar",
  },
  items: [
    { name: "Toko ABC", location: "Bandung", right: "2 Juni 2022" },
    { name: "Toko ABC", location: "Jakarta", right: "2 Juni 2022" },
    { name: "Toko ABC", location: "Solo", right: "2 Juni 2022" },
    { name: "Toko ABC", location: "Semarang", right: "2 Juni 2022" },
    { name: "Toko ABC", location: "Bandung", right: "2 Juni 2022" },
    { name: "Toko ABC", location: "Bandung", right: "2 Juni 2022" },
  ],
};

export const OUTLET_LARIS = {
  title: "Outlet Baru",
  fields: {
    left: "Nama Outlet",
    right: "Pendapatan",
  },
  items: [
    { name: "Toko ABC", location: "Bandung", right: "Rp. 20.000.000" },
    { name: "Toko ABC", location: "Jakarta", right: "Rp. 17.000.000" },
    { name: "Toko ABC", location: "Solo", right: "Rp. 12.500.000" },
    { name: "Toko ABC", location: "Semarang", right: "Rp. 11.500.000" },
    { name: "Toko ABC", location: "Bandung", right: "Rp. 10.000.000" },
    { name: "Toko ABC", location: "Bandung", right: "Rp. 9.000.000" },
  ],
};

export const TABLE_FIELDS = [
  "No",
  "Nama Outlet",
  "Nama Pemilik",
  "Jumlah Transaksi",
  "Lokasi",
  "Tanggal Daftar",
  "Pendapatan",
  "Action",
];

export const TABLE_ITEMS = [
  {
    outlet: "Toko 1",
    owner: "Floyd Miles",
    transactions: "23",
    location: "Bandung",
    date: "2 Juni 2022",
    omzet: "Rp. 20.000.000",
  },
  {
    outlet: "Toko 2",
    owner: "Robert Fox",
    transactions: "12",
    location: "Jakarta",
    date: "2 Juni 2022",
    omzet: "Rp. 20.000.000",
  },
  {
    outlet: "Toko 3",
    owner: "Courtney Henry",
    transactions: "31",
    location: "Solo",
    date: "2 Juni 2022",
    omzet: "Rp. 20.000.000",
  },
  {
    outlet: "Toko 4",
    owner: "Artene McCoy",
    transactions: "24",
    location: "Semarang",
    date: "2 Juni 2022",
    omzet: "Rp. 20.000.000",
  },
  {
    outlet: "Toko 5",
    owner: "Anette Black",
    transactions: "12",
    location: "Bandung",
    date: "2 Juni 2022",
    omzet: "Rp. 20.000.000",
  },
];

export const CHART_DATA = [
  {
    name: "jan",
    uv: 4,
    outlet: 4,
    amt: 4,
  },
  {
    name: "Feb",
    uv: 5,
    outlet: 5,
    amt: 5,
  },
  {
    name: "Mar",
    uv: 6,
    outlet: 6,
    amt: 6,
  },
  {
    name: "Apr",
    uv: 7,
    outlet: 7,
    amt: 7,
  },
  {
    name: "May",
    uv: 6,
    outlet: 6,
    amt: 6,
  },
  {
    name: "Jun",
    uv: 5,
    outlet: 5,
    amt: 5,
  },
  {
    name: "Jul",
    uv: 6,
    outlet: 6,
    amt: 6,
  },
  {
    name: "Aug",
    uv: 5,
    outlet: 5,
    amt: 5,
  },
  {
    name: "Sep",
    uv: 3,
    outlet: 3,
    amt: 3,
  },
  {
    name: "Oct",
    uv: 4,
    outlet: 4,
    amt: 4,
  },
  {
    name: "Nov",
    uv: 6,
    outlet: 6,
    amt: 6,
  },
  {
    name: "Dec",
    uv: 7,
    outlet: 7,
    amt: 7,
  },
];
