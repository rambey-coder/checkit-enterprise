import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styles from "./Error.module.css"

import back from "./assets/back-icon.svg";

const Error = () => {
    const navigate = useNavigate();
  return (
    <div className={styles.error}>
      <div className={styles.error_container}>
        <p>404 error</p>
        <h1>We can’t find that page</h1>
        <p>Sorry, the page you are looking for doesn't exist.</p>
        <div className={styles.error_link}>
          <Link onClick={() => navigate(-1)}>
            <img src={back} alt="back" />
            Go back
          </Link>

          <Link to="/">Take me home</Link>
        </div>
      </div>
    </div>
  );
}

export default Error