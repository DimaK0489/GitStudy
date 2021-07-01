import React from 'react';
import styles from './FormsControls.module.css'
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from 'redux-form';

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}

const FormControl: React.FC<FormControlPropsType> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error
    return (
        <div className={`${styles.formControl} ${hasError && styles.error} `}>
            <div>
                {children}
                {hasError && <span>{error}</span>}
            </div>
        </div>
    );
};

export const Textarea = (props: WrappedFieldProps) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
};

export const Input = (props: WrappedFieldProps) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
};
export const createField = (placeholder: string | null, name: string, validators: any[],
                            component: (props: any) => JSX.Element, props?: any, text?: "" | string) => (
    <div>
        <Field placeholder={placeholder}
               name={name}
               validate={validators}
               component={component}
               {...props}
               {...text}
        />
    </div>
)