import React, { Component } from "react";
import css from "./Personals.module.css";
import PersonalsItem from "../PersonalsItem/PersonalsItem";
import {
  CommandBarButton,
  IContextualMenuProps,
  IIconProps,
  Stack,
  IStackStyles,
  PrimaryButton
} from "office-ui-fabric-react";

// const addIcon: IIconProps = { iconName: "Add" };

class Personals extends Component {
  render() {
    const { list, onEditItem, onDeleteItem, onAppend } = this.props;
    return (
      <div>
        <div className={css.header}>
          <div className={css.filter}>
            <CommandBarButton iconProps={{ iconName: "Down" }} text="Фамилия" />
          </div>
          <div className={css.append}>
            <PrimaryButton onClick={onAppend} text="Добавить"></PrimaryButton>
          </div>
        </div>
        <Stack horizontal className={css.personList}>
          {list.map((v, k) => {
            return (
              <PersonalsItem
                onEditItem={onEditItem}
                onDeleteItem={onDeleteItem}
                id={k}
                item={v}
                key={k}
              />
            );
          })}
        </Stack>
      </div>
    );
  }
}

export default Personals;
