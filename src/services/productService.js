import axios from "axios"

export default class ProductService{

    getProducts(){
        return axios.get("http://localhost:8080/api/products/getall");
    }
    getProductById(pid){
        return axios.get("http://localhost:8080/api/products/getbyid/",{params:{id:pid}})
    }
    getProductByName(productName){
        return axios.get("http://localhost:8080/api/products/getbyname?name="+productName)
    }
}