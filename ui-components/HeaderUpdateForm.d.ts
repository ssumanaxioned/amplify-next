/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Header } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type HeaderUpdateFormInputValues = {};
export declare type HeaderUpdateFormValidationValues = {};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeaderUpdateFormOverridesProps = {
    HeaderUpdateFormGrid?: FormProps<GridProps>;
} & EscapeHatchProps;
export declare type HeaderUpdateFormProps = React.PropsWithChildren<{
    overrides?: HeaderUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    header?: Header;
    onSubmit?: (fields: HeaderUpdateFormInputValues) => HeaderUpdateFormInputValues;
    onSuccess?: (fields: HeaderUpdateFormInputValues) => void;
    onError?: (fields: HeaderUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: HeaderUpdateFormInputValues) => HeaderUpdateFormInputValues;
    onValidate?: HeaderUpdateFormValidationValues;
} & React.CSSProperties>;
export default function HeaderUpdateForm(props: HeaderUpdateFormProps): React.ReactElement;
