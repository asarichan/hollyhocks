//Sliceの役割を担ってます
import { configureStore } from "@reduxjs/toolkit";

// 初期値の設定
const initialState = {
  name: "",
  date: "",

  exhibitName: "",
  exhibitBookName: "",

  checkboxes: {
    Cafe: false,
    Gym: false,
    ResarchBench: false,
  },
};

// ここにアクションの処理を記述
const nameReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.payload,
      };
    case "SET_DATE":
      return {
        ...state,
        date: action.payload,
      };
    case "EXHIBIT_SET_NAME":
      return {
        ...state,
        exhibitName: action.payload,
      };
    case "EXHIBIT_SET_BOOK_NAME":
      return {
        ...state,
        exhibitBookName: action.payload,
      };
    case "TOGGLE_CHECKBOX":
      const { checkboxName, checked } = action.payload;
      return {
        ...state,
        checkboxes: {
          ...state.checkboxes,
          [checkboxName]: checked,
        },
      };
    default:
      return state;
  }
};

export default nameReducer;
