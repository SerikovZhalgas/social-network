import React from 'react'
import {InjectedFormProps, reduxForm} from "redux-form";
import { required } from '../../utils/validators/validators';
import {createField} from "../common/FormControls/FormControls";
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

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error, ...restProps}) => {

    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', [required],{}, null)}
            {createField('Password', 'password', [required],{type: 'password'}, null)}
            {createField(null, 'rememberMe', [],{type: 'checkbox'}, 'remember me')}
            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form:'login'})(LoginForm)

const Login = () => {

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

export default Login