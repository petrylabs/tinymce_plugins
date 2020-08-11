import Plugin from './Plugin';

/**
 * SntLink Plugin
 * extended_valid_elements: 'snt-link[*]'
 * custom_elements: '~snt-link'
 * toolbar: 'snt-link | snt-unlink | snt-openlink'
 * link_context_toolbar: true
 */
Plugin();

/*******
 * DO NOT EXPORT ANYTHING
 *
 * IF YOU DO ROLLUP WILL LEAVE A `link` GLOBAL ON THE PAGE
 *******/
