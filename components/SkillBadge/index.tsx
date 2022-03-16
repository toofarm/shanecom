import React, { FC, useState, useEffect } from 'react'
import { TSkill } from 'types'
import Image from 'next/image'
import styles from './SkillBadge.module.scss'

// Props
type TProps = {
  skill: TSkill
}

const SkillBadge:FC<TProps> = ({ skill }) => {
  const [years, setYears] = useState<number[]>([])

  useEffect(() => {
    const temp = []
    for (let i = 0; i < skill.years; i += 1) {
      temp.push(i)
    }
    setYears(temp)
  }, [skill])

  return (
    <div className={styles.skill_badge}>
      <div className={styles.logo_wrap}>
        <Image
          src={skill.logo}
          alt={skill.name}
          width={35}
          height={35}
        />
        {skill.keySkill && <div></div>}
        <h4>{skill.name}</h4>
      </div>
      <ul className={styles.years_counter}>
        {years.map((year) => <li key={`${skill.name}_${year}`}></li>)}
      </ul>
    </div>
  )
}

export default SkillBadge