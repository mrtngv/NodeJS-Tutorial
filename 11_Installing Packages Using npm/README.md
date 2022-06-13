## Installing Packages Using npm
*Node Package Manager to Install packages.*

**_npmjs.com_** - Discover Packages.

**_Add `.gitignore` File so the node_modules will be not version controlled._**

1. Type in the terminal `npm i` for installing a package + the package name.
    *For example we want to install a package called lodash, so the command will be `npm i lodash`.*
    `https://www.npmjs.com/package/lodash`
2. We can see the dependencie in the Package.json under the dependencies.
3. We can see that the `lodash` is unstalled uner the new created directory `node_modules`.
4. `const _ = require('lodash');` - In order to use the new package.
5. To **uninstall** a package type in the console `npm uninstall ${package_name}` for example: `npm uninstall lodash`
