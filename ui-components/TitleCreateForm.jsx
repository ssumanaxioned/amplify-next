/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Title } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function TitleCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    en: undefined,
    es: undefined,
    fr: undefined,
  };
  const [en, setEn] = React.useState(initialValues.en);
  const [es, setEs] = React.useState(initialValues.es);
  const [fr, setFr] = React.useState(initialValues.fr);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setEn(initialValues.en);
    setEs(initialValues.es);
    setFr(initialValues.fr);
    setErrors({});
  };
  const validations = {
    en: [],
    es: [],
    fr: [],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          en,
          es,
          fr,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(new Title(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "TitleCreateForm")}
    >
      <TextField
        label="En"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              en: value,
              es,
              fr,
            };
            const result = onChange(modelFields);
            value = result?.en ?? value;
          }
          if (errors.en?.hasError) {
            runValidationTasks("en", value);
          }
          setEn(value);
        }}
        onBlur={() => runValidationTasks("en", en)}
        errorMessage={errors.en?.errorMessage}
        hasError={errors.en?.hasError}
        {...getOverrideProps(overrides, "en")}
      ></TextField>
      <TextField
        label="Es"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              en,
              es: value,
              fr,
            };
            const result = onChange(modelFields);
            value = result?.es ?? value;
          }
          if (errors.es?.hasError) {
            runValidationTasks("es", value);
          }
          setEs(value);
        }}
        onBlur={() => runValidationTasks("es", es)}
        errorMessage={errors.es?.errorMessage}
        hasError={errors.es?.hasError}
        {...getOverrideProps(overrides, "es")}
      ></TextField>
      <TextField
        label="Fr"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              en,
              es,
              fr: value,
            };
            const result = onChange(modelFields);
            value = result?.fr ?? value;
          }
          if (errors.fr?.hasError) {
            runValidationTasks("fr", value);
          }
          setFr(value);
        }}
        onBlur={() => runValidationTasks("fr", fr)}
        errorMessage={errors.fr?.errorMessage}
        hasError={errors.fr?.hasError}
        {...getOverrideProps(overrides, "fr")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
