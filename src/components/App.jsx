import { useState, useEffect } from 'react';
import FeedbackForm from './FeedbackForm/FeedbackForm';

const App = () => {
  const [clicks, setClicks] = useState(() => {
    const savedClicks = window.localStorage.getItem('saved-clicks');
    if (savedClicks !== null) {
      return Number(savedClicks);
    }
    return 0;
  });

  useEffect(() => {
    window.localStorage.setItem('saved-clicks', clicks);
  }, [clicks]);

  return (
    <>
      <div>
        <button onClick={() => setClicks(clicks + 1)}>
          You clicked {clicks} times
        </button>
        <button onClick={() => setClicks(0)}>Reset</button>
      </div>
      <FeedbackForm />
    </>
  );
};

export default App;
