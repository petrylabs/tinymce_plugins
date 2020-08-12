/*******
 * SntLink Plugin - Valid Init Config Options
 * 
 * 
 * 
 * extended_valid_elements: 'snt-link[*]'
 * custom_elements: '~snt-link'
 * toolbar: 'snt-link | snt-unlink | snt-openlink'
 * link_context_toolbar: true
 * link_class_list: [
 *  {title: 'None', value: ''},
 *  {title: 'Class A', value: 'class-a'},
 *  {title: 'Calss B', value: 'class-b'}
 * ],
 * target_list: [
 *  {title: 'None', value: ''},
 *  {title: 'Same page', value: '_self'},
 *  {title: 'New page', value: '_blank'},
 *  {title: 'Lightbox', value: '_lightbox'}
 *],
 * rel_list: [
 *  {title: 'None', value: ''},
 *  {title: 'Lightbox', value: 'lightbox'},
 *  {title: 'Table of contents', value: 'toc'}
 *],
 * link_list: [
    {title: '1. Page One', value: 'https://www.sonnet.ca/?page=one'},
 *  {title: '2. Page Two', value: 'https://www.sonnet.ca/?page=one'},
 *  {title: '3. Page Three', value: 'https://www.sonnet.ca/?page=three'}
 *],
 * 
 * For more information, please visit: https://www.tiny.cloud/docs-4x/plugins/link/#options
 * 
 *******/

import Plugin from './Plugin';

/**
 * Instantiate Plugin
 */
Plugin();

/*******
 * DO NOT EXPORT ANYTHING
 *
 * IF YOU DO ROLLUP WILL LEAVE A `link` GLOBAL ON THE PAGE
 *******/
