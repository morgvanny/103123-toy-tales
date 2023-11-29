import React from "react";
import ToyCard from "./ToyCard";
import { useEffect} from 'react'
function ToyContainer({toys, setToys, addLike, removeToy}) {
  
  useEffect(()=>{
    fetch("http://localhost:3001/toys").then(r => r.json()).then(setToys)
  }, [])

  return (
    <div id="toy-collection">{toys.map(toy => {
      return <ToyCard addLike={addLike} key={toy.id} id={toy.id} name={toy.name} image={toy.image} likes={toy.likes} removeToy={removeToy}/>
    })}</div>
  );
}

export default ToyContainer;
