import { Button, ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Base = (args: ButtonProps) => <Button {...args} />;

Base.args = {
  onClick: () => alert('clicked!'),
  children: '버튼을 눌러주세요',
};
