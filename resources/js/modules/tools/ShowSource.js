import { CommandLineIcon } from '@heroicons/vue/24/outline'
import Standard from '../../components/Tools/Standard.vue'
import { ref } from 'vue'
import beautify from 'simply-beautiful'

export default {
    icon: CommandLineIcon,
    isActive: ref(false),
    component: Standard,

    /**
     * Toggle show source.
     *
     * @param {Object} editor
     * @param {Object} refs
     */
    apply (editor, refs) {
        this.active() ? this.disable(editor, refs) : this.enable(editor, refs)
    },

    /**
     * Enable show source
     *
     * @param {Object} editor
     * @param {Object} refs
     */
    enable (editor, refs) {
        this.isActive.value = true
        editor.commands.setContent(`<textarea>${this.getPrettyHtml(editor)}</textarea>`)
        refs.container.classList.add('show-source')
        editor.setOptions({ editable: false })
    },

    /**
     * Get pretty HTML from editor content.
     *
     * @param {Object} editor
     * @returns {string}
     */
    getPrettyHtml (editor) {
        return beautify.html(editor.getHTML())
    },

    /**
     * Disable show source.
     *
     * @param {Object} editor
     * @param {Object} refs
     */
    disable (editor, refs) {
        this.isActive.value = false
        editor.commands.setContent(editor.getText())
        refs.container.classList.remove('show-source')
        editor.setOptions({ editable: true })
    },

    active () {
        return this.isActive.value
    }
}
