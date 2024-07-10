<template>
    <div class="flex items-center gap-2">
        <template v-for="tool in tools">
            <component
                :is="tool.component"
                :tool="tool"
                :editor="editor"
            />
        </template>
    </div>
</template>

<script>
import Tools from '../../modules/tools/index'

export default {
    props: {
        editor: {
            type: [null, Object],
            required: true
        }
    },

    data () {
        return {
            toolbar: ['format', 'heading1', 'heading2', 'heading3']
        }
    },

    computed: {
        tools () {
            return this.toolbar.map((item) => Tools.tools[item])
        }
    }
}
</script>
