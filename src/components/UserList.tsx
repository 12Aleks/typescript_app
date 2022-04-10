import React, {FC, useEffect} from 'react';
import {apiUseSelector, useApiDispatch} from "../hooks/hooks";
import {fetchUsers} from "../store/action-creator/user";


const UserList: FC = () => {
    const {users, error, loading} = apiUseSelector(state => state.users)
    const {fetchUsers} = useApiDispatch()

    useEffect(() => {
        fetchUsers()
    }, [])

    if(loading){
        return <h1>Loading ....</h1>
    }
    if(error){
        return <h1>Error :(</h1>
     }

    return (
        <div>
            {
                users && users.map(user =>
                    <div key={user.id}
                         style={{width: '50%', border: '1px solid black', margin: '15px', padding: '20px'}}>
                        <h3>{user.id}. {user.name}</h3>
                        <h4>User data: </h4>
                        <p>City: {user.address.city}</p>
                        <p>Street: {user.address.street}</p>
                        <p>Code: {user.address.zipcode}</p>

                    </div>
                )
            }
        </div>
    );
};

export default UserList;