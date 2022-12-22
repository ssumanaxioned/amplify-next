/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Work } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type WorkUpdateFormInputValues = {
    bannerImage?: string;
    slug?: string;
    otherWork?: string[];
};
export declare type WorkUpdateFormValidationValues = {
    bannerImage?: ValidationFunction<string>;
    slug?: ValidationFunction<string>;
    otherWork?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WorkUpdateFormOverridesProps = {
    WorkUpdateFormGrid?: FormProps<GridProps>;
    bannerImage?: FormProps<TextFieldProps>;
    slug?: FormProps<TextFieldProps>;
    otherWork?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type WorkUpdateFormProps = React.PropsWithChildren<{
    overrides?: WorkUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    work?: Work;
    onSubmit?: (fields: WorkUpdateFormInputValues) => WorkUpdateFormInputValues;
    onSuccess?: (fields: WorkUpdateFormInputValues) => void;
    onError?: (fields: WorkUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: WorkUpdateFormInputValues) => WorkUpdateFormInputValues;
    onValidate?: WorkUpdateFormValidationValues;
} & React.CSSProperties>;
export default function WorkUpdateForm(props: WorkUpdateFormProps): React.ReactElement;
