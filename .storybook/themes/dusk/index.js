import { create } from '@storybook/theming/create'

import colors from '../../../src/styles/theme/dusk/export/colors.scss'

export default create({
  base: 'light',

  colorPrimary: colors.primary,
  colorSecondary: colors.secondary,

  // UI
  appBg: colors.cyan,
  appContentBg: colors.white,
  appBorderColor: colors.info,
  appBorderRadius: 5,

  // Typography
  fontBase: '"Hind Siliguri", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: colors.dark,
  textInverseColor: colors.light,

  // Toolbar default and active colors
  barTextColor: colors.dark,
  barSelectedColor: colors.secondary,
  barBg: colors.white,

  // Form colors
  inputBg: colors.white,
  inputBorder: colors.secondary,
  inputTextColor: colors.dark,
  inputBorderRadius: 5,

  brandTitle: 'Dusk Design System',
  brandUrl: 'https://dusk.network',
  brandImage: 'https://dusk.network/lib/img/logo_dusk.svg',
})
