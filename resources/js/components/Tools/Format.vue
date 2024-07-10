<template>
    <select @change="applyFormat">
        <option
            v-for="(format, key) in formats"
            :key="key"
            :value="key"
        >
            {{ format.label }}
        </option>
    </select>
</template>

<script>
import BaseTool from './BaseTool'

export default {
    extends: BaseTool,
    data () {
        return {
            formats: {
                paragraph: {
                    label: 'Paragraph',
                    apply: () => {
                        this.editor.chain().focus().setParagraph().run()
                    },
                    active: () => {
                        this.editor.isActive('paragraph')
                    }
                },
                heading1: {
                    label: 'Heading 1',
                    apply: () => {
                        this.editor.chain().focus().toggleHeading({ level: 1 }).run()
                    },
                    active: () => {
                        this.editor.isActive('heading', { level: 1 })
                    }
                },
                heading2: {
                    label: 'Heading 2',
                    apply: () => {
                        this.editor.chain().focus().toggleHeading({ level: 2 }).run()
                    },
                    active: () => {
                        this.editor.isActive('heading', { level: 2 })
                    }
                },
                heading3: {
                    label: 'Heading 3',
                    apply: () => {
                        this.editor.chain().focus().toggleHeading({ level: 3 }).run()
                    },
                    active: () => {
                        this.editor.isActive('heading', { level: 3 })
                    }
                }
            }
        }
    },
    methods: {
        applyFormat (event) {
            this.formats[event.target.value].apply()
        }
    }
}
</script>
