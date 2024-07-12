import { BoldIcon } from '@heroicons/vue/24/outline'
import Standard from '../../components/Tools/Standard.vue'

export default {
    icon: BoldIcon,
    component: Standard,
    apply (editor) {
        editor.chain().focus().toggleBold().run()
    },
    active (editor) {
        return editor.isActive('bold')
    }
}
