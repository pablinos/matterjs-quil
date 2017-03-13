// Compiled by ClojureScript 1.9.473 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__25216__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__25216__auto__){
return or__25216__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__25216__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__25216__auto__)){
return or__25216__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__33559_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__33559_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__33564 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__33565 = null;
var count__33566 = (0);
var i__33567 = (0);
while(true){
if((i__33567 < count__33566)){
var n = cljs.core._nth.call(null,chunk__33565,i__33567);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33568 = seq__33564;
var G__33569 = chunk__33565;
var G__33570 = count__33566;
var G__33571 = (i__33567 + (1));
seq__33564 = G__33568;
chunk__33565 = G__33569;
count__33566 = G__33570;
i__33567 = G__33571;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33564);
if(temp__4657__auto__){
var seq__33564__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33564__$1)){
var c__26035__auto__ = cljs.core.chunk_first.call(null,seq__33564__$1);
var G__33572 = cljs.core.chunk_rest.call(null,seq__33564__$1);
var G__33573 = c__26035__auto__;
var G__33574 = cljs.core.count.call(null,c__26035__auto__);
var G__33575 = (0);
seq__33564 = G__33572;
chunk__33565 = G__33573;
count__33566 = G__33574;
i__33567 = G__33575;
continue;
} else {
var n = cljs.core.first.call(null,seq__33564__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33576 = cljs.core.next.call(null,seq__33564__$1);
var G__33577 = null;
var G__33578 = (0);
var G__33579 = (0);
seq__33564 = G__33576;
chunk__33565 = G__33577;
count__33566 = G__33578;
i__33567 = G__33579;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__33630_33641 = cljs.core.seq.call(null,deps);
var chunk__33631_33642 = null;
var count__33632_33643 = (0);
var i__33633_33644 = (0);
while(true){
if((i__33633_33644 < count__33632_33643)){
var dep_33645 = cljs.core._nth.call(null,chunk__33631_33642,i__33633_33644);
topo_sort_helper_STAR_.call(null,dep_33645,(depth + (1)),state);

var G__33646 = seq__33630_33641;
var G__33647 = chunk__33631_33642;
var G__33648 = count__33632_33643;
var G__33649 = (i__33633_33644 + (1));
seq__33630_33641 = G__33646;
chunk__33631_33642 = G__33647;
count__33632_33643 = G__33648;
i__33633_33644 = G__33649;
continue;
} else {
var temp__4657__auto___33650 = cljs.core.seq.call(null,seq__33630_33641);
if(temp__4657__auto___33650){
var seq__33630_33651__$1 = temp__4657__auto___33650;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33630_33651__$1)){
var c__26035__auto___33652 = cljs.core.chunk_first.call(null,seq__33630_33651__$1);
var G__33653 = cljs.core.chunk_rest.call(null,seq__33630_33651__$1);
var G__33654 = c__26035__auto___33652;
var G__33655 = cljs.core.count.call(null,c__26035__auto___33652);
var G__33656 = (0);
seq__33630_33641 = G__33653;
chunk__33631_33642 = G__33654;
count__33632_33643 = G__33655;
i__33633_33644 = G__33656;
continue;
} else {
var dep_33657 = cljs.core.first.call(null,seq__33630_33651__$1);
topo_sort_helper_STAR_.call(null,dep_33657,(depth + (1)),state);

var G__33658 = cljs.core.next.call(null,seq__33630_33651__$1);
var G__33659 = null;
var G__33660 = (0);
var G__33661 = (0);
seq__33630_33641 = G__33658;
chunk__33631_33642 = G__33659;
count__33632_33643 = G__33660;
i__33633_33644 = G__33661;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__33634){
var vec__33638 = p__33634;
var seq__33639 = cljs.core.seq.call(null,vec__33638);
var first__33640 = cljs.core.first.call(null,seq__33639);
var seq__33639__$1 = cljs.core.next.call(null,seq__33639);
var x = first__33640;
var xs = seq__33639__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__33638,seq__33639,first__33640,seq__33639__$1,x,xs,get_deps__$1){
return (function (p1__33580_SHARP_){
return clojure.set.difference.call(null,p1__33580_SHARP_,x);
});})(vec__33638,seq__33639,first__33640,seq__33639__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__33674 = cljs.core.seq.call(null,provides);
var chunk__33675 = null;
var count__33676 = (0);
var i__33677 = (0);
while(true){
if((i__33677 < count__33676)){
var prov = cljs.core._nth.call(null,chunk__33675,i__33677);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33678_33686 = cljs.core.seq.call(null,requires);
var chunk__33679_33687 = null;
var count__33680_33688 = (0);
var i__33681_33689 = (0);
while(true){
if((i__33681_33689 < count__33680_33688)){
var req_33690 = cljs.core._nth.call(null,chunk__33679_33687,i__33681_33689);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33690,prov);

var G__33691 = seq__33678_33686;
var G__33692 = chunk__33679_33687;
var G__33693 = count__33680_33688;
var G__33694 = (i__33681_33689 + (1));
seq__33678_33686 = G__33691;
chunk__33679_33687 = G__33692;
count__33680_33688 = G__33693;
i__33681_33689 = G__33694;
continue;
} else {
var temp__4657__auto___33695 = cljs.core.seq.call(null,seq__33678_33686);
if(temp__4657__auto___33695){
var seq__33678_33696__$1 = temp__4657__auto___33695;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33678_33696__$1)){
var c__26035__auto___33697 = cljs.core.chunk_first.call(null,seq__33678_33696__$1);
var G__33698 = cljs.core.chunk_rest.call(null,seq__33678_33696__$1);
var G__33699 = c__26035__auto___33697;
var G__33700 = cljs.core.count.call(null,c__26035__auto___33697);
var G__33701 = (0);
seq__33678_33686 = G__33698;
chunk__33679_33687 = G__33699;
count__33680_33688 = G__33700;
i__33681_33689 = G__33701;
continue;
} else {
var req_33702 = cljs.core.first.call(null,seq__33678_33696__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33702,prov);

var G__33703 = cljs.core.next.call(null,seq__33678_33696__$1);
var G__33704 = null;
var G__33705 = (0);
var G__33706 = (0);
seq__33678_33686 = G__33703;
chunk__33679_33687 = G__33704;
count__33680_33688 = G__33705;
i__33681_33689 = G__33706;
continue;
}
} else {
}
}
break;
}

var G__33707 = seq__33674;
var G__33708 = chunk__33675;
var G__33709 = count__33676;
var G__33710 = (i__33677 + (1));
seq__33674 = G__33707;
chunk__33675 = G__33708;
count__33676 = G__33709;
i__33677 = G__33710;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33674);
if(temp__4657__auto__){
var seq__33674__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33674__$1)){
var c__26035__auto__ = cljs.core.chunk_first.call(null,seq__33674__$1);
var G__33711 = cljs.core.chunk_rest.call(null,seq__33674__$1);
var G__33712 = c__26035__auto__;
var G__33713 = cljs.core.count.call(null,c__26035__auto__);
var G__33714 = (0);
seq__33674 = G__33711;
chunk__33675 = G__33712;
count__33676 = G__33713;
i__33677 = G__33714;
continue;
} else {
var prov = cljs.core.first.call(null,seq__33674__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33682_33715 = cljs.core.seq.call(null,requires);
var chunk__33683_33716 = null;
var count__33684_33717 = (0);
var i__33685_33718 = (0);
while(true){
if((i__33685_33718 < count__33684_33717)){
var req_33719 = cljs.core._nth.call(null,chunk__33683_33716,i__33685_33718);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33719,prov);

var G__33720 = seq__33682_33715;
var G__33721 = chunk__33683_33716;
var G__33722 = count__33684_33717;
var G__33723 = (i__33685_33718 + (1));
seq__33682_33715 = G__33720;
chunk__33683_33716 = G__33721;
count__33684_33717 = G__33722;
i__33685_33718 = G__33723;
continue;
} else {
var temp__4657__auto___33724__$1 = cljs.core.seq.call(null,seq__33682_33715);
if(temp__4657__auto___33724__$1){
var seq__33682_33725__$1 = temp__4657__auto___33724__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33682_33725__$1)){
var c__26035__auto___33726 = cljs.core.chunk_first.call(null,seq__33682_33725__$1);
var G__33727 = cljs.core.chunk_rest.call(null,seq__33682_33725__$1);
var G__33728 = c__26035__auto___33726;
var G__33729 = cljs.core.count.call(null,c__26035__auto___33726);
var G__33730 = (0);
seq__33682_33715 = G__33727;
chunk__33683_33716 = G__33728;
count__33684_33717 = G__33729;
i__33685_33718 = G__33730;
continue;
} else {
var req_33731 = cljs.core.first.call(null,seq__33682_33725__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33731,prov);

var G__33732 = cljs.core.next.call(null,seq__33682_33725__$1);
var G__33733 = null;
var G__33734 = (0);
var G__33735 = (0);
seq__33682_33715 = G__33732;
chunk__33683_33716 = G__33733;
count__33684_33717 = G__33734;
i__33685_33718 = G__33735;
continue;
}
} else {
}
}
break;
}

var G__33736 = cljs.core.next.call(null,seq__33674__$1);
var G__33737 = null;
var G__33738 = (0);
var G__33739 = (0);
seq__33674 = G__33736;
chunk__33675 = G__33737;
count__33676 = G__33738;
i__33677 = G__33739;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__33744_33748 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__33745_33749 = null;
var count__33746_33750 = (0);
var i__33747_33751 = (0);
while(true){
if((i__33747_33751 < count__33746_33750)){
var ns_33752 = cljs.core._nth.call(null,chunk__33745_33749,i__33747_33751);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33752);

var G__33753 = seq__33744_33748;
var G__33754 = chunk__33745_33749;
var G__33755 = count__33746_33750;
var G__33756 = (i__33747_33751 + (1));
seq__33744_33748 = G__33753;
chunk__33745_33749 = G__33754;
count__33746_33750 = G__33755;
i__33747_33751 = G__33756;
continue;
} else {
var temp__4657__auto___33757 = cljs.core.seq.call(null,seq__33744_33748);
if(temp__4657__auto___33757){
var seq__33744_33758__$1 = temp__4657__auto___33757;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33744_33758__$1)){
var c__26035__auto___33759 = cljs.core.chunk_first.call(null,seq__33744_33758__$1);
var G__33760 = cljs.core.chunk_rest.call(null,seq__33744_33758__$1);
var G__33761 = c__26035__auto___33759;
var G__33762 = cljs.core.count.call(null,c__26035__auto___33759);
var G__33763 = (0);
seq__33744_33748 = G__33760;
chunk__33745_33749 = G__33761;
count__33746_33750 = G__33762;
i__33747_33751 = G__33763;
continue;
} else {
var ns_33764 = cljs.core.first.call(null,seq__33744_33758__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33764);

var G__33765 = cljs.core.next.call(null,seq__33744_33758__$1);
var G__33766 = null;
var G__33767 = (0);
var G__33768 = (0);
seq__33744_33748 = G__33765;
chunk__33745_33749 = G__33766;
count__33746_33750 = G__33767;
i__33747_33751 = G__33768;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__25216__auto__ = goog.require__;
if(cljs.core.truth_(or__25216__auto__)){
return or__25216__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__33769__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__33769 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33770__i = 0, G__33770__a = new Array(arguments.length -  0);
while (G__33770__i < G__33770__a.length) {G__33770__a[G__33770__i] = arguments[G__33770__i + 0]; ++G__33770__i;}
  args = new cljs.core.IndexedSeq(G__33770__a,0);
} 
return G__33769__delegate.call(this,args);};
G__33769.cljs$lang$maxFixedArity = 0;
G__33769.cljs$lang$applyTo = (function (arglist__33771){
var args = cljs.core.seq(arglist__33771);
return G__33769__delegate(args);
});
G__33769.cljs$core$IFn$_invoke$arity$variadic = G__33769__delegate;
return G__33769;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__33772 = cljs.core._EQ_;
var expr__33773 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__33772.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__33773))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__33772,expr__33773){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__33772,expr__33773))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__33772,expr__33773){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e33775){if((e33775 instanceof Error)){
var e = e33775;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33775;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__33772,expr__33773))
} else {
if(cljs.core.truth_(pred__33772.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__33773))){
return ((function (pred__33772,expr__33773){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__33772,expr__33773){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__33772,expr__33773))
);

return deferred.addErrback(((function (deferred,pred__33772,expr__33773){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__33772,expr__33773))
);
});
;})(pred__33772,expr__33773))
} else {
if(cljs.core.truth_(pred__33772.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__33773))){
return ((function (pred__33772,expr__33773){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e33776){if((e33776 instanceof Error)){
var e = e33776;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33776;

}
}})());
});
;})(pred__33772,expr__33773))
} else {
return ((function (pred__33772,expr__33773){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__33772,expr__33773))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__33777,callback){
var map__33780 = p__33777;
var map__33780__$1 = ((((!((map__33780 == null)))?((((map__33780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33780.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33780):map__33780);
var file_msg = map__33780__$1;
var request_url = cljs.core.get.call(null,map__33780__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__33780,map__33780__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__33780,map__33780__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__28874__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28874__auto__){
return (function (){
var f__28875__auto__ = (function (){var switch__27272__auto__ = ((function (c__28874__auto__){
return (function (state_33804){
var state_val_33805 = (state_33804[(1)]);
if((state_val_33805 === (7))){
var inst_33800 = (state_33804[(2)]);
var state_33804__$1 = state_33804;
var statearr_33806_33826 = state_33804__$1;
(statearr_33806_33826[(2)] = inst_33800);

(statearr_33806_33826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33805 === (1))){
var state_33804__$1 = state_33804;
var statearr_33807_33827 = state_33804__$1;
(statearr_33807_33827[(2)] = null);

(statearr_33807_33827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33805 === (4))){
var inst_33784 = (state_33804[(7)]);
var inst_33784__$1 = (state_33804[(2)]);
var state_33804__$1 = (function (){var statearr_33808 = state_33804;
(statearr_33808[(7)] = inst_33784__$1);

return statearr_33808;
})();
if(cljs.core.truth_(inst_33784__$1)){
var statearr_33809_33828 = state_33804__$1;
(statearr_33809_33828[(1)] = (5));

} else {
var statearr_33810_33829 = state_33804__$1;
(statearr_33810_33829[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33805 === (6))){
var state_33804__$1 = state_33804;
var statearr_33811_33830 = state_33804__$1;
(statearr_33811_33830[(2)] = null);

(statearr_33811_33830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33805 === (3))){
var inst_33802 = (state_33804[(2)]);
var state_33804__$1 = state_33804;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33804__$1,inst_33802);
} else {
if((state_val_33805 === (2))){
var state_33804__$1 = state_33804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33804__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_33805 === (11))){
var inst_33796 = (state_33804[(2)]);
var state_33804__$1 = (function (){var statearr_33812 = state_33804;
(statearr_33812[(8)] = inst_33796);

return statearr_33812;
})();
var statearr_33813_33831 = state_33804__$1;
(statearr_33813_33831[(2)] = null);

(statearr_33813_33831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33805 === (9))){
var inst_33790 = (state_33804[(9)]);
var inst_33788 = (state_33804[(10)]);
var inst_33792 = inst_33790.call(null,inst_33788);
var state_33804__$1 = state_33804;
var statearr_33814_33832 = state_33804__$1;
(statearr_33814_33832[(2)] = inst_33792);

(statearr_33814_33832[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33805 === (5))){
var inst_33784 = (state_33804[(7)]);
var inst_33786 = figwheel.client.file_reloading.blocking_load.call(null,inst_33784);
var state_33804__$1 = state_33804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33804__$1,(8),inst_33786);
} else {
if((state_val_33805 === (10))){
var inst_33788 = (state_33804[(10)]);
var inst_33794 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_33788);
var state_33804__$1 = state_33804;
var statearr_33815_33833 = state_33804__$1;
(statearr_33815_33833[(2)] = inst_33794);

(statearr_33815_33833[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33805 === (8))){
var inst_33784 = (state_33804[(7)]);
var inst_33790 = (state_33804[(9)]);
var inst_33788 = (state_33804[(2)]);
var inst_33789 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_33790__$1 = cljs.core.get.call(null,inst_33789,inst_33784);
var state_33804__$1 = (function (){var statearr_33816 = state_33804;
(statearr_33816[(9)] = inst_33790__$1);

(statearr_33816[(10)] = inst_33788);

return statearr_33816;
})();
if(cljs.core.truth_(inst_33790__$1)){
var statearr_33817_33834 = state_33804__$1;
(statearr_33817_33834[(1)] = (9));

} else {
var statearr_33818_33835 = state_33804__$1;
(statearr_33818_33835[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__28874__auto__))
;
return ((function (switch__27272__auto__,c__28874__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27273__auto__ = null;
var figwheel$client$file_reloading$state_machine__27273__auto____0 = (function (){
var statearr_33822 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33822[(0)] = figwheel$client$file_reloading$state_machine__27273__auto__);

(statearr_33822[(1)] = (1));

return statearr_33822;
});
var figwheel$client$file_reloading$state_machine__27273__auto____1 = (function (state_33804){
while(true){
var ret_value__27274__auto__ = (function (){try{while(true){
var result__27275__auto__ = switch__27272__auto__.call(null,state_33804);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27275__auto__;
}
break;
}
}catch (e33823){if((e33823 instanceof Object)){
var ex__27276__auto__ = e33823;
var statearr_33824_33836 = state_33804;
(statearr_33824_33836[(5)] = ex__27276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33837 = state_33804;
state_33804 = G__33837;
continue;
} else {
return ret_value__27274__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27273__auto__ = function(state_33804){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27273__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27273__auto____1.call(this,state_33804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27273__auto____0;
figwheel$client$file_reloading$state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27273__auto____1;
return figwheel$client$file_reloading$state_machine__27273__auto__;
})()
;})(switch__27272__auto__,c__28874__auto__))
})();
var state__28876__auto__ = (function (){var statearr_33825 = f__28875__auto__.call(null);
(statearr_33825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28874__auto__);

return statearr_33825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28876__auto__);
});})(c__28874__auto__))
);

return c__28874__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__33838,callback){
var map__33841 = p__33838;
var map__33841__$1 = ((((!((map__33841 == null)))?((((map__33841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33841.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33841):map__33841);
var file_msg = map__33841__$1;
var namespace = cljs.core.get.call(null,map__33841__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__33841,map__33841__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__33841,map__33841__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__33843){
var map__33846 = p__33843;
var map__33846__$1 = ((((!((map__33846 == null)))?((((map__33846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33846.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33846):map__33846);
var file_msg = map__33846__$1;
var namespace = cljs.core.get.call(null,map__33846__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__33848){
var map__33851 = p__33848;
var map__33851__$1 = ((((!((map__33851 == null)))?((((map__33851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33851.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33851):map__33851);
var file_msg = map__33851__$1;
var namespace = cljs.core.get.call(null,map__33851__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__25204__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__25204__auto__){
var or__25216__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25216__auto__)){
return or__25216__auto__;
} else {
var or__25216__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25216__auto____$1)){
return or__25216__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__25204__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__33853,callback){
var map__33856 = p__33853;
var map__33856__$1 = ((((!((map__33856 == null)))?((((map__33856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33856.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33856):map__33856);
var file_msg = map__33856__$1;
var request_url = cljs.core.get.call(null,map__33856__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__33856__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28874__auto___33960 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28874__auto___33960,out){
return (function (){
var f__28875__auto__ = (function (){var switch__27272__auto__ = ((function (c__28874__auto___33960,out){
return (function (state_33942){
var state_val_33943 = (state_33942[(1)]);
if((state_val_33943 === (1))){
var inst_33916 = cljs.core.seq.call(null,files);
var inst_33917 = cljs.core.first.call(null,inst_33916);
var inst_33918 = cljs.core.next.call(null,inst_33916);
var inst_33919 = files;
var state_33942__$1 = (function (){var statearr_33944 = state_33942;
(statearr_33944[(7)] = inst_33918);

(statearr_33944[(8)] = inst_33919);

(statearr_33944[(9)] = inst_33917);

return statearr_33944;
})();
var statearr_33945_33961 = state_33942__$1;
(statearr_33945_33961[(2)] = null);

(statearr_33945_33961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33943 === (2))){
var inst_33919 = (state_33942[(8)]);
var inst_33925 = (state_33942[(10)]);
var inst_33924 = cljs.core.seq.call(null,inst_33919);
var inst_33925__$1 = cljs.core.first.call(null,inst_33924);
var inst_33926 = cljs.core.next.call(null,inst_33924);
var inst_33927 = (inst_33925__$1 == null);
var inst_33928 = cljs.core.not.call(null,inst_33927);
var state_33942__$1 = (function (){var statearr_33946 = state_33942;
(statearr_33946[(11)] = inst_33926);

(statearr_33946[(10)] = inst_33925__$1);

return statearr_33946;
})();
if(inst_33928){
var statearr_33947_33962 = state_33942__$1;
(statearr_33947_33962[(1)] = (4));

} else {
var statearr_33948_33963 = state_33942__$1;
(statearr_33948_33963[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33943 === (3))){
var inst_33940 = (state_33942[(2)]);
var state_33942__$1 = state_33942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33942__$1,inst_33940);
} else {
if((state_val_33943 === (4))){
var inst_33925 = (state_33942[(10)]);
var inst_33930 = figwheel.client.file_reloading.reload_js_file.call(null,inst_33925);
var state_33942__$1 = state_33942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33942__$1,(7),inst_33930);
} else {
if((state_val_33943 === (5))){
var inst_33936 = cljs.core.async.close_BANG_.call(null,out);
var state_33942__$1 = state_33942;
var statearr_33949_33964 = state_33942__$1;
(statearr_33949_33964[(2)] = inst_33936);

(statearr_33949_33964[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33943 === (6))){
var inst_33938 = (state_33942[(2)]);
var state_33942__$1 = state_33942;
var statearr_33950_33965 = state_33942__$1;
(statearr_33950_33965[(2)] = inst_33938);

(statearr_33950_33965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33943 === (7))){
var inst_33926 = (state_33942[(11)]);
var inst_33932 = (state_33942[(2)]);
var inst_33933 = cljs.core.async.put_BANG_.call(null,out,inst_33932);
var inst_33919 = inst_33926;
var state_33942__$1 = (function (){var statearr_33951 = state_33942;
(statearr_33951[(8)] = inst_33919);

(statearr_33951[(12)] = inst_33933);

return statearr_33951;
})();
var statearr_33952_33966 = state_33942__$1;
(statearr_33952_33966[(2)] = null);

(statearr_33952_33966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__28874__auto___33960,out))
;
return ((function (switch__27272__auto__,c__28874__auto___33960,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27273__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27273__auto____0 = (function (){
var statearr_33956 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33956[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27273__auto__);

(statearr_33956[(1)] = (1));

return statearr_33956;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27273__auto____1 = (function (state_33942){
while(true){
var ret_value__27274__auto__ = (function (){try{while(true){
var result__27275__auto__ = switch__27272__auto__.call(null,state_33942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27275__auto__;
}
break;
}
}catch (e33957){if((e33957 instanceof Object)){
var ex__27276__auto__ = e33957;
var statearr_33958_33967 = state_33942;
(statearr_33958_33967[(5)] = ex__27276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33968 = state_33942;
state_33942 = G__33968;
continue;
} else {
return ret_value__27274__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27273__auto__ = function(state_33942){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27273__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27273__auto____1.call(this,state_33942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27273__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27273__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27273__auto__;
})()
;})(switch__27272__auto__,c__28874__auto___33960,out))
})();
var state__28876__auto__ = (function (){var statearr_33959 = f__28875__auto__.call(null);
(statearr_33959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28874__auto___33960);

return statearr_33959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28876__auto__);
});})(c__28874__auto___33960,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__33969,opts){
var map__33973 = p__33969;
var map__33973__$1 = ((((!((map__33973 == null)))?((((map__33973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33973.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33973):map__33973);
var eval_body = cljs.core.get.call(null,map__33973__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__33973__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__25204__auto__ = eval_body;
if(cljs.core.truth_(and__25204__auto__)){
return typeof eval_body === 'string';
} else {
return and__25204__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e33975){var e = e33975;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__33976_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33976_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__33985){
var vec__33986 = p__33985;
var k = cljs.core.nth.call(null,vec__33986,(0),null);
var v = cljs.core.nth.call(null,vec__33986,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__33989){
var vec__33990 = p__33989;
var k = cljs.core.nth.call(null,vec__33990,(0),null);
var v = cljs.core.nth.call(null,vec__33990,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__33996,p__33997){
var map__34245 = p__33996;
var map__34245__$1 = ((((!((map__34245 == null)))?((((map__34245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34245.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34245):map__34245);
var opts = map__34245__$1;
var before_jsload = cljs.core.get.call(null,map__34245__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34245__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34245__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34246 = p__33997;
var map__34246__$1 = ((((!((map__34246 == null)))?((((map__34246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34246.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34246):map__34246);
var msg = map__34246__$1;
var files = cljs.core.get.call(null,map__34246__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34246__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34246__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28874__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28874__auto__,map__34245,map__34245__$1,opts,before_jsload,on_jsload,reload_dependents,map__34246,map__34246__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28875__auto__ = (function (){var switch__27272__auto__ = ((function (c__28874__auto__,map__34245,map__34245__$1,opts,before_jsload,on_jsload,reload_dependents,map__34246,map__34246__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_34400){
var state_val_34401 = (state_34400[(1)]);
if((state_val_34401 === (7))){
var inst_34261 = (state_34400[(7)]);
var inst_34262 = (state_34400[(8)]);
var inst_34260 = (state_34400[(9)]);
var inst_34263 = (state_34400[(10)]);
var inst_34268 = cljs.core._nth.call(null,inst_34261,inst_34263);
var inst_34269 = figwheel.client.file_reloading.eval_body.call(null,inst_34268,opts);
var inst_34270 = (inst_34263 + (1));
var tmp34402 = inst_34261;
var tmp34403 = inst_34262;
var tmp34404 = inst_34260;
var inst_34260__$1 = tmp34404;
var inst_34261__$1 = tmp34402;
var inst_34262__$1 = tmp34403;
var inst_34263__$1 = inst_34270;
var state_34400__$1 = (function (){var statearr_34405 = state_34400;
(statearr_34405[(11)] = inst_34269);

(statearr_34405[(7)] = inst_34261__$1);

(statearr_34405[(8)] = inst_34262__$1);

(statearr_34405[(9)] = inst_34260__$1);

(statearr_34405[(10)] = inst_34263__$1);

return statearr_34405;
})();
var statearr_34406_34492 = state_34400__$1;
(statearr_34406_34492[(2)] = null);

(statearr_34406_34492[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34401 === (20))){
var inst_34303 = (state_34400[(12)]);
var inst_34311 = figwheel.client.file_reloading.sort_files.call(null,inst_34303);
var state_34400__$1 = state_34400;
var statearr_34407_34493 = state_34400__$1;
(statearr_34407_34493[(2)] = inst_34311);

(statearr_34407_34493[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34401 === (27))){
var state_34400__$1 = state_34400;
var statearr_34408_34494 = state_34400__$1;
(statearr_34408_34494[(2)] = null);

(statearr_34408_34494[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34401 === (1))){
var inst_34252 = (state_34400[(13)]);
var inst_34249 = before_jsload.call(null,files);
var inst_34250 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34251 = (function (){return ((function (inst_34252,inst_34249,inst_34250,state_val_34401,c__28874__auto__,map__34245,map__34245__$1,opts,before_jsload,on_jsload,reload_dependents,map__34246,map__34246__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33993_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33993_SHARP_);
});
;})(inst_34252,inst_34249,inst_34250,state_val_34401,c__28874__auto__,map__34245,map__34245__$1,opts,before_jsload,on_jsload,reload_dependents,map__34246,map__34246__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34252__$1 = cljs.core.filter.call(null,inst_34251,files);
var inst_34253 = cljs.core.not_empty.call(null,inst_34252__$1);
var state_34400__$1 = (function (){var statearr_34409 = state_34400;
(statearr_34409[(14)] = inst_34250);

(statearr_34409[(15)] = inst_34249);

(statearr_34409[(13)] = inst_34252__$1);

return statearr_34409;
})();
if(cljs.core.truth_(inst_34253)){
var statearr_34410_34495 = state_34400__$1;
(statearr_34410_34495[(1)] = (2));

} else {
var statearr_34411_34496 = state_34400__$1;
(statearr_34411_34496[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34401 === (24))){
var state_34400__$1 = state_34400;
var statearr_34412_34497 = state_34400__$1;
(statearr_34412_34497[(2)] = null);

(statearr_34412_34497[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34401 === (39))){
var inst_34353 = (state_34400[(16)]);
var state_34400__$1 = state_34400;
var statearr_34413_34498 = state_34400__$1;
(statearr_34413_34498[(2)] = inst_34353);

(statearr_34413_34498[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34401 === (46))){
var inst_34395 = (state_34400[(2)]);
var state_34400__$1 = state_34400;
var statearr_34414_34499 = state_34400__$1;
(statearr_34414_34499[(2)] = inst_34395);

(statearr_34414_34499[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34401 === (4))){
var inst_34297 = (state_34400[(2)]);
var inst_34298 = cljs.core.List.EMPTY;
var inst_34299 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34298);
var inst_34300 = (function (){return ((function (inst_34297,inst_34298,inst_34299,state_val_34401,c__28874__auto__,map__34245,map__34245__$1,opts,before_jsload,on_jsload,reload_dependents,map__34246,map__34246__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33994_SHARP_){
var and__25204__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33994_SHARP_);
if(cljs.core.truth_(and__25204__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33994_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__33994_SHARP_)));
} else {
return and__25204__auto__;
}
});
;})(inst_34297,inst_34298,inst_34299,state_val_34401,c__28874__auto__,map__34245,map__34245__$1,opts,before_jsload,on_jsload,reload_dependents,map__34246,map__34246__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34301 = cljs.core.filter.call(null,inst_34300,files);
var inst_34302 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34303 = cljs.core.concat.call(null,inst_34301,inst_34302);
var state_34400__$1 = (function (){var statearr_34415 = state_34400;
(statearr_34415[(17)] = inst_34297);

(statearr_34415[(18)] = inst_34299);

(statearr_34415[(12)] = inst_34303);

return statearr_34415;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_34416_34500 = state_34400__$1;
(statearr_34416_34500[(1)] = (16));

} else {
var statearr_34417_34501 = state_34400__$1;
(statearr_34417_34501[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34401 === (15))){
var inst_34287 = (state_34400[(2)]);
var state_34400__$1 = state_34400;
var statearr_34418_34502 = state_34400__$1;
(statearr_34418_34502[(2)] = inst_34287);

(statearr_34418_34502[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34401 === (21))){
var inst_34313 = (state_34400[(19)]);
var inst_34313__$1 = (state_34400[(2)]);
var inst_34314 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34313__$1);
var state_34400__$1 = (function (){var statearr_34419 = state_34400;
(statearr_34419[(19)] = inst_34313__$1);

return statearr_34419;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34400__$1,(22),inst_34314);
} else {
if((state_val_34401 === (31))){
var inst_34398 = (state_34400[(2)]);
var state_34400__$1 = state_34400;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34400__$1,inst_34398);
} else {
if((state_val_34401 === (32))){
var inst_34353 = (state_34400[(16)]);
var inst_34358 = inst_34353.cljs$lang$protocol_mask$partition0$;
var inst_34359 = (inst_34358 & (64));
var inst_34360 = inst_34353.cljs$core$ISeq$;
var inst_34361 = (cljs.core.PROTOCOL_SENTINEL === inst_34360);
var inst_34362 = (inst_34359) || (inst_34361);
var state_34400__$1 = state_34400;
if(cljs.core.truth_(inst_34362)){
var statearr_34420_34503 = state_34400__$1;
(statearr_34420_34503[(1)] = (35));

} else {
var statearr_34421_34504 = state_34400__$1;
(statearr_34421_34504[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34401 === (40))){
var inst_34375 = (state_34400[(20)]);
var inst_34374 = (state_34400[(2)]);
var inst_34375__$1 = cljs.core.get.call(null,inst_34374,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34376 = cljs.core.get.call(null,inst_34374,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34377 = cljs.core.not_empty.call(null,inst_34375__$1);
var state_34400__$1 = (function (){var statearr_34422 = state_34400;
(statearr_34422[(21)] = inst_34376);

(statearr_34422[(20)] = inst_34375__$1);

return statearr_34422;
})();
if(cljs.core.truth_(inst_34377)){
var statearr_34423_34505 = state_34400__$1;
(statearr_34423_34505[(1)] = (41));

} else {
var statearr_34424_34506 = state_34400__$1;
(statearr_34424_34506[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34401 === (33))){
var state_34400__$1 = state_34400;
var statearr_34425_34507 = state_34400__$1;
(statearr_34425_34507[(2)] = false);

(statearr_34425_34507[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34401 === (13))){
var inst_34273 = (state_34400[(22)]);
var inst_34277 = cljs.core.chunk_first.call(null,inst_34273);
var inst_34278 = cljs.core.chunk_rest.call(null,inst_34273);
var inst_34279 = cljs.core.count.call(null,inst_34277);
var inst_34260 = inst_34278;
var inst_34261 = inst_34277;
var inst_34262 = inst_34279;
var inst_34263 = (0);
var state_34400__$1 = (function (){var statearr_34426 = state_34400;
(statearr_34426[(7)] = inst_34261);

(statearr_34426[(8)] = inst_34262);

(statearr_34426[(9)] = inst_34260);

(statearr_34426[(10)] = inst_34263);

return statearr_34426;
})();
var statearr_34427_34508 = state_34400__$1;
(statearr_34427_34508[(2)] = null);

(statearr_34427_34508[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34401 === (22))){
var inst_34317 = (state_34400[(23)]);
var inst_34321 = (state_34400[(24)]);
var inst_34313 = (state_34400[(19)]);
var inst_34316 = (state_34400[(25)]);
var inst_34316__$1 = (state_34400[(2)]);
var inst_34317__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34316__$1);
var inst_34318 = (function (){var all_files = inst_34313;
var res_SINGLEQUOTE_ = inst_34316__$1;
var res = inst_34317__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34317,inst_34321,inst_34313,inst_34316,inst_34316__$1,inst_34317__$1,state_val_34401,c__28874__auto__,map__34245,map__34245__$1,opts,before_jsload,on_jsload,reload_dependents,map__34246,map__34246__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33995_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__33995_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34317,inst_34321,inst_34313,inst_34316,inst_34316__$1,inst_34317__$1,state_val_34401,c__28874__auto__,map__34245,map__34245__$1,opts,before_jsload,on_jsload,reload_dependents,map__34246,map__34246__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34319 = cljs.core.filter.call(null,inst_34318,inst_34316__$1);
var inst_34320 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34321__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34320);
var inst_34322 = cljs.core.not_empty.call(null,inst_34321__$1);
var state_34400__$1 = (function (){var statearr_34428 = state_34400;
(statearr_34428[(23)] = inst_34317__$1);

(statearr_34428[(26)] = inst_34319);

(statearr_34428[(24)] = inst_34321__$1);

(statearr_34428[(25)] = inst_34316__$1);

return statearr_34428;
})();
if(cljs.core.truth_(inst_34322)){
var statearr_34429_34509 = state_34400__$1;
(statearr_34429_34509[(1)] = (23));

} else {
var statearr_34430_34510 = state_34400__$1;
(statearr_34430_34510[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34401 === (36))){
var state_34400__$1 = state_34400;
var statearr_34431_34511 = state_34400__$1;
(statearr_34431_34511[(2)] = false);

(statearr_34431_34511[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34401 === (41))){
var inst_34375 = (state_34400[(20)]);
var inst_34379 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34380 = cljs.core.map.call(null,inst_34379,inst_34375);
var inst_34381 = cljs.core.pr_str.call(null,inst_34380);
var inst_34382 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34381)].join('');
var inst_34383 = figwheel.client.utils.log.call(null,inst_34382);
var state_34400__$1 = state_34400;
var statearr_34432_34512 = state_34400__$1;
(statearr_34432_34512[(2)] = inst_34383);

(statearr_34432_34512[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34401 === (43))){
var inst_34376 = (state_34400[(21)]);
var inst_34386 = (state_34400[(2)]);
var inst_34387 = cljs.core.not_empty.call(null,inst_34376);
var state_34400__$1 = (function (){var statearr_34433 = state_34400;
(statearr_34433[(27)] = inst_34386);

return statearr_34433;
})();
if(cljs.core.truth_(inst_34387)){
var statearr_34434_34513 = state_34400__$1;
(statearr_34434_34513[(1)] = (44));

} else {
var statearr_34435_34514 = state_34400__$1;
(statearr_34435_34514[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34401 === (29))){
var inst_34317 = (state_34400[(23)]);
var inst_34353 = (state_34400[(16)]);
var inst_34319 = (state_34400[(26)]);
var inst_34321 = (state_34400[(24)]);
var inst_34313 = (state_34400[(19)]);
var inst_34316 = (state_34400[(25)]);
var inst_34349 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34352 = (function (){var all_files = inst_34313;
var res_SINGLEQUOTE_ = inst_34316;
var res = inst_34317;
var files_not_loaded = inst_34319;
var dependencies_that_loaded = inst_34321;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34317,inst_34353,inst_34319,inst_34321,inst_34313,inst_34316,inst_34349,state_val_34401,c__28874__auto__,map__34245,map__34245__$1,opts,before_jsload,on_jsload,reload_dependents,map__34246,map__34246__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34351){
var map__34436 = p__34351;
var map__34436__$1 = ((((!((map__34436 == null)))?((((map__34436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34436.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34436):map__34436);
var namespace = cljs.core.get.call(null,map__34436__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34317,inst_34353,inst_34319,inst_34321,inst_34313,inst_34316,inst_34349,state_val_34401,c__28874__auto__,map__34245,map__34245__$1,opts,before_jsload,on_jsload,reload_dependents,map__34246,map__34246__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34353__$1 = cljs.core.group_by.call(null,inst_34352,inst_34319);
var inst_34355 = (inst_34353__$1 == null);
var inst_34356 = cljs.core.not.call(null,inst_34355);
var state_34400__$1 = (function (){var statearr_34438 = state_34400;
(statearr_34438[(28)] = inst_34349);

(statearr_34438[(16)] = inst_34353__$1);

return statearr_34438;
})();
if(inst_34356){
var statearr_34439_34515 = state_34400__$1;
(statearr_34439_34515[(1)] = (32));

} else {
var statearr_34440_34516 = state_34400__$1;
(statearr_34440_34516[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34401 === (44))){
var inst_34376 = (state_34400[(21)]);
var inst_34389 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34376);
var inst_34390 = cljs.core.pr_str.call(null,inst_34389);
var inst_34391 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34390)].join('');
var inst_34392 = figwheel.client.utils.log.call(null,inst_34391);
var state_34400__$1 = state_34400;
var statearr_34441_34517 = state_34400__$1;
(statearr_34441_34517[(2)] = inst_34392);

(statearr_34441_34517[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34401 === (6))){
var inst_34294 = (state_34400[(2)]);
var state_34400__$1 = state_34400;
var statearr_34442_34518 = state_34400__$1;
(statearr_34442_34518[(2)] = inst_34294);

(statearr_34442_34518[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34401 === (28))){
var inst_34319 = (state_34400[(26)]);
var inst_34346 = (state_34400[(2)]);
var inst_34347 = cljs.core.not_empty.call(null,inst_34319);
var state_34400__$1 = (function (){var statearr_34443 = state_34400;
(statearr_34443[(29)] = inst_34346);

return statearr_34443;
})();
if(cljs.core.truth_(inst_34347)){
var statearr_34444_34519 = state_34400__$1;
(statearr_34444_34519[(1)] = (29));

} else {
var statearr_34445_34520 = state_34400__$1;
(statearr_34445_34520[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34401 === (25))){
var inst_34317 = (state_34400[(23)]);
var inst_34333 = (state_34400[(2)]);
var inst_34334 = cljs.core.not_empty.call(null,inst_34317);
var state_34400__$1 = (function (){var statearr_34446 = state_34400;
(statearr_34446[(30)] = inst_34333);

return statearr_34446;
})();
if(cljs.core.truth_(inst_34334)){
var statearr_34447_34521 = state_34400__$1;
(statearr_34447_34521[(1)] = (26));

} else {
var statearr_34448_34522 = state_34400__$1;
(statearr_34448_34522[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34401 === (34))){
var inst_34369 = (state_34400[(2)]);
var state_34400__$1 = state_34400;
if(cljs.core.truth_(inst_34369)){
var statearr_34449_34523 = state_34400__$1;
(statearr_34449_34523[(1)] = (38));

} else {
var statearr_34450_34524 = state_34400__$1;
(statearr_34450_34524[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34401 === (17))){
var state_34400__$1 = state_34400;
var statearr_34451_34525 = state_34400__$1;
(statearr_34451_34525[(2)] = recompile_dependents);

(statearr_34451_34525[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34401 === (3))){
var state_34400__$1 = state_34400;
var statearr_34452_34526 = state_34400__$1;
(statearr_34452_34526[(2)] = null);

(statearr_34452_34526[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34401 === (12))){
var inst_34290 = (state_34400[(2)]);
var state_34400__$1 = state_34400;
var statearr_34453_34527 = state_34400__$1;
(statearr_34453_34527[(2)] = inst_34290);

(statearr_34453_34527[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34401 === (2))){
var inst_34252 = (state_34400[(13)]);
var inst_34259 = cljs.core.seq.call(null,inst_34252);
var inst_34260 = inst_34259;
var inst_34261 = null;
var inst_34262 = (0);
var inst_34263 = (0);
var state_34400__$1 = (function (){var statearr_34454 = state_34400;
(statearr_34454[(7)] = inst_34261);

(statearr_34454[(8)] = inst_34262);

(statearr_34454[(9)] = inst_34260);

(statearr_34454[(10)] = inst_34263);

return statearr_34454;
})();
var statearr_34455_34528 = state_34400__$1;
(statearr_34455_34528[(2)] = null);

(statearr_34455_34528[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34401 === (23))){
var inst_34317 = (state_34400[(23)]);
var inst_34319 = (state_34400[(26)]);
var inst_34321 = (state_34400[(24)]);
var inst_34313 = (state_34400[(19)]);
var inst_34316 = (state_34400[(25)]);
var inst_34324 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34326 = (function (){var all_files = inst_34313;
var res_SINGLEQUOTE_ = inst_34316;
var res = inst_34317;
var files_not_loaded = inst_34319;
var dependencies_that_loaded = inst_34321;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34317,inst_34319,inst_34321,inst_34313,inst_34316,inst_34324,state_val_34401,c__28874__auto__,map__34245,map__34245__$1,opts,before_jsload,on_jsload,reload_dependents,map__34246,map__34246__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34325){
var map__34456 = p__34325;
var map__34456__$1 = ((((!((map__34456 == null)))?((((map__34456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34456.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34456):map__34456);
var request_url = cljs.core.get.call(null,map__34456__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34317,inst_34319,inst_34321,inst_34313,inst_34316,inst_34324,state_val_34401,c__28874__auto__,map__34245,map__34245__$1,opts,before_jsload,on_jsload,reload_dependents,map__34246,map__34246__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34327 = cljs.core.reverse.call(null,inst_34321);
var inst_34328 = cljs.core.map.call(null,inst_34326,inst_34327);
var inst_34329 = cljs.core.pr_str.call(null,inst_34328);
var inst_34330 = figwheel.client.utils.log.call(null,inst_34329);
var state_34400__$1 = (function (){var statearr_34458 = state_34400;
(statearr_34458[(31)] = inst_34324);

return statearr_34458;
})();
var statearr_34459_34529 = state_34400__$1;
(statearr_34459_34529[(2)] = inst_34330);

(statearr_34459_34529[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34401 === (35))){
var state_34400__$1 = state_34400;
var statearr_34460_34530 = state_34400__$1;
(statearr_34460_34530[(2)] = true);

(statearr_34460_34530[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34401 === (19))){
var inst_34303 = (state_34400[(12)]);
var inst_34309 = figwheel.client.file_reloading.expand_files.call(null,inst_34303);
var state_34400__$1 = state_34400;
var statearr_34461_34531 = state_34400__$1;
(statearr_34461_34531[(2)] = inst_34309);

(statearr_34461_34531[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34401 === (11))){
var state_34400__$1 = state_34400;
var statearr_34462_34532 = state_34400__$1;
(statearr_34462_34532[(2)] = null);

(statearr_34462_34532[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34401 === (9))){
var inst_34292 = (state_34400[(2)]);
var state_34400__$1 = state_34400;
var statearr_34463_34533 = state_34400__$1;
(statearr_34463_34533[(2)] = inst_34292);

(statearr_34463_34533[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34401 === (5))){
var inst_34262 = (state_34400[(8)]);
var inst_34263 = (state_34400[(10)]);
var inst_34265 = (inst_34263 < inst_34262);
var inst_34266 = inst_34265;
var state_34400__$1 = state_34400;
if(cljs.core.truth_(inst_34266)){
var statearr_34464_34534 = state_34400__$1;
(statearr_34464_34534[(1)] = (7));

} else {
var statearr_34465_34535 = state_34400__$1;
(statearr_34465_34535[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34401 === (14))){
var inst_34273 = (state_34400[(22)]);
var inst_34282 = cljs.core.first.call(null,inst_34273);
var inst_34283 = figwheel.client.file_reloading.eval_body.call(null,inst_34282,opts);
var inst_34284 = cljs.core.next.call(null,inst_34273);
var inst_34260 = inst_34284;
var inst_34261 = null;
var inst_34262 = (0);
var inst_34263 = (0);
var state_34400__$1 = (function (){var statearr_34466 = state_34400;
(statearr_34466[(7)] = inst_34261);

(statearr_34466[(32)] = inst_34283);

(statearr_34466[(8)] = inst_34262);

(statearr_34466[(9)] = inst_34260);

(statearr_34466[(10)] = inst_34263);

return statearr_34466;
})();
var statearr_34467_34536 = state_34400__$1;
(statearr_34467_34536[(2)] = null);

(statearr_34467_34536[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34401 === (45))){
var state_34400__$1 = state_34400;
var statearr_34468_34537 = state_34400__$1;
(statearr_34468_34537[(2)] = null);

(statearr_34468_34537[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34401 === (26))){
var inst_34317 = (state_34400[(23)]);
var inst_34319 = (state_34400[(26)]);
var inst_34321 = (state_34400[(24)]);
var inst_34313 = (state_34400[(19)]);
var inst_34316 = (state_34400[(25)]);
var inst_34336 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34338 = (function (){var all_files = inst_34313;
var res_SINGLEQUOTE_ = inst_34316;
var res = inst_34317;
var files_not_loaded = inst_34319;
var dependencies_that_loaded = inst_34321;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34317,inst_34319,inst_34321,inst_34313,inst_34316,inst_34336,state_val_34401,c__28874__auto__,map__34245,map__34245__$1,opts,before_jsload,on_jsload,reload_dependents,map__34246,map__34246__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34337){
var map__34469 = p__34337;
var map__34469__$1 = ((((!((map__34469 == null)))?((((map__34469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34469.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34469):map__34469);
var namespace = cljs.core.get.call(null,map__34469__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__34469__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34317,inst_34319,inst_34321,inst_34313,inst_34316,inst_34336,state_val_34401,c__28874__auto__,map__34245,map__34245__$1,opts,before_jsload,on_jsload,reload_dependents,map__34246,map__34246__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34339 = cljs.core.map.call(null,inst_34338,inst_34317);
var inst_34340 = cljs.core.pr_str.call(null,inst_34339);
var inst_34341 = figwheel.client.utils.log.call(null,inst_34340);
var inst_34342 = (function (){var all_files = inst_34313;
var res_SINGLEQUOTE_ = inst_34316;
var res = inst_34317;
var files_not_loaded = inst_34319;
var dependencies_that_loaded = inst_34321;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34317,inst_34319,inst_34321,inst_34313,inst_34316,inst_34336,inst_34338,inst_34339,inst_34340,inst_34341,state_val_34401,c__28874__auto__,map__34245,map__34245__$1,opts,before_jsload,on_jsload,reload_dependents,map__34246,map__34246__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34317,inst_34319,inst_34321,inst_34313,inst_34316,inst_34336,inst_34338,inst_34339,inst_34340,inst_34341,state_val_34401,c__28874__auto__,map__34245,map__34245__$1,opts,before_jsload,on_jsload,reload_dependents,map__34246,map__34246__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34343 = setTimeout(inst_34342,(10));
var state_34400__$1 = (function (){var statearr_34471 = state_34400;
(statearr_34471[(33)] = inst_34341);

(statearr_34471[(34)] = inst_34336);

return statearr_34471;
})();
var statearr_34472_34538 = state_34400__$1;
(statearr_34472_34538[(2)] = inst_34343);

(statearr_34472_34538[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34401 === (16))){
var state_34400__$1 = state_34400;
var statearr_34473_34539 = state_34400__$1;
(statearr_34473_34539[(2)] = reload_dependents);

(statearr_34473_34539[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34401 === (38))){
var inst_34353 = (state_34400[(16)]);
var inst_34371 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34353);
var state_34400__$1 = state_34400;
var statearr_34474_34540 = state_34400__$1;
(statearr_34474_34540[(2)] = inst_34371);

(statearr_34474_34540[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34401 === (30))){
var state_34400__$1 = state_34400;
var statearr_34475_34541 = state_34400__$1;
(statearr_34475_34541[(2)] = null);

(statearr_34475_34541[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34401 === (10))){
var inst_34273 = (state_34400[(22)]);
var inst_34275 = cljs.core.chunked_seq_QMARK_.call(null,inst_34273);
var state_34400__$1 = state_34400;
if(inst_34275){
var statearr_34476_34542 = state_34400__$1;
(statearr_34476_34542[(1)] = (13));

} else {
var statearr_34477_34543 = state_34400__$1;
(statearr_34477_34543[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34401 === (18))){
var inst_34307 = (state_34400[(2)]);
var state_34400__$1 = state_34400;
if(cljs.core.truth_(inst_34307)){
var statearr_34478_34544 = state_34400__$1;
(statearr_34478_34544[(1)] = (19));

} else {
var statearr_34479_34545 = state_34400__$1;
(statearr_34479_34545[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34401 === (42))){
var state_34400__$1 = state_34400;
var statearr_34480_34546 = state_34400__$1;
(statearr_34480_34546[(2)] = null);

(statearr_34480_34546[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34401 === (37))){
var inst_34366 = (state_34400[(2)]);
var state_34400__$1 = state_34400;
var statearr_34481_34547 = state_34400__$1;
(statearr_34481_34547[(2)] = inst_34366);

(statearr_34481_34547[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34401 === (8))){
var inst_34273 = (state_34400[(22)]);
var inst_34260 = (state_34400[(9)]);
var inst_34273__$1 = cljs.core.seq.call(null,inst_34260);
var state_34400__$1 = (function (){var statearr_34482 = state_34400;
(statearr_34482[(22)] = inst_34273__$1);

return statearr_34482;
})();
if(inst_34273__$1){
var statearr_34483_34548 = state_34400__$1;
(statearr_34483_34548[(1)] = (10));

} else {
var statearr_34484_34549 = state_34400__$1;
(statearr_34484_34549[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28874__auto__,map__34245,map__34245__$1,opts,before_jsload,on_jsload,reload_dependents,map__34246,map__34246__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27272__auto__,c__28874__auto__,map__34245,map__34245__$1,opts,before_jsload,on_jsload,reload_dependents,map__34246,map__34246__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27273__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27273__auto____0 = (function (){
var statearr_34488 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34488[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27273__auto__);

(statearr_34488[(1)] = (1));

return statearr_34488;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27273__auto____1 = (function (state_34400){
while(true){
var ret_value__27274__auto__ = (function (){try{while(true){
var result__27275__auto__ = switch__27272__auto__.call(null,state_34400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27275__auto__;
}
break;
}
}catch (e34489){if((e34489 instanceof Object)){
var ex__27276__auto__ = e34489;
var statearr_34490_34550 = state_34400;
(statearr_34490_34550[(5)] = ex__27276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34551 = state_34400;
state_34400 = G__34551;
continue;
} else {
return ret_value__27274__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27273__auto__ = function(state_34400){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27273__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27273__auto____1.call(this,state_34400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27273__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27273__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27273__auto__;
})()
;})(switch__27272__auto__,c__28874__auto__,map__34245,map__34245__$1,opts,before_jsload,on_jsload,reload_dependents,map__34246,map__34246__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28876__auto__ = (function (){var statearr_34491 = f__28875__auto__.call(null);
(statearr_34491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28874__auto__);

return statearr_34491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28876__auto__);
});})(c__28874__auto__,map__34245,map__34245__$1,opts,before_jsload,on_jsload,reload_dependents,map__34246,map__34246__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28874__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__34554,link){
var map__34557 = p__34554;
var map__34557__$1 = ((((!((map__34557 == null)))?((((map__34557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34557.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34557):map__34557);
var file = cljs.core.get.call(null,map__34557__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__34557,map__34557__$1,file){
return (function (p1__34552_SHARP_,p2__34553_SHARP_){
if(cljs.core._EQ_.call(null,p1__34552_SHARP_,p2__34553_SHARP_)){
return p1__34552_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__34557,map__34557__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__34563){
var map__34564 = p__34563;
var map__34564__$1 = ((((!((map__34564 == null)))?((((map__34564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34564.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34564):map__34564);
var match_length = cljs.core.get.call(null,map__34564__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__34564__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__34559_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__34559_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__34566_SHARP_,p2__34567_SHARP_){
return cljs.core.assoc.call(null,p1__34566_SHARP_,cljs.core.get.call(null,p2__34567_SHARP_,key),p2__34567_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_34568 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_34568);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_34568);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__34569,p__34570){
var map__34575 = p__34569;
var map__34575__$1 = ((((!((map__34575 == null)))?((((map__34575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34575.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34575):map__34575);
var on_cssload = cljs.core.get.call(null,map__34575__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__34576 = p__34570;
var map__34576__$1 = ((((!((map__34576 == null)))?((((map__34576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34576.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34576):map__34576);
var files_msg = map__34576__$1;
var files = cljs.core.get.call(null,map__34576__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1489246403548