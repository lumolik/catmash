export interface CatModel {
    url: string,
    id: string,
    vote: number
}

export let getCats = (): CatModel[] => {
    const cats: CatModel[] = require('../../cats.json').images;
    return cats.map(({ url, id }) => ({ url, id, vote: 0 }));
}
