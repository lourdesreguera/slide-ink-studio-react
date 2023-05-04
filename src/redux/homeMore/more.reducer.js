import * as actions from "./more.actions";

const INITIAL_STATE = {
  isMoreShown: false,
};

const moreReducer = (state = INITIAL_STATE, action) => {
  const { type } = action;
  switch (type) {
    case actions.SHOW_MORE:
      return { ...state, isMoreShown: !state.isMoreShown };
    default:
      return state;
  }
};

export default moreReducer;
