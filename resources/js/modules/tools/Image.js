import { PhotoIcon } from '@heroicons/vue/24/outline'
import Image from '../../components/Tools/Image.vue'
import CustomImage from '../tiptap/extensions/CustomImage'

export default {
    icon: PhotoIcon,
    component: Image,

    apply (editor) {
        editor.chain().focus().addImage().run()
    },

    active (editor) {
        return editor.isActive('image')
    },

    extension () {
        return CustomImage.configure({
            endpoint: this.field.imageEndpoint,
            disk: this.field.disk || null,
            path: this.field.path || null
        })
    }
}
