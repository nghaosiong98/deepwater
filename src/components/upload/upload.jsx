import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UploadForm from './uploadForm';
import Result from './result';

const UploadPage = ({ results }) => (
  <div className="form-section">
    {results.length === 0
      ? <UploadForm />
      : <Result />}
  </div>
);

UploadPage.propTypes = ({
  results: PropTypes.array,
});

const mapStateToProps = (state) => ({
  results: state.uploadReducer.results,
});

export default connect(mapStateToProps, null)(UploadPage);
