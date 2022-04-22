import React, { useEffect, useState } from "react";


function Personaje() {
  let [characters, setCharacters] = useState([]);

  useEffect(() => {
    if(!navigator.onLine) {
        if(localStorage.getItem("characters") === null) {
            setCharacters("Cargando personajes...");
        } else {
            setCharacters(JSON.parse(localStorage.getItem("characters")))
        }
    } else {

        const urlAPI = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=5940fff28db1e6a4206df6e802b2d6da&hash=5e093566eddf081a45296163589247c9`
        fetch(urlAPI).then((res) => res.json()).then((data) => {
            setCharacters(data.data.results);
            localStorage.setItem("characters", JSON.stringify(data.data.results));
        })
    }
    }, [])

  

    let renderPersonajes = () => {
        return characters.map((item, i) =>(
          <tr>
            <th scope="row">{item.id}</th>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td> <img src={item.thumbnail.path +'.'+ item.thumbnail.extension} style={{maxWidth: "250px"}}/></td>
          </tr>
        ));
    };
  
  
  return (
    
    <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nombre</th>
          <th scope="col">Descripcion</th>
          <th scope="col">Imagen</th>
        </tr>
      </thead>
      <tbody>
        {renderPersonajes()}

      </tbody>
    </table>
  </div>
  );
}

export default Personaje;