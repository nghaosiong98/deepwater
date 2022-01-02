import { FC } from 'react';

interface ImagePreviewProps {
  dataUrl: string;
  index: number;

}

const ImagePreview: FC<ImagePreviewProps> = (props) => {
  const { dataUrl, index } = props;
  return (
    <div
      className="w-64 relative"
    >
      <img
        src={dataUrl}
        key={dataUrl}
        alt={`preview-${index}`}
      />
    </div>
  );
};

export default ImagePreview;
