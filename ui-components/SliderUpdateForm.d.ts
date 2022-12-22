/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Slider } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SliderUpdateFormInputValues = {
    Page?: string;
    videoSrc?: string;
    imageSrc?: string;
};
export declare type SliderUpdateFormValidationValues = {
    Page?: ValidationFunction<string>;
    videoSrc?: ValidationFunction<string>;
    imageSrc?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SliderUpdateFormOverridesProps = {
    SliderUpdateFormGrid?: FormProps<GridProps>;
    Page?: FormProps<TextFieldProps>;
    videoSrc?: FormProps<TextFieldProps>;
    imageSrc?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SliderUpdateFormProps = React.PropsWithChildren<{
    overrides?: SliderUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    slider?: Slider;
    onSubmit?: (fields: SliderUpdateFormInputValues) => SliderUpdateFormInputValues;
    onSuccess?: (fields: SliderUpdateFormInputValues) => void;
    onError?: (fields: SliderUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: SliderUpdateFormInputValues) => SliderUpdateFormInputValues;
    onValidate?: SliderUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SliderUpdateForm(props: SliderUpdateFormProps): React.ReactElement;
