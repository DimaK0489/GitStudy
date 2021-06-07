import React from 'react';
import styles from './FormsControls.module.css'
import {WrappedFieldsProps} from 'redux-form';

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

export const Textarea: React.FC<WrappedFieldsProps> = (props) => {
    const {input} = props
    return <FormControl {...props}>
        <textarea {...input} {...props}/>
    </FormControl>
};
export const Input: React.FC<WrappedFieldsProps> = (props) => {
    const {input} = props
    return <FormControl {...props}>
        <input {...input} {...props}/>
    </FormControl>
};