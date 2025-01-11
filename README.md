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


Two type of exports

-Default export/import

export default Component;
import Component from "path";

-Named export/Import

Export const component/ {Component 1, Component 2}
Import {Component} from "path";