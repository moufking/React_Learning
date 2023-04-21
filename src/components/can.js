import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';



const CanSee = ({ children, user }) => {


    if(user ==="moufid")
    {

        return (
            <>
                    {children}
            </>
    
        )

    }else {

        return (
            <>
            <h5>Impossible d'afficher les informations </h5>
            </>
    
        )

    }


    

}

export default CanSee