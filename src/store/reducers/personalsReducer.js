import { updateList, updateSortStatus } from "../actions/personalsAction";

export const initialState = {
  list: [
    {
      firstName: "Раджеш",
      lastName: "Кутрапали",
      position: "Астроном",
      phone: "8 935 232 34 45",
      email: "radj.f@ya.ru",
      cabinet: "34"
    },
    {
      firstName: "Шелдон",
      lastName: "Купер",
      position: "Физик-теоретик",
      phone: "8 934 232 00 21",
      email: "sheldon.k@ya.ru",
      cabinet: "01"
    },
    {
      firstName: "Говард",
      lastName: "Воловиц",
      position: "Инженер",
      phone: "8 935 334 33 31",
      email: "govard.k@ya.ru",
      cabinet: "51"
    },
    {
      firstName: "Кристиан",
      lastName: "Стюарт",
      position: "Актриса",
      phone: "8 934 301 23 25",
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
