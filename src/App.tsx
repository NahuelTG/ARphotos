import { useState } from "react";
import ARMarkerViewer from "./components/ARMarkerViewer";
import "./App.css";

function App() {
   const [showAR, setShowAR] = useState(false);

   return (
      <div className="App">
         {!showAR ? (
            <button className="start-ar-button" onClick={() => setShowAR(true)}>
               Ingresar a experiencia AR
            </button>
         ) : (
            <ARMarkerViewer position="0 0.25 0" rotation="0 0 0" scale="1 1 1" />
         )}
      </div>
   );
}

export default App;
