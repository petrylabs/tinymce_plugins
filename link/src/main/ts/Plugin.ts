import Commands from './api/Commands';
import Actions from './core/Actions';
import Keyboard from './core/Keyboard';
import Controls from './ui/Controls';
import Formats from './fmt/Formats';

declare const tinymce: any;

/**
 * 
 * @param editor 
 */
const setup = (editor) => {
  Controls.setupButtons(editor);
  Controls.setupMenuItems(editor);
  Controls.setupContextToolbars(editor);
  
  Actions.setupGotoLinks(editor);
  Commands.register(editor);
  Keyboard.setup(editor);

  editor.on('init', (evt) => {
    Formats.setup(editor);
  });
};
export default () => {
  tinymce.PluginManager.add('snt-link', setup);
};