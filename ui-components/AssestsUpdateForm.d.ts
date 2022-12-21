/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Assests } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AssestsUpdateFormInputValues = {
    url?: string;
};
export declare type AssestsUpdateFormValidationValues = {
    url?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AssestsUpdateFormOverridesProps = {
    AssestsUpdateFormGrid?: FormProps<GridProps>;
    url?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AssestsUpdateFormProps = React.PropsWithChildren<{
    overrides?: AssestsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    assests?: Assests;
    onSubmit?: (fields: AssestsUpdateFormInputValues) => AssestsUpdateFormInputValues;
    onSuccess?: (fields: AssestsUpdateFormInputValues) => void;
    onError?: (fields: AssestsUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: AssestsUpdateFormInputValues) => AssestsUpdateFormInputValues;
    onValidate?: AssestsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AssestsUpdateForm(props: AssestsUpdateFormProps): React.ReactElement;
