import {
  AddProductFailed,
  AddProductStart,
  AddProductSuccess,
} from "./ProductSlice";

export const AddProduct = async (dispatch) => {
  dispatch(AddProductStart());

  try {
    let response = await fetch("https://fakestoreapi.com/products");

    let data = await response.json();

    console.log(data);

    dispatch(AddProductSuccess(data));
  } catch (error) {
    dispatch(AddProductFailed());
  }
};
