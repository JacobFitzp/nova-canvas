import { ArrowUturnRightIcon } from '@heroicons/vue/24/outline'
import Standard from '../../../components/Tools/Standard.vue'

export default {
    icon: ArrowUturnRightIcon,
    component: Standard,
    apply (editor) {
        editor.chain().focus().redo().run()
    },
    disabled (editor) {
        return !editor.can().redo()
    }
}
