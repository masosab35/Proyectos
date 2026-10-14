import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";

import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

const mainList = [
  {
    text: "Inbox",
    icon: <InboxIcon />,
    href: "#inbox",
  },
  {
    text: "Drafts",
    icon: <DraftsIcon />,
    href: "#drafts",
  },
];

const secondaryList = [
  {
    text: "Trash",
    href: "#trash",
  },
  {
    text: "Spam",
    href: "#spam",
  },
];

export default function NavListDrawer() {
  return (
    <Box sx={{ width: 250, bgcolor: "lightsalmon" }}>
      <nav aria-label="main mailbox folders">
        <List>
          {mainList.map((item) => (
            <ListItem
              disablePadding
              key={item.text}
            >
              <ListItemButton
                href={item.href}
                component="a"
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary trash spam">
        <List>
          {secondaryList.map((item) => (
            <ListItem
              disablePadding
              key={item.text}
            >
              <ListItemButton
                component="a"
                href={item.href}
              >
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
} 