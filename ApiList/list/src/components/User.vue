<template>
  <span>{{user.id}} - {{user.name}}</span>
</template>
<script>
export default {
  props: {
    user: {}
  }
};
</script>
