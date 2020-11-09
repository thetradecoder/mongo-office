import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "jquery/dist/jquery.js";

export default function UserLogin(){
    const [username, setUsername]=useState("");
    const [password, setPassword]=useState("");

    function onChangeUsername(e){
        setUsername(e.target.value);
    }
    function onChangePassword(e){
        setPassword(e.target.value);
    }


    function onSubmitUserLogin(e){
        e.preventDefault();
        
    }

    return(
        <div>
            <form onSubmit={onSubmitUserLogin}>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" onChange={onChangeUsername} placeholder="username" requireed/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" onChange={onChangePassword} placeholder="password" required/>
                </div>

            </form>

        </div>
    );
}