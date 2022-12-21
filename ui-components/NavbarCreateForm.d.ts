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
export declare type NavbarCreateFormInputValues = {
    Links?: string[];
};
export declare type NavbarCreateFormValidationValues = {
    Links?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavbarCreateFormOverridesProps = {
    NavbarCreateFormGrid?: FormProps<GridProps>;
    Links?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NavbarCreateFormProps = React.PropsWithChildren<{
    overrides?: NavbarCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NavbarCreateFormInputValues) => NavbarCreateFormInputValues;
    onSuccess?: (fields: NavbarCreateFormInputValues) => void;
    onError?: (fields: NavbarCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: NavbarCreateFormInputValues) => NavbarCreateFormInputValues;
    onValidate?: NavbarCreateFormValidationValues;
} & React.CSSProperties>;
export default function NavbarCreateForm(props: NavbarCreateFormProps): React.ReactElement;
