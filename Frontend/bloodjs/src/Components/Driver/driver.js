import React, { Component } from 'react';

import config from "../../config";
import HPlatform, { HMap, HMapPolyLine, HMapMarker,HMapRoute } from "react-here-map";






class Driver extends React.Component{

   constructor(props){
       super(props);
       this.state = {
         lat: 3,
         lng: 4
       };
       
   }

 render(){

    const nbr_cars=[
        {lat : 32.4 ,lng : 36.4},
        {lat : 23.4 ,lng : 12.4},
        {lat : 54.4 ,lng : 97.4},
        {lat : 65.4 ,lng : 56.4},
        {lat : 67.4 ,lng : 32.4},

    ]
    var routeParams = nbr_cars.map(car=>({
      // The routing mode:
      mode: "fastest;car",
      // The start point of the route:
      waypoint0:`geo!${this.state.lat},${this.state.lng}`,
      // The end point of the route:
      waypoint1: `geo!${car.lat},${car.lng}`,
      // To retrieve the shape of the route we choose the route
      // representation mode 'display'
      representation: "display"
    }));
    const routeLineOptions = {
      style: { strokeColor: "blue", lineWidth: 10 },
      arrows: { fillColor: "white", frequency: 2, width: 0.8, length: 0.7 }
    };


    const markerIcon =
      '<svg width="24" height="24" ' +
      'xmlns="http://www.w3.org/2000/svg">' +
      '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
      'height="22" /><text x="12" y="18" font-size="12pt" ' +
      'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
      'fill="white">H</text></svg>';
     
     
   
   const call = () => {
       

   }

   const setlat = lat => this.setState({ lat : lat});
   const setlon = lon => this.setState({ lng : lon});
     return (
       <div style={{ paddingTop: "0", width: "100%", height: "100%" }} className='tc'>
         <h3 style={{ marginLeft: "2em" }} className="f2 white">
           Hey , you are requested to keep your location connected.<br />  please
           click on the button below to do the same.
         </h3>
         <button
           onClick={e => {
             if (window.navigator && window.navigator.geolocation) {
               navigator.geolocation.getCurrentPosition(
                 onGeolocateSuccess,
                 onGeolocateError
               );
             } else {
               console.log("Navigator not supported");
             }

             function onGeolocateError(error) {
               console.warn(error.code, error.message);
             }
             function showLocation(position) {
               var latitude = position.coords.latitude;
               var longitude = position.coords.longitude;
               alert("Latitude : " + latitude + " Longitude: " + longitude);
             }
             function errorHandler(err) {
               if (err.code == 1) {
                 console.log("Error: Access is denied!");
               } else if (err.code == 2) {
                 console.log("Error: Position is unavailable!");
               }
             }
             function onGeolocateSuccess(coordinates) {
               setlat(coordinates.coords.latitude);
               setlon(coordinates.coords.longitude);
               var options = { timeout: 2 * 1000 * 4 };
               var geLoc = navigator.geolocation;
               var watchId = geLoc.watchPosition(
                 showLocation,
                 errorHandler,
                 options
               );
             }
           }}
           style={{
             padding: "1em",
             backgroundColor: "white"
           }}
<<<<<<< HEAD
=======
           className='btn btn-secondary black hover-black grow'
           
>>>>>>> c005f079e6126430c7ba7c04a2bcbea207579b47
         >
           Watch your location
         </button>
         <HPlatform
           app_id={`${config.appId}`}
           app_code={`${config.apiKey}`}
           useCIT
           useHTTPS
           includeUI
           includePlaces
           interactive={true}
<<<<<<< HEAD
=======
           
>>>>>>> c005f079e6126430c7ba7c04a2bcbea207579b47
         >
           <HMap
             style={{
               height: "600px",
               width: "80%",
               margin: "1em",
               marginLeft: "7em",
               marginRight: "5em",
               border: "2px solid black",
               
             }}

             mapOptions={{
               center: { lat: this.state.lat, lng: this.state.lng },
               zoom: 6
             }}
           >
             <HMapMarker
               coords={{ lat: this.state.lat, lng: this.state.lng }}
               icon={markerIcon}
               objectEvents={{
                 pointerdown: e => console.log("Marker Pointer Down", e)
               }}
             />
           </HMap>

           {/* <HMapRoute
             routeParams={routeParams[1]}
             icon={markerIcon}
             defaultDisplay
             lineOptions={routeLineOptions}
           /> */}
         </HPlatform>
       </div>
     );
 }

}

// // export default Driver;
// import HPlatform, {
//   HMap,
//   HMapRoute,
//   HMapMarker,
//   HMapPolyLine
// } from "react-here-map";

// // Create the parameters for the routing request:
// var routeParams = {
//   // The routing mode:
//   mode: "fastest;car",
//   // The start point of the route:
//   waypoint0: "geo!50.1120423728813,8.68340740740811",
//   // The end point of the route:
//   waypoint1: "geo!52.5309916298853,13.3846220493377",
//   // To retrieve the shape of the route we choose the route
//   // representation mode 'display'
//   representation: "display"
// };
// const routeLineOptions = {
//   style: { strokeColor: "blue", lineWidth: 10 },
//   arrows: { fillColor: "white", frequency: 2, width: 0.8, length: 0.7 }
// };

// const icon =
//   '<svg width="24" height="24" ' +
//   'xmlns="http://www.w3.org/2000/svg">' +
//   '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
//   'height="22" /><text x="12" y="18" font-size="12pt" ' +
//   'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
//   'fill="white">H</text></svg>';

// // Handles manipulation of the path between the two points
// const driver = ({ map, platform, ui, route, key, routeShape }) => {
//   // Retrieve the mapped positions of the requested waypoints:
//   const startPoint = route.waypoint[0].mappedPosition;
//   const endPoint = route.waypoint[1].mappedPosition;

//   // Create a marker for the start point:
//   const startMarker = { lat: startPoint.latitude, lng: startPoint.longitude };
//   // Create a marker for the end point:
//   const endMarker = { lat: endPoint.latitude, lng: endPoint.longitude };

//   return (
//     <React.Fragment>
//       <HMapPolyLine points={routeShape} map={map} setViewBounds />
//       <HMapMarker
//         coords={startMarker}
//         map={map}
//         platform={platform}
//         icon={icon}
//         setViewBounds
//       />
//       <HMapMarker
//         coords={endMarker}
//         map={map}
//         platform={platform}
//         icon={icon}
//         setViewBounds={false}
//       />
//       <HPlatform
//         app_id={`${config.appId}`}
//         app_code={`${config.apiKey}`}
//         useCIT
//         useHTTPS
//         includeUI
//         includePlaces
//       >
//         <HMap
//           style={{
//             height: "400px",
//             width: "800px"
//           }}
//           mapOptions={{ center: { lat: 52.5321472, lng: 13.3935785 } }}
//         >
//           <HMapRoute
//             routeParams={routeParams}
//             icon={icon}
//             defaultDisplay
//             lineOptions={routeLineOptions}
//           />
//         </HMap>
//       </HPlatform>
//       ;
//     </React.Fragment>
//   );
// };

export default Driver;