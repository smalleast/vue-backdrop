#vue-backdrop
> Backdrop for vue.

## props:

```
 props: {
      visible: {
        type: Boolean
      },
      className: {
        type: String
      },
      style: {
        type: String
      }
    },
```

## usage:
+ install:
```bash
npm install smalleast/vue-backdrop --save


```

+ code:
```javascript
import VueBackdrop from 'vue-Backdrop';

new Vue({
  el: '#app',
  components: {VueBackdrop},
  methods: {
    _click1(){
      console.log('button');
    }
  },
  render: function (createElement) {
    return createElement('div',[
      createElement(VueBackdrop),
    ])
  }
});

```

+template
```
<template>
  <aside class="dev">
    <div class="popup">
      <button v-on:click="_click()">show backdrop</button>
    </div>
    <VueBackdrop :visible="visible" :className="'zIndex'" :style="'z-index: 2;'"></VueBackdrop>
  </aside>
</template>
```

## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install
