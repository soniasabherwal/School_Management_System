import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

const CustomButton = ({ onClick, variant = 'contained', children }) => {
  return (
    <Button variant={variant} onClick={onClick} data-testid="custom-button">
      {children}
    </Button>
  );
};

// Prop type validation
CustomButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
  children: PropTypes.node.isRequired,
};

export default CustomButton;
