import useEntranceStore from 'zustands/stores/entrance'
import {
  EntranceBlind,
  EntranceContainer,
  EntranceWrapper,
} from './index.styles'

const Entrance: React.FC = () => {
  const {
    entranceDuration,
    entranceBlindsDuration,
    entranceBlindsDelay,
    entranceBlinds,
  } = useEntranceStore()

  return (
    <EntranceContainer>
      <EntranceWrapper>
        {new Array(entranceBlinds).fill('').map((_, index) => {
          return (
            <EntranceBlind
              key={index}
              total={entranceBlinds}
              exit={{
                y: '-100%',
                transition: {
                  duration: entranceBlindsDuration,
                  delay: entranceDuration + entranceBlindsDelay * index,
                  ease: [0.45, 0, 0.55, 1],
                },
              }}
            />
          )
        })}
      </EntranceWrapper>
    </EntranceContainer>
  )
}

export default Entrance
