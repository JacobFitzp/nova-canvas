import { NumberedListIcon } from '@heroicons/vue/24/outline'
import Standard from '../../components/Tools/Standard.vue'

export default {
    icon: NumberedListIcon,
    component: Standard,
    apply (editor) {
        editor.chain().focus().toggleOrderedList().run()
    },
    active (editor) {
        return editor.isActive('orderedList')
    }
}
