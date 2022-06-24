import {
  ButtonComponent,
  IconButtonComponent,
  RangeInputComponent,
  SearchInputComponent,
  TableComponent,
  TextInputComponent,
} from "../../components";
import { getPokemons } from "../../api/getPokemons";
import "./index.css";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import { ChangeEvent, useEffect, useState } from "react";
import { iPokemons } from "../../interfaces/pokemon";

export const Home = () => {
  const [pokemons, setPokemons] = useState<Array<iPokemons>>()
  const [searchText, setSearchText] = useState({})
  const [newPokemonText, setNewPokemonText] = useState({ nombre: '', imagen: '' })
  const [filteredPokemons, setFilteredPokemons] = useState<Array<iPokemons>>()
  const handleSearchInputChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
    setSearchText(
      {
        ...searchText,
        [name]: value
      }
    )
    filterPokemons(value)
  }
  const handleNewInputChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
    setNewPokemonText(
      {
        ...newPokemonText,
        [name]: value
      }
    )
  }
  const filterPokemons = (value: string) => {
    const filteredPokemons = pokemons?.filter((pokemon) => {
      if (pokemon.name.toString().toLowerCase().includes(value.toLocaleLowerCase())) {
        return pokemon
      }

    })
    setFilteredPokemons(filteredPokemons)
  }
  useEffect(() => {
    getPokemons().then((pokemons) => {
      setPokemons(pokemons)
    })

  }, [])

  return (
    <div className="container">
      <div className="grid">
        <h1 className="subtitle">Listado de pokemon</h1>
        <div className="content-search">
          <SearchInputComponent name="search" onChange={handleSearchInputChange} />
          <ButtonComponent>
            <IconButtonComponent>
              <BsIcons.BsPlusLg />
            </IconButtonComponent>
            <p>Nuevo</p>
          </ButtonComponent>
        </div>

        <TableComponent>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Imagen</th>
              <th>Ataque</th>
              <th>Defensa</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(searchText).length !== 0 ? filteredPokemons?.map((pokemon) =>
            (
              <tr key={pokemon.id}>
                <td>{pokemon.name}</td>
                <td>
                  <img className="pokemon-image" src={pokemon.image} alt="" />
                </td>
                <td>{pokemon.attack}</td>
                <td>{pokemon.defense}</td>
                <td>
                  <div className="icon-button-container">
                    <IconButtonComponent>
                      <AiIcons.AiOutlineEdit />
                    </IconButtonComponent>
                    <IconButtonComponent>
                      <AiIcons.AiOutlineDelete />
                    </IconButtonComponent>
                  </div>
                </td>
              </tr>
            )
            ) : pokemons?.map((pokemon) =>
            (
              <tr key={pokemon.id}>
                <td>{pokemon.name}</td>
                <td>
                  <img className="pokemon-image" src={pokemon.image} alt="" />
                </td>
                <td>{pokemon.attack}</td>
                <td>{pokemon.defense}</td>
                <td>
                  <div className="icon-button-container">
                    <IconButtonComponent>
                      <AiIcons.AiOutlineEdit />
                    </IconButtonComponent>
                    <IconButtonComponent>
                      <AiIcons.AiOutlineDelete />
                    </IconButtonComponent>
                  </div>
                </td>
              </tr>
            )
            )}

          </tbody>
        </TableComponent>

        <div className="new-pokemon">
          <h2 className="subtitle">Nuevo Pokemon</h2>
          <form className="new-pokemon_form">
            <div className="input-group">
              <TextInputComponent label="Nombre:" name="nombre" onChange={handleNewInputChange} placeholder="nombre" />
              <TextInputComponent label="Imagen:" name="imagen" onChange={handleNewInputChange} placeholder="url" />
            </div>
            <div className="input-group">
              <RangeInputComponent label="Ataque:" name="ataque" />
              <RangeInputComponent label="Defensa:" name="defensa" />
            </div>
          </form>
          <div className="button-container">
            <ButtonComponent>Guardar</ButtonComponent>
            <ButtonComponent>Cancelar</ButtonComponent>
          </div>
        </div>
      </div>
    </div>
  );
};
