//更新の内容
export const setName = (name) => {
  return {
    type: "SET_NAME", // アクションの名前
    payload: name, // フォームから送信された値
  };
};

export const setDate = (date) => {
  return {
    type: "SET_DATE", // アクションの名前
    payload: date, // フォームから送信された値
  };
};
