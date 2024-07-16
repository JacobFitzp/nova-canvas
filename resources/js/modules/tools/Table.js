import { TableCellsIcon } from '@heroicons/vue/24/outline'
import Standard from '../../components/Tools/Standard.vue'
import { Table } from '@tiptap/extension-table'
import { TableRow } from '@tiptap/extension-table-row'
import { TableHeader } from '@tiptap/extension-table-header'
import { TableCell } from '@tiptap/extension-table-cell'


export default {
    icon: TableCellsIcon,
    component: Standard,
    apply (editor) {
        editor.chain().focus().toggle.run()
    },
    active (editor) {
        return editor.isActive('codeBlock')
    },
    extension () {
        return [
            Table.configure({
                resizable: true,
            }),
            TableRow,
            TableHeader,
            TableCell,
        ]
    }
}
