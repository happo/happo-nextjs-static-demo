import styles from './styles/FancyButton.module.css'

export default function FancyButton({ children }) {
  return (
    <button className={styles.fancyButton}>
      {children}
    </button>
  );
}
