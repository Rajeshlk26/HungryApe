# React

....

# Parcel
- Dev build
- Local Server (host on to a server)
- HMR : hot module replacement (update the changes immediately whenever small changes is there using file watching algo)
- File watching algorithm (written C++)
- Caching : Faster build (.parcel-cache file)
- Image optimization
- Minification of the file
- Bundling of all files(Html, CSS, JS)
- Compressing the files
- Consistent Hashing
- code splitting
- Differential bundling :  Support odler browsers
- Diagontics
- Error Handling
- HTTPs : can be hosited as HTTPs
- Treeshaking : remove unused code which is not in current by treeshaking algo
- Lazy mode
- Different dev and production bundles

#Restaurant APP
/*Components
1-Header
*logo
*Nav-Items
2-Body
*Search
*RestaurantContainer
  -img
  -Name of res, star rating, cuisine, delivery time
3-Footer
*Copyright
*Links
*Contact
*/


#Two type of exports

-Default export/import

export default Component;
import Component from "path";

-Named export/Import

Export const component/ {Component 1, Component 2}
Import {Component} from "path";

#React Hooks
(Normal JS utility functions)
-UseState() - superpowerful state variables in react
-Useffect() - Performs side effects in the components depending on the dependency array.
it is called every time any state if the dependency array is modified/updated.

#Routing in the web apps
-Client side routing
-Server side routing 

#Redux Toolkit
- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- SLice (cartSlice)
- dispatch (action)
- Selector (subscribing)

#Types of testing
- Unit testing (testing component or small unit in isolation)
- Integration testing ()
- End to end testing/ e2e testing

#Setting up testing in our App
- Install React testing library
- Install Jest
- Install Babel Dependencies.
- Configure Babel
- Configure Parcel config file to disable babel transpilation
- Jest Configuration (npx jest --init)
- Install jsdom library
- Install @Babel/preset-react - to maek JSX work in test cases
- Include @babel/preset-react inside my babel config
- Install npm i -D @testing-library/jest-dom