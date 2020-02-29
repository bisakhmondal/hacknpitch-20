import React, { Component } from 'react';

import config from "../../config";
import HPlatform, { HMap, HMapPolyLine, HMapMarker } from "react-here-map";






class Driver extends React.Component{

   constructor(props){
       super(props);
       this.state = {
         lat: 3,
         lng: 4
       };
       
   }

 render(){


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
       <div style={{ paddingTop: "0", width: "100%", height: "100%" }}>
         <h3 style={{ marginLeft: "2em" }}>
           Hey , you are requested to keep your location connected , please
           click on the button below to do the same.
         </h3>
         <button
           onClick={ (e) => {
               
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
             var options = { timeout :  2 * 1000 * 4};
             var geLoc = navigator.geolocation;
             var watchId = geLoc.watchPosition( showLocation , errorHandler , options);
         }}
           }
           style={{
             padding: "1em",
             marginLeft: "20em",
             backgroundColor: "white"
           }}
           
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
         >
           <HMap
             style={{
               height: "600px",
               width: "80%",
               margin: "1em",
               marginLeft: "5em",
               marginRight: "5em",
               border: "2px solid black"
             }}
             mapOptions={{
               center: { lat: this.state.lat, lng: this.state.lng },
               zoom: 10
             }}
           >
             <HMapMarker
               coords={{lat :this.state.lat , lng : this.state.lng}}
               icon={markerIcon}
               objectEvents={{
                 pointerdown: e => console.log("Marker Pointer Down", e)
               }}
             />
           </HMap>
         </HPlatform>
       </div>
     );
 }

}

export default Driver;