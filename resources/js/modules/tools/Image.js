import { PhotoIcon } from '@heroicons/vue/24/outline'
import Standard from '../../components/Tools/Standard.vue'
import UploadImage from 'tiptap-extension-upload-image'
import axios from 'axios'

export default {
    icon: PhotoIcon,
    component: Standard,
    apply (editor) {
        editor.chain().focus().addImage().run()
    },
    active (editor) {
        return editor.isActive('image')
    },
    handleUpload (file) {
        // Build form data to upload image.
        const formData = new FormData()
        formData.append('image', file)
        formData.append('disk', this.field.disk || null)
        formData.append('path', this.field.path || null)

        // Submit form data to endpoint.
        return axios.post(this.field.endpoint, formData).then((response) => {
            return response.data.path
        })

    },
    extension () {
        return UploadImage.configure({
            uploadFn: (field) => {
                return this.handleUpload(field)
            }
        })
    }
}
