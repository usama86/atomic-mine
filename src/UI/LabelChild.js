import PropTypes from "prop-types";
import Typography from "./Typography/Typography";
import Grid from "./Layout/Grid";

const LabelChild = ({
  label,
  labelXsSize,
  childrenXsSize,
  sxChild,
  children,
}) => {
  return (
    <>
      <Grid item xs={labelXsSize}>
        <Typography>{label}</Typography>
      </Grid>
      <Grid item xs={childrenXsSize} sx={sxChild}>
        {children}
      </Grid>
    </>
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
