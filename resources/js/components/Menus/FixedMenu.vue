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
import tools from '../../modules/tools/index'

export default {
    props: {
        editor: {
            type: [null, Object],
            required: true
        },
        toolbar: {
            type: Array,
            required: true
        }
    },

    computed: {
        tools () {
            return this.toolbar.map((item) => tools[item])
        }
    }
}
</script>
