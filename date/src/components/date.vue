<template>
    <div id="date">
       <div class="header">
           <span class="" @click.stop="prevNextYear(-1)">&lt;&lt;</span>
           <span @click.stop="prevNextMonth(-1)">&lt;</span>
           <span class="year" @click.stop="changeYear">{{curYear}}年</span>
           <span class="month" @click.stop="changeMonth">{{curMonth}}月</span>
           <span @click.stop="prevNextMonth(1)">&gt;</span>
           <span @click.stop="prevNextYear(1)">&gt;&gt;</span>
       </div>
       <div class="content">
           <div class="title">
               <span v-for="(item, index) in weeks" :key="index">{{item}}</span>
           </div>
           <div class="days" >
                 <span class="day" v-for="(item, index) in days" :key="index" :data-value="item" @click.stop="chooseDay($event,item)" :class="{active: item >= 18 && item <= 25}">{{item !== 0 ? item : ''}}</span>
           </div>
       </div>
    </div>
</template>
<script>
import {getMonthDays, getYearMonthDay} from '@/assets/js/tools';
export default {
    data(){
        return {
            weeks: ['星期日', '星期一','星期二','星期三','星期四','星期五','星期六'],
            days: [],
            curYear: 0,
            curMonth: 0
        }
    },
    created(){
        let now = new Date();
        this.curYear = now.getFullYear();
        this.curMonth = now.getMonth() + 1;
        let daysList = this.createDays(this.curYear, this.curMonth);
        this.days = daysList;
        
    },
    mounted(){
       
    },
    methods:{
        //生成当前月份的days
        createDays(year, month){
            let days = getMonthDays(year, month),
                 firstDay = getYearMonthDay(year, month);
            let cDays = new Array(42).fill(0);
            let temp = [];
            for(let i = 1; i <= days; i++){
                temp.push(i)
            }
            cDays.splice(firstDay, days, ...temp);
            return cDays;
        },
        prevNextYear(tag){
            if(tag === -1){
                if(this.curYear <= 1970){
                    return;
                }
                this.curYear--;
            }else{
                let curYear = new Date().getFullYear();
                if(this.curYear >= curYear){
                    return;
                }
                this.curYear++;
            }
            let daysList = this.createDays(this.curYear, this.curMonth);
            this.days = daysList;
        },
        prevNextMonth(tag){
            if(tag === -1){
                if(this.curMonth <= 1){
                    return
                }
                this.curMonth--;
            }else{
                 if(this.curMonth >= 12){
                    return
                }
                this.curMonth++;
            }
            let daysList = this.createDays(this.curYear, this.curMonth);
            this.days = daysList;
        },
        changeYear(){
            let year = prompt('请输入年份！');
            let curYear = new Date().getFullYear();
            year = parseInt(year);
            if(year && year >= 1970 && year <= curYear){
                this.curYear = year;
                let daysList = this.createDays(this.curYear, this.curMonth);
                this.days = daysList;
            }
        },
         changeMonth(){
            let month = prompt('请输入月份！');
            month = parseInt(month);
            if(month && month >= 1 && month <= 12){
                this.curMonth = month;
                let daysList = this.createDays(this.curYear, this.curMonth);
                this.days = daysList;
            }
        },
        chooseDay(event, item){
            console.log(event, item);
        }
    }
}
</script>

<style>
    .header{
        height: 80px;
        border: 1px solid #000;
        font-size: 40px;
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .header > span{
        margin-right: 50px; 
    }
    .year{
        flex: 1;
    }
    .month{
        flex: 1;
    }
    .title{
        height: 60px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #333;
    }
    .title > span{
        flex: 1; 
    }
    .days{
        display: flex;
        flex-wrap: wrap;
        font-size: 20px;
    }
    .day {
        width: 14.28%;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        position: relative;
        /* margin-right: 1px; */
    }
    /* .day:after{
        content: '';
        position: absolute;
        right: 0;
        top: 50%;
        transform: scaleX(0.5) translateY(-50%);
        height: 80%;
        width: 1px;
        background-color: #555;
    }  */
    .active{
        background-color: lightblue;
        color: #fff;
    }
</style>

