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
export declare type PagesCreateFormInputValues = {
    slug?: string;
    title?: string;
};
export declare type PagesCreateFormValidationValues = {
    slug?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PagesCreateFormOverridesProps = {
    PagesCreateFormGrid?: FormProps<GridProps>;
    slug?: FormProps<TextFieldProps>;
    title?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PagesCreateFormProps = React.PropsWithChildren<{
    overrides?: PagesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PagesCreateFormInputValues) => PagesCreateFormInputValues;
    onSuccess?: (fields: PagesCreateFormInputValues) => void;
    onError?: (fields: PagesCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: PagesCreateFormInputValues) => PagesCreateFormInputValues;
    onValidate?: PagesCreateFormValidationValues;
} & React.CSSProperties>;
export default function PagesCreateForm(props: PagesCreateFormProps): React.ReactElement;
