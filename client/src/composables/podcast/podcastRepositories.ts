import { ref } from 'vue';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import { Podcast } from 'src/models/podcast';
import { db } from 'boot/firebase';

export default function usePodcastRepositories() {
  const podcasts = ref([] as Array<Podcast>);

  const q = query(collection(db, 'podcasts'), orderBy('creationDate','desc'));
  onSnapshot(q, (querySnapshot) => {
    podcasts.value = [] as Array<Podcast>;
    querySnapshot.forEach((doc) => {
      const podcast = doc.data() as Podcast;
      podcast.ID = doc.id;
      podcasts.value.push(podcast);
    });
  });

  return { podcasts };
}
