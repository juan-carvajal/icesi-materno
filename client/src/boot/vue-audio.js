import { boot } from 'quasar/wrappers';
import AudioVisual from 'vue-audio-visual'

export default boot(({ app }) => {
  app.use(AudioVisual)
});
