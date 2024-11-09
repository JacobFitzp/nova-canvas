import { CommandLineIcon } from '@heroicons/vue/24/outline'
import Standard from '../../components/Tools/Standard.vue'
import format from 'html-format'
import { ref } from 'vue'

export default {
    icon: CommandLineIcon,
    isActive: ref(false),
    component: Standard,
    apply (editor, refs) {
        if (this.active(editor)) {
            editor.commands.setContent(editor.getText())
            this.isActive.value = false
            refs.container.classList.remove('show-source')
        } else {
            editor.commands.setContent(`<textarea>${format(editor.getHTML())}</textarea>`)
            this.isActive.value = true
            refs.container.classList.add('show-source')
        }
    },
    active (editor) {
        return this.isActive.value || false
    }
}
