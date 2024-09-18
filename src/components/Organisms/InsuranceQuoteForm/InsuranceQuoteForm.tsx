'use client';

import { ErrorMessage, Form, Formik, FormikValues, useFormik } from 'formik';

import { CheckboxWithText } from '@components/Molecules';
import { DropdownInputGroup } from '../DropdownInputGroup';
import styles from './InsuranceQuoteForm.module.scss';

import { Button, Input } from '@components/Atoms';
import { sanitizeNumericInput } from '@utilities/utils';
import React, { useState } from 'react';
import { documentOptions, formSchema } from '@dto/index';

import { toFormikValidationSchema } from 'zod-formik-adapter';

export type InsuranceQuoteFormProps = {
  onSubmit: (event: {
    documentType: string;
    documentNumber: string;
    phone: string;
    termsAccepted: boolean;
    communicationsAccepted: boolean;
  }) => Promise<void>;
};

const InsuranceQuoteForm: React.FC<InsuranceQuoteFormProps> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        documentType: documentOptions[0] || '',
        documentNumber: '',
        phone: '',
        termsAccepted: false,
        communicationsAccepted: false,
      }}
      validationSchema={toFormikValidationSchema(formSchema)}
      validateOnChange={true} // Validar en cada cambio
      validateOnBlur={true} // Validar en cada pérdida de foco
      onSubmit={(values) => {
        onSubmit({ ...values });
      }}
    >
      {({ handleSubmit, setFieldValue, values, errors, touched, isValid, dirty }) => (
        <Form onSubmit={handleSubmit} className={styles['form']}>
          <div className={styles['form__group']}>
            <DropdownInputGroup
              className={styles['form__dropdown-input-group']}
              dropdownSelectedValue={values.documentType}
              dropdownOptions={documentOptions}
              dropdownOnSelect={(value) => setFieldValue('documentType', value)}
              inputValue={values.documentNumber}
              inputOnChange={(e) =>
                setFieldValue('documentNumber', sanitizeNumericInput(e.target.value, 8))
              }
              inputPlaceholder={`Ingrese su ${values.documentType}`}
              inputLabel="Nro. de documento"
              isInputInvalid={!!errors.documentNumber}
            />
            {errors.documentNumber ? (
              <div className={styles['form__error']}>{errors.documentNumber}</div>
            ) : null}
            <Input
              className={styles['form__input']}
              type="text"
              placeholder="Ingrese su Celular"
              label="Celular"
              value={values.phone}
              onChange={(e) => setFieldValue('phone', sanitizeNumericInput(e.target.value, 9))}
              isInvalid={!!errors.phone}
            />
            {errors.phone ? <div className={styles['form__error']}>{errors.phone}</div> : null}
          </div>

          <div className={styles['form__checkbox-group']}>
            <CheckboxWithText
              className={styles['form__checkbox']}
              classFontSizeSpan={styles['form__checkbox--fontSize']}
              checked={values.termsAccepted}
              checkboxId="checkbox-with-text1"
              onChange={() => setFieldValue('termsAccepted', !values.termsAccepted)}
              label="Acepto la Política de Privacidad"
            />
            {Boolean(touched.termsAccepted) || errors.termsAccepted ? (
              <div className={styles['form__error']}>{errors.termsAccepted}</div>
            ) : null}

            <CheckboxWithText
              classFontSizeSpan={styles['form__checkbox--fontSize']}
              className={styles['form__checkbox']}
              checked={values.communicationsAccepted}
              checkboxId="checkbox-with-text2"
              onChange={() =>
                setFieldValue('communicationsAccepted', !values.communicationsAccepted)
              }
              label="Acepto las Comunicaciones Comerciales"
            />
            {errors.communicationsAccepted ? (
              <div className={styles['form__error']}>{errors.communicationsAccepted}</div>
            ) : null}
            <p className={styles['form__terms']}>Aplican Términos y Condiciones.</p>
          </div>

          <Button
            className={styles['form__button']}
            label="Cotiza aquí"
            type="submit"
            variant="primary"
            size="large"
            disabled={!isValid || !dirty}
          />
        </Form>
      )}
    </Formik>
  );
};

export default InsuranceQuoteForm;
