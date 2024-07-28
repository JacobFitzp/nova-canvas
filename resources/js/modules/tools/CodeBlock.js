import { CodeBracketIcon } from '@heroicons/vue/24/outline'
import Standard from '../../components/Tools/Standard.vue'
import { common, createLowlight } from 'lowlight'
import CodeBlock from '../tiptap/extensions/CodeBlock'

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
        return CodeBlock.configure({
            lowlight: createLowlight(common)
        })
    }
}
