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
export declare type AssestsCreateFormInputValues = {
    url?: string;
};
export declare type AssestsCreateFormValidationValues = {
    url?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AssestsCreateFormOverridesProps = {
    AssestsCreateFormGrid?: FormProps<GridProps>;
    url?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AssestsCreateFormProps = React.PropsWithChildren<{
    overrides?: AssestsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AssestsCreateFormInputValues) => AssestsCreateFormInputValues;
    onSuccess?: (fields: AssestsCreateFormInputValues) => void;
    onError?: (fields: AssestsCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: AssestsCreateFormInputValues) => AssestsCreateFormInputValues;
    onValidate?: AssestsCreateFormValidationValues;
} & React.CSSProperties>;
export default function AssestsCreateForm(props: AssestsCreateFormProps): React.ReactElement;
