import { FC } from 'react'
import { TFilter } from '../../types'
import { Filter } from '../Filter/Filter'
import styles from './Options.module.css'

interface Props {
  activeTodosCount: number
  setFilter: (filter: TFilter) => void
  clearCompleted: () => void
}

export const Options: FC<Props> = ({
  activeTodosCount,
  setFilter,
  clearCompleted,
}) => {
  return (
    <div className={styles.options}>
      <div className={styles.count}>{activeTodosCount} items left</div>
      <Filter setFilter={setFilter} />
      <button type='button' onClick={clearCompleted}>
        Clear completed
      </button>
    </div>
  )
}
