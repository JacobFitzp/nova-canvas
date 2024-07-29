import { ListBulletIcon } from '@heroicons/vue/24/outline'
import Standard from '../../components/Tools/Standard.vue'

export default {
    icon: ListBulletIcon,
    component: Standard,
    apply (editor) {
        editor.chain().focus().toggleBulletList().run()
    },
    active (editor) {
        return editor.isActive('bulletList')
    }
}
