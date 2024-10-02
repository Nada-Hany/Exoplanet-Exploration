import styles from "./buttonright.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
 export default function ButtonRight({ setPlanet, currentPlanet }){
    function handleClick() {
        const newPlanet =
          currentPlanet === "first"
            ? "second"
            : currentPlanet === "second"
            ? "third"
            : "first";
        setPlanet(newPlanet);
      }
return <div><button onClick={handleClick} className={styles.ButtonRight}> <FontAwesomeIcon icon={faAngleLeft}/></button></div>
}