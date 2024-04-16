# React + Vite

## Event Handler
React's *synthetic events* are wrappers around the native browser events from `button`, `input`, and `form` elements. You might have to use `e.preventDefault()` to prevent native browser behavior as well such as page-refresh upon form submission.

```
Search Component:
<input id="search" type="text", onChange={handleChange}>
```



