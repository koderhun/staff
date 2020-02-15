import React, { Component } from "react";
import { connect } from "react-redux";
import { updateList } from "../../store/actions/personalsAction";
import css from "./EditPerson.module.css";
import { DefaultButton, PrimaryButton } from "office-ui-fabric-react";
import {
  TextField,
  MaskedTextField
} from "office-ui-fabric-react/lib/TextField";

const personaData = {
  firstName: "Фред",
  lastName: "Пупкин",
  position: "Повелитель снега",
  phone: "8 934 232 34 45",
  email: "pupkin.f@ya.ru",
  cabinet: "34"
};

class EditPerson extends Component {
  state = {
    ...personaData,
    valid: false
  };

  componentDidMount() {
    const { personals, id } = this.props;
    let newList = [...personals.list];

    // Если это новый элемент то обнуляем инпуты
    if (newList.length === id) {
      newList.push(personaData);
    }

    const { firstName, lastName, position, phone, email, cabinet } = newList[
      id
    ];

    this.setState({
      firstName: firstName,
      lastName: lastName,
      position: position,
      phone: phone,
      email: email,
      cabinet: cabinet
    });
  }

  isValid = () => {
    const { firstName, lastName, position, phone, email } = this.state;
    if (
      firstName !== "" &&
      lastName !== "" &&
      position !== "" &&
      phone !== "" &&
      email !== ""
    ) {
      this.setState({ valid: true });
    } else {
      this.setState({ valid: false });
    }
  };

  onChangeInput = (name, e) => {
    let newObj = {};
    newObj[name] = e.target.value;
    this.setState(newObj, () => {
      this.isValid();
    });
  };

  onSave = () => {
    console.log("Save");
    const { firstName, lastName, position, phone, email, cabinet } = this.state;
    const { personals, id, updateList } = this.props;

    let newList = personals.list;

    newList[id] = {
      firstName: firstName,
      lastName: lastName,
      position: position,
      phone: phone,
      email: email,
      cabinet: cabinet
    };

    updateList(newList);

    this.props.onClose();
  };

  render() {
    const {
      firstName,
      lastName,
      position,
      phone,
      email,
      cabinet,
      valid
    } = this.state;
    const { onClose } = this.props;

    return (
      <div className={css.form}>
        <h2 className={css.header}>Редактирование профиля сотрудника</h2>
        <div className={css.inputs}>
          <TextField
            onChange={e => {
              this.onChangeInput("firstName", e);
            }}
            label="Имя"
            value={firstName}
            required
            errorMessage={firstName === "" ? "Обязательное поле" : ""}
          />
          <TextField
            onChange={e => {
              this.onChangeInput("lastName", e);
            }}
            label="Фамилия"
            value={lastName}
            required
            errorMessage={lastName === "" ? "Обязательное поле" : ""}
          />
          <TextField
            onChange={e => {
              this.onChangeInput("position", e);
            }}
            label="Должность"
            value={position}
            required
            errorMessage={position === "" ? "Обязательное поле" : ""}
          />
          <MaskedTextField
            onChange={e => {
              this.onChangeInput("phone", e);
            }}
            label="Телефон"
            mask="m\ask: (999)999-9999"
            value={phone}
            required
            errorMessage={phone === "" ? "Обязательное поле" : ""}
          />
          <TextField
            onChange={e => {
              this.onChangeInput("email", e);
            }}
            label="Email"
            value={email}
            required
            errorMessage={email === "" ? "Обязательное поле" : ""}
          />
          <TextField
            onChange={e => {
              this.onChangeInput("cabinet", e);
            }}
            value={cabinet}
            label="Кабинет"
          />
        </div>
        <div className={css.controls}>
          <PrimaryButton
            text="Сохранить"
            onClick={this.onSave}
            allowDisabledFocus
            disabled={!valid}
            className={css.save}
          />
          <DefaultButton text="Отменить" onClick={onClose} />
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditPerson);
