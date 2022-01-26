import React from "react";
import { Button } from 'antd';
import { Link } from 'react-router-dom'

const CreateNewForm = () => {
    return (
        <div>
            <Button type="primary">
                <Link to={`/forms/create`}>
                    Create New Form    
                </Link>
            </Button>
        </div>
    )
}

export default CreateNewForm;