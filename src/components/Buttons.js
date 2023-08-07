import satData from "./satData";
import styles from "./styling.css"

const Buttons = ({displaySats, setSat, filterByType}) => {
  return (
    
    <div className="flex-container">
      {displaySats.map((sat, id) => {
        return (
          <button onClick={() => filterByType(sat)} key={id}>
            {sat} Orbit
          </button>
        );
      })}
  
  
      <button onClick={() => setSat(satData)}>Display All Satellites</button>
      
    </div>
  );
  };

export default Buttons;