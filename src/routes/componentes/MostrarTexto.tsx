import { createFileRoute } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider, useQueryClient, useQuery } from '@tanstack/react-query'
import { bd } from '../../firebase/firebase'
import { collection, getDocs } from 'firebase/firestore'

export const Route = createFileRoute('/componentes/MostrarTexto')({
  component: RouteComponent,
})

const queryClient = new QueryClient();

function RouteComponent() {
  return (
    <QueryClientProvider client={queryClient}>
      <MostrarTexto />
    </QueryClientProvider>
  )
}

function MostrarTexto() {
  //obtenemos la ubicacion del url actual
  const ubicacion = window.location.pathname;
  console.log(ubicacion);

  const queryClient = useQueryClient();

  async function docSnap(){
    const coleccion = collection(bd, 'experienciaLaboral');

    //obtenemos los documentos de la colección 
    const response = await getDocs(coleccion);
    const docs = response.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
    })
      
    return docs;

    
  }

  //staleTime con
  const { isPending, error, data } = useQuery({
    queryKey: ["userInfos"],
    queryFn: docSnap,
    staleTime: 10 * 60 * 1000,
    initialData: () => {
      return queryClient.getQueryData(["userInfos"])?.data ?? undefined;
    },
  });
  //data loading
  if (isPending) return "Loading...";
  //error
  if (error) return "An error has occurred: " + error.message;
  //data is here
  return (
    <div>
      <h1>{data.empresa}</h1>
      <p>{data.email}</p>
    </div>
  );
}
