import PropTypes from "prop-types";
import Typography from "./Typography/Typography";
import Grid from "./Layout/Grid";
import Stack from "./Layout/Stack";
import Box from "./Layout/Box";

const LabelChild = ({
  label,
  labelXsSize,
  childrenXsSize,
  sxChild,
  children,
  typographyProps,
}) => {
  return (
    <Stack
      sx={{ width: "100%" }}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Typography {...typographyProps}>{label}</Typography>
      <Box sx={sxChild}>{children}</Box>
    </Stack>
  );
};

LabelChild.propTypes = {
  label: PropTypes.string,
  labelXsSize: PropTypes.number,
  childrenXsSize: PropTypes.number,
  children: PropTypes.any,
  sxChild: PropTypes.object,
};
LabelChild.defaultProps = {
  label: "Default label",
  labelXsSize: 11,
  childrenXsSize: 1,
  children: <div>Default Children</div>,
  sxChild: {},
};

export default LabelChild;
