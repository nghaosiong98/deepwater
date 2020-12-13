/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd';
// import { useFormik } from 'formik';
import {
  GoogleMap,
  useLoadScript,
  Marker,
} from '@react-google-maps/api';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox';
import '@reach/combobox/styles.css';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import mapStyles from './mapStyles';
import locateIcon from '../../images/locate-me.svg';
import './upload.css';

const libraries = ['places'];
const mapContainerStyle = {
  width: '30vw',
  height: '70vh',
};
const center = {
  lat: 3.139003,
  lng: 101.686852,
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const UploadPage = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
    libraries,
  });
  const [markers, setMarkers] = React.useState([]);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const setMarker = ((lat, lng) => {
    setMarkers([{
      lat,
      lng,
      time: new Date(),
    }]);
  });

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
    setMarker(lat, lng);
  }, []);

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading Maps';

  return (
    <div className="form-section">
      <div className="card">
        <Typography.Text strong>
          Location:
        </Typography.Text>
        <Search panTo={panTo} />
        {/* <Locate panTo={panTo} /> */}
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={8}
          options={options}
          onLoad={onMapLoad}
        >
          {markers.map((marker) => (
            <Marker
              key={marker.time.toISOString()}
              position={{ lat: marker.lat, lng: marker.lng }}
            />
          ))}
        </GoogleMap>
      </div>
    </div>
  );
};

export default UploadPage;

const Search = ({ panTo }) => {
  const {
    ready, value, suggestions: { status, data }, setValue, clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 3.139003, lng: () => 101.686852 },
      radius: 200 * 1000,
    },
  });

  return (
    <div className="search-bar">
      <Combobox
        onSelect={async (address) => {
          setValue(address, false);
          clearSuggestions();
          try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);
            panTo({ lat, lng });
          } catch (error) {
            console.log('error!');
          }
        }}
      >
        <ComboboxInput
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
          disabled={!ready}
          placeholder="Enter an Address"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === 'OK' && data.map(({ id, description }) => <ComboboxOption key={id} value={description} />)}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
};

Search.propTypes = {
  panTo: PropTypes.func,
};

const Locate = ({ panTo }) => (
  <button
    className="locate"
    type="button"
    onClick={() => {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        panTo({
          lat: coords.latitude,
          lng: coords.longitude,
        });
      }, () => null, options);
    }}
  >
    <img src={locateIcon} alt="Locate me" />
  </button>
);

Locate.propTypes = {
  panTo: PropTypes.func,
};
