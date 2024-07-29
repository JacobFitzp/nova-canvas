import { H1Icon } from '@heroicons/vue/24/outline'
import Standard from '../../../components/Tools/Standard.vue'

export default {
    icon: H1Icon,
    component: Standard,
    apply (editor) {
        editor.chain().focus().toggleHeading({ level: 1 }).run()
    },
    active (editor) {
        return editor.isActive('heading', { level: 1 })
    }
}
