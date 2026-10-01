// Mock restaurant and menu data for Teso Express Deliveries (TED) MVP
// Partner restaurants are real Soroti-based establishments

export const restaurants = [
  {
    id: "r1",
    name: "Tzavta Café",
    cuisine: "Breakfast & Trendy Dinners",
    description:
      "Soroti's favorite corporate lunch spot on Engwau Road. Famous for our premium cappuccinos, loaded omelettes, and grilled Nyama feasts.",
    address: "Engwau Road, Soroti Town",
    rating: 4.8,
    reviewCount: 176,
    deliveryTime: "20–35 min",
    deliveryFee: 2000,
    minOrder: 10000,
    tags: ["Grills", "Sandwiches", "Trendy", "Juices"],
    photo: "/muchomo.jpg",
    open: true,
    menu: [
      {
        category: "Breakfast",
        items: [
          { id: "m101", name: "Loaded Omelette", price: 12000, description: "Three-egg omelette with mushrooms, tomato, green pepper and cheese. Served with toast.", popular: true },
          { id: "m102", name: "French Toast", price: 9000, description: "Thick-cut bread, egg-dipped and pan-fried, served with honey and fresh fruit.", popular: false },
          { id: "m103", name: "Full Breakfast Combo", price: 18000, description: "Eggs, sausage, baked beans, toast, grilled tomato, and a hot drink.", popular: true },
        ],
      },
      {
        category: "Grills & Mains",
        items: [
          { id: "m104", name: "Nyama Feast (½ kg)", price: 25000, description: "Slow-grilled beef nyama choma with kachumbali and ugali.", popular: true },
          { id: "m105", name: "Grilled Chicken Plate", price: 20000, description: "Half grilled chicken with chips and coleslaw.", popular: false },
          { id: "m106", name: "Club Sandwich", price: 14000, description: "Triple-decker with chicken, egg, lettuce, tomato and mayo.", popular: true },
        ],
      },
      {
        category: "Drinks",
        items: [
          { id: "m107", name: "Cappuccino", price: 6000, description: "Expertly pulled espresso with steamed milk foam.", popular: true },
          { id: "m108", name: "Fresh Juice (500ml)", price: 5000, description: "Passion, mango, or pineapple — blended to order.", popular: true },
          { id: "m109", name: "Milkshake", price: 8000, description: "Thick vanilla, chocolate or strawberry milkshake.", popular: false },
        ],
      },
    ],
  },
  {
    id: "r2",
    name: "Sandie Foods",
    cuisine: "Traditional Ugandan Cuisines",
    description:
      "Straight from the top floor of Soroti Main Market. Steaming plates of fresh matooke, groundnut stew, and boiled local delicacies prepared fresh each morning.",
    address: "Top Floor, Soroti Main Market, Soroti",
    rating: 4.6,
    reviewCount: 234,
    deliveryTime: "20–30 min",
    deliveryFee: 1500,
    minOrder: 6000,
    tags: ["Local", "Budget", "Hearty", "Fast Casual"],
    photo: "/posho.jpg",
    open: true,
    menu: [
      {
        category: "Lunch Plates",
        items: [
          { id: "m201", name: "Matooke + Groundnut Stew", price: 9000, description: "Steamed green banana matooke with rich Teso groundnut stew and greens.", popular: true },
          { id: "m202", name: "Posho + Beans", price: 7000, description: "Soft maize posho with slow-cooked red beans and a side of sukuma wiki.", popular: true },
          { id: "m203", name: "Rice + Chicken Stew", price: 12000, description: "Steamed white rice with home-style chicken stew and fried cabbage.", popular: false },
          { id: "m204", name: "Mixed Plate (3 sides)", price: 10000, description: "Your choice of three sides: posho, rice, matooke, beans, greens, or stew.", popular: true },
        ],
      },
      {
        category: "Sides & Extras",
        items: [
          { id: "m205", name: "Avocado (2 halves)", price: 2000, description: "Fresh locally grown avocado.", popular: true },
          { id: "m206", name: "Extra Stew", price: 3000, description: "Additional serving of groundnut or bean stew.", popular: false },
          { id: "m207", name: "Katogo (offal stew)", price: 8000, description: "Slow-cooked Ugandan offal stew with green banana. A local classic.", popular: false },
        ],
      },
      {
        category: "Drinks",
        items: [
          { id: "m208", name: "Fresh Passion Juice", price: 3000, description: "Blended passion fruit juice, lightly sweetened.", popular: true },
          { id: "m209", name: "Chai (teacup)", price: 1500, description: "Spiced milk tea.", popular: false },
        ],
      },
    ],
  },
  {
    id: "r3",
    name: "Café Canunu",
    cuisine: "Coffee, Fast Foods & Local Cuisines",
    description:
      "Soroti's historic home of premium organic African coffee. Located on Market Lane, enjoy our famous fast-food burgers, fresh pastries, and traditional local dishes delivered record-time to your door.",
    address: "Market Lane, Soroti Town",
    rating: 4.7,
    reviewCount: 312,
    deliveryTime: "15–30 min",
    deliveryFee: 1500,
    minOrder: 12000,
    tags: ["Pizza", "Fast Food", "Breakfast", "Popular"],
    photo: "/ugandan-dishes.jpg",
    open: true,
    menu: [
      {
        category: "Pizzas",
        items: [
          { id: "m301", name: "Margherita (10\")", price: 24000, description: "San Marzano tomato base, real mozzarella, fresh basil.", popular: true },
          { id: "m302", name: "Chicken & Peppers (10\")", price: 29000, description: "Grilled chicken, roasted red peppers, onion, mozzarella.", popular: true },
          { id: "m303", name: "Veggie Delight (10\")", price: 26000, description: "Capsicum, mushroom, sweet corn, cherry tomato, mozzarella.", popular: false },
          { id: "m304", name: "Meat Lovers (12\")", price: 38000, description: "Beef mince, chicken, sausage and bacon-style beef strips.", popular: false },
        ],
      },
      {
        category: "Café & Pastries",
        items: [
          { id: "m305", name: "Latte", price: 7000, description: "Double espresso with velvety steamed milk.", popular: true },
          { id: "m306", name: "Cappuccino", price: 6500, description: "Espresso with equal parts steamed milk and foam.", popular: true },
          { id: "m307", name: "Croissant (plain)", price: 5000, description: "Buttery, flaky baked croissant.", popular: false },
          { id: "m308", name: "Cinnamon Roll", price: 6000, description: "Freshly baked with cream cheese glaze.", popular: false },
        ],
      },
      {
        category: "Breakfast",
        items: [
          { id: "m309", name: "Eggs Benedict", price: 16000, description: "Poached eggs on a toasted muffin with hollandaise sauce.", popular: false },
          { id: "m310", name: "Avocado Toast", price: 13000, description: "Sourdough toast with smashed avocado, chilli flakes and lemon.", popular: true },
        ],
      },
    ],
  },
  {
    id: "r4",
    name: "Sun City Hotel Restaurant",
    cuisine: "Premium Grills & Indian Cuisine",
    description:
      "Hotel-tier dining brought to your door. Legendary large-portion dinner specials, premium local stews, and an Indian cuisine menu — without the trip out of town.",
    address: "Soroti–Mbale Road, Soroti",
    rating: 4.7,
    reviewCount: 112,
    deliveryTime: "30–45 min",
    deliveryFee: 3000,
    minOrder: 15000,
    tags: ["Grills", "Indian", "Premium", "Halal"],
    photo: "/mandazi.jpg",
    open: true,
    menu: [
      {
        category: "Premium Grills",
        items: [
          { id: "m401", name: "T-Bone Steak (300g)", price: 45000, description: "Char-grilled T-bone with garlic butter, chips, and garden salad.", popular: true },
          { id: "m402", name: "Whole Tilapia (grilled)", price: 28000, description: "Fresh tilapia grilled over wood charcoal with pilipili sauce and ugali.", popular: true },
          { id: "m403", name: "Pork Spare Ribs", price: 35000, description: "Slow-cooked ribs with BBQ glaze, coleslaw and chips.", popular: false },
        ],
      },
      {
        category: "Indian Menu",
        items: [
          { id: "m404", name: "Chicken Tikka Masala", price: 32000, description: "Tender chicken in a creamy spiced tomato sauce. Served with naan.", popular: true },
          { id: "m405", name: "Vegetable Biryani", price: 22000, description: "Fragrant basmati rice with mixed vegetables and whole spices.", popular: false },
          { id: "m406", name: "Lamb Curry", price: 36000, description: "Slow-cooked lamb in a rich Mughal-style curry. Served with naan or rice.", popular: false },
        ],
      },
      {
        category: "Local Stews",
        items: [
          { id: "m407", name: "Groundnut Stew + Matooke", price: 14000, description: "Rich Teso groundnut stew with steamed green banana matooke.", popular: true },
          { id: "m408", name: "Luwombo (chicken)", price: 22000, description: "Chicken slow-steamed in banana leaves — a Ugandan delicacy.", popular: false },
        ],
      },
      {
        category: "Drinks",
        items: [
          { id: "m409", name: "Fresh Juice (500ml)", price: 5000, description: "Passion, mango, or pineapple.", popular: false },
          { id: "m410", name: "Bottled Water (500ml)", price: 2000, description: "Chilled still water.", popular: false },
        ],
      },
    ],
  },
];

export const getRestaurantById = (id) =>
  restaurants.find((r) => r.id === id) ?? null;

export const ORDER_STAGES = [
  {
    id: "received",
    label: "Order Received",
    description: "Your order has been confirmed and sent to the restaurant.",
    icon: "ClipboardCheck",
  },
  {
    id: "preparing",
    label: "Restaurant Preparing",
    description: "The kitchen is preparing your food fresh.",
    icon: "ChefHat",
  },
  {
    id: "picked_up",
    label: "Rider Picked Up",
    description: "Your TED rider has collected your order.",
    icon: "Package",
  },
  {
    id: "en_route",
    label: "Rider En Route",
    description: "Your rider is on the way — ETA shown above.",
    icon: "Bike",
  },
  {
    id: "delivered",
    label: "Delivered",
    description: "Your order has been delivered. Enjoy your meal!",
    icon: "CheckCircle2",
  },
];
