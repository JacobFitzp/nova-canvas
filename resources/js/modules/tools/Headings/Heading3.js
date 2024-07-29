import { H3Icon } from '@heroicons/vue/24/outline'
import Standard from '../../../components/Tools/Standard.vue'

export default {
    icon: H3Icon,
    component: Standard,
    apply (editor) {
        editor.chain().focus().toggleHeading({ level: 3 }).run()
    },
    active (editor) {
        return editor.isActive('heading', { level: 3 })
    }
}
