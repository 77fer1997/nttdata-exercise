import axios from "axios";
import { iPokemons } from "../interfaces/pokemon";
export const getPokemons = async () => {
    const resp = await axios.get<Array<iPokemons>>('https://bp-pokemons.herokuapp.com/?idAuthor=1');
    return resp.data
}
