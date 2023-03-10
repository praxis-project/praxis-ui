import { Button as MuiButton, ButtonProps, styled } from "@mui/material";
import { Blurple } from "../../theme";
import Spinner from "./Spinner";

export const BLURPLE_BUTTON_COLORS = {
  backgroundColor: Blurple.Primary,
  "&:active": {
    backgroundColor: Blurple.Active,
  },
  "&:hover": {
    backgroundColor: Blurple.Hover,
  },
  "&:disabled": {
    backgroundColor: Blurple.Disabled,
  },
};

const Button = styled(MuiButton)(() => ({
  fontFamily: "Inter Bold",
  letterSpacing: "0.2px",
  textTransform: "none",
  borderRadius: 9999,
  padding: "0 15px",
  minWidth: 85,
  height: 38,
  ...BLURPLE_BUTTON_COLORS,
}));

interface Props extends ButtonProps {
  isLoading?: boolean;
}

const PrimaryActionButton = ({ isLoading, children, ...props }: Props) => (
  <Button {...props}>
    {isLoading && (
      <Spinner size={10} color="inherit" sx={{ marginRight: 0.75 }} />
    )}
    {children}
  </Button>
);

export default PrimaryActionButton;
