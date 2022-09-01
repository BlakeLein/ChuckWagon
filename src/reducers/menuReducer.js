import MI from "../data/menuImages";

const initialState = {
  appetizers: [
    {
      key: 1,
      name: "Cowboy Sliders",
      description:
        "Four 3 oz all-beef patties on our country white buns. Topped with our fried onion crisps and chipotle mayo.",
      price: 10,
      img: MI.apps.sliders,
      type: "food",
    },
    {
      key: 2,
      name: "Beer Queso",
      description:
        "Fresh queso cooking with a little lager. Served in a cast iron skillet with tortilla chips.",
      price: 10,
      img: MI.apps.queso,
      type: "food",
    },
    {
      key: 3,
      name: "Boneless Wings",
      description:
        "Ten crispy golden chicken bites tossed in your choice of sauce: buffalo, honey bbq, parmesan garlic, lemon pepper, or insane!",
      price: 9,
      img: MI.apps.wings,
      type: "food",
    },
    {
      key: 4,
      name: "Texas Fries",
      description:
        "Fresh fries topped with cheddar cheese, crispy onions, bacon, and jalapenos. Get sweet potato fries instead for $2 more!",
      price: 8,
      img: MI.apps.fries,
      type: "food",
    },
    {
      key: 5,
      name: "Fried Pickles",
      description:
        "Crisp pickle spears deep-fried to perfection. Ranch dressing included.",
      price: 9,
      img: MI.apps.pickles,
      type: "food",
    },
    {
      key: 6,
      name: "Trail Mix",
      description:
        "A personal-size bowl of our famous trail mix! If you would rather wait, get it in our shop on your way out!",
      price: 3,
      img: MI.apps.mix,
      type: "food",
    },
    {
      key: 7,
      name: "Jerky Sampler",
      description:
        "Beef, Elk, Bear, Deer, Gator, and Duck. You can literally try duck jerky right now.",
      price: 6,
      img: MI.apps.jerky,
      type: "food",
    },
  ],
  entrees: [
    {
      key: 8,
      name: "Campsite Chili",
      description:
        "A campsite classic. Grab a bowl, a spoon, and a coat - it's chili time.",
      price: 12,
      img: MI.entrees.chili,
      type: "food",
    },
    {
      key: 9,
      name: "Artisan Pizza",
      description:
        "Hand-tossed crust. You tell us what you want on it and we'll fire up the oven. Only the cleanest ingredients!",
      price: 15,
      img: MI.entrees.pizza,
      type: "food",
    },
    {
      key: 10,
      name: "Breakfast Pot",
      description:
        "A personal-size cast iron pot filled with a breakfast mash. Eggs, potatos, cheese, sausage, and tabasco if you want it.",
      price: 15,
      img: MI.entrees.breakfast,
      type: "food",
    },
    {
      key: 11,
      name: "Pork Ribs",
      description:
        "A rack of ribs for you and a partner to enjoy (or just you if you know what you're about).",
      price: 21,
      img: MI.entrees.ribs,
      type: "food",
    },
    {
      key: 12,
      name: "Pork Chops",
      description: "Two 4 oz pork chops fresh off the pig.",
      price: 13,
      img: MI.entrees.chops,
      type: "food",
    },
    {
      key: 13,
      name: "Vegetarian Stir Fry",
      description:
        "Fresh vegetables dressed with our veggie seasoning and fried in a light coat of olive oil.",
      price: 13,
      img: MI.entrees.veggie,
      type: "food",
    },
    {
      key: 14,
      name: "Bratwurst Kabobs",
      description:
        "Hot off the grill! Kabobs with beer bratwurst, red potatos, onions, and zucchinni",
      price: 16,
      img: MI.entrees.kabob,
      type: "food",
    },
  ],
  sides: [
    {
      key: 15,
      name: "French Fries",
      description: "Fresh potato fries. Probably from Idaho!",
      price: 3,
      img: MI.sides.fries,
      type: "food",
    },
    {
      key: 16,
      name: "Sweet Potato Fries",
      description:
        "We don't know what state is famous for these, but they're just as good!",
      price: 3,
      img: MI.sides.sweet,
      type: "food",
    },
    {
      key: 17,
      name: "Pinto Beans",
      description: "Goes well with any entree!",
      price: 3,
      img: MI.sides.pinto,
      type: "food",
    },
    {
      key: 18,
      name: "Green Beans",
      description: "Cut, steamed, and lightly grilled to perfection.",
      price: 3,
      img: MI.sides.green,
      type: "food",
    },
    {
      key: 19,
      name: "Fried Okra",
      description:
        "It's not just something your grandmother likes - this stuff is good!",
      price: 3,
      img: MI.sides.okra,
      type: "food",
    },
    {
      key: 20,
      name: "White Rice",
      description: "Steamed white rice with a little salt and butter",
      price: 3,
      img: MI.sides.rice,
      type: "food",
    },
    {
      key: 21,
      name: "Country Rolls",
      description: "Three rolls that we baked this morning.",
      price: 3,
      img: MI.sides.rolls,
      type: "food",
    },
  ],
  desserts: [
    {
      key: 22,
      name: "Ice Cream",
      description:
        "Your choice of vanilla, chocolate, strawberry, or rocky road. Served in a cone or a cup.",
      price: 6,
      img: MI.desserts.ice,
      type: "food",
    },
    {
      key: 23,
      name: "Peach Cobbler",
      description:
        "An old family recipe. A slice of cobbler that we make fresh every day.",
      price: 7,
      img: MI.desserts.cobbler,
      type: "food",
    },
    {
      key: 24,
      name: "Horse Brownie",
      description:
        "It's uh...not what it sounds like. It's just a brownie. I mean it's good because we made it, but it is a brownie and nothing more. Make it a stallion by adding ice cream and nuts for $3 more.",
      price: 5,
      img: MI.desserts.brownie,
      type: "food",
    },
    {
      key: 25,
      name: "Baklava",
      description: "A Greek favorite! Crisp pastry with nuts and honey.",
      price: 5,
      img: MI.desserts.baklava,
      type: "food",
    },
  ],
  beverages: [
    {
      key: 26,
      name: "Fountain Drinks",
      description:
        "Coke, Diet Coke, Coke Zero, Dr. Pepper, Diet Dr. Pepper, Sprite, Fanta, or Mello Yello.",
      price: 2,
      img: MI.beverages.fountain,
      type: "food",
    },
    {
      key: 27,
      name: "Iced Tea",
      description: "Sweet or Unsweet, we don't judge.",
      price: 3,
      img: MI.beverages.tea,
      type: "food",
    },
    {
      key: 28,
      name: "Lemonade",
      description:
        "We buy the lemons, we squeeze the lemons, we add sugar and water, then we serve it to you over ice.",
      price: 5,
      img: MI.beverages.lemonade,
      type: "food",
    },
    {
      key: 29,
      name: "Beer - Domestic",
      description:
        "Budweiser, Bud Light, Coors Banquet, Coors Light, Shiner Bock, Sam Adams",
      price: 5,
      img: MI.beverages.domestic,
      type: "food",
    },
    {
      key: 30,
      name: "Beer - Craft",
      description:
        "We partner with local breweries to bring you the best. Ask us about our monthly specials. (Non-Alcoholic options now available!)",
      price: 7,
      img: MI.beverages.craft,
      type: "food",
    },
  ],
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case "":
      return state;
    default:
      return state;
  }
};

export default menuReducer;
