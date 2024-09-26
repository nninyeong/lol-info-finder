type PageGuideProps = {
  title: string;
  description: string;
  titleStyle?: string;
  descriptionStyle?: string;
  containerStyle?: string;
};

const defaultContainerStyle: string =
  "flex flex-col justify-center items-center gap-2";
const defaultTitleStyle: string = "font-bold text-white text-[24px]";
const defaultDescriptionStyle: string = "text-light-gray text-[18px]";

const PageGuide = ({
  title,
  description,
  containerStyle = defaultContainerStyle,
  titleStyle = defaultTitleStyle,
  descriptionStyle = defaultDescriptionStyle,
}: PageGuideProps) => {
  return (
    <div className={`${containerStyle}`}>
      <h1 className={`${titleStyle}`}>{title}</h1>
      <p className={`${descriptionStyle}`}>{description}</p>
    </div>
  );
};

export default PageGuide;
