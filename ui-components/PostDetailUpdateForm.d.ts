/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { PostDetail } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PostDetailUpdateFormInputValues = {
    title?: string;
    subtitle?: string;
    description?: string;
    images?: string[];
    slug?: string;
    Post?: string;
    postDetailPostId?: string;
};
export declare type PostDetailUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    subtitle?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    images?: ValidationFunction<string>;
    slug?: ValidationFunction<string>;
    Post?: ValidationFunction<string>;
    postDetailPostId?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PostDetailUpdateFormOverridesProps = {
    PostDetailUpdateFormGrid?: FormProps<GridProps>;
    title?: FormProps<TextFieldProps>;
    subtitle?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
    images?: FormProps<TextFieldProps>;
    slug?: FormProps<TextFieldProps>;
    Post?: FormProps<SelectFieldProps>;
    postDetailPostId?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PostDetailUpdateFormProps = React.PropsWithChildren<{
    overrides?: PostDetailUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    postDetail?: PostDetail;
    onSubmit?: (fields: PostDetailUpdateFormInputValues) => PostDetailUpdateFormInputValues;
    onSuccess?: (fields: PostDetailUpdateFormInputValues) => void;
    onError?: (fields: PostDetailUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: PostDetailUpdateFormInputValues) => PostDetailUpdateFormInputValues;
    onValidate?: PostDetailUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PostDetailUpdateForm(props: PostDetailUpdateFormProps): React.ReactElement;
