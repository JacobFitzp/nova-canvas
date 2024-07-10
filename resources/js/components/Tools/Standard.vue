<template>
    <button
        type="button"
        class="hover:text-primary-600"
        :class="{ 'text-primary-600': tool.active(editor) }"
        @click="tool.apply(editor)"
    >
        <component
            :is="tool.icon"
            class="h-6 w-6"
        />
    </button>
</template>

<script>
import BaseTool from './BaseTool'

export default {
    extends: BaseTool
}
</script>
