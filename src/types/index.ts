export interface ITodo {
  id: string
  text: string
  completed: boolean
}

export type TFilter = 'all' | 'active' | 'completed'
