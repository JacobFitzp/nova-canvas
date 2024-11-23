import { Image } from '@tiptap/extension-image'
import { mergeAttributes } from '@tiptap/vue-3'
import axios from 'axios'

export default Image.extend({
    name: 'image',

    addOptions () {
        return {
            ...Image.config.addOptions(),
            endpoint: '',
            disk: '',
            path: ''
        };
    },

    addAttributes () {
        return {
            ...Image.config.addAttributes(),
            size: {
                default: null,
                renderHTML: (attributes) => {
                    return {
                        style: `width: ${attributes.size}%`,
                    }
                }
            },
            float: {
                default: null,
                renderHTML: (attributes) => {
                    return {
                        style: attributes.float === 'center'
                            ? 'margin: 0 auto'
                            : `float: ${attributes.float}`,
                    }
                }
            }
        }
    },

    addCommands () {
        return {
            setImage: (options) => ({ tr, commands }) => {
                // Update existing.
                if (tr.selection?.node?.type?.name === 'image') {
                    return commands.updateAttributes('image', options)
                }

                // Insert new.
                return commands.insertContent({
                    type: this.name,
                    attrs: options
                })
            },

            addImage: (options) => ({ tr, commands }) => {
                // Add a file input to the DOM.
                let input = document.createElement('input')
                input.type = 'file'
                input.accept = 'image/*'

                // Handle file upload.
                input.onchange = _ => {
                    // Build form data to upload image.
                    const formData = new FormData()
                    formData.append('image', input.files[0])
                    formData.append('disk', this.options.disk)
                    formData.append('path', this.options.path)

                    // Submit form data to endpoint.
                    axios.post(this.options.endpoint, formData)
                        .then((response) => {
                            // Do nothing if path isn't available.
                            if (!response.data.path) return

                            // Insert the image into the editor.
                            this.editor.view.dispatch(
                                this.editor.view.state.tr.replaceSelectionWith(
                                    this.editor.schema.nodes.image.create({
                                        src: response.data.path,
                                        ...options
                                    })
                                )
                            )
                        })
                        .catch((response) => {
                            // Show error message if available.
                            if (response.data?.message) alert(response.data.message)
                        })
                        .finally(() => {
                            // Finally, clean up and remove the file input.
                            input.remove()
                        })
                }

                input.click()
            }
        }
    },

    renderHTML ({ node, HTMLAttributes }) {
        return ['img', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)]
    }
})
