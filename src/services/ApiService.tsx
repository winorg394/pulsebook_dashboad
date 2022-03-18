import axios from 'axios';

export default class ApiService {
    

    test = "http://pulsebookapi.innov237.com/public/api/"
    testimage = "http://innov237.com/consoinvestapi/public/"
  
    baseUrl = `${this.test}`
    imageUrl = `${this.testimage}storage/`

    postData = async (route: string, data: any) => {
        return await axios.post(this.baseUrl + route, data);
    }
    updateData = async (route: string, data: any) => {
        return await axios.put(this.baseUrl + route, data);
    }

    uploadFile = async (data: any) => {
        let formData = new FormData()
        formData.append('file', data)

        return await axios.post(this.baseUrl + 'upload', formData);
    }

    getData = async (route: string) => {
      
        
        return await axios.get(this.baseUrl + route);
    }
    deleteData = async (route: string) => {
      
        
        return await axios.delete(this.baseUrl + route);
    }


    getDataByKey = async (route: string, key: any) => {
       
        
        return await axios.get(this.baseUrl + route + "?key=" + key);
    }

}
