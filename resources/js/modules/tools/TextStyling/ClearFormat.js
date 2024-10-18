import { NoSymbolIcon } from '@heroicons/vue/24/outline'
import Standard from '../../../components/Tools/Standard.vue'

export default {
    icon: NoSymbolIcon,
    component: Standard,
    apply (editor) {
        editor.chain().focus().unsetAllMarks().run()
    },
    active (editor) {
        return false
    }
}
