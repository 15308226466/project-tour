new Vue({
    el:".banner",
    data:{
        list:[],
        left:0,
        l:0,
        t:2000,
        pno:0,
    },
    created(){
        this.b()
    },
    mounted(){
		this.a(3000)
    },
    methods:{
        b(){
            var res=[
                {id:1,img:"img/nav/1.png",url:"www.baidu.com"},
                {id:2,img:"img/nav/2.jpeg",url:"www.yuzhua.com"},
                {id:3,img:"img/nav/3.jpeg",url:"http://www.codeboy.com"},
                {id:4,img:"img/nav/4.png",url:"http://www.codeboy.com/login.html"},
            ]
            var len=res.length
            res.push(res[0])
            res[len].id=len+1
            this.list=res
        },
        a(i){
            var len=this.list.length-1
            var width=document.body.clientWidth
            window.onresize=()=>{
                width=document.body.clientWidth
                this.t=0
                var X=(document.body.clientWidth-width)
                var ss=width*this.pno+X
                this.left=-ss
                this.l=this.left
            }
         setInterval(()=>{
                this.pno++
                width=document.body.clientWidth
                if(document.visibilityState != 'hidden'){
                    this.t=2000
                    this.l+=-width
                        if(this.l==-(len+1)*width){
                            this.l=-width
                        }
                        this.left=this.l
                        setTimeout(()=>{
                            this.t=0
                        },this.t/2)
                }
            },i)
           setTimeout(()=>{
                this.t=0
                this.left=0
                this.l=0
                this.pno=0
                setInterval(()=>{
                    this.t=0
                    this.left=0
                    this.l=0
                    this.pno=0
                },len*i)
            },len*i+2000)
        }
    },
})
