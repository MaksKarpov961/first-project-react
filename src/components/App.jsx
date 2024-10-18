import BookList from "./BookList";
import favouriteBooks from "./data";
import Product from './Product'
import { Alert } from "./Alert";

const App = () => {
  return (
    <div>
    <>
	  <h1>Books of the week</h1>
      <BookList books={favouriteBooks} />
    </>
    <h2>Products</h2>
      <ul className="product-list">
        <Product imgUrl="https://s7d1.scene7.com/is/image/mcdonalds/574x400_MIXBOX:3-column-desktop?resmode=sharp2" price={22} name='s' />
        
        <Product imgUrl="https://s7d1.scene7.com/is/image/mcdonalds/574x400_NUGGETS:3-column-desktop?resmode=sharp2" price={12} name='Ivan' />
        
        <Product imgUrl="https://s7d1.scene7.com/is/image/mcdonalds/UKR_beef_v2:product-header-desktop?wid=1170&hei=643&dpr=off" price={100} name='Dada'/>
      </ul>
      <>
      <Alert outlined='true' variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert elevated='true' variant="error">
        There was an error during your last transaction
      </Alert>
      <Alert variant="success">
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning">
        Please update your profile contact information
      </Alert>

      </>
    </div>
  );
};

export default App


