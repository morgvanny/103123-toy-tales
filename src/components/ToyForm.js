import React, {useState} from "react";

function ToyForm({addToy}) {

  const [newToy, setNewToy] = useState( {name:"", image:""})

  const handleChange = (event) => {
    setNewToy({...newToy, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event)=>{
    event.preventDefault()
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({...newToy, likes: 0})
    }).then(r => r.json()).then(toy => {
      setNewToy({name: "", image: ""})
      addToy(toy)
    })
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          value={newToy.name}
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          value={newToy.image}
          type="text"
          name="image"
          onChange={handleChange}
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
