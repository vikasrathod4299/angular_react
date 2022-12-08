
import { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import './App.css';
import InputsComponents from './components/InputsComponents';
function App() {
  let {register, control,handleSubmit,formState:{errors}} = useForm({ mode: "onBlur"})
  let {fields,append,remove} = useFieldArray({control,name:'eme'})
  let [studentList, setStudentList] = useState();
  const submit = (data)=>{    
    setStudentList([...studentList,data])
  }
  
  const addEme=()=>{
    append({Ename:'',Enumber:''})
  }

  return (
    <div className="App">
    <div className="container">
    <form onSubmit={handleSubmit(submit)}>
      <div className="d-flex justify-content-between">
        <div id="student">
          <h3>Student Details :-</h3>
            <div>
              <InputsComponents inputType='text' label={'First Name'} fieldName='SfirstName' register={register} errors={errors} placeHolder="Enter First Name"> </InputsComponents>
              {errors.SfirstName && <span className='text-danger'>This field is required❗</span>}
              <InputsComponents inputType='text' label={'Middle Name'} fieldName='SmiddleName' register={register} errors={errors} placeHolder="Enter Middle Name"> </InputsComponents>
              {errors.SmiddleName && <span className='text-danger'>This field is required❗</span>}
              <InputsComponents inputType='text' label={'Last Name'} fieldName='SlastName' register={register} errors={errors} placeHolder="Enter Last Name"> </InputsComponents>
              {errors.SlastName && <span className='text-danger'>{errors.SlastName?.message}</span>}      
            </div>
            <div>
            <InputsComponents inputType='date' label={'Date Of Birth'} fieldName='dob' register={register} errors={errors} placeHolder="Birth Date"> </InputsComponents>
            {errors.dob && <span className='text-danger'>This field is required❗</span>}

              <div className="form-group my-3">
                <label htmlFor="birthPlace">Birth Place:-</label>
                <input className="form-control" {...register('birthPlace')} type="text" id="birthPlace" name="birthPlace"  placeholder="Enter Birth Place"/>  
              </div>

              <div className="form-group my-3">
                <label htmlFor="firstLang">First Language:-</label>
                <input  className="form-control" {...register('firstLang')} type="text" id="firstLang" name="firstLang"  placeholder="Enter First Language"/>
              </div>
            </div>

            <div >
              <div className="form-group my-3">
                <label htmlFor="city">City:-</label>
                <input  className="form-control" {...register('city')} type="text" id="city" name="city"  placeholder="Enter Your City"/>  
              </div>

              <div className="form-group my-3">
                <label htmlFor="State">State:-</label>
                <input  className="form-control" {...register('State')} type="text" id="State" name="State"  placeholder="Enter Your State"/>
              </div>              

              <div className="form-group my-3">
                <label htmlFor="pin">Enter Pin Code:-</label>
                <input  className="form-control" {...register('pin')} type="text" id="pin" name="pin"  placeholder="Pincode"/>
              </div>

            </div>
        </div>
        <div id="father" >
          <h3>Father's Details :-</h3>
          <div >
              <InputsComponents inputType='text' label={'First Name'} fieldName='FfirstName' register={register} errors={errors} placeHolder="Enter First Name"> </InputsComponents>
              {errors.FfirstName && <span className='text-danger'>This field is required❗</span>}
              <InputsComponents inputType='text' label={'Middle Name'} fieldName='FmiddleName' register={register} errors={errors} placeHolder="Enter Middle Name"> </InputsComponents>
              {errors.FmiddleName && <span className='text-danger'>This field is required❗</span>}
              <InputsComponents inputType='text' label={'Last Name'} fieldName='FlastName' register={register} errors={errors} placeHolder="Enter Last Name"> </InputsComponents>
              {errors.FlastName && <span className='text-danger'>This field is required❗</span>} 
          </div>

          <div className="form-group my-3">
            <label htmlFor="email">Email :-</label>
            <input  className="form-control" {...register('Femail')} type="email" id="Femail" name="Femail"  placeholder="Enter Email"/>            
          </div>

          <div className="form-group my-3">
            <label htmlFor="education">Education Qualification:-</label>
            <input  className="form-control" {...register('Feducation')} type="text" id="Feducation" name="Feducation"  placeholder="Enter Education"/>
          </div>
          
          <div className="form-group my-3">
            <label htmlFor="profession">Profession:-</label>
            <input  className="form-control" {...register('Fprofession')} type="text" id="Fprofession" name="Fprofession"  placeholder="Enter Profession"/>  
          </div>

          <div className="form-group my-3">
            <label htmlFor="designation">Designation:-</label>
            <input  className="form-control" {...register('Fdesignation')} type="text" id="Fdesignation" name="Fdesignation"  placeholder="Enter Designation"/>
          </div>
          
          <div className="form-group my-3">
            <label htmlFor="moblie">Moblie Number:-</label>
            <input  className="form-control" {...register('Fmoblie')} type="text" id="Fmoblie" name="Fmoblie"  placeholder="Enter Mobile Number"/>
          </div>
        </div>  
        <div  id="mother">
          <h3>Mother's Details :-</h3>
          <div>
            <InputsComponents inputType='text' label={'First Name'} fieldName='MfirstName' register={register} errors={errors} placeHolder="Enter First Name"> </InputsComponents>
              {errors.MfirstName && <span className='text-danger'>This field is required❗</span>}
              <InputsComponents inputType='text' label={'Middle Name'} fieldName='MmiddleName' register={register} errors={errors} placeHolder="Enter Middle Name"> </InputsComponents>
              {errors.MmiddleName && <span className='text-danger'>This field is required❗</span>}
              <InputsComponents inputType='text' label={'Last Name'} fieldName='MlastName' register={register} errors={errors} placeHolder="Enter Last Name"> </InputsComponents>
              {errors.MlastName && <span className='text-danger'>This field is required❗</span>} 
         </div>

          <div className="form-group my-3">
            <label htmlFor="email">Email :-</label>
            <input className="form-control" {...register('Memail')} type="email" id="Memail" name="Memail"  placeholder="Enter Email"/>
          </div>

          <div className="form-group my-3">
            <label htmlFor="education">Education Qualification:-</label>
            <input className="form-control" {...register('Meducation')} type="text" id="Meducation" name="Meducation"  placeholder="Enter Education"/>
          </div>

          <div className="form-group my-3">
            <label htmlFor="profession">Profession:-</label>
            <input   className="form-control" {...register('Mprofession')} type="text" id="Mprofession" name="Mprofession"  placeholder="Enter Profession"/>
          </div>

          <div className="form-group my-3">
            <label htmlFor="designation">Designation:-</label>
            <input   className="form-control" {...register('Mdesignation')} type="text" id="Mdesignation" name="Mdesignation"  placeholder="Enter Designation"/>
          </div>

          <div className="form-group my-3">
            <label htmlFor="moblie">Moblie Number:-</label>
            <input className="form-control" {...register('Mmobile')} type="text" id="Mmoblie" name="Mmoblie"  placeholder="Enter Mobile Number"/>
          </div>   
        </div>

        <div>
          <h4>Emergency contect :-</h4>
          <div >
            <div  className="form-group my-3">
              {fields.map((item,index)=>{
                return (<div>
                          <div>
                            <label htmlFor="designation">Name:-</label>
                            <input  className="form-control" {...register(`eme.${index}.Ename`)} type="text" id="Ename" name="Ename" placeholder="Enter Name"/>                      
                          </div>
                          <div>
                            <label htmlFor="designation">Number:-</label>
                            <input  className="form-control" {...register(`eme.${index}.Enumber`)} type="text" id="Enumber" name="Enumber" placeholder="Enter Number"/>  
                          </div>
                        </div>)
              })}
            </div>  
          </div>
          <div className='d-flex justify-content-between'>
            <button type="button"  onClick={addEme} className='btn btn-warning'>Add</button>
            <button type="button" onClick={(e)=>remove(fields.length-1)} className='btn btn-danger'>Remove</button>
          </div>

        </div>
      </div>
      <div className='text-center'>
          <button className="btn btn-success" type="submit">Submit</button>     
      </div>
      </form>
  </div>
    </div>
  );
}

export default App;
