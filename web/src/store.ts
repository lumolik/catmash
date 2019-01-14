import { getCats } from './services/catService';

function getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
}

export const store = {
    state: { cats: getCats() },
    addVote(id: string) {
        const index = this.state.cats.findIndex((cat) => cat.id === id);
        this.state.cats[index].vote += 1;
    },
    getNextPairOfCat() {
        return {
            firstcat: this.state.cats[getRandomInt(this.state.cats.length - 1)],
            secondCat: this.state.cats[getRandomInt(this.state.cats.length - 1)],
        };
    },
};
