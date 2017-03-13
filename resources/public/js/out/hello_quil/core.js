// Compiled by ClojureScript 1.9.473 {}
goog.provide('hello_quil.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('cljsjs.matter');
cljs.core.enable_console_print_BANG_.call(null);
hello_quil.core.createRectangleBody = (function hello_quil$core$createRectangleBody(x,y,w,h,options){
var bodies = Matter.Bodies;
var box = bodies.rectangle(x,y,w,h,cljs.core.clj__GT_js.call(null,options));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"w","w",354169001),w,new cljs.core.Keyword(null,"h","h",1109658740),h,new cljs.core.Keyword(null,"box","box",1530920394),box], null);
});
hello_quil.core.addBoxToWorld_BANG_ = (function hello_quil$core$addBoxToWorld_BANG_(engine,box){
Matter.World.add(engine.world,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"box","box",1530920394).cljs$core$IFn$_invoke$arity$1(box)], null)));

return box;
});
hello_quil.core.spawnBox = (function hello_quil$core$spawnBox(engine,x,y,w,h){
var boxA = hello_quil.core.createRectangleBody.call(null,x,y,w,h,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"friction","friction",-1603603910),(1),new cljs.core.Keyword(null,"restitution","restitution",364735539),0.5], null));
return hello_quil.core.addBoxToWorld_BANG_.call(null,engine,boxA);
});
hello_quil.core.setup = (function hello_quil$core$setup(){
quil.core.frame_rate.call(null,(60));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

quil.core.rect_mode.call(null,new cljs.core.Keyword(null,"center","center",-748944368));

var ground = hello_quil.core.createRectangleBody.call(null,(250),(450),(500),(100),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"isStatic","isStatic",1002568003),true], null));
var engine = Matter.Engine.create();
hello_quil.core.addBoxToWorld_BANG_.call(null,engine,ground);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"engine","engine",1459054265),engine,new cljs.core.Keyword(null,"boxes","boxes",-420813822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ground], null),new cljs.core.Keyword(null,"millis","millis",-1338288387),quil.core.millis.call(null),new cljs.core.Keyword(null,"deltaO","deltaO",-194563206),(-1)], null);
});
hello_quil.core.update_state = (function hello_quil$core$update_state(p__30788){
var map__30791 = p__30788;
var map__30791__$1 = ((((!((map__30791 == null)))?((((map__30791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30791.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30791):map__30791);
var state = map__30791__$1;
var engine = cljs.core.get.call(null,map__30791__$1,new cljs.core.Keyword(null,"engine","engine",1459054265));
var boxes = cljs.core.get.call(null,map__30791__$1,new cljs.core.Keyword(null,"boxes","boxes",-420813822));
var millis = cljs.core.get.call(null,map__30791__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var deltaO = cljs.core.get.call(null,map__30791__$1,new cljs.core.Keyword(null,"deltaO","deltaO",-194563206));
var curMillis = quil.core.millis.call(null);
var deltaT = (((deltaO < (0)))?(16):(curMillis - millis));
var correction = (((deltaO < (0)))?(0):(deltaT / deltaO));
Matter.Engine.update(engine,deltaT,correction);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"engine","engine",1459054265),engine,new cljs.core.Keyword(null,"boxes","boxes",-420813822),boxes,new cljs.core.Keyword(null,"millis","millis",-1338288387),quil.core.millis.call(null),new cljs.core.Keyword(null,"deltaO","deltaO",-194563206),deltaT], null);
});
hello_quil.core.drawBox = (function hello_quil$core$drawBox(p__30793){
var map__30796 = p__30793;
var map__30796__$1 = ((((!((map__30796 == null)))?((((map__30796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30796.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30796):map__30796);
var w = cljs.core.get.call(null,map__30796__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__30796__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var box = cljs.core.get.call(null,map__30796__$1,new cljs.core.Keyword(null,"box","box",1530920394));
var position = box.position;
var angle = box.angle;
quil.core.push_matrix.call(null);

quil.core.translate.call(null,position.x,position.y);

quil.core.rotate.call(null,angle);

quil.core.rect.call(null,(0),(0),w,h);

return quil.core.pop_matrix.call(null);
});
hello_quil.core.mouse_dragged = (function hello_quil$core$mouse_dragged(p__30799,p__30800){
var map__30805 = p__30799;
var map__30805__$1 = ((((!((map__30805 == null)))?((((map__30805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30805.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30805):map__30805);
var state = map__30805__$1;
var boxes = cljs.core.get.call(null,map__30805__$1,new cljs.core.Keyword(null,"boxes","boxes",-420813822));
var engine = cljs.core.get.call(null,map__30805__$1,new cljs.core.Keyword(null,"engine","engine",1459054265));
var map__30806 = p__30800;
var map__30806__$1 = ((((!((map__30806 == null)))?((((map__30806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30806.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30806):map__30806);
var event = map__30806__$1;
var x = cljs.core.get.call(null,map__30806__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__30806__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var newBox = hello_quil.core.spawnBox.call(null,engine,x,y,quil.core.random.call(null,(10),(40)),quil.core.random.call(null,(10),(40)));
var newState = cljs.core.update.call(null,state,new cljs.core.Keyword(null,"boxes","boxes",-420813822),((function (newBox,map__30805,map__30805__$1,state,boxes,engine,map__30806,map__30806__$1,event,x,y){
return (function (p1__30798_SHARP_){
return cljs.core.conj.call(null,p1__30798_SHARP_,newBox);
});})(newBox,map__30805,map__30805__$1,state,boxes,engine,map__30806,map__30806__$1,event,x,y))
);
return newState;
});
hello_quil.core.draw_state = (function hello_quil$core$draw_state(p__30809){
var map__30816 = p__30809;
var map__30816__$1 = ((((!((map__30816 == null)))?((((map__30816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30816.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30816):map__30816);
var state = map__30816__$1;
var engine = cljs.core.get.call(null,map__30816__$1,new cljs.core.Keyword(null,"engine","engine",1459054265));
var boxes = cljs.core.get.call(null,map__30816__$1,new cljs.core.Keyword(null,"boxes","boxes",-420813822));
var millis = cljs.core.get.call(null,map__30816__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
quil.core.background.call(null,(240));

quil.core.fill.call(null,(32),(255),(255));

var seq__30818 = cljs.core.seq.call(null,boxes);
var chunk__30819 = null;
var count__30820 = (0);
var i__30821 = (0);
while(true){
if((i__30821 < count__30820)){
var boxA = cljs.core._nth.call(null,chunk__30819,i__30821);
hello_quil.core.drawBox.call(null,boxA);

var G__30822 = seq__30818;
var G__30823 = chunk__30819;
var G__30824 = count__30820;
var G__30825 = (i__30821 + (1));
seq__30818 = G__30822;
chunk__30819 = G__30823;
count__30820 = G__30824;
i__30821 = G__30825;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30818);
if(temp__4657__auto__){
var seq__30818__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30818__$1)){
var c__26035__auto__ = cljs.core.chunk_first.call(null,seq__30818__$1);
var G__30826 = cljs.core.chunk_rest.call(null,seq__30818__$1);
var G__30827 = c__26035__auto__;
var G__30828 = cljs.core.count.call(null,c__26035__auto__);
var G__30829 = (0);
seq__30818 = G__30826;
chunk__30819 = G__30827;
count__30820 = G__30828;
i__30821 = G__30829;
continue;
} else {
var boxA = cljs.core.first.call(null,seq__30818__$1);
hello_quil.core.drawBox.call(null,boxA);

var G__30830 = cljs.core.next.call(null,seq__30818__$1);
var G__30831 = null;
var G__30832 = (0);
var G__30833 = (0);
seq__30818 = G__30830;
chunk__30819 = G__30831;
count__30820 = G__30832;
i__30821 = G__30833;
continue;
}
} else {
return null;
}
}
break;
}
});
hello_quil.core.hello_quil = (function hello_quil$core$hello_quil(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"hello-quil",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,hello_quil.core.update_state))?(function() { 
var G__30834__delegate = function (args){
return cljs.core.apply.call(null,hello_quil.core.update_state,args);
};
var G__30834 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30835__i = 0, G__30835__a = new Array(arguments.length -  0);
while (G__30835__i < G__30835__a.length) {G__30835__a[G__30835__i] = arguments[G__30835__i + 0]; ++G__30835__i;}
  args = new cljs.core.IndexedSeq(G__30835__a,0);
} 
return G__30834__delegate.call(this,args);};
G__30834.cljs$lang$maxFixedArity = 0;
G__30834.cljs$lang$applyTo = (function (arglist__30836){
var args = cljs.core.seq(arglist__30836);
return G__30834__delegate(args);
});
G__30834.cljs$core$IFn$_invoke$arity$variadic = G__30834__delegate;
return G__30834;
})()
:hello_quil.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,hello_quil.core.setup))?(function() { 
var G__30837__delegate = function (args){
return cljs.core.apply.call(null,hello_quil.core.setup,args);
};
var G__30837 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30838__i = 0, G__30838__a = new Array(arguments.length -  0);
while (G__30838__i < G__30838__a.length) {G__30838__a[G__30838__i] = arguments[G__30838__i + 0]; ++G__30838__i;}
  args = new cljs.core.IndexedSeq(G__30838__a,0);
} 
return G__30837__delegate.call(this,args);};
G__30837.cljs$lang$maxFixedArity = 0;
G__30837.cljs$lang$applyTo = (function (arglist__30839){
var args = cljs.core.seq(arglist__30839);
return G__30837__delegate(args);
});
G__30837.cljs$core$IFn$_invoke$arity$variadic = G__30837__delegate;
return G__30837;
})()
:hello_quil.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,hello_quil.core.draw_state))?(function() { 
var G__30840__delegate = function (args){
return cljs.core.apply.call(null,hello_quil.core.draw_state,args);
};
var G__30840 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30841__i = 0, G__30841__a = new Array(arguments.length -  0);
while (G__30841__i < G__30841__a.length) {G__30841__a[G__30841__i] = arguments[G__30841__i + 0]; ++G__30841__i;}
  args = new cljs.core.IndexedSeq(G__30841__a,0);
} 
return G__30840__delegate.call(this,args);};
G__30840.cljs$lang$maxFixedArity = 0;
G__30840.cljs$lang$applyTo = (function (arglist__30842){
var args = cljs.core.seq(arglist__30842);
return G__30840__delegate(args);
});
G__30840.cljs$core$IFn$_invoke$arity$variadic = G__30840__delegate;
return G__30840;
})()
:hello_quil.core.draw_state),new cljs.core.Keyword(null,"mouse-dragged","mouse-dragged",-1220073441),((cljs.core.fn_QMARK_.call(null,hello_quil.core.mouse_dragged))?(function() { 
var G__30843__delegate = function (args){
return cljs.core.apply.call(null,hello_quil.core.mouse_dragged,args);
};
var G__30843 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30844__i = 0, G__30844__a = new Array(arguments.length -  0);
while (G__30844__i < G__30844__a.length) {G__30844__a[G__30844__i] = arguments[G__30844__i + 0]; ++G__30844__i;}
  args = new cljs.core.IndexedSeq(G__30844__a,0);
} 
return G__30843__delegate.call(this,args);};
G__30843.cljs$lang$maxFixedArity = 0;
G__30843.cljs$lang$applyTo = (function (arglist__30845){
var args = cljs.core.seq(arglist__30845);
return G__30843__delegate(args);
});
G__30843.cljs$core$IFn$_invoke$arity$variadic = G__30843__delegate;
return G__30843;
})()
:hello_quil.core.mouse_dragged));
});
goog.exportSymbol('hello_quil.core.hello_quil', hello_quil.core.hello_quil);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__26414__26415__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__26414__26415__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),hello_quil.core.hello_quil,new cljs.core.Keyword(null,"host-id","host-id",742376279),"hello-quil"], null));
}

//# sourceMappingURL=core.js.map?rel=1489383406561