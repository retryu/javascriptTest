/**
 * @author retryu
 * Date  2012/3/12
 */
function findleft(){
	var content=document.getElementsByClassName("content");
	var  width=(document.documentElement.scrollWidth-1024)/2;
		return  width;
 
}
 
function  initDesString(){
	var  descriptions=new  Array();
	descriptions[0]="这属于童年，那么美的色彩填满了整个梦境，斑斓而纯净。";
	descriptions[1]="【肉嫩多汁的烧鸭腿】1.鸭腿两只,用适量咖喱粉、胡椒粉、孜然粉、生抽、老抽、料酒抹均,腌1小时;2.热锅热油,鸭腿有皮的一面放进去,煎到皮下的油出来;3.两到三分钟,翻一面,继续煎两分钟;4.加1勺料酒、2勺白糖、1勺醋、1杯水,沸腾后盖上盖,文火焖20分钟,收汁即可";
	descriptions[2]="水酥糖：龙猫便当。。。。。";
	descriptions[3]="狮子头";
	descriptions[4]="4balabalablabala";
	descriptions[5]="材料：茄子，猪肉糜，葱花，姜末，食盐，花雕，生抽，糖，醋，干淀粉 食用油，鸡蛋； 做法： 1）拌肉糜／调鱼香汁儿：往肉糜里加入少量3）做鸡蛋糊：就是讲少量的生粉和鸡蛋均匀搅拌成不太稀的糊糊， 4）将酿入了肉馅的茄盒蘸一蘸鸡蛋糊，完全裹上； 5）开油锅，7成热后，就将茄盒放入里面炸，直至成如图金黄色，捞起，待用； 花雕，姜末，葱末和少许生抽，糖，调味：／食盐，糖，醋，生抽，姜末，蒜末，生粉，调成鱼香汁儿； 2）切茄子：见下图，就是切成这个样子，然后往里塞拌好的肉糜；（茄子片不要切断，最后留一点点跟儿哈）";
	descriptions[6]="DIY美味销魂的卤肉饭】材料：五花肉,香菇,洋葱,姜,桂皮,葱蒜,小青菜.做法：1.肉切大块,过水焯10分钟捞出洗净切小丁,香菇切丁。锅里热油，加姜片与洋葱头炸至金黄。加肉丁与香菇翻炒。2.倒入老抽翻炒后倒入紫砂煲，加水没过肉。放桂皮葱蒜煮2小时。3.煮饭，放上卤肉，烫熟的青菜即可。";
	descriptions[7]="【美味卷饼】 材料：春饼，酱肉，黄瓜，葱白。 调料：甜面酱，辣椒酱。做法: 1.将黄瓜洗净,切条,葱洗净切粗丝,酱肉切厚片备用;2.将春饼放入蒸锅蒸5分钟,取出铺平,抹上一层甜面酱和辣椒酱,然后摆上酱肉、黄瓜条和葱丝,包裹严实卷成卷状,斜刀一切为二就可以了哦~";
	descriptions[8]="养颜甜品』1、去痘印：薄荷、冰糖热水冲泡冷藏后放入柠檬片；2、除面部萎黄：薏米黄豆冷水浸泡，榨浆煮沸、放入糖搅拌静置；3、改善黯沉：西米煮10分钟后过凉水，椰奶煮沸加山药，晾至室温加西米、荔枝、白糖；4、美白红润：玫瑰茄、玫瑰、冰糖热水冲泡；5、淡化色斑：西红柿、柠檬榨汁加蜂";
	descriptions[9]="牛肉烧卖-网上厨房干香菇提前泡发好，切碎；将牛肉馅、香菇碎、姜末、葱末和适量的香油、酱油、盐搅匀后用适量水给肉馅搅上劲儿；将烧卖皮4个摞在一起，对折；再对折；用手指捏边缘处捏薄捏扁，需要用点力气；所有的都包好，将蒸锅水烧开后在已铺好布或涂好油的蒸笼上摆入烧卖，大火蒸10分钟即成。";
	descriptions[10]="向日葵蛋炒饭将隔夜剩米饭从冰箱里提前取出，放于室温下，自然回温。香菇泡发后切成小丁，胡萝卜去皮切成小丁，火腿肠也切成同等大小的丁 把鸡蛋打散，用清水将淀粉溶解后，倒入鸡蛋液中，充分搅匀 锅中倒入清水，淋入一点点油，水开后放入豌豆焯烫30秒钟后捞出，过冷水后沥干水分备用 平底锅中倒入油，大火加热，待油8成热时，倒入部分蛋液，刚好够将鸡蛋摊成一个博饼即可，转动锅子，使蛋饼变得均匀而平整，烙好一面后，用铲子翻面，将另一面也烙成金黄色盛出。继续重复这个步骤，将所有蛋液都摊成薄薄的蛋饼即可 将蛋饼放在案板上，切";
	descriptions[11]="【DIY电饭煲做酸奶】材料：牛奶250ml，市售酸奶30ml，砂糖适量。1.牛奶倒入锅中，加入适量砂糖，烧至89-90度；2.烧烫的牛奶降温到30-40度左右，加入酸牛奶；3.容器口封上保鲜膜或盖子；4.电饭煲中倒入37左右的温水，调试至保温档，将装有酸奶的容器浸泡在温水中。盖上电饭锅锅盖，临睡前断电，放置一晚"
	descriptions[12]="丹麦早餐，最棒的早餐展示。在丹麦人的早餐盘里经常会出现黑面包，奶酪，意大利蒜味腊肠，火腿，馅饼，蜂蜜和果酱，有时候还会有一平盘巧克力。当看到这样一份早餐的时候我有点吃惊，但是在我的研究报告中培根在丹麦不是那么地受欢迎。怎么会这样呢？也许他们是把所有的配更都给了英国吧。"
	descriptions[13]="【雪菜蚕豆蛋饼】材料：草鸡蛋６个，蚕豆８０克，雪里蕻３０克调料：盐、鸡粉各少许做法：１、将蚕豆煮熟后捞起控干水份再切成大粒（一个豆切两刀）２、雪里蕻洗净后，挤干水份，切碎３、将蛋打入在碗中，充分搅拌４、在蛋液中加入蚕豆、雪里蕻以及少量的盐与鸡粉，充分拌匀５、平底锅烧热后，在锅底抹一层油，小火，将蛋液倒入，盖上锅盖，将一面焖至金黄后，翻面，将另一面也煎黄６、起锅，改刀成大小合适的块即可！"
	descriptions[14]="风味花蛤-网上厨房大蒜剁成蒜蓉，生姜切成丝，剥好干葱头，葱清洗后把葱白部分先切下；花蛤先放在淡盐水浸泡一个小时后再清洗干净；锅里放水烧开；加入花蛤；看到花蛤微微张开就马上出锅；过滤后用冷水冲一下。热锅后放入油，加入蒜蓉；加入生姜丝。小火煸香；加入切好的干辣椒煸炒一会；加入葱白继续小火煸炒；加入干葱头煸炒到香味完全出来；加入花蛤。加入花蛤后记得要开大火，接着马上放酱油；马上盖上锅盖20秒就差不多了；打开锅盖加入半勺白糖，颠锅，就可以出锅了，有了酱油不需要盐，做 海鲜不需要鸡精。"
	descriptions[15]="DIY鱼香茄盒】1.蛋清,肉末,葱姜加盐胡椒粉拌均;茄子中间切一刀不断,塞上肉末;2.面粉,水,蛋黄搅拌成酸奶浓度,入油锅炸至金黄;3.锅里的油倒出,入鱼香汁(剁椒切碎、蒜末、姜末、盐、白糖、香醋、生抽、香葱末)炒下,兑半碗高汤煮开;4.入茄盒翻炒,焖三分钟,水淀粉勾芡即可"
	descriptions[16]="香辣嫩豆腐-网上厨房嫩豆腐切方块；入加了盐的热水中焯一下，去除豆腥，捞出沥干水分；花生入锅小火炒熟，至噼里啪啦响过之后关火，凉透；炒好的花生去皮，擀碎；香菜切段，葱白切碎备用；用盐、糖、生抽、香醋、香油和辣椒油兑成碗汁；碗汁浇在豆腐上；撒上花生碎和香菜段，吃时拌匀即可。"
	descriptions[17]="蒜蓉油麦菜-网上厨房油麦菜择洗干净，切成七八厘米长的段；将蒜剁成蒜末备用；锅内放油爆香花椒捞出，放入一些蒜末炸香；下油麦菜，快速翻炒几下；炒到油麦菜碧绿将剩余的蒜蓉全部加入，调入盐和味精即可。"
	descriptions[18]="糖葫芦"
	descriptions[19]="北海道农家蔬菜汤 材料：高丽菜600G，土鸡腿1只，洋葱半个，新鲜香菇200G，葱花，高汤或水2000CC左右。1，鸡腿切小块入滚水中烫一下，沥干水分捞出备用。 2，高丽菜周围划4刀，将菜心取出。洋葱切丝。 3，高丽菜整颗放入锅中，放入鸡块，洋葱丝，加入高汤或水，盖盖煮滚后小火将高丽菜煮软。 4，将味增放入碗内，加入少许水调匀后倒入3中，撒盐，煮3分钟。 5，加入香菇煮熟，起锅前撒上葱花。 <br /><br />调料：味增3匙，盐适量"
	descriptions[20]="玫瑰蛋糕"
	descriptions[22]="【宫保鱿鱼】1、鱿鱼洗净切段，放入清水的锅内，加姜片5片，料酒1大匙，盐少许烧开后，鱿鱼烫至卷起捞出。2、热锅下油，放入花椒、姜片、蒜片、葱段爆香，花生米炒出放凉。3、放入鱿鱼卷，辣椒粉1勺翻炒.4、倒入宫保汁和水淀粉。大火翻炒至收汁，倒入花生米，淋上少许香麻油即可。"
	descriptions[22]="麦片 蓝莓"
	descriptions[23]=" 一切美好的"
	descriptions[24]="海鲜面-网上厨房先起锅把面煮一下，七八分熟即可。同时另起锅热油，葱姜爆香，放入小乌贼炒一下（乌贼我通常会先处理好，焯水后分袋放入冰箱冷冻，吃时提前拿出解冻即可），放入海裙子和切好的卷心菜继续翻炒，放入调料包拌匀。放入捞起的面继续炒匀即可。"
	descriptions[25]="油焖笋-网上厨房竹笋剥去外壳，洗净后去老根，切滚刀块；锅内放油烧至7成热，倒入竹笋煸1分钟，烹入料酒，生抽，白糖，炒匀后盖盖中火焖5-10分钟；撒入葱花，拌匀后即可。小贴士：如果用冬笋，事先煮5分钟左右。高温可分解大部分草酸,又能去除苦涩,使味道更鲜美。"
	descriptions[26]="〖草莓杏仁水果茶〗原料：草莓10颗，香蕉1根，美国大杏仁20颗，蜂蜜2汤匙，凉开水4汤匙 做法：1）草莓用淡盐水浸泡10分钟后，冲洗干净，去蒂对半切开。香蕉去皮，切成块。2）将草莓，香蕉，大杏仁，蜂蜜和凉开水倒入搅拌机，搅打2分钟，待成果泥状即可。吃前可以再切一些草莓果粒，口感更佳"
	descriptions[27]="泡菜蛋卷_厨坊间做法：1、将蛋清和蛋黄分开打散，调入少许鸡精增味，分别倒入平底锅摊成蛋皮备用；2、泡菜取菜帮部分切成粗条状，胡萝卜改刀成细条，用油煸炒一下使其变软；煮熟的米饭加入少许盐和麻油拌匀，用烤紫菜卷成紫菜包饭；外层再卷上蛋黄皮和蛋白皮，改刀成段即可。PS：其实就是紫菜包饭裹上蛋皮，吃起来口感更香更厚实。如果图方便，将全蛋打散摊成蛋皮即可，但不要摊得太厚；在蛋皮上抹一层薄薄的香油（随便抹一点以增加附着力），卷起来更服帖。"
		descriptions[28]="椰香咖喱鸡】1、三黄鸡洗净切小热水焯过，土豆、胡萝卜切小块；2、油锅放葱姜蒜爆香，放土豆胡萝卜块翻炒片刻；3、再倒入焯好水的鸡块一起翻炒，倒入料酒、盐、加水至材料平，盖上锅盖煮上15分钟；4、放进两块咖喱块再煮5分钟，再倒入半瓶椰汁；5、闷上一会儿加鸡精、葱就可以起锅了！"
	
	return  descriptions;
}
function  getMask(){
	   var newMask = document.createElement("div");
   newMask.id = "mask";
   newMask.style.position = "absolute";
   newMask.style.zIndex = "5";
   newMask.style.width = document.body.scrollWidth + "px";
   newMask.style.height = document.body.scrollHeight + "px";
   newMask.style.top = "0px";
   newMask.style.left = "0px";
   newMask.style.background = "#000";
   newMask.style.filter = "alpha(opacity=40)";
   newMask.style.opacity = "0.40";
   return  newMask;
}
 
 
 
function  removeElement(element){
	var parentElement=element.parentNode;
	if(parentElement){
		parentElement.removeChild(element);
	}
}
 
function GetImageWidth(oImage)
{
	var OriginImage=new Image();
  if(OriginImage.src!=oImage.src)OriginImage.src=oImage.src;
  return OriginImage.width;
}
function GetImageHeight(oImage)
{
	var OriginImage=new Image();
  if(OriginImage.src!=oImage.src)OriginImage.src=oImage.src;
  return OriginImage.height;
}
function  displayImg(img) {
	
	
	
 		if (document.getElementById("dis")) {
			removeElement(document.getElementById("dis"));
			}
	var  dis=document.createElement("div");
	var  im=new  Image();
	var  closeimg=new  Image();
	var  des=document.createElement("span");
	des.setAttribute("clssName","desctext");
	des.setAttribute("class","desctext");
	des.appendChild(document.createTextNode(img.des));
	des.top="50px";
	des.style.paddingTop="20px";
	
	im.src=img.src;
 
	closeimg.src="./img/close.gif";
	closeimg.setAttribute("className","close");
	closeimg.setAttribute("class","close");
	closeimg.onclick=function(){
		 removeElement(document.getElementById("dis"));
		removeElement(document.getElementById("mask"));
	}
	closeimg.onmouseover=function(){
		dis.style.opacity="0.9";
	}
	closeimg.onmouseout=function(){
		closeimg.style.opacity="1";
	}
	var scrollTop=document.body.scrollTop;
	var  disLeft=(document.body.clientWidth-img.w)/2;

	dis.id="dis";
	dis.style.height="auto";
	dis.style.width=parseInt(img.w)+"px";
	dis.style.padding="10px";
	dis.style.background="#ffffff";
	dis.style.top=scrollTop+80+"px";
	dis.style.left=disLeft+"px";
	dis.setAttribute("class","dis");
	dis.style.position="absolute";
	dis.style.zIndex="10";
	dis.appendChild(closeimg);
	dis.appendChild(im);
		dis.appendChild(des);
 document.body.appendChild(getMask());
	document.body.appendChild(dis);

 
	 return;
	
	
	
}



function  watertestdiv(){
	var  items =document.getElementsByClassName("out");
	var  columnCount=4;
	var  columnWidth=200;
	var  padding=12;
	var  marginleft=findleft();
 
	
			  var OriginImage=new Image(); 
			  	var   des=initDesString();
	for(var  j=0;j<items.length;j++){
		var img=items[j].getElementsByTagName("img");
		
		 
			  
		 		OriginImage.src=img[0].src;
			
			img[0].w=OriginImage.width;//天才~！
		 	img[0].des=des[j];
		 img[0].onclick=   function  (){
			
			      displayImg(this);   //this  ?  img[0]
				
		 }
		 items[j].style.height=parseInt(img[0].clientHeight)+"px";
		 items[j].style.width=parseInt(img[0].clientWidth)+"px";
	}
	
	
	 
	
	
	for(var  m=0;m<items.length;m++){
	//alert("m"+m+"   height: "+items[m].clientHeight+"  style.height"+items[m].style.height);
	}
	
	for(var  i=0;i<items.length; i++){
		
		var  currentItem=items[i];
		var currentColumn=i%4;
		var  currentLevel=parseInt(i/4);
		var left=marginleft+currentColumn*columnWidth+(i%4)*50;
		
 
		
		if (i > 3) {
			var top = parseInt(items[i-4].style.top) + items[i-4].clientHeight+padding;///!!!!!
		}
		else {
			var top = 250;
		}
			
		items[i].style.top=top+"px";
		items[i].style.left=left+"px";
	}
 
 
}

function addLoadEvent(func){

    var oldonload = window.onload;
    if (typeof window.onload != "function") {//如果没有新函数
        window.onload = func;
    }
    else {
        window.onload = function(){
            oldonload();
            func();
        }
        
    }
}
addLoadEvent(watertestdiv);
