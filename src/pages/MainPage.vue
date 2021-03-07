<template>
  <TitleBar title="홈 메인" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TitleBar from '../components/TitleBar.vue';

export default defineComponent({
  name: 'MainPage',  
  components: {
    TitleBar
  }
})

</script>

<style scoped>

</style>