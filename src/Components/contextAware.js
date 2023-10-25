import React, { useState } from 'react';

function ContextAwareSearch() {
  const [query, setQuery] = useState('');
  const [context, setContext] = useState('default');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    // Implement the search functionality here based on the selected context
    // For demonstration purposes, we'll use a simple object to simulate search results
    const contextResults = {
      default: ['Result 1', 'Result 2', 'Result 3'],
      news: ['News Result 1', 'News Result 2', 'News Result 3'],
      shopping: ['Product 1', 'Product 2', 'Product 3'],
    };

    setResults(contextResults[context] || []);
  };

  const handleChange = (e) => {
    const element = e.target;
    element.style.height = 'auto'; // Reset the height
    element.style.height = `${element.scrollHeight}px`; // Set the new height
    setQuery(e.target.value);
  };

  return (
    <div className="background-img">
      <div className="w-full max-w-md mx-auto p-4">
        <div className='textarea-container'>
          <textarea
          className=" fow font w-full p-2 bg-gray-200 border border-gray-900 rounded-lg mt-40"
          placeholder="Enter your search query"
          value={query}
          onChange={handleChange}
        ></textarea>
        </div>
        
        <div className="flex items-center space-x-4 mt-2 ml-20">
          <label className="text-white font-bold">Context:</label>
          <select
            value={context}
            onChange={(e) => setContext(e.target.value)}
            className="font border border-gray-300 rounded-lg p-2"
          >
            <option value="default">Default</option>
            <option value="news">News</option>
            <option value="shopping">Shopping</option>
          </select>
        </div>
        <button
          className="font mt-2 bg-blue-500 text-white py-2 px-4 rounded-lg ml-20"
          onClick={handleSearch}
        >
          Search
        </button>
        <div className="font mt-4 text-white font-bold">
          {results.map((result, index) => (
            <div key={index} className="mb-2">
              {result}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContextAwareSearch;
