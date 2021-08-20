<template>
  <div id="Rist">
    <div class="Rist1">
      <table border="1">
        <tr>
          <th>銘柄</th>
          <th>最終取引価格</th>
          <th>詳細</th>
        </tr>
        <tr v-for="(data,index) in cryptlist" :key="index" >
          <td>{{data.symbol}}</td>
          <td>{{data.last}}</td>
          <td>
            <router-link 
            :to = "{ name: 'About', params: {CryptoCurrency: data.symbol } }" >about</router-link>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["CryptoCurrency"],
  data() {
    return{
      cryptlist: [
        { symbol:""}
      ]
      
    }; 
  },
      
  async created(){
    const item = await axios.get(
      "/public/v1/ticker",{
        withCredentials: true }

    ); 
    axios.defaults.withCredentials = true;
    console.log(item.data.data)
    const cryptData =item.data.data;
    this.cryptlist =cryptData;
  },
  methods: {
    button(){
      this.$router.push('../views/About.vue')

    }
  }
};

</script>


<style scoped>
table{
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
}

table tr{
  border-bottom: solid 1px #eee;
  cursor: pointer;
}

table tr:hover{
  background-color: #d4f0fd;
}

table th,table td{
  text-align: center;
  width: 25%;
  padding: 15px 0;
}
.Rist1{
  background-color: rgb(243, 214, 242);
}
.Rist1 th,td{
  color: black;
  font-size: 20px;
}
.Rist1 td{
  padding: 10px 10px;
  color: black;

}





</style>