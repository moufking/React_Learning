import React from 'react';
import { Redirect } from 'react-router-dom';
import apiClient from '../services/api';
import Music from './music';

import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import FavorisList from './favorisList';

const Login = (props) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [hashcode, setHashcode] = React.useState('');
    const [music, setMusic] = React.useState([]);
    const [toHome, setToHome] = React.useState(false);
    const [authError, setAuthError] = React.useState(false);
    const [unknownError, setUnknownError] = React.useState(false);
    

    const dispatch = useDispatch();
    const favorisList =  useSelector((state) => state.todo)

    const handleSubmit = (e) => {
        e.preventDefault();

        setAuthError(false);
        setUnknownError(false);
        apiClient.get('?term='+ hashcode)
        .then(response => {
           setMusic(response.data.results)
           console.log(response.data.results, 'voir les musiques', hashcode)
           // update music
        }).catch(error => {
            if (error.response && error.response.status === 422) {
                console.log(error.response, 'response')
                setAuthError(true);
            } else {
                setUnknownError(true);
                console.error(error);
            }
        });
    }
    if (toHome === true) {
        return <Redirect to='/' />
    }

    
    return (
        <>
            <h3>Search Music</h3>
            
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-3 offset-md-3">
                            <div className="form-group">
                                    <input
                                        type="text"
                                        name="hashcode"
                                        className={"form-control" + (authError || unknownError ? ' is-invalid' : '')}
                                        placeholder="Hashcode"
                                        value={hashcode}
                                        onChange={e => setHashcode(e.target.value)}
                                        required
                                    />
                            </div>
                            {authError ? <div className="alert alert-danger">Credentials not recognised. Please try again.</div> : null}
                            {unknownError ? <div className="alert alert-danger">There was an error submitting your details.</div> : null}
                        </div>

                        <div className="col-sm-4">
                            <button type="submit" className="btn btn-primary">Seach Musique </button>
                        </div>
                    </div>
                </form>
        
            <br/><br/>

            <h3> Liste de vos favoris</h3>
            <div className="row">
                {
                     favorisList.map((m) => <FavorisList favoris ={m} key={m.trackId}/>)
                }
                </div>

            <hr/>

            <h3> Resultat de vos recherche</h3>
        
        
            <div className="row">
                {
                     music.map((m) => <Music uniquemusic ={m} key={m.trackId}/>)
                }
            </div>
            

        </>
    );
};

export default Login;