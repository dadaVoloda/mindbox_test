import clsx from 'clsx'
import { FC, useState } from 'react'
import { TFilter } from '../../types'
import styles from './Filter.module.css'

interface Props {
  setFilter: (filter: TFilter) => void
  filters?: FilterItem[]
}

interface FilterItem {
  text: string
  value: TFilter
}

const defaultFilters: FilterItem[] = [
  {
    text: 'All',
    value: 'all',
  },
  {
    text: 'Active',
    value: 'active',
  },
  {
    text: 'Completed',
    value: 'completed',
  },
]

export const Filter: FC<Props> = ({ setFilter, filters = defaultFilters }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <div className={styles.filter}>
      {filters.map((filter, i) => (
        <button
          className={clsx(styles.btn, selectedIndex === i && styles.active)}
          type='button'
          onClick={() => {
            setSelectedIndex(i)
            setFilter(filter.value)
          }}
          key={i}
        >
          {filter.text}
        </button>
      ))}
    </div>
  )
}
