/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Title } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TitleUpdateFormInputValues = {
    en?: string;
    es?: string;
    fr?: string;
};
export declare type TitleUpdateFormValidationValues = {
    en?: ValidationFunction<string>;
    es?: ValidationFunction<string>;
    fr?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TitleUpdateFormOverridesProps = {
    TitleUpdateFormGrid?: FormProps<GridProps>;
    en?: FormProps<TextFieldProps>;
    es?: FormProps<TextFieldProps>;
    fr?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TitleUpdateFormProps = React.PropsWithChildren<{
    overrides?: TitleUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    title?: Title;
    onSubmit?: (fields: TitleUpdateFormInputValues) => TitleUpdateFormInputValues;
    onSuccess?: (fields: TitleUpdateFormInputValues) => void;
    onError?: (fields: TitleUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: TitleUpdateFormInputValues) => TitleUpdateFormInputValues;
    onValidate?: TitleUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TitleUpdateForm(props: TitleUpdateFormProps): React.ReactElement;
