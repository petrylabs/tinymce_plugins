import Api from './api/Api';
import Commands from './api/Commands';
import FilterContent from './core/FilterContent';
import ResolveName from './core/ResolveName';
import Selection from './core/Selection';
import Buttons from './ui/Buttons';

declare const tinymce: any;

const setup = (editor) => {
  Commands.register(editor);
  Buttons.register(editor);
  ResolveName.setup(editor);
  FilterContent.setup(editor);
  Selection.setup(editor);
  return Api.get(editor);
};

export default () => {
  tinymce.PluginManager.add('media', setup);
};