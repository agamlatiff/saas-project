interface TitleProps {
  description: string;
  title: string;
  subtitle?: string;
  color?: string;
  information?: string;
  children?: React.ReactNode;
  isChildren: boolean;
}

const Title = ({
  description,
  title,
  subtitle,
  color,
  information,
  children,
  isChildren,
}: TitleProps) => {
  return (
    <>
      <p className="text-sm text-indigo-500 font-medium">{description}</p>
      <h2 className="text-5xl md:text-5xl lg:text-6xl font-semibold mt-2 leading-snug">
        {title} <br />
        {subtitle} <span className="text-indigo-600">{color}</span>
        {isChildren && (
          <span className="text-white  lg:px-8 px-6  bg-indigo-600 rounded-full relative ">
            {children}
          </span>
        )}
      </h2>
      <p className="text-gray-500 max-w-md my-4">{information}</p>
    </>
  );
};

export default Title;
