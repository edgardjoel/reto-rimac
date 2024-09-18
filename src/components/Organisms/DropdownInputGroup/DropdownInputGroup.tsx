'use client';
import { Input } from '@components/Atoms';
import React from 'react';
import { Dropdown, DropdownButton, InputGroup } from 'react-bootstrap';

type DropdownInputGroupProps = {
  // Props para el dropdown
  dropdownSelectedValue: string;
  dropdownOptions: string[];
  dropdownOnSelect: (value: string) => void;

  // Props para el input
  inputValue: string;
  inputOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputPlaceholder: string;
  inputFeedbackMessage?: string;
  inputMin?: string;
  inputMax?: string;
  inputLabel: string;
  IsInputInvalid?: boolean;
  [key: string]: any;
};

const DropdownInputGroup: React.FC<DropdownInputGroupProps> = ({
  dropdownSelectedValue,
  dropdownOptions,
  dropdownOnSelect,
  inputValue,
  inputOnChange,
  inputPlaceholder,
  inputFeedbackMessage,
  inputMin,
  inputMax,
  inputLabel,
  isInputInvalid,
  ...props
}) => {
  return (
    <InputGroup {...props} className="mb-3" style={{ height: '56px' }}>
      <DropdownButton
        variant="outline-secondary"
        title={dropdownSelectedValue}
        drop="down"
        onSelect={(eventKey) => dropdownOnSelect(eventKey as string)}
      >
        {dropdownOptions.map((option, index) => (
          <Dropdown.Item eventKey={option} key={index}>
            {option}
          </Dropdown.Item>
        ))}
      </DropdownButton>

      <Input
        type="text"
        placeholder={inputPlaceholder}
        label={inputLabel}
        value={inputValue}
        onChange={inputOnChange}
        isInvalid={isInputInvalid}
        feedback={inputFeedbackMessage || ''}
        min={inputMin}
        max={inputMax}
      />
    </InputGroup>
  );
};

export default DropdownInputGroup;
