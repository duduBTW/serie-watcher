import { Platform } from "react-native";
import { PageScroll, PageContainerStyled } from "./styles";

const PageContainer = ({
  children,
  disableMargin = false,
}: {
  children: React.ReactNode;
  disableMargin?: boolean;
}) => {
  return (
    <PageScroll nestedScrollEnabled={true}>
      <PageContainerStyled
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        disableMargin={disableMargin}
      >
        {children}
      </PageContainerStyled>
    </PageScroll>
  );
};

export default PageContainer;
