import styles from "./Profile.module.css";
export default function Profile ({ name, tag, location, image, stats }) {
  return (
    <div className={styles.wrapper}>
    <div className={styles.card}>
      <img className={styles.image}
        src={image}
        alt="User avatar"
      />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>
  
    <ul className={styles.list}>
      <li className={styles.item}>
        <span className={styles.item_name}>Followers</span>
        <span className={styles.item_number}>{stats.followers}</span>
      </li>
      <li className={styles.item}>
        <span className={styles.item_name}>Views</span>
        <span className={styles.item_number}>{stats.views}</span>
      </li>
      <li className={styles.item}>
        <span className={styles.item_name}>Likes</span>
        <span className={styles.item_number}>{stats.likes}</span>
      </li>
    </ul> 
  </div>
  );
}