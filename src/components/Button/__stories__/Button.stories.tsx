import type { Meta, StoryObj } from '@storybook/react';
import Button from '../Button';
import { ButtonType } from '../Button.model';

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    $buttonType: ButtonType.PRIMARY,
    text: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    $buttonType: ButtonType.SECONDARY,
    text: 'Secondary Button',
  },
};

export const Warning: Story = {
  args: {
    $buttonType: ButtonType.WARNING,
    text: 'Warning Button',
  },
};

export const Error: Story = {
  args: {
    $buttonType: ButtonType.ERROR,
    text: 'Error Button',
  },
};
