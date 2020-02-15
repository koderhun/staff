import { updateList, updateSortStatus } from "../actions/personalsAction";

export const initialState = {
  list: [
    {
      firstName: "Фред",
      lastName: "Пупкин",
      position: "Повелитель снега",
      phone: "8 934 232 34 45",
      email: "pupkin.f@ya.ru",
      cabinet: "34"
    },
    {
      firstName: "Джон",
      lastName: "Клерк",
      position: "Смотритель серверной",
      phone: "8 934 232 23 21",
      email: "joni.k@ya.ru",
      cabinet: "01"
    },
    {
      firstName: "Кристиан",
      lastName: "Стюарт",
      position: "Актриса",
      phone: "8 934 334 23 21",
      email: "krist.k@ya.ru",
      cabinet: "53"
    }
  ],
  sortStatus: {
    name: "firstName",
    type: "Down"
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case updateList().type:
      return {
        ...state,
        list: [...action.payload]
      };

    case updateSortStatus().type:
      return {
        ...state,
        sortStatus: {
          ...action.payload
        }
      };

    default:
      return state;
  }
};
