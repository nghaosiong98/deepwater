import { FC } from 'react';
import Text from '../../../components/Text';

interface ProjectCardProps {
  title?: string;
  description?: string;
  imgSrc?: string;
}

const ProjectCard: FC<ProjectCardProps> = (props) => {
  const { imgSrc, title, description } = props;

  return (
    <div
      className={`
        bg-keppel rounded-xl drop-shadow-xl
        flex flex-col items-center
        overflow-hidden
        transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110
        col-span-1
      `}
    >
      <img src={imgSrc} alt={title} />
      <div className="p-4">
        <Text variant="h2">{title}</Text>
        <Text variant="body2">{description}</Text>
      </div>
    </div>
  );
};

export default ProjectCard;
