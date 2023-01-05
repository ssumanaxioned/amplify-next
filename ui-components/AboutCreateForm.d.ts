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
export declare type AboutCreateFormInputValues = {};
export declare type AboutCreateFormValidationValues = {};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AboutCreateFormOverridesProps = {
    AboutCreateFormGrid?: FormProps<GridProps>;
} & EscapeHatchProps;
export declare type AboutCreateFormProps = React.PropsWithChildren<{
    overrides?: AboutCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AboutCreateFormInputValues) => AboutCreateFormInputValues;
    onSuccess?: (fields: AboutCreateFormInputValues) => void;
    onError?: (fields: AboutCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: AboutCreateFormInputValues) => AboutCreateFormInputValues;
    onValidate?: AboutCreateFormValidationValues;
} & React.CSSProperties>;
export default function AboutCreateForm(props: AboutCreateFormProps): React.ReactElement;
