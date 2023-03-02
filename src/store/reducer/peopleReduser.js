const people = [
  {
    id: 1,
    name: "Elena",
    link: "https://abrakadabra.fun/uploads/posts/2022-02/thumbs/1644169594_13-abrakadabra-fun-p-avatarka-s-ulibkoi-31.jpg",
    sex: "female",
  },
  {
    id: 2,
    name: "Oleg",
    link: "https://abrakadabra.fun/uploads/posts/2022-02/thumbs/1644169651_16-abrakadabra-fun-p-avatarka-s-ulibkoi-44.png",
    sex: "male",
  },
  {
    id: 3,
    name: "Peter",
    link: "https://abrakadabra.fun/uploads/posts/2022-02/thumbs/1644169577_14-abrakadabra-fun-p-avatarka-s-ulibkoi-37.jpg",
    sex: "male",
  },
];

const ADD = "ADD";

export const addPeopleAction = (name, link, sex) => {
  return {
    type: ADD,
    payload: {
      id: Date.now(),
      name,
      link,
      sex,
    },
  };
};

export const peopleReduser = (state = people, action) => {
    if (action.type === ADD) {
        return [...state, action.payload];
    } else {
        return state;
    }
};
