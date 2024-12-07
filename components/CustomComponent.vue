<template>
  <div :id="componentId" class="custom-component">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  customStyles: {
    type: String,
    default: ''
  }
})

const componentId = useAttrs().id as string || useId()

useHead({
  style: [{
    key: `custom-styles-${componentId}`,
    id: `custom-styles-${componentId}`,
    textContent: `#${componentId} { ${props.customStyles} }`,
    tagPosition: 'bodyOpen',
  }],
})
</script>
