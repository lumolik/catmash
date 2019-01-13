import { getCats } from "./services/catService";

export const store = {
    state: { cats: getCats() },
}