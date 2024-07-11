import { ChatBubbleBottomCenterIcon } from '@heroicons/vue/24/outline'
import Standard from '../../components/Tools/Standard.vue'

export default {
    icon: ChatBubbleBottomCenterIcon,
    component: Standard,
    apply (editor) {
        editor.chain().focus().toggleBlockquote().run()
    },
    active (editor) {
        return editor.isActive('blockquote')
    }
}
