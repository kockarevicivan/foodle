<<<<<<< HEAD
import axios from "../../../axios";
=======
import axios from "axios";
>>>>>>> 7d4da286c217a15685423b0f75f7879bd8fa144b
import { 
    getAllForDayCreator,
    createItemCreator,
    editItemCreator,
    removeItemCreator 
} from "./menuCreators";

const menuItemUrl = "http://localhost:4200/menuItems";

export const getAllForDay = date => async dispatch => {
    const { data } = await axios.get(`${menuItemUrl}/${date}`, date);
    dispatch(getAllForDayCreator(data));
};

export const createItem = payLoad => async dispatch => {
    const { data } = await axios.post(menuItemUrl, payLoad);
    dispatch(createItemCreator(data));
};

export const editItem = (itemId ,payLoad) => async dispatch => {  
    const { data } = await axios.put(`${menuItemUrl}/${itemId}`, payLoad);
    dispatch(editItemCreator(data));
};

export const removeItem = itemId => async dispatch => {
    const { data } = await axios.delete(`${menuItemUrl}/${itemId}`);
    console.log(data);
    
    dispatch(removeItemCreator(data));
};