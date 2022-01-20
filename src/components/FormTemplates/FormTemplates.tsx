import Header from './Header';
import CreateNewForm from '../FormCreate/CreateNewForm';
import FormTable from './FormTable';
import './FormTable.css'
import './FormTemplates.css'
const FormTemplates = ()  => {
    return(
        <div>
            <Header/>
            <div className='form-templates'>
                <div className='form-title'>
                    <h1>Form Templates</h1>
                </div>
                <div className='btn-create'>
                    <CreateNewForm/>
                </div>
            </div>
            <div className='form-table'>
                <FormTable/>    
            </div>
            
        </div>
    )
}

export default FormTemplates;