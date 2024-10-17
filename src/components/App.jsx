import BookList from "./BookList";
import favouriteBooks from "./data";
import Product from './Product'

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
    </div>
  );
};

export default App