const ImageObject = ({
  image,
  children,
  title,
}: {
  image: string;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="image-object">
    <a target="_blank" rel="noreferrer" href={image}>
      <img src={image} alt={title} />
    </a>
    <div className="image-description">
      <p>{title}</p>
      {children}
    </div>
  </div>
);

export default ImageObject;
