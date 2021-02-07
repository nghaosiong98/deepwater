import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Upload, Button, Form, Spin, Modal,
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

import { setResults, setUploadedFiles } from './upload.action';

const libraries = ['places'];

const center = {
  lat: 3.139003,
  lng: 101.686852,
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: false,
  gestureHandling: 'none',
};

const UploadForm = ({ onSetResults, onSetUploadedFiles }) => {
  const [form] = Form.useForm();
  const { mutate, isLoading } = useMutation((formData) => axios.post(
    'https://fypapi.haosiongng.com/predict',
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  ), {
    onSuccess: ({ data }) => {
      onSetResults(data.results);
    },
    onError: (error) => {
      // eslint-disable-next-line no-console
      console.log(error);
    },
  });

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
  const customRequest = ({ onSuccess }) => {
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
    const formData = new FormData();
    const { location, upload } = values;
    onSetUploadedFiles(upload);
    upload.forEach((file) => {
      formData.append('images', file.originFileObj);
    });
    formData.append('lat', location.lat);
    formData.append('lng', location.lng);
    mutate(formData);
  };

  const validateLocation = (_, values) => {
    const { lat, lng } = values;
    if (lat === null || lng == null) {
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject('Please select a location.');
    }

    return Promise.resolve();
  };

  const [visibleModal, setVisibleModal] = React.useState(false);

  const toggleModal = () => {
    setVisibleModal(!visibleModal);
  };

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading Maps';

  return (
    <div className="form">
      <Spin spinning={isLoading}>
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
          <Form.Item
            name="location"
            label="Lake Location"
            required
            rules={[
              {
                validator: validateLocation,
              },
            ]}
          >
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
          <Button type="link" onClick={toggleModal}>Photo Specification</Button>
          <ExampleModal visible={visibleModal} onCancel={toggleModal} />
          <Form.Item
            name="upload"
            label="Upload photos"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            required
            rules={[{ required: true, message: 'Upload at least 1 photo.' }]}
          >
            <Upload
              customRequest={customRequest}
              className="upload-list-inline"
              listType="picture"
              beforeUpload={() => false}
              multiple
              disabled={isLoading}
            >
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" disabled={isLoading}>Submit</Button>
          </Form.Item>
        </Form>
      </Spin>
    </div>
  );
};

UploadForm.propTypes = ({
  onSetResults: PropTypes.func,
  onSetUploadedFiles: PropTypes.func,
});

const mapDispatchToProps = (dispatch) => ({
  onSetResults: (results) => dispatch(setResults(results)),
  onSetUploadedFiles: (uploadedFiles) => dispatch(setUploadedFiles(uploadedFiles)),
});

export default connect(null, mapDispatchToProps)(UploadForm);

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
            // eslint-disable-next-line no-console
            console.log(error);
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

const ExampleModal = ({ visible, onCancel }) => (
  <Modal
    title="Recommended specification"
    visible={visible}
    onCancel={onCancel}
    footer={null}
  >
    <p>The photo should be taken between 1.7m and 2.3m above the water surface.</p>
    <p>The photo should have minimum resolution of 1920 x 1080.</p>
    <p>The photo should be taken during daytime.</p>
    <p>Only upload photo of lake.</p>
  </Modal>
);

ExampleModal.propTypes = {
  visible: PropTypes.bool,
  onCancel: PropTypes.func,
};
