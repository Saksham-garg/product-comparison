import { type Product } from "@models/product";

export const products: Product[] = [
  {
    id: 1,
    name: "iPhone 14",
    brand: "Apple",
    image:
      "https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?w=640&h=480&fit=crop",
    price: "$999",
    features: ['6.1" Display', "3200mAh Battery", "128GB Storage"],
  },
  {
    id: 2,
    name: "Samsung Galaxy S22",
    brand: "Samsung",
    image:
      "https://images.unsplash.com/photo-1646753522408-077ef9839300?w=640&h=480&fit=crop",
    price: "$799",
    features: ['6.1" Display', "3700mAh Battery", "128GB Storage"],
  },
  {
    id: 3,
    name: 'MacBook Pro 16"',
    brand: "Apple",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=640&h=480&fit=crop",
    price: "$2499",
    features: ['16" Retina Display', "100Wh Battery", "1TB SSD Storage"],
  },
  {
    id: 4,
    name: "Sony WH-1000XM5",
    brand: "Sony",
    image:
      "https://static.bhphoto.com/images/images500x500/1653064329_1750974.jpg",
    price: "$399",
    features: ["Over-Ear", "Noise Cancellation", "30h Battery Life"],
  },
  {
    id: 5,
    name: "Apple Watch Series 8",
    brand: "Apple",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQDY3ref_VW_34FR+watch-49-titanium-ultra_VW_34FR_WF_CO+watch-face-49-alpine-ultra_VW_34FR_WF_CO_GEO_GB?wid=1400&hei=1400&trim=1,0&fmt=p-jpg&qlt=95&.v=1660713657930,1660927566964,1660927662754",
    price: "$499",
    features: ["Always-On Display", "Heart Rate Monitor", "GPS + Cellular"],
  },
  {
    id: 6,
    name: "Canon DSLR Camera",
    brand: "Canon",
    image:
      "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?w=640&h=480&fit=crop",
    price: "$899",
    features: ["24.1MP Sensor", "Full HD Video", "18-55mm Lens Kit"],
  },
];
