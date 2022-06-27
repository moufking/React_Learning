import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';



const FavorisList = (props) => {

    const dispatch = useDispatch();
    const favorisList =  useSelector((state) => state.todo)


    const {favoris} = props

    // eslint-disable-next-line no-undef
   
    
   const deleteFavoris = (favoris) => {
        //e.preventDefault();
        dispatch({
            type: 'todo/deleteFavoris',
            payload:  favoris.trackId
        })

    }


        return (
            <>  
            <div className="col-sm-2">
                <div className="card">
                    <img src={favoris.artworkUrl100} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{favoris.artistName}</h5>
                        <p className="card-text">{favoris.collectionCensoredName}.</p>
                        <button className="btn btn-sm ml-auto btn-outline-success" onClick={()=> deleteFavoris(favoris) }>Supprimer</button>
                        <br/><br/>

                        <ReactAudioPlayer
                            src={favoris.previewUrl}
                            controls
                        />
                    </div>
                </div>
             </div>
            </>   
        )


    
}

export default FavorisList

