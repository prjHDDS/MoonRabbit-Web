import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

// Home 페이지 컴포넌트
function Home() {
  return (
    <div className="flex justify-center items-center h-full">
      <h1 className="text-3xl font-bold">Welcome to the Home Page!</h1>
    </div>
  )
}

// About 페이지 컴포넌트
function About() {
  return (
    <div className="flex justify-center items-center h-full">
      <h1 className="text-3xl font-bold">Welcome to the About Page!</h1>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="flex justify-center gap-4 mb-8">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo w-16 h-16" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo w-16 h-16" alt="React logo" />
        </a>
      </div>
      <h1 className="text-3xl text-center font-bold mb-4">Vite + React</h1>

      <nav className="text-center mb-6">
        <Link to="/" className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">Home</Link>
        <Link to="/about" className="ml-4 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">About</Link>
      </nav>

      <div className="card flex justify-center items-center p-6 border rounded-lg shadow-md bg-gray-100">
        <button 
          onClick={() => setCount(count + 1)} 
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          count is {count}
        </button>
        <p className="mt-4 text-sm text-gray-500">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs text-center mt-6 text-sm text-gray-600">
        Click on the Vite and React logos to learn more
      </p>

      {/* 라우팅 처리 부분 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;