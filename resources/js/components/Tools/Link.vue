<template>
    <button
        type="button"
        class="hover:text-primary-600 disabled:opacity-50"
        :class="{ 'text-primary-600': isActive }"
        :aria-pressed="isActive"
        @click="openModal"
    >
        <LinkIcon class="h-5 w-5" />
    </button>

    <InsertLink
        v-if="insertingLink"
        :value="currentLink"
        @confirm="insertLink"
        @remove="removeLink"
        @cancel="insertingLink = false"
    />
</template>

<script>
import BaseTool from './BaseTool'
import { LinkIcon } from '@heroicons/vue/24/outline'
import InsertLink from '../Modals/InsertLink.vue'

export default {
    extends: BaseTool,
    components: {
        InsertLink,
        LinkIcon
    },
    data () {
        return {
            insertingLink: false
        }
    },
    computed: {
        isActive () {
            return this.editor.isActive('link')
        },
        currentLink () {
            return this.editor.getAttributes('link').href
        }
    },
    methods: {
        /**
         * Open the insert link modal.
         */
        openModal () {
            this.insertingLink = true
        },

        /**
         * Insert the provided link into the selected text.
         *
         * @param {String} link
         */
        insertLink (link) {
            this.editor.chain().focus().extendMarkRange('link').setLink({ href: link }).run()

            // Close the insert link modal.
            this.insertingLink = false
        },

        /**
         * Remove the currently selected link.
         */
        removeLink () {
            this.editor.chain().focus().extendMarkRange('link').unsetLink().run()

            // Close the insert link modal.
            this.insertingLink = false
        }
    }
}
</script>
