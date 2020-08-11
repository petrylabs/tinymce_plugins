import Plugin from '../../main/ts/Plugin';

declare let tinymce: any;
declare let document: any;

let preview: any;

Plugin();

tinymce.init({
  selector: 'textarea.tinymce',
  plugins: 'contextmenu code anchor snt-link contextmenu image',
  toolbar: 'code anchor snt-link snt-unlink image',
  valid_elements: '*[*]',
  extended_valid_elements: 'snt-link[*]',
  custom_elements: '~snt-link',
  content_css: '/assets/css/wysiwyg_styles.css?bogus=' + new Date().getTime(),
  height: 600,
  link_class_list: [
    {title: 'None', value: ''},
    {title: 'Class A', value: 'class-a'},
    {title: 'Calss B', value: 'class-b'}
  ],
  target_list: [
    {title: 'None', value: ''},
    {title: 'Same page', value: '_self'},
    {title: 'New page', value: '_blank'},
    {title: 'Lightbox', value: '_lightbox'}
  ],
  rel_list: [
    {title: 'None', value: ''},
    {title: 'Lightbox', value: 'lightbox'},
    {title: 'Table of contents', value: 'toc'}
  ],
  link_list: [
    {title: '1. Page One', value: 'https://www.sonnet.ca/?page=one'},
    {title: '2. Page Two', value: 'https://www.sonnet.ca/?page=one'},
    {title: '3. Page Three', value: 'https://www.sonnet.ca/?page=three'}
  ],
  init_instance_callback: (instance) => {},
  setup: (editor) => {
    editor.on('init', (e) => {
        const content = tinymce.activeEditor.getContent();
        preview = document.querySelector('#preview');
        preview.innerHTML = content;
    });
    editor.on('Change', (e) => {
        const content = tinymce.activeEditor.getContent();
        preview.innerHTML = content;
    });
  },
});