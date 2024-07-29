import { Bars3BottomLeftIcon } from '@heroicons/vue/24/outline'
import Standard from '../../../components/Tools/Standard.vue'

export default {
    icon: Bars3BottomLeftIcon,
    component: Standard,
    apply (editor) {
        editor.chain().focus().setTextAlign('left').run()
    },
    active (editor) {
        return editor.isActive({ textAlign: 'left' })
    }
}
