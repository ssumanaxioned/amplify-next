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
export declare type WorkCreateFormInputValues = {
    bannerImage?: string;
    slug?: string;
    otherWork?: string[];
};
export declare type WorkCreateFormValidationValues = {
    bannerImage?: ValidationFunction<string>;
    slug?: ValidationFunction<string>;
    otherWork?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WorkCreateFormOverridesProps = {
    WorkCreateFormGrid?: FormProps<GridProps>;
    bannerImage?: FormProps<TextFieldProps>;
    slug?: FormProps<TextFieldProps>;
    otherWork?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type WorkCreateFormProps = React.PropsWithChildren<{
    overrides?: WorkCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: WorkCreateFormInputValues) => WorkCreateFormInputValues;
    onSuccess?: (fields: WorkCreateFormInputValues) => void;
    onError?: (fields: WorkCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: WorkCreateFormInputValues) => WorkCreateFormInputValues;
    onValidate?: WorkCreateFormValidationValues;
} & React.CSSProperties>;
export default function WorkCreateForm(props: WorkCreateFormProps): React.ReactElement;
