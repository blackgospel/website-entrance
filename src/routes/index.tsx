import Entrance from 'common/entrance'
import { AnimatePresence } from 'framer-motion'
import useEntrance from 'helpers/hooks/useEntrance'
import { Route } from 'react-router'
import { WebsiteRoutes } from './index.routes'
import { Container, RouteContainer } from './index.styles'

const Routes: React.FC = () => {
  const { loading, entranceMaxDelay } = useEntrance()

  return (
    <Container>
      <AnimatePresence>
        {loading ? (
          <Entrance key="entrance" />
        ) : (
          <RouteContainer
            key="app"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: entranceMaxDelay, duration: 2 },
            }}
          >
            {WebsiteRoutes.map(({ name, exact, path, Component }) => {
              return (
                <Route
                  key={name}
                  exact={exact}
                  path={path}
                  component={Component}
                />
              )
            })}
          </RouteContainer>
        )}
      </AnimatePresence>
    </Container>
  )
}

export default Routes
