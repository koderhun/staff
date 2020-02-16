import React, { Component } from "react";
import { connect } from "react-redux";
import Personals from "./Personals";
import EditPerson from "../EditPerson/EditPerson";
import Dialog from "../DialogModal/DialogModal";
import {
  updateList,
  updateSortStatus
} from "../../store/actions/personalsAction";
import { Modal } from "office-ui-fabric-react";

class PersonalsContainer extends Component {
  state = {
    modalDeleteIsOpen: false,
    modalEditIsOpen: false,
    editId: null
  };

  onAppend = () => {
    const list = this.props.list;
    const id = list.length;

    this.onEditItem(id);
  };

  onEditItem = id => {
    this.setState({
      editId: id
    });
    this.openModal();
  };

  onOpenDeleteModal = id => {
    this.setState({
      editId: id,
      modalDeleteIsOpen: true
    });
  };

  onCloseDeleteModal = () => {
    this.setState({
      modalDeleteIsOpen: false
    });
  };

  deleteItem = id => {
    let newList = [...this.props.list];

    newList.splice(id, 1);
    this.props.updateList(newList);
  };

  onSortText = key => {
    const { sortStatus, updateList, updateSortStatus } = this.props;
    const newList = [...this.props.list];

    if (sortStatus.type === "Down") {
      newList.sort((a, b) => {
        const nameA = a[key].toLowerCase();
        const nameB = b[key].toLowerCase();
        if (nameA < nameB)
          //сортируем строки по возрастанию
          return -1;
        if (nameA > nameB) return 1;
        return 0; // Никакой сортировки
      });

      updateSortStatus({
        name: key,
        type: "Up"
      });
    } else {
      newList.sort((a, b) => {
        const nameA = a[key].toLowerCase();
        const nameB = b[key].toLowerCase();
        if (nameA > nameB)
          //сортируем строки по возрастанию
          return -1;
        if (nameA > nameB) return 1;
        return 0; // Никакой сортировки
      });

      updateSortStatus({
        name: key,
        type: "Down"
      });
    }
    updateList(newList);
  };

  openModal = () => {
    this.setState({
      modalEditIsOpen: !this.state.modalEditIsOpen
    });
  };

  closeModal = () => {
    this.setState({
      modalEditIsOpen: false
    });
  };

  render() {
    const { editId, modalEditIsOpen, modalDeleteIsOpen } = this.state;
    const { list, sortStatus } = this.props;

    return (
      <div>
        <Personals
          onAppend={this.onAppend}
          onEditItem={this.onEditItem}
          onDeleteItem={this.onOpenDeleteModal}
          onSortText={this.onSortText}
          sortStatus={sortStatus}
          list={list}
        />
        <Modal
          onDismiss={this.closeModal}
          isOpen={modalEditIsOpen}
          isBlocking={false}
        >
          <EditPerson onClose={this.closeModal} id={editId}></EditPerson>
        </Modal>
        {modalDeleteIsOpen ? (
          <Dialog
            id={editId}
            deleteItem={this.deleteItem}
            closeModal={this.onCloseDeleteModal}
          ></Dialog>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    list: store.personals.list,
    sortStatus: store.personals.sortStatus
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateList: list => dispatch(updateList(list)),
    updateSortStatus: status => dispatch(updateSortStatus(status))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalsContainer);
