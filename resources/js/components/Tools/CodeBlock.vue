<template>
    <Standard :tool="tool" :refs="refs" :editor="editor" />

<!-- todo: Add dropdown language selector -->
<!--    <BubbleMenu-->
<!--        class="flex py-1 px-2 bg-gray-50 border border-gray-200 rounded"-->
<!--        :editor="editor"-->
<!--        v-show="tool.active(editor)"-->
<!--    >-->
<!--        <select>-->
<!--            <option>PHP</option>-->
<!--            <option>JavaScript</option>-->
<!--        </select>-->
<!--    </BubbleMenu>-->
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
