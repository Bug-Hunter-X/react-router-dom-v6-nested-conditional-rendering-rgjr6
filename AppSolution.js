```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  const showContent = true; // Simulate conditional rendering
  return (
    <div>
      {showContent && <h1>Home Content</h1>}
      <Routes>
        <Route path="" element={<h1>Home Default</h1>} />
        <Route path="details" element={<h1>Home Details</h1>} />
      </Routes>
    </div>
  );
}

function About() {
  return <h1>About</h1>;
}

function NotFound() {
  return <h1>404 Not Found</h1>;
}

export default App;
```