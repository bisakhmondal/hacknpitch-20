import React, { Component } from "react";

import config from "../../config";
import HPlatform, {
  HMap,
  HMapPolyLine,
  HMapMarker,
  HMapRoute
} from "react-here-map";

export default class UserMap extends React.Component{
    constructor(props){
        super(props);
    

    this.state = {
         lat: 3,
         lng: 4,
         olat : 0,
         olon : 0,
         ok :false,
       };

    }

    

    render(){

        const nbr_cars = [
          { lat: 32.4, lng: 36.4 },
          { lat: 23.4, lng: 12.4 },
          { lat: 54.4, lng: 97.4 },
          { lat: 65.4, lng: 56.4 },
          { lat: 67.4, lng: 32.4 }
        ];
        var routeParams = () =>{
          // The routing mode:
          var obj = {
            mode: "fastest;car",
            // The start point of the route:
            //   waypoint0: `geo!${this.state.lat},${this.state.lng}`,
            //   // The end point of the route:
            //   waypoint1: `geo!${this.state.olat},${this.state.olon}`,
            waypoint0: "geo!50.1120423728813,8.68340740740811",
            // The end point of the route:
            waypoint1: "geo!52.5309916298853,13.3846220493377",
            // To retrieve the shape of the route we choose the route
            // representation mode 'display'
            representation: "display"
          };
            return obj;
        }
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
      const markerIcon2 =
        '<svg width="24" height="24" ' +
        'xmlns="http://www.w3.org/2000/svg">' +
        '<rect stroke="white" fill="red" x="1" y="1" width="22" ' +
        'height="22" /><text x="12" y="18" font-size="12pt" ' +
        'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
        'fill="red">H</text></svg>';

        const RouteMarker = ({ map, platform, ui, route, key, routeShape }) => {
          // Retrieve the mapped positions of the requested waypoints:
          const startPoint = route.waypoint[0].mappedPosition;
          const endPoint = route.waypoint[1].mappedPosition;

          // Create a marker for the start point:
          const startMarker = {
            lat: startPoint.latitude,
            lng: startPoint.longitude
          };
          // Create a marker for the end point:
          const endMarker = { lat: endPoint.latitude, lng: endPoint.longitude };

          return (
            <React.Fragment>
              <HMapPolyLine points={routeShape} map={map} setViewBounds />
              <HMapMarker
                coords={startMarker}
                map={map}
                platform={platform}
                icon={markerIcon2}
                setViewBounds
              />
              <HMapMarker
                coords={endMarker}
                map={map}
                platform={platform}
                icon={markerIcon2}
                setViewBounds
              />
            </React.Fragment>
          );
        };

   const setlat = lat => this.setState({ lat : lat});
   const setlon = lon => this.setState({ lng : lon});
   const setolat = lon => this.setState({ olat : lon});
   const setolon = lon => this.setState({ olng : lon});
   const setok = () => this.setState({ ok : true});

        return (
          <div style={{ paddingTop: "0", width: "100%", height: "100%" }}>
            <h3 style={{ marginLeft: "2em" }}>
              To get your current position click below
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
                }
              }}
              style={{
                padding: "1em",
                marginLeft: "20em",
                backgroundColor: "white"
              }}
            >
              Get Current Location
            </button>
            <button
              onClick={e => {
                var arr = [];

                nbr_cars.forEach((obj, i) => {
                  var aa = Math.sqrt(
                    Math.pow(Math.abs(obj.lat - this.state.lat), 2) +
                      Math.pow(Math.abs(obj.lng - this.state.lng), 2)
                  );
                  console.log(aa);
                  arr.push([aa, i]);
                });

                arr.sort(function(a, b) {
                  return Math.floor(a[0]) - Math.floor(b[0]);
                });
                console.log(arr);
                var ii = arr[0][1];
                setolat(nbr_cars[ii].lat);
                setolon(nbr_cars[ii].lng);

                routeParams();
                setok();

                // console.log(ii);
                // console.log(ii[ii.length -1][1])
              }}
              style={{
                padding: "1em",
                marginLeft: "20em",
                backgroundColor: "white"
              }}
            >
              Cal Shortest path
            </button>
            <HPlatform
              app_id={`${config.appId}`}
              app_code={`${config.apiKey}`}
              useCIT
              useHTTPS
              includeUI
              includePlaces
              interactive={true}
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
                {/* <HMapMarker
                  coords={{ lat: this.state.lat, lng: this.state.lng }}
                  icon={markerIcon}
                  objectEvents={{
                    pointerdown: e => console.log("Marker Pointer Down", e)
                  }}
                /> */}
                <HMapRoute
                  routeParams={routeParams}
                  icon={markerIcon}
                  defaultDisplay
                  lineOptions={routeLineOptions}
                >
                  <RouteMarker />
                </HMapRoute>
              </HMap>
            </HPlatform>
          </div>
        );
    }

}