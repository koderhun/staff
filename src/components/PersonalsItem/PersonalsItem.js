import React, { Component } from "react";
import { Persona, PersonaSize } from "office-ui-fabric-react/lib/Persona";
import { Text } from "office-ui-fabric-react/lib/Text";
import { Card } from "@uifabric/react-cards";
import { FontIcon } from "office-ui-fabric-react/lib/Icon";
import css from "./PersonalsItem.module.css";

class PersonalsItem extends Component {
  render() {
    const { id, onEditItem, onDeleteItem } = this.props;
    const {
      firstName,
      lastName,
      position,
      phone,
      email,
      cabinet
    } = this.props.item;
    return (
      <Card className={css.item} aria-label="">
        <Card.Item>
          <div className={css.content}>
            <div className={css.person}>
              <Persona
                showUnknownPersonaCoin={true}
                text={firstName + " " + lastName}
                secondaryText={position}
                size={PersonaSize.size72}
                imageAlt="Kat Larrson, status unknown"
              />
            </div>

            <div className={css.info}>
              <Text className={css.phone}>Телефон: {phone}</Text>
              <Text className={css.email}>Email: {email}</Text>
              <Text className={css.cabinet}>Кабинет: {cabinet}</Text>
            </div>
          </div>
          <div className={css.controls}>
            <FontIcon
              onClick={() => {
                onEditItem(id);
              }}
              iconName="Edit"
              className={css.edit}
            />
            <FontIcon
              onClick={() => {
                onDeleteItem(id);
              }}
              iconName="Delete"
              className={css.delete}
            />
          </div>
        </Card.Item>
      </Card>
    );
  }
}

export default PersonalsItem;
