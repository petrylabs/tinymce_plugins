import Plugin from '../../main/ts/Plugin';

declare let tinymce: any;
declare let document: any;

Plugin();

document.addEventListener('DOMContentLoaded', (event) => {
  // console.log('DOMContentLoaded');
  tinymce.init({
    selector: 'textarea.tinymce',
    plugins: 'code anchor accordion',
    toolbar: 'code anchor accordion',
    valid_elements: '*[*]',
    custom_elements: 'snt-accordion',
    init_instance_callback: (editor) => {
      // console.log(`Editor: ${editor.id} is now initialized`);
    },
    setup: (editor) => {
      editor.on('init', (e) => {
        // tinymce.activeEditor.getContent();
      });
      editor.on('Change', (e) => {
        // tinymce.activeEditor.getContent();
      });
    }
  });
});
