import Commands from './api/Commands';
import Buttons from './ui/Buttons';
import Utils from './util/Utils';
import Dialog from './ui/Dialog';

declare const tinymce: any;

const setup = (editor) => {
  
  Commands.register(editor);
  Buttons.register(editor);

  editor.on('dblclick', function (ev) {
    if (Utils.isAccordion(ev.target)) {
      Dialog.open(editor);
    }
  });
  return {}
}

export default () => { 
  tinymce.PluginManager.add('accordion', setup);
}