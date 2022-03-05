# econ-app

Technologies used:

 - TailwindCSS
 - animate.css for animation


# Notes

### 2022-03-05 - Tab states depending on url path

Problem: tabs have to be rendered depending on the current path, i.e, the url. Changing the path (a link) will have to trigger the re-render of the tabs to fit the URL.

Solution 1: store current selected tab as a state using useState(). When a link is clicked, first update the current tab, then maually update the path using the router.

(my current solution) Solution 2: extract the tabbar into a container. Inside the container, get the current selected tab from the URL using the router object, and render the tabs accordingly.

---

console.log trick: 
 - For components, use `console.log('render <component name>)`
 - For hooks, use `console.log('called <hook name>')`

Logging in this way helps track which components & hooks have been called or rendered, which can help improve performance.