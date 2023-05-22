import { useState } from 'react'

interface Pagination {
  current: number
  limit: number
  changeLimit: (newLimit: number) => void
  next: () => void
  prev: () => void
  totalPages: number
  isNextBlock: boolean
  isPrevBlock: boolean
}

const usePagination = (initialCurrent = 1, initialLimit = 12, totalPages = 2): Pagination => {
  const [current, setCurrent] = useState(initialCurrent)
  const [limit, setLimit] = useState(initialLimit)

  const isNextBlock = current >= totalPages

  const isPrevBlock = current === 1

  const changeLimit = (newLimit: number): void => {
    setLimit(newLimit)
  }

  const next = () => !isNextBlock && setCurrent((prev) => prev + 1)

  const prev = () => !isPrevBlock && setCurrent((prev) => Math.max(prev - 1, 1))

  return {
    current,
    limit,
    totalPages,
    changeLimit,
    next,
    prev,
    isNextBlock,
    isPrevBlock
  }
}

export default usePagination
