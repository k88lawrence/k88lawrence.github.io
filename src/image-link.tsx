import { Link } from "react-router-dom";

const ImageLink = ({
  destination,
  title,
  image,
}: {
  destination: string;
  title: string;
  image: string;
}) => <Link to={destination}>{title}</Link>;

export default ImageLink;
