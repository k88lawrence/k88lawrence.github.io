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
    <img src={image} alt={title} />
    <div className="image-description">
      <p>{title}</p>
      {children}
    </div>
  </div>
);

export default ImageObject;
