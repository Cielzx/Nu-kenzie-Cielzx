import "./list.css";

const List = ({ listTransiction, remover }) => {
  return (
    <ul>
      {listTransiction.length > 0 ? (
        listTransiction.map((listAtual, index) =>
          listAtual.type === "Entrada" ? (
            <li className="list-entries" key={index}>
              <div className="list-f-div">
                <p>{listAtual.description}</p>
                <span>{listAtual.type}</span>
              </div>
              <div className="list-s-div">
                <p>{listAtual.value.toFixed(2)}</p>
                <button
                  className="list-btn"
                  onClick={() => remover(listAtual)}
                ></button>
              </div>
            </li>
          ) : (
            <li className="list-exit" key={index}>
              <div className="list-f-div">
                <p>{listAtual.description}</p>
                <span>{listAtual.type}</span>
              </div>
              <div className="list-s-div">
                <p>-{listAtual.value.toFixed(2)}</p>
                <button
                  className="list-btn"
                  onClick={() => remover(listAtual)}
                ></button>
              </div>
            </li>
          )
        )
      ) : (
        <p>Você ainda não possui nenhum lançamento</p>
      )}
    </ul>
  );
};

export default List;
{
  /* <li>
        <div className="list-f-div">
          <p>Salario - Mês Dezembro</p>
          <span>Entrada</span>
        </div>
        <div className="list-s-div">
          <p>R$ 6.000,00</p>
          <button className="list-btn"></button>
        </div>
      </li> */
}
