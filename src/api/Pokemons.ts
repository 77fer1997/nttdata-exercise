import axios from "axios";
import { useState } from "react";
import { iPokemons } from "../interfaces/pokemon";
import { URL_API } from "../services/pokemonapi";


export const Pokemons = () => {
    const [pokemons, setPokemons] = useState<Array<iPokemons>>();
    const getPokemons = async () => {
        try {
            const resp = await axios.get<Array<iPokemons>>(`${URL_API}/?idAuthor=1`);
            setPokemons(resp.data)
        } catch (error) {
            console.log(error);
        }
    }
    const postPokemons = async (name: string, image: string, attack: number, defense: number) => {
        try {
            await axios.post(`${URL_API}`,
                {
                    name: name,
                    image: image,
                    attack: attack,
                    defense: defense,
                    hp: 100,
                    type: "heroku",
                    idAuthor: 1
                }
            )
            console.log("entre");
            getPokemons();
        } catch (error) {
            console.log(error);
        }

    }
    const deletePokemons = async (id: number) => {
        try {
            await axios.delete(`${URL_API}/${id}`)
            getPokemons();
            console.log("first");
        } catch (error) {
            console.log(error)
        }
    }
    return { pokemons, getPokemons, postPokemons, deletePokemons }
}

