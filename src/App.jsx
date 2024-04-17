import './App.css'
import * as React from 'react';

const stories = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  }
];

const title = "React";

const List = ({ list }) => {
  return (
    <ul>
      {
        list.map((item) => (
          <Item key={item.objectID} item={item} />
        ))
      }
    </ul>
  );
}

const Item = ({ item }) => (
  <li>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </li>
);

const Search = ({ onSearch }) => {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={onSearch} />
    </div>
  );
}

const App = () => {

  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }

  // Note: No need to create another state, as the value is purely
  // based on the searchTerm value. 
  const searchedStories = stories.filter(s => s.title.includes(searchTerm));

  return (
    <div>
      <h1>Hello {title}</h1>
      <Search onSearch={handleSearch} />
      <hr />
      <List list={searchedStories} />
    </div> 
  );
}

export default App;
