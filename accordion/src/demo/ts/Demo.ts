import Plugin from '../../main/ts/Plugin';

declare let tinymce: any;
declare let document: any;

Plugin();

document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOMContentLoaded');
  tinymce.init({
    selector: 'textarea.tinymce',
    plugins: 'code anchor accordion',
    toolbar: 'code anchor accordion',
    valid_elements: '*[*]',
    custom_elements: 'snt-accordion',
    init_instance_callback: (editor) => {
      console.log(`Editor: ${editor.id} is now initialized`);
    },
    setup: function(editor) {
      editor.on('init', function(e) {
        // tinymce.activeEditor.getContent();
      });
      editor.on('Change', function(e) {
        // tinymce.activeEditor.getContent();
      });
    }
  });
});
