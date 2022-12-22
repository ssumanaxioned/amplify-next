/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Slider } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function SliderCreateForm(props) {
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
    Page: undefined,
    videoSrc: undefined,
    imageSrc: undefined,
  };
  const [Page, setPage] = React.useState(initialValues.Page);
  const [videoSrc, setVideoSrc] = React.useState(initialValues.videoSrc);
  const [imageSrc, setImageSrc] = React.useState(initialValues.imageSrc);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setPage(initialValues.Page);
    setVideoSrc(initialValues.videoSrc);
    setImageSrc(initialValues.imageSrc);
    setErrors({});
  };
  const validations = {
    Page: [],
    videoSrc: [],
    imageSrc: [],
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
          Page,
          videoSrc,
          imageSrc,
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
          await DataStore.save(new Slider(modelFields));
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
      {...getOverrideProps(overrides, "SliderCreateForm")}
    >
      <TextField
        label="Page"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Page: value,
              videoSrc,
              imageSrc,
            };
            const result = onChange(modelFields);
            value = result?.Page ?? value;
          }
          if (errors.Page?.hasError) {
            runValidationTasks("Page", value);
          }
          setPage(value);
        }}
        onBlur={() => runValidationTasks("Page", Page)}
        errorMessage={errors.Page?.errorMessage}
        hasError={errors.Page?.hasError}
        {...getOverrideProps(overrides, "Page")}
      ></TextField>
      <TextField
        label="Video src"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Page,
              videoSrc: value,
              imageSrc,
            };
            const result = onChange(modelFields);
            value = result?.videoSrc ?? value;
          }
          if (errors.videoSrc?.hasError) {
            runValidationTasks("videoSrc", value);
          }
          setVideoSrc(value);
        }}
        onBlur={() => runValidationTasks("videoSrc", videoSrc)}
        errorMessage={errors.videoSrc?.errorMessage}
        hasError={errors.videoSrc?.hasError}
        {...getOverrideProps(overrides, "videoSrc")}
      ></TextField>
      <TextField
        label="Image src"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Page,
              videoSrc,
              imageSrc: value,
            };
            const result = onChange(modelFields);
            value = result?.imageSrc ?? value;
          }
          if (errors.imageSrc?.hasError) {
            runValidationTasks("imageSrc", value);
          }
          setImageSrc(value);
        }}
        onBlur={() => runValidationTasks("imageSrc", imageSrc)}
        errorMessage={errors.imageSrc?.errorMessage}
        hasError={errors.imageSrc?.hasError}
        {...getOverrideProps(overrides, "imageSrc")}
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
