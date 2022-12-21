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
export declare type TitleCreateFormInputValues = {
    en?: string;
    es?: string;
    fr?: string;
};
export declare type TitleCreateFormValidationValues = {
    en?: ValidationFunction<string>;
    es?: ValidationFunction<string>;
    fr?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TitleCreateFormOverridesProps = {
    TitleCreateFormGrid?: FormProps<GridProps>;
    en?: FormProps<TextFieldProps>;
    es?: FormProps<TextFieldProps>;
    fr?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TitleCreateFormProps = React.PropsWithChildren<{
    overrides?: TitleCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TitleCreateFormInputValues) => TitleCreateFormInputValues;
    onSuccess?: (fields: TitleCreateFormInputValues) => void;
    onError?: (fields: TitleCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: TitleCreateFormInputValues) => TitleCreateFormInputValues;
    onValidate?: TitleCreateFormValidationValues;
} & React.CSSProperties>;
export default function TitleCreateForm(props: TitleCreateFormProps): React.ReactElement;
