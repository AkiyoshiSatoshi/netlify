<template>
 <div class="about">
   <div class="detail">
     <h1 class="detail-title"> {{ cryptlist[0].symbol }}の詳細情報</h1>
     <ul>
       <li>売り注文情報:{{ cryptlist[0].ask }}</li>
       <li>買い注文情報:{{ cryptlist[0].bid }}</li>
       <li>高値:{{ cryptlist[0].high }}</li>
       <li>安値:{{ cryptlist[0].low }}</li>
       <li>終値:{{ cryptlist[0].last }}</li>
       <li>取引量:{{ cryptlist[0].volume }}</li>
      </ul>
    </div>
    <div class="Home">
      <button @click= "$router.push ({ name: 'Home',params: { CryptoCurrency:CryptoCurrency} })">Homeへ</button>
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
        { symbol:"",
        asks:"",
        bid:"",
        price:"",
        hight:"",
        low:"",
        close:"",
        volume:""

        },
      ]

    }; 
  },
  async created(){
    const item= await axios.get(
      `/public/v1/ticker?symbol=${this.CryptoCurrency}`
      ,
      this.$axios
  .get("URL")
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.log(error)
  }
    ));
    axios.defaults.withCredentials = true;
    console.log(item.data.data)
    const cryptData =item.data.data;
    this.cryptlist =cryptData;
    this.symbol = item.data.data.symbol;
    this.asks = item.data.data[0].asks;
    this.bid = item.data.data[0].bid;
    this.price = item.data.data[0].price;
    this.high = item.data.data[0].high;
    this.low = item.data.data[0].low;
    this.close = item.data.data[0].last;
    this.volume = item.data.data[0].volume;
    },
  methods: {
    button(){
      this.$router.push('../views/Home.vue')

    }
  }
};

</script>


<style scoped>



.detail h1{
  color: black;
  font-size: 20px;
  padding: 15px;
}

ul, ol {
  padding: 0;
  position: relative;
}

ul li, ol li {
  color: black;
  border-left: solid 8px rgb(228, 103, 186);/*左側の線*/
  background: whitesmoke;/*背景色*/
  margin-bottom: 5px;/*下のバーとの余白*/
  line-height: 1.5;
  border-radius: 0 15px 15px 0;/*右側の角だけ丸く*/
  padding: 0.5em;
  list-style-type: none!important;
}
.Home{
  margin: 0 auto;
  text-align: center;  
  max-width: 200px;
  
}

.Home button{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  background: #fff;
  position: relative;
}

</style>

