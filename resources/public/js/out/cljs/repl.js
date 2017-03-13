// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35987){
var map__36012 = p__35987;
var map__36012__$1 = ((((!((map__36012 == null)))?((((map__36012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36012.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36012):map__36012);
var m = map__36012__$1;
var n = cljs.core.get.call(null,map__36012__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36012__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36014_36036 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36015_36037 = null;
var count__36016_36038 = (0);
var i__36017_36039 = (0);
while(true){
if((i__36017_36039 < count__36016_36038)){
var f_36040 = cljs.core._nth.call(null,chunk__36015_36037,i__36017_36039);
cljs.core.println.call(null,"  ",f_36040);

var G__36041 = seq__36014_36036;
var G__36042 = chunk__36015_36037;
var G__36043 = count__36016_36038;
var G__36044 = (i__36017_36039 + (1));
seq__36014_36036 = G__36041;
chunk__36015_36037 = G__36042;
count__36016_36038 = G__36043;
i__36017_36039 = G__36044;
continue;
} else {
var temp__4657__auto___36045 = cljs.core.seq.call(null,seq__36014_36036);
if(temp__4657__auto___36045){
var seq__36014_36046__$1 = temp__4657__auto___36045;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36014_36046__$1)){
var c__26035__auto___36047 = cljs.core.chunk_first.call(null,seq__36014_36046__$1);
var G__36048 = cljs.core.chunk_rest.call(null,seq__36014_36046__$1);
var G__36049 = c__26035__auto___36047;
var G__36050 = cljs.core.count.call(null,c__26035__auto___36047);
var G__36051 = (0);
seq__36014_36036 = G__36048;
chunk__36015_36037 = G__36049;
count__36016_36038 = G__36050;
i__36017_36039 = G__36051;
continue;
} else {
var f_36052 = cljs.core.first.call(null,seq__36014_36046__$1);
cljs.core.println.call(null,"  ",f_36052);

var G__36053 = cljs.core.next.call(null,seq__36014_36046__$1);
var G__36054 = null;
var G__36055 = (0);
var G__36056 = (0);
seq__36014_36036 = G__36053;
chunk__36015_36037 = G__36054;
count__36016_36038 = G__36055;
i__36017_36039 = G__36056;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36057 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25216__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25216__auto__)){
return or__25216__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36057);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36057)))?cljs.core.second.call(null,arglists_36057):arglists_36057));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36018_36058 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36019_36059 = null;
var count__36020_36060 = (0);
var i__36021_36061 = (0);
while(true){
if((i__36021_36061 < count__36020_36060)){
var vec__36022_36062 = cljs.core._nth.call(null,chunk__36019_36059,i__36021_36061);
var name_36063 = cljs.core.nth.call(null,vec__36022_36062,(0),null);
var map__36025_36064 = cljs.core.nth.call(null,vec__36022_36062,(1),null);
var map__36025_36065__$1 = ((((!((map__36025_36064 == null)))?((((map__36025_36064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36025_36064.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36025_36064):map__36025_36064);
var doc_36066 = cljs.core.get.call(null,map__36025_36065__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36067 = cljs.core.get.call(null,map__36025_36065__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36063);

cljs.core.println.call(null," ",arglists_36067);

if(cljs.core.truth_(doc_36066)){
cljs.core.println.call(null," ",doc_36066);
} else {
}

var G__36068 = seq__36018_36058;
var G__36069 = chunk__36019_36059;
var G__36070 = count__36020_36060;
var G__36071 = (i__36021_36061 + (1));
seq__36018_36058 = G__36068;
chunk__36019_36059 = G__36069;
count__36020_36060 = G__36070;
i__36021_36061 = G__36071;
continue;
} else {
var temp__4657__auto___36072 = cljs.core.seq.call(null,seq__36018_36058);
if(temp__4657__auto___36072){
var seq__36018_36073__$1 = temp__4657__auto___36072;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36018_36073__$1)){
var c__26035__auto___36074 = cljs.core.chunk_first.call(null,seq__36018_36073__$1);
var G__36075 = cljs.core.chunk_rest.call(null,seq__36018_36073__$1);
var G__36076 = c__26035__auto___36074;
var G__36077 = cljs.core.count.call(null,c__26035__auto___36074);
var G__36078 = (0);
seq__36018_36058 = G__36075;
chunk__36019_36059 = G__36076;
count__36020_36060 = G__36077;
i__36021_36061 = G__36078;
continue;
} else {
var vec__36027_36079 = cljs.core.first.call(null,seq__36018_36073__$1);
var name_36080 = cljs.core.nth.call(null,vec__36027_36079,(0),null);
var map__36030_36081 = cljs.core.nth.call(null,vec__36027_36079,(1),null);
var map__36030_36082__$1 = ((((!((map__36030_36081 == null)))?((((map__36030_36081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36030_36081.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36030_36081):map__36030_36081);
var doc_36083 = cljs.core.get.call(null,map__36030_36082__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36084 = cljs.core.get.call(null,map__36030_36082__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36080);

cljs.core.println.call(null," ",arglists_36084);

if(cljs.core.truth_(doc_36083)){
cljs.core.println.call(null," ",doc_36083);
} else {
}

var G__36085 = cljs.core.next.call(null,seq__36018_36073__$1);
var G__36086 = null;
var G__36087 = (0);
var G__36088 = (0);
seq__36018_36058 = G__36085;
chunk__36019_36059 = G__36086;
count__36020_36060 = G__36087;
i__36021_36061 = G__36088;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__36032 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36033 = null;
var count__36034 = (0);
var i__36035 = (0);
while(true){
if((i__36035 < count__36034)){
var role = cljs.core._nth.call(null,chunk__36033,i__36035);
var temp__4657__auto___36089__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36089__$1)){
var spec_36090 = temp__4657__auto___36089__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_36090));
} else {
}

var G__36091 = seq__36032;
var G__36092 = chunk__36033;
var G__36093 = count__36034;
var G__36094 = (i__36035 + (1));
seq__36032 = G__36091;
chunk__36033 = G__36092;
count__36034 = G__36093;
i__36035 = G__36094;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__36032);
if(temp__4657__auto____$1){
var seq__36032__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36032__$1)){
var c__26035__auto__ = cljs.core.chunk_first.call(null,seq__36032__$1);
var G__36095 = cljs.core.chunk_rest.call(null,seq__36032__$1);
var G__36096 = c__26035__auto__;
var G__36097 = cljs.core.count.call(null,c__26035__auto__);
var G__36098 = (0);
seq__36032 = G__36095;
chunk__36033 = G__36096;
count__36034 = G__36097;
i__36035 = G__36098;
continue;
} else {
var role = cljs.core.first.call(null,seq__36032__$1);
var temp__4657__auto___36099__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36099__$2)){
var spec_36100 = temp__4657__auto___36099__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_36100));
} else {
}

var G__36101 = cljs.core.next.call(null,seq__36032__$1);
var G__36102 = null;
var G__36103 = (0);
var G__36104 = (0);
seq__36032 = G__36101;
chunk__36033 = G__36102;
count__36034 = G__36103;
i__36035 = G__36104;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1489246406940