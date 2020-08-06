import Plugin from '../../main/ts/Plugin';

declare let tinymce: any;
declare let document: any;

let preview: any;

Plugin();


tinymce.init({
  selector: 'textarea.tinymce',
  plugins: 'code snt-link',
  toolbar: 'snt-link',
  valid_elements: '*[*]',
  custom_elements: '~custom, ~snt-accordion, ~snt-link',
  init_instance_callback: (instance) => {
      const scriptLoader = new tinymce.dom.ScriptLoader();
      //scriptLoader.add('/assets/js/stencil_components/dist/sonnet.js');
      //scriptLoader.loadQueue(() => console.log('script loaded'));
  },
  setup: function(editor) {
    editor.on('init', function(e) {
        preview = document.querySelector('#preview');
        console.log('preview', preview);
    });
    editor.on('Change', function(e) {
        console.log('The Editor content has changed...');
        const content = tinymce.activeEditor.getContent();
        preview.innerHTML = content;
    });
  },
});