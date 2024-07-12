import { StrikethroughIcon } from '@heroicons/vue/24/outline'
import Standard from '../../components/Tools/Standard.vue'

export default {
    icon: StrikethroughIcon,
    component: Standard,
    apply (editor) {
        editor.chain().focus().toggleStrike().run()
    },
    active (editor) {
        return editor.isActive('strike')
    }
}
