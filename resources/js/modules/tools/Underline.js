import { UnderlineIcon } from '@heroicons/vue/24/outline'
import Standard from '../../components/Tools/Standard.vue'

export default {
    icon: UnderlineIcon,
    component: Standard,
    apply (editor) {
        editor.chain().focus().toggleUnderline().run()
    },
    active (editor) {
        return editor.isActive('underline')
    }
}
