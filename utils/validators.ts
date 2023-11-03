import {
    helpers,
    minLength as minLengthValidator,
    email as emailValidator,
} from '@vuelidate/validators'

const requiredValidator = (value: any) => !!value


export const required = (message: string) => helpers.withMessage(message, requiredValidator)

export const minLength = (message: string, min: number) => helpers.withMessage(message, minLengthValidator(min))

export const email = (message: string) => helpers.withMessage(message, emailValidator)
