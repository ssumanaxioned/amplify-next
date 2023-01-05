/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Pages } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PagesUpdateFormInputValues = {
    slug?: string;
    title?: string;
};
export declare type PagesUpdateFormValidationValues = {
    slug?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PagesUpdateFormOverridesProps = {
    PagesUpdateFormGrid?: FormProps<GridProps>;
    slug?: FormProps<TextFieldProps>;
    title?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PagesUpdateFormProps = React.PropsWithChildren<{
    overrides?: PagesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    pages?: Pages;
    onSubmit?: (fields: PagesUpdateFormInputValues) => PagesUpdateFormInputValues;
    onSuccess?: (fields: PagesUpdateFormInputValues) => void;
    onError?: (fields: PagesUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: PagesUpdateFormInputValues) => PagesUpdateFormInputValues;
    onValidate?: PagesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PagesUpdateForm(props: PagesUpdateFormProps): React.ReactElement;
