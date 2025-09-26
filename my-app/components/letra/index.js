import styles from './styles.module.css';

export function Letra({ active, content }) {
  return (
    <div className={`${styles.content} ${active ? styles.active : ''}`}>
      {content}
    </div>
  );
}
