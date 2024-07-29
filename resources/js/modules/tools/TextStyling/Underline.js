import { UnderlineIcon } from '@heroicons/vue/24/outline'
import Standard from '../../../components/Tools/Standard.vue'
import { Underline } from '@tiptap/extension-underline'

export default {
    icon: UnderlineIcon,
    component: Standard,
    apply (editor) {
        editor.chain().focus().toggleUnderline().run()
    },
    active (editor) {
        return editor.isActive('underline')
    },
    extension () {
        return Underline
    }
}
