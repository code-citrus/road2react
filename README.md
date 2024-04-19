# Road To React

## Event Handler
React's *synthetic events* are wrappers around the native browser events from `button`, `input`, and `form` elements. You might have to use `e.preventDefault()` to prevent native browser behavior as well such as page-refresh upon form submission.

```
Search Component:
<input id="search" type="text", onChange={handleChange}>
```

## Props
WE can refactor the List into LIst & Item components. The List element will render an `Item` element for-each item in the data-source. The `key` attribute is set inside the List component: `<Item key={item.objectID} item={item}>`. The most important thing to remember about *props* is that you are now allowed to change the props passed into your component, though you pass them down to nested components. 

## State: Add state to Search Box
We want the UI to display a copy of the search text under it. To do so, we use state, as it should trigger re-render whenever it is changed. For example, you cannot do something like:

```
const handleChange = (event) => { searchTerm = event.target.value }
```

Even though `handleChange` would be called when search text is entered, and the `searchTerm` variable will be updated, it will (1) not work for multiple elements of the same `Search` component, and (2) will not cause a re-render. The `useState`
function takes initial state as teh parameter value. If you're state depends on previous state, then setSTate can take a func instead of value.

## Callback Handler
While props can be used to pass information down, there is now way to pass information back up the hiearchy yet. For example, the *App* component might need to know the search text state stored in the *Search* component to filter its results.  Solution:
  1. The parent component (App) declares callback handler (handleSearch)
  2. It passes reference to handler as props to child (Search)
  3. The child calls handler whenever it needs to update the parent.
  4. The parent executes its handler (handleSEarch) which may trigger
     a re-render of itself and the child.
    
## Lifting State
We need to now use the `searchTerm` not only inside *Search* component, but also inside *App* to filter `stories`.

- Solution 1: Create another state in `App` that filters the `stories` list and is updated whenever a new `SearchTerm` arrives. However, this means having 2 closely related states split between parent and child.

- Solution 2: Life the `searchTerm` state up to `App`.  *As best practice, always manage state at level where every component interested in it either manages it or is a component below the state-managing component*. 

## React Controlled Components
HTML elements have their own internal state not tied to React. For example, the `<input>` element keeps its value internally. WHen a user types characters, this state flows "into react". There is no way for React to set its value yet.

When we add `<input value={props.search}>`, this becomes a *react controlled component* and the internal and react states are synced. This allows us to set the value to some initial state. WE can also add logic to modify the input values, for example lower case everything?

When the HTML element emits a change, the new value is writte to React state,
then passed as props to `<input>` as its value, the HTML element uses this to set its internal value. This means you could modify the typed characters on the fly, and the input will display the modified value.

## React Side Effects
A component's output is defined by its input props, state, and *side-effects* such as the result of a API call or `setTimeout`. We use `localStorage.setItem` to write the `searchTerm` to LocalStorage whenever the search box is updated.

Solution 1: Simply add `setItem` call inside `handleSearch`, but doing this means someone could still use `setSearchTerm` (without `handleSearch`) and then the storage would not be set...Yet, we cannot modify the `setSearchTerm` function itself...

### Why is it called a side-effect?
The main job of a react component is to return an element. Any other thing it does (ex: fetch data, local storage, etc) is a "hidden" side-effect (not part of input/output contract). 

### The useEffect Hook
This hook should be used for any side-effects you are executing. It tells React that the component needs to do something after each render. The second argument can be used to restrict this from every render to just when some dependency has updated. It can also optionally return a function that will be executed when the component is unmounted. In this sense, it replaces the legacy `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` lifecycle methods. However, it does not replace `shouldComponentUpdate`.









