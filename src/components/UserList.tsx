import React, {FC} from 'react';
import {useSelector} from 'react-redux'
import {apiUseSelector} from "../hooks/hooks";

const UserList:FC = () => {
    const {users, error, loading} = apiUseSelector(state => state.users)


    return (
        <div>
            
        </div>
    );
};

export default UserList;