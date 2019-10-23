<template>
    <div class="shopcart">
        <transition name="fade">
            <div 
            v-if="showCartView && !isEmpty"
            @click.self="showCartView=false" 
            class="cartview-cartmask">
                <div class="cartview-cartbody">
                    <!-- 表头：已选商品，清空 -->
                    <div class="cartview-cartheader">
                        <span>已选商品</span>
                        <button @click="clearFoods">
                            <i class="fa fa-trash-o"></i>
                            <span >清空</span>
                        </button>
                    </div>
                    <!-- 商品名称，金额，数量等 -->
                    <div class="entityList-cartbodyScroller">
                        <ul class="entityList-cartlist">
                            <li class="entityList-entityrow" v-for="(food,index) in selectFoods" :key="index">
                                <h4>
                                    <span>{{food.name}}</span>
                                </h4>
                                <span class="entityList-entitytotal">￥{{food.activity.fixed_price}}</span>
                                <CartControll :food="food"></CartControll>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </transition>
        <div class="bottomNav-cartfooter" :class="{'bottomNav-carticon-empty':isEmpty}">
            <span class="bottomNav-carticon">
                <i class="fa fa-cart-plus"></i>
                <!-- 本来显示加购的商品信息，点击一下消失，再点击出现 -->
                <span v-if="totalCount" @click="showCartView=!showCartView">{{totalCount}}</span>
            </span>
            <div class="bottomNav-cartInfo" @click="showCartView=!showCartView">
                <p class="bottomNav-carttotal">
                    <span v-if="isEmpty">未选购商品</span>
                    <span v-else>{{totalPrice.toFixed(2)}}</span>
                </p>
                <p>另需配送费{{shopInfo.rst.float_delivery_fee}}元</p>
            </div>
            <button class="submit-btn">
                <span v-if="isEmpty">￥{{shopInfo.rst.float_minimum_order_amount}}元起送</span>
                <span v-else>去结算</span>
            </button>
        </div>
    </div>
</template>

<script>
import CartControll from "../../components/shop/CartControll"
export default {
    name:"ShopCart",
    data(){
        return {
            selectFoods:[],     //选择的food
            totalCount:0,       //选择的food的总数量
            totalPrice:0,       //选择的food的总金额
            showCartView:false,     //默认购物车中的商品不显示
        }
    },
    props:{
        shopInfo:Object
    },
    components:{
        CartControll
    },
    computed:{
        isEmpty(){
            let empty=true;
            this.totalPrice=0;
            this.totalPrice=0;
            this.selectFoods=[];
            // 加购商家推荐里面的商品
            this.shopInfo.recommend.forEach(recommend=>{
                recommend.items.forEach(item=>{
                    if(item.count){
                        empty=false;
                        this.totalCount+=item.count;
                        this.totalPrice+=item.activity.fixed_price * item.count
                        this.selectFoods.push(item)
                    }
                })
            });
            // 加购右侧menu里面的商品
            this.shopInfo.menu.forEach(menu=>{
                menu.foods.forEach(food=>{
                    if(food.count){
                        empty=false;
                        this.totalCount+=food.count;
                        this.totalPrice+=food.activity.fixed_price * food.count
                        this.selectFoods.push(food)
                    }
                })
            });
            return empty;
        }
    },
    methods:{
        clearFoods(){
            this.shopInfo.recommend.forEach(recommend=>{
                recommend.items.forEach(item=>{
                    item.count=0
                })
            });
            this.shopInfo.menu.forEach(menu=>{
                menu.foods.forEach(food=>{
                    food.count=0
                })
            });
        }
    }
}
</script>


<style scoped>
.bottomNav-cartfooter {
position: fixed;
right: 0;
bottom: 0;
left: 0;
display: flex;
align-items: center;
padding-left: 21.066667vw;
background-color: rgba(61, 61, 63, 0.9);
height: 12.8vw;
z-index: 1000;
}

.bottomNav-carticon {
position: absolute;
left: 3.2vw;
bottom: 2vw;
width: 13.333333vw;
height: 13.333333vw;
box-sizing: border-box;
border-radius: 100%;
background-color: #3190e8;
border: 1.333333vw solid #444;
box-shadow: 0 -0.8vw 0.533333vw 0 rgba(0, 0, 0, 0.1);
}
.bottomNav-carticon > i {
position: absolute;
top: 7px;
right: 0;
bottom: 0;
left: 7px;
color: #fff;
font-size: 1.6rem;
}
.bottomNav-cartInfo {
flex: 1;
}
.bottomNav-carttotal {
font-size: 0.8rem;
line-height: normal;
color: #fff;
}
.bottomNav-cartdelivery {
color: #999;
font-size: 0.6rem;
}
.submit-btn {
height: 100%;
width: 28vw;
background-color: #38ca73;
color: #fff;
text-align: center;
text-decoration: none;
font-size: 0.9rem;
font-weight: 600;
line-height: 12.8vw;
border: none;
outline: none;
}

.bottomNav-carticon-empty > span {
background-image: radial-gradient(circle, #363636 6.266667vw, #444 0);
}
.bottomNav-carticon-empty > span > i {
color: #606065 !important;
}
.bottomNav-carticon-empty .bottomNav-carttotal > span {
color: #999;
}
.bottomNav-carticon-empty .submit-btn {
background-color: #535356 !important;
}

.bottomNav-carticon > span {
position: absolute;
right: -1.2vw;
top: -1.333333vw;
line-height: 1;
background-image: linear-gradient(-90deg, #ff7416, #ff3c15 98%);
color: #fff;
border-radius: 3.2vw;
padding: 0.833333vw 1.333333vw;
font-size: 0.6rem;
}

.cartview-cartmask {
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.4);
z-index: 200;
}
.cartview-cartbody {
position: fixed;
left: 0;
width: 100%;
background-color: #fff;
bottom: 12.8vw;
z-index: 201;
opacity: 1;
font-size: 1rem;
}
.cartview-cartheader {
display: flex;
align-items: center;
padding: 0 4vw;
border-bottom: 0.133333vw solid #ddd;
background-color: #eceff1;
color: #666;
height: 10.666667vw;
}
.cartview-cartheader > span {
flex: 1;
display: flex;
align-items: center;
}
.cartview-cartheader > button {
border: none;
outline: none;
flex: none;
display: flex;
align-items: center;
padding-left: 4vw;
color: #666;
text-decoration: none;
font-size: 0.8rem;
line-height: 4vw;
background: none;
}
.cartview-cartheader > button > span {
margin-left: 0.8vw;
}
.entityList-cartbodyScroller {
overflow: auto;
max-height: 80vw;
}
.entityList-entityrow {
border-bottom: 0.133333vw solid #eee;
display: flex;
align-items: center;
padding: 2vw 3.333333vw 2vw 0;
min-height: 12.666667vw;
margin-left: 3.333333vw;
}
.entityList-entityrow > h4 {
flex: 5.5;
line-height: normal;
}
.entityList-entityrow > h4 > span {
display: inline-block;
font-style: normal;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
vertical-align: middle;
max-width: 46.666667vw;
}
.entityList-entitytotal {
color: rgb(255, 83, 57);
flex: 2.5;
text-align: left;
white-space: nowrap;
font-weight: 700;
}
.entityList-entitytotal::before {
content: "\A5";
font-size: 0.6rem;
color: currentColor;
}

.fade-enter-active,
.fade-leave-active {
transition: opacity 0.25s ease-out;
}

.fade-enter,
.fade-leave-to {
opacity: 0;
}
</style>