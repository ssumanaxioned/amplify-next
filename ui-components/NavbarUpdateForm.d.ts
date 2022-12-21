/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Navbar } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NavbarUpdateFormInputValues = {
    Links?: string[];
};
export declare type NavbarUpdateFormValidationValues = {
    Links?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavbarUpdateFormOverridesProps = {
    NavbarUpdateFormGrid?: FormProps<GridProps>;
    Links?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NavbarUpdateFormProps = React.PropsWithChildren<{
    overrides?: NavbarUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    navbar?: Navbar;
    onSubmit?: (fields: NavbarUpdateFormInputValues) => NavbarUpdateFormInputValues;
    onSuccess?: (fields: NavbarUpdateFormInputValues) => void;
    onError?: (fields: NavbarUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: NavbarUpdateFormInputValues) => NavbarUpdateFormInputValues;
    onValidate?: NavbarUpdateFormValidationValues;
} & React.CSSProperties>;
export default function NavbarUpdateForm(props: NavbarUpdateFormProps): React.ReactElement;
