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
      <ul>
        <Product price={22} imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640" alt="Tacos With Lime" width="640" name='Oculus' />
        
        <Product name='Ivan' />
        
        <Product name='Dada'/>
      </ul>
      <>
      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error">
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