import axios from'axios';

const key="AIzaSyClTLQ6ugeOYMC80nP2_vmIkr0QKnR1jsM"

export default axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3',
  params:{
      part:'snippet',
      maxResults:5,
      key:key
  }
})