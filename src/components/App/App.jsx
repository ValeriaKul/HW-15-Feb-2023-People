import { useState } from "react";
import AddForm from "../AddForm/AddForm";
import Female from "../Female/Female";
import Header from "../Header/Header";
import Male from "../Male/Male";

function App() {
  const [newPeople, setNewPeople] = useState([
    {
      id: 1,
      name: "Elena",
      link: "https://abrakadabra.fun/uploads/posts/2022-02/thumbs/1644169594_13-abrakadabra-fun-p-avatarka-s-ulibkoi-31.jpg",
      sex: "female",
    },
    {
      id: 2,
      name: "Oleg",
      link: "https://abrakadabra.fun/uploads/posts/2022-02/thumbs/1644169651_16-abrakadabra-fun-p-avatarka-s-ulibkoi-44.png",
      sex: "male",
    },
    {
      id: 3,
      name: "Peter",
      link: "https://abrakadabra.fun/uploads/posts/2022-02/thumbs/1644169577_14-abrakadabra-fun-p-avatarka-s-ulibkoi-37.jpg",
      sex: "male",
    }
  ]);

  const addPeople = (event) => {
    event.preventDefault();
    const { name, link, sex } = event.target;
    const newEntry = {
      id: Date.now(),
      name: name.value,
      link: link.value,
      sex: sex.value,
    };
    setNewPeople([...newPeople, newEntry]);
    name.value = "";
    link.value = "";
    sex.value = "";
  };
  console.log(newPeople);
  return (
    <div className="App">
      <Header />
      <AddForm addPeople={addPeople} />
      <Male newPeople={newPeople} />
      <Female newPeople={newPeople} />
    </div>
  );
}

export default App;
