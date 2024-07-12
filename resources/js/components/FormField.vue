<template>
    <DefaultField
        :field="field"
        :errors="errors"
        :show-help-text="showHelpText"
        :full-width-content="fullWidthContent"
    >
        <template #field>
            <div>
                <div class="form-control py-3 h-auto form-input form-control-bordered form-input-top">
                    <FixedMenu
                        v-if="editorReady"
                        :toolbar="field.toolbar"
                        :editor="editor"
                    />
                </div>
                <EditorContent :editor="editor" v-model="value" />
                <div v-if="characterCountEnabled && editorReady">
                    <p class="text-sm mt-2">
                        {{ characterCount }} {{ characterCountSuffix }}
                    </p>
                </div>
            </div>
        </template>
    </DefaultField>
</template>

<script>
import { FormField, HandlesValidationErrors } from 'laravel-nova'
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import FixedMenu from './Menus/FixedMenu.vue'
import tools from '../modules/tools'
import { CharacterCount } from '@tiptap/extension-character-count'

export default {
    components: {
        FixedMenu,
        EditorContent
    },

    mixins: [FormField, HandlesValidationErrors],

    props: ['resourceName', 'resourceId', 'field'],

    data () {
        return {
            editor: null
        }
    },

    computed: {
        /**
         * Is editor instance ready?
         */
        editorReady () {
            return this.editor !== null
        },

        /**
         * Is character count feature enabled?
         */
        characterCountEnabled () {
            return this.field.characterCount
        },

        /**
         * Get the current character or word count.
         */
        characterCount () {
            if (!this.characterCountEnabled || !this.editorReady) {
                return 0
            }

            return this.field.characterCountMode === 'words'
                ? this.editor.storage.characterCount.words()
                : this.editor.storage.characterCount.characters()
        },

        /**
         * Suffix for character count.
         */
        characterCountSuffix () {
            const suffix = this.field.characterCountMode === 'words' ? 'word' : 'character'
            return this.characterCount === 1 ? suffix : suffix + 's'
        }
    },

    mounted () {
        this.editor = new Editor({
            editable: !this.field.readonly,
            editorProps: {
                attributes: {
                    class: 'nova-canvas h-auto max-w-none block py-3 prose form-control form-input form-input-bottom form-control-bordered dark:prose-invert prose-sm focus:outline-none',
                },
            },
            content: this.value,
            extensions: [
                StarterKit.configure({
                    // Disable built-in extensions which we are not using or override elsewhere.
                    codeBlock: false,
                }),
                ...this.characterCountExtension(),
                ...this.getToolExtensions()
            ],
            onUpdate: () => {
                this.value = this.editor.getHTML()
            }
        })
    },

    beforeUnmount() {
        this.editor.destroy()
    },

    methods: {
        /*
         * Set the initial, internal value for the field.
         */
        setInitialValue() {
            this.value = this.field.value || ''
        },

        /**
         * Fill the given FormData object with the field's internal value.
         */
        fill(formData) {
            formData.append(this.fieldAttribute, this.value || '')
        },

        /**
         * Get extensions for the various tools.
         */
        getToolExtensions () {
            const extensions = []

            for (const [key, tool] of Object.entries(tools)) {
                if (tool.extension !== undefined) {
                    extensions.push(tool.extension())
                }
            }

            return extensions
        },

        /**
         * Get extensions for the character count feature, if enabled.
         */
        characterCountExtension () {
            return this.characterCountEnabled ? [CharacterCount] : []
        }
    }
}
</script>
