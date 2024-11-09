<template>
    <button
        type="button"
        class="hover:text-primary-600 disabled:opacity-50"
        :class="{ 'text-primary-600': isActive }"
        :aria-pressed="isActive"
        :disabled="isDisabled"
        @click="apply"
    >
        <component :is="icon" class="h-5 w-5" />
    </button>
</template>

<script>
import BaseTool from './BaseTool'

export default {
    extends: BaseTool,
    computed: {
        isActive () {
            return this.tool.active !== undefined
                ? this.tool.active(this.editor)
                : false
        },
        isDisabled () {
            return this.tool.disabled !== undefined
                ? this.tool.disabled(this.editor)
                : false
        },
        icon () {
            return this.tool.icon
        }
    },
    methods: {
        apply () {
            this.tool.apply(this.editor, this.refs)
        }
    }
}
</script>
