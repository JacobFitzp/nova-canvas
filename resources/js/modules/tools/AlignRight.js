import { Bars3BottomRightIcon } from '@heroicons/vue/24/outline'
import Standard from '../../components/Tools/Standard.vue'

export default {
    icon: Bars3BottomRightIcon,
    component: Standard,
    apply (editor) {
        editor.chain().focus().setTextAlign('right').run()
    },
    active (editor) {
        return editor.isActive({ textAlign: 'right' })
    }
}
