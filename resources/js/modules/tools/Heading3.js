import Heading3Icon from '../../components/Icons/Heading3Icon.vue'
import Standard from '../../components/Tools/Standard.vue'

export default {
    icon: Heading3Icon,
    component: Standard,
    apply (editor) {
        editor.chain().focus().toggleHeading({ level: 3 }).run()
    },
    active (editor) {
        return editor.isActive('heading', { level: 3 })
    }
}
