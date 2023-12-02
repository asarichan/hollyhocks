import { configureStore } from "@reduxjs/toolkit";

// 初期値の設定
const initialState = {
  name: "",
  date: "",
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
    default:
      return state;
  }
};

export default nameReducer;
