import React from "react";
import {
  ListItemIcon,
  ListItem,
  List,
  styled,
  ListItemText,
  useTheme,
  ListItemButton,
} from "@mui/material";
import Link from "next/link";

type NavGroup = {
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: React.ElementType;
  href?: string;
  disabled?: boolean;
  external?: boolean;
};

interface ItemType {
  item: NavGroup;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  level?: number;
  pathDirect: string;
}

const NavItem: React.FC<ItemType> = ({ item, level = 1, pathDirect, onClick }) => {
  const theme = useTheme();
  const Icon = item.icon;
  const isSelected = pathDirect === item.href;

  // Styled ListItem
  const ListItemStyled = styled(ListItem)(() => ({
    padding: 0,
    ".MuiButtonBase-root": {
      whiteSpace: "nowrap",
      marginBottom: "2px",
      padding: "8px 10px",
      borderRadius: "8px",
      backgroundColor: level > 1 ? "transparent" : "inherit",
      color: theme.palette.text.secondary,
      paddingLeft: "10px",
      "&:hover": {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.main,
      },
      "&.Mui-selected": {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.primary.main,
        "&:hover": {
          backgroundColor: theme.palette.primary.main,
        },
      },
    },
  }));

  return (
    <List component="div" disablePadding key={item.id}>
      <ListItemStyled>
        <ListItemButton
          component={item.href ? Link : "div"}
          href={item.href || "#"}
          disabled={item.disabled}
          selected={isSelected}
          target={item.external ? "_blank" : undefined}
          onClick={onClick}
        >
          {Icon && (
            <ListItemIcon
              sx={{
                minWidth: "36px",
                p: "3px 0",
                color: "inherit",
              }}
            >
              <Icon stroke={1.5} size="1.3rem" />
            </ListItemIcon>
          )}
          <ListItemText primary={item.title} />
        </ListItemButton>
      </ListItemStyled>
    </List>
  );
};

export default NavItem;