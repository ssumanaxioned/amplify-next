/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { About } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AboutUpdateFormInputValues = {};
export declare type AboutUpdateFormValidationValues = {};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AboutUpdateFormOverridesProps = {
    AboutUpdateFormGrid?: FormProps<GridProps>;
} & EscapeHatchProps;
export declare type AboutUpdateFormProps = React.PropsWithChildren<{
    overrides?: AboutUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    about?: About;
    onSubmit?: (fields: AboutUpdateFormInputValues) => AboutUpdateFormInputValues;
    onSuccess?: (fields: AboutUpdateFormInputValues) => void;
    onError?: (fields: AboutUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: AboutUpdateFormInputValues) => AboutUpdateFormInputValues;
    onValidate?: AboutUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AboutUpdateForm(props: AboutUpdateFormProps): React.ReactElement;
