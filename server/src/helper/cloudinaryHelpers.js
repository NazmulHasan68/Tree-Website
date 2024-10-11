const publicIdvalueWithOUtExtenstionFromUrl = async(imageUrl)=>{
    (imageUrl) => {
        const pathSegments = imageUrl.split('/')

        //get the last segment 
        const lastSegment = pathSegments[pathSegments.length -1];

        const valuewithoutExtensiton = lastSegment.replace('.jpg', '')

        return valuewithoutExtensiton
    }
}

module.exports = {publicIdvalueWithOUtExtenstionFromUrl}