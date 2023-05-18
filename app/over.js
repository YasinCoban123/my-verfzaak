import { useState } from 'react';
import styles from '../styles/TextPage.module.css';

export default function TextPage() {
  const [paragraphs, setParagraphs] = useState(['', '', '']);

  const handleChange = (event, index) => {
    const updatedParagraphs = [...paragraphs];
    updatedParagraphs[index] = event.target.value;
    setParagraphs(updatedParagraphs);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Text Page</h1>
      <textarea
        className={styles.textarea}
        value={paragraphs[0]}
        onChange={(e) => handleChange(e, 0)}
        placeholder="Enter paragraph 1"
      />
      <textarea
        className={styles.textarea}
        value={paragraphs[1]}
        onChange={(e) => handleChange(e, 1)}
        placeholder="Enter paragraph 2"
      />
      <textarea
        className={styles.textarea}
        value={paragraphs[2]}
        onChange={(e) => handleChange(e, 2)}
        placeholder="Enter paragraph 3"
      />
      <button className={styles.button} onClick={() => console.log(paragraphs)}>
        Submit
      </button>
    </div>
  );
}
