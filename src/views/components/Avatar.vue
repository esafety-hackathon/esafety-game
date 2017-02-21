<template>
  <div class="avatar" style="background-image:url({{url}})"></div>
</template>
<script>
export default {
  props: ["url"],
}
</script>
<style>
.avatar {
  display: inline-block;
}
</style>