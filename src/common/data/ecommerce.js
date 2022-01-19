import product1 from '../../assets/images/product/img-1.png'
import product2 from '../../assets/images/product/img-2.png'
import product3 from '../../assets/images/product/img-3.png'
import product4 from '../../assets/images/product/img-4.png'
import product5 from '../../assets/images/product/img-5.png'
import product6 from '../../assets/images/product/img-6.png'

import company1 from '../../assets/images/companies/img-1.png';
import company2 from '../../assets/images/companies/img-2.png';
import company3 from '../../assets/images/companies/img-3.png';
import company4 from '../../assets/images/companies/img-4.png';
import company5 from '../../assets/images/companies/img-5.png';
import company6 from '../../assets/images/companies/img-6.png';
import company7 from '../../assets/images/companies/img-7.png';
import company8 from '../../assets/images/companies/img-8.png';

const productsData = [
  {
    id: 1,
    image: product1,
    name: "Full sleeve T-shirt",
    extrades: "Blue color, T-shirt",
    description: "Lorem ipsum dolor sit consec te imperdiet iaculis ipsum..",
    date: "22/05/2017",
    oldprice: 0,
    newprice: 240,
    islable: true,
    lable: 'Trending',
    extraimgs :[product2,product3,product4],
    shortspecifications: ['Full Sleeve', 'Cotton', 'All Sizes available', '4 Different Color'],
    category: "T-shirts",
    reviews: 132,
    shortservices:[
      { icon: "mdi-sync", value: "10 Days Replacement" },
      { icon: "mdi-currency-usd-circle", value: "Cash on Delivery available" },
    ],
    colorOptions: [
      { image: product2, color: "Blue" },
      { image: product3, color: "Cyan" },
      { image: product4, color: "Green" },
    ],
    specification: [
      { type: "Category", value: "T-shirt" },
      { type: "Brand", value: "Jack & Jones" },
      { type: "Color", value: "Blue" },
      { type: "Material", value: "Cotton" },
      { type: "Weight", value: "140 Gm" },
    ],
  },
  {
    id: 2,
    image: product2,
    name: "Half sleeve T-shirt",
    extrades: "Half sleeve, T-shirt",
    description: "Lorem ipsum dolor sit consec te imperdiet iaculis ipsum..",
    date: "22/05/2017",
    oldprice: 240,
    newprice: 225,
    isOffer:true,
    offer:25,
    extraimgs :[product1,product3,product4],
    shortspecifications: ['Full Sleeve', 'Cotton', 'All Sizes available', '4 Different Color'],
    category: "T-shirts",
    reviews: 132,
    shortservices:[
      { icon: "mdi-sync", value: "10 Days Replacement" },
      { icon: "mdi-currency-usd-circle", value: "Cash on Delivery available" },
    ],
    colorOptions: [
      { image: product2, color: "Blue" },
      { image: product3, color: "Cyan" },
      { image: product4, color: "Green" },
    ],
    specification: [
      { type: "Category", value: "T-shirt" },
      { type: "Brand", value: "Jack & Jones" },
      { type: "Color", value: "Blue" },
      { type: "Material", value: "Cotton" },
      { type: "Weight", value: "140 Gm" },
    ],
  },
  {
    id: 3,
    image: product3,
    name: "Hoodie (Green)",
    extrades: "Green color, Hoodie",
    description: "Lorem ipsum dolor sit consec te imperdiet iaculis ipsum..",
    date: "22/05/2017",
    oldprice: 290,
    newprice: 275,
    islike:true,
    extraimgs :[product1,product2,product4],
    shortspecifications: ['Full Sleeve', 'Cotton', 'All Sizes available', '4 Different Color'],
    category: "T-shirts",
    reviews: 132,
    shortservices:[
      { icon: "mdi-sync", value: "10 Days Replacement" },
      { icon: "mdi-currency-usd-circle", value: "Cash on Delivery available" },
    ],
    colorOptions: [
      { image: product2, color: "Blue" },
      { image: product3, color: "Cyan" },
      { image: product4, color: "Green" },
    ],
    specification: [
      { type: "Category", value: "T-shirt" },
      { type: "Brand", value: "Jack & Jones" },
      { type: "Color", value: "Blue" },
      { type: "Material", value: "Cotton" },
      { type: "Weight", value: "140 Gm" },
    ],
  },
  {
    id: 4,
    image: product4,
    name: "Full sleeve T-shirt",
    extrades: "Blue color, T-shirt",
    description: "Lorem ipsum dolor sit consec te imperdiet iaculis ipsum..",
    date: "22/05/2017",
    oldprice: 290,
    newprice: 275,
    extraimgs :[product1,product2,product3],
    shortspecifications: ['Full Sleeve', 'Cotton', 'All Sizes available', '4 Different Color'],
    category: "T-shirts",
    reviews: 132,
    shortservices:[
      { icon: "mdi-sync", value: "10 Days Replacement" },
      { icon: "mdi-currency-usd-circle", value: "Cash on Delivery available" },
    ],
    colorOptions: [
      { image: product2,color: "Blue" },
      { image: product3,color: "Cyan" },
      { image: product4,color: "Green" },
    ],
    specification: [
      { type: "Category", value: "T-shirt" },
      { type: "Brand", value: "Jack & Jones" },
      { type: "Color", value: "Blue" },
      { type: "Material", value: "Cotton" },
      { type: "Weight", value: "140 Gm" },
    ],
  },
  {
    id: 5,
    image: product5,
    name: "Hoodie (Green)",
    extrades: "Gray color, Hoodie",
    description: "Lorem ipsum dolor sit consec te imperdiet iaculis ipsum..",
    date: "22/05/2017",
    oldprice: 290,
    newprice: 275,
    islike:true,
    extraimgs :[product5,product2,product3],
    shortspecifications: ['Full Sleeve', 'Cotton', 'All Sizes available', '4 Different Color'],
    category: "T-shirts",
    reviews: 132,
    shortservices:[
      { icon: "mdi-sync", value: "10 Days Replacement" },
      { icon: "mdi-currency-usd-circle", value: "Cash on Delivery available" },
    ],
    colorOptions: [
      { image: product2, color: "Blue" },
      { image: product3, color: "Cyan" },
      { image: product4, color: "Green" },
    ],
    specification: [
      { type: "Category", value: "T-shirt" },
      { type: "Brand", value: "Jack & Jones" },
      { type: "Color", value: "Blue" },
      { type: "Material", value: "Cotton" },
      { type: "Weight", value: "140 Gm" },
    ],
  },
  {
    id: 7,
    image: product6,
    name: "Full sleeve T-shirt",
    extrades: "Blue color, T-shirt",
    description: "Lorem ipsum dolor sit consec te imperdiet iaculis ipsum..",
    date: "22/05/2017",
    oldprice: 242,
    newprice: 0,
    extraimgs :[product6,product4,product3],
    shortspecifications: ['Full Sleeve', 'Cotton', 'All Sizes available', '4 Different Color'],
    category: "T-shirts",
    reviews: 132,
    shortservices:[
      { icon: "mdi-sync", value: "10 Days Replacement" },
      { icon: "mdi-currency-usd-circle", value: "Cash on Delivery available" },
    ],
    colorOptions: [
      { image: product2, color: "Blue" },
      { image: product3, color: "Cyan" },
      { image: product4, color: "Green" },
    ],
    specification: [
      { type: "Category", value: "T-shirt" },
      { type: "Brand", value: "Jack & Jones" },
      { type: "Color", value: "Blue" },
      { type: "Material", value: "Cotton" },
      { type: "Weight", value: "140 Gm" },
    ],
  },
  {
    id: 1,
    image: product1,
    name: "Half sleeve T-shirt",
    extrades: "Black color, T-shirt",
    description: "Lorem ipsum dolor sit consec te imperdiet iaculis ipsum..",
    date: "22/05/2017",
    oldprice: 240,
    newprice: 225,
    extraimgs :[product2,product4,product3],
    shortspecifications: ['Full Sleeve', 'Cotton', 'All Sizes available', '4 Different Color'],
    category: "T-shirts",
    reviews: 132,
    shortservices:[
      { icon: "mdi-sync", value: "10 Days Replacement" },
      { icon: "mdi-currency-usd-circle", value: "Cash on Delivery available" },
    ],
    colorOptions: [
      { image: product2, color: "Blue" },
      { image: product3, color: "Cyan" },
      { image: product4, color: "Green" },
    ],
    specification: [
      { type: "Category", value: "T-shirt" },
      { type: "Brand", value: "Jack & Jones" },
      { type: "Color", value: "Blue" },
      { type: "Material", value: "Cotton" },
      { type: "Weight", value: "140 Gm" },
    ],
  }
]

const recentProducts = [
  {
    id: 1,
    img: "img7",
    name: "Wirless Headphone",
    link: "",
    rating: 4,
    oldPrice: 240,
    newPrice: 225,
  },
  {
    id: 2,
    img: "img4",
    name: "Phone patterned cases",
    link: "",
    rating: 3,
    oldPrice: 150,
    newPrice: 145,
  },
  {
    id: 3,
    img: "img6",
    name: "Phone Dark Patterned cases",
    link: "",
    rating: 4,
    oldPrice: 138,
    newPrice: 135,
  },
]

const comments = [
  {
    id: 1,
    name: "James",
    description:
      "To an English person, it will seem like simplified English, as a skeptical Cambridge",
    date: "11 Feb, 2020",
  },
  {
    id: 2,
    name: "David",
    description:
      "Everyone realizes why a new common language would be desirable",
    date: "22 Jan, 2020",
  },
  {
    id: 3,
    name: "Scott",
    description:
      "If several languages coalesce, the grammar of the resulting",
    date: "04 Jan, 2020",
  },
]

const discountData = [
  { label: "Less than 10%", value: 0 },
  { label: "10% or more", value: 10 },
  { label: "20% or more", value: 20 },
  { label: "30% or more", value: 30 },
  { label: "40% or more", value: 40 },
  { label: "50% or more", value: 50 },
]

const orders = [
  {
    did: "1",
    name: "Satis - Merkez",
    branchName: "Merkez",
  },
  {
    did: "2",
    name: "Satis - Ankara Sube",
    branchName: "Ankara",
  },
  {
    did: "3",
    name: "Muhasebe - Ankara Sube",
    branchName: "Ankara",
  },
]

const orders2 = [
  {
    bid: "1",
    name: "Merkez sube",
    employeeName: "Ali Veli Candan",
    email: "merkez@crmdemo.com",
    city: "Istanbul",
    phone: "02122122112",
  },
  {
    bid: "2",
    name: "Merkez sube",
    employeeName: "Ali Veli Candan",
    email: "merkez@crmdemo.com",
    city: "Istanbul",
    phone: "02122122112",
  },
  {
    bid: "3",
    name: "Merkez sube",
    employeeName: "Ali Veli Candan",
    email: "merkez@crmdemo.com",
    city: "Istanbul",
    phone: "02122122112",
  },
]

const cartData = {
  products: [
    {
      id: 1,
      img: product1,
      name: "Full sleeve T-shirt",
      color: "Blue",
      price: "240",
      data_attr: 2,
      total: 480,
    },
    {
      id: 2,
      img: product2,
      name: "Half sleeve T-shirt",
      color: "Red",
      price: "225",
      data_attr: 1,
      total: 225,
    },
    {
      id: 3,
      img: product3,
      name: "Hoodie (Green)",
      color: "Green",
      price: "275",
      data_attr: 2,
      total: 550,
    },
    {
      id: 4,
      img: product4,
      name: "Hoodie (Gray)",
      color: "Gray",
      price: "275",
      data_attr: 1,
      total: 275,
    },
  ],
  orderSummary: {
    grandTotal: "$ 1,857",
    discount: "$ 157",
    shippingCharge: "$ 25",
    estimatedTax: "$ 19.22",
    total: "$ 1744.22",
  },
}

const customerData = [
  {
    cid: "1",
    name: "Irfan",
    surname: "Arslan",
    employeeID: "Duygu Dündar",
    status: "Takip",
    dataSource: "ReklamData",
    lastNoteDate: "05.01.2020",
    lastNode: "Görüşüldü, randevu alındı",
  },
  {
    cid: "2",
    name: "Murat",
    surname: "Erkan",
    employeeID: "Duygu Dündar",
    status: "Takip",
    dataSource: "ReklamData",
    lastNoteDate: "05.01.2020",
    lastNode: "Görüşüldü, randevu alındı",
  },
    
  {cid: "1", name: "Arif", surname:"Kuşbudu",employeeID: "Duygu Dündar", status: "Takip", dataSource: "ReklamData", lastNoteDate: "05.01.2020", lastNode: "Görüşüldü, randevu alındı"},
  {cid: "1", name: "Dickone", surname:"Kraikue",employeeID: "Duygu Dündar", status: "Takip", dataSource: "ReklamData", lastNoteDate: "05.01.2020", lastNode: "Görüşüldü, randevu alındı"},
  {cid: "1", name: "servet", surname:"Kaplan",employeeID: "Duygu Dündar", status: "Takip", dataSource: "ReklamData", lastNoteDate: "05.01.2020", lastNode: "Görüşüldü, randevu alındı"},
  {cid: "1", name: "Emre", surname:"Toprak",employeeID: "Duygu Dündar", status: "Takip", dataSource: "ReklamData", lastNoteDate: "05.01.2020", lastNode: "Görüşüldü, randevu alındı"},
  {cid: "1", name: "Anıl", surname:"Kurt",employeeID: "Duygu Dündar", status: "Takip", dataSource: "ReklamData", lastNoteDate: "05.01.2020", lastNode: "Görüşüldü, randevu alındı"},
  {cid: "1", name: "Şeref", surname:"Damar",employeeID: "Duygu Dündar", status: "Takip", dataSource: "ReklamData", lastNoteDate: "05.01.2020", lastNode: "Görüşüldü, randevu alındı"},
  {cid: "1", name: "Ekrem", surname:"Mehmet",employeeID: "Duygu Dündar", status: "Takip", dataSource: "ReklamData", lastNoteDate: "05.01.2020", lastNode: "Görüşüldü, randevu alındı"},
  {cid: "1", name: "Kayahan", surname:"Bayram",employeeID: "Duygu Dündar", status: "Takip", dataSource: "ReklamData", lastNoteDate: "05.01.2020", lastNode: "Görüşüldü, randevu alındı"},
  {cid: "1", name: "Seyit Ahmet", surname:"Kaplan",employeeID: "Duygu Dündar", status: "Takip", dataSource: "ReklamData", lastNoteDate: "05.01.2020", lastNode: "Görüşüldü, randevu alındı"},
  {cid: "1", name: "Mert", surname:"Karaman",employeeID: "Duygu Dündar", status: "Takip", dataSource: "ReklamData", lastNoteDate: "05.01.2020", lastNode: "Görüşüldü, randevu alındı"},
  {cid: "1", name: "Ramazan", surname:"Gul",employeeID: "Duygu Dündar", status: "Takip", dataSource: "ReklamData", lastNoteDate: "05.01.2020", lastNode: "Görüşüldü, randevu alındı"},
  {cid: "1", name: "Hidayet", surname:"Dalkın",employeeID: "Duygu Dündar", status: "Takip", dataSource: "ReklamData", lastNoteDate: "05.01.2020", lastNode: "Görüşüldü, randevu alındı"},
  {cid: "1", name: "Mahmut", surname:"Kaya",employeeID: "Duygu Dündar", status: "Takip", dataSource: "ReklamData", lastNoteDate: "05.01.2020", lastNode: "Görüşüldü, randevu alındı"},
  {cid: "1", name: "Mert", surname:"Yüksel",employeeID: "Duygu Dündar", status: "Takip", dataSource: "ReklamData", lastNoteDate: "05.01.2020", lastNode: "Görüşüldü, randevu alındı"},
  {cid: "1", name: "Sinan", surname:"Ince",employeeID: "Duygu Dündar", status: "Takip", dataSource: "ReklamData", lastNoteDate: "05.01.2020", lastNode: "Görüşüldü, randevu alındı"},
  {cid: "1", name: "Abdurrhman", surname:"Çiftci",employeeID: "Duygu Dündar", status: "Takip", dataSource: "ReklamData", lastNoteDate: "05.01.2020", lastNode: "Görüşüldü, randevu alındı"},
  {cid: "1", name: "Özkan", surname:"Çay",employeeID: "Duygu Dündar", status: "Takip", dataSource: "ReklamData", lastNoteDate: "05.01.2020", lastNode: "Görüşüldü, randevu alındı"},
  {cid: "1", name: "Yıldırım", surname:"Akpınar",employeeID: "Duygu Dündar", status: "Takip", dataSource: "ReklamData", lastNoteDate: "05.01.2020", lastNode: "Görüşüldü, randevu alındı"},
  {cid: "1", name: "Abdellh", surname:"Cao",employeeID: "Duygu Dündar", status: "Takip", dataSource: "ReklamData", lastNoteDate: "05.01.2020", lastNode: "Görüşüldü, randevu alındı"},
  {cid: "1", name: "Mert", surname:"Bağcı",employeeID: "Duygu Dündar", status: "Takip", dataSource: "ReklamData", lastNoteDate: "05.01.2020", lastNode: "Görüşüldü, randevu alındı"},
  {cid: "1", name: "Ali", surname:"Altındaş",employeeID: "Duygu Dündar", status: "Takip", dataSource: "ReklamData", lastNoteDate: "05.01.2020", lastNode: "Görüşüldü, randevu alındı"},
]

const shops = [
  {
    id: 1,
    img : company1, 
    name: "Nedick's",
    author: 'Wayne McClain',
    product: 86,
    balance: "12,456"
  },
  {
    id: 2,
    img : company2, 
    author: "David Marshall",
    name: "Brendle's",
    product: 72,
    balance: "10,352",
    profileLink: "#",
  },
  {
    id: 3,
    img : company3, 
    author: "Katia Stapleton",
    name: "Tech Hifi",
    product: 75,
    balance: "9,963",
    profileLink: "#",
  },
  {
    id: 4,
    img : company4, 
    author: "Andrew Bivens",
    name: "Lafayette",
    product: 65,
    balance: "14,568",
    profileLink: "#",
  },
  {
    id: 5,
    img : company5, 
    author: "Mae Rankin",
    name: "Packer",
    product: 82,
    balance: "16,445",
    profileLink: "#",
  },
  {
    id: 6,
    img : company6, 
    author: "Brian Correa",
    name: "Micro Design",
    product: 71,
    balance: "11,523",
    profileLink: "#",
  },
  {
    id: 7,
    img : company7, 
    author: "Dean Odom",
    name: "Keeney's",
    product: 66,
    balance: "13,478",
    profileLink: "#",
  },
  {
    id: 8,
    img : company8, 
    author: "John McLeroy",
    name: "Tech Hifi",
    product: 58,
    balance: "14,654",
    profileLink: "#",
  }
]

export {
  productsData,
  recentProducts,
  comments,
  discountData,
  orders,
  orders2,
  shops,
  customerData,
  cartData,
}
