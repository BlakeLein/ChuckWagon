const initialState = {
  reviews: [
    {
      name: "Tom S.",
      rating: 5,
      message:
        "The Chuck Wagon was a great night out after a long week. I have the Cowboy sliders and their lemonade. People are very friendly there and I can't wait to go back!",
    },
    {
      name: "Charles E.",
      rating: 5,
      message: "Great atmosphere, decent prices!",
    },
    {
      name: "Haywood J.",
      rating: 5,
      message: "I love this place!",
    },
    {
      name: "Shane L.",
      rating: 4,
      message: "Pretty good.",
    },
    {
      name: "Maggie B.",
      rating: 5,
      message:
        "Jeff is the best cook ever!! Can't wait to try some of these recipes on my next campout!",
    },
    {
      name: "Alison A.",
      rating: 5,
      message: "This is my kids' favorite place to eat!",
    },
  ],
};

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case "":
      return state;
    default:
      return state;
  }
};

export default reviewReducer;
