import * as actions from "./menu.actions";

const INITIAL_STATE = {
  isMenuShown: false,
};

const menuReducer = (state = INITIAL_STATE, action) => {
  const { type } = action;
  switch (type) {
    case actions.SHOW_MENU:
      return { ...state, isMenuShown: !state.isMenuShown };
    default:
      return state;
  }
};

export default menuReducer;
