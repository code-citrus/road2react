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



