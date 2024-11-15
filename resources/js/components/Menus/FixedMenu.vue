<template>
    <div class="flex flex-wrap gap-2">
        <template v-for="tool in tools">
            <component
                :is="tool.component"
                :tool="tool"
                :editor="editor"
                :refs="refs"
            />
        </template>
    </div>
</template>

<script>
import tools from '../../modules/tools/index'

export default {
    props: {
        editor: {
            type: [null, Object],
            required: true
        },
        refs: {
            type: Object,
            required: true
        },
        field: {
            type: Object,
            required: true
        }
    },

    computed: {
        tools () {
            return this.field.toolbar.map((item) => {
                // Inject field into each tool.
                const tool = tools[item]
                tool.field = this.field

                // Initialize the tool.
                if (tool.init) {
                    tool.init(this.editor, this.refs)
                }

                return tool
            })
        }
    }
}
</script>
