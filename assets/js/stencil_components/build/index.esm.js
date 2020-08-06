import './index-21c05bc9.js';
import { A as ActiveRouter } from './active-router-299aa974.js';
import './match-path-760e1797.js';
import './location-utils-fea12957.js';

function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}
