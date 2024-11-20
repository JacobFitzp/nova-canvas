<template>
    <Standard :tool="tool" :refs="refs" :editor="editor" />

    <BubbleMenu
        class="flex gap-2 py-1 px-2 bg-gray-50 border border-gray-200 rounded"
        :editor="editor"
        v-show="tool.active(editor)"
    >
        <button
            v-for="(sizeClass, size) in tool.field.imageSizes"
            type="button"
            class="hover:text-primary-600"
            :class="{ 'text-primary-600': editor.isActive('image', { size }) }"
            @click="editor.commands.setImage({ size })"
        >
            {{ size }}
        </button>
        <span>|</span>
        <button
            type="button"
            @click="tool.apply(editor)"
            class="hover:text-primary-600"
        >
            Change
        </button>
    </BubbleMenu>
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
