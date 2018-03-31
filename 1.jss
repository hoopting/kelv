body{
    text-align: center;
}
*{
    margin: 0;
    padding: 0;
}
ul{
    list-style: none;
}
/*页眉*/
.header-mobile{
    display: none;
}
.header {
    background: #323A45;
    border-bottom: 2px solid #00B895;
    width: 1200px;
    height: 98px;
    text-align: center;
    margin: 0 auto;
    position: relative;
    bottom: 8px;
}

.logo {
    float: left;
    padding: 25px 0;
    position: relative;
    left: 100px;
    bottom: 7px;
}

.logo > b {
    display: inline-block;
    background: url("img/巴厘岛2.png") no-repeat;
    width: 240px;
    height: 40px;
    position: relative;
    bottom: -5px;
    left: -30px;;
}

.top-nav {
    float: right;
    position: relative;
}

.top-nav ul li {
    display: inline-block;
    float: left;
}
ul{
    list-style: none;
}
.top-nav ul li a {
    text-decoration: none;
    display: inline-block;
    font-family: SimHei;
    font-size: 18px;
    color: #d6d6d6;
    padding: 39px 30px;
    display: block;
    position: relative;
    text-transform: uppercase;
    transition: 1s ease;
    -o-transition: 1s ease;
    -webkit-transition: 1s ease;
}

.top-nav li.active a, .top-nav li a:hover {
    vertical-align: bottom;
    color: #FFF;
    background: #00B895;
}
/*主体*/
.section{
    background:#e9fbf8;
    padding: 40px 50px;
    position:relative;
    width: 1100px;
    height: 950px;
    text-align: center;
    margin: 0 auto;
}
/*顶部*/
.top{
    position:relative;
    width: 1100px;
    height: 60px;
    text-align: center;
    margin: 0 auto;
}
.l{
    width: 420px;
    position:relative;
    float:left;
    top:25px;
}
.top>h1{
    position:relative;
    width: 200px;
    height: 40px;
    float:left;
    font-family: "楷体";
    font-size: 45px;
    color:#313944;
    top:5px;
    left: 29px;
}
.r{
    position:relative;
    float:right;
    width:420px;
    top:25px;
}
/*身体*/
.bodys{
    position:relative;
    width: 1100px;
    height: 900px;
    text-align: center;
    margin: 0 auto;
}
.title-list{
    display:none;
}
.title-content{
    display:none;
}
.left{
    position:relative;
    width: 300px;
    height: 820px;
    float:left;
    margin: 0 auto;
    padding:40px 20px 40px 40px;
    /*border:1px solid #00B794;*/
}
.box{
    position:relative;
    width: 290px;
    height:595px;
    margin-top: 5px;
    border:1px solid #00B794;
}
.box2{
    position:relative;
    width: 290px;
    height:205px;
    margin-top: 15px;
    border:1px solid #00B794;
}
.p1{
    position:absolute;
    width: 290px;
    height:205px;
    z-index:30;
    background:#00B794;
    /*background:white;*/
}
.p2{
    position:absolute;
    width: 290px;
    height:205px;
    z-index:0;
    background: #606161;
    /*background: #00B794;*/
    cursor:pointer;
}
.p1-left{
    float: left;
    margin-top:20px;
    margin-left:10px;
    width: 100px;
    height:160px;
    cursor:pointer;
}

.p2-right{
    float: left;
    margin-top:40px;
    margin-left:15px;
    width: 160px;
    height:150px;
    text-align: left;
}
.p2-right>p:first-child{
    line-height: 1.5;
    font-family: "华文行楷";
    font-size: 20px;
    margin-bottom: 10px;
    color:#323A45;
}
.p2-right>p:nth-child(2),
.p2-right>p:nth-child(3){
    line-height: 1.5;
    font-family: "宋体";
    font-size: 14px;
    color:#e4efed;
}
.p2-right-form>input{
    margin-top: 15px;
    background: #e6e3e3;
    width:70px;
    height: 25px;
    text-align: center;
    outline: none;
    border:none;
    color: #00B794;
    border-bottom:2px #00a384 solid ;
    cursor:pointer;
}

.li span{
    width:20px;
    height:30px;
    float: left;
    font-size: 30px;
    font-family: "华文琥珀";
    color:#d2d5d6;
}
.li p{
    font-size: 25px;
    font-family: "幼圆";
    width:150px;
    hight:32px;
    text-align: left;
    padding-top: 2px;
}
.li{
    width:290px;
    /*height:115px;*/
    /*border-bottom:1px solid #00B794;*/
}
.hr{
    margin:10px 0 5px 0;
}
.ul2,.ul3,.ul4,.ul5,.ul6,.ul7,.ul8{
    list-style-image: url("img/8.png");
    list-style-position: inside;
    text-align: left;
}
.ul2>li,.ul3>li,.ul4>li,.ul5>li,.ul6>li,.ul7>li,.ul8>li{
    width: 120px;
    height: 30px;
    margin: 5px 0 0 10px;
    float: left;
}
.click{
    background-image: url("img/10.png");
    background-repeat: no-repeat;
    color: white;
    cursor:pointer;
}
.hover{
    color:#00B794;
    text-decoration:underline;
    cursor:pointer;
}
.right{
    position:relative;
    width: 685px;
    height: 820px;
    float:right;
    padding: 40px 35px 35px 0;
}
.content{
    position:relative;
    width: 655px;
    height: 820px;
    float:right;
    padding:5px 15px;
    border:1px solid #00B794;
}
.bl{
    text-align: left;

}
.hr1{
    margin: 10px;
    text-align: center;
    width:97%;
    border-top: 1px dashed #00B794;
}
.jj{
    text-align: left;
    color: #00B895;
    font-size: 20px;
    margin: 5px 10px;
}
.ct{
    text-align: justify;
    padding: 5px 10px;
    line-height: 1.5;
    text-indent:2em;
}
.bt{
    font-size: 30px;
    font-family: "华文隶书";
    height: 25px;
    width:655px;
    text-align: center;
    padding-top:10px;
    color: dimgray;
}
.table{
    text-align: center;
    background-image: url("img/14.jpg");
    width:500px;
    height:260px;
    margin: 0 auto;
}
.table2{
    background-image: url("img/15.png");
    width:500px;
    height:150px;
    color:#FEFEFE;
    margin: 0 auto;
}
/*页脚*/
.footer{
    background:#00B794;
    padding: 50px 0;
    position:relative;
    width: 1200px;
    height: 300px;
    text-align: center;
    margin: 0 auto;
}
.footer-grid{
    float:left;
    width:23%;
    margin-right:2%;
}
.footer-grid h3{
    font-size: 1.5em;
    color: #fff;
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 20px;
    position: relative;
    left: 5px;
}
.footer-grid p{
    font-size: 0.875em;
    color:#FFF;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.8em;
}
.footer-grid ul li a{
    display: block;
    padding:10px 0px;
    border-bottom: 1px solid #5AC5B1;
    font-size: 0.875em;
    color:white;
    font-family: Arial, Helvetica, sans-serif;
    transition: 0.5s ease;
    -o-transition: 0.5s ease;
    -webkit-transition: 0.5s ease;
    /*text-transform:uppercase;*/

}
.footer-grid ul li a:hover{
    color:#005F4D;
}
.footer-lastgrid{
    margin:0;
}
.email-link{
    color:#FFF;
    transition: 0.5s ease;
    -o-transition: 0.5s ease;
    -webkit-transition: 0.5s ease;
    text-transform:lowercase;
}
.email-link:hover{
    color:#FFF;
}
/*页尾*/
.tail{
    background:#313944;
    position:relative;
    width: 1200px;
    height: 55px;
    text-align: center;
    margin: 0 auto;
}
.tail p {
    color: #FEFEFE;
    font-family: "宋体";
    font-size: 24px;
    font-style: normal;
    padding-top: 16px;
}
/*returnTop*/
p#back-to-top{
    position:fixed;
    display:none;
    bottom:10px;
    right:8px;
}
p#back-to-top a{
    text-align:center;
    text-decoration:none;
    color:#6C6C6D;
    display:block;
    width:30px;
    /*使用CSS3中的transition属性给跳转链接中的文字添加渐变效果*/
    -moz-transition:color 1s;
    -webkit-transition:color 1s;
    -o-transition:color 1s;
}
p#back-to-top a:hover{
    color:#00B794;
}
p#back-to-top a span{
    background:transparent url("img/13.PNG") no-repeat;
    border-radius:6px;
    display:block;
    height:30px;
    width:30px;
    margin-bottom:5px;
    /*使用CSS3中的transition属性给<span>标签背景颜色添加渐变效果*/
    -moz-transition:background 1s;
    -webkit-transition:background 1s;
    -o-transition:background 1s;
}
#back-to-top a:hover span{
    background:transparent url("img/13.PNG") no-repeat;
}
