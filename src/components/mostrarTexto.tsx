import {auth, provider, analytics, bd} from "../firebase/firebase";
import { getDocs, collection } from "firebase/firestore";
import { useEffect } from "react";

//funcion que conecta con base de datos y trae los datos 
// de la coleccion dependiendo del parametro que se le pase
export function MostrarTexto(){
    //obtenemos la ubicacion del url actual
    const ubicacion = window.location.pathname;
    console.log(ubicacion);
    
    //usando tanstack query para obtener los datos de la base de datos
    


    useEffect (() => {
            async function docSnap(){
                const coleccion = collection(bd, ubicacion);

                //obtenemos los documentos de la colección 
                const response = await getDocs(coleccion);
                const docs = response.docs.map((doc) => {
                    const data = doc.data();
                    data.id = doc.id;
                    return data;
                })
                
                return docs;
            }
        }, []);

        return (
            <div>aaaaa</div>
        );
}

export default MostrarTexto;