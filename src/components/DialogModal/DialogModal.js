import React, { Component } from "react";
import {
  Dialog,
  DialogType,
  DialogFooter
} from "office-ui-fabric-react/lib/Dialog";
import {
  PrimaryButton,
  DefaultButton
} from "office-ui-fabric-react/lib/Button";

class DialogModal extends Component {
  delete = () => {
    const { id, deleteItem, closeModal } = this.props;
    deleteItem(id);
    closeModal();
  };

  render() {
    const { closeModal } = this.props;

    console.log("props", this.props);

    return (
      <div>
        <Dialog
          hidden={false}
          onDismiss={closeModal}
          dialogContentProps={{
            type: DialogType.normal,
            title: "Удалить сотрудника?",
            closeButtonAriaLabel: "Закрыть"
          }}
          modalProps={{
            titleAriaId: this._labelId,
            subtitleAriaId: this._subTextId,
            isBlocking: false,
            styles: { main: { maxWidth: 450, minHeight: 100 } }
          }}
        >
          <DialogFooter>
            <PrimaryButton onClick={this.delete} text="Да" />
            <DefaultButton onClick={closeModal} text="Нет" />
          </DialogFooter>
        </Dialog>
      </div>
    );
  }
}

export default DialogModal;
