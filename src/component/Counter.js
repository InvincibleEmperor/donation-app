import React from 'react'
import { useSelector } from 'react-redux'

export function Counter() {
  const count = useSelector((state) => state.counter.value)

  return (
    <div>
      <div>

      <span>{count}</span>
     
      </div>
    </div>
  )
}