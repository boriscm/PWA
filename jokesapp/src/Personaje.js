import React, { useEffect, useState } from "react";


function personaje() {
  let [characters, setCharacters] = useState([]);

  useEffect(() => {
    if(!navigator.onLine) {
        if(localStorage.getItem("characters") === null) {
            setCharacters("Cargando personajes...");
        } else {
            setCharacters(JSON.parse(localStorage.getItem("characters")))
        }
    } else {
        // CombiParam (ts + private key + public key)
        // eslint-disable-next-line no-useless-concat
        const urlAPI = `https://gateway.marvel.com/v1/public/comics?ts=1&apikey=5940fff28db1e6a4206df6e802b2d6da&hash=5e093566eddf081a45296163589247c9`
        fetch(urlAPI).then((res) => res.json()).then((data) => {
            console.log("Respose", data.data.results);
            setCharacters(data.data.results);
            console.log(JSON.stringify(data.data.results))
            localStorage.setItem("characters", JSON.stringify(data.data.results));
        })
    }
    }, [])
  
  
  
  return (
    
    <div>


    </div>
  );
}

export default personaje;