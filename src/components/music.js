import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';



const Music = (props) => {

    const dispatch = useDispatch();
    const favorisList =  useSelector((state) => state.todo)


    const {uniquemusic} = props


    const [favoris, setFavoris] = React.useState([]);
    const [save, setSave] = React.useState([]);
    const [count, setCount] = React.useState(0);
    var tab = [];
    
   const addFavoris = (uniquemusic) => {
        //e.preventDefault();

        console.log(typeof(uniquemusic), 'voir le contenu')

      
            //setFavoris(favoris => [...favoris,uniquemusic]);

        
              }

    if(favoris.length === 0 )
    {
        return (
            <>  
            <div className="col-sm-2">
                <div className="card">
                    <img src={uniquemusic.artworkUrl100} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{uniquemusic.artistName}</h5>
                        <p className="card-text">{uniquemusic.collectionCensoredName}.</p>
                        <a href="#"  className="btn btn-primary"  onClick={addFavoris(uniquemusic)}>Ajouter à mon favoris</a>
                        <br/><br/>
                        <ReactAudioPlayer
                            src={uniquemusic.previewUrl}
                            controls
                        />
                    </div>
                </div>
             </div>
            </>
    
            
        )
    } else 
    {
        return (
            <>  
            <div className="col-sm-2"> 
                <div className="card">
                    <img src={uniquemusic.artworkUrl100} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{uniquemusic.artistName}</h5>
                        <p className="card-text">{uniquemusic.collectionCensoredName}.</p>
                        <a href="#"  className="btn btn-primary"  onClick={()=> addFavoris(uniquemusic) }>Ajouter à mon favoris</a>
                        <br/><br/>
                        <ReactAudioPlayer
                            src={uniquemusic.previewUrl}
                            controls
                        />
                    </div>
                </div>
             </div>
            </>
    
            
        )
    }

    
}

export default Music

