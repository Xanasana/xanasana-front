// // 'use client';

// import { useState } from "react";
// import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import { motion } from 'framer-motion';
// import L from 'leaflet';
// import ReactDOMServer from 'react-dom/server';
// import { FaLandmark, FaMapMarkerAlt } from 'react-icons/fa';

// // Coordenadas del centro de Gijón
// const center = [43.545260, -5.661120];

// // Función para centrar el mapa en Gijón y hacer zoom en una posición específica
// const CenterMap = ({ coords, zoom }) => {
//   const map = useMap();
//   map.setView(coords, zoom);
//   return null;
// };

// // Función para crear un icono personalizado de Leaflet usando divIcon para los marcadores
// const createCustomIcon = (icon, isHighlighted) => {
//   const iconSvg = ReactDOMServer.renderToString(icon);
//   const iconColor = isHighlighted ? 'text-[#473936]' : 'text-[#f0cfbc]';
//   return L.divIcon({
//     html: `<div class="flex justify-center items-center ${iconColor}">
//              ${iconSvg}
//            </div>`,
//     className: 'custom-icon',
//     iconSize: [30, 30],
//     iconAnchor: [15, 30],
//   });
// };

// const Locations = () => {
//   const [highlightedMarker, setHighlightedMarker] = useState(null);
//   const [mapCenter, setMapCenter] = useState(center);
//   const [mapZoom, setMapZoom] = useState(13);

//   // Lista de direcciones predefinidas con íconos
//   const locations = [
//     {
//       centro: 'Ayuntamiento',
//       address: 'Plaza Mayor, Gijón',
//       position: [43.54521927962993, -5.662092015984688],
//       icon: <FaLandmark className="text-2xl" />,
//     },
//     {
//       centro: 'Centro 1',
//       address: 'Calle Rio de Oro, 113, Gijón',
//       position: [43.52673084884848, -5.664107575331936],
//       icon: <FaMapMarkerAlt className="text-2xl" />,
//     },
//     { 
//       centro: 'Centro 2',
//       address: 'Calle Uría, 15, Gijón',
//       position: [43.53899851019061, -5.656442192699511],
//       icon: <FaMapMarkerAlt className="text-2xl" />,
//     },
//     { 
//       centro: 'Centro 3',
//       address: 'Avenida de la Costa, 50, Gijón',
//       position: [43.5370937604367, -5.660335231327924],
//       icon: <FaMapMarkerAlt className="text-2xl" />,
//     },
//   ];

//   const handleMarkerClick = (index) => {
//     setHighlightedMarker(index);
//     setMapCenter(locations[index].position);
//     setMapZoom(16);
//   };

//   return (
//     <section 
//       className="w-full min-h-screen flex flex-col lg:flex-row items-start gap-8 p-4 z-10"
//     >
//       {/* Mapa */}
//       <motion.div 
//         className="w-full lg:w-2/3 h-[500px] shadow-lg rounded-tl-[50px] rounded-bl-[0px] rounded-tr-[0px] rounded-br-[50px] overflow-hidden border-4 border-[#f0cfbc] order-2 lg:order-1"
//         initial={{opacity: 0, x: -80}}
//         animate={{
//           opacity: 1,
//           x: 0,
//           transition: {
//             delay: 1.2,
//             duration: 0.8,
//             ease: 'easeIn',
//           }
//         }}
//       >
//         <MapContainer 
//           className='p-4'
//           center={mapCenter} 
//           zoom={mapZoom} 
//           style={{ height: "100%", width: "100%" }}
//         >
//           <TileLayer
//             url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}.png"
//             attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> contributors'
//           />
//           <CenterMap coords={mapCenter} zoom={mapZoom} />
//           {locations.map((location, idx) => (
//             <Marker 
//               key={idx} 
//               position={location.position} 
//               icon={createCustomIcon(location.icon, highlightedMarker === idx)}
//               eventHandlers={{
//                 click: () => handleMarkerClick(idx),
//               }}
//             >
//               <Popup>
//                 <div>
//                   <h3 className="font-semibold">{location.centro}</h3>
//                   <p>{location.address}</p>
//                   <a
//                     href={`https://www.google.com/maps/dir/?api=1&destination=${location.position[0]},${location.position[1]}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-500 underline"
//                   >
//                     Cómo llegar
//                   </a>
//                 </div>
//               </Popup>
//             </Marker>
//           ))}
//         </MapContainer>
//       </motion.div>

//       {/* Lista de Direcciones */}
//       <motion.div 
//         className="w-full lg:w-1/3 rounded-lg bg-[#f0cfbc] max-w-[580px] gap-4 p-10 mx-auto lg:mx-0 rounded-tl-[50px] rounded-br-[50px] shadow-lg order-1 lg:order-2"
//         initial={{opacity: 0, x: 80}}
//         animate={{
//           opacity: 1,
//           x: 0,
//           transition: {
//             delay: 1.2,
//             duration: 0.8,
//             ease: 'easeIn',
//           }
//         }}
//       >
//         <h2 className="text-lg font-semibold">Direcciones</h2>
//         <ul className="mt-4">
//           {locations.map((location, idx) => (
//             <li 
//               key={idx}
//               className={`p-2 flex items-center gap-2 cursor-pointer ${highlightedMarker === idx ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
//               onMouseEnter={() => setHighlightedMarker(idx)}
//               onMouseLeave={() => setHighlightedMarker(null)}
//               onClick={() => handleMarkerClick(idx)}
//             >
//               {location.centro === 'Ayuntamiento' ? (
//                 <FaLandmark className="text-[#473936] text-xl" />
//               ) : (
//                 <FaMapMarkerAlt className="text-[#473936] text-xl" />
//               )}
//               <span>{location.centro}: {location.address}</span>
//             </li>
//           ))}
//         </ul>
//       </motion.div>
//     </section>
//   );
// };

// export default Locations;


'use client';

import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { motion } from 'framer-motion';
import L from 'leaflet';
import ReactDOMServer from 'react-dom/server';
import { FaLandmark, FaMapMarkerAlt } from 'react-icons/fa';

// Coordenadas del centro de Gijón
const center = [43.545260, -5.661120];

// Función para centrar el mapa en Gijón y hacer zoom en una posición específica
const CenterMap = ({ coords, zoom }) => {
  const map = useMap();
  map.setView(coords, zoom);
  return null;
};

// Función para crear un icono personalizado de Leaflet usando divIcon para los marcadores
const createCustomIcon = (icon, isHighlighted) => {
  const iconSvg = ReactDOMServer.renderToString(icon);
  const iconColor = isHighlighted ? 'text-[#473936]' : 'text-[#f19687]';
  return L.divIcon({
    html: `<div class="flex justify-center items-center ${iconColor}">
             ${iconSvg}
           </div>`,
    className: 'custom-icon',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });
};

const Locations = () => {
  const [highlightedMarker, setHighlightedMarker] = useState(null);
  const [mapCenter, setMapCenter] = useState(center);
  const [mapZoom, setMapZoom] = useState(13);

  // Lista de direcciones predefinidas con íconos
  const locations = [
    {
      centro: 'Ayuntamiento',
      address: 'Plaza Mayor, Gijón',
      position: [43.54521927962993, -5.662092015984688],
      icon: <FaLandmark className="text-2xl" />,
    },
    {
      centro: 'Centro 1',
      address: 'Calle Rio de Oro, 113, Gijón',
      position: [43.52673084884848, -5.664107575331936],
      icon: <FaMapMarkerAlt className="text-2xl" />,
    },
    { 
      centro: 'Centro 2',
      address: 'Calle Uría, 15, Gijón',
      position: [43.53899851019061, -5.656442192699511],
      icon: <FaMapMarkerAlt className="text-2xl" />,
    },
    { 
      centro: 'Centro 3',
      address: 'Avenida de la Costa, 50, Gijón',
      position: [43.5370937604367, -5.660335231327924],
      icon: <FaMapMarkerAlt className="text-2xl" />,
    },
  ];

  const handleMarkerClick = (index) => {
    setHighlightedMarker(index);
    setMapCenter(locations[index].position);
    setMapZoom(16); // Realiza zoom solo al hacer click
  };

  const handleHover = (index) => {
    setHighlightedMarker(index);
  };

  const handleHoverOut = () => {
    setHighlightedMarker(null);
  };

  return (
    <section 
      className="w-full min-h-screen flex flex-col lg:flex-row items-start gap-2 p-4 z-10"
    >
      {/* Mapa */}
      <motion.div 
        className="w-full lg:w-2/3 h-[300px] lg:h-[500px] shadow-lg rounded-tl-[0px] lg:rounded-tl-[50px] rounded-br-[50px] lg:rounded-br-[0px] overflow-hidden border-4 border-[#f0cfbc] order-2 lg:order-1"
        initial={{opacity: 0, x: -80}}
        animate={{
          opacity: 1,
          x: 0,
          transition: {
            delay: 1.2,
            duration: 0.8,
            ease: 'easeIn',
          }
        }}
      >
        <MapContainer 
          className='p-4'
          center={mapCenter} 
          zoom={mapZoom} 
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> contributors'
          />
          <CenterMap coords={mapCenter} zoom={mapZoom} />
          {locations.map((location, idx) => (
            <Marker 
              key={idx} 
              position={location.position} 
              icon={createCustomIcon(location.icon, highlightedMarker === idx)}
              eventHandlers={{
                click: () => handleMarkerClick(idx),
              }}
            >
              <Popup>
                <div className='flex flex-col items-start justify-center gap-[-10px] '>
                  <h3 className="text-[18px] leading-[20px] font-semibold ont-montserrat">{location.centro}</h3>
                  <p className=" text-[14px] leading-[14px] font-montserrat">{location.address}</p>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${location.position[0]},${location.position[1]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] leading-[14px] font-montserrat font-semibold text-blue-500 underline"
                  >
                    Cómo llegar
                  </a>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </motion.div>

      {/* Lista de Direcciones */}
      <motion.div 
        className="w-full lg:h-[500px] lg:w-1/3 rounded-lg bg-[#f0cfbc] lg:min-w-[480px] lg:max-w-[580px] gap-4 p-6 sm:p-10 mx-auto lg:mx-0 rounded-tl-[50px] lg:rounded-tl-[0px] ounded-br-[0px] lg:rounded-br-[50px] shadow-lg order-1 lg:order-2"
        initial={{opacity: 0, x: 80}}
        animate={{
          opacity: 1,
          x: 0,
          transition: {
            delay: 1.2,
            duration: 0.8,
            ease: 'easeIn',
          }
        }}
      >
        <h2 className="text-lg font-semibold">Direcciones</h2>
        <ul className="mt-4">
          {locations.map((location, idx) => (
            <li 
              key={idx}
              className={`p-2 flex items-start xs:items-center gap-2 cursor-pointer ${highlightedMarker === idx ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
              onMouseEnter={() => handleHover(idx)}
              onMouseLeave={handleHoverOut}
              onClick={() => handleMarkerClick(idx)}
            >
              {location.centro === 'Ayuntamiento' ? (
                <FaLandmark className="text-[#473936] text-xl" />
              ) : (
                <FaMapMarkerAlt className="text-[#473936] text-xl" />
              )}
              <div className="flex flex-wrap"><p className="font-semibold">{location.centro}: </p>&nbsp;<p>{location.address}</p></div>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default Locations;
