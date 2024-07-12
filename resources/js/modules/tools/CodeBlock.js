import { CodeBracketIcon } from '@heroicons/vue/24/outline'
import Standard from '../../components/Tools/Standard.vue'
import { CodeBlockLowlight } from '@tiptap/extension-code-block-lowlight'
import { common, createLowlight } from 'lowlight'

// todo: Language selection dropdown.
export default {
    icon: CodeBracketIcon,
    component: Standard,
    apply (editor) {
        editor.chain().focus().toggleCodeBlock().run()
    },
    active (editor) {
        return editor.isActive('codeBlock')
    },
    extension () {
        return CodeBlockLowlight.configure({
            lowlight: createLowlight(common)
        })
    }
}
