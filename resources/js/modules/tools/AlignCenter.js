import { Bars3Icon } from '@heroicons/vue/24/outline'
import Standard from '../../components/Tools/Standard.vue'
import { TextAlign } from '@tiptap/extension-text-align'

export default {
    icon: Bars3Icon,
    component: Standard,
    apply (editor) {
        editor.chain().focus().setTextAlign('center').run()
    },
    active (editor) {
        return editor.isActive({ textAlign: 'center' })
    },
    extension () {
        return TextAlign.configure({
            types: ['heading', 'paragraph']
        })
    }
}
