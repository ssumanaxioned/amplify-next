/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type HeaderCreateFormInputValues = {};
export declare type HeaderCreateFormValidationValues = {};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeaderCreateFormOverridesProps = {
    HeaderCreateFormGrid?: FormProps<GridProps>;
} & EscapeHatchProps;
export declare type HeaderCreateFormProps = React.PropsWithChildren<{
    overrides?: HeaderCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: HeaderCreateFormInputValues) => HeaderCreateFormInputValues;
    onSuccess?: (fields: HeaderCreateFormInputValues) => void;
    onError?: (fields: HeaderCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: HeaderCreateFormInputValues) => HeaderCreateFormInputValues;
    onValidate?: HeaderCreateFormValidationValues;
} & React.CSSProperties>;
export default function HeaderCreateForm(props: HeaderCreateFormProps): React.ReactElement;
