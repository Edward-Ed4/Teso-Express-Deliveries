// Mock restaurant and menu data for Teso Express Deliveries (TED) MVP
// All data represents fictional Soroti-based establishments

export const restaurants = [
  {
    id: "r1",
    name: "Soroti Grill House",
    cuisine: "Ugandan Grills & BBQ",
    description:
      "Famous for our open-flame tilapia and nyama choma. A Soroti staple since 2011, now partnered with TED for home delivery.",
    address: "Plot 14, Gweri Road, Soroti",
    rating: 4.8,
    reviewCount: 143,
    deliveryTime: "25–40 min",
    deliveryFee: 2000,
    minOrder: 8000,
    tags: ["Grills", "Local", "Halal"],
    heroColor: "from-orange-600 to-amber-500",
    emoji: "🔥",
    photo: "/muchomo.jpg",
    open: true,
    menu: [
      {
        category: "Grills",
        items: [
          { id: "m101", name: "Tilapia (whole)", price: 18000, description: "Fresh Lake Kyoga tilapia, grilled over charcoal with lemon & kachumbali.", popular: true },
          { id: "m102", name: "Nyama Choma (½ kg)", price: 22000, description: "Slow-grilled beef, served with ugali and roasted groundnuts.", popular: true },
          { id: "m103", name: "Pork Ribs", price: 20000, description: "Marinated pork ribs with house spice rub. Served with chips.", popular: false },
          { id: "m104", name: "Chicken Quarter", price: 14000, description: "Charcoal-grilled chicken quarter with pilipili sauce.", popular: false },
        ],
      },
      {
        category: "Sides",
        items: [
          { id: "m105", name: "Ugali", price: 3000, description: "Stiff maize-meal served with stew.", popular: false },
          { id: "m106", name: "Chips (large)", price: 5000, description: "Crispy deep-fried potato chips.", popular: true },
          { id: "m107", name: "Kachumbali Salad", price: 3000, description: "Fresh tomato, onion and cucumber salad.", popular: false },
        ],
      },
      {
        category: "Drinks",
        items: [
          { id: "m108", name: "Mirinda (500ml)", price: 2500, description: "Chilled Mirinda Orange.", popular: false },
          { id: "m109", name: "Water (500ml)", price: 1500, description: "Cool bottled water.", popular: false },
        ],
      },
    ],
  },
  {
    id: "r2",
    name: "Lake View Canteen",
    cuisine: "Local Home Cooking",
    description:
      "Everyday Teso comfort food — groundnut stew, beans, and matooke — made fresh each morning. Affordable, hearty, and delivered hot.",
    address: "Olio Street, Near Soroti Main Market",
    rating: 4.5,
    reviewCount: 89,
    deliveryTime: "20–35 min",
    deliveryFee: 1500,
    minOrder: 6000,
    tags: ["Local", "Budget", "Vegetarian options"],
    heroColor: "from-green-700 to-teal-500",
    emoji: "🍲",
    photo: "/posho.jpg",
    open: true,
    menu: [
      {
        category: "Main Dishes",
        items: [
          { id: "m201", name: "Groundnut Stew + Rice", price: 9000, description: "Rich Teso groundnut stew with steamed white rice.", popular: true },
          { id: "m202", name: "Beans & Matooke", price: 7000, description: "Slow-cooked red beans with steamed green banana matooke.", popular: true },
          { id: "m203", name: "Chicken Stew + Posho", price: 13000, description: "Home-style chicken stew with soft maize posho.", popular: false },
          { id: "m204", name: "Vegetable Curry + Rice", price: 8000, description: "Mixed garden vegetables in a mild curry sauce over rice.", popular: false },
        ],
      },
      {
        category: "Extras",
        items: [
          { id: "m205", name: "Extra Posho", price: 2000, description: "Additional serving of posho.", popular: false },
          { id: "m206", name: "Avocado (2 halves)", price: 2500, description: "Fresh ripe avocado from local farms.", popular: true },
        ],
      },
      {
        category: "Drinks",
        items: [
          { id: "m207", name: "Fresh Passion Juice", price: 3500, description: "Freshly blended passion fruit juice.", popular: true },
          { id: "m208", name: "Chai (teacup)", price: 2000, description: "Spiced milk tea.", popular: false },
        ],
      },
    ],
  },
  {
    id: "r3",
    name: "Pizza & Bites Soroti",
    cuisine: "Pizza, Burgers & Fast Food",
    description:
      "Soroti's first proper pizza joint. Hand-stretched dough, real mozzarella, and toppings sourced locally where possible. Burgers and sides too.",
    address: "Opiyai Road, Soroti Town",
    rating: 4.6,
    reviewCount: 67,
    deliveryTime: "30–45 min",
    deliveryFee: 2500,
    minOrder: 15000,
    tags: ["Pizza", "Fast Food", "Popular"],
    heroColor: "from-red-600 to-rose-500",
    emoji: "🍕",
    photo: "/ugandan-dishes.jpg",
    open: true,
    menu: [
      {
        category: "Pizzas",
        items: [
          { id: "m301", name: "Margherita (10\")", price: 22000, description: "Tomato base, mozzarella, fresh basil.", popular: true },
          { id: "m302", name: "Chicken BBQ (10\")", price: 27000, description: "Smoky BBQ sauce, grilled chicken, red onion, mozzarella.", popular: true },
          { id: "m303", name: "Veggie Supreme (10\")", price: 24000, description: "Capsicum, mushroom, olives, tomato, mozzarella.", popular: false },
          { id: "m304", name: "Meat Feast (12\")", price: 35000, description: "Beef mince, chicken, sausage, pepperoni-style beef strips.", popular: false },
        ],
      },
      {
        category: "Burgers",
        items: [
          { id: "m305", name: "Classic Beef Burger", price: 16000, description: "Beef patty, lettuce, tomato, pickles, house sauce.", popular: true },
          { id: "m306", name: "Spicy Chicken Burger", price: 15000, description: "Crispy fried chicken fillet with jalapeño mayo.", popular: false },
        ],
      },
      {
        category: "Sides & Drinks",
        items: [
          { id: "m307", name: "Coleslaw", price: 4000, description: "Creamy house coleslaw.", popular: false },
          { id: "m308", name: "Soda (330ml)", price: 3000, description: "Pepsi, 7Up, or Mirinda — let us know your preference.", popular: false },
        ],
      },
    ],
  },
  {
    id: "r4",
    name: "Amaka's Kitchen",
    cuisine: "Breakfast & Sandwiches",
    description:
      "Open from 6 am. The best rolex, omelettes, and fresh mandazi in Soroti — now delivered to your office or home every morning.",
    address: "Railway View, Soroti",
    rating: 4.9,
    reviewCount: 211,
    deliveryTime: "15–25 min",
    deliveryFee: 1000,
    minOrder: 4000,
    tags: ["Breakfast", "Quick", "Budget"],
    heroColor: "from-yellow-500 to-amber-400",
    emoji: "🌯",
    photo: "/mandazi.jpg",
    open: true,
    menu: [
      {
        category: "Breakfast Wraps",
        items: [
          { id: "m401", name: "Classic Rolex", price: 4500, description: "Chapati rolled with egg omelette, cabbage, tomato, and onion.", popular: true },
          { id: "m402", name: "Rolex Double Egg", price: 6000, description: "Two-egg rolex with extra vegetables.", popular: true },
          { id: "m403", name: "Rolex + Sausage", price: 8000, description: "Classic rolex with grilled pork sausage.", popular: false },
        ],
      },
      {
        category: "Baked Goods",
        items: [
          { id: "m404", name: "Mandazi (4 pieces)", price: 3000, description: "Soft deep-fried dough, lightly sweetened.", popular: true },
          { id: "m405", name: "Samosa (2 pieces)", price: 3500, description: "Crispy beef or veggie samosas.", popular: false },
        ],
      },
      {
        category: "Hot Drinks",
        items: [
          { id: "m406", name: "Masala Chai", price: 2500, description: "Spiced milk tea with ginger and cinnamon.", popular: true },
          { id: "m407", name: "Black Coffee", price: 3000, description: "Strong Ugandan robusta coffee.", popular: false },
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
