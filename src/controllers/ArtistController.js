import ArtistModel from "../models/Artist.js";

export const getAllArtists = async (req,res,next) => {
    console.log("works")
    try{
        const artists = await ArtistModel.find({})
        res.status(200).send({
            artists: artists
        })
    } catch (error){
        next(error)
    }    
}

export const createArtist = async (req,res,next) => {
    const { artistName, artistDescription } = req.body
    try{
        const createNewArtist = await ArtistModel.create({
            artistName,
            artistDescription
        })
        res.status(201).send({
            success: "Artist created!",
            newArtist: createNewArtist
        })
    } catch (error) {
        next(error)
    }
}

