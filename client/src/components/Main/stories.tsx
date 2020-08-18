import { withKnobs, text } from '@storybook/addon-knobs'
import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
} as Meta

export const Basic: Story = () => (
  <Main
    title={text('Text', 'React Avançado')}
    description={text(
      'decription',
      'TypeScript, ReactJS, NextJS and Styled Components'
    )}
  />
)
