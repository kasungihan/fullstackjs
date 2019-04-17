<template>

    <v-container>

        <create-article></create-article>

        <hr>

        <v-data-table
            :headers="headers"
            :items="data"
            class="elevation-1"
        >
            <template v-slot:items="props">
            <td>{{ props.item.id }}</td>
            <td class="text-xs-right">{{ props.item.title }}</td>
            <td class="text-xs-right">{{ props.item.content }}</td>
            <td class="text-xs-right">{{ props.item.date }}</td>
            </template>

        </v-data-table>
    </v-container>

</template>

<script>
import axios from 'axios'
import CreateArticle from './CreateArticle.vue'

export default {
    data(){
        return {
            data:[],
            headers: [
                { text: 'Id', value: 'id' },
                { text: 'Title', value: 'title' },
                { text: 'Content', value: 'content' },
                { text: 'Date', value: 'date' }
            ]
        }
    },
    components: {
       'create-article': CreateArticle
    },
    method: {
        getData() {
            axios.get(`http://localhost:3000/post`)
                .then(({data}) => this.data = data)
                .catch(err => console.log(err));
        }
    }
};

</script>

