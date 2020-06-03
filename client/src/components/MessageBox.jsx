import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import './styles/MessageBox.css';

export default function MessageBox({
  open,
  trigger,
  header,
  content,
  centeredContent,
  onOK,
  onCancel,
}) {
  return (
    <Modal size="mini" dimmer="inverted" open={open} trigger={trigger}>
      {header && <Modal.Header>{header}</Modal.Header>}
      <Modal.Content>
        <p className={centeredContent ? 'text-align-center' : ''}>{content}</p>
      </Modal.Content>
      <Modal.Actions>
        {onCancel && (
          <Button
            negative
            content="Cancelar"
            onClick={(_e, _d) => onCancel()}
          />
        )}
        {onOK && (
          <Button positive content="Aceptar" onClick={(_e, _d) => onOK()} />
        )}
      </Modal.Actions>
    </Modal>
  );
}
