export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: 'Starters' | 'Mains' | 'Breads' | 'Desserts' | 'Beverages';
  samplePrice: number;
  dietary: string[];
  spiceLevel: 0 | 1 | 2 | 3;
  pairingNote?: string;
  ingredients?: string[];
  isFeatured?: boolean;
  image?: string;
}

export interface OpeningHourDay {
  day: string;
  lunch: string;
  dinner: string;
  isOpen: boolean;
}

export const RESTAURANT_INFO = {
  name: "Ember & Spice",
  tagline: "Good food. Good reasons to stay.",
  subtext: "A contemporary dining concept bringing bold flavours and warm hospitality.",
  disclaimer: "Fictional portfolio demonstration. All menus, prices, and locations are illustrative demos. No real bookings or food service provided.",
  address: {
    street: "48 Hearthstone Lane",
    quarter: "The Foundry Arts District",
    city: "Metropolis, MP 90210",
    full: "48 Hearthstone Lane, The Foundry Arts District, Metropolis",
    crossStreets: "Between Ember Way & Ironwood Boulevard",
    parkingNote: "Complimentary valet available at the Hearthstone entrance from 17:00. Metered street parking along Ember Way.",
    transitNote: "3-minute walk from Foundry District Metro Station (Blue & Amber lines, Exit C)."
  },
  contact: {
    phone: "+1 (555) 019-3829",
    phoneDisplay: "(555) 019-3829 (Demo Line)",
    email: "enquiries@emberandspice-demo.internal",
    pressEmail: "press@emberandspice-demo.internal",
    eventsEmail: "private-dining@emberandspice-demo.internal",
  },
  hours: [
    { day: "Monday – Thursday", lunch: "12:00 – 15:00", dinner: "17:30 – 22:30", isOpen: true },
    { day: "Friday", lunch: "12:00 – 15:00", dinner: "17:30 – 23:30", isOpen: true },
    { day: "Saturday", lunch: "12:30 – 15:30", dinner: "17:00 – 23:30", isOpen: true },
    { day: "Sunday", lunch: "12:00 – 16:00 (Brunch)", dinner: "17:30 – 21:30", isOpen: true }
  ] as OpeningHourDay[],
  kitchenLastCall: "Kitchen accepts last food orders 45 minutes before closing."
};

export const MENU_ITEMS: MenuItem[] = [
  // STARTERS
  {
    id: "str-1",
    name: "Hearth-Blistered Charred Octopus",
    category: "Starters",
    samplePrice: 21,
    description: "Tender tentacle slow-braised then crisped over applewood embers, smoked chili and saffron emulsion, pickled shallots, micro cilantro.",
    dietary: ["Gluten-Free", "Wood-Fired", "Chef Signature"],
    spiceLevel: 2,
    pairingNote: "Pairs with crisp volcanic minerality whites",
    ingredients: ["Spanish octopus", "smoked kashmiri chili", "saffron emulsion", "charred lime", "pickled shallots"],
    isFeatured: true,
    image: "/images/dish_charred_octopus_1790713022381.jpg"
  },
  {
    id: "str-2",
    name: "Coal-Roasted Bone Marrow & Roti",
    category: "Starters",
    samplePrice: 19,
    description: "Split beef bones roasted over glowing coals with toasted fenugreek, coriander gremolata, pickled onions, served with warm layered paratha.",
    dietary: ["Wood-Fired"],
    spiceLevel: 1,
    pairingNote: "Ember Old Fashioned with charred orange",
    ingredients: ["Grass-fed beef marrow", "toasted fenugreek", "garlic gremolata", "house pickled red onions"],
    isFeatured: false
  },
  {
    id: "str-3",
    name: "Smoked Burrata & Charred Peaches",
    category: "Starters",
    samplePrice: 18,
    description: "Handcrafted burrata cold-smoked over hickory, coal-blistered stone fruit, spiced hot honey, toasted cumin seed oil, wild watercress.",
    dietary: ["Vegetarian", "Gluten-Free Friendly"],
    spiceLevel: 1,
    pairingNote: "Sparkling natural pet-nat",
    ingredients: ["Artisan burrata", "summer peaches", "chili wildflower honey", "cumin oil", "watercress"],
    isFeatured: false
  },
  {
    id: "str-4",
    name: "Gunpowder Spiced Crispy Calamari",
    category: "Starters",
    samplePrice: 17,
    description: "Flash-fried tender squid tossed in roasted lentil and dry red chili powder, curry leaf crisp, lime leaf aioli.",
    dietary: ["Dairy-Free"],
    spiceLevel: 2,
    pairingNote: "Hazy pale ale or citrus highball",
    ingredients: ["Fresh squid", "south indian gunpowder spices", "fried curry leaves", "kaffir lime aioli"],
    isFeatured: false
  },
  {
    id: "str-5",
    name: "Charred Beetroot Tartare",
    category: "Starters",
    samplePrice: 16,
    description: "Salt-crusted and ember-roasted heritage beets, whipped sheep curd, smoked walnuts, nigella seed crackers.",
    dietary: ["Vegetarian", "Gluten-Free Friendly"],
    spiceLevel: 0,
    pairingNote: "Light chilled Gamay",
    ingredients: ["Golden and ruby beets", "sheep milk curd", "black nigella seeds", "smoked walnut oil"],
    isFeatured: false
  },

  // MAINS
  {
    id: "main-1",
    name: "Charred Ribeye with Smoky Cumin Glaze",
    category: "Mains",
    samplePrice: 46,
    description: "45-day dry-aged prime beef seared over white oak embers, roasted garlic & bone jus, charred blistered shishito peppers, smoked sea salt flakes.",
    dietary: ["Gluten-Free", "Wood-Fired", "Chef Signature"],
    spiceLevel: 1,
    pairingNote: "Full-bodied Syrah or smoked peppercorn red",
    ingredients: ["Dry-aged prime ribeye (340g)", "roasted cumin glaze", "shishito peppers", "bone marrow reduction"],
    isFeatured: true,
    image: "/images/hero_ember_dining_1790713003383.jpg"
  },
  {
    id: "main-2",
    name: "Tandoor-Roasted Spiced Sea Bass",
    category: "Mains",
    samplePrice: 38,
    description: "Whole boneless Mediterranean sea bass rubbed with yellow chili, crushed ginger and mustard oil, wrapped in banana leaf and charred in the hearth.",
    dietary: ["Gluten-Free", "Dairy-Free", "Wood-Fired"],
    spiceLevel: 2,
    pairingNote: "Dry German Riesling",
    ingredients: ["Mediterranean sea bass", "yellow mustard marinade", "crushed green chili", "curry oil"],
    isFeatured: false
  },
  {
    id: "main-3",
    name: "Slow-Smoked Black Cardamom Lamb Shank",
    category: "Mains",
    samplePrice: 42,
    description: "Braised for 14 hours in an earthen pot with caramelized shallots, black cardamom pods, saffron threads, and marrow broth. Falls off the bone.",
    dietary: ["Gluten-Free"],
    spiceLevel: 2,
    pairingNote: "Aged Rioja Reserva",
    ingredients: ["Free-range lamb shank", "black cardamom", "saffron broth", "crispy shallots"],
    isFeatured: false
  },
  {
    id: "main-4",
    name: "24-Hour Smoked Dal Makhani",
    category: "Mains",
    samplePrice: 26,
    description: "Black urad lentils and kidney beans simmered overnight on the hearth coals with cultured butter, vine tomatoes, and toasted dried fenugreek.",
    dietary: ["Vegetarian", "Gluten-Free", "Chef Signature"],
    spiceLevel: 1,
    pairingNote: "Smoked Amber Lager or rich Chardonnay",
    ingredients: ["Black urad lentils", "churned cultured butter", "smoked San Marzano tomatoes", "wild kasoori methi"],
    isFeatured: true,
    image: "/images/dish_black_dal_bread_1790713035851.jpg"
  },
  {
    id: "main-5",
    name: "Charred Maitake & Fire-Roasted Squash",
    category: "Mains",
    samplePrice: 28,
    description: "Clusters of maitake mushrooms crisped over direct fire, served atop velvet butternut squash curry, toasted pumpkin seed praline, and herb oil.",
    dietary: ["Vegan", "Gluten-Free", "Wood-Fired"],
    spiceLevel: 1,
    pairingNote: "Pinot Noir or spiced ginger cider",
    ingredients: ["Wild maitake mushrooms", "roasted butternut squash", "coconut cream", "toasted pepitas"],
    isFeatured: false
  },

  // BREADS
  {
    id: "brd-1",
    name: "Garlic & Nigella Clay Oven Naan",
    category: "Breads",
    samplePrice: 7,
    description: "Hand-slapped dough blistered against the volcanic clay wall of our 800°F tandoor, brushed with cultured clarified butter and toasted nigella.",
    dietary: ["Vegetarian"],
    spiceLevel: 0,
    ingredients: ["Slow-fermented flour", "ghee", "toasted garlic chips", "nigella seeds"]
  },
  {
    id: "brd-2",
    name: "Smoked Cheddar & Green Chili Kulcha",
    category: "Breads",
    samplePrice: 9,
    description: "Layered flatbread stuffed with sharp aged cheddar, charred serrano peppers, and fresh cilantro, baked crisp over live embers.",
    dietary: ["Vegetarian"],
    spiceLevel: 2,
    ingredients: ["Aged cheddar", "charred serranos", "coriander", "unbleached artisan flour"]
  },
  {
    id: "brd-3",
    name: "Truffle & Wild Honey Roti",
    category: "Breads",
    samplePrice: 11,
    description: "Whole wheat unleavened hearth bread finished with Italian black truffle butter and a drizzle of thyme-infused raw mountain honey.",
    dietary: ["Vegetarian"],
    spiceLevel: 0,
    ingredients: ["Stone-ground whole wheat", "black truffle butter", "raw thyme honey", "maldon salt"]
  },
  {
    id: "brd-4",
    name: "Za'atar & Brown Butter Laccha Paratha",
    category: "Breads",
    samplePrice: 8,
    description: "Spiral-folded, flake-layered flatbread pan-seared with foaming nut-brown butter and freshly ground wild za'atar herbs.",
    dietary: ["Vegetarian"],
    spiceLevel: 0,
    ingredients: ["Artisan wheat", "brown butter", "wild za'atar thyme", "sumac", "toasted sesame"]
  },

  // DESSERTS
  {
    id: "dst-1",
    name: "Cardamom & Blood Orange Crème Brûlée",
    category: "Desserts",
    samplePrice: 15,
    description: "Velvety custard infused with whole green cardamom pods, cracked glass caramelized sugar, candied blood orange, and pistachio crumble.",
    dietary: ["Vegetarian", "Gluten-Free", "Chef Signature"],
    spiceLevel: 0,
    pairingNote: "Chilled single-estate sweet Muscat",
    ingredients: ["Organic heavy cream", "green cardamom pods", "blood orange compote", "sicilian pistachios"],
    isFeatured: true,
    image: "/images/dessert_spiced_creme_1790713059257.jpg"
  },
  {
    id: "dst-2",
    name: "Charred Pineapple & Coconut Sorbet",
    category: "Desserts",
    samplePrice: 14,
    description: "Rum-basted sugarloaf pineapple roasted on the hearth spit, star anise caramel, house-churned toasted coconut milk sorbet.",
    dietary: ["Vegan", "Gluten-Free", "Dairy-Free"],
    spiceLevel: 0,
    pairingNote: "Dark spiced rum digestif",
    ingredients: ["Spit-roasted pineapple", "star anise", "dark cane rum", "coconut cream"]
  },
  {
    id: "dst-3",
    name: "Dark Chocolate & Smoked Chili Tart",
    category: "Desserts",
    samplePrice: 16,
    description: "72% single-origin Valrhona ganache with a whisper of smoked ancho chili, sea salt shortcrust, espresso cream.",
    dietary: ["Vegetarian"],
    spiceLevel: 1,
    pairingNote: "Tawny 10-year Port",
    ingredients: ["72% dark chocolate", "ancho chili infusion", "french butter pastry", "double espresso cream"]
  },

  // BEVERAGES
  {
    id: "bev-1",
    name: "Smoked Rosemary & Blood Orange Old Fashioned",
    category: "Beverages",
    samplePrice: 17,
    description: "Zero-proof or crafted spirit base with smoked rosemary syrup, blood orange bitters, charred orange peel over crystal hand-cut ice.",
    dietary: ["Vegan", "Gluten-Free"],
    spiceLevel: 0,
    ingredients: ["Barrel-aged botanical blend", "charred rosemary", "blood orange essence", "angostura"]
  },
  {
    id: "bev-2",
    name: "Cardamom Hibiscus Sparkler",
    category: "Beverages",
    samplePrice: 12,
    description: "Brewed whole wild hibiscus flowers, cracked green cardamom, sparkling mineral water, cold-pressed lime juice, mint bouquet.",
    dietary: ["Vegan", "Non-Alcoholic"],
    spiceLevel: 0,
    ingredients: ["Wild dried hibiscus", "green cardamom elixir", "fresh lime", "effervescent soda"]
  },
  {
    id: "bev-3",
    name: "Charcoal Chai Highball",
    category: "Beverages",
    samplePrice: 14,
    description: "Slow-steeped Assam black tea with toasted cinnamon, clove, crushed ginger, clarified oat milk, poured over smoked rock ice.",
    dietary: ["Vegan", "Non-Alcoholic"],
    spiceLevel: 1,
    ingredients: ["Estate Assam tea", "fresh ginger", "ceylon cinnamon", "cloves", "clarified oat milk"]
  },
  {
    id: "bev-4",
    name: "Saffron & Turmeric Honey Tonic",
    category: "Beverages",
    samplePrice: 13,
    description: "Kashmiri saffron threads steeped with wild ginger root, organic turmeric, raw honey, and craft tonic with a sprig of burned sage.",
    dietary: ["Vegetarian", "Non-Alcoholic"],
    spiceLevel: 0,
    ingredients: ["Kashmiri saffron", "fresh turmeric juice", "wildflower honey", "artisan tonic water"]
  }
];

export const GALLERY_ITEMS = [
  {
    title: "Wood-Fired Ribeye at the Hearth",
    category: "Cuisine",
    aspect: "16:9",
    image: "/images/hero_ember_dining_1790713003383.jpg",
    caption: "Slow-seared over glowing white oak embers with toasted spice glazes."
  },
  {
    title: "The Main Dining Room at Dusk",
    category: "Ambiance",
    aspect: "16:9",
    image: "/images/restaurant_interior_ambiance_1790713048514.jpg",
    caption: "Charred timber finishes, warm brass accents, and the open glow of our hearth kitchen."
  },
  {
    title: "Charred Octopus Plating",
    category: "Cuisine",
    aspect: "4:3",
    image: "/images/dish_charred_octopus_1790713022381.jpg",
    caption: "Plated on artisan dark ceramic with saffron emulsion and pickled shallots."
  },
  {
    title: "24-Hour Hearth Dal & Garlic Naan",
    category: "Cuisine",
    aspect: "4:3",
    image: "/images/dish_black_dal_bread_1790713035851.jpg",
    caption: "Simmered overnight in earthenware with cultured butter and tandoor bread."
  },
  {
    title: "Cardamom Crème Brûlée",
    category: "Dessert",
    aspect: "4:3",
    image: "/images/dessert_spiced_creme_1790713059257.jpg",
    caption: "Delicately cracked sugar crust infused with whole spices and blood orange."
  }
];
