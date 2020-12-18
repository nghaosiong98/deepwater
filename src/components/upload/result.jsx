import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Card, Image, Space, Button,
} from 'antd';
import { resetState } from './upload.action';

const Result = ({
  uploadReducer: {
    uploadedFiles,
    results,
  },
  onResetState,
}) => (
  <Space size="small" direction="vertical" align="center">
    {uploadedFiles.map((file) => {
      const result = results.filter((r) => r.filename === file.name)[0];
      return (
        <Card
          hoverable
        >
          <Card.Meta
            avatar={
              <Image src={file.thumbUrl} preview={false} />
            }
            title={file.name}
            description={(
              <div>
                <span>{result.label}</span>
              </div>
          )}
          />
        </Card>
      );
    })}
    <Button onClick={() => onResetState()}>Upload Again</Button>
  </Space>
);

Result.propTypes = ({
  uploadReducer: PropTypes.object,
  onResetState: PropTypes.func,
});

const mapStateToProps = (state) => ({
  uploadReducer: state.uploadReducer,
});

const mapDispatchToProps = (dispatch) => ({
  onResetState: () => dispatch(resetState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Result);
