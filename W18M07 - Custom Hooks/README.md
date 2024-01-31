# M07 W18 | Custom Hooks
[Github Repository](https://github.com/Alfredo08/Cohort-September-18-2023/tree/main/W18M07%20-%20Custom%20Hooks) | [Vimeo Video Recording](https://vimeo.com/908080433/9841a6a7ff?share=copy)

## Topics to cover
- [X] 1. What are Hooks?
- [X] 2. How to build Custom Hooks
- [X] 3. Custom Hook Demos

### 1. React Hooks
---

Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

* `useEffect(callback, [])`: Side effect that occurs on data change *or* initial load of a component.
* `useState()`: Helps us manage data that may change; lets React know to re-render if a change occurs.

### 2. Custom Hooks
---

We can break out our business logic from our component, reducing bloat in component and giving us a way to re-use functionality from component to component.

Note how much smaller are components become as we break out complex pieces into separate hooks. They get to be separate, specialized, and it gives us the opportunity to make much of our code more re-usable!

## Links

* [Official Documentation](https://reactjs.org/docs/hooks-custom.html)
* [O'Reilly's Learning React](https://www.oreilly.com/library/view/learning-react-2nd/9781492051718/)
    * [Chapter 6: Creating Custom Hooks](https://learning.oreilly.com/library/view/learning-react-2nd/9781492051718/ch06.html#creating-custom-hooks)
* [Use Hooks](https://usehooks.com/)
* [Awesome React Hooks](https://github.com/rehooks/awesome-react-hooks)
* [Collection of React Hooks](https://nikgraf.github.io/react-hooks/)
