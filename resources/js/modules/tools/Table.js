import { TableCellsIcon } from '@heroicons/vue/24/outline'
import TableComponent from '../../components/Tools/Table.vue'
import { Table } from '@tiptap/extension-table'
import { TableRow } from '@tiptap/extension-table-row'
import { TableHeader } from '@tiptap/extension-table-header'
import { TableCell } from '@tiptap/extension-table-cell'

export default {
    icon: TableCellsIcon,
    component: TableComponent,
    apply (editor) {
        editor.chain()
            .focus()
            .insertTable({
                rows: 3,
                cols: 3,
                withHeaderRow: true
            })
            .run()
    },
    active (editor) {
        return editor.isActive('table')
    },
    extension () {
        return [
            Table.configure({
                resizable: true
            }),
            TableRow,
            TableHeader,
            TableCell,
        ]
    }
}
