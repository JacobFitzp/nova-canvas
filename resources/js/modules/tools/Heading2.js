import { H2Icon } from '@heroicons/vue/24/outline'
import Standard from '../../components/Tools/Standard.vue'

export default {
    icon: H2Icon,
    component: Standard,
    apply (editor) {
        editor.chain().focus().toggleHeading({ level: 2 }).run()
    },
    active (editor) {
        return editor.isActive('heading', { level: 2 })
    }
}
