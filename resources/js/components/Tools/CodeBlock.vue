<template>
    <Standard :tool="tool" :refs="refs" :editor="editor" />
</template>

<script>
import BaseTool from './BaseTool'
import { BubbleMenu } from '@tiptap/vue-3'
import Standard from './Standard.vue'

export default {
    components: {
        Standard,
        BubbleMenu
    },
    extends: BaseTool
}
</script>
