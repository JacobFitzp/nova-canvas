import { CodeBracketIcon } from '@heroicons/vue/24/outline'
import CodeBlock from '../../components/Tools/CodeBlock.vue'
import { common, createLowlight } from 'lowlight'
import CustomCodeBlock from '../tiptap/extensions/CustomCodeBlock'

export default {
    icon: CodeBracketIcon,
    component: CodeBlock,
    apply (editor) {
        editor.chain().focus().toggleCodeBlock().run()
    },
    active (editor) {
        return editor.isActive('codeBlock')
    },
    extension () {
        return CustomCodeBlock.configure({
            lowlight: createLowlight(common)
        })
    }
}
