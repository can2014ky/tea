import Vue from 'vue';
import SvgIcon from '@src/components/SvgIcon/Index.vue';// svg组件

Vue.component('svg-icon', SvgIcon);

const req = require.context('./svg', false, /\.svg$/);
const requireAll = requireContext => requireContext.keys().map(requireContext);
requireAll(req);