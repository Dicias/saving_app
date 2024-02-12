import * as Yup from 'yup';

export const RegisterSchema = Yup.object().shape({
  email: Yup.string().email('correo invalido').required('El campo no puede estar vacio'),
  username: Yup.string().min(3, 'Usuario invalido').max(30, 'Usuario invalido').required('El campo no puede estar vacio'),
  password: Yup.string().min(8, 'la contraseña debe contener 8 caracteres minimo').max(30, 'Usuario invalido').required('El campo no puede estar vacio')
  .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, ' Debe contener mayusculas y caracteres especiales')
})

export const LoginSchema = Yup.object().shape({
  username: Yup.string().required('El campo no puede estar vacio'),
  password: Yup.string().required('El campo no puede estar vacio')
})