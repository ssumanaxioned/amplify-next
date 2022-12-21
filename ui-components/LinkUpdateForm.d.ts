/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Link } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LinkUpdateFormInputValues = {
    Title?: string;
    slug?: string;
    linkTitleId?: string;
};
export declare type LinkUpdateFormValidationValues = {
    Title?: ValidationFunction<string>;
    slug?: ValidationFunction<string>;
    linkTitleId?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LinkUpdateFormOverridesProps = {
    LinkUpdateFormGrid?: FormProps<GridProps>;
    Title?: FormProps<SelectFieldProps>;
    slug?: FormProps<TextFieldProps>;
    linkTitleId?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LinkUpdateFormProps = React.PropsWithChildren<{
    overrides?: LinkUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    link?: Link;
    onSubmit?: (fields: LinkUpdateFormInputValues) => LinkUpdateFormInputValues;
    onSuccess?: (fields: LinkUpdateFormInputValues) => void;
    onError?: (fields: LinkUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: LinkUpdateFormInputValues) => LinkUpdateFormInputValues;
    onValidate?: LinkUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LinkUpdateForm(props: LinkUpdateFormProps): React.ReactElement;
