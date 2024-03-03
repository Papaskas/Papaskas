import React, { JSX, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

type TInView = {
  children: JSX.Element | JSX.Element[] | string | string[]
  animateName: string
  timeBeforeAnimation?: 0 | 1 | 2 | 3 | 4 | 5
}
function Index({ children, animateName, timeBeforeAnimation = 0 }: Readonly<TInView>) {
  const [visibility, setVisibility] = useState<React.CSSProperties['visibility']>('hidden')

  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
  })

  useEffect(() => {
    if (entry && inView) {
      setVisibility('visible')
      inView && (entry.target.className = `animate__animated ${animateName} animate__delay-${timeBeforeAnimation}s`)
    }
  }, [entry, inView, animateName, timeBeforeAnimation])

  return (
    <div ref={ref} style={{ visibility }}>
      {children}
    </div>
  )
}

export default Index
