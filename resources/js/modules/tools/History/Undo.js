import { ArrowUturnLeftIcon } from '@heroicons/vue/24/outline'
import Standard from '../../../components/Tools/Standard.vue'

export default {
    icon: ArrowUturnLeftIcon,
    component: Standard,
    apply (editor) {
        editor.chain().focus().undo().run()
    },
    disabled (editor) {
        return !editor.can().undo()
    }
}
