import { useCallback, useEffect, useState } from 'react'
import { loadJSON, saveJSON } from '../lib/storage'

const KEY = 'ielts.starred.words.v1'

// Stores starred word ids in localStorage and keeps React state in sync.
export function useStars() {
  const [starred, setStarred] = useState(() => new Set(loadJSON(KEY, [])))

  useEffect(() => {
    saveJSON(KEY, [...starred])
  }, [starred])

  const toggle = useCallback((id) => {
    setStarred((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }, [])

  const isStarred = useCallback((id) => starred.has(id), [starred])

  const clearAll = useCallback(() => setStarred(new Set()), [])

  return { starred, isStarred, toggle, clearAll, count: starred.size }
}
