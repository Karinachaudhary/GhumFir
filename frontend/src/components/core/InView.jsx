import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

export function InView({
  children,
  viewOptions = { once: true, margin: '0px 0px -150px 0px' },
  variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.09 },
    },
  },
  className = '',
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, viewOptions)

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}