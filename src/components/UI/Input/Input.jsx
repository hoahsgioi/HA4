import React from 'react'
import PropTypes from 'prop-types'
import './Input.css'

const Input = ({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  name,
  id,
  className = '',
  disabled = false,
  required = false,
  autoComplete,
  error = false,
  errorMessage = '',
  icon,
  ...rest
}) => {
  return (
    <div className="input-container">
      <div className={`input-wrapper ${error ? 'error' : ''} ${className}`}>
        {icon && (
          <div className="input-icon">
            {icon}
          </div>
        )}
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          autoComplete={autoComplete}
          className={`input-field ${icon ? 'with-icon' : ''}`}
          {...rest}
        />
      </div>
      {error && errorMessage && (
        <span className="input-error-message">{errorMessage}</span>
      )}
    </div>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  autoComplete: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  icon: PropTypes.node
}

export default Input
