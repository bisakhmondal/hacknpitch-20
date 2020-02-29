import React, { Component } from 'react';
import HEREMap from "react-here-maps";
import config from "../config";

class Map extends Component {
    

    constructor( props){
        super(props);
        this.state = {
            center : {
                lat : 0.0,
                lon : 0.0,
            }
        }
    }

    render() {
        const  geolocate = () => {
          navigator.geolocation.getCurrentPosition(
            onGeolocateSuccess,
            onGeolocateError
          );
        }

        const  onGeolocateSuccess =( coordinates)=> {
          const { latitude, longitude } = coordinates.coords;
        //   showMap(latitude, longitude);
        }

        const onGeolocateError = (error) => {
            console.warn(error.code, error.message);
        }

            return (
              <div>
                <HEREMap
                  appId={`${config.appId}`}
                  appCode={`${config.apiKey}`}
                  center={this.center}
                  zoom={8}
                />
              </div>
            );
        
    

}
}

export default Map;