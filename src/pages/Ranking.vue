<template>
<div id="people">
  <v-client-table :data="tableData" :columns="columns" :options="options">
    <Tweet :id="`${props.row.tweet}`" :options="{ theme: 'dark' }" slot="tweet" slot-scope="props"></Tweet>
  </v-client-table>
</div>
</template>
<script>
import Vue from 'vue'
import {ServerTable, ClientTable, Event} from 'vue-tables-2';
import { Tweet, Moment, Timeline } from 'vue-tweet-embed'
Vue.use(ClientTable);
var history = require('./../assets/crypt_name_list.json');
export default { 
    components: {
    Tweet: Tweet
  },
   data() {
    return {
        columns: ['symbol', 'count','tweet'],
        tableData: history,
        options: {
            // see the options API
        orderBy: { column: 'count',ascending:false  }
        }
    }
  }
}
</script>
<style>
.VueTables__table.table.table-striped.table-bordered.table-hover tbody tr{
  background-color: #ffffff;
}
.VueTables__table.table.table-striped.table-bordered.table-hover tbody tr:first-child{
  background-color: #FFD700;
}
.VueTables__table.table.table-striped.table-bordered.table-hover tbody tr:nth-child(2){
  background-color: #C0C0C0;
}
.VueTables__table.table.table-striped.table-bordered.table-hover tbody tr:nth-child(3){
  background-color: #C47222;
}
</style>
