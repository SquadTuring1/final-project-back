import SongModel from "../models/Song.js" 

const getAllSongs = async(req, res, next) => {
    try{
        const songs = await SongModel.find({})
        res.status(200).send({songs: songs})
    }catch (error){
        next(error)
    }
}

const createSong = async(req, res, next) => {
   const { title, fileUrl, thumbnail, released, duration, album, genre, likedBy } = req.body
   try{
    const newSong = await SongModel.create({
        title,  
        fileUrl,
        thumbnail,
        released,
        duration,
        album,
        genre,
        likedBy
    })
    res.status(201).send({success: "Song was created", createdSong: newSong})
   } catch (error){
    next(error)
   }
}

const updateSong = async(req, res, next) => {
    const { title, fileUrl, thumbnail, released, duration, album, genre, likedBy } = req.body
    const { id } = req.params
    try{
        const songToUpdate = await SongModel.findOneAndUpdate({id: id}, {$set: {
            title, 
            fileUrl, 
            thumbnail, 
            released, 
            duration, 
            album, 
            genre, 
            likedBy
        }})
    res.status(201).send({
        success: "Song was updated"        
    })
    } catch (error){
        next(error)
    }   
}

const deleteSong = async(req, res, next) => {
    const { id } = req.params
    
    try{
        const songToDelete = await SongModel.findOneAndDelete({_id: id})
        res.status(200).send({success: "Song was deleted"})
    } catch (error) {
        next(error)
    }    
}

 const SongControllerActions = {
    getAllSongs,
    createSong,
    updateSong,
    deleteSong
}

export default SongControllerActions