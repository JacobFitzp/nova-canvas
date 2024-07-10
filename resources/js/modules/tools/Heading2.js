import Heading2Icon from '../../components/Icons/Heading2Icon.vue'
import Standard from '../../components/Tools/Standard.vue'

export default {
    icon: Heading2Icon,
    component: Standard,
    apply (editor) {
        editor.chain().focus().toggleHeading({ level: 2 }).run()
    },
    active (editor) {
        return editor.isActive('heading', { level: 2 })
    }
}
