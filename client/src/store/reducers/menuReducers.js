import {
  SET_MENU,
  ADD_MENU_ITEM,
  EDIT_ITEM,
  REMOVE_MENU_ITEM,
} from "../actions/menu/menuTypes";
const initialState = { menu: null };

export const menuReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_MENU:
      const { menu } = action;
      return { menu };

    case ADD_MENU_ITEM:
      const { item } = action;
      return {
        menu: {
          ...state.menu,
          items: [...state.menu.items, item],
        },
      };

    case EDIT_ITEM:
      const selectedItemIndex = state.items.findIndex(
        (item) => item._id === action.item._id
      );
      const modifiedItems = [...state.items];
      modifiedItems[selectedItemIndex] = action.item;

      return {
        ...state,
        items: modifiedItems,
      };
    case REMOVE_MENU_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.itemId),
      };

    default:
      return state;
  }
};
