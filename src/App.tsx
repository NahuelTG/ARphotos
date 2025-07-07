import ARMarkerViewer from "./components/ARMarkerViewer";
import "./App.css";

function App() {
   return (
      <div className="App">
         <ARMarkerViewer
            modelUrl="/models/bear.glb"
            patternUrl="/patterns/bear.patt"
            scale="0.5 0.5 0.5"
            position="0 0 0"
            rotation="0 180 0"
         />
      </div>
   );
}

export default App;
