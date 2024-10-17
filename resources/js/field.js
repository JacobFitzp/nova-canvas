import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/FormField'
import Sticky from 'vue3-sticky-directive'

Nova.booting((app, store) => {
    app.component('index-nova-editor', IndexField)
    app.component('detail-nova-editor', DetailField)
    app.component('form-nova-editor', FormField)
    app.use(Sticky)
})
