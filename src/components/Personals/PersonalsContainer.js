import React, { Component } from "react";
import { connect } from "react-redux";
import Personals from "./Personals";
import EditPerson from "../EditPerson/EditPerson";
import { updateList } from "../../store/actions/personalsAction";

import { Modal } from "office-ui-fabric-react";

class PersonalsContainer extends Component {
  state = {
    modalEditIsOpen: false,
    editId: null
  };

  onAppend = () => {
    const list = this.props.personals.list;
    const id = list.length;

    this.onEditItem(id);
  };

  onEditItem = id => {
    this.setState({
      editId: id
    });
    this.openModal();
  };

  onDeleteItem = id => {
    let newList = [...this.props.personals.list];

    newList.splice(id, 1);
    this.props.updateList(newList);
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
    const { editId } = this.state;
    const { list } = this.props.personals;

    return (
      <div>
        <Personals
          onAppend={this.onAppend}
          onEditItem={this.onEditItem}
          onDeleteItem={this.onDeleteItem}
          list={list}
        />
        <Modal
          onDismiss={this.closeModal}
          isOpen={this.state.modalEditIsOpen}
          isBlocking={false}
        >
          <EditPerson onClose={this.closeModal} id={editId}></EditPerson>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    personals: store.personals
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateList: list => dispatch(updateList(list))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalsContainer);
