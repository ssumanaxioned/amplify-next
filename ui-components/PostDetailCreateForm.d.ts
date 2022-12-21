/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PostDetailCreateFormInputValues = {
    title?: string;
    subtitle?: string;
    description?: string;
    images?: string[];
    slug?: string;
    Post?: string;
    postDetailPostId?: string;
};
export declare type PostDetailCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    subtitle?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    images?: ValidationFunction<string>;
    slug?: ValidationFunction<string>;
    Post?: ValidationFunction<string>;
    postDetailPostId?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PostDetailCreateFormOverridesProps = {
    PostDetailCreateFormGrid?: FormProps<GridProps>;
    title?: FormProps<TextFieldProps>;
    subtitle?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
    images?: FormProps<TextFieldProps>;
    slug?: FormProps<TextFieldProps>;
    Post?: FormProps<SelectFieldProps>;
    postDetailPostId?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PostDetailCreateFormProps = React.PropsWithChildren<{
    overrides?: PostDetailCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PostDetailCreateFormInputValues) => PostDetailCreateFormInputValues;
    onSuccess?: (fields: PostDetailCreateFormInputValues) => void;
    onError?: (fields: PostDetailCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: PostDetailCreateFormInputValues) => PostDetailCreateFormInputValues;
    onValidate?: PostDetailCreateFormValidationValues;
} & React.CSSProperties>;
export default function PostDetailCreateForm(props: PostDetailCreateFormProps): React.ReactElement;
