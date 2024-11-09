<template>
    <DefaultField
        :field="field"
        :errors="errors"
        :show-help-text="showHelpText"
        :full-width-content="fullWidthContent"
    >
        <template #field>
            <div
                ref="container"
                sticky-container
                class="nova-canvas"
                :class="{ 'nova-canvas--disabled': !editorReady }"
            >
                <div
                    v-sticky
                    ref="header"
                    class="nova-canvas-header form-control py-3 h-auto form-input form-control-bordered form-input--top"
                >
                    <FixedMenu
                        v-if="editorReady"
                        :editor="editor"
                        :field="field"
                        :refs="$refs"
                    />
                    <span v-else>
                        <EyeIcon class="h-4 w-4 inline mr-2" />
                        Read-only mode
                    </span>
                </div>
                <EditorContent :editor="editor" v-model="value" />
            </div>
            <!-- Character count -->
            <div v-if="characterCountEnabled && editorReady">
                <p class="text-xs mt-2">
                    {{ characterCount }} {{ characterCountSuffix }}
                </p>
            </div>
        </template>
    </DefaultField>
</template>

<script>
import { FormField, HandlesValidationErrors } from 'laravel-nova'
import { EyeIcon } from '@heroicons/vue/24/outline'
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import FixedMenu from './Menus/FixedMenu.vue'
import tools from '../modules/tools'
import { CharacterCount } from '@tiptap/extension-character-count'
import { Placeholder } from '@tiptap/extension-placeholder'

export default {
    components: {
        EyeIcon,
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
            return this.editor !== null && !this.field.readonly
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
            if (!this.characterCountEnabled || !this.editorReady) return 0

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
                    class: 'nova-canvas-content h-auto overflow-y-scroll min-h-40 max-w-none block py-3 prose prose-slate form-control form-input form-input--bottom form-control-bordered dark:prose-invert prose-sm focus:outline-none',
                    style: this.field.scrollable ? `height: ${this.field.scrollable}px;` : ''
                },
            },
            content: this.value,
            extensions: [
                StarterKit.configure({
                    // Disable built-in extensions which we are not using or override elsewhere.
                    codeBlock: false,
                }),

                ...this.placeholderExtension(),
                ...this.characterCountExtension(),
                ...this.getToolExtensions()
            ],
            onUpdate: () => {
                this.value = this.getEditorContent()
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
        setInitialValue () {
            this.value = this.field.value || ''
        },

        /**
         * Fill the given FormData object with the field's internal value.
         */
        fill (formData) {
            formData.append(this.fieldAttribute, this.value || '')
        },

        /**
         * Get extensions for the various tools.
         */
        getToolExtensions () {
            let extensions = []

            for (const [key, tool] of Object.entries(tools)) {
                if (tool.extension !== undefined) {
                    const extension = tool.extension()

                    Array.isArray(extension)
                        ? extensions = extensions.concat(extension)
                        : extensions.push(extension)
                }
            }

            return extensions
        },

        /**
         * Get extensions for the character count feature, if enabled.
         */
        characterCountExtension () {
            return this.characterCountEnabled ? [CharacterCount] : []
        },

        /**
         * Get extensions for the placeholder feature, if enabled.
         */
        placeholderExtension () {
            return this.field.placeholder ? [
                Placeholder.configure({
                    placeholder: this.field.placeholder,
                }),
            ] : []
        },

        /**
         * Get the editors content based on the configured output type.
         */
        getEditorContent () {
            // JSON return type.
            if (this.field.output === 'json') {
                return this.editor.getJSON()
            }

            // Standard HTML return type.
            return this.editor.getHTML()
        }
    }
}
</script>
