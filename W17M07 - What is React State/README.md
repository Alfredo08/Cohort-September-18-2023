# M07 W17 | What is React State?
[Github Repository](https://github.com/Alfredo08/Cohort-September-18-2023/tree/main/W17M07%20-%20What%20is%20React%20State%3F) | [Vimeo Video Recording](https://vimeo.com/905832050/2721f03e7e?share=copy)

## Topics to cover
- [x] What is state?
- [x] Differences between state and props.
- [x] Setting and updating state
- [x] Lifting state up

## What is State?

In JavaScript programming we use **variables** to store a value by name, for later use.

* `var`: function-scopes a named value, allowing later re-assignment.
* `let`: block-scopes a named value, allowing later re-assignment.
* `const`: block-scopes a named value, but does ***not*** allow later re-assignment (value is treated as a *constant*.)

Modern JavaScript programmers prefer `const` and `let`, as these are considered easier to scope, organize, and understand in most code.

We have seen how flexible and powerful this feature is in our previous modules! Sometimes storing a named variable isn't expressive enough for advanced and abstract use-cases, such as when we manage changing values in a library like React.

We can use variables in our React code if, or when, we need to. We'll notice, however, that *if a variable's value changes* we ***don't*** see the change in the browser output of a React component. One of the goals of the React library is for us to have our front-end JavaScript application *react* when necessary, and only when necessary. To ensure our application knows when to re-render the HTML we see in the web browser, we must use ***state*** so that React can detect when a value changes. When state changes, the component(s) it resides in will re-render.

## Closures

An important feature that exists in programming, including in JavaScript, is the *closure*. It is the product of how scoping is handled in regards to functions.

```JavaScript
const outerFunction = () => {

    let count = 0; // This value is initialized OUTSIDE of 'innerFunction'.

    const innerFunction = () => { // 'count' will be available in the same scope, or sub-scopes.

        count++; // Note that 'count' can be modified here.

        console.log('Count:', count); // Note that 'count' can be accessed here.

    };

    innerFunction(); // 'innerFunction' is able to access/modify the original count variable.
    innerFunction(); // 'innerFunction' is able to access/modify the original count variable.
    innerFunction(); // 'innerFunction' is able to access/modify the original count variable.

};

outerFunction(); // We envoke the function here.

// Note that the values that were accessible to 'innerFunction' when
// it was defined remain accessible to it at any later point that it
// might be envoked.
```

## React Components

Let's remind ourselves what a React Component is, it is important we understand the terms and requirements for this before proceeding to an example of *state*. Let's look at a very simple component and identify what makes it a component:

```JavaScript
import React from 'react';

const HelloWorld = () => {
    return (
        <p>Hello, World!</p>
    );
};

export default HelloWorld;
```

Core features of the above include:

* `HelloWorld` is a functional component, and is therefore: a ***function***!
* This function uses and returns ***JSX*** to help template what will eventually become output in the browser.
* Because this is a function, we can re-use it at our leisure.

This means that React components:

1. Are functions.
2. Return JSX.
3. Act as (re-usable) *building-blocks* for our web pages / user interfaces.

Keep this in-mind as we continue to explore how we can use React's features to breathe life into our front-end via components.

## Props

Recall that our components are simply functions. What does this mean for how we can write and use our components? One important feature to consider, resides in a basic feature of any JavaScript function we write.

### Function Parameters

Let's suppose we want to write a JavaScript function that can say hello to a specific person by name. It might look something like this, to start with:

```JavaScript
const sayHello = () => {
    return 'Hello, World!';
};

console.log('sayHello():', sayHello()); // 'Hello, World!'
```

This isn't quite there yet, however. The function, as it is written so-far, is rigid. It will only ever say hello to `'World'`, and no one else. In order to make this more flexible, and able to support any name we'd like, we can make use of a function's ability to accept parameters (or arguments during execution.) Let's add a parameter, `name`, and see the improvement!

```JavaScript
const sayHello = (name) => {
    return `Hello, ${name}!`;
};


console.log(
    "sayHello('World'):",
    sayHello('World')
); // 'Hello, World!'

console.log(
    "sayHello('Lighthouse Labs'):",
    sayHello('Lighthouse Labs')
); // 'Hello, Lighthouse Labs!'
```

Now we can easily say hello to the `'World'`, `'Lighthouse Labs'`, myself, or even you—whomever we may want or need to!

### Component Props

How does this concept apply to what we're practicing in React? Well, at the end of the day... our React components are *functions*. It stands to reason, then, that there should be support for parameters, right? Let's look at how the above example translates into some real React code.

**/src/SayHello.jsx**
```JavaScript
import React from 'react';

const SayHello = () => { // Notice that by-convention we capitalize the function name.
    return (
        <p>Hello, World!</p> {/* We'll use JSX to template our output, instead of a string. */}
    );
};

export default SayHello;
```

So, like our first swing at our `sayHello` function with vanilla JavaScript, the above is quite rigid. It'll only say hello to `'World'`. If we want to use this in our application, you'll usually want to go to a component in your application that is referenced in your `/src/index.js`—it could be something like `/src/App.js`. Let's call on our function so we can see it render in our page when we run our application.

**/src/App.js**
```JavaScript
import './App.css';
import SayHello from './SayHello';

function App() {
  return (
    <>
      {SayHello()} {/* We can execute our component here! */}
    </>
  );
}

export default App;
```

If everything is named and called correctly, you should see the `'Hello, World!'` text in your web browser *(don't forget to run `npm start` in your terminal to run your React app.)*

Alright great! Our component is working. Let's kick it up a notch by introducing a parameter. Edit your `SayHello` component like so:

**/src/SayHello.jsx**
```JavaScript
import React from 'react';

const SayHello = (name) => {
    return (
        <p>Hello, {name}!</p>
    );
};

export default SayHello;
```

We'll also want to pass in a name when we call upon it in our `/src/App.js`, just like when we want to pass in arguments to any other function:

**/src/App.js**
```JavaScript
import './App.css';
import SayHello from './SayHello';

function App() {
  return (
    <>
      {SayHello('World')} {/* Try passing in names and see what happens! */}
      {SayHello('Lighthouse Labs')}
    </>
  );
}

export default App;
```

Ausgezeichnet! It is working! Next we'll follow the recommended conventions for React developers, but please keep the above in-mind as we proceed.

### Doing Props the "React Way"

In order for React developers to quickly understand each other's code and to make it easier to work/communicate in a team environment, there are some conventions we will want to get in the habit of following. One, that we have seen already above, is to name our components starting with a capital letter. Most JavaScript developers name regular old functions using `camelCase`... by naming our components with `PascalCase` instead, they stand out a bit more and signal to other developers that this is a React component that will return JSX. We're already following this practice, so let's discuss another good practice.

In React, instead of many parameters like we're used to, the convention is to pass our argument as an object. This means we can pass one or more key value pair(s) as needed. Let's write a new component together. It will have a `title` and a `phrase` as parameters. It is tempting to write it like so:

**/src/ContentBlock.jsx**
```JavaScript
import React from 'react';

const ContentBlock = (title, phrase) => {
    return (
        <>
            <h2>{title}</h2>
            <p>{phrase}</p>
        </>
    );
};

export default ContentBlock;
```

We could import this to our `/src/App.js` no problem as well, like so:

**/src/App.js**
```JavaScript
import './App.css';
// import SayHello from './SayHello';
import ContentBlock from './ContentBlock';

function App() {
  return (
    <>
      {ContentBlock('React', 'React is a JavaScript library for building component-based web UIs.')}
      {ContentBlock('jQuery', 'jQuery is a JavaScript library for easy web page DOM manipulation.')}
    </>
  );
}

export default App;
```

One draw-back to this multi-parameter approach, is that the *order* that we pass arguments in becomes extremely important. It also doesn't lend itself well to an alternative JSX syntax that we can follow when calling upon our components. Let's adjust our code to follow use of an object, instead of passing in multiple arguments.

**/src/ContentBlock.jsx**
```JavaScript
import React from 'react';

const ContentBlock = (props) => { // We will accept ONE (1) parameter now.
    return (
        <>
            <h2>{props.title}</h2> {/* The object will need to contain a 'title' key-value. */}
            <p>{props.phrase}</p>  {/* The object will need to contain a 'phrase' key-value. */}
        </>
    );
};

export default ContentBlock;
```

We'll need to adjust our `/src/App.js` accordingly to match this new expected format.

**/src/App.js**
```JavaScript
import './App.css';
// import SayHello from './SayHello';
import ContentBlock from './ContentBlock';

function App() {
  return (
    <>
      {ContentBlock({
        title: 'React',
        phrase: 'React is a JavaScript library for building component-based web UIs.'
      })}
      {ContentBlock({
        title: 'jQuery',
        phrase: 'jQuery is a JavaScript library for easy web page DOM manipulation.'
      })}
    </>
  );
}

export default App;
```

You'll find that the application works once more, without issue. This doesn't yet truly *feel* like a big improvement just yet. Let's make one more change though. It turns out that when we run our components via standard JSX syntax, we can easily pass key-value pairs. They end up **looking** like *HTML attributes.* Keep in-mind that JSX is *not* HTML, but a special JavaScript syntax we are allowed to use because of our friend the [Babel](https://babeljs.io/) JavaScript compiler installed in our project (it comes with any application we generate using `npx create-react-app`.)

To take advantage of this syntax we won't have to update our `/src/ContentBlock.jsx` file! We'll just update the code we use to call upon our component. Observe the change(s) made to our `/src/App.js` file:

**/src/App.js**
```JavaScript
import './App.css';
// import SayHello from './SayHello';
import ContentBlock from './ContentBlock';

function App() {
  return (
    <>
      <ContentBlock
        title='React'
        phrase='React is a JavaScript library for building component-based web UIs.'
      />
      <ContentBlock
        title='jQuery'
        phrase='jQuery is a JavaScript library for easy web page DOM manipulation.'
      />
    </>
  );
}

export default App;
```

As you can see, this makes our JSX look *strikingly* HTML-like. Most React developers agree that this format is preferred, and the easiest to read at-a-glance. Get familiar with this format, and remember that it is just a special syntax for formatting an *object parameter*. It is a simplified way for us to establish key-value pairs to pass into our component function.

The name `props` isn't strictly enforced by React, but most developers and teams follow this convention, so in your components please be in the habit of calling your parameter "props" so that you, and developers you work with, understand what the parameter is for.

### Considering the Purpose of Props

Why are props important? The above examples demonstrate the ability for our components to become much more versatile when using props. They can be used to modify or customize the logic and output of our component.

Another primary purpose and feature of props lies in their allowance for us to pass a value from one component down to a child component. Suddenly doors are opened for us to have a value shared down a tree of components, as shallow or as deep as we may need! A limitation we'll experience when passing values down as props is that they can *only* travel down. You are ***not*** able to pass values back upward. Should you need a value in a parent component, you will have to re-consider where that value is set-up. We also won't directly modify props... so how *do* we manage values that may change over time?

## State

Finally we find ourselves crossing the threshold from review into the true meat 🥩 and potatoes 🥔🥔🥔 of today's lesson! What is *state*, and how can we use it in our React components—our JSX-returning functions!? Let's suppose we have a value that is going to change over-time. Perhaps... very literally! Let's create a basic little time-based counter: *each second, the number will go up by one.*

Let's solve this "the old fashioned way" with vanilla JavaScript, and then explore the React way to accomplish this in a component.

**/timer.js**
```JavaScript
const timer = () => {
    let count = 0;
    setInterval(() => {
        count++;
        console.log('Count:', count);
    }, 1000);
};
```

Great! That works no problem. We can see the count update as time passes. Let's see if we can implement this in React now. We'll begin by writing our component, complete with an interval to keep track of the passing seconds.

**/src/Timer.jsx**
```JavaScript
import React from 'react';

const Timer = () => {
    let seconds = 0;

    setInterval(() => {
        seconds++;
        console.log(seconds, 'seconds have passed.');
    }, 1000);
    
    return (
        <p>{seconds} seconds have passed.</p>
    );
};

export default Timer;
```

To see if this is working in-browser, we'll want to refer to our new component in the `/src/App.js` file.

**/src/App.js**
```JavaScript
import './App.css';
// import SayHello from './SayHello';
// import ContentBlock from './ContentBlock';
import Timer from './Timer';

function App() {
  return (
    <>
      <Timer />
    </>
  );
}

export default App;
```

What do we see in the browser? Hm. Not a lot, eh?

What if we open the web browser developer tools, is there anything in the web console?

Gadzooks! Our `console.log` seems to know what's going on! But why can't we see the changes in the browser?

React is a popular library, and it has the intention of being a *performant* library. This means that, when used correctly, its functions should run quickly and efficiently. To this end, one tactic they use to ensure a high/fast performance, is to only update what you see in the web page if it *detects a change in a value.* Our next question becomes, then, how can we make React *notice* when our *seconds* variable changes?

**This is the purpose of state.** We can keep track of values, and let React know when they change.

***Only*** when a *state* value *changes* will React re-render the HTML, so you can see the change in the web-page.

Let's update our component to make use of React state. When we add **state** to a component, we must make use of the `useState` hook provided to us by React. Observe, taking care to read the comments and note the evolution of the file:

**/src/
```JavaScript
// Import the 'useState' React hook.
import React, { useState } from 'react';

const Timer = () => {
    // The 'useState' React hook returns an array.
    const secondsStateArray = useState(0); // We can pass in the DEFAULT state value (0 in this case.)

    // The first element in the array is the CURRENT VALUE stored in-state.
    const seconds = secondsStateArray[0];

    // The second element in the array is the "SETTER" FUNCTION for our state.
    const setSeconds = secondsStateArray[1]; // When we run the SETTER, React will check if the state changed.

    setInterval(() => {
        // NEVER update state value ('seconds', in this example) directly.
        // When updating state, use the SETTER function that 'useState' gave us!
        // The SETTER function lets React know we're changing state, so it can re-render.
        // Re-render means that this function will run again
        setSeconds(seconds + 1);
        console.log(seconds, 'seconds have passed.');
    }, 1000);
    
    return (
        <p>{seconds} seconds have passed.</p>
    );
};

export default Timer;
```

With the changes above, ***now*** we can see the changes in the browser!

* To set-up state properly *the React way* we make use of the `useState` hook/function.
* The argument value you pass into the `useState` function will be the ***default***, or ***initial*** value your state will be set to.
* `useState` returns an array with two critical values for us!
  0. `state`: this is the ***current*** value of our state, use this for output.
  1. `setState`: this is a function for ***updating*** state—using this is the **only** way you'll update the state value.

## Event-Handling in React

So we have an automatic time-based counter. Let's change gears to one that is more... manual! Our new goal is to write a component that will count up each time we click a button, and display to the user the up-to-date count.

Let's create the component and observe where the event-handler comes in:

**/src/Counter.jsx**
```JavaScript
import React, { useState } from 'react';

const Counter = () => {
    // const countStateArray = useState(0);
    // const count = countStateArray[0];
    // const setCount = countStateArray[1];

    // Using array destructuring, we can get our two values in one line.
    const [count, setCount] = useState(0);

    // This function could be named however we'd like.
    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <button onClick={handleClick}> {/* We pass our function into the 'onClick' and it is bound to the event. NO PARENTHESES HERE! */}
            This button has been clicked {count} times!
        </button>
    );
};

export default Counter;
```

Again, in order for us to see our brand-new component, we'll need to reference it in our `/src/App.js`. Let's import it there.

**/src/App.js**
```JavaScript
import './App.css';
// import SayHello from './SayHello';
// import ContentBlock from './ContentBlock';
// import Timer from './Timer';
import Counter from './Counter';

function App() {
  return (
    <>
      <Counter />
    </>
  );
}

export default App;
```

And there we have it! A browser event that can update our state. Note there are plenty of events we can latch onto, including (but not limited to):

* `onClick`
* `onKeyUp`
* `onMouseEnter`
* `onMouseLeave`
* `onFocus`

Feel free to experiment!

Think back to what we discussed on closures earlier. Remember too, that each time we reference our component, the function is freshly executing. What should happen with our `count` state if we were to update our `/src/App.js` to call upon `Counter` multiple times? Take a moment to guess, and then make the following code updates.

**/src/App.js**
```JavaScript
import './App.css';
// import SayHello from './SayHello';
// import ContentBlock from './ContentBlock';
// import Timer from './Timer';
import Counter from './Counter';

function App() {
  return (
    <>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </>
  );
}

export default App;
```

What do we notice happens when clicking on any individual button? Are the counts shared or separate?

That's right, ***they're separate!*** Each state is unique to each scope they were initialized in. This makes our components (and their state) *very* re-usable!

## Lifting State

There are times where we'll run into trouble, as our component props and state cannot be passed ***up*** to parent components. Let's work on another component together and see if we run into this.

Our goals in this next exercise are as-follows:

* [ ] A component where we can type the topic for our web page.
* [ ] The component must use an `<input>` to allow the user to easily change the topic as they please.
* [ ] The App must have an over-arching `<h1></h1>` that also updates to match this web site topic.

Okay, so using what we've learned, let's first tackle what will probably be the hardest part: how to keep track of what a user has typed into an `<input>`.

What they type in can *change*, so we should use *state* to keep track of the value of this title text. This will ensure that what they type can trigger a "re-render" of the component HTML and we can see the change in areas it would affect.

It should also be noted that we can likely take advantage of the *events* associated with an element like `<input>` if we want to know when it is most appropriate to update our state. Let's fulfil these portions:

**/src/ChangeTitle.jsx**
```JavaScript
import React, { useState } from 'react';

const ChangeTitle = () => {
    // Set-up the state, as per usual:
    const [title, setTitle] = useState('Cool React App');
    
    // Let's create a helper function to manage
    // the logic that will run if our <input>
    // element is changed by the user.
    // Remember that when events run, the browser
    // is kind enought to give us an event object!
    const handleInputChange = (event) => {
        const inputElement = event.target; // Retrieve the <input> element from the event.
        const inputElementText = inputElement.value; // Retrieve the entered VALUE from the <input>.
        setTitle(inputElementText); // Save the current text to our state, notifying React.
    };

    return (
        <>
            <input
                onChange={handleInputChange} {/* Handle text changing in our <input>. */}
                value={title} {/* Always display the current state in our <input>. */}
            />
            <p>
                <strong>Title Preview:</strong>
                &nbsp;{title} {/* Let's show a preview so we know if our state is working. */}
            </p>
        </>
    );
};

export default ChangeTitle;
```

To see if our new component is working like we'd hope, let's ensure we make mention of it in our `/src/App.js` file.

**/src/App.js**
```JavaScript
import './App.css';
// import SayHello from './SayHello';
// import ContentBlock from './ContentBlock';
// import Timer from './Timer';
import Counter from './Counter';
import ChangeTitle from './ChangeTitle';

function App() {
  return (
    <>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <ChangeTitle />
    </>
  );
}

export default App;
```

Looks like it changes A-okay! Alright, so we're in pretty good shape. However, we're still missing one of the core requirements for our goals...

* [X] A component where we can type the topic for our web page.
* [X] The component must use an `<input>` to allow the user to easily change the topic as they please.
* [ ] The App must have an over-arching `<h1></h1>` that also updates to match this web site topic.

The third requirement is asking us to have an `<h1></h1>` in our `/src/App.js` file... We can add that element easily enough. But how can we get our *state* from our `<ChangeTitle />` component into this file!? Even if we try in `/src/App.js`, there's seemingly no way we can accomplish what feels like it should be a simple task...

**/src/App.js**
```JavaScript
import './App.css';
// import SayHello from './SayHello';
// import ContentBlock from './ContentBlock';
// import Timer from './Timer';
import Counter from './Counter';
import ChangeTitle from './ChangeTitle';

function App() {
  return (
    <>
      <h1>HOW DO WE GET OUR TITLE HERE!?</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <ChangeTitle />
    </>
  );
}

export default App;
```

We cannot pass state or props *upward* to parents... this leaves us with one option: **lift state** from our `/src/ChangeTitle.jsx` file to our `/src/App.js` file.

What does **lift state** mean? It is the "proper" way to describe the act of removing our `useState` from our `<ChangeTitle />` component, and instead using the hook in the parent `<App />` component. We are very literally moving the state code to the component above.

Lifting state gives us the flexibility to *pass down props* if, or as, we need. Observe the changes we'll make in both `/src/App.js` and `/src/ChangeTitle.jsx`.

**/src/App.js**
```JavaScript
// Ensure you have 'useState' imported here now!
import React, { useState } from 'react';

import './App.css';
import Counter from './Counter';
import ChangeTitle from './ChangeTitle';

function App() {
  // Let's put our state here!
  const [title, setTitle] = useState('Cool React App');

  return (
    <>
      <h1>{title}</h1>{/* Now our H1 can finally read our 'title' state! */}
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      {/* We can pass values/functions as props, down to our child component! */}
      <ChangeTitle title={title} setTitle={setTitle} />
    </>
  );
}

export default App;
```

**/src/ChangeTitle.jsx**
```JavaScript
// We NO LONGER need the 'useState' hook in this file.
import React from 'react';

// Our 'props' parameter is the magic here, now!
// We'll want it here so we can accept our parent's state values.
const ChangeTitle = (props) => { // props = {title: title, setTitle: setTitle} (see `/src/App.js`)
    const handleInputChange = (event) => {
        const inputElement = event.target; // Retrieve the <input> element from the event.
        const inputElementText = inputElement.value; // Retrieve the entered VALUE from the <input>.
        
        // It is now 'props.setTitle' because it is defined in the parent component.
        props.setTitle(inputElementText);
    };

    return (
        <>
            <input
                onChange={handleInputChange}
                value={props.title} {/* This is now 'props.title' because it is defined in the parent component. */}
            />
            <p>
                <strong>Title Preview:</strong>
                &nbsp;{props.title} {/* This is now 'props.title' because it is defined in the parent component. */}
            </p>
        </>
    );
};

export default ChangeTitle;
```

Running our application again, we can finally see both our `<h1></h1>` heading and our `<ChangeTitle />` component in-sync. Keep this technique and idea of "**lifting state**" in-mind as you continue to build components that rely on state. Should more than one component need the same information, you'll want to identify the nearest common parent in their shared heirarchy. That parent should be responsible for the *state*, meaning it should be the component that you write your `useState` code in. *Props* can always be passed down to children (but not back upward!)

![Image about lifting useState up a tree of React components.](https://github.com/WarrenUhrich/lighthouse-labs-what-is-state/blob/2024.01.23-web-flex-day-18september2023/2024.01.23-web-flex-day-18sept2023-lifting-react-state.png?raw=true)

## Resources

For further exploration of the topics we've discussed today, please explore the following resources:

* [React Documentation: "State: A Component's Memory"](https://react.dev/learn/state-a-components-memory)
* [MDN Web Documentation: Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
* [React Documentation: State as a Snapshot](https://react.dev/learn/state-as-a-snapshot)
* [React Documentation: Managing State](https://react.dev/learn/managing-state)
* [React Documentation: Sharing State Between Components](https://react.dev/learn/sharing-state-between-components)
* [React Documentation: Updating Objects in State](https://react.dev/learn/updating-objects-in-state)
* [React Documentation: Updating Arrays in State](https://react.dev/learn/updating-arrays-in-state)
* [React Documentation: Responding to Events](https://react.dev/learn/responding-to-events)
* [O'Reilly Safari Books: Learning React *Warren's Favourite!](https://www.oreilly.com/library/view/learning-react-2nd/9781492051718/)
