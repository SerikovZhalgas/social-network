import React from 'react'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import { required } from '../../utils/validators/validators';
import {Input} from "../common/FormControls/FormControls";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../Redux/hooks";
import style from "../common/FormControls/FormControls.module.css";


type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    error: string
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={'Email'}
                    name={'email'}
                    validate={[required]}
                    component={Input}
                />
            </div>
            <div>
                <Field
                    placeholder={'Password'}
                    name={'password'}
                    type={'password'}
                    validate={[required]}
                    component={Input}
                />
            </div>
            <div>
                <Field
                    type={"checkbox"}
                    name={'rememberMe'}
                    component={Input}
                /> remember me
            </div>
            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form:'login'})(LoginForm)

export const Login = () => {

    const isAuth = useAppSelector(state => state.auth.isAuth)
    const dispatch = useAppDispatch()

    const onSubmit = (formData: FormDataType) => {
        const {email, password, rememberMe} = {...formData}
        dispatch(login(email, password, rememberMe))
    }
    if(isAuth){
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}