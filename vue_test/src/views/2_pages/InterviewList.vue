<template>
  <div class="container">
    <div class="title">전체 면접 목록</div>

    <div class="interview-list-container">
        <div id="app">
                
            <v-data-table>
                <thead>
                    <th v-for="(item,index) in header" :key="index">{{item}}</th>
                </thead>
                <tbody>
                    <tr @click="handleClick(item, index)" v-for="(line, index) in interview" :key="index" >
                        <td v-for="(item,index) in line" :key="index">{{item}}</td>
                    </tr>
                </tbody>                
            </v-data-table>
        </div>

    </div>    
  </div>
</template>

<script>
export default {
    methods:{
        handleClick(item,index){
            console.log("handleClick = ", index);
            
            this.$router.replace({name:'InterviewAnalysis'})
        }
    },

    data() {
        return {
            header: ["이름","날짜","길이"],
            interview: [
                ['AB전자 1차 면접', '2.8. 오후 4:00', '1:00:03'],
                ['KK페이 임원 면접', '2.10. 오후 2:00', '45:33'],
                ['QQ테크 2차 면접', '2.19. 오후 3:30', '1:10:56'],
                ['AB전자 2차 면접', '2.28. 오전 10:00', '1:01:28']
            ]
        }        
    }
};
</script>

<style lang="scss" scoped>
@import "./../../assets/scss/2_pages/interview-list.scss";
</style>
