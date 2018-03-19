$(function(){
    let url='https://data.kaohsiung.gov.tw/opendata/DownLoad.aspx?Type=2&CaseNo1=AV&CaseNo2=2&FileType=1&Lang=C&FolderType=O'


    new Vue({
        el:'.Kaohsiung-food',
        data:{
            ajaxData:'',
            kaohsiungDistrict:['楠梓區','左營區','鼓山區','三民區',
            '鹽埕區','前金區','新興區','苓雅區','前鎮區',
            '旗津區','小港區','鳳山區','大寮區','鳥松區',
            '林園區','仁武區','大樹區','大社區','岡山區',
            '路竹區','橋頭區','梓官區','彌陀區','永安區',
            '燕巢區','田寮區','阿蓮區','茄萣區','湖內區',
            '旗山區','美濃區','內門區','杉林區','甲仙區',
            '六龜區','茂林區','桃源區','那瑪夏區'],
            serchData:[],
            dataShow:false,
            area:'',
        },
        methods:{
            filterData:function(){
                const self=this;
                self.serchData.length=0;
                if(self.area!=''){
                    for(let i=0;i<self.ajaxData.length;i++){
                        if(self.ajaxData[i].Add.indexOf(self.area)!=-1){
                            self.serchData.push(self.ajaxData[i]);
                        }
                    }
                }
                if(self.serchData.length>0){
                    self.dataShow=true;
                }else{
                    self.dataShow=false;
                    $('#serchModal').modal('show');
                }
                console.log(self.serchData);
                
            }
        },
        computed:{

        },
        created:function(){
            const self = this;
            $.ajax({
                url:url,
                type:"GET",
                dataType:'JSON',
                timeout:1000,
                error:function(){
                    alert('error');
                },
                success:function(data){
                    self.ajaxData=data;
                }
            })
        },
    })
})