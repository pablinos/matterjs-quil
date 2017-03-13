// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__25827__auto__,writer__25828__auto__,opt__25829__auto__){
return cljs.core._write.call(null,writer__25828__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__26336__auto__ = [];
var len__26329__auto___34632 = arguments.length;
var i__26330__auto___34633 = (0);
while(true){
if((i__26330__auto___34633 < len__26329__auto___34632)){
args__26336__auto__.push((arguments[i__26330__auto___34633]));

var G__34634 = (i__26330__auto___34633 + (1));
i__26330__auto___34633 = G__34634;
continue;
} else {
}
break;
}

var argseq__26337__auto__ = ((((0) < args__26336__auto__.length))?(new cljs.core.IndexedSeq(args__26336__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__26337__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq34631){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34631));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__26336__auto__ = [];
var len__26329__auto___34636 = arguments.length;
var i__26330__auto___34637 = (0);
while(true){
if((i__26330__auto___34637 < len__26329__auto___34636)){
args__26336__auto__.push((arguments[i__26330__auto___34637]));

var G__34638 = (i__26330__auto___34637 + (1));
i__26330__auto___34637 = G__34638;
continue;
} else {
}
break;
}

var argseq__26337__auto__ = ((((0) < args__26336__auto__.length))?(new cljs.core.IndexedSeq(args__26336__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26337__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq34635){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34635));
});

var g_QMARK__34639 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_34640 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__34639){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__34639))
,null));
var mkg_34641 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__34639,g_34640){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__34639,g_34640))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__34639,g_34640,mkg_34641){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__34639).call(null,x);
});})(g_QMARK__34639,g_34640,mkg_34641))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__34639,g_34640,mkg_34641){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_34641).call(null,gfn);
});})(g_QMARK__34639,g_34640,mkg_34641))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__34639,g_34640,mkg_34641){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_34640).call(null,generator);
});})(g_QMARK__34639,g_34640,mkg_34641))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__34603__auto___34661 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__34603__auto___34661){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__26336__auto__ = [];
var len__26329__auto___34662 = arguments.length;
var i__26330__auto___34663 = (0);
while(true){
if((i__26330__auto___34663 < len__26329__auto___34662)){
args__26336__auto__.push((arguments[i__26330__auto___34663]));

var G__34664 = (i__26330__auto___34663 + (1));
i__26330__auto___34663 = G__34664;
continue;
} else {
}
break;
}

var argseq__26337__auto__ = ((((0) < args__26336__auto__.length))?(new cljs.core.IndexedSeq(args__26336__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__26337__auto__);
});})(g__34603__auto___34661))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34603__auto___34661){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34603__auto___34661),args);
});})(g__34603__auto___34661))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__34603__auto___34661){
return (function (seq34642){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34642));
});})(g__34603__auto___34661))
;


var g__34603__auto___34665 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__34603__auto___34665){
return (function cljs$spec$impl$gen$list(var_args){
var args__26336__auto__ = [];
var len__26329__auto___34666 = arguments.length;
var i__26330__auto___34667 = (0);
while(true){
if((i__26330__auto___34667 < len__26329__auto___34666)){
args__26336__auto__.push((arguments[i__26330__auto___34667]));

var G__34668 = (i__26330__auto___34667 + (1));
i__26330__auto___34667 = G__34668;
continue;
} else {
}
break;
}

var argseq__26337__auto__ = ((((0) < args__26336__auto__.length))?(new cljs.core.IndexedSeq(args__26336__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__26337__auto__);
});})(g__34603__auto___34665))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34603__auto___34665){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34603__auto___34665),args);
});})(g__34603__auto___34665))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__34603__auto___34665){
return (function (seq34643){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34643));
});})(g__34603__auto___34665))
;


var g__34603__auto___34669 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__34603__auto___34669){
return (function cljs$spec$impl$gen$map(var_args){
var args__26336__auto__ = [];
var len__26329__auto___34670 = arguments.length;
var i__26330__auto___34671 = (0);
while(true){
if((i__26330__auto___34671 < len__26329__auto___34670)){
args__26336__auto__.push((arguments[i__26330__auto___34671]));

var G__34672 = (i__26330__auto___34671 + (1));
i__26330__auto___34671 = G__34672;
continue;
} else {
}
break;
}

var argseq__26337__auto__ = ((((0) < args__26336__auto__.length))?(new cljs.core.IndexedSeq(args__26336__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__26337__auto__);
});})(g__34603__auto___34669))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34603__auto___34669){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34603__auto___34669),args);
});})(g__34603__auto___34669))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__34603__auto___34669){
return (function (seq34644){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34644));
});})(g__34603__auto___34669))
;


var g__34603__auto___34673 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__34603__auto___34673){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__26336__auto__ = [];
var len__26329__auto___34674 = arguments.length;
var i__26330__auto___34675 = (0);
while(true){
if((i__26330__auto___34675 < len__26329__auto___34674)){
args__26336__auto__.push((arguments[i__26330__auto___34675]));

var G__34676 = (i__26330__auto___34675 + (1));
i__26330__auto___34675 = G__34676;
continue;
} else {
}
break;
}

var argseq__26337__auto__ = ((((0) < args__26336__auto__.length))?(new cljs.core.IndexedSeq(args__26336__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__26337__auto__);
});})(g__34603__auto___34673))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34603__auto___34673){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34603__auto___34673),args);
});})(g__34603__auto___34673))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__34603__auto___34673){
return (function (seq34645){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34645));
});})(g__34603__auto___34673))
;


var g__34603__auto___34677 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__34603__auto___34677){
return (function cljs$spec$impl$gen$set(var_args){
var args__26336__auto__ = [];
var len__26329__auto___34678 = arguments.length;
var i__26330__auto___34679 = (0);
while(true){
if((i__26330__auto___34679 < len__26329__auto___34678)){
args__26336__auto__.push((arguments[i__26330__auto___34679]));

var G__34680 = (i__26330__auto___34679 + (1));
i__26330__auto___34679 = G__34680;
continue;
} else {
}
break;
}

var argseq__26337__auto__ = ((((0) < args__26336__auto__.length))?(new cljs.core.IndexedSeq(args__26336__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__26337__auto__);
});})(g__34603__auto___34677))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34603__auto___34677){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34603__auto___34677),args);
});})(g__34603__auto___34677))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__34603__auto___34677){
return (function (seq34646){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34646));
});})(g__34603__auto___34677))
;


var g__34603__auto___34681 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__34603__auto___34681){
return (function cljs$spec$impl$gen$vector(var_args){
var args__26336__auto__ = [];
var len__26329__auto___34682 = arguments.length;
var i__26330__auto___34683 = (0);
while(true){
if((i__26330__auto___34683 < len__26329__auto___34682)){
args__26336__auto__.push((arguments[i__26330__auto___34683]));

var G__34684 = (i__26330__auto___34683 + (1));
i__26330__auto___34683 = G__34684;
continue;
} else {
}
break;
}

var argseq__26337__auto__ = ((((0) < args__26336__auto__.length))?(new cljs.core.IndexedSeq(args__26336__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__26337__auto__);
});})(g__34603__auto___34681))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34603__auto___34681){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34603__auto___34681),args);
});})(g__34603__auto___34681))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__34603__auto___34681){
return (function (seq34647){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34647));
});})(g__34603__auto___34681))
;


var g__34603__auto___34685 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__34603__auto___34685){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__26336__auto__ = [];
var len__26329__auto___34686 = arguments.length;
var i__26330__auto___34687 = (0);
while(true){
if((i__26330__auto___34687 < len__26329__auto___34686)){
args__26336__auto__.push((arguments[i__26330__auto___34687]));

var G__34688 = (i__26330__auto___34687 + (1));
i__26330__auto___34687 = G__34688;
continue;
} else {
}
break;
}

var argseq__26337__auto__ = ((((0) < args__26336__auto__.length))?(new cljs.core.IndexedSeq(args__26336__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__26337__auto__);
});})(g__34603__auto___34685))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34603__auto___34685){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34603__auto___34685),args);
});})(g__34603__auto___34685))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__34603__auto___34685){
return (function (seq34648){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34648));
});})(g__34603__auto___34685))
;


var g__34603__auto___34689 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__34603__auto___34689){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__26336__auto__ = [];
var len__26329__auto___34690 = arguments.length;
var i__26330__auto___34691 = (0);
while(true){
if((i__26330__auto___34691 < len__26329__auto___34690)){
args__26336__auto__.push((arguments[i__26330__auto___34691]));

var G__34692 = (i__26330__auto___34691 + (1));
i__26330__auto___34691 = G__34692;
continue;
} else {
}
break;
}

var argseq__26337__auto__ = ((((0) < args__26336__auto__.length))?(new cljs.core.IndexedSeq(args__26336__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__26337__auto__);
});})(g__34603__auto___34689))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34603__auto___34689){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34603__auto___34689),args);
});})(g__34603__auto___34689))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__34603__auto___34689){
return (function (seq34649){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34649));
});})(g__34603__auto___34689))
;


var g__34603__auto___34693 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__34603__auto___34693){
return (function cljs$spec$impl$gen$elements(var_args){
var args__26336__auto__ = [];
var len__26329__auto___34694 = arguments.length;
var i__26330__auto___34695 = (0);
while(true){
if((i__26330__auto___34695 < len__26329__auto___34694)){
args__26336__auto__.push((arguments[i__26330__auto___34695]));

var G__34696 = (i__26330__auto___34695 + (1));
i__26330__auto___34695 = G__34696;
continue;
} else {
}
break;
}

var argseq__26337__auto__ = ((((0) < args__26336__auto__.length))?(new cljs.core.IndexedSeq(args__26336__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__26337__auto__);
});})(g__34603__auto___34693))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34603__auto___34693){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34603__auto___34693),args);
});})(g__34603__auto___34693))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__34603__auto___34693){
return (function (seq34650){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34650));
});})(g__34603__auto___34693))
;


var g__34603__auto___34697 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__34603__auto___34697){
return (function cljs$spec$impl$gen$bind(var_args){
var args__26336__auto__ = [];
var len__26329__auto___34698 = arguments.length;
var i__26330__auto___34699 = (0);
while(true){
if((i__26330__auto___34699 < len__26329__auto___34698)){
args__26336__auto__.push((arguments[i__26330__auto___34699]));

var G__34700 = (i__26330__auto___34699 + (1));
i__26330__auto___34699 = G__34700;
continue;
} else {
}
break;
}

var argseq__26337__auto__ = ((((0) < args__26336__auto__.length))?(new cljs.core.IndexedSeq(args__26336__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__26337__auto__);
});})(g__34603__auto___34697))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34603__auto___34697){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34603__auto___34697),args);
});})(g__34603__auto___34697))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__34603__auto___34697){
return (function (seq34651){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34651));
});})(g__34603__auto___34697))
;


var g__34603__auto___34701 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__34603__auto___34701){
return (function cljs$spec$impl$gen$choose(var_args){
var args__26336__auto__ = [];
var len__26329__auto___34702 = arguments.length;
var i__26330__auto___34703 = (0);
while(true){
if((i__26330__auto___34703 < len__26329__auto___34702)){
args__26336__auto__.push((arguments[i__26330__auto___34703]));

var G__34704 = (i__26330__auto___34703 + (1));
i__26330__auto___34703 = G__34704;
continue;
} else {
}
break;
}

var argseq__26337__auto__ = ((((0) < args__26336__auto__.length))?(new cljs.core.IndexedSeq(args__26336__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__26337__auto__);
});})(g__34603__auto___34701))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34603__auto___34701){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34603__auto___34701),args);
});})(g__34603__auto___34701))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__34603__auto___34701){
return (function (seq34652){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34652));
});})(g__34603__auto___34701))
;


var g__34603__auto___34705 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__34603__auto___34705){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__26336__auto__ = [];
var len__26329__auto___34706 = arguments.length;
var i__26330__auto___34707 = (0);
while(true){
if((i__26330__auto___34707 < len__26329__auto___34706)){
args__26336__auto__.push((arguments[i__26330__auto___34707]));

var G__34708 = (i__26330__auto___34707 + (1));
i__26330__auto___34707 = G__34708;
continue;
} else {
}
break;
}

var argseq__26337__auto__ = ((((0) < args__26336__auto__.length))?(new cljs.core.IndexedSeq(args__26336__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__26337__auto__);
});})(g__34603__auto___34705))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34603__auto___34705){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34603__auto___34705),args);
});})(g__34603__auto___34705))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__34603__auto___34705){
return (function (seq34653){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34653));
});})(g__34603__auto___34705))
;


var g__34603__auto___34709 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__34603__auto___34709){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__26336__auto__ = [];
var len__26329__auto___34710 = arguments.length;
var i__26330__auto___34711 = (0);
while(true){
if((i__26330__auto___34711 < len__26329__auto___34710)){
args__26336__auto__.push((arguments[i__26330__auto___34711]));

var G__34712 = (i__26330__auto___34711 + (1));
i__26330__auto___34711 = G__34712;
continue;
} else {
}
break;
}

var argseq__26337__auto__ = ((((0) < args__26336__auto__.length))?(new cljs.core.IndexedSeq(args__26336__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__26337__auto__);
});})(g__34603__auto___34709))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34603__auto___34709){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34603__auto___34709),args);
});})(g__34603__auto___34709))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__34603__auto___34709){
return (function (seq34654){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34654));
});})(g__34603__auto___34709))
;


var g__34603__auto___34713 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__34603__auto___34713){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__26336__auto__ = [];
var len__26329__auto___34714 = arguments.length;
var i__26330__auto___34715 = (0);
while(true){
if((i__26330__auto___34715 < len__26329__auto___34714)){
args__26336__auto__.push((arguments[i__26330__auto___34715]));

var G__34716 = (i__26330__auto___34715 + (1));
i__26330__auto___34715 = G__34716;
continue;
} else {
}
break;
}

var argseq__26337__auto__ = ((((0) < args__26336__auto__.length))?(new cljs.core.IndexedSeq(args__26336__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__26337__auto__);
});})(g__34603__auto___34713))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34603__auto___34713){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34603__auto___34713),args);
});})(g__34603__auto___34713))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__34603__auto___34713){
return (function (seq34655){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34655));
});})(g__34603__auto___34713))
;


var g__34603__auto___34717 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__34603__auto___34717){
return (function cljs$spec$impl$gen$sample(var_args){
var args__26336__auto__ = [];
var len__26329__auto___34718 = arguments.length;
var i__26330__auto___34719 = (0);
while(true){
if((i__26330__auto___34719 < len__26329__auto___34718)){
args__26336__auto__.push((arguments[i__26330__auto___34719]));

var G__34720 = (i__26330__auto___34719 + (1));
i__26330__auto___34719 = G__34720;
continue;
} else {
}
break;
}

var argseq__26337__auto__ = ((((0) < args__26336__auto__.length))?(new cljs.core.IndexedSeq(args__26336__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__26337__auto__);
});})(g__34603__auto___34717))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34603__auto___34717){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34603__auto___34717),args);
});})(g__34603__auto___34717))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__34603__auto___34717){
return (function (seq34656){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34656));
});})(g__34603__auto___34717))
;


var g__34603__auto___34721 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__34603__auto___34721){
return (function cljs$spec$impl$gen$return(var_args){
var args__26336__auto__ = [];
var len__26329__auto___34722 = arguments.length;
var i__26330__auto___34723 = (0);
while(true){
if((i__26330__auto___34723 < len__26329__auto___34722)){
args__26336__auto__.push((arguments[i__26330__auto___34723]));

var G__34724 = (i__26330__auto___34723 + (1));
i__26330__auto___34723 = G__34724;
continue;
} else {
}
break;
}

var argseq__26337__auto__ = ((((0) < args__26336__auto__.length))?(new cljs.core.IndexedSeq(args__26336__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__26337__auto__);
});})(g__34603__auto___34721))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34603__auto___34721){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34603__auto___34721),args);
});})(g__34603__auto___34721))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__34603__auto___34721){
return (function (seq34657){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34657));
});})(g__34603__auto___34721))
;


var g__34603__auto___34725 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__34603__auto___34725){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__26336__auto__ = [];
var len__26329__auto___34726 = arguments.length;
var i__26330__auto___34727 = (0);
while(true){
if((i__26330__auto___34727 < len__26329__auto___34726)){
args__26336__auto__.push((arguments[i__26330__auto___34727]));

var G__34728 = (i__26330__auto___34727 + (1));
i__26330__auto___34727 = G__34728;
continue;
} else {
}
break;
}

var argseq__26337__auto__ = ((((0) < args__26336__auto__.length))?(new cljs.core.IndexedSeq(args__26336__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26337__auto__);
});})(g__34603__auto___34725))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34603__auto___34725){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34603__auto___34725),args);
});})(g__34603__auto___34725))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__34603__auto___34725){
return (function (seq34658){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34658));
});})(g__34603__auto___34725))
;


var g__34603__auto___34729 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__34603__auto___34729){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__26336__auto__ = [];
var len__26329__auto___34730 = arguments.length;
var i__26330__auto___34731 = (0);
while(true){
if((i__26330__auto___34731 < len__26329__auto___34730)){
args__26336__auto__.push((arguments[i__26330__auto___34731]));

var G__34732 = (i__26330__auto___34731 + (1));
i__26330__auto___34731 = G__34732;
continue;
} else {
}
break;
}

var argseq__26337__auto__ = ((((0) < args__26336__auto__.length))?(new cljs.core.IndexedSeq(args__26336__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26337__auto__);
});})(g__34603__auto___34729))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34603__auto___34729){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34603__auto___34729),args);
});})(g__34603__auto___34729))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__34603__auto___34729){
return (function (seq34659){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34659));
});})(g__34603__auto___34729))
;


var g__34603__auto___34733 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__34603__auto___34733){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__26336__auto__ = [];
var len__26329__auto___34734 = arguments.length;
var i__26330__auto___34735 = (0);
while(true){
if((i__26330__auto___34735 < len__26329__auto___34734)){
args__26336__auto__.push((arguments[i__26330__auto___34735]));

var G__34736 = (i__26330__auto___34735 + (1));
i__26330__auto___34735 = G__34736;
continue;
} else {
}
break;
}

var argseq__26337__auto__ = ((((0) < args__26336__auto__.length))?(new cljs.core.IndexedSeq(args__26336__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__26337__auto__);
});})(g__34603__auto___34733))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34603__auto___34733){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34603__auto___34733),args);
});})(g__34603__auto___34733))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__34603__auto___34733){
return (function (seq34660){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34660));
});})(g__34603__auto___34733))
;

var g__34616__auto___34758 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__34616__auto___34758){
return (function cljs$spec$impl$gen$any(var_args){
var args__26336__auto__ = [];
var len__26329__auto___34759 = arguments.length;
var i__26330__auto___34760 = (0);
while(true){
if((i__26330__auto___34760 < len__26329__auto___34759)){
args__26336__auto__.push((arguments[i__26330__auto___34760]));

var G__34761 = (i__26330__auto___34760 + (1));
i__26330__auto___34760 = G__34761;
continue;
} else {
}
break;
}

var argseq__26337__auto__ = ((((0) < args__26336__auto__.length))?(new cljs.core.IndexedSeq(args__26336__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__26337__auto__);
});})(g__34616__auto___34758))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34616__auto___34758){
return (function (args){
return cljs.core.deref.call(null,g__34616__auto___34758);
});})(g__34616__auto___34758))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__34616__auto___34758){
return (function (seq34737){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34737));
});})(g__34616__auto___34758))
;


var g__34616__auto___34762 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__34616__auto___34762){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__26336__auto__ = [];
var len__26329__auto___34763 = arguments.length;
var i__26330__auto___34764 = (0);
while(true){
if((i__26330__auto___34764 < len__26329__auto___34763)){
args__26336__auto__.push((arguments[i__26330__auto___34764]));

var G__34765 = (i__26330__auto___34764 + (1));
i__26330__auto___34764 = G__34765;
continue;
} else {
}
break;
}

var argseq__26337__auto__ = ((((0) < args__26336__auto__.length))?(new cljs.core.IndexedSeq(args__26336__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__26337__auto__);
});})(g__34616__auto___34762))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34616__auto___34762){
return (function (args){
return cljs.core.deref.call(null,g__34616__auto___34762);
});})(g__34616__auto___34762))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__34616__auto___34762){
return (function (seq34738){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34738));
});})(g__34616__auto___34762))
;


var g__34616__auto___34766 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__34616__auto___34766){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__26336__auto__ = [];
var len__26329__auto___34767 = arguments.length;
var i__26330__auto___34768 = (0);
while(true){
if((i__26330__auto___34768 < len__26329__auto___34767)){
args__26336__auto__.push((arguments[i__26330__auto___34768]));

var G__34769 = (i__26330__auto___34768 + (1));
i__26330__auto___34768 = G__34769;
continue;
} else {
}
break;
}

var argseq__26337__auto__ = ((((0) < args__26336__auto__.length))?(new cljs.core.IndexedSeq(args__26336__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__26337__auto__);
});})(g__34616__auto___34766))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34616__auto___34766){
return (function (args){
return cljs.core.deref.call(null,g__34616__auto___34766);
});})(g__34616__auto___34766))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__34616__auto___34766){
return (function (seq34739){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34739));
});})(g__34616__auto___34766))
;


var g__34616__auto___34770 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__34616__auto___34770){
return (function cljs$spec$impl$gen$char(var_args){
var args__26336__auto__ = [];
var len__26329__auto___34771 = arguments.length;
var i__26330__auto___34772 = (0);
while(true){
if((i__26330__auto___34772 < len__26329__auto___34771)){
args__26336__auto__.push((arguments[i__26330__auto___34772]));

var G__34773 = (i__26330__auto___34772 + (1));
i__26330__auto___34772 = G__34773;
continue;
} else {
}
break;
}

var argseq__26337__auto__ = ((((0) < args__26336__auto__.length))?(new cljs.core.IndexedSeq(args__26336__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__26337__auto__);
});})(g__34616__auto___34770))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34616__auto___34770){
return (function (args){
return cljs.core.deref.call(null,g__34616__auto___34770);
});})(g__34616__auto___34770))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__34616__auto___34770){
return (function (seq34740){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34740));
});})(g__34616__auto___34770))
;


var g__34616__auto___34774 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__34616__auto___34774){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__26336__auto__ = [];
var len__26329__auto___34775 = arguments.length;
var i__26330__auto___34776 = (0);
while(true){
if((i__26330__auto___34776 < len__26329__auto___34775)){
args__26336__auto__.push((arguments[i__26330__auto___34776]));

var G__34777 = (i__26330__auto___34776 + (1));
i__26330__auto___34776 = G__34777;
continue;
} else {
}
break;
}

var argseq__26337__auto__ = ((((0) < args__26336__auto__.length))?(new cljs.core.IndexedSeq(args__26336__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__26337__auto__);
});})(g__34616__auto___34774))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34616__auto___34774){
return (function (args){
return cljs.core.deref.call(null,g__34616__auto___34774);
});})(g__34616__auto___34774))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__34616__auto___34774){
return (function (seq34741){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34741));
});})(g__34616__auto___34774))
;


var g__34616__auto___34778 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__34616__auto___34778){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__26336__auto__ = [];
var len__26329__auto___34779 = arguments.length;
var i__26330__auto___34780 = (0);
while(true){
if((i__26330__auto___34780 < len__26329__auto___34779)){
args__26336__auto__.push((arguments[i__26330__auto___34780]));

var G__34781 = (i__26330__auto___34780 + (1));
i__26330__auto___34780 = G__34781;
continue;
} else {
}
break;
}

var argseq__26337__auto__ = ((((0) < args__26336__auto__.length))?(new cljs.core.IndexedSeq(args__26336__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__26337__auto__);
});})(g__34616__auto___34778))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34616__auto___34778){
return (function (args){
return cljs.core.deref.call(null,g__34616__auto___34778);
});})(g__34616__auto___34778))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__34616__auto___34778){
return (function (seq34742){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34742));
});})(g__34616__auto___34778))
;


var g__34616__auto___34782 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__34616__auto___34782){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__26336__auto__ = [];
var len__26329__auto___34783 = arguments.length;
var i__26330__auto___34784 = (0);
while(true){
if((i__26330__auto___34784 < len__26329__auto___34783)){
args__26336__auto__.push((arguments[i__26330__auto___34784]));

var G__34785 = (i__26330__auto___34784 + (1));
i__26330__auto___34784 = G__34785;
continue;
} else {
}
break;
}

var argseq__26337__auto__ = ((((0) < args__26336__auto__.length))?(new cljs.core.IndexedSeq(args__26336__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__26337__auto__);
});})(g__34616__auto___34782))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34616__auto___34782){
return (function (args){
return cljs.core.deref.call(null,g__34616__auto___34782);
});})(g__34616__auto___34782))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__34616__auto___34782){
return (function (seq34743){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34743));
});})(g__34616__auto___34782))
;


var g__34616__auto___34786 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__34616__auto___34786){
return (function cljs$spec$impl$gen$double(var_args){
var args__26336__auto__ = [];
var len__26329__auto___34787 = arguments.length;
var i__26330__auto___34788 = (0);
while(true){
if((i__26330__auto___34788 < len__26329__auto___34787)){
args__26336__auto__.push((arguments[i__26330__auto___34788]));

var G__34789 = (i__26330__auto___34788 + (1));
i__26330__auto___34788 = G__34789;
continue;
} else {
}
break;
}

var argseq__26337__auto__ = ((((0) < args__26336__auto__.length))?(new cljs.core.IndexedSeq(args__26336__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__26337__auto__);
});})(g__34616__auto___34786))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34616__auto___34786){
return (function (args){
return cljs.core.deref.call(null,g__34616__auto___34786);
});})(g__34616__auto___34786))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__34616__auto___34786){
return (function (seq34744){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34744));
});})(g__34616__auto___34786))
;


var g__34616__auto___34790 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__34616__auto___34790){
return (function cljs$spec$impl$gen$int(var_args){
var args__26336__auto__ = [];
var len__26329__auto___34791 = arguments.length;
var i__26330__auto___34792 = (0);
while(true){
if((i__26330__auto___34792 < len__26329__auto___34791)){
args__26336__auto__.push((arguments[i__26330__auto___34792]));

var G__34793 = (i__26330__auto___34792 + (1));
i__26330__auto___34792 = G__34793;
continue;
} else {
}
break;
}

var argseq__26337__auto__ = ((((0) < args__26336__auto__.length))?(new cljs.core.IndexedSeq(args__26336__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__26337__auto__);
});})(g__34616__auto___34790))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34616__auto___34790){
return (function (args){
return cljs.core.deref.call(null,g__34616__auto___34790);
});})(g__34616__auto___34790))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__34616__auto___34790){
return (function (seq34745){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34745));
});})(g__34616__auto___34790))
;


var g__34616__auto___34794 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__34616__auto___34794){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__26336__auto__ = [];
var len__26329__auto___34795 = arguments.length;
var i__26330__auto___34796 = (0);
while(true){
if((i__26330__auto___34796 < len__26329__auto___34795)){
args__26336__auto__.push((arguments[i__26330__auto___34796]));

var G__34797 = (i__26330__auto___34796 + (1));
i__26330__auto___34796 = G__34797;
continue;
} else {
}
break;
}

var argseq__26337__auto__ = ((((0) < args__26336__auto__.length))?(new cljs.core.IndexedSeq(args__26336__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__26337__auto__);
});})(g__34616__auto___34794))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34616__auto___34794){
return (function (args){
return cljs.core.deref.call(null,g__34616__auto___34794);
});})(g__34616__auto___34794))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__34616__auto___34794){
return (function (seq34746){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34746));
});})(g__34616__auto___34794))
;


var g__34616__auto___34798 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__34616__auto___34798){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__26336__auto__ = [];
var len__26329__auto___34799 = arguments.length;
var i__26330__auto___34800 = (0);
while(true){
if((i__26330__auto___34800 < len__26329__auto___34799)){
args__26336__auto__.push((arguments[i__26330__auto___34800]));

var G__34801 = (i__26330__auto___34800 + (1));
i__26330__auto___34800 = G__34801;
continue;
} else {
}
break;
}

var argseq__26337__auto__ = ((((0) < args__26336__auto__.length))?(new cljs.core.IndexedSeq(args__26336__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__26337__auto__);
});})(g__34616__auto___34798))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34616__auto___34798){
return (function (args){
return cljs.core.deref.call(null,g__34616__auto___34798);
});})(g__34616__auto___34798))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__34616__auto___34798){
return (function (seq34747){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34747));
});})(g__34616__auto___34798))
;


var g__34616__auto___34802 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__34616__auto___34802){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__26336__auto__ = [];
var len__26329__auto___34803 = arguments.length;
var i__26330__auto___34804 = (0);
while(true){
if((i__26330__auto___34804 < len__26329__auto___34803)){
args__26336__auto__.push((arguments[i__26330__auto___34804]));

var G__34805 = (i__26330__auto___34804 + (1));
i__26330__auto___34804 = G__34805;
continue;
} else {
}
break;
}

var argseq__26337__auto__ = ((((0) < args__26336__auto__.length))?(new cljs.core.IndexedSeq(args__26336__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__26337__auto__);
});})(g__34616__auto___34802))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34616__auto___34802){
return (function (args){
return cljs.core.deref.call(null,g__34616__auto___34802);
});})(g__34616__auto___34802))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__34616__auto___34802){
return (function (seq34748){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34748));
});})(g__34616__auto___34802))
;


var g__34616__auto___34806 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__34616__auto___34806){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__26336__auto__ = [];
var len__26329__auto___34807 = arguments.length;
var i__26330__auto___34808 = (0);
while(true){
if((i__26330__auto___34808 < len__26329__auto___34807)){
args__26336__auto__.push((arguments[i__26330__auto___34808]));

var G__34809 = (i__26330__auto___34808 + (1));
i__26330__auto___34808 = G__34809;
continue;
} else {
}
break;
}

var argseq__26337__auto__ = ((((0) < args__26336__auto__.length))?(new cljs.core.IndexedSeq(args__26336__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__26337__auto__);
});})(g__34616__auto___34806))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34616__auto___34806){
return (function (args){
return cljs.core.deref.call(null,g__34616__auto___34806);
});})(g__34616__auto___34806))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__34616__auto___34806){
return (function (seq34749){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34749));
});})(g__34616__auto___34806))
;


var g__34616__auto___34810 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__34616__auto___34810){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__26336__auto__ = [];
var len__26329__auto___34811 = arguments.length;
var i__26330__auto___34812 = (0);
while(true){
if((i__26330__auto___34812 < len__26329__auto___34811)){
args__26336__auto__.push((arguments[i__26330__auto___34812]));

var G__34813 = (i__26330__auto___34812 + (1));
i__26330__auto___34812 = G__34813;
continue;
} else {
}
break;
}

var argseq__26337__auto__ = ((((0) < args__26336__auto__.length))?(new cljs.core.IndexedSeq(args__26336__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__26337__auto__);
});})(g__34616__auto___34810))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34616__auto___34810){
return (function (args){
return cljs.core.deref.call(null,g__34616__auto___34810);
});})(g__34616__auto___34810))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__34616__auto___34810){
return (function (seq34750){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34750));
});})(g__34616__auto___34810))
;


var g__34616__auto___34814 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__34616__auto___34814){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__26336__auto__ = [];
var len__26329__auto___34815 = arguments.length;
var i__26330__auto___34816 = (0);
while(true){
if((i__26330__auto___34816 < len__26329__auto___34815)){
args__26336__auto__.push((arguments[i__26330__auto___34816]));

var G__34817 = (i__26330__auto___34816 + (1));
i__26330__auto___34816 = G__34817;
continue;
} else {
}
break;
}

var argseq__26337__auto__ = ((((0) < args__26336__auto__.length))?(new cljs.core.IndexedSeq(args__26336__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__26337__auto__);
});})(g__34616__auto___34814))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34616__auto___34814){
return (function (args){
return cljs.core.deref.call(null,g__34616__auto___34814);
});})(g__34616__auto___34814))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__34616__auto___34814){
return (function (seq34751){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34751));
});})(g__34616__auto___34814))
;


var g__34616__auto___34818 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__34616__auto___34818){
return (function cljs$spec$impl$gen$string(var_args){
var args__26336__auto__ = [];
var len__26329__auto___34819 = arguments.length;
var i__26330__auto___34820 = (0);
while(true){
if((i__26330__auto___34820 < len__26329__auto___34819)){
args__26336__auto__.push((arguments[i__26330__auto___34820]));

var G__34821 = (i__26330__auto___34820 + (1));
i__26330__auto___34820 = G__34821;
continue;
} else {
}
break;
}

var argseq__26337__auto__ = ((((0) < args__26336__auto__.length))?(new cljs.core.IndexedSeq(args__26336__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__26337__auto__);
});})(g__34616__auto___34818))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34616__auto___34818){
return (function (args){
return cljs.core.deref.call(null,g__34616__auto___34818);
});})(g__34616__auto___34818))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__34616__auto___34818){
return (function (seq34752){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34752));
});})(g__34616__auto___34818))
;


var g__34616__auto___34822 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__34616__auto___34822){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__26336__auto__ = [];
var len__26329__auto___34823 = arguments.length;
var i__26330__auto___34824 = (0);
while(true){
if((i__26330__auto___34824 < len__26329__auto___34823)){
args__26336__auto__.push((arguments[i__26330__auto___34824]));

var G__34825 = (i__26330__auto___34824 + (1));
i__26330__auto___34824 = G__34825;
continue;
} else {
}
break;
}

var argseq__26337__auto__ = ((((0) < args__26336__auto__.length))?(new cljs.core.IndexedSeq(args__26336__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__26337__auto__);
});})(g__34616__auto___34822))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34616__auto___34822){
return (function (args){
return cljs.core.deref.call(null,g__34616__auto___34822);
});})(g__34616__auto___34822))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__34616__auto___34822){
return (function (seq34753){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34753));
});})(g__34616__auto___34822))
;


var g__34616__auto___34826 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__34616__auto___34826){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__26336__auto__ = [];
var len__26329__auto___34827 = arguments.length;
var i__26330__auto___34828 = (0);
while(true){
if((i__26330__auto___34828 < len__26329__auto___34827)){
args__26336__auto__.push((arguments[i__26330__auto___34828]));

var G__34829 = (i__26330__auto___34828 + (1));
i__26330__auto___34828 = G__34829;
continue;
} else {
}
break;
}

var argseq__26337__auto__ = ((((0) < args__26336__auto__.length))?(new cljs.core.IndexedSeq(args__26336__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__26337__auto__);
});})(g__34616__auto___34826))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34616__auto___34826){
return (function (args){
return cljs.core.deref.call(null,g__34616__auto___34826);
});})(g__34616__auto___34826))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__34616__auto___34826){
return (function (seq34754){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34754));
});})(g__34616__auto___34826))
;


var g__34616__auto___34830 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__34616__auto___34830){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__26336__auto__ = [];
var len__26329__auto___34831 = arguments.length;
var i__26330__auto___34832 = (0);
while(true){
if((i__26330__auto___34832 < len__26329__auto___34831)){
args__26336__auto__.push((arguments[i__26330__auto___34832]));

var G__34833 = (i__26330__auto___34832 + (1));
i__26330__auto___34832 = G__34833;
continue;
} else {
}
break;
}

var argseq__26337__auto__ = ((((0) < args__26336__auto__.length))?(new cljs.core.IndexedSeq(args__26336__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__26337__auto__);
});})(g__34616__auto___34830))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34616__auto___34830){
return (function (args){
return cljs.core.deref.call(null,g__34616__auto___34830);
});})(g__34616__auto___34830))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__34616__auto___34830){
return (function (seq34755){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34755));
});})(g__34616__auto___34830))
;


var g__34616__auto___34834 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__34616__auto___34834){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__26336__auto__ = [];
var len__26329__auto___34835 = arguments.length;
var i__26330__auto___34836 = (0);
while(true){
if((i__26330__auto___34836 < len__26329__auto___34835)){
args__26336__auto__.push((arguments[i__26330__auto___34836]));

var G__34837 = (i__26330__auto___34836 + (1));
i__26330__auto___34836 = G__34837;
continue;
} else {
}
break;
}

var argseq__26337__auto__ = ((((0) < args__26336__auto__.length))?(new cljs.core.IndexedSeq(args__26336__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__26337__auto__);
});})(g__34616__auto___34834))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34616__auto___34834){
return (function (args){
return cljs.core.deref.call(null,g__34616__auto___34834);
});})(g__34616__auto___34834))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__34616__auto___34834){
return (function (seq34756){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34756));
});})(g__34616__auto___34834))
;


var g__34616__auto___34838 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__34616__auto___34838){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__26336__auto__ = [];
var len__26329__auto___34839 = arguments.length;
var i__26330__auto___34840 = (0);
while(true){
if((i__26330__auto___34840 < len__26329__auto___34839)){
args__26336__auto__.push((arguments[i__26330__auto___34840]));

var G__34841 = (i__26330__auto___34840 + (1));
i__26330__auto___34840 = G__34841;
continue;
} else {
}
break;
}

var argseq__26337__auto__ = ((((0) < args__26336__auto__.length))?(new cljs.core.IndexedSeq(args__26336__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__26337__auto__);
});})(g__34616__auto___34838))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34616__auto___34838){
return (function (args){
return cljs.core.deref.call(null,g__34616__auto___34838);
});})(g__34616__auto___34838))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__34616__auto___34838){
return (function (seq34757){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34757));
});})(g__34616__auto___34838))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__26336__auto__ = [];
var len__26329__auto___34844 = arguments.length;
var i__26330__auto___34845 = (0);
while(true){
if((i__26330__auto___34845 < len__26329__auto___34844)){
args__26336__auto__.push((arguments[i__26330__auto___34845]));

var G__34846 = (i__26330__auto___34845 + (1));
i__26330__auto___34845 = G__34846;
continue;
} else {
}
break;
}

var argseq__26337__auto__ = ((((0) < args__26336__auto__.length))?(new cljs.core.IndexedSeq(args__26336__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__26337__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__34842_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__34842_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq34843){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34843));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__34847_SHARP_){
return (new Date(p1__34847_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1489246404219