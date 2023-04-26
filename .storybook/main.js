/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  stories: ['../src/components/**/stories.tsx'],
  addons: [
    '@storybook/addon-essentials',
    'storybook-addon-next-router',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  staticDirs: ['../public']
}
export default config
