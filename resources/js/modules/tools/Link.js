import LinkComponent from '../../components/Tools/Link.vue'
import Link from '@tiptap/extension-link'

export default {
    component: LinkComponent,
    extension () {
        return Link.configure({
            openOnClick: false
        })
    }
}
