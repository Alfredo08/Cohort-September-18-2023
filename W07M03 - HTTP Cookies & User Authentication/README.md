# M03 W07 | HTTP Cookies & User Authentication
[Github Repository]() | [Vimeo Video Recording]()

## Topics to cover

- [x] 1. Review HTTP
- [x] 2. HTTP Cookies
- [x] 3. Login and Register process (live coding)

### 1. How HTTP is stateless
---

HTTP is stateless: there is no link between two requests being successively carried out on the same connection. **The server doesn't remember you. The server process every request like a new request.**

But while the core of HTTP itself is stateless, **HTTP cookies allow the use of stateful sessions**. Using header extensibility, HTTP Cookies are added to the workflow, allowing session creation on each HTTP request to share the same context, or the same state.

#### 1.1 What is a session?

Session tracking enables you to track a user's progress over multiple servlets or HTML pages.

- Application session is server-side data which servers store to identify incoming client requests, their previous interaction details, and current context information.

#### 1.2 Benefits of HTTP Statelessness

- Scalability - no session related dependency
- Less complex - less synchroniztion
- Easier to chache
- The server cannot lose track of information

#### 1.3 Disadvantages

- cannot easily keep track context
- context has to provided each time
- Good transactions. not good for conversations.

### 2. Using cookies to remember the user
---

An HTTP cookie (web cookie, browser cookie) is a small piece of data that a server sends to a user's web browser. The browser may store the cookie and send it back to the same server with later requests. 

Typically, an HTTP cookie is used to tell if two requests come from the same browser—keeping a user logged in, for example. **It remembers stateful information for the stateless HTTP protocol**.

#### 2.1 How cookies work

A cookie is a small text file that is stored by a browser on the user’s machine:

```
// cookies are just key-value pairs, like the following
name=Linguini; style=classy;
```

1. The response header will set the cookie
2. The browser will store the cookie
3. The browser will send the cookie in the request headers of subsequent requests

Cookies can be set for a specific domain, and can even have an expiration date.

#### 2.2 Using cookie-parser

By installing the [cookie-parser](https://www.npmjs.com/package/cookie-parser) package through NPM, we can set cookies when responding to client's requests, and we can also read cookies from each client's requests.

```
$ npm install cookie-parser
```

Once cookie-parser is installed, we have to require it and add it as a middleware of our express server:

```javascript
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

// Set cookie-parser as a middleware
app.use(cookieParser());
...
```

Now we can set a cookie when responding to a client's request:

```javascript
// Sign-in endpoint
app.post('/sign-in', (req, res) => {
  ...

  // Set the cookie with whatever value you wish
  res.cookie('user_id', userObject.id);

  // Finish the request-response cycle with 
  // res.redirect(), res.send() or res.json():
  res.redirect('/');
})
```

Finally, each time the client performs a new request into our server, we can check if there is any cookies set in the client's browser and read the data they store:

```javascript
// Home endpoint
app.get('/', (req, res) => {
  // We can read cookies with req.cookies.cookieName
  const idUser = req.cookies.user_id;

  if (!idUser) return res.send('No cookie stored...');
  return res.send('There is a cookie stored!');
});
```