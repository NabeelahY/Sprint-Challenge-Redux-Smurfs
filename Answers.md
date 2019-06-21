1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

- Object.assign()
- Array.map()
- Array.concat()

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- State of the application stays in the `store`. `Reducers` are functions that take in the previous state and an action. `Actions` update the state of the application.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    `Application state` is the main state of the entire application while `Component state` hold the UI state.

1.  What is middleware?
    `Middleware` is tool through which data flows and does something with the data. It might add functionality, stop the data process etc...
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    `redux-thunk` handles synchronous requests in the action creators. It helps creates and dispatch asynchronous actions to reducers with the use of a method called dispatch.

1.  Which `react-redux` method links up our `components` with our `redux store`? 
   -`Provider`
