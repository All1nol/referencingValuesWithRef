## What i Learned about Referencing values 

When you want a component to "remember" some information, but you don't want that information to trigger new renders, we use a ref.

## SO FIRST OF ALL, HOW RENDERING WORKS?
1. Triggering a render
2. Rendering the component 
3. Commiting to the DOM

Imagine that you are on the restaurant and your components are our meals. When you have ask for order waiter(React) delivers your orders(triggering renders) to the kitchen. 

Then it is getting preparedin the kitchen, which means rendering then placing the order on the table, where React commiting components to the DOM.

## Rendering
There are 2 reasons for rendering:
1. It is the component's initial render
2. The component's( or one of its ancestors') state has been updated

## When React do not commit anything on DOM?
React does not touch the DOM if the rendering result is the same as last time

## REFERENCING VALUES WITH REFs