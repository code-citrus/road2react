# React + Vite

## Event Handler
React's *synthetic events* are wrappers around the native browser events from `button`, `input`, and `form` elements. You might have to use `e.preventDefault()` to prevent native browser behavior as well such as page-refresh upon form submission.

```
Search Component:
<input id="search" type="text", onChange={handleChange}>
```

## Props
WE can refactor the List into LIst & Item components. The List element will render an `Item` element for-each item in the data-source. The `key` attribute is set inside the List component: `<Item key={item.objectID} item={item}>`. The most important thing to remember about *props* is that you are now allowed to change the props passed into your component, though you pass them down to nested components. 





