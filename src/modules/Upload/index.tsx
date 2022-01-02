import { useState } from 'react';
import ImageUploading from 'react-images-uploading';

import NavBar from '../../components/NavBar';
import Content from '../../components/Content';
import ImagePreview from './ImagePreview';

const Upload = () => {
  const [images, setImages] = useState([]);

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <>
      <NavBar />
      <Content>
        <div className="container mx-auto py-5">
          <div className="flex flex-col items-center space-y-10">
            <p className="text-2xl">Upload and Predict</p>
            <ImageUploading
              multiple
              value={images}
              onChange={onChange}
            >
              {({
                imageList,
                onImageUpload,
                dragProps,
              }) => (
                <>
                  <div className="p-5 border-4 border-gray-300 border-dashed">
                    <button
                      type="button"
                      onClick={onImageUpload}
                      {...dragProps}
                    >
                      Click or Drop here
                    </button>
                  </div>
                  <div className="flex flex-row flex-wrap justify-center">
                    {imageList.map((img, idx) => (
                      <ImagePreview dataUrl={img.dataURL} index={idx} key={img.dataURL} />
                    ))}
                  </div>
                  {imageList.length > 0 && (
                  <button type="button">Upload</button>
                  )}
                </>
              )}
            </ImageUploading>
          </div>
        </div>
      </Content>
    </>
  );
};

export default Upload;
