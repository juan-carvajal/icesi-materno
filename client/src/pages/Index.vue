<template>
  <q-page class="row items-center justify-evenly">
    <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    ></example-component>
    {{env}}
    {{authState}}
    <q-btn @click="logIn" label="Test"></q-btn>
    <q-btn @click="printStore" label="Test2"></q-btn>
  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/CompositionComponent.vue';
import { defineComponent, ref } from 'vue';
import {useStore} from 'src/store'
import {auth} from 'src/boot/firebase'
import { createUserWithEmailAndPassword } from '@firebase/auth';

const env = process.env.NODE_ENV

export default defineComponent({
  name: 'PageIndex',
  components: { ExampleComponent },
  setup() {
    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'ct1'
      },
      {
        id: 2,
        content: 'ct2'
      },
      {
        id: 3,
        content: 'ct3'
      },
      {
        id: 4,
        content: 'ct4'
      },
      {
        id: 5,
        content: 'ct5'
      }
    ]);


    function logIn(){
      createUserWithEmailAndPassword(auth,'juan030698@hotmail.com','12345678').then((resp)=>{
        console.log(resp.user)
      }).catch(error => {
        console.log(error)
      })
    }

    function printStore(){
      console.log(authState)
    }

    const meta = ref<Meta>({
      totalCount: 1200
    });
    const store = useStore()
    const authState = store.state.auth
    return { todos, meta, env, authState, logIn, printStore };
  }
});
</script>
