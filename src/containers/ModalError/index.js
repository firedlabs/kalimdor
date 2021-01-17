import PropTypes from 'prop-types'
import { Modal, Description } from '@firedlabs/design-system'

function ModalError({ active, actionClose, children }) {
  const contentDefault = (
    <>
      Está com alguma instabilidade no servidor da Twitch ou no nosso! Desculpe
      e tente mais tarde, se não der certo vai pentelhar o dev na{' '}
      <a href="https://twitch.tv/marcobrunodev">twitch.tv/marcobrunodev</a>
    </>
  )

  console.log('children', children)

  return (
    <Modal active={active} actionClose={actionClose}>
      <Description>{children || contentDefault}</Description>
    </Modal>
  )
}

ModalError.defaultProps = {
  active: false,
  actionClose: () => {},
  children: ''
}

ModalError.propTypes = {
  active: PropTypes.bool,
  actionClose: PropTypes.func,
  children: PropTypes.string
}

export default ModalError
