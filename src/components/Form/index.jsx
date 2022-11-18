import { useState } from "react";
import "./form.css";

const Form = ({ setListTransiction, addList }) => {
  const [listItem, setListItem] = useState({});

  const listCreate = (event) => {
    event.preventDefault();
    setListTransiction(listItem);
    addList(listItem);
  };
  return (
    <form action="" onSubmit={listCreate}>
      <div className="form-first-div">
        <label htmlFor="desc">Descrição</label>
        <input
          required
          type="text"
          placeholder="Digite aqui sua descrição"
          name="description"
          id="desc"
          onChange={(event) =>
            setListItem({ ...listItem, description: event.target.value })
          }
        />
        <span>Ex: Compra de Roupas</span>
      </div>

      <div className="form-second-div">
        <div className="secon-div-input">
          <label htmlFor="val">Valor</label>
          <input
            required
            type="number"
            placeholder="1"
            name="value"
            id="val"
            onChange={(event) =>
              setListItem({ ...listItem, value: event.target.valueAsNumber })
            }
          />
        </div>

        <div className="secon-div-select">
          <label htmlFor="entries">Tipo de valor</label>
          <select
            required
            placeholder="Entradas"
            name="entrie"
            id="entries"
            defaultValue="Entradas"
            onChange={(event) =>
              setListItem({ ...listItem, type: event.target.value })
            }
          >
            <option value="">Entradas</option>
            <option value="Entrada">Entrada</option>
            <option value="Saída">Saída</option>
          </select>
        </div>
      </div>
      <button className="btn-form">Inserir valor</button>
    </form>
  );
};

export default Form;
