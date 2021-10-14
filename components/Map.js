import ReactMapGL,{Marker , Popup } from 'react-map-gl';
import {useState} from 'react';
import { getCenter } from 'geolib';

function Map({searchResults}) {

    const [selectedlocation, setSelectedLocation] = useState({})

     
    // Transforming the searchResults object into the
    // { latitude: 52.516272, longitude: 13.377722 } object 
    const coordinates  = searchResults.map((result) => ({
         longitude: result.long,
         latitude: result.lat
    }))

    // To center map around given location
    // The latitude and longitude of center of locations coordinates
    const center =  getCenter(coordinates);

    const [viewport,setViewport] = useState({
        width: "100%",
        height: "100%",
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11
    });

     

    return (
        <ReactMapGL
         mapStyle='mapbox://styles/vrsaket/ckuqr74vu1pxe18qvt47nfos6'
         mapboxApiAccessToken={process.env.mapbox_key}   
         {...viewport}
         onViewportChange = {(nextViewport) =>  setViewport(nextViewport)}
       >
           {searchResults?.map((result) => (
               <div key={result.long}>
                   <Marker
                      longitude={result.long}
                      latitude={result.lat}
                      offsetLeft={-20}
                      offsetTop={-10}
                   >
                     
                      <p 
                        role="img"
                       onClick={() => setSelectedLocation(result)} className='cursor-pointer text-xl
                       animate-bounce'
                       aria-label="push-pin"
                       >
                       🥦
                      </p> 
                   </Marker>

                   {/* // The popups that should show on clicking Marker */}
                    
                    {selectedlocation.long === result.long  ? (
                          <Popup
                           onClose={() => setSelectedLocation({})}
                           closeOnClick ={true}
                           latitude={result.lat}
                           longitude={result.long}
                          >
                                {result.title}
                          </Popup>
                    ) : (
                        false
                    )}

               </div>
           ))}
        
        </ReactMapGL>
    )
}

export default Map;
