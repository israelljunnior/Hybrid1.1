export function removeHtmlXml(texto){

    let regex = /(<([^>]+)>)/ig;
    let result = texto.replace(regex,"");
    return result;

}

function isStopWord(word) {

    var regex = new RegExp("\\b"+word+"\\b","i");
	if(stopWords.search(regex) < 0)     //Se ter resultado negativo ela não é uma stopWord.
	{
		return false;
	}else
	{
		return true;	
	}
}


export function removeStopWords(string) {

	let words = new Array();
	
	string.replace(/\b[\w\u00C0-\u00FF]+\b/ig,
			function($0){
				if(!isStopWord($0)){
					words[words.length] = $0.trim();
				}
			}
        ); 
	return words.join(" "); // Retorna o texto sem stopwords
}

var stopWords = "a,able,about,above,abst,accordance,according,accordingly,across,act,actually,added,adj,\
affected,affecting,affects,after,afterwards,again,against,ah,all,almost,alone,along,already,also,although,\
always,am,among,amongst,an,and,announce,another,any,anybody,anyhow,anymore,anyone,anything,anyway,anyways,\
anywhere,apparently,approximately,are,aren,arent,arise,around,as,aside,ask,asking,at,auth,available,away,awfully,\
b,back,be,became,because,become,becomes,becoming,been,before,beforehand,begin,beginning,beginnings,begins,behind,\
being,believe,below,beside,besides,between,beyond,biol,both,brief,briefly,but,by,c,ca,came,can,cannot,can't,cause,causes,\
certain,certainly,co,com,come,comes,contain,containing,contains,could,couldnt,d,date,did,didn't,different,do,does,doesn't,\
doing,done,don't,down,downwards,due,during,e,each,ed,edu,effect,eg,eight,eighty,either,else,elsewhere,end,ending,enough,\
especially,et,et-al,etc,even,ever,every,everybody,everyone,everything,everywhere,ex,except,f,far,few,ff,fifth,first,five,fix,\
followed,following,follows,for,former,formerly,forth,found,four,from,further,furthermore,g,gave,get,gets,getting,give,given,gives,\
giving,go,goes,gone,got,gotten,h,had,happens,hardly,has,hasn't,have,haven't,having,he,hed,hence,her,here,hereafter,hereby,herein,\
heres,hereupon,hers,herself,hes,hi,hid,him,himself,his,hither,home,how,howbeit,however,hundred,i,id,ie,if,i'll,im,immediate,\
immediately,importance,important,in,inc,indeed,index,information,instead,into,invention,inward,is,isn't,it,itd,it'll,its,itself,\
i've,j,just,k,keep,keeps,kept,kg,km,know,known,knows,l,largely,last,lately,later,latter,latterly,least,less,lest,let,lets,like,\
liked,likely,line,little,'ll,look,looking,looks,ltd,m,made,mainly,make,makes,many,may,maybe,me,mean,means,meantime,meanwhile,\
merely,mg,might,million,miss,ml,more,moreover,most,mostly,mr,mrs,much,mug,must,my,myself,n,na,name,namely,nay,nd,near,nearly,\
necessarily,necessary,need,needs,neither,never,nevertheless,new,next,nine,ninety,no,nobody,non,none,nonetheless,noone,nor,\
normally,nos,not,noted,nothing,now,nowhere,o,obtain,obtained,obviously,of,off,often,oh,ok,okay,old,omitted,on,once,one,ones,\
only,onto,or,ord,other,others,otherwise,ought,our,ours,ourselves,out,outside,over,overall,owing,own,p,page,pages,part,\
particular,particularly,past,per,perhaps,placed,please,plus,poorly,possible,possibly,potentially,pp,predominantly,present,\
previously,primarily,probably,promptly,proud,provides,put,q,que,quickly,quite,qv,r,ran,rather,rd,re,readily,really,recent,\
recently,ref,refs,regarding,regardless,regards,related,relatively,research,respectively,resulted,resulting,results,right,run,s,\
said,same,saw,say,saying,says,sec,section,see,seeing,seem,seemed,seeming,seems,seen,self,selves,sent,seven,several,shall,she,shed,\
she'll,shes,should,shouldn't,show,showed,shown,showns,shows,significant,significantly,similar,similarly,since,six,slightly,so,\
some,somebody,somehow,someone,somethan,something,sometime,sometimes,somewhat,somewhere,soon,sorry,specifically,specified,specify,\
specifying,still,stop,strongly,sub,substantially,successfully,such,sufficiently,suggest,sup,sure,t,take,taken,taking,tell,tends,\
th,than,thank,thanks,thanx,that,that'll,thats,that've,the,their,theirs,them,themselves,then,thence,there,thereafter,thereby,\
thered,therefore,therein,there'll,thereof,therere,theres,thereto,thereupon,there've,these,they,theyd,they'll,theyre,they've,\
think,this,those,thou,though,thoughh,thousand,throug,through,throughout,thru,thus,til,tip,to,together,too,took,toward,towards,\
tried,tries,truly,try,trying,ts,twice,two,u,un,under,unfortunately,unless,unlike,unlikely,until,unto,up,upon,ups,us,use,used,\
useful,usefully,usefulness,uses,using,usually,v,value,various,'ve,very,via,viz,vol,vols,vs,w,want,wants,was,wasn't,way,we,wed,\
welcome,we'll,went,were,weren't,we've,what,whatever,what'll,whats,when,whence,whenever,where,whereafter,whereas,whereby,wherein,\
wheres,whereupon,wherever,whether,which,while,whim,whither,who,whod,whoever,whole,who'll,whom,whomever,whos,whose,why,widely,\
willing,wish,with,within,without,won't,words,world,would,wouldn't,www,x,y,yes,yet,you,youd,you'll,your,youre,yours,yourself,\
yourselves,you've,z,zero,a,à,adeus,agora,aí,ainda,além,algo,algumas,alguns,ali,ano,anos,antes,ao,aos,apenas,apoio,após,aquela,aquelas,aquele,aqueles,\ aqui,aquilo,área,as,às,assim,até,atrás,através,baixo,bastante,bem,boa,boas,bom,bons,breve,cá,cada,catorze,cedo,cento,certamente,certeza,cima,\
cinco,coisa,com,como,conselho,contra,custa,da,dá,dão,daquela,daquelas,daquele,daqueles,dar,das,de,debaixo,demais,dentro,depois,desde,dessa,\
dessas,desse,desses,desta,destas,deste,destes,deve,deverá,dez,dezanove,dezasseis,dezassete,dezoito,dia,diante,diz,dizem,dizer,do,dois,dos,\
doze,duas,dúvida,e,é,ela,elas,ele,eles,em,embora,entre,era,és,essa,essas,esse,esses,esta,está,estão,estar,estas,estás,estava,este,estes,esteve,\
estive,estivemos,estiveram,estiveste,estivestes,estou,eu,exemplo,faço,falta,favor,faz,fazeis,fazem,fazemos,fazer,fazes,fez,fim,final,foi,fomos,\
for,foram,forma,foste,fostes,fui,geral,grande,grandes,grupo,há,hoje,hora,horas,isso,isto,já,lá,lado,local,logo,longe,lugar,maior,maioria,mais,mal,\
mas,máximo,me,meio,menor,menos,mês,meses,meu,meus,mil,minha,minhas,momento,muito,muitos,na,nada,não,naquela,naquelas,naquele,naqueles,nas,nem,nenhuma,\
nessa,nessas,nesse,nesses,nesta,nestas,neste,nestes,nível,no,noite,nome,nos,nós,nossa,nossas,nosso,nossos,nova,novas,nove,novo,novos,num,numa,\
número,nunca,o,obra,obrigada,obrigado,oitava,oitavo,oito,onde,ontem,onze,os,ou,outra,outras,outro,outros,para,parece,parte,partir,paucas,pela,\
pelas,pelo,pelos,perto,pode,pôde,podem,poder,põe,põem,ponto,pontos,por,porque,porquê,posição,possível,possivelmente,posso,pouca,pouco,poucos,\
primeira,primeiras,primeiro,primeiros,própria,próprias,próprio,próprios,próxima,próximas,próximo,próximos,puderam,quáis,qual,quando,quanto,quarta,\
quarto,quatro,que,quê,quem,quer,quereis,querem,queremas,queres,quero,questão,quinta,quinto,quinze,relação,sabe,sabem,são,se,segunda,segundo,sei,\
seis,sem,sempre,ser,seria,sete,sétima,sétimo,seu,seus,sexta,sexto,sim,sistema,sob,sobre,sois,somos,sou,sua,suas,tal,talvez,também,tanta,tantas,\
tanto,tão,tarde,te,tem,têm,temos,tendes,tenho,tens,ter,terceira,terceiro,teu,teus,teve,tive,tivemos,tiveram,tiveste,tivestes,toda,todas,todo,\
todos,trabalho,três,treze,tu,tua,tuas,tudo,um,uma,umas,uns,vai,vais,vão,vários,vem,vêm,vens,ver,vez,vezes,viagem,vindo,vinte,você,vocês,vos,vós,\
vossa,vossas,vosso,vossos,él,ésta,éstas,éste,éstos,última,últimas,último,últimos,a,añadió,aún,actualmente,adelante,además,afirmó,agregó,ahí,\
ahora,al,algún,algo,alguna,algunas,alguno,algunos,alrededor,ambos,ante,anterior,antes,apenas,aproximadamente,aquí,así,aseguró,aunque,ayer,bajo,\
bien,buen,buena,buenas,bueno,buenos,cómo,cada,casi,cerca,cierto,cinco,comentó,como,con,conocer,consideró,considera,contra,cosas,creo,cual,cuales,\
cualquier,cuando,cuanto,cuatro,cuenta,da,dado,dan,dar,de,debe,deben,debido,decir,dejó,del,demás,dentro,desde,después,dice,dicen,dicho,dieron,\
diferente,diferentes,dijeron,dijo,dio,donde,dos,durante,e,ejemplo,el,ella,ellas,ello,ellos,embargo,en,encuentra,entonces,entre,era,eran,es,esa,\
esas,ese,eso,esos,está,están,esta,estaba,estaban,estamos,estar,estará,estas,este,esto,estos,estoy,estuvo,ex,existe,existen,explicó,expresó,fin,\
fue,fuera,fueron,gran,grandes,ha,había,habían,haber,habrá,hace,hacen,hacer,hacerlo,hacia,haciendo,han,hasta,hay,haya,he,hecho,hemos,hicieron,hizo,\
hoy,hubo,igual,incluso,indicó,informó,junto,la,lado,las,le,les,llegó,lleva,llevar,lo,los,luego,lugar,más,manera,manifestó,mayor,me,mediante,mejor,\
mencionó,menos,mi,mientras,misma,mismas,mismo,mismos,momento,mucha,muchas,mucho,muchos,muy,nada,nadie,ni,ningún,ninguna,ningunas,ninguno,ninguno,no,\
nos,nosotras,nosotros,nuestra,nuestras,nuestro,nuestros,nueva,nuevas,nuevo,nuevos,nunca,o,ocho,otra,otras,otro,otros,para,parece,parte,partir,pasada,\
pasado,pero,pesar,poca,pocas,poco,pocos,podemos,podrá,podrán,podría,podrían,poner,por,porque,posible,próximo,próximos,primer,primera,primero,primeros,\
principalmente,propia,propias,propio,propios,pudo,pueda,puede,pueden,pues,qué,que,quedó,queremos,quién,quien,quienes,quiere,realizó,realizado,\
realizar,respecto,sí,sólo,se,señaló,sea,sean,según,segunda,segundo,seis,ser,será,serán,sería,si,sido,siempre,siendo,siete,sigue,siguiente,sin,\
sino,sobre,sola,solamente,solas,solo,solos,son,su,sus,tal,también,tampoco,tan,tanto,tenía,tendrá,tendrán,tenemos,tener,tenga,tengo,tenido,tercera,\
tiene,tienen,toda,todas,todavía,todo,todos,total,tras,trata,través,tres,tuvo,un,una,unas,uno,unos,usted,va,vamos,van,varias,varios,veces,\
ver,vez,y,ya,yo";