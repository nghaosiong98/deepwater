import React from 'react';
import PropTypes from 'prop-types';
import {
  Upload, Button, Form,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
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
import axios from 'axios';
import { useMutation } from 'react-query';
import mapStyles from './mapStyles';
import locateIcon from '../../images/locate-me.svg';
import './upload.css';

const libraries = ['places'];

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
  const [form] = Form.useForm();

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

  const postUpload = useMutation((formData) => axios.post(
    'http://34.87.47.149/predict',
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  ), {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const customRequest = ({ file, onSuccess }) => {
    console.log(file);
    setTimeout(() => {
      onSuccess('ok');
    }, 0);
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const onFinish = (values) => {
    console.log(values);
    const formData = new FormData();
    const { location, upload } = values;
    upload.forEach((file) => {
      formData.append('images', file.originFileObj);
    });
    formData.append('lat', location.lat);
    formData.append('lng', location.lng);
    postUpload.mutate(formData);
  };

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading Maps';

  return (
    <div className="form-section">
      <div className="card">
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            location: {
              lat: null,
              lng: null,
            },
            upload: [],
          }}
        >
          <Form.Item name="location" label="Location">
            <Search panTo={panTo} />
          </Form.Item>
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

          <Form.Item
            name="upload"
            label="Upload photos"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload
              customRequest={customRequest}
              className="upload-list-inline"
              listType="picture"
              beforeUpload={() => false}
              multiple
            >
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default UploadPage;

const Search = ({ panTo, onChange }) => {
  const {
    ready, value, suggestions: { status, data }, setValue, clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 3.139003, lng: () => 101.686852 },
      radius: 200 * 1000,
    },
  });

  const triggerChange = (changedValue) => {
    if (onChange) {
      onChange({
        ...changedValue,
      });
    }
  };

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
            triggerChange({ lat, lng });
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
          placeholder="Enter an address"
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
  onChange: PropTypes.func,
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
