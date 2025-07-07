// src/components/ARMarkerViewer.tsx
import { useEffect, useRef } from "react";

interface ARMarkerViewerProps {
   modelUrl: string;
   patternUrl?: string; // si no se da, usamos "hiro"
   scale?: string;
   position?: string;
   rotation?: string;
}

const ARMarkerViewer: React.FC<ARMarkerViewerProps> = ({
   modelUrl,
   patternUrl,
   scale = "0.5 0.5 0.5",
   position = "0 0 0",
   rotation = "0 0 0",
}) => {
   const sceneRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if (sceneRef.current && sceneRef.current.childNodes.length === 0) {
         const scene = document.createElement("a-scene");
         scene.setAttribute("embedded", "");
         scene.setAttribute("arjs", "sourceType: webcam; debugUIEnabled: false;");

         const marker = document.createElement("a-marker");
         if (patternUrl) {
            marker.setAttribute("type", "pattern");
            marker.setAttribute("url", patternUrl);
         } else {
            marker.setAttribute("preset", "hiro");
         }

         const model = document.createElement("a-entity");
         model.setAttribute("gltf-model", modelUrl);
         model.setAttribute("scale", scale);
         model.setAttribute("position", position);
         model.setAttribute("rotation", rotation);

         marker.appendChild(model);
         scene.appendChild(marker);

         const camera = document.createElement("a-entity");
         camera.setAttribute("camera", "");
         scene.appendChild(camera);

         sceneRef.current.appendChild(scene);
      }
   }, [modelUrl, patternUrl, scale, position, rotation]);

   return <div ref={sceneRef} className="ar-marker-container" />;
};

export default ARMarkerViewer;
