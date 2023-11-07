import Global from './../Global';
import axios from 'axios';

export default class ServiceCoches {
    //método para cargar los coches
    getCoches(){
        return new Promise(function(resolve){

            var request = "api/coches";
            var url = Global.urlApiCoches + request;

            var coches = [];

            axios.get(url).then(response => {

                coches = response.data;
                resolve(coches);

            })
        })
    }

    getCochesFetch(){
        return new Promise(function(resolve){

            var request = "api/coches";
            var url = Global.urlApiCoches + request;

            var coches = [];

            fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                
                coches = data;
                resolve(coches);
            })
            })

    }

    getCocheId(id){
        return new Promise(function(resolve){

            var request = "api/coches/findcoche/" + id;
            var url = Global.urlApiCoches + request;

            var coche = {};

            axios.get(url).then(response => {

                coche = response.data;
                resolve(coche);

            })
        })
    }

    getCocheIdFetch(id){
        return new Promise(function(resolve){

            var request = "api/coches/findcoche/" + id;
            var url = Global.urlApiCoches + request;

            var coche = {};

            fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                
                coche = data;
                resolve(coche);
            })
            
        })
    }

    insertCoche(coche){
        return new Promise(function(resolve){

            var request = "api/coches/insertcoche";
            var url = Global.urlApiCoches + request;

            axios.post(url, coche).then(response => {

                resolve(response);

            })
        })
    }

    insertCocheFetch(coche){
        return new Promise(function(resolve){

            var request = "api/coches/insertcoche";
            var url = Global.urlApiCoches + request;

            fetch(url, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(coche),
              })
                .then((response) => {
                  
                  return response.json();
                })
                .then((data) => {

                  resolve(data);
            })
                
        
        })
    }

    updateCoche(coche){
        return new Promise(function(resolve){

            var request = "api/coches/updatecoche";
            var url = Global.urlApiCoches + request;

            axios.put(url, coche).then(response => {

                resolve(response);

            })
        })
    }

    updateCocheFetch(coche){
        return new Promise(function(resolve){

            var request = "api/coches/updatecoche";
            var url = Global.urlApiCoches + request;

            fetch(url, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(coche),
              })
                .then((response) => {
                  
                  return response;
                })
                .then((data) => {

                  resolve(data);
                })
        })
    }

    deleteCoche(id){
        return new Promise(function(resolve){

            var request = "api/coches/deletecoche/" + id;
            var url = Global.urlApiCoches + request;

            axios.delete(url).then(response => {

                resolve(response);

            })
        })
    }

    deleteCocheFetch(id){
        return new Promise(function(resolve){

            var request = "api/coches/deletecoche/" + id;
            var url = Global.urlApiCoches + request;

            fetch(url, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                },
              })
                .then((response) => {
                  resolve(response); // No se espera una respuesta en el caso de una solicitud DELETE exitosa
            })
                
        })
    }
}