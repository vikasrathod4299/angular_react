
const InputsComponents = ({register,inputType,label,fieldName,placeHolder}) => {
  return (
    <div className="form-group my-3">
        <label htmlFor="firstName">{label}:-</label>
        <input {...register(fieldName,{required:'This field is required',minLength:{minLength:3,message:'min lenghlength is 3'}})} type={inputType} className="form-control" name={fieldName} id={fieldName} placeholder={placeHolder}/> 
    </div>
  )
}

export default InputsComponents