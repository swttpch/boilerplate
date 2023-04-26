import { Story, Meta } from '@storybook/react'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Absuurdo',
    description: 'Learning Strapi'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />

Basic.args = {
  title: 'Basic',
  description: 'Basic'
}

export const Secondary: Story = (args) => <Main {...args} />
