import { motion } from 'framer-motion'
import styled from 'styled-components/macro'

interface EntranceBlind {
  total: number
}

export const EntranceContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: transparent;
`

export const EntranceWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  height: 100%;
`

export const EntranceBlind = styled(motion.div)<EntranceBlind>`
  width: ${({ total }) => 100 / total}%;
  height: 100%;
  background-color: lightblue;
`

export const EntranceText = styled(motion.h1)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
