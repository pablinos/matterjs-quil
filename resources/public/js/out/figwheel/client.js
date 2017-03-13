// Compiled by ClojureScript 1.9.473 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.9";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args36426 = [];
var len__26329__auto___36429 = arguments.length;
var i__26330__auto___36430 = (0);
while(true){
if((i__26330__auto___36430 < len__26329__auto___36429)){
args36426.push((arguments[i__26330__auto___36430]));

var G__36431 = (i__26330__auto___36430 + (1));
i__26330__auto___36430 = G__36431;
continue;
} else {
}
break;
}

var G__36428 = args36426.length;
switch (G__36428) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36426.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__26336__auto__ = [];
var len__26329__auto___36434 = arguments.length;
var i__26330__auto___36435 = (0);
while(true){
if((i__26330__auto___36435 < len__26329__auto___36434)){
args__26336__auto__.push((arguments[i__26330__auto___36435]));

var G__36436 = (i__26330__auto___36435 + (1));
i__26330__auto___36435 = G__36436;
continue;
} else {
}
break;
}

var argseq__26337__auto__ = ((((0) < args__26336__auto__.length))?(new cljs.core.IndexedSeq(args__26336__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__26337__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq36433){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36433));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__26336__auto__ = [];
var len__26329__auto___36438 = arguments.length;
var i__26330__auto___36439 = (0);
while(true){
if((i__26330__auto___36439 < len__26329__auto___36438)){
args__26336__auto__.push((arguments[i__26330__auto___36439]));

var G__36440 = (i__26330__auto___36439 + (1));
i__26330__auto___36439 = G__36440;
continue;
} else {
}
break;
}

var argseq__26337__auto__ = ((((0) < args__26336__auto__.length))?(new cljs.core.IndexedSeq(args__26336__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__26337__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq36437){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36437));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36441){
var map__36444 = p__36441;
var map__36444__$1 = ((((!((map__36444 == null)))?((((map__36444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36444.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36444):map__36444);
var message = cljs.core.get.call(null,map__36444__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36444__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__25216__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25216__auto__)){
return or__25216__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__25204__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__25204__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__25204__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__28874__auto___36606 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28874__auto___36606,ch){
return (function (){
var f__28875__auto__ = (function (){var switch__27272__auto__ = ((function (c__28874__auto___36606,ch){
return (function (state_36575){
var state_val_36576 = (state_36575[(1)]);
if((state_val_36576 === (7))){
var inst_36571 = (state_36575[(2)]);
var state_36575__$1 = state_36575;
var statearr_36577_36607 = state_36575__$1;
(statearr_36577_36607[(2)] = inst_36571);

(statearr_36577_36607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36576 === (1))){
var state_36575__$1 = state_36575;
var statearr_36578_36608 = state_36575__$1;
(statearr_36578_36608[(2)] = null);

(statearr_36578_36608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36576 === (4))){
var inst_36528 = (state_36575[(7)]);
var inst_36528__$1 = (state_36575[(2)]);
var state_36575__$1 = (function (){var statearr_36579 = state_36575;
(statearr_36579[(7)] = inst_36528__$1);

return statearr_36579;
})();
if(cljs.core.truth_(inst_36528__$1)){
var statearr_36580_36609 = state_36575__$1;
(statearr_36580_36609[(1)] = (5));

} else {
var statearr_36581_36610 = state_36575__$1;
(statearr_36581_36610[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36576 === (15))){
var inst_36535 = (state_36575[(8)]);
var inst_36550 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36535);
var inst_36551 = cljs.core.first.call(null,inst_36550);
var inst_36552 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36551);
var inst_36553 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36552)].join('');
var inst_36554 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_36553);
var state_36575__$1 = state_36575;
var statearr_36582_36611 = state_36575__$1;
(statearr_36582_36611[(2)] = inst_36554);

(statearr_36582_36611[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36576 === (13))){
var inst_36559 = (state_36575[(2)]);
var state_36575__$1 = state_36575;
var statearr_36583_36612 = state_36575__$1;
(statearr_36583_36612[(2)] = inst_36559);

(statearr_36583_36612[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36576 === (6))){
var state_36575__$1 = state_36575;
var statearr_36584_36613 = state_36575__$1;
(statearr_36584_36613[(2)] = null);

(statearr_36584_36613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36576 === (17))){
var inst_36557 = (state_36575[(2)]);
var state_36575__$1 = state_36575;
var statearr_36585_36614 = state_36575__$1;
(statearr_36585_36614[(2)] = inst_36557);

(statearr_36585_36614[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36576 === (3))){
var inst_36573 = (state_36575[(2)]);
var state_36575__$1 = state_36575;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36575__$1,inst_36573);
} else {
if((state_val_36576 === (12))){
var inst_36534 = (state_36575[(9)]);
var inst_36548 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36534,opts);
var state_36575__$1 = state_36575;
if(cljs.core.truth_(inst_36548)){
var statearr_36586_36615 = state_36575__$1;
(statearr_36586_36615[(1)] = (15));

} else {
var statearr_36587_36616 = state_36575__$1;
(statearr_36587_36616[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36576 === (2))){
var state_36575__$1 = state_36575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36575__$1,(4),ch);
} else {
if((state_val_36576 === (11))){
var inst_36535 = (state_36575[(8)]);
var inst_36540 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36541 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36535);
var inst_36542 = cljs.core.async.timeout.call(null,(1000));
var inst_36543 = [inst_36541,inst_36542];
var inst_36544 = (new cljs.core.PersistentVector(null,2,(5),inst_36540,inst_36543,null));
var state_36575__$1 = state_36575;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36575__$1,(14),inst_36544);
} else {
if((state_val_36576 === (9))){
var inst_36535 = (state_36575[(8)]);
var inst_36561 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_36562 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36535);
var inst_36563 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36562);
var inst_36564 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36563)].join('');
var inst_36565 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_36564);
var state_36575__$1 = (function (){var statearr_36588 = state_36575;
(statearr_36588[(10)] = inst_36561);

return statearr_36588;
})();
var statearr_36589_36617 = state_36575__$1;
(statearr_36589_36617[(2)] = inst_36565);

(statearr_36589_36617[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36576 === (5))){
var inst_36528 = (state_36575[(7)]);
var inst_36530 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36531 = (new cljs.core.PersistentArrayMap(null,2,inst_36530,null));
var inst_36532 = (new cljs.core.PersistentHashSet(null,inst_36531,null));
var inst_36533 = figwheel.client.focus_msgs.call(null,inst_36532,inst_36528);
var inst_36534 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36533);
var inst_36535 = cljs.core.first.call(null,inst_36533);
var inst_36536 = figwheel.client.autoload_QMARK_.call(null);
var state_36575__$1 = (function (){var statearr_36590 = state_36575;
(statearr_36590[(8)] = inst_36535);

(statearr_36590[(9)] = inst_36534);

return statearr_36590;
})();
if(cljs.core.truth_(inst_36536)){
var statearr_36591_36618 = state_36575__$1;
(statearr_36591_36618[(1)] = (8));

} else {
var statearr_36592_36619 = state_36575__$1;
(statearr_36592_36619[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36576 === (14))){
var inst_36546 = (state_36575[(2)]);
var state_36575__$1 = state_36575;
var statearr_36593_36620 = state_36575__$1;
(statearr_36593_36620[(2)] = inst_36546);

(statearr_36593_36620[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36576 === (16))){
var state_36575__$1 = state_36575;
var statearr_36594_36621 = state_36575__$1;
(statearr_36594_36621[(2)] = null);

(statearr_36594_36621[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36576 === (10))){
var inst_36567 = (state_36575[(2)]);
var state_36575__$1 = (function (){var statearr_36595 = state_36575;
(statearr_36595[(11)] = inst_36567);

return statearr_36595;
})();
var statearr_36596_36622 = state_36575__$1;
(statearr_36596_36622[(2)] = null);

(statearr_36596_36622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36576 === (8))){
var inst_36534 = (state_36575[(9)]);
var inst_36538 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36534,opts);
var state_36575__$1 = state_36575;
if(cljs.core.truth_(inst_36538)){
var statearr_36597_36623 = state_36575__$1;
(statearr_36597_36623[(1)] = (11));

} else {
var statearr_36598_36624 = state_36575__$1;
(statearr_36598_36624[(1)] = (12));

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
});})(c__28874__auto___36606,ch))
;
return ((function (switch__27272__auto__,c__28874__auto___36606,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27273__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27273__auto____0 = (function (){
var statearr_36602 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36602[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27273__auto__);

(statearr_36602[(1)] = (1));

return statearr_36602;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27273__auto____1 = (function (state_36575){
while(true){
var ret_value__27274__auto__ = (function (){try{while(true){
var result__27275__auto__ = switch__27272__auto__.call(null,state_36575);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27275__auto__;
}
break;
}
}catch (e36603){if((e36603 instanceof Object)){
var ex__27276__auto__ = e36603;
var statearr_36604_36625 = state_36575;
(statearr_36604_36625[(5)] = ex__27276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36626 = state_36575;
state_36575 = G__36626;
continue;
} else {
return ret_value__27274__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27273__auto__ = function(state_36575){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27273__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27273__auto____1.call(this,state_36575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27273__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27273__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27273__auto__;
})()
;})(switch__27272__auto__,c__28874__auto___36606,ch))
})();
var state__28876__auto__ = (function (){var statearr_36605 = f__28875__auto__.call(null);
(statearr_36605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28874__auto___36606);

return statearr_36605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28876__auto__);
});})(c__28874__auto___36606,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36627_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36627_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_36630 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_36630){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e36629){if((e36629 instanceof Error)){
var e = e36629;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_36630], null));
} else {
var e = e36629;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_36630))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__36631){
var map__36640 = p__36631;
var map__36640__$1 = ((((!((map__36640 == null)))?((((map__36640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36640.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36640):map__36640);
var opts = map__36640__$1;
var build_id = cljs.core.get.call(null,map__36640__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__36640,map__36640__$1,opts,build_id){
return (function (p__36642){
var vec__36643 = p__36642;
var seq__36644 = cljs.core.seq.call(null,vec__36643);
var first__36645 = cljs.core.first.call(null,seq__36644);
var seq__36644__$1 = cljs.core.next.call(null,seq__36644);
var map__36646 = first__36645;
var map__36646__$1 = ((((!((map__36646 == null)))?((((map__36646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36646.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36646):map__36646);
var msg = map__36646__$1;
var msg_name = cljs.core.get.call(null,map__36646__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36644__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__36643,seq__36644,first__36645,seq__36644__$1,map__36646,map__36646__$1,msg,msg_name,_,map__36640,map__36640__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__36643,seq__36644,first__36645,seq__36644__$1,map__36646,map__36646__$1,msg,msg_name,_,map__36640,map__36640__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__36640,map__36640__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36654){
var vec__36655 = p__36654;
var seq__36656 = cljs.core.seq.call(null,vec__36655);
var first__36657 = cljs.core.first.call(null,seq__36656);
var seq__36656__$1 = cljs.core.next.call(null,seq__36656);
var map__36658 = first__36657;
var map__36658__$1 = ((((!((map__36658 == null)))?((((map__36658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36658.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36658):map__36658);
var msg = map__36658__$1;
var msg_name = cljs.core.get.call(null,map__36658__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36656__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36660){
var map__36672 = p__36660;
var map__36672__$1 = ((((!((map__36672 == null)))?((((map__36672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36672.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36672):map__36672);
var on_compile_warning = cljs.core.get.call(null,map__36672__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__36672__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__36672,map__36672__$1,on_compile_warning,on_compile_fail){
return (function (p__36674){
var vec__36675 = p__36674;
var seq__36676 = cljs.core.seq.call(null,vec__36675);
var first__36677 = cljs.core.first.call(null,seq__36676);
var seq__36676__$1 = cljs.core.next.call(null,seq__36676);
var map__36678 = first__36677;
var map__36678__$1 = ((((!((map__36678 == null)))?((((map__36678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36678.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36678):map__36678);
var msg = map__36678__$1;
var msg_name = cljs.core.get.call(null,map__36678__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36676__$1;
var pred__36680 = cljs.core._EQ_;
var expr__36681 = msg_name;
if(cljs.core.truth_(pred__36680.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__36681))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__36680.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__36681))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__36672,map__36672__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28874__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28874__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28875__auto__ = (function (){var switch__27272__auto__ = ((function (c__28874__auto__,msg_hist,msg_names,msg){
return (function (state_36909){
var state_val_36910 = (state_36909[(1)]);
if((state_val_36910 === (7))){
var inst_36829 = (state_36909[(2)]);
var state_36909__$1 = state_36909;
if(cljs.core.truth_(inst_36829)){
var statearr_36911_36961 = state_36909__$1;
(statearr_36911_36961[(1)] = (8));

} else {
var statearr_36912_36962 = state_36909__$1;
(statearr_36912_36962[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (20))){
var inst_36903 = (state_36909[(2)]);
var state_36909__$1 = state_36909;
var statearr_36913_36963 = state_36909__$1;
(statearr_36913_36963[(2)] = inst_36903);

(statearr_36913_36963[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (27))){
var inst_36899 = (state_36909[(2)]);
var state_36909__$1 = state_36909;
var statearr_36914_36964 = state_36909__$1;
(statearr_36914_36964[(2)] = inst_36899);

(statearr_36914_36964[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (1))){
var inst_36822 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_36909__$1 = state_36909;
if(cljs.core.truth_(inst_36822)){
var statearr_36915_36965 = state_36909__$1;
(statearr_36915_36965[(1)] = (2));

} else {
var statearr_36916_36966 = state_36909__$1;
(statearr_36916_36966[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (24))){
var inst_36901 = (state_36909[(2)]);
var state_36909__$1 = state_36909;
var statearr_36917_36967 = state_36909__$1;
(statearr_36917_36967[(2)] = inst_36901);

(statearr_36917_36967[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (4))){
var inst_36907 = (state_36909[(2)]);
var state_36909__$1 = state_36909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36909__$1,inst_36907);
} else {
if((state_val_36910 === (15))){
var inst_36905 = (state_36909[(2)]);
var state_36909__$1 = state_36909;
var statearr_36918_36968 = state_36909__$1;
(statearr_36918_36968[(2)] = inst_36905);

(statearr_36918_36968[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (21))){
var inst_36858 = (state_36909[(2)]);
var inst_36859 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36860 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36859);
var state_36909__$1 = (function (){var statearr_36919 = state_36909;
(statearr_36919[(7)] = inst_36858);

return statearr_36919;
})();
var statearr_36920_36969 = state_36909__$1;
(statearr_36920_36969[(2)] = inst_36860);

(statearr_36920_36969[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (31))){
var inst_36888 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_36909__$1 = state_36909;
if(cljs.core.truth_(inst_36888)){
var statearr_36921_36970 = state_36909__$1;
(statearr_36921_36970[(1)] = (34));

} else {
var statearr_36922_36971 = state_36909__$1;
(statearr_36922_36971[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (32))){
var inst_36897 = (state_36909[(2)]);
var state_36909__$1 = state_36909;
var statearr_36923_36972 = state_36909__$1;
(statearr_36923_36972[(2)] = inst_36897);

(statearr_36923_36972[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (33))){
var inst_36884 = (state_36909[(2)]);
var inst_36885 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36886 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36885);
var state_36909__$1 = (function (){var statearr_36924 = state_36909;
(statearr_36924[(8)] = inst_36884);

return statearr_36924;
})();
var statearr_36925_36973 = state_36909__$1;
(statearr_36925_36973[(2)] = inst_36886);

(statearr_36925_36973[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (13))){
var inst_36843 = figwheel.client.heads_up.clear.call(null);
var state_36909__$1 = state_36909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36909__$1,(16),inst_36843);
} else {
if((state_val_36910 === (22))){
var inst_36864 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36865 = figwheel.client.heads_up.append_warning_message.call(null,inst_36864);
var state_36909__$1 = state_36909;
var statearr_36926_36974 = state_36909__$1;
(statearr_36926_36974[(2)] = inst_36865);

(statearr_36926_36974[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (36))){
var inst_36895 = (state_36909[(2)]);
var state_36909__$1 = state_36909;
var statearr_36927_36975 = state_36909__$1;
(statearr_36927_36975[(2)] = inst_36895);

(statearr_36927_36975[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (29))){
var inst_36875 = (state_36909[(2)]);
var inst_36876 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36877 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36876);
var state_36909__$1 = (function (){var statearr_36928 = state_36909;
(statearr_36928[(9)] = inst_36875);

return statearr_36928;
})();
var statearr_36929_36976 = state_36909__$1;
(statearr_36929_36976[(2)] = inst_36877);

(statearr_36929_36976[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (6))){
var inst_36824 = (state_36909[(10)]);
var state_36909__$1 = state_36909;
var statearr_36930_36977 = state_36909__$1;
(statearr_36930_36977[(2)] = inst_36824);

(statearr_36930_36977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (28))){
var inst_36871 = (state_36909[(2)]);
var inst_36872 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36873 = figwheel.client.heads_up.display_warning.call(null,inst_36872);
var state_36909__$1 = (function (){var statearr_36931 = state_36909;
(statearr_36931[(11)] = inst_36871);

return statearr_36931;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36909__$1,(29),inst_36873);
} else {
if((state_val_36910 === (25))){
var inst_36869 = figwheel.client.heads_up.clear.call(null);
var state_36909__$1 = state_36909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36909__$1,(28),inst_36869);
} else {
if((state_val_36910 === (34))){
var inst_36890 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36909__$1 = state_36909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36909__$1,(37),inst_36890);
} else {
if((state_val_36910 === (17))){
var inst_36849 = (state_36909[(2)]);
var inst_36850 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36851 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36850);
var state_36909__$1 = (function (){var statearr_36932 = state_36909;
(statearr_36932[(12)] = inst_36849);

return statearr_36932;
})();
var statearr_36933_36978 = state_36909__$1;
(statearr_36933_36978[(2)] = inst_36851);

(statearr_36933_36978[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (3))){
var inst_36841 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_36909__$1 = state_36909;
if(cljs.core.truth_(inst_36841)){
var statearr_36934_36979 = state_36909__$1;
(statearr_36934_36979[(1)] = (13));

} else {
var statearr_36935_36980 = state_36909__$1;
(statearr_36935_36980[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (12))){
var inst_36837 = (state_36909[(2)]);
var state_36909__$1 = state_36909;
var statearr_36936_36981 = state_36909__$1;
(statearr_36936_36981[(2)] = inst_36837);

(statearr_36936_36981[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (2))){
var inst_36824 = (state_36909[(10)]);
var inst_36824__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_36909__$1 = (function (){var statearr_36937 = state_36909;
(statearr_36937[(10)] = inst_36824__$1);

return statearr_36937;
})();
if(cljs.core.truth_(inst_36824__$1)){
var statearr_36938_36982 = state_36909__$1;
(statearr_36938_36982[(1)] = (5));

} else {
var statearr_36939_36983 = state_36909__$1;
(statearr_36939_36983[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (23))){
var inst_36867 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_36909__$1 = state_36909;
if(cljs.core.truth_(inst_36867)){
var statearr_36940_36984 = state_36909__$1;
(statearr_36940_36984[(1)] = (25));

} else {
var statearr_36941_36985 = state_36909__$1;
(statearr_36941_36985[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (35))){
var state_36909__$1 = state_36909;
var statearr_36942_36986 = state_36909__$1;
(statearr_36942_36986[(2)] = null);

(statearr_36942_36986[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (19))){
var inst_36862 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_36909__$1 = state_36909;
if(cljs.core.truth_(inst_36862)){
var statearr_36943_36987 = state_36909__$1;
(statearr_36943_36987[(1)] = (22));

} else {
var statearr_36944_36988 = state_36909__$1;
(statearr_36944_36988[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (11))){
var inst_36833 = (state_36909[(2)]);
var state_36909__$1 = state_36909;
var statearr_36945_36989 = state_36909__$1;
(statearr_36945_36989[(2)] = inst_36833);

(statearr_36945_36989[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (9))){
var inst_36835 = figwheel.client.heads_up.clear.call(null);
var state_36909__$1 = state_36909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36909__$1,(12),inst_36835);
} else {
if((state_val_36910 === (5))){
var inst_36826 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_36909__$1 = state_36909;
var statearr_36946_36990 = state_36909__$1;
(statearr_36946_36990[(2)] = inst_36826);

(statearr_36946_36990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (14))){
var inst_36853 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_36909__$1 = state_36909;
if(cljs.core.truth_(inst_36853)){
var statearr_36947_36991 = state_36909__$1;
(statearr_36947_36991[(1)] = (18));

} else {
var statearr_36948_36992 = state_36909__$1;
(statearr_36948_36992[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (26))){
var inst_36879 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_36909__$1 = state_36909;
if(cljs.core.truth_(inst_36879)){
var statearr_36949_36993 = state_36909__$1;
(statearr_36949_36993[(1)] = (30));

} else {
var statearr_36950_36994 = state_36909__$1;
(statearr_36950_36994[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (16))){
var inst_36845 = (state_36909[(2)]);
var inst_36846 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36847 = figwheel.client.heads_up.display_exception.call(null,inst_36846);
var state_36909__$1 = (function (){var statearr_36951 = state_36909;
(statearr_36951[(13)] = inst_36845);

return statearr_36951;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36909__$1,(17),inst_36847);
} else {
if((state_val_36910 === (30))){
var inst_36881 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36882 = figwheel.client.heads_up.display_warning.call(null,inst_36881);
var state_36909__$1 = state_36909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36909__$1,(33),inst_36882);
} else {
if((state_val_36910 === (10))){
var inst_36839 = (state_36909[(2)]);
var state_36909__$1 = state_36909;
var statearr_36952_36995 = state_36909__$1;
(statearr_36952_36995[(2)] = inst_36839);

(statearr_36952_36995[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (18))){
var inst_36855 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36856 = figwheel.client.heads_up.display_exception.call(null,inst_36855);
var state_36909__$1 = state_36909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36909__$1,(21),inst_36856);
} else {
if((state_val_36910 === (37))){
var inst_36892 = (state_36909[(2)]);
var state_36909__$1 = state_36909;
var statearr_36953_36996 = state_36909__$1;
(statearr_36953_36996[(2)] = inst_36892);

(statearr_36953_36996[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (8))){
var inst_36831 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36909__$1 = state_36909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36909__$1,(11),inst_36831);
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
});})(c__28874__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27272__auto__,c__28874__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27273__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27273__auto____0 = (function (){
var statearr_36957 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36957[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27273__auto__);

(statearr_36957[(1)] = (1));

return statearr_36957;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27273__auto____1 = (function (state_36909){
while(true){
var ret_value__27274__auto__ = (function (){try{while(true){
var result__27275__auto__ = switch__27272__auto__.call(null,state_36909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27275__auto__;
}
break;
}
}catch (e36958){if((e36958 instanceof Object)){
var ex__27276__auto__ = e36958;
var statearr_36959_36997 = state_36909;
(statearr_36959_36997[(5)] = ex__27276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36998 = state_36909;
state_36909 = G__36998;
continue;
} else {
return ret_value__27274__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27273__auto__ = function(state_36909){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27273__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27273__auto____1.call(this,state_36909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27273__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27273__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27273__auto__;
})()
;})(switch__27272__auto__,c__28874__auto__,msg_hist,msg_names,msg))
})();
var state__28876__auto__ = (function (){var statearr_36960 = f__28875__auto__.call(null);
(statearr_36960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28874__auto__);

return statearr_36960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28876__auto__);
});})(c__28874__auto__,msg_hist,msg_names,msg))
);

return c__28874__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28874__auto___37061 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28874__auto___37061,ch){
return (function (){
var f__28875__auto__ = (function (){var switch__27272__auto__ = ((function (c__28874__auto___37061,ch){
return (function (state_37044){
var state_val_37045 = (state_37044[(1)]);
if((state_val_37045 === (1))){
var state_37044__$1 = state_37044;
var statearr_37046_37062 = state_37044__$1;
(statearr_37046_37062[(2)] = null);

(statearr_37046_37062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37045 === (2))){
var state_37044__$1 = state_37044;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37044__$1,(4),ch);
} else {
if((state_val_37045 === (3))){
var inst_37042 = (state_37044[(2)]);
var state_37044__$1 = state_37044;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37044__$1,inst_37042);
} else {
if((state_val_37045 === (4))){
var inst_37032 = (state_37044[(7)]);
var inst_37032__$1 = (state_37044[(2)]);
var state_37044__$1 = (function (){var statearr_37047 = state_37044;
(statearr_37047[(7)] = inst_37032__$1);

return statearr_37047;
})();
if(cljs.core.truth_(inst_37032__$1)){
var statearr_37048_37063 = state_37044__$1;
(statearr_37048_37063[(1)] = (5));

} else {
var statearr_37049_37064 = state_37044__$1;
(statearr_37049_37064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37045 === (5))){
var inst_37032 = (state_37044[(7)]);
var inst_37034 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37032);
var state_37044__$1 = state_37044;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37044__$1,(8),inst_37034);
} else {
if((state_val_37045 === (6))){
var state_37044__$1 = state_37044;
var statearr_37050_37065 = state_37044__$1;
(statearr_37050_37065[(2)] = null);

(statearr_37050_37065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37045 === (7))){
var inst_37040 = (state_37044[(2)]);
var state_37044__$1 = state_37044;
var statearr_37051_37066 = state_37044__$1;
(statearr_37051_37066[(2)] = inst_37040);

(statearr_37051_37066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37045 === (8))){
var inst_37036 = (state_37044[(2)]);
var state_37044__$1 = (function (){var statearr_37052 = state_37044;
(statearr_37052[(8)] = inst_37036);

return statearr_37052;
})();
var statearr_37053_37067 = state_37044__$1;
(statearr_37053_37067[(2)] = null);

(statearr_37053_37067[(1)] = (2));


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
});})(c__28874__auto___37061,ch))
;
return ((function (switch__27272__auto__,c__28874__auto___37061,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27273__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27273__auto____0 = (function (){
var statearr_37057 = [null,null,null,null,null,null,null,null,null];
(statearr_37057[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27273__auto__);

(statearr_37057[(1)] = (1));

return statearr_37057;
});
var figwheel$client$heads_up_plugin_$_state_machine__27273__auto____1 = (function (state_37044){
while(true){
var ret_value__27274__auto__ = (function (){try{while(true){
var result__27275__auto__ = switch__27272__auto__.call(null,state_37044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27275__auto__;
}
break;
}
}catch (e37058){if((e37058 instanceof Object)){
var ex__27276__auto__ = e37058;
var statearr_37059_37068 = state_37044;
(statearr_37059_37068[(5)] = ex__27276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37069 = state_37044;
state_37044 = G__37069;
continue;
} else {
return ret_value__27274__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27273__auto__ = function(state_37044){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27273__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27273__auto____1.call(this,state_37044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27273__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27273__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27273__auto__;
})()
;})(switch__27272__auto__,c__28874__auto___37061,ch))
})();
var state__28876__auto__ = (function (){var statearr_37060 = f__28875__auto__.call(null);
(statearr_37060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28874__auto___37061);

return statearr_37060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28876__auto__);
});})(c__28874__auto___37061,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28874__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28874__auto__){
return (function (){
var f__28875__auto__ = (function (){var switch__27272__auto__ = ((function (c__28874__auto__){
return (function (state_37090){
var state_val_37091 = (state_37090[(1)]);
if((state_val_37091 === (1))){
var inst_37085 = cljs.core.async.timeout.call(null,(3000));
var state_37090__$1 = state_37090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37090__$1,(2),inst_37085);
} else {
if((state_val_37091 === (2))){
var inst_37087 = (state_37090[(2)]);
var inst_37088 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37090__$1 = (function (){var statearr_37092 = state_37090;
(statearr_37092[(7)] = inst_37087);

return statearr_37092;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37090__$1,inst_37088);
} else {
return null;
}
}
});})(c__28874__auto__))
;
return ((function (switch__27272__auto__,c__28874__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27273__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27273__auto____0 = (function (){
var statearr_37096 = [null,null,null,null,null,null,null,null];
(statearr_37096[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27273__auto__);

(statearr_37096[(1)] = (1));

return statearr_37096;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27273__auto____1 = (function (state_37090){
while(true){
var ret_value__27274__auto__ = (function (){try{while(true){
var result__27275__auto__ = switch__27272__auto__.call(null,state_37090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27275__auto__;
}
break;
}
}catch (e37097){if((e37097 instanceof Object)){
var ex__27276__auto__ = e37097;
var statearr_37098_37100 = state_37090;
(statearr_37098_37100[(5)] = ex__27276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37101 = state_37090;
state_37090 = G__37101;
continue;
} else {
return ret_value__27274__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27273__auto__ = function(state_37090){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27273__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27273__auto____1.call(this,state_37090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27273__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27273__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27273__auto__;
})()
;})(switch__27272__auto__,c__28874__auto__))
})();
var state__28876__auto__ = (function (){var statearr_37099 = f__28875__auto__.call(null);
(statearr_37099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28874__auto__);

return statearr_37099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28876__auto__);
});})(c__28874__auto__))
);

return c__28874__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28874__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28874__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__28875__auto__ = (function (){var switch__27272__auto__ = ((function (c__28874__auto__,figwheel_version,temp__4657__auto__){
return (function (state_37124){
var state_val_37125 = (state_37124[(1)]);
if((state_val_37125 === (1))){
var inst_37118 = cljs.core.async.timeout.call(null,(2000));
var state_37124__$1 = state_37124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37124__$1,(2),inst_37118);
} else {
if((state_val_37125 === (2))){
var inst_37120 = (state_37124[(2)]);
var inst_37121 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_37122 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37121);
var state_37124__$1 = (function (){var statearr_37126 = state_37124;
(statearr_37126[(7)] = inst_37120);

return statearr_37126;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37124__$1,inst_37122);
} else {
return null;
}
}
});})(c__28874__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__27272__auto__,c__28874__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27273__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27273__auto____0 = (function (){
var statearr_37130 = [null,null,null,null,null,null,null,null];
(statearr_37130[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27273__auto__);

(statearr_37130[(1)] = (1));

return statearr_37130;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27273__auto____1 = (function (state_37124){
while(true){
var ret_value__27274__auto__ = (function (){try{while(true){
var result__27275__auto__ = switch__27272__auto__.call(null,state_37124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27275__auto__;
}
break;
}
}catch (e37131){if((e37131 instanceof Object)){
var ex__27276__auto__ = e37131;
var statearr_37132_37134 = state_37124;
(statearr_37132_37134[(5)] = ex__27276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37135 = state_37124;
state_37124 = G__37135;
continue;
} else {
return ret_value__27274__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27273__auto__ = function(state_37124){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27273__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27273__auto____1.call(this,state_37124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27273__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27273__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27273__auto__;
})()
;})(switch__27272__auto__,c__28874__auto__,figwheel_version,temp__4657__auto__))
})();
var state__28876__auto__ = (function (){var statearr_37133 = f__28875__auto__.call(null);
(statearr_37133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28874__auto__);

return statearr_37133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28876__auto__);
});})(c__28874__auto__,figwheel_version,temp__4657__auto__))
);

return c__28874__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37136){
var map__37140 = p__37136;
var map__37140__$1 = ((((!((map__37140 == null)))?((((map__37140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37140.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37140):map__37140);
var file = cljs.core.get.call(null,map__37140__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37140__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37140__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37142 = "";
var G__37142__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37142),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__37142);
var G__37142__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37142__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__37142__$1);
if(cljs.core.truth_((function (){var and__25204__auto__ = line;
if(cljs.core.truth_(and__25204__auto__)){
return column;
} else {
return and__25204__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37142__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__37142__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37143){
var map__37150 = p__37143;
var map__37150__$1 = ((((!((map__37150 == null)))?((((map__37150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37150.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37150):map__37150);
var ed = map__37150__$1;
var formatted_exception = cljs.core.get.call(null,map__37150__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37150__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37150__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37152_37156 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37153_37157 = null;
var count__37154_37158 = (0);
var i__37155_37159 = (0);
while(true){
if((i__37155_37159 < count__37154_37158)){
var msg_37160 = cljs.core._nth.call(null,chunk__37153_37157,i__37155_37159);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37160);

var G__37161 = seq__37152_37156;
var G__37162 = chunk__37153_37157;
var G__37163 = count__37154_37158;
var G__37164 = (i__37155_37159 + (1));
seq__37152_37156 = G__37161;
chunk__37153_37157 = G__37162;
count__37154_37158 = G__37163;
i__37155_37159 = G__37164;
continue;
} else {
var temp__4657__auto___37165 = cljs.core.seq.call(null,seq__37152_37156);
if(temp__4657__auto___37165){
var seq__37152_37166__$1 = temp__4657__auto___37165;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37152_37166__$1)){
var c__26035__auto___37167 = cljs.core.chunk_first.call(null,seq__37152_37166__$1);
var G__37168 = cljs.core.chunk_rest.call(null,seq__37152_37166__$1);
var G__37169 = c__26035__auto___37167;
var G__37170 = cljs.core.count.call(null,c__26035__auto___37167);
var G__37171 = (0);
seq__37152_37156 = G__37168;
chunk__37153_37157 = G__37169;
count__37154_37158 = G__37170;
i__37155_37159 = G__37171;
continue;
} else {
var msg_37172 = cljs.core.first.call(null,seq__37152_37166__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37172);

var G__37173 = cljs.core.next.call(null,seq__37152_37166__$1);
var G__37174 = null;
var G__37175 = (0);
var G__37176 = (0);
seq__37152_37156 = G__37173;
chunk__37153_37157 = G__37174;
count__37154_37158 = G__37175;
i__37155_37159 = G__37176;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37177){
var map__37180 = p__37177;
var map__37180__$1 = ((((!((map__37180 == null)))?((((map__37180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37180.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37180):map__37180);
var w = map__37180__$1;
var message = cljs.core.get.call(null,map__37180__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__25204__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__25204__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__25204__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__37192 = cljs.core.seq.call(null,plugins);
var chunk__37193 = null;
var count__37194 = (0);
var i__37195 = (0);
while(true){
if((i__37195 < count__37194)){
var vec__37196 = cljs.core._nth.call(null,chunk__37193,i__37195);
var k = cljs.core.nth.call(null,vec__37196,(0),null);
var plugin = cljs.core.nth.call(null,vec__37196,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37202 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37192,chunk__37193,count__37194,i__37195,pl_37202,vec__37196,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37202.call(null,msg_hist);
});})(seq__37192,chunk__37193,count__37194,i__37195,pl_37202,vec__37196,k,plugin))
);
} else {
}

var G__37203 = seq__37192;
var G__37204 = chunk__37193;
var G__37205 = count__37194;
var G__37206 = (i__37195 + (1));
seq__37192 = G__37203;
chunk__37193 = G__37204;
count__37194 = G__37205;
i__37195 = G__37206;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37192);
if(temp__4657__auto__){
var seq__37192__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37192__$1)){
var c__26035__auto__ = cljs.core.chunk_first.call(null,seq__37192__$1);
var G__37207 = cljs.core.chunk_rest.call(null,seq__37192__$1);
var G__37208 = c__26035__auto__;
var G__37209 = cljs.core.count.call(null,c__26035__auto__);
var G__37210 = (0);
seq__37192 = G__37207;
chunk__37193 = G__37208;
count__37194 = G__37209;
i__37195 = G__37210;
continue;
} else {
var vec__37199 = cljs.core.first.call(null,seq__37192__$1);
var k = cljs.core.nth.call(null,vec__37199,(0),null);
var plugin = cljs.core.nth.call(null,vec__37199,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37211 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37192,chunk__37193,count__37194,i__37195,pl_37211,vec__37199,k,plugin,seq__37192__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37211.call(null,msg_hist);
});})(seq__37192,chunk__37193,count__37194,i__37195,pl_37211,vec__37199,k,plugin,seq__37192__$1,temp__4657__auto__))
);
} else {
}

var G__37212 = cljs.core.next.call(null,seq__37192__$1);
var G__37213 = null;
var G__37214 = (0);
var G__37215 = (0);
seq__37192 = G__37212;
chunk__37193 = G__37213;
count__37194 = G__37214;
i__37195 = G__37215;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args37216 = [];
var len__26329__auto___37223 = arguments.length;
var i__26330__auto___37224 = (0);
while(true){
if((i__26330__auto___37224 < len__26329__auto___37223)){
args37216.push((arguments[i__26330__auto___37224]));

var G__37225 = (i__26330__auto___37224 + (1));
i__26330__auto___37224 = G__37225;
continue;
} else {
}
break;
}

var G__37218 = args37216.length;
switch (G__37218) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37216.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37219_37227 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37220_37228 = null;
var count__37221_37229 = (0);
var i__37222_37230 = (0);
while(true){
if((i__37222_37230 < count__37221_37229)){
var msg_37231 = cljs.core._nth.call(null,chunk__37220_37228,i__37222_37230);
figwheel.client.socket.handle_incoming_message.call(null,msg_37231);

var G__37232 = seq__37219_37227;
var G__37233 = chunk__37220_37228;
var G__37234 = count__37221_37229;
var G__37235 = (i__37222_37230 + (1));
seq__37219_37227 = G__37232;
chunk__37220_37228 = G__37233;
count__37221_37229 = G__37234;
i__37222_37230 = G__37235;
continue;
} else {
var temp__4657__auto___37236 = cljs.core.seq.call(null,seq__37219_37227);
if(temp__4657__auto___37236){
var seq__37219_37237__$1 = temp__4657__auto___37236;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37219_37237__$1)){
var c__26035__auto___37238 = cljs.core.chunk_first.call(null,seq__37219_37237__$1);
var G__37239 = cljs.core.chunk_rest.call(null,seq__37219_37237__$1);
var G__37240 = c__26035__auto___37238;
var G__37241 = cljs.core.count.call(null,c__26035__auto___37238);
var G__37242 = (0);
seq__37219_37227 = G__37239;
chunk__37220_37228 = G__37240;
count__37221_37229 = G__37241;
i__37222_37230 = G__37242;
continue;
} else {
var msg_37243 = cljs.core.first.call(null,seq__37219_37237__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37243);

var G__37244 = cljs.core.next.call(null,seq__37219_37237__$1);
var G__37245 = null;
var G__37246 = (0);
var G__37247 = (0);
seq__37219_37227 = G__37244;
chunk__37220_37228 = G__37245;
count__37221_37229 = G__37246;
i__37222_37230 = G__37247;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__26336__auto__ = [];
var len__26329__auto___37252 = arguments.length;
var i__26330__auto___37253 = (0);
while(true){
if((i__26330__auto___37253 < len__26329__auto___37252)){
args__26336__auto__.push((arguments[i__26330__auto___37253]));

var G__37254 = (i__26330__auto___37253 + (1));
i__26330__auto___37253 = G__37254;
continue;
} else {
}
break;
}

var argseq__26337__auto__ = ((((0) < args__26336__auto__.length))?(new cljs.core.IndexedSeq(args__26336__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26337__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37249){
var map__37250 = p__37249;
var map__37250__$1 = ((((!((map__37250 == null)))?((((map__37250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37250.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37250):map__37250);
var opts = map__37250__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37248){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37248));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37256){if((e37256 instanceof Error)){
var e = e37256;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37256;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__37260){
var map__37261 = p__37260;
var map__37261__$1 = ((((!((map__37261 == null)))?((((map__37261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37261.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37261):map__37261);
var msg_name = cljs.core.get.call(null,map__37261__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1489246408221