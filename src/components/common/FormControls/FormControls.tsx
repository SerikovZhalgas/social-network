import React from "react";
import styles from './FormControls.module.css'
import {Field, Validator} from "redux-form";

const FormControl = ({input, meta: {touched, error, ...restProps}, children}: any) => {
    const hasError = touched && error
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

export const createField = (placeholder: string | null, name: string, validators: Array<Validator>, component: (props: any) => JSX.Element,props ={}, text: string|null = '') => {
    return (
        <div>
            <Field
                placeholder={placeholder}
                name={name}
                validate={validators}
                component={Input}
                {...props}
            />{text}
        </div>
    )
}