<template>
  <aside class="vue-backdrop"
         :class="className"
         :data-hidden="hasHidden"
         :data-visible="hasVisible"
         v-on:transitionend="_onTransitionEnd()"
  ></aside>
</template>
<script>
  export default {
    data() {
      return {
        hasHidden: true,
        hasVisible: false
      };
    },
    props: {
      visible: {
        type: Boolean
      },
      className: {
        type: String
      }
    },
    created(){

    },
    methods: {
      _onTransitionEnd(){
        this.hasHidden = !this.hasVisible;
      }
    },
    watch: {
      'visible': function (inItem) {
        this.hasHidden = false;
        setTimeout(() => {
          this.hasVisible = this.visible;
        },100);
      }
    },
    components: {},
    mounted(){
    }
  };
</script>
<style rel="stylesheet/scss" lang="scss">
  .vue-backdrop {
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: #000;
    opacity: 0.01;
    position: fixed;
    transition: opacity 0.3s linear;
    z-index: 1;
    &[data-hidden=true], &[hidden] {
      display: none;
    }
    &[data-visible=true] {
      opacity: 0.3;
    }
  }

</style>

