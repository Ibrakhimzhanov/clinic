<script>
export default {
  inheritAttrs: false
}
</script>
<template>
  <li>
    <router-link v-bind="$attrs">
      <slot />
    </router-link>
  </li>
</template>
