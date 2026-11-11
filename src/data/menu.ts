import menuSeed from './menu-seed.json';

export interface MenuItemVariant {
  label: string;
  price: number;
}

export interface MenuItem {
  name: string;
  price?: number;
  prices?: number[];
  charcoal?: number[];
  variants?: MenuItemVariant[];
  priceNote?: string;
  serves?: string;
  badge?: string;
  group?: string;
  note?: string;
  description?: string;
  image?: string;
  featured?: boolean;
}

export interface MenuCategory {
  slug: string;
  title: string;
  intro?: string;
  sized?: boolean;
  items: MenuItem[];
}

export interface BranchesData {
  kerala: string[];
  tamilNadu: string[];
  uae: string[];
  openingShortly: string[];
}

export interface MenuData {
  sizeLabels: string[];
  categories: MenuCategory[];
  branches: BranchesData;
}

export const menuData: MenuData = menuSeed as MenuData;

// Get the 4 featured signature dishes for the homepage rail (per brief requirement: Mutton Mandi, Fil Fil Mazbi, Gochu Mazbi, Honey Chilli Mazbi)
export const signatureDishes: MenuItem[] = [
  {
    name: "Mutton Mandi Haneeth",
    description: "Succulent mutton slow-cooked underground until fall-apart tender, served over aromatic basmati rice infused with whole spices and dry lime.",
    prices: [1890, 830],
    badge: "Most Celebrated",
    image: "/images/dishes/mutton-mandi.jpg",
    featured: true,
  },
  {
    name: "Fil Fil Mazbi",
    description: "Charcoal flame-grilled chicken marinated in fiery green chillies and Arabian herbs, finished with a smoky pepper glaze.",
    prices: [985, 500, 265],
    charcoal: [665, 345, 195],
    badge: "Signature Spicy",
    image: "/images/dishes/fil-fil-mazbi.jpg",
    featured: true,
  },
  {
    name: "Gochu Mazbi",
    description: "The bold fusion of Korean gochujang heat and traditional charcoal smoke, glazed over crisp-skin grilled chicken.",
    prices: [985, 500, 265],
    charcoal: [665, 345, 195],
    badge: "Arabian Twist",
    image: "/images/dishes/gochu-mazbi.jpg",
    featured: true,
  },
  {
    name: "Honey Chilli Mazbi",
    description: "Flame-kissed chicken bathed in pure wildflower honey and crushed chilli flakes, creating a harmonious sweet and fiery finish.",
    prices: [985, 500, 265],
    charcoal: [665, 345, 195],
    badge: "House Favorite",
    image: "/images/dishes/honey-mazbi.jpg",
    featured: true,
  },
];
