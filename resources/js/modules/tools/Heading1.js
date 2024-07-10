import HeadingIcon from '../../components/Icons/HeadingIcon.vue'
import Standard from '../../components/Tools/Standard.vue'

export default {
    icon: HeadingIcon,
    component: Standard,
    apply (editor) {
        editor.chain().focus().toggleHeading({ level: 1 }).run()
    },
    active (editor) {
        return editor.isActive('heading', { level: 1 })
    }
}
