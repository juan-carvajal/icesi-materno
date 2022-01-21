import { ref, watch, Ref } from 'vue';
import algoliasearch from 'algoliasearch';


export default function useAlgoliaSearch<T> (indexName: string, searchString: Ref<string>) {

  const results = ref<T[]>([]) as Ref<T[]>
  const isLoading = ref(false)


  const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID ?? '';
  const ALGOLIA_API_KEY = process.env.ALGOLIA_SEARCH_API_KEY ?? '';


  const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);

  const index = client.initIndex(indexName);


  watch(searchString, () => {
    if (!searchString.value) {
      return
    }

    isLoading.value = true

    results.value = []

    void index.search<T>(searchString.value).then((response) => {
      results.value = response.hits.map(i => { return i as T })
    }).finally(() => {
      isLoading.value = false
    })
  }, { immediate: true })


  return { results, isLoading }
}
