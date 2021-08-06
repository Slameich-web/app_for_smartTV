import axios from "axios"
const access_key = 'a995726a8f36f84efb0846315ca954c0';
const phone_number = '14158586273';

const pass = `http://apilayer.net/api/validate?access_key=${access_key}&number=${phone_number}`
axios.get(pass).then((resp)=>{
    console.log(resp)
})