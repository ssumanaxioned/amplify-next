/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SliderCreateFormInputValues = {
    Page?: string;
    videoSrc?: string;
    imageSrc?: string;
    workImage?: string;
    slug?: string;
};
export declare type SliderCreateFormValidationValues = {
    Page?: ValidationFunction<string>;
    videoSrc?: ValidationFunction<string>;
    imageSrc?: ValidationFunction<string>;
    workImage?: ValidationFunction<string>;
    slug?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SliderCreateFormOverridesProps = {
    SliderCreateFormGrid?: FormProps<GridProps>;
    Page?: FormProps<TextFieldProps>;
    videoSrc?: FormProps<TextFieldProps>;
    imageSrc?: FormProps<TextFieldProps>;
    workImage?: FormProps<TextFieldProps>;
    slug?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SliderCreateFormProps = React.PropsWithChildren<{
    overrides?: SliderCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SliderCreateFormInputValues) => SliderCreateFormInputValues;
    onSuccess?: (fields: SliderCreateFormInputValues) => void;
    onError?: (fields: SliderCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: SliderCreateFormInputValues) => SliderCreateFormInputValues;
    onValidate?: SliderCreateFormValidationValues;
} & React.CSSProperties>;
export default function SliderCreateForm(props: SliderCreateFormProps): React.ReactElement;
