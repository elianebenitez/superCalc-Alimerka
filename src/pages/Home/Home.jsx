import styles from "./Home.module.css";
import ViewDetailsButton from "../../componentes/buttons/ViewDetailsButton/ViewDetailsButton";

function Home() {
  return (
    <div>
      <section>
        <div>
          <h1>Organiza tu compra</h1>
          <p>
            Calcula el precio total de tu compra con impuestos incluidos.
            Gestiona tu lista de la compra de forma rápida y sencilla
          </p>
          <ViewDetailsButton/>
        </div>
      </section>
    </div>
  );
}

export default Home;