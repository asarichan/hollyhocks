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

export const exhibitSetName = (exhibitName) => {
  return {
    type: "EXHIBIT_SET_NAME", // アクションの名前
    payload: exhibitName, // フォームから送信された値
  };
};

export const exhibitSetBookName = (exhibitBookName) => {
  return {
    type: "EXHIBIT_SET_BOOK_NAME", // アクションの名前
    payload: exhibitBookName, // フォームから送信された値
  };
};

export const toggleCheckbox = (checkboxName, checked) => {
  return {
    type: "TOGGLE_CHECKBOX",
    payload: { checkboxName, checked }, // チェックボックスの名前とその状態（チェックされているかどうか）
  };
};
