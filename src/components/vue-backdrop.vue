<template>
  <aside class="vue-backdrop" :class="className" :data-visible="visible"></aside>
</template>
<script>
  export default {
    data() {
      return {};
    },
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
    created(){

    },
    methods: {},
    watch: {
      'visible': function (inItem) {
        //console.log('inItem:', inItem);
      }
    },
    components: {},
    mounted(){
      //console.log('visible:', this.visible);
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
    position: absolute;
    transition: opacity 0.3s linear;
    z-index: 1;
    &[hidden] {
      display: none;
    }
    &[data-visible=true] {
      opacity: 0.3;
    }
  }

</style>

