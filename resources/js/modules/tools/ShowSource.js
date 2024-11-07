import { CommandLineIcon } from '@heroicons/vue/24/outline'
import Standard from '../../components/Tools/Standard.vue'

export default {
    icon: CommandLineIcon,
    component: Standard,
    apply(editor) {
        if (this.active(editor)) {
            editor.commands.setContent(editor.getText())
            editor.isShowSourceActive = false
        } else {
            editor.commands.setContent(`<textarea>${editor.getHTML()}</textarea>`)
            editor.isShowSourceActive = true
        }
    },
    active(editor) {
        return editor.isShowSourceActive || false
    }
}
