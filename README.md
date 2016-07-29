vchartist-plugin-title
==========

This plugin provides svg title for vchartist.

## install
  npm install vchartist-plugin-title

## Available options and their defaults
```javascript
  const defaults = {
    title: '',
    titleClass: 'ct-title',
    textAnchor: 'middle',
    padding: {
      x: 0,
      y: 10
    }
  }
```

### Example
```javascript
import vctTitle from 'vchartist-plugin-title'
new Vue({
  el,
  replace: false,
  template: `<chartist
    type="Line"
    :data="chartData"
    :options="chartOptions">
  </chartist>`,
  data: {
    chartData: {
      labels: ['A', 'B', 'C'],
      series: [{
        name: 'test',
        data: [1, 3, 2]
      }]
    },
    chartOptions: {
      lineSmooth: false,
      width: '100%',
      height: '300px',
      chartPadding: {
        top: 40,
        right: 400,
        bottom: 30,
        left: 30
      },
      plugins: [
        vctTitle({
          title: 'hello'
        })
      ]
    }
  }
})
```
### License
[MIT](https://opensource.org/licenses/mit-license.php)
