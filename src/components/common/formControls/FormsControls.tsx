import React from 'react';
import styles from './FormsControls.module.css'
import {Field, WrappedFieldsProps} from 'redux-form';

const FormControl: React.FC<any> = (props) => {
    const { meta, children} = props
    const hasError = meta.touched && meta.error
    return (
        <div className={`${styles.formControl} ${hasError && styles.error} `}>
            <div>
                {children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};

export const Textarea = (props: any) => {
    const {input, meta, children, ...restProps} = props;
    return (
        <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
    )
};

export const Input = (props: any) => {
    const {input, meta, children, ...restProps} = props;
    return (
        <FormControl {...props}><input {...input} {...restProps} /></FormControl>

    )
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