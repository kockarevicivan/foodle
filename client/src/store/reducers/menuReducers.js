import {
  GET_ITEMS_FOR_DAY,
  CREATE_ITEM,
  EDIT_ITEM,
  REMOVE_ITEM
  } from "../actions/menu/menuTypes";
  const initialState = {items: []};
  
  export const menuReducers = (state = initialState, action) => {
    switch (action.type) {
      case GET_ITEMS_FOR_DAY:
        return {
          ...state,
            items: action.items
        }
      case CREATE_ITEM:
        return {
          ...state,
          items: [...state.items,action.item]
        };
      case EDIT_ITEM:   
        const selectedItemIndex = state.items.findIndex(item => item._id === action.item._id);
        const modifiedItems = [...state.items];
        modifiedItems[selectedItemIndex] = action.item
        
        return {
          ...state,
          items: modifiedItems
        };
      case REMOVE_ITEM:
        
        return {
          ...state,
          items: state.items.filter(item => item._id !== action.itemId)
        };
      
      default:
        return state;
    }
  };
  