export interface UIButtonProps {
  tag?: 'a' | 'button' | 'NuxtLink';
  type?: 'button' | 'submit';
  fill?: 'solid' | 'outline';
  color?: 'green' | 'dark';
  textColor?: 'green' | 'white';
  size?: 'small' | 'medium' | 'big';
  icon?: { component: Component; slot: 'left' | 'right' };
  isFullWidth?: boolean;
}
