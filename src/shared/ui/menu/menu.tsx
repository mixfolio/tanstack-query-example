import { Icon } from "../icon/icon";
import { MenuItem, MenuItemTitle } from "./menu-item/menu-item";
import styles from "./menu.module.css";

const items = [
  { key: "item-1", label: "Собрать презентацию" },
  // { key: "item-2", label: "Проверить модель", icon: <Icon.Tool02 /> },
  // { key: "item-3", label: "Собрать повестку", icon: <Icon.Building08 /> },
  // { key: "item-4", label: "Собрать презентацию", icon: <Icon.User01 /> },
  // { key: "div-1", type: "divider" },
  // { key: "item-5", label: "Поручения", icon: <Icon.Tool02 /> },
  // { key: "item-6", label: "Входящие письма", icon: <Icon.User01 /> },
  // { key: "item-7", label: "Совещания / штабы", icon: <Icon.Building08 /> },
  // { key: "item-8", label: "Документы", icon: <Icon.User01 /> },
  // { key: "div-2", type: "divider" },
  // { key: "item-9", label: "Чаты", icon: <Icon.Tool02 /> },
];

export const Menu = () => {
  return (
    <ul className={styles.rootMenu}>
      <MenuItemTitle />
      {items.map((item) => (
        <MenuItem
          type={item.type}
          key={item.key}
          icon={item.icon}
          label={item.label}
        />
      ))}
    </ul>
  );
};
