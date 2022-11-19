import "./dash.css";
import List from "../List";
import Form from "../Form";
import { useState } from "react";

const DashBoard = ({
  setLogged,
  listTransiction,
  setListTransiction,
  addList,
  remover,
  setFiltered,
}) => {
  const logout = () => {
    setLogged(true);
  };

  return (
    <div className="mobile-div">
      <header>
        <h1>
          <span className="spn-head">Nu</span> Kenzie
        </h1>
        <button className="btn-button" onClick={logout}>
          Inicio
        </button>
      </header>

      <main className="main-dash">
        <section>
          <Form setListTransiction={setListTransiction} addList={addList} />
          {listTransiction.length > 0 ? (
            <div className="total-value">
              <div>
                <h2>valor Total</h2>
                <span>O valor se refere ao saldo</span>
              </div>

              <p>
                $
                {listTransiction
                  .reduce((acumulador, valorAtual) => {
                    if (listTransiction.type === "Saìda") {
                      return acumulador - valorAtual.value;
                    } else {
                      return acumulador + valorAtual.value;
                    }
                  }, 0)
                  .toFixed(2)}
              </p>
            </div>
          ) : (
            <></>
          )}
        </section>

        <section className="mobile-sect">
          <div className="list-div">
            <h5>Resumo Financeiro</h5>
            <div className="buttons">
              <button onClick={() => setFiltered("todos")}>Todos</button>
              <button onClick={() => setFiltered("Entrada")}>Entradas</button>
              <button onClick={() => setFiltered("Saída")}>Saidas</button>
            </div>
          </div>
          <List listTransiction={listTransiction} remover={remover} />
        </section>
      </main>
    </div>
  );
};

export default DashBoard;
