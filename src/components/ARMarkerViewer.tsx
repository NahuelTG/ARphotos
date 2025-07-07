// src/components/ARMarkerViewer.tsx
import { useEffect, useRef } from "react";

interface ARMarkerViewerProps {
   scale?: string;
   position?: string;
   rotation?: string;
}

const ARMarkerViewer: React.FC<ARMarkerViewerProps> = ({ scale = "0.5 0.5 0.5", position = "0 0 0", rotation = "0 0 0" }) => {
   const sceneRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if (sceneRef.current && sceneRef.current.childNodes.length === 0) {
         const scene = document.createElement("a-scene");
         scene.setAttribute("embedded", "");
         scene.setAttribute("arjs", "sourceType: webcam; debugUIEnabled: false;");

         const marker = document.createElement("a-marker");
         marker.setAttribute("preset", "hiro");

         const box = document.createElement("a-box");
         box.setAttribute("color", "red");
         box.setAttribute("depth", "0.5");
         box.setAttribute("height", "0.5");
         box.setAttribute("width", "0.5");
         box.setAttribute("position", position);
         box.setAttribute("rotation", rotation);
         box.setAttribute("scale", scale);

         marker.appendChild(box);
         scene.appendChild(marker);

         const camera = document.createElement("a-entity");
         camera.setAttribute("camera", "");
         scene.appendChild(camera);

         sceneRef.current.appendChild(scene);
      }
   }, [scale, position, rotation]);

   return <div ref={sceneRef} className="ar-marker-container" />;
};

export default ARMarkerViewer;
