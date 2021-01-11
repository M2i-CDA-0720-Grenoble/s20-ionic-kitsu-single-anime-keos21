import { AnimeAttributes } from ".";

export default interface Anime {
  id: number,
  type: string,
  links: {
    self: string,
  },
  attributes: AnimeAttributes,
  relationships: any,
}
