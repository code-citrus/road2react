import './App.css'

const list = [
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

const List = () => {
  return (
    <ul>
      {
        list.map((item) => (<li key={item.objectID}>{item.title}</li>))
      }
    </ul>
  );
}

const Search = () => {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

const App = () => {
  return (
    <div>
      <h1>Hello {title}</h1>
      <Search />
      <hr />
      <List />
    </div> 
  );
}

export default App;
