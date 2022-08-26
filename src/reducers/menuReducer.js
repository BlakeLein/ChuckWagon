import MI from "../data/menuImages";

const initialState = {
  appetizers: [
    {
      name: "Cowboy Sliders",
      description:
        "Four 3 oz all-beef patties on our country white buns. Topped with our fried onion crisps and chipotle mayo.",
      price: 9.99,
      img: MI.apps.sliders,
    },
    {
      name: "Beer Queso",
      description:
        "Fresh queso cooking with a little lager. Served in a cast iron skillet with tortilla chips.",
      price: 9.99,
      img: MI.apps.queso,
    },
    {
      name: "Boneless Wings",
      description:
        "Ten crispy golden chicken bites tossed in your choice of sauce: buffalo, honey bbq, parmesan garlic, lemon pepper, or insane!",
      price: 8.99,
      img: MI.apps.wings,
    },
    {
      name: "Texas Fries",
      description:
        "Fresh fries topped with cheddar cheese, crispy onions, bacon, and jalapenos. Get sweet potato fries instead for $2 more!",
      price: 7.99,
      img: MI.apps.fries,
    },
    {
      name: "Fried Pickles",
      description:
        "Crisp pickle spears deep-fried to perfection. Ranch dressing included.",
      price: 8.99,
      img: MI.apps.pickles,
    },
    {
      name: "Trail Mix",
      description:
        "A personal-size bowl of our famous trail mix! If you would rather wait, get it in our shop on your way out!",
      price: 2.99,
      img: MI.apps.mix,
    },
    {
      name: "Jerky Sampler",
      description:
        "Beef, Elk, Bear, Deer, Gator, and Duck. You can literally try duck jerky right now.",
      price: 5.99,
      img: MI.apps.jerky,
    },
  ],
  entrees: [
    {
      name: "Campsite Chili",
      description:
        "A campsite classic. Grab a bowl, a spoon, and a coat - it's chili time.",
      price: 11.99,
      img: MI.entrees.chili,
    },
    {
      name: "Artisan Pizza",
      description:
        "Hand-tossed crust. You tell us what you want on it and we'll fire up the oven. Only the cleanest ingredients!",
      price: 14.99,
      img: MI.entrees.pizza,
    },
    {
      name: "Breakfast Pot",
      description:
        "A personal-size cast iron pot filled with a breakfast mash. Eggs, potatos, cheese, sausage, and tabasco if you want it.",
      price: 14.99,
      img: MI.entrees.breakfast,
    },
    {
      name: "Pork Ribs",
      description:
        "A rack of ribs for you and a partner to enjoy (or just you if you know what you're about).",
      price: 20.99,
      img: MI.entrees.ribs,
    },
    {
      name: "Pork Chops",
      description: "Two 4 oz pork chops fresh off the pig.",
      price: 12.99,
      img: MI.entrees.chops,
    },
    {
      name: "Vegetarian Stir Fry",
      description:
        "Fresh vegetables dressed with our veggie seasoning and fried in a light coat of olive oil.",
      price: 12.99,
      img: MI.entrees.veggie,
    },
    {
      name: "Bratwurst Kabobs",
      description:
        "Hot off the grill! Kabobs with beer bratwurst, red potatos, onions, and zucchinni",
      price: 15.99,
      img: MI.entrees.kabob,
    },
  ],
  sides: [
    {
      name: "French Fries",
      description: "Fresh potato fries. Probably from Idaho!",
      price: 2.99,
      img: MI.sides.fries,
    },
    {
      name: "Sweet Potato Fries",
      description:
        "We don't know what state is famous for these, but they're just as good!",
      price: 2.99,
      img: MI.sides.sweet,
    },
    {
      name: "Pinto Beans",
      description: "Goes well with any entree!",
      price: 2.99,
      img: MI.sides.pinto,
    },
    {
      name: "Green Beans",
      description: "Cut, steamed, and lightly grilled to perfection.",
      price: 2.99,
      img: MI.sides.green,
    },
    {
      name: "Fried Okra",
      description:
        "It's not just something your grandmother likes - this stuff is good!",
      price: 2.99,
      img: MI.sides.okra,
    },
    {
      name: "White Rice",
      description: "Steamed white rice with a little salt and butter",
      price: 2.99,
      img: MI.sides.rice,
    },
    {
      name: "Country Rolls",
      description: "Three rolls that we baked this morning.",
      price: 2.99,
      img: MI.sides.rolls,
    },
  ],
  desserts: [
    {
      name: "Ice Cream",
      description:
        "Your choice of vanilla, chocolate, strawberry, or rocky road. Served in a cone or a cup.",
      price: 5.99,
      img: MI.desserts.ice,
    },
    {
      name: "Peach Cobbler",
      description:
        "An old family recipe. A slice of cobbler that we make fresh every day.",
      price: 6.99,
      img: MI.desserts.cobbler,
    },
    {
      name: "Horse Brownie",
      description:
        "It's uh...not what it sounds like. It's just a brownie. I mean it's good because we made it, but it is a brownie and nothing more. Make it a stallion by adding ice cream and nuts for $3 more.",
      price: 4.99,
      img: MI.desserts.brownie,
    },
    {
      name: "Baklava",
      description: "A Greek favorite! Crisp pastry with nuts and honey.",
      price: 4.99,
      img: MI.desserts.baklava,
    },
  ],
  beverages: [
    {
      name: "Fountain Drinks",
      description:
        "Coke, Diet Coke, Coke Zero, Dr. Pepper, Diet Dr. Pepper, Sprite, Fanta, or Mello Yello.",
      price: 1.99,
      img: MI.beverages.fountain,
    },
    {
      name: "Iced Tea",
      description: "Sweet or Unsweet, we don't judge.",
      price: 2.99,
      img: MI.beverages.tea,
    },
    {
      name: "Lemonade",
      description:
        "We buy the lemons, we squeeze the lemons, we add sugar and water, then we serve it to you over ice.",
      price: 4.99,
      img: MI.beverages.lemonade,
    },
    {
      name: "Beer - Domestic",
      description:
        "Budweiser, Bud Light, Coors Banquet, Coors Light, Shiner Bock, Sam Adams",
      price: 4.99,
      img: MI.beverages.domestic,
    },
    {
      name: "Beer - Craft",
      description:
        "We partner with local breweries to bring you the best. Ask us about our monthly specials. (Non-Alcoholic options now available!)",
      price: 6.99,
      img: MI.beverages.craft,
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
