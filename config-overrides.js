const { override, fixBabelImports, addLessLoader } = require('customize-cra');
 
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    /*  Modify LESS Variables
        - This is where you can customize the Ant library defualts.
        - List of variables: https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
        - You must re-run npm start (or yarn start) for changes to show
    */
    modifyVars: { 
        // Colors
        '@primary-color': '@yellow-7', // primary color

        // Layout
        '@layout-body-background': '#f0f2f5',
        '@layout-header-background': '#000000',
        '@layout-footer-background': '@layout-body-background',
        '@layout-header-height': '64px',
        '@layout-header-padding': '0 50px',
        '@layout-footer-padding': '24px 50px',
        '@layout-sider-background': '@layout-header-background',
        '@layout-trigger-height': '48px',
        '@layout-trigger-background': '#002140',
        '@layout-trigger-color': '#fff',
        '@layout-zero-trigger-width': '36px',
        '@layout-zero-trigger-height': '42px',
        // Layout light them
        '@layout-sider-background-light': '#fff',
        '@layout-trigger-background-light': '#fff',
        '@layout-trigger-color-light': '@text-color',

        // Fonts
        '@font-family': '-apple-system, BlinkMacSystemFont, \'Source Sans Pro\', Roboto, sans-serif',

        // Padding
        '@padding-lg': '24px', // containers
        '@padding-md': '16px', // small containers and buttons
        '@padding-sm': '12px', // Form controls and items
        '@padding-xs': '8px', // small items

        // Buttons
        '@btn-padding-base': '0 @padding-md',
        '@btn-font-size-lg': '@font-size-lg',
        '@btn-font-size-sm': '@font-size-base',
        '@btn-padding-lg': '@btn-padding-base',
        '@btn-padding-sm': '0 @padding-xs',

        // Menus
        '@menu-inline-toplevel-item-height': '40px',
        '@menu-item-height': '40px',
        '@menu-collapsed-width': '80px',
        '@menu-bg': '@component-background',        
        '@menu-popup-bg': '@component-background',
        '@menu-item-color': '@text-color',
        '@menu-highlight-color': '@primary-color',
        '@menu-item-active-bg': '@item-active-bg',
        '@menu-item-active-border-width': '3px',
        '@menu-item-group-title-color': '@text-color-secondary',
        '@menu-icon-size': '@font-size-base',
        '@menu-icon-size-lg': '@font-size-lg',

        '@menu-item-vertical-margin': '4px',
        '@menu-item-font-size': '@font-size-lg',
        '@menu-item-boundary-margin': '8px',
        '@menu-icon-size': '@font-size-base',
        '@menu-icon-size-lg': '@font-size-lg',
        '@menu-dark-selected-item-icon-color': '@white',
        '@menu-dark-selected-item-text-color': '@white',
        '@dark-menu-item-hover-bg': 'transparent',

        // dark theme
        '@menu-dark-color': '@text-color-secondary-dark',
        '@menu-dark-bg': '@layout-header-background',
        '@menu-dark-arrow-color': '#fff',
        '@menu-dark-submenu-bg': '#202000',
        '@menu-dark-highlight-color': '#fff',
        '@menu-dark-item-active-bg': '@primary-color',
        '@menu-dark-selected-item-icon-color': '@text-color-secondary',
        '@menu-dark-selected-item-text-color': '@text-color',
        '@menu-dark-item-hover-bg': 'transparent',
    },
  }),
);