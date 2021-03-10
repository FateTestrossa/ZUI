import * as React from 'react'

import Modal from './components/Modal'
import Button from '../Button'
import { ButtonProps } from '../Button/interface'

const ModalDemo = () => {
  const [state, setState] = React.useState(false)
  let buttonProp: ButtonProps = {
    theme: 'danger',
    isLoading: false,
    loadingText: '删除中',
  }

  return (
    <div>
      <Button theme="primary" onClick={() => setState(true)}>
        Open Modal
      </Button>
      <Modal isVisible={state} onClose={() => setState(false)}>
        This is a test content
      </Modal>

      <Button
        onClick={() => {
          Modal.info({
            title: 'info',
            content: 'this is info type',
          })
        }}
      >
        Info
      </Button>
      <Button
        style={{ marginLeft: '8px' }}
        onClick={() => {
          Modal.info({
            title: 'error',
            content: 'this is error type',
            infoType: 'error',
          })
        }}
      >
        Error
      </Button>
      <Button
        style={{ marginLeft: '8px' }}
        onClick={() => {
          Modal.info({
            title: 'success',
            content: 'this is success type',
            infoType: 'success',
          })
        }}
      >
        Success
      </Button>
      <Button
        style={{ marginLeft: '8px' }}
        onClick={() => {
          Modal.info({
            title: 'warning',
            content: 'this is warning type',
            infoType: 'warning',
          })
        }}
      >
        Warning
      </Button>

      <Button
        theme="danger"
        onClick={() => {
          const { update, destory } = Modal.confirm({
            title: '删除节点',
            content: '是否删除当前节点?',
            okText: '确定',
            cancelText: '取消',
            okButtonProps: buttonProp,
            onOk: (closeFun) => {
              update({ okButtonProps: { ...buttonProp, isLoading: true } })
              setTimeout(() => {
                closeFun()
              }, 1000)
            },
          })
        }}
      >
        Confirm
      </Button>
    </div>
  )
}
export default ModalDemo
