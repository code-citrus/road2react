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
        list.map(({ objectID, ...item }) => (
          <Item key={objectID} {...item} />
        ))
      }
    </ul>
  );
}

const Item = ({ title, url, author, num_comments, points }) => (
  <li>
    <span>
      <a href={url}>{title}</a>
    </span>
    <span>{author}</span>
    <span>{num_comments}</span>
    <span>{points}</span>
  </li>
);

const Search = ({ search, onSearch }) => {
  return (
    <React.Fragment>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={onSearch} value={search} />
    </React.Fragment>
  );
}

const InputWithLabel = ({ id, label, value, type = 'text', onInputChange }) => (
  <>
    <label htmlFor={id}>{label}</label>
    &nbsp;
    <input 
      id={id}
      type={type}
      value={value}
      onChange={onInputChange}
    />
  </>
)

const useStorageState = (key, initialState) => {
  const [value, setValue] = React.useState(
    localStorage.getItem('search') || initialState );

    React.useEffect(() => {
      localStorage.setItem(key, value);
    }, [value, key]);

    return [value, setValue];
}

const App = () => {

  const [searchTerm, setSearchTerm] = useStorageState(
    'search', // Local Storage Key
    'React'   // Initial State
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }

  // Note: No need to create another state, as the value is purely
  // based on the searchTerm value. 
  const searchedStories = stories.filter(s => s.title.includes(searchTerm));

  return (
    <div>
      <h1>Hello {title}</h1>
      <InputWithLabel 
        id="search"
        label="Search"
        value={searchTerm}
        onInputChange={handleSearch} 
      />
      <hr />
      <List list={searchedStories} />
    </div> 
  );
}

export default App;
