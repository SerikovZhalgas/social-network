import React from 'react'
import {InjectedFormProps, reduxForm} from "redux-form";
import { required } from '../../utils/validators/validators';
import {createField, Input} from "../common/FormControls/FormControls";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../Redux/hooks";
import style from "../common/FormControls/FormControls.module.css";


type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    error: string
    captcha: null
}

type LoginPageType = {
    captchaUrl: null | string
}

const LoginForm: React.FC<InjectedFormProps<FormDataType, LoginPageType> & LoginPageType> = ({handleSubmit, error, captchaUrl}) => {

    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', [required],Input,{}, null)}
            {createField('Password', 'password', [required],Input,{type: 'password'}, null)}
            {createField(null, 'rememberMe', [],Input,{type: 'checkbox'}, 'remember me')}

            {captchaUrl && <img src={captchaUrl} alt="captcha"/>}
            {captchaUrl && createField("Symbols from image", 'captcha', [required],Input,{})}

            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType, LoginPageType>({form:'login'})(LoginForm)

const Login = () => {

    const isAuth = useAppSelector(state => state.auth.isAuth)
    const captchaUrl = useAppSelector(state => state.auth.captchaUrl)
    const dispatch = useAppDispatch()

    const onSubmit = (formData: FormDataType) => {
        const {email, password, rememberMe, captcha} = {...formData}
        dispatch(login(email, password, rememberMe, captcha))
    }
    if(isAuth){
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
    </div>
}

export default Login