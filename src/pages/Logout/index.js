import FakeLoadingScreen from 'containers/FakeLoadingScreen'
import ModalError from 'containers/ModalError'
import useLogout from './useLogout'

function Logout() {
  const { activeLoading, activeModalError, actionCloseModalError } = useLogout()

  return (
    <>
      <ModalError
        active={activeModalError}
        actionClose={actionCloseModalError}
      />
      <FakeLoadingScreen active={activeLoading} />
    </>
  )
}

export default Logout
