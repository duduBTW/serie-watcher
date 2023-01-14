import { TouchableOpacity } from "react-native";
import { useMutation } from "@tanstack/react-query";
import service from "../../../service";

// components
import SvgArrowRight from "../../../assets/icons/arrowRight";
import SvgLogOut from "../../../assets/icons/logout";
import Divider from "../../divider";
import Typography, { TextColorVariant } from "../../typography";

// styles
import {
  UserPageScroll,
  UserPageContainer,
  Header,
  ProfilePicture,
  ListItemContainer,
  ListItemMainContent,
  ListItemSecondaryContent,
} from "./styles";

const UserPage = ({ toggleLogin }: { toggleLogin: () => void }) => {
  const { mutate: logout } = useMutation(service.logout, {
    onSuccess() {
      toggleLogin();
    },
  });

  return (
    <UserPageContainer>
      <UserPageScroll>
        <Header>
          <ProfilePicture
            source={{
              uri: "https://pbs.twimg.com/profile_images/1451192693015470103/2n98yG6o_400x400.jpg",
            }}
          />
          <Typography variant="title-04">Name</Typography>
        </Header>
        <ListItem endIcon={SvgArrowRight} secondary="teste@teste.com">
          Email
        </ListItem>
        <Divider disableMargin />
        <ListItem endIcon={SvgArrowRight}>Password</ListItem>
        <Divider disableMargin />
        <ListItem endIcon={SvgArrowRight}>Payment methods</ListItem>
        <Divider disableMargin />
        <ListItem onPress={logout} color="error.main" endIcon={SvgLogOut}>
          Log out
        </ListItem>
      </UserPageScroll>
    </UserPageContainer>
  );
};

const ListItem = ({
  children,
  color,
  secondary,
  endIcon: EndIcon,
  onPress,
}: {
  children: string;
  secondary?: string;
  color?: TextColorVariant;
  endIcon?: ({ color }: { color: TextColorVariant }) => JSX.Element;
  onPress?: () => void;
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ListItemContainer>
        <ListItemMainContent>
          <Typography color={color} variant="body-01">
            {children}
          </Typography>
        </ListItemMainContent>
        {secondary && (
          <ListItemSecondaryContent>
            <Typography color="text.blackSecondary" variant="body-01">
              {secondary}
            </Typography>
          </ListItemSecondaryContent>
        )}
        {EndIcon && <EndIcon color={color ?? "text.black"} />}
      </ListItemContainer>
    </TouchableOpacity>
  );
};

export default UserPage;
