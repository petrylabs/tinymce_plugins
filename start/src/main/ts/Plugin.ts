declare const tinymce: any;

const setup = (editor, url) => {
  editor.ui.registry.addButton('start', {
    text: 'start button',
    onAction: () => {
      // tslint:disable-next-line:no-console
      editor.setContent('<p>content added from start</p>');
    }
  });
};

export default () => {
  tinymce.PluginManager.add('start', setup);
};
