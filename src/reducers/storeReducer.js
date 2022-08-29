import SI from "../data/storeImages";

const initialState = {
  shopItems: [
    {
      name: "Black T-Shirt",
      description: "Represent the Best. T-Shirt in Black.",
      price: 14,
      color: "Black",
      imgA: SI.blackShirt.front,
      imgB: SI.blackShirt.back,
    },
    {
      name: "Red T-Shirt",
      description: "Represent the Best. T-Shirt in Red.",
      price: 14,
      color: "Red",
      imgA: SI.redShirt.front,
      imgB: SI.redShirt.back,
    },
    {
      name: "Blue T-Shirt",
      description: "Represent the Best. T-Shirt in Blue.",
      price: 14,
      color: "Blue",
      imgA: SI.blueShirt.front,
      imgB: SI.blueShirt.back,
    },
    {
      name: "Blue Hoodie",
      description:
        "It doesn't get cold often, but when it does, you'll want this. Hoodie in Blue.",
      price: 35,
      color: "Blue",
      imgA: SI.blueHood.front,
      imgB: SI.blueHood.back,
    },
    {
      name: "Gray Hoodie",
      description:
        "It doesn't get cold often, but when it does, you'll want this. Hoodie in Gray.",
      price: 35,
      color: "Gray",
      imgA: SI.grayHood.front,
      imgB: SI.grayHood.back,
    },
    {
      name: "Black Hat",
      description: "Not just for Truckers. Hat in Black/White.",
      price: 12,
      color: "Black",
      imgA: SI.blackHat,
      imgB: "",
    },
    {
      name: "Blue Hat",
      description: "Not just for Truckers. Hat in Blue/Red.",
      price: 12,
      color: "Blue",
      imgA: SI.blueHat,
      imgB: "",
    },
    {
      name: "Tumbler",
      description: "Great for our iced tea or lemonade. Tumbler in beige.",
      price: 18,
      color: "Beige",
      imgA: SI.tumbler,
      imgB: "",
    },
    {
      name: "Trail Mix",
      description: "Our famous trail mix. Grab one for the road!",
      price: 1,
      color: "N/A",
      imgA: SI.trailMix,
      imgB: "",
    },
  ],
  itemToView: {
    // name: "Black T-Shirt",
    // description: "Represent the Best. T-Shirt in Black.",
    // price: 14,
    // color: "Black",
    // imgA: SI.blackShirt.front,
    // imgB: SI.blackShirt.back,
  },
  shopOpen: false,
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case "VIEW_ITEM":
      return {
        ...state,
        itemToView: action.payload,
        shopOpen: true,
      };
    default:
      return state;
  }
};

export default shopReducer;
