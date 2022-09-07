/**
 * Antdv
 * All components
 * Check https://github.com/vueComponent/ant-design-vue/blob/master/components/index.js
 */

import Vue from 'vue'

import {
  // Affix,
  // Anchor,
  AutoComplete,
  // Alert,
  Avatar,
  // BackTop,
  // Badge,
  Breadcrumb,
  Button,
  // Calendar,
  Card,
  // Collapse,
  // Carousel,
  // Cascader,
  Checkbox,
  // Col,
  // DatePicker,
  // Divider,
  Dropdown,
  Form,
  // FormModel,
  Icon,
  Input,
  // InputNumber,
  Layout,
  // List,
  // LocaleProvider,
  Menu,
  // Mentions,
  Modal,
  Pagination,
  // Popconfirm,
  // Popover,
  // Progress,
  // Radio,
  // Rate,
  // Row,
  Select,
  // Slider,
  // Spin,
  // Statistic,
  // Steps,
  // Switch,
  Table,
  // Transfer,
  // Tree,
  // TreeSelect,
  // Tabs,
  // Tag,
  // TimePicker,
  // Timeline,
  // Tooltip,
  // Upload,
  // Drawer,
  // Skeleton,
  // Comment,
  // ColorPicker,
  // ConfigProvider,
  Empty,
  Result,
  // Descriptions,
  PageHeader,
  // Space,
  message,
  // notification,
} from 'ant-design-vue'

const components = [
  // Affix,
  // Anchor,
  AutoComplete,
  // Alert,
  Avatar,
  // BackTop,
  // Badge,
  Breadcrumb,
  Button,
  // Calendar,
  Card,
  // Collapse,
  // Carousel,
  // Cascader,
  Checkbox,
  // Col,
  // DatePicker,
  // Divider,
  Dropdown,
  Form,
  // FormModel,
  Icon,
  Input,
  // InputNumber,
  Layout,
  // List,
  // LocaleProvider,
  Menu,
  // Mentions,
  Modal,
  Pagination,
  // Popconfirm,
  // Popover,
  // Progress,
  // Radio,
  // Rate,
  // Row,
  Select,
  // Slider,
  // Spin,
  // Statistic,
  // Steps,
  // Switch,
  Table,
  // Transfer,
  // Tree,
  // TreeSelect,
  // Tabs,
  // Tag,
  // TimePicker,
  // Timeline,
  // Tooltip,
  // Upload,
  // Drawer,
  // Skeleton,
  // Comment,
  // ColorPicker,
  // ConfigProvider,
  Empty,
  Result,
  // Descriptions,
  PageHeader,
  // Space,
]

components.forEach((component) => {
  Vue.use(component)
})

Vue.prototype.$message = message
// Vue.prototype.$notification = notification
Vue.prototype.$info = Modal.info
Vue.prototype.$success = Modal.success
Vue.prototype.$error = Modal.error
Vue.prototype.$warning = Modal.warning
Vue.prototype.$confirm = Modal.confirm
Vue.prototype.$destroyAll = Modal.destroyAll
