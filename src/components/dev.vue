<template>
  <aside class="dev">
    <div class="popup">
      <button v-on:click="_click()">show backdrop</button>
    </div>
    <VueBackdrop :visible="visible" :className="'zIndex'" :style="'z-index: 2;'"></VueBackdrop>
  </aside>
</template>
<script>
  import VueBackdrop from '../components/vue-backdrop.vue'
  export default {
    data() {
      return {
        visible: false
      };
    },
    props: {},
    created(){
    },
    methods: {
      _click(){
        console.log(this.visible);
        this.visible = !this.visible;
      }
    },
    components: {VueBackdrop}
  };
</script>
<style rel="stylesheet/scss" lang="scss">
  .popup {
    position: absolute;
    z-index: 11;
  }

  .zIndex {
    z-index: 2;
  }
</style>

