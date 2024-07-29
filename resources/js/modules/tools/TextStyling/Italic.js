import { ItalicIcon } from '@heroicons/vue/24/outline'
import Standard from '../../../components/Tools/Standard.vue'

export default {
    icon: ItalicIcon,
    component: Standard,
    apply (editor) {
        editor.chain().focus().toggleItalic().run()
    },
    active (editor) {
        return editor.isActive('italic')
    }
}
