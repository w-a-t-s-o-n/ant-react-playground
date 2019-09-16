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
    */
    modifyVars: { 
        // Colors
        '@primary-color': '@red-6', // primary color

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
        '@menu-dark-submenu-bg': '#000c17',
        '@menu-dark-highlight-color': '#fff',
        '@menu-dark-item-active-bg': '@primary-color',
        '@menu-dark-selected-item-icon-color': '@white',
        '@menu-dark-selected-item-text-color': '@white',
        '@menu-dark-item-hover-bg': 'transparent',
    },
  }),
);