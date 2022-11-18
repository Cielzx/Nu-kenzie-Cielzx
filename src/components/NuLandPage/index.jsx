import "./style.css";
import demonstrative from "../../assets/img/Group262.svg";
const LandPage = ({ setLogged }) => {
  function login() {
    setLogged(false);
  }

  return (
    <main className="main-nu-kenzie">
      <section className="sec-first">
        <div className="first-nu-div">
          <h1>
            <span className="nu-span">Nu</span> kenzie
          </h1>
          <div className="second-nu-div">
            <h2>Centralize o controle das suas finanças</h2>
            <span>de forma rapida e segura</span>
          </div>
        </div>
        <button className="nukenzie-btn" onClick={login}>
          Iniciar
        </button>
      </section>
      <section>
        <div>
          <img src={demonstrative} alt="" />
        </div>
      </section>
    </main>
  );
};

export default LandPage;
