import LandPage from "./components/NuLandPage";
import DashBoard from "./components/DashBoard";
import "./App.css";
import { useState } from "react";
// import { useState } from "react";

function App() {
  const [listTransiction, setListTransiction] = useState([]);
  const [logged, setLogged] = useState(false);
  const [filtered, setFiltered] = useState("todos");

  const filter = listTransiction.filter((list) =>
    filtered === "todos" ? list : list.type === filtered
  );
  // console.log(filter);

  const addList = (newlist) => {
    console.log(newlist);
    setListTransiction([...listTransiction, newlist]);
  };

  const removeList = (list) => {
    const filtro = listTransiction.filter((lista) => {
      if (list !== lista) {
        return lista;
      }
    });

    setListTransiction(filtro);
  };

  return (
    <div className="App">
      <div className="mobile-div">
        {logged ? (
          <LandPage setLogged={setLogged} listTransiction={listTransiction} />
        ) : (
          <DashBoard
            setLogged={setLogged}
            listTransiction={filter}
            setListTransiction={setListTransiction}
            addList={addList}
            remover={removeList}
            setFiltered={setFiltered}
          />
        )}
      </div>
    </div>
  );
}

export default App;
