import styles from './Input.module.css';
function Input({
  type = 'text',
  placeholder = '',
  label,
  name,
  value,
  onChange
}) {
  return (
    <div className={styles.wrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        className={styles.input}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input
