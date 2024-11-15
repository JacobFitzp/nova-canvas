<template>
    <select
        :value="currentFormat"
        :disabled="!currentFormat"
        class="format-dropdown rounded-sm bg-gray-50 dark:bg-gray-900"
        @change="applyFormat"
    >
        <option disabled value="">Paragraph</option>
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
                        return this.editor.isActive('paragraph')
                    }
                },
                heading1: {
                    label: 'Heading 1',
                    apply: () => {
                        this.editor.chain().focus().toggleHeading({ level: 1 }).run()
                    },
                    active: () => {
                        return this.editor.isActive('heading', { level: 1 })
                    }
                },
                heading2: {
                    label: 'Heading 2',
                    apply: () => {
                        this.editor.chain().focus().toggleHeading({ level: 2 }).run()
                    },
                    active: () => {
                        return this.editor.isActive('heading', { level: 2 })
                    }
                },
                heading3: {
                    label: 'Heading 3',
                    apply: () => {
                        this.editor.chain().focus().toggleHeading({ level: 3 }).run()
                    },
                    active: () => {
                        return this.editor.isActive('heading', { level: 3 })
                    }
                }
            },
            currentFormat: null
        }
    },
    created () {
        // Listen for changes in the editor and update the current format.
        this.editor.on('update', this.updateCurrentFormat)
        this.editor.on('selectionUpdate', this.updateCurrentFormat)
    },
    methods: {
        applyFormat (event) {
            this.formats[event.target.value].apply()
        },
        updateCurrentFormat () {
            // Reset to unknown format.
            this.currentFormat = null

            // Attempt to find active format.
            for (const [key, format] of Object.entries(this.formats)) {
                if (format.active()) {
                    this.currentFormat = key
                    break
                }
            }
        }
    }
}
</script>
