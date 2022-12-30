import axios from "axios";


async function LikeApi(ImageId){
    const url = `https://ma-backend.onrender.com/api/discover/like/${ImageId}`
    const Like = await axios.get(url);
    console.log(ImageId);
}

export default LikeApi;