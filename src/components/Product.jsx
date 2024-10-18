import PropTypes from 'prop-types';
import { HiAcademicCap } from "react-icons/hi";
const Product = ({
  name,
  imgUrl = "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
  price = '1',
}) => (
  <li>
		<img src={imgUrl} alt={name} width="480" />
		<h2>{name}</h2>
    <p>Price: {price} <HiAcademicCap /> credits</p>
    <button type="button">Bay</button>
  </li>
);

// Опис типів пропсів компонента 
Product.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  price: PropTypes.number.isRequired,
};

export default Product;