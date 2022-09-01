const initialState = {
  listOfOrders: [],
  firstName: "",
  lastName: "",
  emailAddress: "",
  street: "",
  city: "",
  state: "",
  pickUpDate: "",
  pickUpTime: "",
  cardNumber: "",
  expMonth: "",
  expYear: "",
  CVV: "",
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FIRST":
      return { ...state, firstName: action.payload };
    case "LAST":
      return { ...state, lastName: action.payload };
    case "EMAIL":
      return { ...state, emailAddress: action.payload };
    case "STREET":
      return { ...state, street: action.payload };
    case "CITY":
      return { ...state, city: action.payload };
    case "STATE":
      return { ...state, state: action.payload };
    case "PICK_DATE":
      return { ...state, pickUpDate: action.payload };
    case "PICK_TIME":
      return { ...state, pickUpTime: action.payload };
    case "CARD_NUM":
      return { ...state, cardNumber: action.payload };
    case "EXP_MONTH":
      return { ...state, expMonth: action.payload };
    case "EXP_YEAR":
      return { ...state, expYear: action.payload };
    case "CVV":
      return { ...state, CVV: action.payload };
    case "PLACE_ORDER":
      return {
        listOfOrders: [
          ...state.listOfOrders,
          {
            firstName: state.firstName,
            lastName: state.lastName,
            emailAddress: state.emailAddress,
            street: state.street,
            city: state.city,
            state: state.state,
            pickUpDate: state.pickUpDate,
            pickUpTime: state.pickUpTime,
            cardNumber: state.cardNumber,
            expMonth: state.expMonth,
            expYear: state.expYear,
            CVV: state.CVV,
          },
        ],
      };
    default:
      return state;
  }
};

export default cartReducer;
