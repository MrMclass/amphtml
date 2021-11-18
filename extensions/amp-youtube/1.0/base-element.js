import {createParseAttrsWithPrefix} from '#preact/parse-props';

import {BentoYoutube} from './component';

import {VideoBaseElement} from '../../amp-video/1.0/video-base-element';

export class BaseElement extends VideoBaseElement {}

/** @override */
BaseElement['Component'] = BentoYoutube;

/** @override */
BaseElement['loadable'] = true;

/** @override */
BaseElement['props'] = {
  'autoplay': {attr: 'autoplay', type: 'boolean'},
  'loop': {attr: 'loop', type: 'boolean'},
  'controls': {attr: 'controls', type: 'boolean'},
  'videoid': {attr: 'data-videoid'},
  'liveChannelid': {attr: 'data-live-channelid'},
  'dock': {attr: 'dock', media: true},
  'credentials': {attr: 'credentials'},
  'params': createParseAttrsWithPrefix('data-param-'),
};

/** @override */
BaseElement['usesShadowDom'] = true;
