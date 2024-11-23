<template>
    <Standard :tool="tool" :refs="refs" :editor="editor" />

    <BubbleMenu
        class="flex gap-2 py-1 px-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded"
        :editor="editor"
        v-show="tool.active(editor)"
    >
        <button
            v-for="(label, size) in sizeOptions"
            type="button"
            class="hover:text-primary-600"
            :class="{ 'text-primary-600': editor.isActive('image', { size }) }"
            @click="editor.commands.setImage({ size })"
        >
            {{ label }}
        </button>
        <Separator />
        <button
            v-for="(icon, float) in floatOptions"
            type="button"
            class="hover:text-primary-600"
            :class="{ 'text-primary-600': editor.isActive('image', { float }) }"
            @click="editor.commands.setImage({ float })"
        >
            <component :is="icon" class="h-5 w-5" />
        </button>
        <Separator />
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
import { Bars3Icon, Bars3BottomLeftIcon, Bars3BottomRightIcon } from '@heroicons/vue/24/outline'
import Standard from './Standard.vue'
import Separator from './Separator.vue'

export default {
    components: {
        Separator,
        Standard,
        BubbleMenu,
        Bars3Icon,
        Bars3BottomLeftIcon,
        Bars3BottomRightIcon
    },
    extends: BaseTool,
    data () {
        return {
            sizeOptions: {
                25: '25%',
                50: '50%',
                100: '100%'
            },
            floatOptions: {
                left: Bars3BottomLeftIcon,
                center: Bars3Icon,
                right: Bars3BottomRightIcon
            }
        }
    }
}
</script>
