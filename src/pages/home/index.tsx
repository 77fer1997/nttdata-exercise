import {
  ButtonComponent,
  IconButtonComponent,
  RangeInputComponent,
  SearchInputComponent,
  TableComponent,
  TextInputComponent,
} from "../../components";
import { Pokemons } from "../../api";

import "./index.css";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { iPokemons } from "../../interfaces/pokemon";

export const Home = () => {
  const [searchText, setSearchText] = useState({});
  const [filteredPokemons, setFilteredPokemons] = useState<Array<iPokemons>>();
  const [newPokemonText, setNewPokemonText] = useState({
    nombre: "",
    imagen: "",
    ataque: 0,
    defensa: 0,
  });
  const [editPokemonText, setEditPokemonText] = useState({
    id: 0,
    nombre: "",
    imagen: "",
    ataque: 0,
    defensa: 0,
  })
  const [edit, setEdit] = useState<boolean>(false);
  const { pokemons, getPokemons, postPokemons, deletePokemons, putPokemons } =
    Pokemons();
  const filterPokemons = (value: string) => {
    const filteredPokemons = pokemons?.filter((pokemon) => {
      if (
        pokemon.name
          .toString()
          .toLowerCase()
          .includes(value.toLocaleLowerCase())
      ) {
        return pokemon;
      } else {
        return null
      }
    });
    setFilteredPokemons(filteredPokemons);
  };
  const handleEditPokemon = (pokemon: iPokemons) => {
    setEdit(true);
    setEditPokemonText({
      ...editPokemonText,
      id: pokemon.id,
      nombre: pokemon.name,
      imagen: pokemon.image,
      ataque: pokemon.attack,
      defensa: pokemon.defense
    })
  };
  const handleNewInputChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    setNewPokemonText({
      ...newPokemonText,
      [name]: value,
    });
  };
  const handleEditInputChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    setEditPokemonText({
      ...editPokemonText,
      [name]: value,
    });
  };
  const handleSearchInputChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    setSearchText({
      ...searchText,
      [name]: value,
    });
    filterPokemons(value);
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log("hola")
    if (edit) {
      console.log("entre aqui");
      let { nombre, imagen, ataque, defensa, id } = editPokemonText;
      putPokemons(id, nombre, imagen, ataque, defensa)
      console.log(id);
    } else {
      let { nombre, imagen, ataque, defensa } = newPokemonText;
      postPokemons(nombre, imagen, ataque, defensa);
    }


    console.log("hola");
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className="container">
      <div className="grid">
        <h1 className="subtitle">Listado de pokemon</h1>
        <div className="content-search">
          <SearchInputComponent
            name="search"
            onChange={handleSearchInputChange}
          />
          <ButtonComponent label="Nuevo" onClick={() => setEdit(false)}>
            <IconButtonComponent>
              <BsIcons.BsPlusLg />
            </IconButtonComponent>
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
            {Object.keys(searchText).length !== 0
              ? filteredPokemons?.map((pokemon) => (
                <tr key={pokemon.id}>
                  <td>{pokemon.name}</td>
                  <td>
                    <img
                      className="pokemon-image"
                      src={pokemon.image}
                      alt=""
                    />
                  </td>
                  <td>{pokemon.attack}</td>
                  <td>{pokemon.defense}</td>
                  <td>
                    <div className="icon-button-container">
                      <IconButtonComponent>
                        <AiIcons.AiOutlineEdit
                          onClick={() => handleEditPokemon(pokemon)}
                        />
                      </IconButtonComponent>
                      <IconButtonComponent
                        onClick={() => deletePokemons(pokemon.id)}
                      >
                        <AiIcons.AiOutlineDelete />
                      </IconButtonComponent>
                    </div>
                  </td>
                </tr>
              ))
              : pokemons?.map((pokemon) => (
                <tr key={pokemon.id}>
                  <td>{pokemon.name}</td>
                  <td>
                    <img
                      className="pokemon-image"
                      src={pokemon.image}
                      alt=""
                    />
                  </td>
                  <td>{pokemon.attack}</td>
                  <td>{pokemon.defense}</td>
                  <td>
                    <div className="icon-button-container">
                      <IconButtonComponent
                        onClick={() => handleEditPokemon(pokemon)}
                      >
                        <AiIcons.AiOutlineEdit />
                      </IconButtonComponent>
                      <IconButtonComponent
                        onClick={() => deletePokemons(pokemon.id)}
                      >
                        <AiIcons.AiOutlineDelete />
                      </IconButtonComponent>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </TableComponent>

        <div className="new-pokemon">
          <h2 className="subtitle">
            {" "}
            {edit ? "Edit Pokemon" : "Nuevo Pokemon"}{" "}
          </h2>
          <form onSubmit={handleSubmit}>
            {!edit ? (
              <div className="new-pokemon_form">
                <div className="input-group">
                  <TextInputComponent
                    label="Nombre:"
                    name="nombre"
                    onChange={handleNewInputChange}
                    placeholder="nombre"
                    value={newPokemonText.nombre}
                  />
                  <TextInputComponent
                    label="Imagen:"
                    name="imagen"
                    onChange={handleNewInputChange}
                    placeholder="url"
                    value={newPokemonText.imagen}
                  />
                </div>
                <div className="input-group">
                  <RangeInputComponent
                    label="Ataque:"
                    name="ataque"
                    onChange={handleNewInputChange}
                    value={newPokemonText.ataque}
                  />
                  <RangeInputComponent
                    label="Defensa:"
                    name="defensa"
                    onChange={handleNewInputChange}
                    value={newPokemonText.defensa}
                  />
                </div>
              </div>
            ) : (
              <div className="new-pokemon_form">
                <div className="input-group">
                  <TextInputComponent
                    label="Nombre:"
                    name="nombre"
                    onChange={handleEditInputChange}
                    placeholder="nombre"
                    value={editPokemonText.nombre}
                  />
                  <TextInputComponent
                    label="Imagen:"
                    name="imagen"
                    onChange={handleEditInputChange}
                    placeholder="url"
                    value={editPokemonText.imagen}
                  />
                </div>
                <div className="input-group">
                  <RangeInputComponent
                    label="Ataque:"
                    name="ataque"
                    onChange={handleEditInputChange}
                    value={editPokemonText.ataque}
                  />
                  <RangeInputComponent
                    label="Defensa:"
                    name="defensa"
                    onChange={handleEditInputChange}
                    value={editPokemonText.defensa}
                  />
                </div>
              </div>
            )}

            <div className="button-container">

              <ButtonComponent label="Guardar" type="submit" />
              <ButtonComponent
                onClick={() => console.log("cancelar")}
                label="Cancelar"
              />
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};
