import styles from './Button.module.css';
const Button = ({
  children,
  onClick,
  variant = 'primary',
  type = 'button',
  disabled = false
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${styles.button} ${styles[variant]} ${
        disabled ? styles.disabled : ''
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;