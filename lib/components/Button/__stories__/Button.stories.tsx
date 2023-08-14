import type { Meta, StoryObj } from '@storybook/react';
import Button from '../Button';
import { ButtonType } from '../Button.model';

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    $buttonType: ButtonType.PRIMARY,
    text: 'Button Text',
  },
};
