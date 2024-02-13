const init = [];

const goalAdder = (state = init, action) => {
  if (action.type === "GOAL") {
    return action.payload;
  }
  return state;
};

export default goalAdder;
