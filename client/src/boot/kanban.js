import { boot } from 'quasar/wrappers';
import vueKanban from 'vue-kanban'

export default boot(({ app }) => {
  app.use(vueKanban)
});
