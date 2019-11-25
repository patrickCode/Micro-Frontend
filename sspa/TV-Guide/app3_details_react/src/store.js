import { createStore } from "redux";

const intialState = {
  selectedProgram: {
    name: "NA",
    releasedOn: "NA",
    director: "NA"
  }
};

const detailsReducer = (state = intialState, action) => {
  switch (action.type) {
    case "PROGRAM_SELECTED": {
      console.log("Dispatching here");
      const newState = { ...state, selectedProgram: action.selectedProgram };
      return newState;
    }
  }
  return state;
};

export const store = createStore(detailsReducer);
