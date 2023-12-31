import React from 'react'

type PropsType = {
  tasks: TaskType[]
  children: React.ReactNode
}

type TaskType = {
  id: number,
  title: string,
  isDone: boolean
}

export const SuperTodoList: React.FC<PropsType> = ({ tasks, children }) => {
  return (
    <div>
      <ul>
        {tasks.map(el => {
          return (
            <li>
              <span>{el.id}</span>
              <span>{el.title}</span>
              <input type='checkbox' checked={el.isDone} />
            </li>
          )
        })}
      </ul>
      {children}
    </div>
  )
}