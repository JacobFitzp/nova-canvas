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
        tool: {
            type: Object,
            required: true
        }
    }
}
