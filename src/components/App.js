import React, { useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  const addToy = (toy) => {
    setToys([...toys, toy])
  }

  const removeToy = (id) =>{
    setToys(toys.filter(toy => toy.id !== id))
  }

  const addLike = (id) => {
    setToys(toys.map(toy => {
      if(toy.id !== id) {
        return toy
      } else {
        return {...toy, likes: toy.likes + 1}
      }
    }))
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  



  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} setToys={setToys} removeToy={removeToy} addLike={addLike} />
    </>
  );
}

export default App;
