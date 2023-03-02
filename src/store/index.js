import { createStore } from "redux";
import { peopleReduser } from "./reducer/peopleReduser";

export const store = createStore(peopleReduser);
