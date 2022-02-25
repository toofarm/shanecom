import React, { FC } from 'react'
import Link from 'next/link'
import styles from './ProjectLinks.module.scss'

// Types
type TProps = {
  repo?: string;
  website?: string;
}

const ProjectLinks:FC<TProps> = ({ repo, website }) => {
  return (
    <ul className={styles.project_links}>
      {website && <li>
        <Link href={website}>
          <a target='_blank'>
            Live
          </a>
        </Link>
      </li>}
      {repo && <li>
        <Link href={repo}>
          <a target='_blank'>
            Repo 
          </a>
        </Link>
      </li>}
    </ul>
  )
}

export default ProjectLinks