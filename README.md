dom-toolkit
===================

Toolkit for DOM. Based on the [vuejs dom util](https://github.com/vuejs/vue/blob/dev/src/util/dom.js)

## install
  npm install dom-toolkit

### Example
```javascript
import * as domToolkit from 'dom-toolkit'
conat app = document.createElement('div')
app.id = 'app'
document.appendChild(app)
const app = domToolkit.query('#app')
```
### License
[MIT](https://opensource.org/licenses/mit-license.php)
