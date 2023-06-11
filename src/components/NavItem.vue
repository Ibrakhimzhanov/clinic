<script>
export default {
  inheritAttrs: false
}
</script>
<template>
  <li>
    <a v-bind="$attrs">
      <slot></slot>
    </a>
  </li>
</template>
