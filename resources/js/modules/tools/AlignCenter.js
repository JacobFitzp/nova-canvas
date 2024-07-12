import { Bars3Icon } from '@heroicons/vue/24/outline'
import Standard from '../../components/Tools/Standard.vue'

export default {
    icon: Bars3Icon,
    component: Standard,
    apply (editor) {
        editor.chain().focus().align.run()
    },
    active (editor) {
        return editor.isActive('heading', { level: 1 })
    }
}
