<template>
    <Standard :tool="tool" :refs="refs" :editor="editor" />

    <BubbleMenu
        class="flex gap-2 py-1 px-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded"
        :editor="editor"
        v-show="tool.active(editor)"
    >
        <button
            type="button"
            class="hover:text-primary-600"
            @click="editor.chain().focus().toggleHeaderCell().run()"
        >
            <ToggleHeadingIcon />
        </button>
        <button
            type="button"
            class="hover:text-primary-600"
            @click="editor.chain().focus().addColumnAfter().run()"
        >
            <InsertColumnIcon />
        </button>
        <button
            type="button"
            class="hover:text-primary-600"
            @click="editor.chain().focus().addRowAfter().run()"
        >
            <InsertRowIcon />
        </button>
        <button
            type="button"
            class="hover:text-primary-600"
            @click="editor.chain().focus().deleteColumn().run()"
        >
            <RemoveColumnIcon />
        </button>
        <button
            type="button"
            class="hover:text-primary-600"
            @click="editor.chain().focus().deleteRow().run()"
        >
            <RemoveRowIcon />
        </button>
        <Separator />
        <button
            type="button"
            class="hover:text-primary-600"
            @click="editor.chain().focus().deleteTable().run()"
        >
            <RemoveTableIcon />
        </button>
    </BubbleMenu>
</template>

<script>
import BaseTool from './BaseTool'
import { BubbleMenu } from '@tiptap/vue-3'
import Standard from './Standard.vue'
import InsertColumnIcon from '../Icons/Table/InsertColumnIcon.vue'
import InsertRowIcon from '../Icons/Table/InsertRowIcon.vue'
import RemoveColumnIcon from '../Icons/Table/RemoveColumnIcon.vue'
import RemoveRowIcon from '../Icons/Table/RemoveRowIcon.vue'
import Separator from './Separator.vue'
import RemoveTableIcon from '../Icons/Table/RemoveTableIcon.vue'
import ToggleHeadingIcon from '../Icons/Table/ToggleHeadingIcon.vue'

export default {
    components: {
        ToggleHeadingIcon,
        RemoveTableIcon,
        Separator,
        RemoveRowIcon,
        RemoveColumnIcon,
        InsertRowIcon,
        InsertColumnIcon,
        Standard,
        BubbleMenu,
    },
    extends: BaseTool
}
</script>
