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
                    <FixedMenu v-if="editor !== null" :editor="editor" />
                </div>
                <EditorContent :editor="editor" v-model="value" />
            </div>
        </template>
    </DefaultField>
</template>

<script>
import { FormField, HandlesValidationErrors } from 'laravel-nova'
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import FixedMenu from './Menus/FixedMenu.vue'

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

    mounted() {
        this.editor = new Editor({
            editorProps: {
                attributes: {
                    class: 'h-auto max-w-none block py-3 prose form-control form-input form-input-bottom form-control-bordered dark:prose-invert prose-sm focus:outline-none',
                },
            },
            content: this.value,
            extensions: [
                StarterKit,
            ],
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
        }
    }
}
</script>
