import { UserData } from 'src/models/users';
import { ref, Ref } from 'vue';
import useAlgoliaSearch from './algoliaSearch';


export default function useUserSearch (searchString: Ref<string>) {

  if (process.env.NODE_ENV === 'development') {
    const users = ref<UserData[]>([
      {
        age: 23,
        email: 'juan030698@hotmail.com',
        uid: 'SlKD0KWLhIQTSSyt4tWGx42IqiG3'
      },
      {
        age: 23,
        email: 'hcancela@icesi.edu.co',
        uid: 'audnP8weaPe652JWlO0VG8fayNw2'
      }
    ])
    const isLoading = ref(false)

    return { users, isLoading }
  }


  const { results: users, isLoading } = useAlgoliaSearch<UserData>('user-search', searchString)


  return { users, isLoading }
}
