// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args28919 = [];
var len__26329__auto___28925 = arguments.length;
var i__26330__auto___28926 = (0);
while(true){
if((i__26330__auto___28926 < len__26329__auto___28925)){
args28919.push((arguments[i__26330__auto___28926]));

var G__28927 = (i__26330__auto___28926 + (1));
i__26330__auto___28926 = G__28927;
continue;
} else {
}
break;
}

var G__28921 = args28919.length;
switch (G__28921) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28919.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async28922 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28922 = (function (f,blockable,meta28923){
this.f = f;
this.blockable = blockable;
this.meta28923 = meta28923;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28924,meta28923__$1){
var self__ = this;
var _28924__$1 = this;
return (new cljs.core.async.t_cljs$core$async28922(self__.f,self__.blockable,meta28923__$1));
});

cljs.core.async.t_cljs$core$async28922.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28924){
var self__ = this;
var _28924__$1 = this;
return self__.meta28923;
});

cljs.core.async.t_cljs$core$async28922.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28922.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28922.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async28922.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28922.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28923","meta28923",-519051101,null)], null);
});

cljs.core.async.t_cljs$core$async28922.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28922.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28922";

cljs.core.async.t_cljs$core$async28922.cljs$lang$ctorPrWriter = (function (this__25827__auto__,writer__25828__auto__,opt__25829__auto__){
return cljs.core._write.call(null,writer__25828__auto__,"cljs.core.async/t_cljs$core$async28922");
});

cljs.core.async.__GT_t_cljs$core$async28922 = (function cljs$core$async$__GT_t_cljs$core$async28922(f__$1,blockable__$1,meta28923){
return (new cljs.core.async.t_cljs$core$async28922(f__$1,blockable__$1,meta28923));
});

}

return (new cljs.core.async.t_cljs$core$async28922(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args28931 = [];
var len__26329__auto___28934 = arguments.length;
var i__26330__auto___28935 = (0);
while(true){
if((i__26330__auto___28935 < len__26329__auto___28934)){
args28931.push((arguments[i__26330__auto___28935]));

var G__28936 = (i__26330__auto___28935 + (1));
i__26330__auto___28935 = G__28936;
continue;
} else {
}
break;
}

var G__28933 = args28931.length;
switch (G__28933) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28931.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args28938 = [];
var len__26329__auto___28941 = arguments.length;
var i__26330__auto___28942 = (0);
while(true){
if((i__26330__auto___28942 < len__26329__auto___28941)){
args28938.push((arguments[i__26330__auto___28942]));

var G__28943 = (i__26330__auto___28942 + (1));
i__26330__auto___28942 = G__28943;
continue;
} else {
}
break;
}

var G__28940 = args28938.length;
switch (G__28940) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28938.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args28945 = [];
var len__26329__auto___28948 = arguments.length;
var i__26330__auto___28949 = (0);
while(true){
if((i__26330__auto___28949 < len__26329__auto___28948)){
args28945.push((arguments[i__26330__auto___28949]));

var G__28950 = (i__26330__auto___28949 + (1));
i__26330__auto___28949 = G__28950;
continue;
} else {
}
break;
}

var G__28947 = args28945.length;
switch (G__28947) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28945.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28952 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28952);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28952,ret){
return (function (){
return fn1.call(null,val_28952);
});})(val_28952,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args28953 = [];
var len__26329__auto___28956 = arguments.length;
var i__26330__auto___28957 = (0);
while(true){
if((i__26330__auto___28957 < len__26329__auto___28956)){
args28953.push((arguments[i__26330__auto___28957]));

var G__28958 = (i__26330__auto___28957 + (1));
i__26330__auto___28957 = G__28958;
continue;
} else {
}
break;
}

var G__28955 = args28953.length;
switch (G__28955) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28953.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__26139__auto___28960 = n;
var x_28961 = (0);
while(true){
if((x_28961 < n__26139__auto___28960)){
(a[x_28961] = (0));

var G__28962 = (x_28961 + (1));
x_28961 = G__28962;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__28963 = (i + (1));
i = G__28963;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async28967 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28967 = (function (flag,meta28968){
this.flag = flag;
this.meta28968 = meta28968;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28967.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28969,meta28968__$1){
var self__ = this;
var _28969__$1 = this;
return (new cljs.core.async.t_cljs$core$async28967(self__.flag,meta28968__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28967.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28969){
var self__ = this;
var _28969__$1 = this;
return self__.meta28968;
});})(flag))
;

cljs.core.async.t_cljs$core$async28967.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28967.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28967.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28967.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28967.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28968","meta28968",-1785715010,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28967.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28967.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28967";

cljs.core.async.t_cljs$core$async28967.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25827__auto__,writer__25828__auto__,opt__25829__auto__){
return cljs.core._write.call(null,writer__25828__auto__,"cljs.core.async/t_cljs$core$async28967");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async28967 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28967(flag__$1,meta28968){
return (new cljs.core.async.t_cljs$core$async28967(flag__$1,meta28968));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28967(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async28973 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28973 = (function (flag,cb,meta28974){
this.flag = flag;
this.cb = cb;
this.meta28974 = meta28974;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28975,meta28974__$1){
var self__ = this;
var _28975__$1 = this;
return (new cljs.core.async.t_cljs$core$async28973(self__.flag,self__.cb,meta28974__$1));
});

cljs.core.async.t_cljs$core$async28973.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28975){
var self__ = this;
var _28975__$1 = this;
return self__.meta28974;
});

cljs.core.async.t_cljs$core$async28973.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28973.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28973.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28973.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28973.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28974","meta28974",-1240808234,null)], null);
});

cljs.core.async.t_cljs$core$async28973.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28973.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28973";

cljs.core.async.t_cljs$core$async28973.cljs$lang$ctorPrWriter = (function (this__25827__auto__,writer__25828__auto__,opt__25829__auto__){
return cljs.core._write.call(null,writer__25828__auto__,"cljs.core.async/t_cljs$core$async28973");
});

cljs.core.async.__GT_t_cljs$core$async28973 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28973(flag__$1,cb__$1,meta28974){
return (new cljs.core.async.t_cljs$core$async28973(flag__$1,cb__$1,meta28974));
});

}

return (new cljs.core.async.t_cljs$core$async28973(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28976_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28976_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28977_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28977_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__25216__auto__ = wport;
if(cljs.core.truth_(or__25216__auto__)){
return or__25216__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28978 = (i + (1));
i = G__28978;
continue;
}
} else {
return null;
}
break;
}
})();
var or__25216__auto__ = ret;
if(cljs.core.truth_(or__25216__auto__)){
return or__25216__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__25204__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__25204__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__25204__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__26336__auto__ = [];
var len__26329__auto___28984 = arguments.length;
var i__26330__auto___28985 = (0);
while(true){
if((i__26330__auto___28985 < len__26329__auto___28984)){
args__26336__auto__.push((arguments[i__26330__auto___28985]));

var G__28986 = (i__26330__auto___28985 + (1));
i__26330__auto___28985 = G__28986;
continue;
} else {
}
break;
}

var argseq__26337__auto__ = ((((1) < args__26336__auto__.length))?(new cljs.core.IndexedSeq(args__26336__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26337__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28981){
var map__28982 = p__28981;
var map__28982__$1 = ((((!((map__28982 == null)))?((((map__28982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28982.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28982):map__28982);
var opts = map__28982__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28979){
var G__28980 = cljs.core.first.call(null,seq28979);
var seq28979__$1 = cljs.core.next.call(null,seq28979);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28980,seq28979__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args28987 = [];
var len__26329__auto___29037 = arguments.length;
var i__26330__auto___29038 = (0);
while(true){
if((i__26330__auto___29038 < len__26329__auto___29037)){
args28987.push((arguments[i__26330__auto___29038]));

var G__29039 = (i__26330__auto___29038 + (1));
i__26330__auto___29038 = G__29039;
continue;
} else {
}
break;
}

var G__28989 = args28987.length;
switch (G__28989) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28987.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28874__auto___29041 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28874__auto___29041){
return (function (){
var f__28875__auto__ = (function (){var switch__27272__auto__ = ((function (c__28874__auto___29041){
return (function (state_29013){
var state_val_29014 = (state_29013[(1)]);
if((state_val_29014 === (7))){
var inst_29009 = (state_29013[(2)]);
var state_29013__$1 = state_29013;
var statearr_29015_29042 = state_29013__$1;
(statearr_29015_29042[(2)] = inst_29009);

(statearr_29015_29042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29014 === (1))){
var state_29013__$1 = state_29013;
var statearr_29016_29043 = state_29013__$1;
(statearr_29016_29043[(2)] = null);

(statearr_29016_29043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29014 === (4))){
var inst_28992 = (state_29013[(7)]);
var inst_28992__$1 = (state_29013[(2)]);
var inst_28993 = (inst_28992__$1 == null);
var state_29013__$1 = (function (){var statearr_29017 = state_29013;
(statearr_29017[(7)] = inst_28992__$1);

return statearr_29017;
})();
if(cljs.core.truth_(inst_28993)){
var statearr_29018_29044 = state_29013__$1;
(statearr_29018_29044[(1)] = (5));

} else {
var statearr_29019_29045 = state_29013__$1;
(statearr_29019_29045[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29014 === (13))){
var state_29013__$1 = state_29013;
var statearr_29020_29046 = state_29013__$1;
(statearr_29020_29046[(2)] = null);

(statearr_29020_29046[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29014 === (6))){
var inst_28992 = (state_29013[(7)]);
var state_29013__$1 = state_29013;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29013__$1,(11),to,inst_28992);
} else {
if((state_val_29014 === (3))){
var inst_29011 = (state_29013[(2)]);
var state_29013__$1 = state_29013;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29013__$1,inst_29011);
} else {
if((state_val_29014 === (12))){
var state_29013__$1 = state_29013;
var statearr_29021_29047 = state_29013__$1;
(statearr_29021_29047[(2)] = null);

(statearr_29021_29047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29014 === (2))){
var state_29013__$1 = state_29013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29013__$1,(4),from);
} else {
if((state_val_29014 === (11))){
var inst_29002 = (state_29013[(2)]);
var state_29013__$1 = state_29013;
if(cljs.core.truth_(inst_29002)){
var statearr_29022_29048 = state_29013__$1;
(statearr_29022_29048[(1)] = (12));

} else {
var statearr_29023_29049 = state_29013__$1;
(statearr_29023_29049[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29014 === (9))){
var state_29013__$1 = state_29013;
var statearr_29024_29050 = state_29013__$1;
(statearr_29024_29050[(2)] = null);

(statearr_29024_29050[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29014 === (5))){
var state_29013__$1 = state_29013;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29025_29051 = state_29013__$1;
(statearr_29025_29051[(1)] = (8));

} else {
var statearr_29026_29052 = state_29013__$1;
(statearr_29026_29052[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29014 === (14))){
var inst_29007 = (state_29013[(2)]);
var state_29013__$1 = state_29013;
var statearr_29027_29053 = state_29013__$1;
(statearr_29027_29053[(2)] = inst_29007);

(statearr_29027_29053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29014 === (10))){
var inst_28999 = (state_29013[(2)]);
var state_29013__$1 = state_29013;
var statearr_29028_29054 = state_29013__$1;
(statearr_29028_29054[(2)] = inst_28999);

(statearr_29028_29054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29014 === (8))){
var inst_28996 = cljs.core.async.close_BANG_.call(null,to);
var state_29013__$1 = state_29013;
var statearr_29029_29055 = state_29013__$1;
(statearr_29029_29055[(2)] = inst_28996);

(statearr_29029_29055[(1)] = (10));


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
});})(c__28874__auto___29041))
;
return ((function (switch__27272__auto__,c__28874__auto___29041){
return (function() {
var cljs$core$async$state_machine__27273__auto__ = null;
var cljs$core$async$state_machine__27273__auto____0 = (function (){
var statearr_29033 = [null,null,null,null,null,null,null,null];
(statearr_29033[(0)] = cljs$core$async$state_machine__27273__auto__);

(statearr_29033[(1)] = (1));

return statearr_29033;
});
var cljs$core$async$state_machine__27273__auto____1 = (function (state_29013){
while(true){
var ret_value__27274__auto__ = (function (){try{while(true){
var result__27275__auto__ = switch__27272__auto__.call(null,state_29013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27275__auto__;
}
break;
}
}catch (e29034){if((e29034 instanceof Object)){
var ex__27276__auto__ = e29034;
var statearr_29035_29056 = state_29013;
(statearr_29035_29056[(5)] = ex__27276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29057 = state_29013;
state_29013 = G__29057;
continue;
} else {
return ret_value__27274__auto__;
}
break;
}
});
cljs$core$async$state_machine__27273__auto__ = function(state_29013){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27273__auto____1.call(this,state_29013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27273__auto____0;
cljs$core$async$state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27273__auto____1;
return cljs$core$async$state_machine__27273__auto__;
})()
;})(switch__27272__auto__,c__28874__auto___29041))
})();
var state__28876__auto__ = (function (){var statearr_29036 = f__28875__auto__.call(null);
(statearr_29036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28874__auto___29041);

return statearr_29036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28876__auto__);
});})(c__28874__auto___29041))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__29245){
var vec__29246 = p__29245;
var v = cljs.core.nth.call(null,vec__29246,(0),null);
var p = cljs.core.nth.call(null,vec__29246,(1),null);
var job = vec__29246;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28874__auto___29432 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28874__auto___29432,res,vec__29246,v,p,job,jobs,results){
return (function (){
var f__28875__auto__ = (function (){var switch__27272__auto__ = ((function (c__28874__auto___29432,res,vec__29246,v,p,job,jobs,results){
return (function (state_29253){
var state_val_29254 = (state_29253[(1)]);
if((state_val_29254 === (1))){
var state_29253__$1 = state_29253;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29253__$1,(2),res,v);
} else {
if((state_val_29254 === (2))){
var inst_29250 = (state_29253[(2)]);
var inst_29251 = cljs.core.async.close_BANG_.call(null,res);
var state_29253__$1 = (function (){var statearr_29255 = state_29253;
(statearr_29255[(7)] = inst_29250);

return statearr_29255;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29253__$1,inst_29251);
} else {
return null;
}
}
});})(c__28874__auto___29432,res,vec__29246,v,p,job,jobs,results))
;
return ((function (switch__27272__auto__,c__28874__auto___29432,res,vec__29246,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27273__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27273__auto____0 = (function (){
var statearr_29259 = [null,null,null,null,null,null,null,null];
(statearr_29259[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27273__auto__);

(statearr_29259[(1)] = (1));

return statearr_29259;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27273__auto____1 = (function (state_29253){
while(true){
var ret_value__27274__auto__ = (function (){try{while(true){
var result__27275__auto__ = switch__27272__auto__.call(null,state_29253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27275__auto__;
}
break;
}
}catch (e29260){if((e29260 instanceof Object)){
var ex__27276__auto__ = e29260;
var statearr_29261_29433 = state_29253;
(statearr_29261_29433[(5)] = ex__27276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29434 = state_29253;
state_29253 = G__29434;
continue;
} else {
return ret_value__27274__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27273__auto__ = function(state_29253){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27273__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27273__auto____1.call(this,state_29253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27273__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27273__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27273__auto__;
})()
;})(switch__27272__auto__,c__28874__auto___29432,res,vec__29246,v,p,job,jobs,results))
})();
var state__28876__auto__ = (function (){var statearr_29262 = f__28875__auto__.call(null);
(statearr_29262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28874__auto___29432);

return statearr_29262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28876__auto__);
});})(c__28874__auto___29432,res,vec__29246,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29263){
var vec__29264 = p__29263;
var v = cljs.core.nth.call(null,vec__29264,(0),null);
var p = cljs.core.nth.call(null,vec__29264,(1),null);
var job = vec__29264;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__26139__auto___29435 = n;
var __29436 = (0);
while(true){
if((__29436 < n__26139__auto___29435)){
var G__29267_29437 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29267_29437) {
case "compute":
var c__28874__auto___29439 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29436,c__28874__auto___29439,G__29267_29437,n__26139__auto___29435,jobs,results,process,async){
return (function (){
var f__28875__auto__ = (function (){var switch__27272__auto__ = ((function (__29436,c__28874__auto___29439,G__29267_29437,n__26139__auto___29435,jobs,results,process,async){
return (function (state_29280){
var state_val_29281 = (state_29280[(1)]);
if((state_val_29281 === (1))){
var state_29280__$1 = state_29280;
var statearr_29282_29440 = state_29280__$1;
(statearr_29282_29440[(2)] = null);

(statearr_29282_29440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (2))){
var state_29280__$1 = state_29280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29280__$1,(4),jobs);
} else {
if((state_val_29281 === (3))){
var inst_29278 = (state_29280[(2)]);
var state_29280__$1 = state_29280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29280__$1,inst_29278);
} else {
if((state_val_29281 === (4))){
var inst_29270 = (state_29280[(2)]);
var inst_29271 = process.call(null,inst_29270);
var state_29280__$1 = state_29280;
if(cljs.core.truth_(inst_29271)){
var statearr_29283_29441 = state_29280__$1;
(statearr_29283_29441[(1)] = (5));

} else {
var statearr_29284_29442 = state_29280__$1;
(statearr_29284_29442[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (5))){
var state_29280__$1 = state_29280;
var statearr_29285_29443 = state_29280__$1;
(statearr_29285_29443[(2)] = null);

(statearr_29285_29443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (6))){
var state_29280__$1 = state_29280;
var statearr_29286_29444 = state_29280__$1;
(statearr_29286_29444[(2)] = null);

(statearr_29286_29444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (7))){
var inst_29276 = (state_29280[(2)]);
var state_29280__$1 = state_29280;
var statearr_29287_29445 = state_29280__$1;
(statearr_29287_29445[(2)] = inst_29276);

(statearr_29287_29445[(1)] = (3));


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
});})(__29436,c__28874__auto___29439,G__29267_29437,n__26139__auto___29435,jobs,results,process,async))
;
return ((function (__29436,switch__27272__auto__,c__28874__auto___29439,G__29267_29437,n__26139__auto___29435,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27273__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27273__auto____0 = (function (){
var statearr_29291 = [null,null,null,null,null,null,null];
(statearr_29291[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27273__auto__);

(statearr_29291[(1)] = (1));

return statearr_29291;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27273__auto____1 = (function (state_29280){
while(true){
var ret_value__27274__auto__ = (function (){try{while(true){
var result__27275__auto__ = switch__27272__auto__.call(null,state_29280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27275__auto__;
}
break;
}
}catch (e29292){if((e29292 instanceof Object)){
var ex__27276__auto__ = e29292;
var statearr_29293_29446 = state_29280;
(statearr_29293_29446[(5)] = ex__27276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29292;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29447 = state_29280;
state_29280 = G__29447;
continue;
} else {
return ret_value__27274__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27273__auto__ = function(state_29280){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27273__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27273__auto____1.call(this,state_29280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27273__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27273__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27273__auto__;
})()
;})(__29436,switch__27272__auto__,c__28874__auto___29439,G__29267_29437,n__26139__auto___29435,jobs,results,process,async))
})();
var state__28876__auto__ = (function (){var statearr_29294 = f__28875__auto__.call(null);
(statearr_29294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28874__auto___29439);

return statearr_29294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28876__auto__);
});})(__29436,c__28874__auto___29439,G__29267_29437,n__26139__auto___29435,jobs,results,process,async))
);


break;
case "async":
var c__28874__auto___29448 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29436,c__28874__auto___29448,G__29267_29437,n__26139__auto___29435,jobs,results,process,async){
return (function (){
var f__28875__auto__ = (function (){var switch__27272__auto__ = ((function (__29436,c__28874__auto___29448,G__29267_29437,n__26139__auto___29435,jobs,results,process,async){
return (function (state_29307){
var state_val_29308 = (state_29307[(1)]);
if((state_val_29308 === (1))){
var state_29307__$1 = state_29307;
var statearr_29309_29449 = state_29307__$1;
(statearr_29309_29449[(2)] = null);

(statearr_29309_29449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29308 === (2))){
var state_29307__$1 = state_29307;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29307__$1,(4),jobs);
} else {
if((state_val_29308 === (3))){
var inst_29305 = (state_29307[(2)]);
var state_29307__$1 = state_29307;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29307__$1,inst_29305);
} else {
if((state_val_29308 === (4))){
var inst_29297 = (state_29307[(2)]);
var inst_29298 = async.call(null,inst_29297);
var state_29307__$1 = state_29307;
if(cljs.core.truth_(inst_29298)){
var statearr_29310_29450 = state_29307__$1;
(statearr_29310_29450[(1)] = (5));

} else {
var statearr_29311_29451 = state_29307__$1;
(statearr_29311_29451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29308 === (5))){
var state_29307__$1 = state_29307;
var statearr_29312_29452 = state_29307__$1;
(statearr_29312_29452[(2)] = null);

(statearr_29312_29452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29308 === (6))){
var state_29307__$1 = state_29307;
var statearr_29313_29453 = state_29307__$1;
(statearr_29313_29453[(2)] = null);

(statearr_29313_29453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29308 === (7))){
var inst_29303 = (state_29307[(2)]);
var state_29307__$1 = state_29307;
var statearr_29314_29454 = state_29307__$1;
(statearr_29314_29454[(2)] = inst_29303);

(statearr_29314_29454[(1)] = (3));


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
});})(__29436,c__28874__auto___29448,G__29267_29437,n__26139__auto___29435,jobs,results,process,async))
;
return ((function (__29436,switch__27272__auto__,c__28874__auto___29448,G__29267_29437,n__26139__auto___29435,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27273__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27273__auto____0 = (function (){
var statearr_29318 = [null,null,null,null,null,null,null];
(statearr_29318[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27273__auto__);

(statearr_29318[(1)] = (1));

return statearr_29318;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27273__auto____1 = (function (state_29307){
while(true){
var ret_value__27274__auto__ = (function (){try{while(true){
var result__27275__auto__ = switch__27272__auto__.call(null,state_29307);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27275__auto__;
}
break;
}
}catch (e29319){if((e29319 instanceof Object)){
var ex__27276__auto__ = e29319;
var statearr_29320_29455 = state_29307;
(statearr_29320_29455[(5)] = ex__27276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29307);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29456 = state_29307;
state_29307 = G__29456;
continue;
} else {
return ret_value__27274__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27273__auto__ = function(state_29307){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27273__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27273__auto____1.call(this,state_29307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27273__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27273__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27273__auto__;
})()
;})(__29436,switch__27272__auto__,c__28874__auto___29448,G__29267_29437,n__26139__auto___29435,jobs,results,process,async))
})();
var state__28876__auto__ = (function (){var statearr_29321 = f__28875__auto__.call(null);
(statearr_29321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28874__auto___29448);

return statearr_29321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28876__auto__);
});})(__29436,c__28874__auto___29448,G__29267_29437,n__26139__auto___29435,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__29457 = (__29436 + (1));
__29436 = G__29457;
continue;
} else {
}
break;
}

var c__28874__auto___29458 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28874__auto___29458,jobs,results,process,async){
return (function (){
var f__28875__auto__ = (function (){var switch__27272__auto__ = ((function (c__28874__auto___29458,jobs,results,process,async){
return (function (state_29343){
var state_val_29344 = (state_29343[(1)]);
if((state_val_29344 === (1))){
var state_29343__$1 = state_29343;
var statearr_29345_29459 = state_29343__$1;
(statearr_29345_29459[(2)] = null);

(statearr_29345_29459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29344 === (2))){
var state_29343__$1 = state_29343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29343__$1,(4),from);
} else {
if((state_val_29344 === (3))){
var inst_29341 = (state_29343[(2)]);
var state_29343__$1 = state_29343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29343__$1,inst_29341);
} else {
if((state_val_29344 === (4))){
var inst_29324 = (state_29343[(7)]);
var inst_29324__$1 = (state_29343[(2)]);
var inst_29325 = (inst_29324__$1 == null);
var state_29343__$1 = (function (){var statearr_29346 = state_29343;
(statearr_29346[(7)] = inst_29324__$1);

return statearr_29346;
})();
if(cljs.core.truth_(inst_29325)){
var statearr_29347_29460 = state_29343__$1;
(statearr_29347_29460[(1)] = (5));

} else {
var statearr_29348_29461 = state_29343__$1;
(statearr_29348_29461[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29344 === (5))){
var inst_29327 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29343__$1 = state_29343;
var statearr_29349_29462 = state_29343__$1;
(statearr_29349_29462[(2)] = inst_29327);

(statearr_29349_29462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29344 === (6))){
var inst_29324 = (state_29343[(7)]);
var inst_29329 = (state_29343[(8)]);
var inst_29329__$1 = cljs.core.async.chan.call(null,(1));
var inst_29330 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29331 = [inst_29324,inst_29329__$1];
var inst_29332 = (new cljs.core.PersistentVector(null,2,(5),inst_29330,inst_29331,null));
var state_29343__$1 = (function (){var statearr_29350 = state_29343;
(statearr_29350[(8)] = inst_29329__$1);

return statearr_29350;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29343__$1,(8),jobs,inst_29332);
} else {
if((state_val_29344 === (7))){
var inst_29339 = (state_29343[(2)]);
var state_29343__$1 = state_29343;
var statearr_29351_29463 = state_29343__$1;
(statearr_29351_29463[(2)] = inst_29339);

(statearr_29351_29463[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29344 === (8))){
var inst_29329 = (state_29343[(8)]);
var inst_29334 = (state_29343[(2)]);
var state_29343__$1 = (function (){var statearr_29352 = state_29343;
(statearr_29352[(9)] = inst_29334);

return statearr_29352;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29343__$1,(9),results,inst_29329);
} else {
if((state_val_29344 === (9))){
var inst_29336 = (state_29343[(2)]);
var state_29343__$1 = (function (){var statearr_29353 = state_29343;
(statearr_29353[(10)] = inst_29336);

return statearr_29353;
})();
var statearr_29354_29464 = state_29343__$1;
(statearr_29354_29464[(2)] = null);

(statearr_29354_29464[(1)] = (2));


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
});})(c__28874__auto___29458,jobs,results,process,async))
;
return ((function (switch__27272__auto__,c__28874__auto___29458,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27273__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27273__auto____0 = (function (){
var statearr_29358 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29358[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27273__auto__);

(statearr_29358[(1)] = (1));

return statearr_29358;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27273__auto____1 = (function (state_29343){
while(true){
var ret_value__27274__auto__ = (function (){try{while(true){
var result__27275__auto__ = switch__27272__auto__.call(null,state_29343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27275__auto__;
}
break;
}
}catch (e29359){if((e29359 instanceof Object)){
var ex__27276__auto__ = e29359;
var statearr_29360_29465 = state_29343;
(statearr_29360_29465[(5)] = ex__27276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29466 = state_29343;
state_29343 = G__29466;
continue;
} else {
return ret_value__27274__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27273__auto__ = function(state_29343){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27273__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27273__auto____1.call(this,state_29343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27273__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27273__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27273__auto__;
})()
;})(switch__27272__auto__,c__28874__auto___29458,jobs,results,process,async))
})();
var state__28876__auto__ = (function (){var statearr_29361 = f__28875__auto__.call(null);
(statearr_29361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28874__auto___29458);

return statearr_29361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28876__auto__);
});})(c__28874__auto___29458,jobs,results,process,async))
);


var c__28874__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28874__auto__,jobs,results,process,async){
return (function (){
var f__28875__auto__ = (function (){var switch__27272__auto__ = ((function (c__28874__auto__,jobs,results,process,async){
return (function (state_29399){
var state_val_29400 = (state_29399[(1)]);
if((state_val_29400 === (7))){
var inst_29395 = (state_29399[(2)]);
var state_29399__$1 = state_29399;
var statearr_29401_29467 = state_29399__$1;
(statearr_29401_29467[(2)] = inst_29395);

(statearr_29401_29467[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29400 === (20))){
var state_29399__$1 = state_29399;
var statearr_29402_29468 = state_29399__$1;
(statearr_29402_29468[(2)] = null);

(statearr_29402_29468[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29400 === (1))){
var state_29399__$1 = state_29399;
var statearr_29403_29469 = state_29399__$1;
(statearr_29403_29469[(2)] = null);

(statearr_29403_29469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29400 === (4))){
var inst_29364 = (state_29399[(7)]);
var inst_29364__$1 = (state_29399[(2)]);
var inst_29365 = (inst_29364__$1 == null);
var state_29399__$1 = (function (){var statearr_29404 = state_29399;
(statearr_29404[(7)] = inst_29364__$1);

return statearr_29404;
})();
if(cljs.core.truth_(inst_29365)){
var statearr_29405_29470 = state_29399__$1;
(statearr_29405_29470[(1)] = (5));

} else {
var statearr_29406_29471 = state_29399__$1;
(statearr_29406_29471[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29400 === (15))){
var inst_29377 = (state_29399[(8)]);
var state_29399__$1 = state_29399;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29399__$1,(18),to,inst_29377);
} else {
if((state_val_29400 === (21))){
var inst_29390 = (state_29399[(2)]);
var state_29399__$1 = state_29399;
var statearr_29407_29472 = state_29399__$1;
(statearr_29407_29472[(2)] = inst_29390);

(statearr_29407_29472[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29400 === (13))){
var inst_29392 = (state_29399[(2)]);
var state_29399__$1 = (function (){var statearr_29408 = state_29399;
(statearr_29408[(9)] = inst_29392);

return statearr_29408;
})();
var statearr_29409_29473 = state_29399__$1;
(statearr_29409_29473[(2)] = null);

(statearr_29409_29473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29400 === (6))){
var inst_29364 = (state_29399[(7)]);
var state_29399__$1 = state_29399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29399__$1,(11),inst_29364);
} else {
if((state_val_29400 === (17))){
var inst_29385 = (state_29399[(2)]);
var state_29399__$1 = state_29399;
if(cljs.core.truth_(inst_29385)){
var statearr_29410_29474 = state_29399__$1;
(statearr_29410_29474[(1)] = (19));

} else {
var statearr_29411_29475 = state_29399__$1;
(statearr_29411_29475[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29400 === (3))){
var inst_29397 = (state_29399[(2)]);
var state_29399__$1 = state_29399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29399__$1,inst_29397);
} else {
if((state_val_29400 === (12))){
var inst_29374 = (state_29399[(10)]);
var state_29399__$1 = state_29399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29399__$1,(14),inst_29374);
} else {
if((state_val_29400 === (2))){
var state_29399__$1 = state_29399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29399__$1,(4),results);
} else {
if((state_val_29400 === (19))){
var state_29399__$1 = state_29399;
var statearr_29412_29476 = state_29399__$1;
(statearr_29412_29476[(2)] = null);

(statearr_29412_29476[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29400 === (11))){
var inst_29374 = (state_29399[(2)]);
var state_29399__$1 = (function (){var statearr_29413 = state_29399;
(statearr_29413[(10)] = inst_29374);

return statearr_29413;
})();
var statearr_29414_29477 = state_29399__$1;
(statearr_29414_29477[(2)] = null);

(statearr_29414_29477[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29400 === (9))){
var state_29399__$1 = state_29399;
var statearr_29415_29478 = state_29399__$1;
(statearr_29415_29478[(2)] = null);

(statearr_29415_29478[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29400 === (5))){
var state_29399__$1 = state_29399;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29416_29479 = state_29399__$1;
(statearr_29416_29479[(1)] = (8));

} else {
var statearr_29417_29480 = state_29399__$1;
(statearr_29417_29480[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29400 === (14))){
var inst_29377 = (state_29399[(8)]);
var inst_29379 = (state_29399[(11)]);
var inst_29377__$1 = (state_29399[(2)]);
var inst_29378 = (inst_29377__$1 == null);
var inst_29379__$1 = cljs.core.not.call(null,inst_29378);
var state_29399__$1 = (function (){var statearr_29418 = state_29399;
(statearr_29418[(8)] = inst_29377__$1);

(statearr_29418[(11)] = inst_29379__$1);

return statearr_29418;
})();
if(inst_29379__$1){
var statearr_29419_29481 = state_29399__$1;
(statearr_29419_29481[(1)] = (15));

} else {
var statearr_29420_29482 = state_29399__$1;
(statearr_29420_29482[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29400 === (16))){
var inst_29379 = (state_29399[(11)]);
var state_29399__$1 = state_29399;
var statearr_29421_29483 = state_29399__$1;
(statearr_29421_29483[(2)] = inst_29379);

(statearr_29421_29483[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29400 === (10))){
var inst_29371 = (state_29399[(2)]);
var state_29399__$1 = state_29399;
var statearr_29422_29484 = state_29399__$1;
(statearr_29422_29484[(2)] = inst_29371);

(statearr_29422_29484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29400 === (18))){
var inst_29382 = (state_29399[(2)]);
var state_29399__$1 = state_29399;
var statearr_29423_29485 = state_29399__$1;
(statearr_29423_29485[(2)] = inst_29382);

(statearr_29423_29485[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29400 === (8))){
var inst_29368 = cljs.core.async.close_BANG_.call(null,to);
var state_29399__$1 = state_29399;
var statearr_29424_29486 = state_29399__$1;
(statearr_29424_29486[(2)] = inst_29368);

(statearr_29424_29486[(1)] = (10));


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
});})(c__28874__auto__,jobs,results,process,async))
;
return ((function (switch__27272__auto__,c__28874__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27273__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27273__auto____0 = (function (){
var statearr_29428 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29428[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27273__auto__);

(statearr_29428[(1)] = (1));

return statearr_29428;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27273__auto____1 = (function (state_29399){
while(true){
var ret_value__27274__auto__ = (function (){try{while(true){
var result__27275__auto__ = switch__27272__auto__.call(null,state_29399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27275__auto__;
}
break;
}
}catch (e29429){if((e29429 instanceof Object)){
var ex__27276__auto__ = e29429;
var statearr_29430_29487 = state_29399;
(statearr_29430_29487[(5)] = ex__27276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29429;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29488 = state_29399;
state_29399 = G__29488;
continue;
} else {
return ret_value__27274__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27273__auto__ = function(state_29399){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27273__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27273__auto____1.call(this,state_29399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27273__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27273__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27273__auto__;
})()
;})(switch__27272__auto__,c__28874__auto__,jobs,results,process,async))
})();
var state__28876__auto__ = (function (){var statearr_29431 = f__28875__auto__.call(null);
(statearr_29431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28874__auto__);

return statearr_29431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28876__auto__);
});})(c__28874__auto__,jobs,results,process,async))
);

return c__28874__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args29489 = [];
var len__26329__auto___29492 = arguments.length;
var i__26330__auto___29493 = (0);
while(true){
if((i__26330__auto___29493 < len__26329__auto___29492)){
args29489.push((arguments[i__26330__auto___29493]));

var G__29494 = (i__26330__auto___29493 + (1));
i__26330__auto___29493 = G__29494;
continue;
} else {
}
break;
}

var G__29491 = args29489.length;
switch (G__29491) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29489.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args29496 = [];
var len__26329__auto___29499 = arguments.length;
var i__26330__auto___29500 = (0);
while(true){
if((i__26330__auto___29500 < len__26329__auto___29499)){
args29496.push((arguments[i__26330__auto___29500]));

var G__29501 = (i__26330__auto___29500 + (1));
i__26330__auto___29500 = G__29501;
continue;
} else {
}
break;
}

var G__29498 = args29496.length;
switch (G__29498) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29496.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args29503 = [];
var len__26329__auto___29556 = arguments.length;
var i__26330__auto___29557 = (0);
while(true){
if((i__26330__auto___29557 < len__26329__auto___29556)){
args29503.push((arguments[i__26330__auto___29557]));

var G__29558 = (i__26330__auto___29557 + (1));
i__26330__auto___29557 = G__29558;
continue;
} else {
}
break;
}

var G__29505 = args29503.length;
switch (G__29505) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29503.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28874__auto___29560 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28874__auto___29560,tc,fc){
return (function (){
var f__28875__auto__ = (function (){var switch__27272__auto__ = ((function (c__28874__auto___29560,tc,fc){
return (function (state_29531){
var state_val_29532 = (state_29531[(1)]);
if((state_val_29532 === (7))){
var inst_29527 = (state_29531[(2)]);
var state_29531__$1 = state_29531;
var statearr_29533_29561 = state_29531__$1;
(statearr_29533_29561[(2)] = inst_29527);

(statearr_29533_29561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29532 === (1))){
var state_29531__$1 = state_29531;
var statearr_29534_29562 = state_29531__$1;
(statearr_29534_29562[(2)] = null);

(statearr_29534_29562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29532 === (4))){
var inst_29508 = (state_29531[(7)]);
var inst_29508__$1 = (state_29531[(2)]);
var inst_29509 = (inst_29508__$1 == null);
var state_29531__$1 = (function (){var statearr_29535 = state_29531;
(statearr_29535[(7)] = inst_29508__$1);

return statearr_29535;
})();
if(cljs.core.truth_(inst_29509)){
var statearr_29536_29563 = state_29531__$1;
(statearr_29536_29563[(1)] = (5));

} else {
var statearr_29537_29564 = state_29531__$1;
(statearr_29537_29564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29532 === (13))){
var state_29531__$1 = state_29531;
var statearr_29538_29565 = state_29531__$1;
(statearr_29538_29565[(2)] = null);

(statearr_29538_29565[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29532 === (6))){
var inst_29508 = (state_29531[(7)]);
var inst_29514 = p.call(null,inst_29508);
var state_29531__$1 = state_29531;
if(cljs.core.truth_(inst_29514)){
var statearr_29539_29566 = state_29531__$1;
(statearr_29539_29566[(1)] = (9));

} else {
var statearr_29540_29567 = state_29531__$1;
(statearr_29540_29567[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29532 === (3))){
var inst_29529 = (state_29531[(2)]);
var state_29531__$1 = state_29531;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29531__$1,inst_29529);
} else {
if((state_val_29532 === (12))){
var state_29531__$1 = state_29531;
var statearr_29541_29568 = state_29531__$1;
(statearr_29541_29568[(2)] = null);

(statearr_29541_29568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29532 === (2))){
var state_29531__$1 = state_29531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29531__$1,(4),ch);
} else {
if((state_val_29532 === (11))){
var inst_29508 = (state_29531[(7)]);
var inst_29518 = (state_29531[(2)]);
var state_29531__$1 = state_29531;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29531__$1,(8),inst_29518,inst_29508);
} else {
if((state_val_29532 === (9))){
var state_29531__$1 = state_29531;
var statearr_29542_29569 = state_29531__$1;
(statearr_29542_29569[(2)] = tc);

(statearr_29542_29569[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29532 === (5))){
var inst_29511 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29512 = cljs.core.async.close_BANG_.call(null,fc);
var state_29531__$1 = (function (){var statearr_29543 = state_29531;
(statearr_29543[(8)] = inst_29511);

return statearr_29543;
})();
var statearr_29544_29570 = state_29531__$1;
(statearr_29544_29570[(2)] = inst_29512);

(statearr_29544_29570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29532 === (14))){
var inst_29525 = (state_29531[(2)]);
var state_29531__$1 = state_29531;
var statearr_29545_29571 = state_29531__$1;
(statearr_29545_29571[(2)] = inst_29525);

(statearr_29545_29571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29532 === (10))){
var state_29531__$1 = state_29531;
var statearr_29546_29572 = state_29531__$1;
(statearr_29546_29572[(2)] = fc);

(statearr_29546_29572[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29532 === (8))){
var inst_29520 = (state_29531[(2)]);
var state_29531__$1 = state_29531;
if(cljs.core.truth_(inst_29520)){
var statearr_29547_29573 = state_29531__$1;
(statearr_29547_29573[(1)] = (12));

} else {
var statearr_29548_29574 = state_29531__$1;
(statearr_29548_29574[(1)] = (13));

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
});})(c__28874__auto___29560,tc,fc))
;
return ((function (switch__27272__auto__,c__28874__auto___29560,tc,fc){
return (function() {
var cljs$core$async$state_machine__27273__auto__ = null;
var cljs$core$async$state_machine__27273__auto____0 = (function (){
var statearr_29552 = [null,null,null,null,null,null,null,null,null];
(statearr_29552[(0)] = cljs$core$async$state_machine__27273__auto__);

(statearr_29552[(1)] = (1));

return statearr_29552;
});
var cljs$core$async$state_machine__27273__auto____1 = (function (state_29531){
while(true){
var ret_value__27274__auto__ = (function (){try{while(true){
var result__27275__auto__ = switch__27272__auto__.call(null,state_29531);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27275__auto__;
}
break;
}
}catch (e29553){if((e29553 instanceof Object)){
var ex__27276__auto__ = e29553;
var statearr_29554_29575 = state_29531;
(statearr_29554_29575[(5)] = ex__27276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29576 = state_29531;
state_29531 = G__29576;
continue;
} else {
return ret_value__27274__auto__;
}
break;
}
});
cljs$core$async$state_machine__27273__auto__ = function(state_29531){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27273__auto____1.call(this,state_29531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27273__auto____0;
cljs$core$async$state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27273__auto____1;
return cljs$core$async$state_machine__27273__auto__;
})()
;})(switch__27272__auto__,c__28874__auto___29560,tc,fc))
})();
var state__28876__auto__ = (function (){var statearr_29555 = f__28875__auto__.call(null);
(statearr_29555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28874__auto___29560);

return statearr_29555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28876__auto__);
});})(c__28874__auto___29560,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28874__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28874__auto__){
return (function (){
var f__28875__auto__ = (function (){var switch__27272__auto__ = ((function (c__28874__auto__){
return (function (state_29640){
var state_val_29641 = (state_29640[(1)]);
if((state_val_29641 === (7))){
var inst_29636 = (state_29640[(2)]);
var state_29640__$1 = state_29640;
var statearr_29642_29663 = state_29640__$1;
(statearr_29642_29663[(2)] = inst_29636);

(statearr_29642_29663[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (1))){
var inst_29620 = init;
var state_29640__$1 = (function (){var statearr_29643 = state_29640;
(statearr_29643[(7)] = inst_29620);

return statearr_29643;
})();
var statearr_29644_29664 = state_29640__$1;
(statearr_29644_29664[(2)] = null);

(statearr_29644_29664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (4))){
var inst_29623 = (state_29640[(8)]);
var inst_29623__$1 = (state_29640[(2)]);
var inst_29624 = (inst_29623__$1 == null);
var state_29640__$1 = (function (){var statearr_29645 = state_29640;
(statearr_29645[(8)] = inst_29623__$1);

return statearr_29645;
})();
if(cljs.core.truth_(inst_29624)){
var statearr_29646_29665 = state_29640__$1;
(statearr_29646_29665[(1)] = (5));

} else {
var statearr_29647_29666 = state_29640__$1;
(statearr_29647_29666[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (6))){
var inst_29627 = (state_29640[(9)]);
var inst_29623 = (state_29640[(8)]);
var inst_29620 = (state_29640[(7)]);
var inst_29627__$1 = f.call(null,inst_29620,inst_29623);
var inst_29628 = cljs.core.reduced_QMARK_.call(null,inst_29627__$1);
var state_29640__$1 = (function (){var statearr_29648 = state_29640;
(statearr_29648[(9)] = inst_29627__$1);

return statearr_29648;
})();
if(inst_29628){
var statearr_29649_29667 = state_29640__$1;
(statearr_29649_29667[(1)] = (8));

} else {
var statearr_29650_29668 = state_29640__$1;
(statearr_29650_29668[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (3))){
var inst_29638 = (state_29640[(2)]);
var state_29640__$1 = state_29640;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29640__$1,inst_29638);
} else {
if((state_val_29641 === (2))){
var state_29640__$1 = state_29640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29640__$1,(4),ch);
} else {
if((state_val_29641 === (9))){
var inst_29627 = (state_29640[(9)]);
var inst_29620 = inst_29627;
var state_29640__$1 = (function (){var statearr_29651 = state_29640;
(statearr_29651[(7)] = inst_29620);

return statearr_29651;
})();
var statearr_29652_29669 = state_29640__$1;
(statearr_29652_29669[(2)] = null);

(statearr_29652_29669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (5))){
var inst_29620 = (state_29640[(7)]);
var state_29640__$1 = state_29640;
var statearr_29653_29670 = state_29640__$1;
(statearr_29653_29670[(2)] = inst_29620);

(statearr_29653_29670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (10))){
var inst_29634 = (state_29640[(2)]);
var state_29640__$1 = state_29640;
var statearr_29654_29671 = state_29640__$1;
(statearr_29654_29671[(2)] = inst_29634);

(statearr_29654_29671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (8))){
var inst_29627 = (state_29640[(9)]);
var inst_29630 = cljs.core.deref.call(null,inst_29627);
var state_29640__$1 = state_29640;
var statearr_29655_29672 = state_29640__$1;
(statearr_29655_29672[(2)] = inst_29630);

(statearr_29655_29672[(1)] = (10));


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
});})(c__28874__auto__))
;
return ((function (switch__27272__auto__,c__28874__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27273__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27273__auto____0 = (function (){
var statearr_29659 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29659[(0)] = cljs$core$async$reduce_$_state_machine__27273__auto__);

(statearr_29659[(1)] = (1));

return statearr_29659;
});
var cljs$core$async$reduce_$_state_machine__27273__auto____1 = (function (state_29640){
while(true){
var ret_value__27274__auto__ = (function (){try{while(true){
var result__27275__auto__ = switch__27272__auto__.call(null,state_29640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27275__auto__;
}
break;
}
}catch (e29660){if((e29660 instanceof Object)){
var ex__27276__auto__ = e29660;
var statearr_29661_29673 = state_29640;
(statearr_29661_29673[(5)] = ex__27276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29674 = state_29640;
state_29640 = G__29674;
continue;
} else {
return ret_value__27274__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27273__auto__ = function(state_29640){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27273__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27273__auto____1.call(this,state_29640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27273__auto____0;
cljs$core$async$reduce_$_state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27273__auto____1;
return cljs$core$async$reduce_$_state_machine__27273__auto__;
})()
;})(switch__27272__auto__,c__28874__auto__))
})();
var state__28876__auto__ = (function (){var statearr_29662 = f__28875__auto__.call(null);
(statearr_29662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28874__auto__);

return statearr_29662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28876__auto__);
});})(c__28874__auto__))
);

return c__28874__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args29675 = [];
var len__26329__auto___29727 = arguments.length;
var i__26330__auto___29728 = (0);
while(true){
if((i__26330__auto___29728 < len__26329__auto___29727)){
args29675.push((arguments[i__26330__auto___29728]));

var G__29729 = (i__26330__auto___29728 + (1));
i__26330__auto___29728 = G__29729;
continue;
} else {
}
break;
}

var G__29677 = args29675.length;
switch (G__29677) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29675.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28874__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28874__auto__){
return (function (){
var f__28875__auto__ = (function (){var switch__27272__auto__ = ((function (c__28874__auto__){
return (function (state_29702){
var state_val_29703 = (state_29702[(1)]);
if((state_val_29703 === (7))){
var inst_29684 = (state_29702[(2)]);
var state_29702__$1 = state_29702;
var statearr_29704_29731 = state_29702__$1;
(statearr_29704_29731[(2)] = inst_29684);

(statearr_29704_29731[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29703 === (1))){
var inst_29678 = cljs.core.seq.call(null,coll);
var inst_29679 = inst_29678;
var state_29702__$1 = (function (){var statearr_29705 = state_29702;
(statearr_29705[(7)] = inst_29679);

return statearr_29705;
})();
var statearr_29706_29732 = state_29702__$1;
(statearr_29706_29732[(2)] = null);

(statearr_29706_29732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29703 === (4))){
var inst_29679 = (state_29702[(7)]);
var inst_29682 = cljs.core.first.call(null,inst_29679);
var state_29702__$1 = state_29702;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29702__$1,(7),ch,inst_29682);
} else {
if((state_val_29703 === (13))){
var inst_29696 = (state_29702[(2)]);
var state_29702__$1 = state_29702;
var statearr_29707_29733 = state_29702__$1;
(statearr_29707_29733[(2)] = inst_29696);

(statearr_29707_29733[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29703 === (6))){
var inst_29687 = (state_29702[(2)]);
var state_29702__$1 = state_29702;
if(cljs.core.truth_(inst_29687)){
var statearr_29708_29734 = state_29702__$1;
(statearr_29708_29734[(1)] = (8));

} else {
var statearr_29709_29735 = state_29702__$1;
(statearr_29709_29735[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29703 === (3))){
var inst_29700 = (state_29702[(2)]);
var state_29702__$1 = state_29702;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29702__$1,inst_29700);
} else {
if((state_val_29703 === (12))){
var state_29702__$1 = state_29702;
var statearr_29710_29736 = state_29702__$1;
(statearr_29710_29736[(2)] = null);

(statearr_29710_29736[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29703 === (2))){
var inst_29679 = (state_29702[(7)]);
var state_29702__$1 = state_29702;
if(cljs.core.truth_(inst_29679)){
var statearr_29711_29737 = state_29702__$1;
(statearr_29711_29737[(1)] = (4));

} else {
var statearr_29712_29738 = state_29702__$1;
(statearr_29712_29738[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29703 === (11))){
var inst_29693 = cljs.core.async.close_BANG_.call(null,ch);
var state_29702__$1 = state_29702;
var statearr_29713_29739 = state_29702__$1;
(statearr_29713_29739[(2)] = inst_29693);

(statearr_29713_29739[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29703 === (9))){
var state_29702__$1 = state_29702;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29714_29740 = state_29702__$1;
(statearr_29714_29740[(1)] = (11));

} else {
var statearr_29715_29741 = state_29702__$1;
(statearr_29715_29741[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29703 === (5))){
var inst_29679 = (state_29702[(7)]);
var state_29702__$1 = state_29702;
var statearr_29716_29742 = state_29702__$1;
(statearr_29716_29742[(2)] = inst_29679);

(statearr_29716_29742[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29703 === (10))){
var inst_29698 = (state_29702[(2)]);
var state_29702__$1 = state_29702;
var statearr_29717_29743 = state_29702__$1;
(statearr_29717_29743[(2)] = inst_29698);

(statearr_29717_29743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29703 === (8))){
var inst_29679 = (state_29702[(7)]);
var inst_29689 = cljs.core.next.call(null,inst_29679);
var inst_29679__$1 = inst_29689;
var state_29702__$1 = (function (){var statearr_29718 = state_29702;
(statearr_29718[(7)] = inst_29679__$1);

return statearr_29718;
})();
var statearr_29719_29744 = state_29702__$1;
(statearr_29719_29744[(2)] = null);

(statearr_29719_29744[(1)] = (2));


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
});})(c__28874__auto__))
;
return ((function (switch__27272__auto__,c__28874__auto__){
return (function() {
var cljs$core$async$state_machine__27273__auto__ = null;
var cljs$core$async$state_machine__27273__auto____0 = (function (){
var statearr_29723 = [null,null,null,null,null,null,null,null];
(statearr_29723[(0)] = cljs$core$async$state_machine__27273__auto__);

(statearr_29723[(1)] = (1));

return statearr_29723;
});
var cljs$core$async$state_machine__27273__auto____1 = (function (state_29702){
while(true){
var ret_value__27274__auto__ = (function (){try{while(true){
var result__27275__auto__ = switch__27272__auto__.call(null,state_29702);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27275__auto__;
}
break;
}
}catch (e29724){if((e29724 instanceof Object)){
var ex__27276__auto__ = e29724;
var statearr_29725_29745 = state_29702;
(statearr_29725_29745[(5)] = ex__27276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29746 = state_29702;
state_29702 = G__29746;
continue;
} else {
return ret_value__27274__auto__;
}
break;
}
});
cljs$core$async$state_machine__27273__auto__ = function(state_29702){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27273__auto____1.call(this,state_29702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27273__auto____0;
cljs$core$async$state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27273__auto____1;
return cljs$core$async$state_machine__27273__auto__;
})()
;})(switch__27272__auto__,c__28874__auto__))
})();
var state__28876__auto__ = (function (){var statearr_29726 = f__28875__auto__.call(null);
(statearr_29726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28874__auto__);

return statearr_29726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28876__auto__);
});})(c__28874__auto__))
);

return c__28874__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25884__auto__ = (((_ == null))?null:_);
var m__25885__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25884__auto__)]);
if(!((m__25885__auto__ == null))){
return m__25885__auto__.call(null,_);
} else {
var m__25885__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25885__auto____$1 == null))){
return m__25885__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25884__auto__ = (((m == null))?null:m);
var m__25885__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25884__auto__)]);
if(!((m__25885__auto__ == null))){
return m__25885__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25885__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25885__auto____$1 == null))){
return m__25885__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25884__auto__ = (((m == null))?null:m);
var m__25885__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25884__auto__)]);
if(!((m__25885__auto__ == null))){
return m__25885__auto__.call(null,m,ch);
} else {
var m__25885__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25885__auto____$1 == null))){
return m__25885__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25884__auto__ = (((m == null))?null:m);
var m__25885__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25884__auto__)]);
if(!((m__25885__auto__ == null))){
return m__25885__auto__.call(null,m);
} else {
var m__25885__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25885__auto____$1 == null))){
return m__25885__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29972 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29972 = (function (ch,cs,meta29973){
this.ch = ch;
this.cs = cs;
this.meta29973 = meta29973;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29974,meta29973__$1){
var self__ = this;
var _29974__$1 = this;
return (new cljs.core.async.t_cljs$core$async29972(self__.ch,self__.cs,meta29973__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29972.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29974){
var self__ = this;
var _29974__$1 = this;
return self__.meta29973;
});})(cs))
;

cljs.core.async.t_cljs$core$async29972.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29972.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29972.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29972.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29972.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29972.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29972.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29973","meta29973",-900676906,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29972.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29972.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29972";

cljs.core.async.t_cljs$core$async29972.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25827__auto__,writer__25828__auto__,opt__25829__auto__){
return cljs.core._write.call(null,writer__25828__auto__,"cljs.core.async/t_cljs$core$async29972");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async29972 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29972(ch__$1,cs__$1,meta29973){
return (new cljs.core.async.t_cljs$core$async29972(ch__$1,cs__$1,meta29973));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29972(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__28874__auto___30197 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28874__auto___30197,cs,m,dchan,dctr,done){
return (function (){
var f__28875__auto__ = (function (){var switch__27272__auto__ = ((function (c__28874__auto___30197,cs,m,dchan,dctr,done){
return (function (state_30109){
var state_val_30110 = (state_30109[(1)]);
if((state_val_30110 === (7))){
var inst_30105 = (state_30109[(2)]);
var state_30109__$1 = state_30109;
var statearr_30111_30198 = state_30109__$1;
(statearr_30111_30198[(2)] = inst_30105);

(statearr_30111_30198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30110 === (20))){
var inst_30008 = (state_30109[(7)]);
var inst_30020 = cljs.core.first.call(null,inst_30008);
var inst_30021 = cljs.core.nth.call(null,inst_30020,(0),null);
var inst_30022 = cljs.core.nth.call(null,inst_30020,(1),null);
var state_30109__$1 = (function (){var statearr_30112 = state_30109;
(statearr_30112[(8)] = inst_30021);

return statearr_30112;
})();
if(cljs.core.truth_(inst_30022)){
var statearr_30113_30199 = state_30109__$1;
(statearr_30113_30199[(1)] = (22));

} else {
var statearr_30114_30200 = state_30109__$1;
(statearr_30114_30200[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30110 === (27))){
var inst_30050 = (state_30109[(9)]);
var inst_30057 = (state_30109[(10)]);
var inst_29977 = (state_30109[(11)]);
var inst_30052 = (state_30109[(12)]);
var inst_30057__$1 = cljs.core._nth.call(null,inst_30050,inst_30052);
var inst_30058 = cljs.core.async.put_BANG_.call(null,inst_30057__$1,inst_29977,done);
var state_30109__$1 = (function (){var statearr_30115 = state_30109;
(statearr_30115[(10)] = inst_30057__$1);

return statearr_30115;
})();
if(cljs.core.truth_(inst_30058)){
var statearr_30116_30201 = state_30109__$1;
(statearr_30116_30201[(1)] = (30));

} else {
var statearr_30117_30202 = state_30109__$1;
(statearr_30117_30202[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30110 === (1))){
var state_30109__$1 = state_30109;
var statearr_30118_30203 = state_30109__$1;
(statearr_30118_30203[(2)] = null);

(statearr_30118_30203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30110 === (24))){
var inst_30008 = (state_30109[(7)]);
var inst_30027 = (state_30109[(2)]);
var inst_30028 = cljs.core.next.call(null,inst_30008);
var inst_29986 = inst_30028;
var inst_29987 = null;
var inst_29988 = (0);
var inst_29989 = (0);
var state_30109__$1 = (function (){var statearr_30119 = state_30109;
(statearr_30119[(13)] = inst_29989);

(statearr_30119[(14)] = inst_29986);

(statearr_30119[(15)] = inst_29987);

(statearr_30119[(16)] = inst_29988);

(statearr_30119[(17)] = inst_30027);

return statearr_30119;
})();
var statearr_30120_30204 = state_30109__$1;
(statearr_30120_30204[(2)] = null);

(statearr_30120_30204[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30110 === (39))){
var state_30109__$1 = state_30109;
var statearr_30124_30205 = state_30109__$1;
(statearr_30124_30205[(2)] = null);

(statearr_30124_30205[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30110 === (4))){
var inst_29977 = (state_30109[(11)]);
var inst_29977__$1 = (state_30109[(2)]);
var inst_29978 = (inst_29977__$1 == null);
var state_30109__$1 = (function (){var statearr_30125 = state_30109;
(statearr_30125[(11)] = inst_29977__$1);

return statearr_30125;
})();
if(cljs.core.truth_(inst_29978)){
var statearr_30126_30206 = state_30109__$1;
(statearr_30126_30206[(1)] = (5));

} else {
var statearr_30127_30207 = state_30109__$1;
(statearr_30127_30207[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30110 === (15))){
var inst_29989 = (state_30109[(13)]);
var inst_29986 = (state_30109[(14)]);
var inst_29987 = (state_30109[(15)]);
var inst_29988 = (state_30109[(16)]);
var inst_30004 = (state_30109[(2)]);
var inst_30005 = (inst_29989 + (1));
var tmp30121 = inst_29986;
var tmp30122 = inst_29987;
var tmp30123 = inst_29988;
var inst_29986__$1 = tmp30121;
var inst_29987__$1 = tmp30122;
var inst_29988__$1 = tmp30123;
var inst_29989__$1 = inst_30005;
var state_30109__$1 = (function (){var statearr_30128 = state_30109;
(statearr_30128[(13)] = inst_29989__$1);

(statearr_30128[(18)] = inst_30004);

(statearr_30128[(14)] = inst_29986__$1);

(statearr_30128[(15)] = inst_29987__$1);

(statearr_30128[(16)] = inst_29988__$1);

return statearr_30128;
})();
var statearr_30129_30208 = state_30109__$1;
(statearr_30129_30208[(2)] = null);

(statearr_30129_30208[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30110 === (21))){
var inst_30031 = (state_30109[(2)]);
var state_30109__$1 = state_30109;
var statearr_30133_30209 = state_30109__$1;
(statearr_30133_30209[(2)] = inst_30031);

(statearr_30133_30209[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30110 === (31))){
var inst_30057 = (state_30109[(10)]);
var inst_30061 = done.call(null,null);
var inst_30062 = cljs.core.async.untap_STAR_.call(null,m,inst_30057);
var state_30109__$1 = (function (){var statearr_30134 = state_30109;
(statearr_30134[(19)] = inst_30061);

return statearr_30134;
})();
var statearr_30135_30210 = state_30109__$1;
(statearr_30135_30210[(2)] = inst_30062);

(statearr_30135_30210[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30110 === (32))){
var inst_30050 = (state_30109[(9)]);
var inst_30051 = (state_30109[(20)]);
var inst_30052 = (state_30109[(12)]);
var inst_30049 = (state_30109[(21)]);
var inst_30064 = (state_30109[(2)]);
var inst_30065 = (inst_30052 + (1));
var tmp30130 = inst_30050;
var tmp30131 = inst_30051;
var tmp30132 = inst_30049;
var inst_30049__$1 = tmp30132;
var inst_30050__$1 = tmp30130;
var inst_30051__$1 = tmp30131;
var inst_30052__$1 = inst_30065;
var state_30109__$1 = (function (){var statearr_30136 = state_30109;
(statearr_30136[(9)] = inst_30050__$1);

(statearr_30136[(20)] = inst_30051__$1);

(statearr_30136[(22)] = inst_30064);

(statearr_30136[(12)] = inst_30052__$1);

(statearr_30136[(21)] = inst_30049__$1);

return statearr_30136;
})();
var statearr_30137_30211 = state_30109__$1;
(statearr_30137_30211[(2)] = null);

(statearr_30137_30211[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30110 === (40))){
var inst_30077 = (state_30109[(23)]);
var inst_30081 = done.call(null,null);
var inst_30082 = cljs.core.async.untap_STAR_.call(null,m,inst_30077);
var state_30109__$1 = (function (){var statearr_30138 = state_30109;
(statearr_30138[(24)] = inst_30081);

return statearr_30138;
})();
var statearr_30139_30212 = state_30109__$1;
(statearr_30139_30212[(2)] = inst_30082);

(statearr_30139_30212[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30110 === (33))){
var inst_30068 = (state_30109[(25)]);
var inst_30070 = cljs.core.chunked_seq_QMARK_.call(null,inst_30068);
var state_30109__$1 = state_30109;
if(inst_30070){
var statearr_30140_30213 = state_30109__$1;
(statearr_30140_30213[(1)] = (36));

} else {
var statearr_30141_30214 = state_30109__$1;
(statearr_30141_30214[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30110 === (13))){
var inst_29998 = (state_30109[(26)]);
var inst_30001 = cljs.core.async.close_BANG_.call(null,inst_29998);
var state_30109__$1 = state_30109;
var statearr_30142_30215 = state_30109__$1;
(statearr_30142_30215[(2)] = inst_30001);

(statearr_30142_30215[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30110 === (22))){
var inst_30021 = (state_30109[(8)]);
var inst_30024 = cljs.core.async.close_BANG_.call(null,inst_30021);
var state_30109__$1 = state_30109;
var statearr_30143_30216 = state_30109__$1;
(statearr_30143_30216[(2)] = inst_30024);

(statearr_30143_30216[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30110 === (36))){
var inst_30068 = (state_30109[(25)]);
var inst_30072 = cljs.core.chunk_first.call(null,inst_30068);
var inst_30073 = cljs.core.chunk_rest.call(null,inst_30068);
var inst_30074 = cljs.core.count.call(null,inst_30072);
var inst_30049 = inst_30073;
var inst_30050 = inst_30072;
var inst_30051 = inst_30074;
var inst_30052 = (0);
var state_30109__$1 = (function (){var statearr_30144 = state_30109;
(statearr_30144[(9)] = inst_30050);

(statearr_30144[(20)] = inst_30051);

(statearr_30144[(12)] = inst_30052);

(statearr_30144[(21)] = inst_30049);

return statearr_30144;
})();
var statearr_30145_30217 = state_30109__$1;
(statearr_30145_30217[(2)] = null);

(statearr_30145_30217[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30110 === (41))){
var inst_30068 = (state_30109[(25)]);
var inst_30084 = (state_30109[(2)]);
var inst_30085 = cljs.core.next.call(null,inst_30068);
var inst_30049 = inst_30085;
var inst_30050 = null;
var inst_30051 = (0);
var inst_30052 = (0);
var state_30109__$1 = (function (){var statearr_30146 = state_30109;
(statearr_30146[(9)] = inst_30050);

(statearr_30146[(20)] = inst_30051);

(statearr_30146[(27)] = inst_30084);

(statearr_30146[(12)] = inst_30052);

(statearr_30146[(21)] = inst_30049);

return statearr_30146;
})();
var statearr_30147_30218 = state_30109__$1;
(statearr_30147_30218[(2)] = null);

(statearr_30147_30218[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30110 === (43))){
var state_30109__$1 = state_30109;
var statearr_30148_30219 = state_30109__$1;
(statearr_30148_30219[(2)] = null);

(statearr_30148_30219[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30110 === (29))){
var inst_30093 = (state_30109[(2)]);
var state_30109__$1 = state_30109;
var statearr_30149_30220 = state_30109__$1;
(statearr_30149_30220[(2)] = inst_30093);

(statearr_30149_30220[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30110 === (44))){
var inst_30102 = (state_30109[(2)]);
var state_30109__$1 = (function (){var statearr_30150 = state_30109;
(statearr_30150[(28)] = inst_30102);

return statearr_30150;
})();
var statearr_30151_30221 = state_30109__$1;
(statearr_30151_30221[(2)] = null);

(statearr_30151_30221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30110 === (6))){
var inst_30041 = (state_30109[(29)]);
var inst_30040 = cljs.core.deref.call(null,cs);
var inst_30041__$1 = cljs.core.keys.call(null,inst_30040);
var inst_30042 = cljs.core.count.call(null,inst_30041__$1);
var inst_30043 = cljs.core.reset_BANG_.call(null,dctr,inst_30042);
var inst_30048 = cljs.core.seq.call(null,inst_30041__$1);
var inst_30049 = inst_30048;
var inst_30050 = null;
var inst_30051 = (0);
var inst_30052 = (0);
var state_30109__$1 = (function (){var statearr_30152 = state_30109;
(statearr_30152[(29)] = inst_30041__$1);

(statearr_30152[(9)] = inst_30050);

(statearr_30152[(20)] = inst_30051);

(statearr_30152[(30)] = inst_30043);

(statearr_30152[(12)] = inst_30052);

(statearr_30152[(21)] = inst_30049);

return statearr_30152;
})();
var statearr_30153_30222 = state_30109__$1;
(statearr_30153_30222[(2)] = null);

(statearr_30153_30222[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30110 === (28))){
var inst_30068 = (state_30109[(25)]);
var inst_30049 = (state_30109[(21)]);
var inst_30068__$1 = cljs.core.seq.call(null,inst_30049);
var state_30109__$1 = (function (){var statearr_30154 = state_30109;
(statearr_30154[(25)] = inst_30068__$1);

return statearr_30154;
})();
if(inst_30068__$1){
var statearr_30155_30223 = state_30109__$1;
(statearr_30155_30223[(1)] = (33));

} else {
var statearr_30156_30224 = state_30109__$1;
(statearr_30156_30224[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30110 === (25))){
var inst_30051 = (state_30109[(20)]);
var inst_30052 = (state_30109[(12)]);
var inst_30054 = (inst_30052 < inst_30051);
var inst_30055 = inst_30054;
var state_30109__$1 = state_30109;
if(cljs.core.truth_(inst_30055)){
var statearr_30157_30225 = state_30109__$1;
(statearr_30157_30225[(1)] = (27));

} else {
var statearr_30158_30226 = state_30109__$1;
(statearr_30158_30226[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30110 === (34))){
var state_30109__$1 = state_30109;
var statearr_30159_30227 = state_30109__$1;
(statearr_30159_30227[(2)] = null);

(statearr_30159_30227[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30110 === (17))){
var state_30109__$1 = state_30109;
var statearr_30160_30228 = state_30109__$1;
(statearr_30160_30228[(2)] = null);

(statearr_30160_30228[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30110 === (3))){
var inst_30107 = (state_30109[(2)]);
var state_30109__$1 = state_30109;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30109__$1,inst_30107);
} else {
if((state_val_30110 === (12))){
var inst_30036 = (state_30109[(2)]);
var state_30109__$1 = state_30109;
var statearr_30161_30229 = state_30109__$1;
(statearr_30161_30229[(2)] = inst_30036);

(statearr_30161_30229[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30110 === (2))){
var state_30109__$1 = state_30109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30109__$1,(4),ch);
} else {
if((state_val_30110 === (23))){
var state_30109__$1 = state_30109;
var statearr_30162_30230 = state_30109__$1;
(statearr_30162_30230[(2)] = null);

(statearr_30162_30230[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30110 === (35))){
var inst_30091 = (state_30109[(2)]);
var state_30109__$1 = state_30109;
var statearr_30163_30231 = state_30109__$1;
(statearr_30163_30231[(2)] = inst_30091);

(statearr_30163_30231[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30110 === (19))){
var inst_30008 = (state_30109[(7)]);
var inst_30012 = cljs.core.chunk_first.call(null,inst_30008);
var inst_30013 = cljs.core.chunk_rest.call(null,inst_30008);
var inst_30014 = cljs.core.count.call(null,inst_30012);
var inst_29986 = inst_30013;
var inst_29987 = inst_30012;
var inst_29988 = inst_30014;
var inst_29989 = (0);
var state_30109__$1 = (function (){var statearr_30164 = state_30109;
(statearr_30164[(13)] = inst_29989);

(statearr_30164[(14)] = inst_29986);

(statearr_30164[(15)] = inst_29987);

(statearr_30164[(16)] = inst_29988);

return statearr_30164;
})();
var statearr_30165_30232 = state_30109__$1;
(statearr_30165_30232[(2)] = null);

(statearr_30165_30232[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30110 === (11))){
var inst_29986 = (state_30109[(14)]);
var inst_30008 = (state_30109[(7)]);
var inst_30008__$1 = cljs.core.seq.call(null,inst_29986);
var state_30109__$1 = (function (){var statearr_30166 = state_30109;
(statearr_30166[(7)] = inst_30008__$1);

return statearr_30166;
})();
if(inst_30008__$1){
var statearr_30167_30233 = state_30109__$1;
(statearr_30167_30233[(1)] = (16));

} else {
var statearr_30168_30234 = state_30109__$1;
(statearr_30168_30234[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30110 === (9))){
var inst_30038 = (state_30109[(2)]);
var state_30109__$1 = state_30109;
var statearr_30169_30235 = state_30109__$1;
(statearr_30169_30235[(2)] = inst_30038);

(statearr_30169_30235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30110 === (5))){
var inst_29984 = cljs.core.deref.call(null,cs);
var inst_29985 = cljs.core.seq.call(null,inst_29984);
var inst_29986 = inst_29985;
var inst_29987 = null;
var inst_29988 = (0);
var inst_29989 = (0);
var state_30109__$1 = (function (){var statearr_30170 = state_30109;
(statearr_30170[(13)] = inst_29989);

(statearr_30170[(14)] = inst_29986);

(statearr_30170[(15)] = inst_29987);

(statearr_30170[(16)] = inst_29988);

return statearr_30170;
})();
var statearr_30171_30236 = state_30109__$1;
(statearr_30171_30236[(2)] = null);

(statearr_30171_30236[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30110 === (14))){
var state_30109__$1 = state_30109;
var statearr_30172_30237 = state_30109__$1;
(statearr_30172_30237[(2)] = null);

(statearr_30172_30237[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30110 === (45))){
var inst_30099 = (state_30109[(2)]);
var state_30109__$1 = state_30109;
var statearr_30173_30238 = state_30109__$1;
(statearr_30173_30238[(2)] = inst_30099);

(statearr_30173_30238[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30110 === (26))){
var inst_30041 = (state_30109[(29)]);
var inst_30095 = (state_30109[(2)]);
var inst_30096 = cljs.core.seq.call(null,inst_30041);
var state_30109__$1 = (function (){var statearr_30174 = state_30109;
(statearr_30174[(31)] = inst_30095);

return statearr_30174;
})();
if(inst_30096){
var statearr_30175_30239 = state_30109__$1;
(statearr_30175_30239[(1)] = (42));

} else {
var statearr_30176_30240 = state_30109__$1;
(statearr_30176_30240[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30110 === (16))){
var inst_30008 = (state_30109[(7)]);
var inst_30010 = cljs.core.chunked_seq_QMARK_.call(null,inst_30008);
var state_30109__$1 = state_30109;
if(inst_30010){
var statearr_30177_30241 = state_30109__$1;
(statearr_30177_30241[(1)] = (19));

} else {
var statearr_30178_30242 = state_30109__$1;
(statearr_30178_30242[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30110 === (38))){
var inst_30088 = (state_30109[(2)]);
var state_30109__$1 = state_30109;
var statearr_30179_30243 = state_30109__$1;
(statearr_30179_30243[(2)] = inst_30088);

(statearr_30179_30243[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30110 === (30))){
var state_30109__$1 = state_30109;
var statearr_30180_30244 = state_30109__$1;
(statearr_30180_30244[(2)] = null);

(statearr_30180_30244[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30110 === (10))){
var inst_29989 = (state_30109[(13)]);
var inst_29987 = (state_30109[(15)]);
var inst_29997 = cljs.core._nth.call(null,inst_29987,inst_29989);
var inst_29998 = cljs.core.nth.call(null,inst_29997,(0),null);
var inst_29999 = cljs.core.nth.call(null,inst_29997,(1),null);
var state_30109__$1 = (function (){var statearr_30181 = state_30109;
(statearr_30181[(26)] = inst_29998);

return statearr_30181;
})();
if(cljs.core.truth_(inst_29999)){
var statearr_30182_30245 = state_30109__$1;
(statearr_30182_30245[(1)] = (13));

} else {
var statearr_30183_30246 = state_30109__$1;
(statearr_30183_30246[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30110 === (18))){
var inst_30034 = (state_30109[(2)]);
var state_30109__$1 = state_30109;
var statearr_30184_30247 = state_30109__$1;
(statearr_30184_30247[(2)] = inst_30034);

(statearr_30184_30247[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30110 === (42))){
var state_30109__$1 = state_30109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30109__$1,(45),dchan);
} else {
if((state_val_30110 === (37))){
var inst_29977 = (state_30109[(11)]);
var inst_30068 = (state_30109[(25)]);
var inst_30077 = (state_30109[(23)]);
var inst_30077__$1 = cljs.core.first.call(null,inst_30068);
var inst_30078 = cljs.core.async.put_BANG_.call(null,inst_30077__$1,inst_29977,done);
var state_30109__$1 = (function (){var statearr_30185 = state_30109;
(statearr_30185[(23)] = inst_30077__$1);

return statearr_30185;
})();
if(cljs.core.truth_(inst_30078)){
var statearr_30186_30248 = state_30109__$1;
(statearr_30186_30248[(1)] = (39));

} else {
var statearr_30187_30249 = state_30109__$1;
(statearr_30187_30249[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30110 === (8))){
var inst_29989 = (state_30109[(13)]);
var inst_29988 = (state_30109[(16)]);
var inst_29991 = (inst_29989 < inst_29988);
var inst_29992 = inst_29991;
var state_30109__$1 = state_30109;
if(cljs.core.truth_(inst_29992)){
var statearr_30188_30250 = state_30109__$1;
(statearr_30188_30250[(1)] = (10));

} else {
var statearr_30189_30251 = state_30109__$1;
(statearr_30189_30251[(1)] = (11));

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
});})(c__28874__auto___30197,cs,m,dchan,dctr,done))
;
return ((function (switch__27272__auto__,c__28874__auto___30197,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27273__auto__ = null;
var cljs$core$async$mult_$_state_machine__27273__auto____0 = (function (){
var statearr_30193 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30193[(0)] = cljs$core$async$mult_$_state_machine__27273__auto__);

(statearr_30193[(1)] = (1));

return statearr_30193;
});
var cljs$core$async$mult_$_state_machine__27273__auto____1 = (function (state_30109){
while(true){
var ret_value__27274__auto__ = (function (){try{while(true){
var result__27275__auto__ = switch__27272__auto__.call(null,state_30109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27275__auto__;
}
break;
}
}catch (e30194){if((e30194 instanceof Object)){
var ex__27276__auto__ = e30194;
var statearr_30195_30252 = state_30109;
(statearr_30195_30252[(5)] = ex__27276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30194;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30253 = state_30109;
state_30109 = G__30253;
continue;
} else {
return ret_value__27274__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27273__auto__ = function(state_30109){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27273__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27273__auto____1.call(this,state_30109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27273__auto____0;
cljs$core$async$mult_$_state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27273__auto____1;
return cljs$core$async$mult_$_state_machine__27273__auto__;
})()
;})(switch__27272__auto__,c__28874__auto___30197,cs,m,dchan,dctr,done))
})();
var state__28876__auto__ = (function (){var statearr_30196 = f__28875__auto__.call(null);
(statearr_30196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28874__auto___30197);

return statearr_30196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28876__auto__);
});})(c__28874__auto___30197,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args30254 = [];
var len__26329__auto___30257 = arguments.length;
var i__26330__auto___30258 = (0);
while(true){
if((i__26330__auto___30258 < len__26329__auto___30257)){
args30254.push((arguments[i__26330__auto___30258]));

var G__30259 = (i__26330__auto___30258 + (1));
i__26330__auto___30258 = G__30259;
continue;
} else {
}
break;
}

var G__30256 = args30254.length;
switch (G__30256) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30254.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25884__auto__ = (((m == null))?null:m);
var m__25885__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25884__auto__)]);
if(!((m__25885__auto__ == null))){
return m__25885__auto__.call(null,m,ch);
} else {
var m__25885__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25885__auto____$1 == null))){
return m__25885__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25884__auto__ = (((m == null))?null:m);
var m__25885__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25884__auto__)]);
if(!((m__25885__auto__ == null))){
return m__25885__auto__.call(null,m,ch);
} else {
var m__25885__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25885__auto____$1 == null))){
return m__25885__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25884__auto__ = (((m == null))?null:m);
var m__25885__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25884__auto__)]);
if(!((m__25885__auto__ == null))){
return m__25885__auto__.call(null,m);
} else {
var m__25885__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25885__auto____$1 == null))){
return m__25885__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25884__auto__ = (((m == null))?null:m);
var m__25885__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25884__auto__)]);
if(!((m__25885__auto__ == null))){
return m__25885__auto__.call(null,m,state_map);
} else {
var m__25885__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25885__auto____$1 == null))){
return m__25885__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25884__auto__ = (((m == null))?null:m);
var m__25885__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25884__auto__)]);
if(!((m__25885__auto__ == null))){
return m__25885__auto__.call(null,m,mode);
} else {
var m__25885__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25885__auto____$1 == null))){
return m__25885__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__26336__auto__ = [];
var len__26329__auto___30271 = arguments.length;
var i__26330__auto___30272 = (0);
while(true){
if((i__26330__auto___30272 < len__26329__auto___30271)){
args__26336__auto__.push((arguments[i__26330__auto___30272]));

var G__30273 = (i__26330__auto___30272 + (1));
i__26330__auto___30272 = G__30273;
continue;
} else {
}
break;
}

var argseq__26337__auto__ = ((((3) < args__26336__auto__.length))?(new cljs.core.IndexedSeq(args__26336__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26337__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30265){
var map__30266 = p__30265;
var map__30266__$1 = ((((!((map__30266 == null)))?((((map__30266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30266.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30266):map__30266);
var opts = map__30266__$1;
var statearr_30268_30274 = state;
(statearr_30268_30274[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__30266,map__30266__$1,opts){
return (function (val){
var statearr_30269_30275 = state;
(statearr_30269_30275[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30266,map__30266__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_30270_30276 = state;
(statearr_30270_30276[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30261){
var G__30262 = cljs.core.first.call(null,seq30261);
var seq30261__$1 = cljs.core.next.call(null,seq30261);
var G__30263 = cljs.core.first.call(null,seq30261__$1);
var seq30261__$2 = cljs.core.next.call(null,seq30261__$1);
var G__30264 = cljs.core.first.call(null,seq30261__$2);
var seq30261__$3 = cljs.core.next.call(null,seq30261__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30262,G__30263,G__30264,seq30261__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async30444 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30444 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta30445){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta30445 = meta30445;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30444.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30446,meta30445__$1){
var self__ = this;
var _30446__$1 = this;
return (new cljs.core.async.t_cljs$core$async30444(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta30445__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30444.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30446){
var self__ = this;
var _30446__$1 = this;
return self__.meta30445;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30444.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30444.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30444.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30444.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30444.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30444.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30444.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30444.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30444.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta30445","meta30445",1793562967,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30444.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30444.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30444";

cljs.core.async.t_cljs$core$async30444.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25827__auto__,writer__25828__auto__,opt__25829__auto__){
return cljs.core._write.call(null,writer__25828__auto__,"cljs.core.async/t_cljs$core$async30444");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async30444 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30444(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta30445){
return (new cljs.core.async.t_cljs$core$async30444(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta30445));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30444(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28874__auto___30611 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28874__auto___30611,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28875__auto__ = (function (){var switch__27272__auto__ = ((function (c__28874__auto___30611,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30548){
var state_val_30549 = (state_30548[(1)]);
if((state_val_30549 === (7))){
var inst_30463 = (state_30548[(2)]);
var state_30548__$1 = state_30548;
var statearr_30550_30612 = state_30548__$1;
(statearr_30550_30612[(2)] = inst_30463);

(statearr_30550_30612[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30549 === (20))){
var inst_30475 = (state_30548[(7)]);
var state_30548__$1 = state_30548;
var statearr_30551_30613 = state_30548__$1;
(statearr_30551_30613[(2)] = inst_30475);

(statearr_30551_30613[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30549 === (27))){
var state_30548__$1 = state_30548;
var statearr_30552_30614 = state_30548__$1;
(statearr_30552_30614[(2)] = null);

(statearr_30552_30614[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30549 === (1))){
var inst_30450 = (state_30548[(8)]);
var inst_30450__$1 = calc_state.call(null);
var inst_30452 = (inst_30450__$1 == null);
var inst_30453 = cljs.core.not.call(null,inst_30452);
var state_30548__$1 = (function (){var statearr_30553 = state_30548;
(statearr_30553[(8)] = inst_30450__$1);

return statearr_30553;
})();
if(inst_30453){
var statearr_30554_30615 = state_30548__$1;
(statearr_30554_30615[(1)] = (2));

} else {
var statearr_30555_30616 = state_30548__$1;
(statearr_30555_30616[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30549 === (24))){
var inst_30522 = (state_30548[(9)]);
var inst_30499 = (state_30548[(10)]);
var inst_30508 = (state_30548[(11)]);
var inst_30522__$1 = inst_30499.call(null,inst_30508);
var state_30548__$1 = (function (){var statearr_30556 = state_30548;
(statearr_30556[(9)] = inst_30522__$1);

return statearr_30556;
})();
if(cljs.core.truth_(inst_30522__$1)){
var statearr_30557_30617 = state_30548__$1;
(statearr_30557_30617[(1)] = (29));

} else {
var statearr_30558_30618 = state_30548__$1;
(statearr_30558_30618[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30549 === (4))){
var inst_30466 = (state_30548[(2)]);
var state_30548__$1 = state_30548;
if(cljs.core.truth_(inst_30466)){
var statearr_30559_30619 = state_30548__$1;
(statearr_30559_30619[(1)] = (8));

} else {
var statearr_30560_30620 = state_30548__$1;
(statearr_30560_30620[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30549 === (15))){
var inst_30493 = (state_30548[(2)]);
var state_30548__$1 = state_30548;
if(cljs.core.truth_(inst_30493)){
var statearr_30561_30621 = state_30548__$1;
(statearr_30561_30621[(1)] = (19));

} else {
var statearr_30562_30622 = state_30548__$1;
(statearr_30562_30622[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30549 === (21))){
var inst_30498 = (state_30548[(12)]);
var inst_30498__$1 = (state_30548[(2)]);
var inst_30499 = cljs.core.get.call(null,inst_30498__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30500 = cljs.core.get.call(null,inst_30498__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30501 = cljs.core.get.call(null,inst_30498__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30548__$1 = (function (){var statearr_30563 = state_30548;
(statearr_30563[(10)] = inst_30499);

(statearr_30563[(12)] = inst_30498__$1);

(statearr_30563[(13)] = inst_30500);

return statearr_30563;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30548__$1,(22),inst_30501);
} else {
if((state_val_30549 === (31))){
var inst_30530 = (state_30548[(2)]);
var state_30548__$1 = state_30548;
if(cljs.core.truth_(inst_30530)){
var statearr_30564_30623 = state_30548__$1;
(statearr_30564_30623[(1)] = (32));

} else {
var statearr_30565_30624 = state_30548__$1;
(statearr_30565_30624[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30549 === (32))){
var inst_30507 = (state_30548[(14)]);
var state_30548__$1 = state_30548;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30548__$1,(35),out,inst_30507);
} else {
if((state_val_30549 === (33))){
var inst_30498 = (state_30548[(12)]);
var inst_30475 = inst_30498;
var state_30548__$1 = (function (){var statearr_30566 = state_30548;
(statearr_30566[(7)] = inst_30475);

return statearr_30566;
})();
var statearr_30567_30625 = state_30548__$1;
(statearr_30567_30625[(2)] = null);

(statearr_30567_30625[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30549 === (13))){
var inst_30475 = (state_30548[(7)]);
var inst_30482 = inst_30475.cljs$lang$protocol_mask$partition0$;
var inst_30483 = (inst_30482 & (64));
var inst_30484 = inst_30475.cljs$core$ISeq$;
var inst_30485 = (cljs.core.PROTOCOL_SENTINEL === inst_30484);
var inst_30486 = (inst_30483) || (inst_30485);
var state_30548__$1 = state_30548;
if(cljs.core.truth_(inst_30486)){
var statearr_30568_30626 = state_30548__$1;
(statearr_30568_30626[(1)] = (16));

} else {
var statearr_30569_30627 = state_30548__$1;
(statearr_30569_30627[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30549 === (22))){
var inst_30508 = (state_30548[(11)]);
var inst_30507 = (state_30548[(14)]);
var inst_30506 = (state_30548[(2)]);
var inst_30507__$1 = cljs.core.nth.call(null,inst_30506,(0),null);
var inst_30508__$1 = cljs.core.nth.call(null,inst_30506,(1),null);
var inst_30509 = (inst_30507__$1 == null);
var inst_30510 = cljs.core._EQ_.call(null,inst_30508__$1,change);
var inst_30511 = (inst_30509) || (inst_30510);
var state_30548__$1 = (function (){var statearr_30570 = state_30548;
(statearr_30570[(11)] = inst_30508__$1);

(statearr_30570[(14)] = inst_30507__$1);

return statearr_30570;
})();
if(cljs.core.truth_(inst_30511)){
var statearr_30571_30628 = state_30548__$1;
(statearr_30571_30628[(1)] = (23));

} else {
var statearr_30572_30629 = state_30548__$1;
(statearr_30572_30629[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30549 === (36))){
var inst_30498 = (state_30548[(12)]);
var inst_30475 = inst_30498;
var state_30548__$1 = (function (){var statearr_30573 = state_30548;
(statearr_30573[(7)] = inst_30475);

return statearr_30573;
})();
var statearr_30574_30630 = state_30548__$1;
(statearr_30574_30630[(2)] = null);

(statearr_30574_30630[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30549 === (29))){
var inst_30522 = (state_30548[(9)]);
var state_30548__$1 = state_30548;
var statearr_30575_30631 = state_30548__$1;
(statearr_30575_30631[(2)] = inst_30522);

(statearr_30575_30631[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30549 === (6))){
var state_30548__$1 = state_30548;
var statearr_30576_30632 = state_30548__$1;
(statearr_30576_30632[(2)] = false);

(statearr_30576_30632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30549 === (28))){
var inst_30518 = (state_30548[(2)]);
var inst_30519 = calc_state.call(null);
var inst_30475 = inst_30519;
var state_30548__$1 = (function (){var statearr_30577 = state_30548;
(statearr_30577[(15)] = inst_30518);

(statearr_30577[(7)] = inst_30475);

return statearr_30577;
})();
var statearr_30578_30633 = state_30548__$1;
(statearr_30578_30633[(2)] = null);

(statearr_30578_30633[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30549 === (25))){
var inst_30544 = (state_30548[(2)]);
var state_30548__$1 = state_30548;
var statearr_30579_30634 = state_30548__$1;
(statearr_30579_30634[(2)] = inst_30544);

(statearr_30579_30634[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30549 === (34))){
var inst_30542 = (state_30548[(2)]);
var state_30548__$1 = state_30548;
var statearr_30580_30635 = state_30548__$1;
(statearr_30580_30635[(2)] = inst_30542);

(statearr_30580_30635[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30549 === (17))){
var state_30548__$1 = state_30548;
var statearr_30581_30636 = state_30548__$1;
(statearr_30581_30636[(2)] = false);

(statearr_30581_30636[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30549 === (3))){
var state_30548__$1 = state_30548;
var statearr_30582_30637 = state_30548__$1;
(statearr_30582_30637[(2)] = false);

(statearr_30582_30637[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30549 === (12))){
var inst_30546 = (state_30548[(2)]);
var state_30548__$1 = state_30548;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30548__$1,inst_30546);
} else {
if((state_val_30549 === (2))){
var inst_30450 = (state_30548[(8)]);
var inst_30455 = inst_30450.cljs$lang$protocol_mask$partition0$;
var inst_30456 = (inst_30455 & (64));
var inst_30457 = inst_30450.cljs$core$ISeq$;
var inst_30458 = (cljs.core.PROTOCOL_SENTINEL === inst_30457);
var inst_30459 = (inst_30456) || (inst_30458);
var state_30548__$1 = state_30548;
if(cljs.core.truth_(inst_30459)){
var statearr_30583_30638 = state_30548__$1;
(statearr_30583_30638[(1)] = (5));

} else {
var statearr_30584_30639 = state_30548__$1;
(statearr_30584_30639[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30549 === (23))){
var inst_30507 = (state_30548[(14)]);
var inst_30513 = (inst_30507 == null);
var state_30548__$1 = state_30548;
if(cljs.core.truth_(inst_30513)){
var statearr_30585_30640 = state_30548__$1;
(statearr_30585_30640[(1)] = (26));

} else {
var statearr_30586_30641 = state_30548__$1;
(statearr_30586_30641[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30549 === (35))){
var inst_30533 = (state_30548[(2)]);
var state_30548__$1 = state_30548;
if(cljs.core.truth_(inst_30533)){
var statearr_30587_30642 = state_30548__$1;
(statearr_30587_30642[(1)] = (36));

} else {
var statearr_30588_30643 = state_30548__$1;
(statearr_30588_30643[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30549 === (19))){
var inst_30475 = (state_30548[(7)]);
var inst_30495 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30475);
var state_30548__$1 = state_30548;
var statearr_30589_30644 = state_30548__$1;
(statearr_30589_30644[(2)] = inst_30495);

(statearr_30589_30644[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30549 === (11))){
var inst_30475 = (state_30548[(7)]);
var inst_30479 = (inst_30475 == null);
var inst_30480 = cljs.core.not.call(null,inst_30479);
var state_30548__$1 = state_30548;
if(inst_30480){
var statearr_30590_30645 = state_30548__$1;
(statearr_30590_30645[(1)] = (13));

} else {
var statearr_30591_30646 = state_30548__$1;
(statearr_30591_30646[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30549 === (9))){
var inst_30450 = (state_30548[(8)]);
var state_30548__$1 = state_30548;
var statearr_30592_30647 = state_30548__$1;
(statearr_30592_30647[(2)] = inst_30450);

(statearr_30592_30647[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30549 === (5))){
var state_30548__$1 = state_30548;
var statearr_30593_30648 = state_30548__$1;
(statearr_30593_30648[(2)] = true);

(statearr_30593_30648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30549 === (14))){
var state_30548__$1 = state_30548;
var statearr_30594_30649 = state_30548__$1;
(statearr_30594_30649[(2)] = false);

(statearr_30594_30649[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30549 === (26))){
var inst_30508 = (state_30548[(11)]);
var inst_30515 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30508);
var state_30548__$1 = state_30548;
var statearr_30595_30650 = state_30548__$1;
(statearr_30595_30650[(2)] = inst_30515);

(statearr_30595_30650[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30549 === (16))){
var state_30548__$1 = state_30548;
var statearr_30596_30651 = state_30548__$1;
(statearr_30596_30651[(2)] = true);

(statearr_30596_30651[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30549 === (38))){
var inst_30538 = (state_30548[(2)]);
var state_30548__$1 = state_30548;
var statearr_30597_30652 = state_30548__$1;
(statearr_30597_30652[(2)] = inst_30538);

(statearr_30597_30652[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30549 === (30))){
var inst_30499 = (state_30548[(10)]);
var inst_30508 = (state_30548[(11)]);
var inst_30500 = (state_30548[(13)]);
var inst_30525 = cljs.core.empty_QMARK_.call(null,inst_30499);
var inst_30526 = inst_30500.call(null,inst_30508);
var inst_30527 = cljs.core.not.call(null,inst_30526);
var inst_30528 = (inst_30525) && (inst_30527);
var state_30548__$1 = state_30548;
var statearr_30598_30653 = state_30548__$1;
(statearr_30598_30653[(2)] = inst_30528);

(statearr_30598_30653[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30549 === (10))){
var inst_30450 = (state_30548[(8)]);
var inst_30471 = (state_30548[(2)]);
var inst_30472 = cljs.core.get.call(null,inst_30471,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30473 = cljs.core.get.call(null,inst_30471,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30474 = cljs.core.get.call(null,inst_30471,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30475 = inst_30450;
var state_30548__$1 = (function (){var statearr_30599 = state_30548;
(statearr_30599[(16)] = inst_30473);

(statearr_30599[(17)] = inst_30474);

(statearr_30599[(7)] = inst_30475);

(statearr_30599[(18)] = inst_30472);

return statearr_30599;
})();
var statearr_30600_30654 = state_30548__$1;
(statearr_30600_30654[(2)] = null);

(statearr_30600_30654[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30549 === (18))){
var inst_30490 = (state_30548[(2)]);
var state_30548__$1 = state_30548;
var statearr_30601_30655 = state_30548__$1;
(statearr_30601_30655[(2)] = inst_30490);

(statearr_30601_30655[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30549 === (37))){
var state_30548__$1 = state_30548;
var statearr_30602_30656 = state_30548__$1;
(statearr_30602_30656[(2)] = null);

(statearr_30602_30656[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30549 === (8))){
var inst_30450 = (state_30548[(8)]);
var inst_30468 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30450);
var state_30548__$1 = state_30548;
var statearr_30603_30657 = state_30548__$1;
(statearr_30603_30657[(2)] = inst_30468);

(statearr_30603_30657[(1)] = (10));


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
});})(c__28874__auto___30611,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27272__auto__,c__28874__auto___30611,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27273__auto__ = null;
var cljs$core$async$mix_$_state_machine__27273__auto____0 = (function (){
var statearr_30607 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30607[(0)] = cljs$core$async$mix_$_state_machine__27273__auto__);

(statearr_30607[(1)] = (1));

return statearr_30607;
});
var cljs$core$async$mix_$_state_machine__27273__auto____1 = (function (state_30548){
while(true){
var ret_value__27274__auto__ = (function (){try{while(true){
var result__27275__auto__ = switch__27272__auto__.call(null,state_30548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27275__auto__;
}
break;
}
}catch (e30608){if((e30608 instanceof Object)){
var ex__27276__auto__ = e30608;
var statearr_30609_30658 = state_30548;
(statearr_30609_30658[(5)] = ex__27276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30659 = state_30548;
state_30548 = G__30659;
continue;
} else {
return ret_value__27274__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27273__auto__ = function(state_30548){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27273__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27273__auto____1.call(this,state_30548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27273__auto____0;
cljs$core$async$mix_$_state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27273__auto____1;
return cljs$core$async$mix_$_state_machine__27273__auto__;
})()
;})(switch__27272__auto__,c__28874__auto___30611,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28876__auto__ = (function (){var statearr_30610 = f__28875__auto__.call(null);
(statearr_30610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28874__auto___30611);

return statearr_30610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28876__auto__);
});})(c__28874__auto___30611,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25884__auto__ = (((p == null))?null:p);
var m__25885__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25884__auto__)]);
if(!((m__25885__auto__ == null))){
return m__25885__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25885__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25885__auto____$1 == null))){
return m__25885__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25884__auto__ = (((p == null))?null:p);
var m__25885__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25884__auto__)]);
if(!((m__25885__auto__ == null))){
return m__25885__auto__.call(null,p,v,ch);
} else {
var m__25885__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25885__auto____$1 == null))){
return m__25885__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args30660 = [];
var len__26329__auto___30663 = arguments.length;
var i__26330__auto___30664 = (0);
while(true){
if((i__26330__auto___30664 < len__26329__auto___30663)){
args30660.push((arguments[i__26330__auto___30664]));

var G__30665 = (i__26330__auto___30664 + (1));
i__26330__auto___30664 = G__30665;
continue;
} else {
}
break;
}

var G__30662 = args30660.length;
switch (G__30662) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30660.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25884__auto__ = (((p == null))?null:p);
var m__25885__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25884__auto__)]);
if(!((m__25885__auto__ == null))){
return m__25885__auto__.call(null,p);
} else {
var m__25885__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25885__auto____$1 == null))){
return m__25885__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25884__auto__ = (((p == null))?null:p);
var m__25885__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25884__auto__)]);
if(!((m__25885__auto__ == null))){
return m__25885__auto__.call(null,p,v);
} else {
var m__25885__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25885__auto____$1 == null))){
return m__25885__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args30668 = [];
var len__26329__auto___30793 = arguments.length;
var i__26330__auto___30794 = (0);
while(true){
if((i__26330__auto___30794 < len__26329__auto___30793)){
args30668.push((arguments[i__26330__auto___30794]));

var G__30795 = (i__26330__auto___30794 + (1));
i__26330__auto___30794 = G__30795;
continue;
} else {
}
break;
}

var G__30670 = args30668.length;
switch (G__30670) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30668.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__25216__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__25216__auto__)){
return or__25216__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__25216__auto__,mults){
return (function (p1__30667_SHARP_){
if(cljs.core.truth_(p1__30667_SHARP_.call(null,topic))){
return p1__30667_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30667_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25216__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async30671 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30671 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30672){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30672 = meta30672;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30673,meta30672__$1){
var self__ = this;
var _30673__$1 = this;
return (new cljs.core.async.t_cljs$core$async30671(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30672__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30671.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30673){
var self__ = this;
var _30673__$1 = this;
return self__.meta30672;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30671.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30671.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30671.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30671.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30671.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30671.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30671.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30671.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30672","meta30672",409200583,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30671.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30671.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30671";

cljs.core.async.t_cljs$core$async30671.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25827__auto__,writer__25828__auto__,opt__25829__auto__){
return cljs.core._write.call(null,writer__25828__auto__,"cljs.core.async/t_cljs$core$async30671");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async30671 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30671(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30672){
return (new cljs.core.async.t_cljs$core$async30671(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30672));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30671(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28874__auto___30797 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28874__auto___30797,mults,ensure_mult,p){
return (function (){
var f__28875__auto__ = (function (){var switch__27272__auto__ = ((function (c__28874__auto___30797,mults,ensure_mult,p){
return (function (state_30745){
var state_val_30746 = (state_30745[(1)]);
if((state_val_30746 === (7))){
var inst_30741 = (state_30745[(2)]);
var state_30745__$1 = state_30745;
var statearr_30747_30798 = state_30745__$1;
(statearr_30747_30798[(2)] = inst_30741);

(statearr_30747_30798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (20))){
var state_30745__$1 = state_30745;
var statearr_30748_30799 = state_30745__$1;
(statearr_30748_30799[(2)] = null);

(statearr_30748_30799[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (1))){
var state_30745__$1 = state_30745;
var statearr_30749_30800 = state_30745__$1;
(statearr_30749_30800[(2)] = null);

(statearr_30749_30800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (24))){
var inst_30724 = (state_30745[(7)]);
var inst_30733 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30724);
var state_30745__$1 = state_30745;
var statearr_30750_30801 = state_30745__$1;
(statearr_30750_30801[(2)] = inst_30733);

(statearr_30750_30801[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (4))){
var inst_30676 = (state_30745[(8)]);
var inst_30676__$1 = (state_30745[(2)]);
var inst_30677 = (inst_30676__$1 == null);
var state_30745__$1 = (function (){var statearr_30751 = state_30745;
(statearr_30751[(8)] = inst_30676__$1);

return statearr_30751;
})();
if(cljs.core.truth_(inst_30677)){
var statearr_30752_30802 = state_30745__$1;
(statearr_30752_30802[(1)] = (5));

} else {
var statearr_30753_30803 = state_30745__$1;
(statearr_30753_30803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (15))){
var inst_30718 = (state_30745[(2)]);
var state_30745__$1 = state_30745;
var statearr_30754_30804 = state_30745__$1;
(statearr_30754_30804[(2)] = inst_30718);

(statearr_30754_30804[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (21))){
var inst_30738 = (state_30745[(2)]);
var state_30745__$1 = (function (){var statearr_30755 = state_30745;
(statearr_30755[(9)] = inst_30738);

return statearr_30755;
})();
var statearr_30756_30805 = state_30745__$1;
(statearr_30756_30805[(2)] = null);

(statearr_30756_30805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (13))){
var inst_30700 = (state_30745[(10)]);
var inst_30702 = cljs.core.chunked_seq_QMARK_.call(null,inst_30700);
var state_30745__$1 = state_30745;
if(inst_30702){
var statearr_30757_30806 = state_30745__$1;
(statearr_30757_30806[(1)] = (16));

} else {
var statearr_30758_30807 = state_30745__$1;
(statearr_30758_30807[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (22))){
var inst_30730 = (state_30745[(2)]);
var state_30745__$1 = state_30745;
if(cljs.core.truth_(inst_30730)){
var statearr_30759_30808 = state_30745__$1;
(statearr_30759_30808[(1)] = (23));

} else {
var statearr_30760_30809 = state_30745__$1;
(statearr_30760_30809[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (6))){
var inst_30726 = (state_30745[(11)]);
var inst_30676 = (state_30745[(8)]);
var inst_30724 = (state_30745[(7)]);
var inst_30724__$1 = topic_fn.call(null,inst_30676);
var inst_30725 = cljs.core.deref.call(null,mults);
var inst_30726__$1 = cljs.core.get.call(null,inst_30725,inst_30724__$1);
var state_30745__$1 = (function (){var statearr_30761 = state_30745;
(statearr_30761[(11)] = inst_30726__$1);

(statearr_30761[(7)] = inst_30724__$1);

return statearr_30761;
})();
if(cljs.core.truth_(inst_30726__$1)){
var statearr_30762_30810 = state_30745__$1;
(statearr_30762_30810[(1)] = (19));

} else {
var statearr_30763_30811 = state_30745__$1;
(statearr_30763_30811[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (25))){
var inst_30735 = (state_30745[(2)]);
var state_30745__$1 = state_30745;
var statearr_30764_30812 = state_30745__$1;
(statearr_30764_30812[(2)] = inst_30735);

(statearr_30764_30812[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (17))){
var inst_30700 = (state_30745[(10)]);
var inst_30709 = cljs.core.first.call(null,inst_30700);
var inst_30710 = cljs.core.async.muxch_STAR_.call(null,inst_30709);
var inst_30711 = cljs.core.async.close_BANG_.call(null,inst_30710);
var inst_30712 = cljs.core.next.call(null,inst_30700);
var inst_30686 = inst_30712;
var inst_30687 = null;
var inst_30688 = (0);
var inst_30689 = (0);
var state_30745__$1 = (function (){var statearr_30765 = state_30745;
(statearr_30765[(12)] = inst_30688);

(statearr_30765[(13)] = inst_30711);

(statearr_30765[(14)] = inst_30687);

(statearr_30765[(15)] = inst_30689);

(statearr_30765[(16)] = inst_30686);

return statearr_30765;
})();
var statearr_30766_30813 = state_30745__$1;
(statearr_30766_30813[(2)] = null);

(statearr_30766_30813[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (3))){
var inst_30743 = (state_30745[(2)]);
var state_30745__$1 = state_30745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30745__$1,inst_30743);
} else {
if((state_val_30746 === (12))){
var inst_30720 = (state_30745[(2)]);
var state_30745__$1 = state_30745;
var statearr_30767_30814 = state_30745__$1;
(statearr_30767_30814[(2)] = inst_30720);

(statearr_30767_30814[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (2))){
var state_30745__$1 = state_30745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30745__$1,(4),ch);
} else {
if((state_val_30746 === (23))){
var state_30745__$1 = state_30745;
var statearr_30768_30815 = state_30745__$1;
(statearr_30768_30815[(2)] = null);

(statearr_30768_30815[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (19))){
var inst_30726 = (state_30745[(11)]);
var inst_30676 = (state_30745[(8)]);
var inst_30728 = cljs.core.async.muxch_STAR_.call(null,inst_30726);
var state_30745__$1 = state_30745;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30745__$1,(22),inst_30728,inst_30676);
} else {
if((state_val_30746 === (11))){
var inst_30700 = (state_30745[(10)]);
var inst_30686 = (state_30745[(16)]);
var inst_30700__$1 = cljs.core.seq.call(null,inst_30686);
var state_30745__$1 = (function (){var statearr_30769 = state_30745;
(statearr_30769[(10)] = inst_30700__$1);

return statearr_30769;
})();
if(inst_30700__$1){
var statearr_30770_30816 = state_30745__$1;
(statearr_30770_30816[(1)] = (13));

} else {
var statearr_30771_30817 = state_30745__$1;
(statearr_30771_30817[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (9))){
var inst_30722 = (state_30745[(2)]);
var state_30745__$1 = state_30745;
var statearr_30772_30818 = state_30745__$1;
(statearr_30772_30818[(2)] = inst_30722);

(statearr_30772_30818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (5))){
var inst_30683 = cljs.core.deref.call(null,mults);
var inst_30684 = cljs.core.vals.call(null,inst_30683);
var inst_30685 = cljs.core.seq.call(null,inst_30684);
var inst_30686 = inst_30685;
var inst_30687 = null;
var inst_30688 = (0);
var inst_30689 = (0);
var state_30745__$1 = (function (){var statearr_30773 = state_30745;
(statearr_30773[(12)] = inst_30688);

(statearr_30773[(14)] = inst_30687);

(statearr_30773[(15)] = inst_30689);

(statearr_30773[(16)] = inst_30686);

return statearr_30773;
})();
var statearr_30774_30819 = state_30745__$1;
(statearr_30774_30819[(2)] = null);

(statearr_30774_30819[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (14))){
var state_30745__$1 = state_30745;
var statearr_30778_30820 = state_30745__$1;
(statearr_30778_30820[(2)] = null);

(statearr_30778_30820[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (16))){
var inst_30700 = (state_30745[(10)]);
var inst_30704 = cljs.core.chunk_first.call(null,inst_30700);
var inst_30705 = cljs.core.chunk_rest.call(null,inst_30700);
var inst_30706 = cljs.core.count.call(null,inst_30704);
var inst_30686 = inst_30705;
var inst_30687 = inst_30704;
var inst_30688 = inst_30706;
var inst_30689 = (0);
var state_30745__$1 = (function (){var statearr_30779 = state_30745;
(statearr_30779[(12)] = inst_30688);

(statearr_30779[(14)] = inst_30687);

(statearr_30779[(15)] = inst_30689);

(statearr_30779[(16)] = inst_30686);

return statearr_30779;
})();
var statearr_30780_30821 = state_30745__$1;
(statearr_30780_30821[(2)] = null);

(statearr_30780_30821[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (10))){
var inst_30688 = (state_30745[(12)]);
var inst_30687 = (state_30745[(14)]);
var inst_30689 = (state_30745[(15)]);
var inst_30686 = (state_30745[(16)]);
var inst_30694 = cljs.core._nth.call(null,inst_30687,inst_30689);
var inst_30695 = cljs.core.async.muxch_STAR_.call(null,inst_30694);
var inst_30696 = cljs.core.async.close_BANG_.call(null,inst_30695);
var inst_30697 = (inst_30689 + (1));
var tmp30775 = inst_30688;
var tmp30776 = inst_30687;
var tmp30777 = inst_30686;
var inst_30686__$1 = tmp30777;
var inst_30687__$1 = tmp30776;
var inst_30688__$1 = tmp30775;
var inst_30689__$1 = inst_30697;
var state_30745__$1 = (function (){var statearr_30781 = state_30745;
(statearr_30781[(12)] = inst_30688__$1);

(statearr_30781[(14)] = inst_30687__$1);

(statearr_30781[(15)] = inst_30689__$1);

(statearr_30781[(17)] = inst_30696);

(statearr_30781[(16)] = inst_30686__$1);

return statearr_30781;
})();
var statearr_30782_30822 = state_30745__$1;
(statearr_30782_30822[(2)] = null);

(statearr_30782_30822[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (18))){
var inst_30715 = (state_30745[(2)]);
var state_30745__$1 = state_30745;
var statearr_30783_30823 = state_30745__$1;
(statearr_30783_30823[(2)] = inst_30715);

(statearr_30783_30823[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (8))){
var inst_30688 = (state_30745[(12)]);
var inst_30689 = (state_30745[(15)]);
var inst_30691 = (inst_30689 < inst_30688);
var inst_30692 = inst_30691;
var state_30745__$1 = state_30745;
if(cljs.core.truth_(inst_30692)){
var statearr_30784_30824 = state_30745__$1;
(statearr_30784_30824[(1)] = (10));

} else {
var statearr_30785_30825 = state_30745__$1;
(statearr_30785_30825[(1)] = (11));

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
});})(c__28874__auto___30797,mults,ensure_mult,p))
;
return ((function (switch__27272__auto__,c__28874__auto___30797,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27273__auto__ = null;
var cljs$core$async$state_machine__27273__auto____0 = (function (){
var statearr_30789 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30789[(0)] = cljs$core$async$state_machine__27273__auto__);

(statearr_30789[(1)] = (1));

return statearr_30789;
});
var cljs$core$async$state_machine__27273__auto____1 = (function (state_30745){
while(true){
var ret_value__27274__auto__ = (function (){try{while(true){
var result__27275__auto__ = switch__27272__auto__.call(null,state_30745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27275__auto__;
}
break;
}
}catch (e30790){if((e30790 instanceof Object)){
var ex__27276__auto__ = e30790;
var statearr_30791_30826 = state_30745;
(statearr_30791_30826[(5)] = ex__27276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30790;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30827 = state_30745;
state_30745 = G__30827;
continue;
} else {
return ret_value__27274__auto__;
}
break;
}
});
cljs$core$async$state_machine__27273__auto__ = function(state_30745){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27273__auto____1.call(this,state_30745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27273__auto____0;
cljs$core$async$state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27273__auto____1;
return cljs$core$async$state_machine__27273__auto__;
})()
;})(switch__27272__auto__,c__28874__auto___30797,mults,ensure_mult,p))
})();
var state__28876__auto__ = (function (){var statearr_30792 = f__28875__auto__.call(null);
(statearr_30792[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28874__auto___30797);

return statearr_30792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28876__auto__);
});})(c__28874__auto___30797,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args30828 = [];
var len__26329__auto___30831 = arguments.length;
var i__26330__auto___30832 = (0);
while(true){
if((i__26330__auto___30832 < len__26329__auto___30831)){
args30828.push((arguments[i__26330__auto___30832]));

var G__30833 = (i__26330__auto___30832 + (1));
i__26330__auto___30832 = G__30833;
continue;
} else {
}
break;
}

var G__30830 = args30828.length;
switch (G__30830) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30828.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args30835 = [];
var len__26329__auto___30838 = arguments.length;
var i__26330__auto___30839 = (0);
while(true){
if((i__26330__auto___30839 < len__26329__auto___30838)){
args30835.push((arguments[i__26330__auto___30839]));

var G__30840 = (i__26330__auto___30839 + (1));
i__26330__auto___30839 = G__30840;
continue;
} else {
}
break;
}

var G__30837 = args30835.length;
switch (G__30837) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30835.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args30842 = [];
var len__26329__auto___30913 = arguments.length;
var i__26330__auto___30914 = (0);
while(true){
if((i__26330__auto___30914 < len__26329__auto___30913)){
args30842.push((arguments[i__26330__auto___30914]));

var G__30915 = (i__26330__auto___30914 + (1));
i__26330__auto___30914 = G__30915;
continue;
} else {
}
break;
}

var G__30844 = args30842.length;
switch (G__30844) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30842.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__28874__auto___30917 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28874__auto___30917,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28875__auto__ = (function (){var switch__27272__auto__ = ((function (c__28874__auto___30917,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30883){
var state_val_30884 = (state_30883[(1)]);
if((state_val_30884 === (7))){
var state_30883__$1 = state_30883;
var statearr_30885_30918 = state_30883__$1;
(statearr_30885_30918[(2)] = null);

(statearr_30885_30918[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30884 === (1))){
var state_30883__$1 = state_30883;
var statearr_30886_30919 = state_30883__$1;
(statearr_30886_30919[(2)] = null);

(statearr_30886_30919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30884 === (4))){
var inst_30847 = (state_30883[(7)]);
var inst_30849 = (inst_30847 < cnt);
var state_30883__$1 = state_30883;
if(cljs.core.truth_(inst_30849)){
var statearr_30887_30920 = state_30883__$1;
(statearr_30887_30920[(1)] = (6));

} else {
var statearr_30888_30921 = state_30883__$1;
(statearr_30888_30921[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30884 === (15))){
var inst_30879 = (state_30883[(2)]);
var state_30883__$1 = state_30883;
var statearr_30889_30922 = state_30883__$1;
(statearr_30889_30922[(2)] = inst_30879);

(statearr_30889_30922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30884 === (13))){
var inst_30872 = cljs.core.async.close_BANG_.call(null,out);
var state_30883__$1 = state_30883;
var statearr_30890_30923 = state_30883__$1;
(statearr_30890_30923[(2)] = inst_30872);

(statearr_30890_30923[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30884 === (6))){
var state_30883__$1 = state_30883;
var statearr_30891_30924 = state_30883__$1;
(statearr_30891_30924[(2)] = null);

(statearr_30891_30924[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30884 === (3))){
var inst_30881 = (state_30883[(2)]);
var state_30883__$1 = state_30883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30883__$1,inst_30881);
} else {
if((state_val_30884 === (12))){
var inst_30869 = (state_30883[(8)]);
var inst_30869__$1 = (state_30883[(2)]);
var inst_30870 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30869__$1);
var state_30883__$1 = (function (){var statearr_30892 = state_30883;
(statearr_30892[(8)] = inst_30869__$1);

return statearr_30892;
})();
if(cljs.core.truth_(inst_30870)){
var statearr_30893_30925 = state_30883__$1;
(statearr_30893_30925[(1)] = (13));

} else {
var statearr_30894_30926 = state_30883__$1;
(statearr_30894_30926[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30884 === (2))){
var inst_30846 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30847 = (0);
var state_30883__$1 = (function (){var statearr_30895 = state_30883;
(statearr_30895[(9)] = inst_30846);

(statearr_30895[(7)] = inst_30847);

return statearr_30895;
})();
var statearr_30896_30927 = state_30883__$1;
(statearr_30896_30927[(2)] = null);

(statearr_30896_30927[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30884 === (11))){
var inst_30847 = (state_30883[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30883,(10),Object,null,(9));
var inst_30856 = chs__$1.call(null,inst_30847);
var inst_30857 = done.call(null,inst_30847);
var inst_30858 = cljs.core.async.take_BANG_.call(null,inst_30856,inst_30857);
var state_30883__$1 = state_30883;
var statearr_30897_30928 = state_30883__$1;
(statearr_30897_30928[(2)] = inst_30858);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30883__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30884 === (9))){
var inst_30847 = (state_30883[(7)]);
var inst_30860 = (state_30883[(2)]);
var inst_30861 = (inst_30847 + (1));
var inst_30847__$1 = inst_30861;
var state_30883__$1 = (function (){var statearr_30898 = state_30883;
(statearr_30898[(10)] = inst_30860);

(statearr_30898[(7)] = inst_30847__$1);

return statearr_30898;
})();
var statearr_30899_30929 = state_30883__$1;
(statearr_30899_30929[(2)] = null);

(statearr_30899_30929[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30884 === (5))){
var inst_30867 = (state_30883[(2)]);
var state_30883__$1 = (function (){var statearr_30900 = state_30883;
(statearr_30900[(11)] = inst_30867);

return statearr_30900;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30883__$1,(12),dchan);
} else {
if((state_val_30884 === (14))){
var inst_30869 = (state_30883[(8)]);
var inst_30874 = cljs.core.apply.call(null,f,inst_30869);
var state_30883__$1 = state_30883;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30883__$1,(16),out,inst_30874);
} else {
if((state_val_30884 === (16))){
var inst_30876 = (state_30883[(2)]);
var state_30883__$1 = (function (){var statearr_30901 = state_30883;
(statearr_30901[(12)] = inst_30876);

return statearr_30901;
})();
var statearr_30902_30930 = state_30883__$1;
(statearr_30902_30930[(2)] = null);

(statearr_30902_30930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30884 === (10))){
var inst_30851 = (state_30883[(2)]);
var inst_30852 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30883__$1 = (function (){var statearr_30903 = state_30883;
(statearr_30903[(13)] = inst_30851);

return statearr_30903;
})();
var statearr_30904_30931 = state_30883__$1;
(statearr_30904_30931[(2)] = inst_30852);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30883__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30884 === (8))){
var inst_30865 = (state_30883[(2)]);
var state_30883__$1 = state_30883;
var statearr_30905_30932 = state_30883__$1;
(statearr_30905_30932[(2)] = inst_30865);

(statearr_30905_30932[(1)] = (5));


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
});})(c__28874__auto___30917,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27272__auto__,c__28874__auto___30917,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27273__auto__ = null;
var cljs$core$async$state_machine__27273__auto____0 = (function (){
var statearr_30909 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30909[(0)] = cljs$core$async$state_machine__27273__auto__);

(statearr_30909[(1)] = (1));

return statearr_30909;
});
var cljs$core$async$state_machine__27273__auto____1 = (function (state_30883){
while(true){
var ret_value__27274__auto__ = (function (){try{while(true){
var result__27275__auto__ = switch__27272__auto__.call(null,state_30883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27275__auto__;
}
break;
}
}catch (e30910){if((e30910 instanceof Object)){
var ex__27276__auto__ = e30910;
var statearr_30911_30933 = state_30883;
(statearr_30911_30933[(5)] = ex__27276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30934 = state_30883;
state_30883 = G__30934;
continue;
} else {
return ret_value__27274__auto__;
}
break;
}
});
cljs$core$async$state_machine__27273__auto__ = function(state_30883){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27273__auto____1.call(this,state_30883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27273__auto____0;
cljs$core$async$state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27273__auto____1;
return cljs$core$async$state_machine__27273__auto__;
})()
;})(switch__27272__auto__,c__28874__auto___30917,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28876__auto__ = (function (){var statearr_30912 = f__28875__auto__.call(null);
(statearr_30912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28874__auto___30917);

return statearr_30912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28876__auto__);
});})(c__28874__auto___30917,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args30936 = [];
var len__26329__auto___30994 = arguments.length;
var i__26330__auto___30995 = (0);
while(true){
if((i__26330__auto___30995 < len__26329__auto___30994)){
args30936.push((arguments[i__26330__auto___30995]));

var G__30996 = (i__26330__auto___30995 + (1));
i__26330__auto___30995 = G__30996;
continue;
} else {
}
break;
}

var G__30938 = args30936.length;
switch (G__30938) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30936.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28874__auto___30998 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28874__auto___30998,out){
return (function (){
var f__28875__auto__ = (function (){var switch__27272__auto__ = ((function (c__28874__auto___30998,out){
return (function (state_30970){
var state_val_30971 = (state_30970[(1)]);
if((state_val_30971 === (7))){
var inst_30950 = (state_30970[(7)]);
var inst_30949 = (state_30970[(8)]);
var inst_30949__$1 = (state_30970[(2)]);
var inst_30950__$1 = cljs.core.nth.call(null,inst_30949__$1,(0),null);
var inst_30951 = cljs.core.nth.call(null,inst_30949__$1,(1),null);
var inst_30952 = (inst_30950__$1 == null);
var state_30970__$1 = (function (){var statearr_30972 = state_30970;
(statearr_30972[(7)] = inst_30950__$1);

(statearr_30972[(9)] = inst_30951);

(statearr_30972[(8)] = inst_30949__$1);

return statearr_30972;
})();
if(cljs.core.truth_(inst_30952)){
var statearr_30973_30999 = state_30970__$1;
(statearr_30973_30999[(1)] = (8));

} else {
var statearr_30974_31000 = state_30970__$1;
(statearr_30974_31000[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30971 === (1))){
var inst_30939 = cljs.core.vec.call(null,chs);
var inst_30940 = inst_30939;
var state_30970__$1 = (function (){var statearr_30975 = state_30970;
(statearr_30975[(10)] = inst_30940);

return statearr_30975;
})();
var statearr_30976_31001 = state_30970__$1;
(statearr_30976_31001[(2)] = null);

(statearr_30976_31001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30971 === (4))){
var inst_30940 = (state_30970[(10)]);
var state_30970__$1 = state_30970;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30970__$1,(7),inst_30940);
} else {
if((state_val_30971 === (6))){
var inst_30966 = (state_30970[(2)]);
var state_30970__$1 = state_30970;
var statearr_30977_31002 = state_30970__$1;
(statearr_30977_31002[(2)] = inst_30966);

(statearr_30977_31002[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30971 === (3))){
var inst_30968 = (state_30970[(2)]);
var state_30970__$1 = state_30970;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30970__$1,inst_30968);
} else {
if((state_val_30971 === (2))){
var inst_30940 = (state_30970[(10)]);
var inst_30942 = cljs.core.count.call(null,inst_30940);
var inst_30943 = (inst_30942 > (0));
var state_30970__$1 = state_30970;
if(cljs.core.truth_(inst_30943)){
var statearr_30979_31003 = state_30970__$1;
(statearr_30979_31003[(1)] = (4));

} else {
var statearr_30980_31004 = state_30970__$1;
(statearr_30980_31004[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30971 === (11))){
var inst_30940 = (state_30970[(10)]);
var inst_30959 = (state_30970[(2)]);
var tmp30978 = inst_30940;
var inst_30940__$1 = tmp30978;
var state_30970__$1 = (function (){var statearr_30981 = state_30970;
(statearr_30981[(10)] = inst_30940__$1);

(statearr_30981[(11)] = inst_30959);

return statearr_30981;
})();
var statearr_30982_31005 = state_30970__$1;
(statearr_30982_31005[(2)] = null);

(statearr_30982_31005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30971 === (9))){
var inst_30950 = (state_30970[(7)]);
var state_30970__$1 = state_30970;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30970__$1,(11),out,inst_30950);
} else {
if((state_val_30971 === (5))){
var inst_30964 = cljs.core.async.close_BANG_.call(null,out);
var state_30970__$1 = state_30970;
var statearr_30983_31006 = state_30970__$1;
(statearr_30983_31006[(2)] = inst_30964);

(statearr_30983_31006[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30971 === (10))){
var inst_30962 = (state_30970[(2)]);
var state_30970__$1 = state_30970;
var statearr_30984_31007 = state_30970__$1;
(statearr_30984_31007[(2)] = inst_30962);

(statearr_30984_31007[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30971 === (8))){
var inst_30950 = (state_30970[(7)]);
var inst_30951 = (state_30970[(9)]);
var inst_30940 = (state_30970[(10)]);
var inst_30949 = (state_30970[(8)]);
var inst_30954 = (function (){var cs = inst_30940;
var vec__30945 = inst_30949;
var v = inst_30950;
var c = inst_30951;
return ((function (cs,vec__30945,v,c,inst_30950,inst_30951,inst_30940,inst_30949,state_val_30971,c__28874__auto___30998,out){
return (function (p1__30935_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30935_SHARP_);
});
;})(cs,vec__30945,v,c,inst_30950,inst_30951,inst_30940,inst_30949,state_val_30971,c__28874__auto___30998,out))
})();
var inst_30955 = cljs.core.filterv.call(null,inst_30954,inst_30940);
var inst_30940__$1 = inst_30955;
var state_30970__$1 = (function (){var statearr_30985 = state_30970;
(statearr_30985[(10)] = inst_30940__$1);

return statearr_30985;
})();
var statearr_30986_31008 = state_30970__$1;
(statearr_30986_31008[(2)] = null);

(statearr_30986_31008[(1)] = (2));


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
});})(c__28874__auto___30998,out))
;
return ((function (switch__27272__auto__,c__28874__auto___30998,out){
return (function() {
var cljs$core$async$state_machine__27273__auto__ = null;
var cljs$core$async$state_machine__27273__auto____0 = (function (){
var statearr_30990 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30990[(0)] = cljs$core$async$state_machine__27273__auto__);

(statearr_30990[(1)] = (1));

return statearr_30990;
});
var cljs$core$async$state_machine__27273__auto____1 = (function (state_30970){
while(true){
var ret_value__27274__auto__ = (function (){try{while(true){
var result__27275__auto__ = switch__27272__auto__.call(null,state_30970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27275__auto__;
}
break;
}
}catch (e30991){if((e30991 instanceof Object)){
var ex__27276__auto__ = e30991;
var statearr_30992_31009 = state_30970;
(statearr_30992_31009[(5)] = ex__27276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31010 = state_30970;
state_30970 = G__31010;
continue;
} else {
return ret_value__27274__auto__;
}
break;
}
});
cljs$core$async$state_machine__27273__auto__ = function(state_30970){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27273__auto____1.call(this,state_30970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27273__auto____0;
cljs$core$async$state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27273__auto____1;
return cljs$core$async$state_machine__27273__auto__;
})()
;})(switch__27272__auto__,c__28874__auto___30998,out))
})();
var state__28876__auto__ = (function (){var statearr_30993 = f__28875__auto__.call(null);
(statearr_30993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28874__auto___30998);

return statearr_30993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28876__auto__);
});})(c__28874__auto___30998,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args31011 = [];
var len__26329__auto___31060 = arguments.length;
var i__26330__auto___31061 = (0);
while(true){
if((i__26330__auto___31061 < len__26329__auto___31060)){
args31011.push((arguments[i__26330__auto___31061]));

var G__31062 = (i__26330__auto___31061 + (1));
i__26330__auto___31061 = G__31062;
continue;
} else {
}
break;
}

var G__31013 = args31011.length;
switch (G__31013) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31011.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28874__auto___31064 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28874__auto___31064,out){
return (function (){
var f__28875__auto__ = (function (){var switch__27272__auto__ = ((function (c__28874__auto___31064,out){
return (function (state_31037){
var state_val_31038 = (state_31037[(1)]);
if((state_val_31038 === (7))){
var inst_31019 = (state_31037[(7)]);
var inst_31019__$1 = (state_31037[(2)]);
var inst_31020 = (inst_31019__$1 == null);
var inst_31021 = cljs.core.not.call(null,inst_31020);
var state_31037__$1 = (function (){var statearr_31039 = state_31037;
(statearr_31039[(7)] = inst_31019__$1);

return statearr_31039;
})();
if(inst_31021){
var statearr_31040_31065 = state_31037__$1;
(statearr_31040_31065[(1)] = (8));

} else {
var statearr_31041_31066 = state_31037__$1;
(statearr_31041_31066[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31038 === (1))){
var inst_31014 = (0);
var state_31037__$1 = (function (){var statearr_31042 = state_31037;
(statearr_31042[(8)] = inst_31014);

return statearr_31042;
})();
var statearr_31043_31067 = state_31037__$1;
(statearr_31043_31067[(2)] = null);

(statearr_31043_31067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31038 === (4))){
var state_31037__$1 = state_31037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31037__$1,(7),ch);
} else {
if((state_val_31038 === (6))){
var inst_31032 = (state_31037[(2)]);
var state_31037__$1 = state_31037;
var statearr_31044_31068 = state_31037__$1;
(statearr_31044_31068[(2)] = inst_31032);

(statearr_31044_31068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31038 === (3))){
var inst_31034 = (state_31037[(2)]);
var inst_31035 = cljs.core.async.close_BANG_.call(null,out);
var state_31037__$1 = (function (){var statearr_31045 = state_31037;
(statearr_31045[(9)] = inst_31034);

return statearr_31045;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31037__$1,inst_31035);
} else {
if((state_val_31038 === (2))){
var inst_31014 = (state_31037[(8)]);
var inst_31016 = (inst_31014 < n);
var state_31037__$1 = state_31037;
if(cljs.core.truth_(inst_31016)){
var statearr_31046_31069 = state_31037__$1;
(statearr_31046_31069[(1)] = (4));

} else {
var statearr_31047_31070 = state_31037__$1;
(statearr_31047_31070[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31038 === (11))){
var inst_31014 = (state_31037[(8)]);
var inst_31024 = (state_31037[(2)]);
var inst_31025 = (inst_31014 + (1));
var inst_31014__$1 = inst_31025;
var state_31037__$1 = (function (){var statearr_31048 = state_31037;
(statearr_31048[(10)] = inst_31024);

(statearr_31048[(8)] = inst_31014__$1);

return statearr_31048;
})();
var statearr_31049_31071 = state_31037__$1;
(statearr_31049_31071[(2)] = null);

(statearr_31049_31071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31038 === (9))){
var state_31037__$1 = state_31037;
var statearr_31050_31072 = state_31037__$1;
(statearr_31050_31072[(2)] = null);

(statearr_31050_31072[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31038 === (5))){
var state_31037__$1 = state_31037;
var statearr_31051_31073 = state_31037__$1;
(statearr_31051_31073[(2)] = null);

(statearr_31051_31073[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31038 === (10))){
var inst_31029 = (state_31037[(2)]);
var state_31037__$1 = state_31037;
var statearr_31052_31074 = state_31037__$1;
(statearr_31052_31074[(2)] = inst_31029);

(statearr_31052_31074[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31038 === (8))){
var inst_31019 = (state_31037[(7)]);
var state_31037__$1 = state_31037;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31037__$1,(11),out,inst_31019);
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
});})(c__28874__auto___31064,out))
;
return ((function (switch__27272__auto__,c__28874__auto___31064,out){
return (function() {
var cljs$core$async$state_machine__27273__auto__ = null;
var cljs$core$async$state_machine__27273__auto____0 = (function (){
var statearr_31056 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31056[(0)] = cljs$core$async$state_machine__27273__auto__);

(statearr_31056[(1)] = (1));

return statearr_31056;
});
var cljs$core$async$state_machine__27273__auto____1 = (function (state_31037){
while(true){
var ret_value__27274__auto__ = (function (){try{while(true){
var result__27275__auto__ = switch__27272__auto__.call(null,state_31037);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27275__auto__;
}
break;
}
}catch (e31057){if((e31057 instanceof Object)){
var ex__27276__auto__ = e31057;
var statearr_31058_31075 = state_31037;
(statearr_31058_31075[(5)] = ex__27276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31076 = state_31037;
state_31037 = G__31076;
continue;
} else {
return ret_value__27274__auto__;
}
break;
}
});
cljs$core$async$state_machine__27273__auto__ = function(state_31037){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27273__auto____1.call(this,state_31037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27273__auto____0;
cljs$core$async$state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27273__auto____1;
return cljs$core$async$state_machine__27273__auto__;
})()
;})(switch__27272__auto__,c__28874__auto___31064,out))
})();
var state__28876__auto__ = (function (){var statearr_31059 = f__28875__auto__.call(null);
(statearr_31059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28874__auto___31064);

return statearr_31059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28876__auto__);
});})(c__28874__auto___31064,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31084 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31084 = (function (f,ch,meta31085){
this.f = f;
this.ch = ch;
this.meta31085 = meta31085;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31086,meta31085__$1){
var self__ = this;
var _31086__$1 = this;
return (new cljs.core.async.t_cljs$core$async31084(self__.f,self__.ch,meta31085__$1));
});

cljs.core.async.t_cljs$core$async31084.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31086){
var self__ = this;
var _31086__$1 = this;
return self__.meta31085;
});

cljs.core.async.t_cljs$core$async31084.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31084.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31084.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31084.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31084.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async31087 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31087 = (function (f,ch,meta31085,_,fn1,meta31088){
this.f = f;
this.ch = ch;
this.meta31085 = meta31085;
this._ = _;
this.fn1 = fn1;
this.meta31088 = meta31088;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31089,meta31088__$1){
var self__ = this;
var _31089__$1 = this;
return (new cljs.core.async.t_cljs$core$async31087(self__.f,self__.ch,self__.meta31085,self__._,self__.fn1,meta31088__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async31087.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31089){
var self__ = this;
var _31089__$1 = this;
return self__.meta31088;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31087.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31087.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31087.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31087.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31077_SHARP_){
return f1.call(null,(((p1__31077_SHARP_ == null))?null:self__.f.call(null,p1__31077_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async31087.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31085","meta31085",2016880450,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31084","cljs.core.async/t_cljs$core$async31084",593029376,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31088","meta31088",2107840756,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31087.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31087.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31087";

cljs.core.async.t_cljs$core$async31087.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25827__auto__,writer__25828__auto__,opt__25829__auto__){
return cljs.core._write.call(null,writer__25828__auto__,"cljs.core.async/t_cljs$core$async31087");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async31087 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31087(f__$1,ch__$1,meta31085__$1,___$2,fn1__$1,meta31088){
return (new cljs.core.async.t_cljs$core$async31087(f__$1,ch__$1,meta31085__$1,___$2,fn1__$1,meta31088));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async31087(self__.f,self__.ch,self__.meta31085,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__25204__auto__ = ret;
if(cljs.core.truth_(and__25204__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__25204__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async31084.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31084.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async31084.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31085","meta31085",2016880450,null)], null);
});

cljs.core.async.t_cljs$core$async31084.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31084.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31084";

cljs.core.async.t_cljs$core$async31084.cljs$lang$ctorPrWriter = (function (this__25827__auto__,writer__25828__auto__,opt__25829__auto__){
return cljs.core._write.call(null,writer__25828__auto__,"cljs.core.async/t_cljs$core$async31084");
});

cljs.core.async.__GT_t_cljs$core$async31084 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31084(f__$1,ch__$1,meta31085){
return (new cljs.core.async.t_cljs$core$async31084(f__$1,ch__$1,meta31085));
});

}

return (new cljs.core.async.t_cljs$core$async31084(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31093 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31093 = (function (f,ch,meta31094){
this.f = f;
this.ch = ch;
this.meta31094 = meta31094;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31095,meta31094__$1){
var self__ = this;
var _31095__$1 = this;
return (new cljs.core.async.t_cljs$core$async31093(self__.f,self__.ch,meta31094__$1));
});

cljs.core.async.t_cljs$core$async31093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31095){
var self__ = this;
var _31095__$1 = this;
return self__.meta31094;
});

cljs.core.async.t_cljs$core$async31093.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31093.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31093.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31093.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31093.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31093.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async31093.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31094","meta31094",-1183335085,null)], null);
});

cljs.core.async.t_cljs$core$async31093.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31093.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31093";

cljs.core.async.t_cljs$core$async31093.cljs$lang$ctorPrWriter = (function (this__25827__auto__,writer__25828__auto__,opt__25829__auto__){
return cljs.core._write.call(null,writer__25828__auto__,"cljs.core.async/t_cljs$core$async31093");
});

cljs.core.async.__GT_t_cljs$core$async31093 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31093(f__$1,ch__$1,meta31094){
return (new cljs.core.async.t_cljs$core$async31093(f__$1,ch__$1,meta31094));
});

}

return (new cljs.core.async.t_cljs$core$async31093(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async31099 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31099 = (function (p,ch,meta31100){
this.p = p;
this.ch = ch;
this.meta31100 = meta31100;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31101,meta31100__$1){
var self__ = this;
var _31101__$1 = this;
return (new cljs.core.async.t_cljs$core$async31099(self__.p,self__.ch,meta31100__$1));
});

cljs.core.async.t_cljs$core$async31099.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31101){
var self__ = this;
var _31101__$1 = this;
return self__.meta31100;
});

cljs.core.async.t_cljs$core$async31099.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31099.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31099.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31099.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31099.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31099.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31099.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async31099.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31100","meta31100",-12526132,null)], null);
});

cljs.core.async.t_cljs$core$async31099.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31099.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31099";

cljs.core.async.t_cljs$core$async31099.cljs$lang$ctorPrWriter = (function (this__25827__auto__,writer__25828__auto__,opt__25829__auto__){
return cljs.core._write.call(null,writer__25828__auto__,"cljs.core.async/t_cljs$core$async31099");
});

cljs.core.async.__GT_t_cljs$core$async31099 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31099(p__$1,ch__$1,meta31100){
return (new cljs.core.async.t_cljs$core$async31099(p__$1,ch__$1,meta31100));
});

}

return (new cljs.core.async.t_cljs$core$async31099(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args31102 = [];
var len__26329__auto___31146 = arguments.length;
var i__26330__auto___31147 = (0);
while(true){
if((i__26330__auto___31147 < len__26329__auto___31146)){
args31102.push((arguments[i__26330__auto___31147]));

var G__31148 = (i__26330__auto___31147 + (1));
i__26330__auto___31147 = G__31148;
continue;
} else {
}
break;
}

var G__31104 = args31102.length;
switch (G__31104) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31102.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28874__auto___31150 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28874__auto___31150,out){
return (function (){
var f__28875__auto__ = (function (){var switch__27272__auto__ = ((function (c__28874__auto___31150,out){
return (function (state_31125){
var state_val_31126 = (state_31125[(1)]);
if((state_val_31126 === (7))){
var inst_31121 = (state_31125[(2)]);
var state_31125__$1 = state_31125;
var statearr_31127_31151 = state_31125__$1;
(statearr_31127_31151[(2)] = inst_31121);

(statearr_31127_31151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31126 === (1))){
var state_31125__$1 = state_31125;
var statearr_31128_31152 = state_31125__$1;
(statearr_31128_31152[(2)] = null);

(statearr_31128_31152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31126 === (4))){
var inst_31107 = (state_31125[(7)]);
var inst_31107__$1 = (state_31125[(2)]);
var inst_31108 = (inst_31107__$1 == null);
var state_31125__$1 = (function (){var statearr_31129 = state_31125;
(statearr_31129[(7)] = inst_31107__$1);

return statearr_31129;
})();
if(cljs.core.truth_(inst_31108)){
var statearr_31130_31153 = state_31125__$1;
(statearr_31130_31153[(1)] = (5));

} else {
var statearr_31131_31154 = state_31125__$1;
(statearr_31131_31154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31126 === (6))){
var inst_31107 = (state_31125[(7)]);
var inst_31112 = p.call(null,inst_31107);
var state_31125__$1 = state_31125;
if(cljs.core.truth_(inst_31112)){
var statearr_31132_31155 = state_31125__$1;
(statearr_31132_31155[(1)] = (8));

} else {
var statearr_31133_31156 = state_31125__$1;
(statearr_31133_31156[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31126 === (3))){
var inst_31123 = (state_31125[(2)]);
var state_31125__$1 = state_31125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31125__$1,inst_31123);
} else {
if((state_val_31126 === (2))){
var state_31125__$1 = state_31125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31125__$1,(4),ch);
} else {
if((state_val_31126 === (11))){
var inst_31115 = (state_31125[(2)]);
var state_31125__$1 = state_31125;
var statearr_31134_31157 = state_31125__$1;
(statearr_31134_31157[(2)] = inst_31115);

(statearr_31134_31157[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31126 === (9))){
var state_31125__$1 = state_31125;
var statearr_31135_31158 = state_31125__$1;
(statearr_31135_31158[(2)] = null);

(statearr_31135_31158[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31126 === (5))){
var inst_31110 = cljs.core.async.close_BANG_.call(null,out);
var state_31125__$1 = state_31125;
var statearr_31136_31159 = state_31125__$1;
(statearr_31136_31159[(2)] = inst_31110);

(statearr_31136_31159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31126 === (10))){
var inst_31118 = (state_31125[(2)]);
var state_31125__$1 = (function (){var statearr_31137 = state_31125;
(statearr_31137[(8)] = inst_31118);

return statearr_31137;
})();
var statearr_31138_31160 = state_31125__$1;
(statearr_31138_31160[(2)] = null);

(statearr_31138_31160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31126 === (8))){
var inst_31107 = (state_31125[(7)]);
var state_31125__$1 = state_31125;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31125__$1,(11),out,inst_31107);
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
});})(c__28874__auto___31150,out))
;
return ((function (switch__27272__auto__,c__28874__auto___31150,out){
return (function() {
var cljs$core$async$state_machine__27273__auto__ = null;
var cljs$core$async$state_machine__27273__auto____0 = (function (){
var statearr_31142 = [null,null,null,null,null,null,null,null,null];
(statearr_31142[(0)] = cljs$core$async$state_machine__27273__auto__);

(statearr_31142[(1)] = (1));

return statearr_31142;
});
var cljs$core$async$state_machine__27273__auto____1 = (function (state_31125){
while(true){
var ret_value__27274__auto__ = (function (){try{while(true){
var result__27275__auto__ = switch__27272__auto__.call(null,state_31125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27275__auto__;
}
break;
}
}catch (e31143){if((e31143 instanceof Object)){
var ex__27276__auto__ = e31143;
var statearr_31144_31161 = state_31125;
(statearr_31144_31161[(5)] = ex__27276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31162 = state_31125;
state_31125 = G__31162;
continue;
} else {
return ret_value__27274__auto__;
}
break;
}
});
cljs$core$async$state_machine__27273__auto__ = function(state_31125){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27273__auto____1.call(this,state_31125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27273__auto____0;
cljs$core$async$state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27273__auto____1;
return cljs$core$async$state_machine__27273__auto__;
})()
;})(switch__27272__auto__,c__28874__auto___31150,out))
})();
var state__28876__auto__ = (function (){var statearr_31145 = f__28875__auto__.call(null);
(statearr_31145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28874__auto___31150);

return statearr_31145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28876__auto__);
});})(c__28874__auto___31150,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args31163 = [];
var len__26329__auto___31166 = arguments.length;
var i__26330__auto___31167 = (0);
while(true){
if((i__26330__auto___31167 < len__26329__auto___31166)){
args31163.push((arguments[i__26330__auto___31167]));

var G__31168 = (i__26330__auto___31167 + (1));
i__26330__auto___31167 = G__31168;
continue;
} else {
}
break;
}

var G__31165 = args31163.length;
switch (G__31165) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31163.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28874__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28874__auto__){
return (function (){
var f__28875__auto__ = (function (){var switch__27272__auto__ = ((function (c__28874__auto__){
return (function (state_31335){
var state_val_31336 = (state_31335[(1)]);
if((state_val_31336 === (7))){
var inst_31331 = (state_31335[(2)]);
var state_31335__$1 = state_31335;
var statearr_31337_31378 = state_31335__$1;
(statearr_31337_31378[(2)] = inst_31331);

(statearr_31337_31378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (20))){
var inst_31301 = (state_31335[(7)]);
var inst_31312 = (state_31335[(2)]);
var inst_31313 = cljs.core.next.call(null,inst_31301);
var inst_31287 = inst_31313;
var inst_31288 = null;
var inst_31289 = (0);
var inst_31290 = (0);
var state_31335__$1 = (function (){var statearr_31338 = state_31335;
(statearr_31338[(8)] = inst_31312);

(statearr_31338[(9)] = inst_31288);

(statearr_31338[(10)] = inst_31289);

(statearr_31338[(11)] = inst_31287);

(statearr_31338[(12)] = inst_31290);

return statearr_31338;
})();
var statearr_31339_31379 = state_31335__$1;
(statearr_31339_31379[(2)] = null);

(statearr_31339_31379[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (1))){
var state_31335__$1 = state_31335;
var statearr_31340_31380 = state_31335__$1;
(statearr_31340_31380[(2)] = null);

(statearr_31340_31380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (4))){
var inst_31276 = (state_31335[(13)]);
var inst_31276__$1 = (state_31335[(2)]);
var inst_31277 = (inst_31276__$1 == null);
var state_31335__$1 = (function (){var statearr_31341 = state_31335;
(statearr_31341[(13)] = inst_31276__$1);

return statearr_31341;
})();
if(cljs.core.truth_(inst_31277)){
var statearr_31342_31381 = state_31335__$1;
(statearr_31342_31381[(1)] = (5));

} else {
var statearr_31343_31382 = state_31335__$1;
(statearr_31343_31382[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (15))){
var state_31335__$1 = state_31335;
var statearr_31347_31383 = state_31335__$1;
(statearr_31347_31383[(2)] = null);

(statearr_31347_31383[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (21))){
var state_31335__$1 = state_31335;
var statearr_31348_31384 = state_31335__$1;
(statearr_31348_31384[(2)] = null);

(statearr_31348_31384[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (13))){
var inst_31288 = (state_31335[(9)]);
var inst_31289 = (state_31335[(10)]);
var inst_31287 = (state_31335[(11)]);
var inst_31290 = (state_31335[(12)]);
var inst_31297 = (state_31335[(2)]);
var inst_31298 = (inst_31290 + (1));
var tmp31344 = inst_31288;
var tmp31345 = inst_31289;
var tmp31346 = inst_31287;
var inst_31287__$1 = tmp31346;
var inst_31288__$1 = tmp31344;
var inst_31289__$1 = tmp31345;
var inst_31290__$1 = inst_31298;
var state_31335__$1 = (function (){var statearr_31349 = state_31335;
(statearr_31349[(9)] = inst_31288__$1);

(statearr_31349[(14)] = inst_31297);

(statearr_31349[(10)] = inst_31289__$1);

(statearr_31349[(11)] = inst_31287__$1);

(statearr_31349[(12)] = inst_31290__$1);

return statearr_31349;
})();
var statearr_31350_31385 = state_31335__$1;
(statearr_31350_31385[(2)] = null);

(statearr_31350_31385[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (22))){
var state_31335__$1 = state_31335;
var statearr_31351_31386 = state_31335__$1;
(statearr_31351_31386[(2)] = null);

(statearr_31351_31386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (6))){
var inst_31276 = (state_31335[(13)]);
var inst_31285 = f.call(null,inst_31276);
var inst_31286 = cljs.core.seq.call(null,inst_31285);
var inst_31287 = inst_31286;
var inst_31288 = null;
var inst_31289 = (0);
var inst_31290 = (0);
var state_31335__$1 = (function (){var statearr_31352 = state_31335;
(statearr_31352[(9)] = inst_31288);

(statearr_31352[(10)] = inst_31289);

(statearr_31352[(11)] = inst_31287);

(statearr_31352[(12)] = inst_31290);

return statearr_31352;
})();
var statearr_31353_31387 = state_31335__$1;
(statearr_31353_31387[(2)] = null);

(statearr_31353_31387[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (17))){
var inst_31301 = (state_31335[(7)]);
var inst_31305 = cljs.core.chunk_first.call(null,inst_31301);
var inst_31306 = cljs.core.chunk_rest.call(null,inst_31301);
var inst_31307 = cljs.core.count.call(null,inst_31305);
var inst_31287 = inst_31306;
var inst_31288 = inst_31305;
var inst_31289 = inst_31307;
var inst_31290 = (0);
var state_31335__$1 = (function (){var statearr_31354 = state_31335;
(statearr_31354[(9)] = inst_31288);

(statearr_31354[(10)] = inst_31289);

(statearr_31354[(11)] = inst_31287);

(statearr_31354[(12)] = inst_31290);

return statearr_31354;
})();
var statearr_31355_31388 = state_31335__$1;
(statearr_31355_31388[(2)] = null);

(statearr_31355_31388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (3))){
var inst_31333 = (state_31335[(2)]);
var state_31335__$1 = state_31335;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31335__$1,inst_31333);
} else {
if((state_val_31336 === (12))){
var inst_31321 = (state_31335[(2)]);
var state_31335__$1 = state_31335;
var statearr_31356_31389 = state_31335__$1;
(statearr_31356_31389[(2)] = inst_31321);

(statearr_31356_31389[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (2))){
var state_31335__$1 = state_31335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31335__$1,(4),in$);
} else {
if((state_val_31336 === (23))){
var inst_31329 = (state_31335[(2)]);
var state_31335__$1 = state_31335;
var statearr_31357_31390 = state_31335__$1;
(statearr_31357_31390[(2)] = inst_31329);

(statearr_31357_31390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (19))){
var inst_31316 = (state_31335[(2)]);
var state_31335__$1 = state_31335;
var statearr_31358_31391 = state_31335__$1;
(statearr_31358_31391[(2)] = inst_31316);

(statearr_31358_31391[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (11))){
var inst_31301 = (state_31335[(7)]);
var inst_31287 = (state_31335[(11)]);
var inst_31301__$1 = cljs.core.seq.call(null,inst_31287);
var state_31335__$1 = (function (){var statearr_31359 = state_31335;
(statearr_31359[(7)] = inst_31301__$1);

return statearr_31359;
})();
if(inst_31301__$1){
var statearr_31360_31392 = state_31335__$1;
(statearr_31360_31392[(1)] = (14));

} else {
var statearr_31361_31393 = state_31335__$1;
(statearr_31361_31393[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (9))){
var inst_31323 = (state_31335[(2)]);
var inst_31324 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31335__$1 = (function (){var statearr_31362 = state_31335;
(statearr_31362[(15)] = inst_31323);

return statearr_31362;
})();
if(cljs.core.truth_(inst_31324)){
var statearr_31363_31394 = state_31335__$1;
(statearr_31363_31394[(1)] = (21));

} else {
var statearr_31364_31395 = state_31335__$1;
(statearr_31364_31395[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (5))){
var inst_31279 = cljs.core.async.close_BANG_.call(null,out);
var state_31335__$1 = state_31335;
var statearr_31365_31396 = state_31335__$1;
(statearr_31365_31396[(2)] = inst_31279);

(statearr_31365_31396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (14))){
var inst_31301 = (state_31335[(7)]);
var inst_31303 = cljs.core.chunked_seq_QMARK_.call(null,inst_31301);
var state_31335__$1 = state_31335;
if(inst_31303){
var statearr_31366_31397 = state_31335__$1;
(statearr_31366_31397[(1)] = (17));

} else {
var statearr_31367_31398 = state_31335__$1;
(statearr_31367_31398[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (16))){
var inst_31319 = (state_31335[(2)]);
var state_31335__$1 = state_31335;
var statearr_31368_31399 = state_31335__$1;
(statearr_31368_31399[(2)] = inst_31319);

(statearr_31368_31399[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (10))){
var inst_31288 = (state_31335[(9)]);
var inst_31290 = (state_31335[(12)]);
var inst_31295 = cljs.core._nth.call(null,inst_31288,inst_31290);
var state_31335__$1 = state_31335;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31335__$1,(13),out,inst_31295);
} else {
if((state_val_31336 === (18))){
var inst_31301 = (state_31335[(7)]);
var inst_31310 = cljs.core.first.call(null,inst_31301);
var state_31335__$1 = state_31335;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31335__$1,(20),out,inst_31310);
} else {
if((state_val_31336 === (8))){
var inst_31289 = (state_31335[(10)]);
var inst_31290 = (state_31335[(12)]);
var inst_31292 = (inst_31290 < inst_31289);
var inst_31293 = inst_31292;
var state_31335__$1 = state_31335;
if(cljs.core.truth_(inst_31293)){
var statearr_31369_31400 = state_31335__$1;
(statearr_31369_31400[(1)] = (10));

} else {
var statearr_31370_31401 = state_31335__$1;
(statearr_31370_31401[(1)] = (11));

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
});})(c__28874__auto__))
;
return ((function (switch__27272__auto__,c__28874__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27273__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27273__auto____0 = (function (){
var statearr_31374 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31374[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27273__auto__);

(statearr_31374[(1)] = (1));

return statearr_31374;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27273__auto____1 = (function (state_31335){
while(true){
var ret_value__27274__auto__ = (function (){try{while(true){
var result__27275__auto__ = switch__27272__auto__.call(null,state_31335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27275__auto__;
}
break;
}
}catch (e31375){if((e31375 instanceof Object)){
var ex__27276__auto__ = e31375;
var statearr_31376_31402 = state_31335;
(statearr_31376_31402[(5)] = ex__27276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31375;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31403 = state_31335;
state_31335 = G__31403;
continue;
} else {
return ret_value__27274__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27273__auto__ = function(state_31335){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27273__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27273__auto____1.call(this,state_31335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27273__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27273__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27273__auto__;
})()
;})(switch__27272__auto__,c__28874__auto__))
})();
var state__28876__auto__ = (function (){var statearr_31377 = f__28875__auto__.call(null);
(statearr_31377[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28874__auto__);

return statearr_31377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28876__auto__);
});})(c__28874__auto__))
);

return c__28874__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args31404 = [];
var len__26329__auto___31407 = arguments.length;
var i__26330__auto___31408 = (0);
while(true){
if((i__26330__auto___31408 < len__26329__auto___31407)){
args31404.push((arguments[i__26330__auto___31408]));

var G__31409 = (i__26330__auto___31408 + (1));
i__26330__auto___31408 = G__31409;
continue;
} else {
}
break;
}

var G__31406 = args31404.length;
switch (G__31406) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31404.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args31411 = [];
var len__26329__auto___31414 = arguments.length;
var i__26330__auto___31415 = (0);
while(true){
if((i__26330__auto___31415 < len__26329__auto___31414)){
args31411.push((arguments[i__26330__auto___31415]));

var G__31416 = (i__26330__auto___31415 + (1));
i__26330__auto___31415 = G__31416;
continue;
} else {
}
break;
}

var G__31413 = args31411.length;
switch (G__31413) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31411.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args31418 = [];
var len__26329__auto___31469 = arguments.length;
var i__26330__auto___31470 = (0);
while(true){
if((i__26330__auto___31470 < len__26329__auto___31469)){
args31418.push((arguments[i__26330__auto___31470]));

var G__31471 = (i__26330__auto___31470 + (1));
i__26330__auto___31470 = G__31471;
continue;
} else {
}
break;
}

var G__31420 = args31418.length;
switch (G__31420) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31418.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28874__auto___31473 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28874__auto___31473,out){
return (function (){
var f__28875__auto__ = (function (){var switch__27272__auto__ = ((function (c__28874__auto___31473,out){
return (function (state_31444){
var state_val_31445 = (state_31444[(1)]);
if((state_val_31445 === (7))){
var inst_31439 = (state_31444[(2)]);
var state_31444__$1 = state_31444;
var statearr_31446_31474 = state_31444__$1;
(statearr_31446_31474[(2)] = inst_31439);

(statearr_31446_31474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31445 === (1))){
var inst_31421 = null;
var state_31444__$1 = (function (){var statearr_31447 = state_31444;
(statearr_31447[(7)] = inst_31421);

return statearr_31447;
})();
var statearr_31448_31475 = state_31444__$1;
(statearr_31448_31475[(2)] = null);

(statearr_31448_31475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31445 === (4))){
var inst_31424 = (state_31444[(8)]);
var inst_31424__$1 = (state_31444[(2)]);
var inst_31425 = (inst_31424__$1 == null);
var inst_31426 = cljs.core.not.call(null,inst_31425);
var state_31444__$1 = (function (){var statearr_31449 = state_31444;
(statearr_31449[(8)] = inst_31424__$1);

return statearr_31449;
})();
if(inst_31426){
var statearr_31450_31476 = state_31444__$1;
(statearr_31450_31476[(1)] = (5));

} else {
var statearr_31451_31477 = state_31444__$1;
(statearr_31451_31477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31445 === (6))){
var state_31444__$1 = state_31444;
var statearr_31452_31478 = state_31444__$1;
(statearr_31452_31478[(2)] = null);

(statearr_31452_31478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31445 === (3))){
var inst_31441 = (state_31444[(2)]);
var inst_31442 = cljs.core.async.close_BANG_.call(null,out);
var state_31444__$1 = (function (){var statearr_31453 = state_31444;
(statearr_31453[(9)] = inst_31441);

return statearr_31453;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31444__$1,inst_31442);
} else {
if((state_val_31445 === (2))){
var state_31444__$1 = state_31444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31444__$1,(4),ch);
} else {
if((state_val_31445 === (11))){
var inst_31424 = (state_31444[(8)]);
var inst_31433 = (state_31444[(2)]);
var inst_31421 = inst_31424;
var state_31444__$1 = (function (){var statearr_31454 = state_31444;
(statearr_31454[(10)] = inst_31433);

(statearr_31454[(7)] = inst_31421);

return statearr_31454;
})();
var statearr_31455_31479 = state_31444__$1;
(statearr_31455_31479[(2)] = null);

(statearr_31455_31479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31445 === (9))){
var inst_31424 = (state_31444[(8)]);
var state_31444__$1 = state_31444;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31444__$1,(11),out,inst_31424);
} else {
if((state_val_31445 === (5))){
var inst_31424 = (state_31444[(8)]);
var inst_31421 = (state_31444[(7)]);
var inst_31428 = cljs.core._EQ_.call(null,inst_31424,inst_31421);
var state_31444__$1 = state_31444;
if(inst_31428){
var statearr_31457_31480 = state_31444__$1;
(statearr_31457_31480[(1)] = (8));

} else {
var statearr_31458_31481 = state_31444__$1;
(statearr_31458_31481[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31445 === (10))){
var inst_31436 = (state_31444[(2)]);
var state_31444__$1 = state_31444;
var statearr_31459_31482 = state_31444__$1;
(statearr_31459_31482[(2)] = inst_31436);

(statearr_31459_31482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31445 === (8))){
var inst_31421 = (state_31444[(7)]);
var tmp31456 = inst_31421;
var inst_31421__$1 = tmp31456;
var state_31444__$1 = (function (){var statearr_31460 = state_31444;
(statearr_31460[(7)] = inst_31421__$1);

return statearr_31460;
})();
var statearr_31461_31483 = state_31444__$1;
(statearr_31461_31483[(2)] = null);

(statearr_31461_31483[(1)] = (2));


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
});})(c__28874__auto___31473,out))
;
return ((function (switch__27272__auto__,c__28874__auto___31473,out){
return (function() {
var cljs$core$async$state_machine__27273__auto__ = null;
var cljs$core$async$state_machine__27273__auto____0 = (function (){
var statearr_31465 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31465[(0)] = cljs$core$async$state_machine__27273__auto__);

(statearr_31465[(1)] = (1));

return statearr_31465;
});
var cljs$core$async$state_machine__27273__auto____1 = (function (state_31444){
while(true){
var ret_value__27274__auto__ = (function (){try{while(true){
var result__27275__auto__ = switch__27272__auto__.call(null,state_31444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27275__auto__;
}
break;
}
}catch (e31466){if((e31466 instanceof Object)){
var ex__27276__auto__ = e31466;
var statearr_31467_31484 = state_31444;
(statearr_31467_31484[(5)] = ex__27276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31485 = state_31444;
state_31444 = G__31485;
continue;
} else {
return ret_value__27274__auto__;
}
break;
}
});
cljs$core$async$state_machine__27273__auto__ = function(state_31444){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27273__auto____1.call(this,state_31444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27273__auto____0;
cljs$core$async$state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27273__auto____1;
return cljs$core$async$state_machine__27273__auto__;
})()
;})(switch__27272__auto__,c__28874__auto___31473,out))
})();
var state__28876__auto__ = (function (){var statearr_31468 = f__28875__auto__.call(null);
(statearr_31468[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28874__auto___31473);

return statearr_31468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28876__auto__);
});})(c__28874__auto___31473,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args31486 = [];
var len__26329__auto___31556 = arguments.length;
var i__26330__auto___31557 = (0);
while(true){
if((i__26330__auto___31557 < len__26329__auto___31556)){
args31486.push((arguments[i__26330__auto___31557]));

var G__31558 = (i__26330__auto___31557 + (1));
i__26330__auto___31557 = G__31558;
continue;
} else {
}
break;
}

var G__31488 = args31486.length;
switch (G__31488) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31486.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28874__auto___31560 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28874__auto___31560,out){
return (function (){
var f__28875__auto__ = (function (){var switch__27272__auto__ = ((function (c__28874__auto___31560,out){
return (function (state_31526){
var state_val_31527 = (state_31526[(1)]);
if((state_val_31527 === (7))){
var inst_31522 = (state_31526[(2)]);
var state_31526__$1 = state_31526;
var statearr_31528_31561 = state_31526__$1;
(statearr_31528_31561[(2)] = inst_31522);

(statearr_31528_31561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (1))){
var inst_31489 = (new Array(n));
var inst_31490 = inst_31489;
var inst_31491 = (0);
var state_31526__$1 = (function (){var statearr_31529 = state_31526;
(statearr_31529[(7)] = inst_31491);

(statearr_31529[(8)] = inst_31490);

return statearr_31529;
})();
var statearr_31530_31562 = state_31526__$1;
(statearr_31530_31562[(2)] = null);

(statearr_31530_31562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (4))){
var inst_31494 = (state_31526[(9)]);
var inst_31494__$1 = (state_31526[(2)]);
var inst_31495 = (inst_31494__$1 == null);
var inst_31496 = cljs.core.not.call(null,inst_31495);
var state_31526__$1 = (function (){var statearr_31531 = state_31526;
(statearr_31531[(9)] = inst_31494__$1);

return statearr_31531;
})();
if(inst_31496){
var statearr_31532_31563 = state_31526__$1;
(statearr_31532_31563[(1)] = (5));

} else {
var statearr_31533_31564 = state_31526__$1;
(statearr_31533_31564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (15))){
var inst_31516 = (state_31526[(2)]);
var state_31526__$1 = state_31526;
var statearr_31534_31565 = state_31526__$1;
(statearr_31534_31565[(2)] = inst_31516);

(statearr_31534_31565[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (13))){
var state_31526__$1 = state_31526;
var statearr_31535_31566 = state_31526__$1;
(statearr_31535_31566[(2)] = null);

(statearr_31535_31566[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (6))){
var inst_31491 = (state_31526[(7)]);
var inst_31512 = (inst_31491 > (0));
var state_31526__$1 = state_31526;
if(cljs.core.truth_(inst_31512)){
var statearr_31536_31567 = state_31526__$1;
(statearr_31536_31567[(1)] = (12));

} else {
var statearr_31537_31568 = state_31526__$1;
(statearr_31537_31568[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (3))){
var inst_31524 = (state_31526[(2)]);
var state_31526__$1 = state_31526;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31526__$1,inst_31524);
} else {
if((state_val_31527 === (12))){
var inst_31490 = (state_31526[(8)]);
var inst_31514 = cljs.core.vec.call(null,inst_31490);
var state_31526__$1 = state_31526;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31526__$1,(15),out,inst_31514);
} else {
if((state_val_31527 === (2))){
var state_31526__$1 = state_31526;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31526__$1,(4),ch);
} else {
if((state_val_31527 === (11))){
var inst_31506 = (state_31526[(2)]);
var inst_31507 = (new Array(n));
var inst_31490 = inst_31507;
var inst_31491 = (0);
var state_31526__$1 = (function (){var statearr_31538 = state_31526;
(statearr_31538[(7)] = inst_31491);

(statearr_31538[(8)] = inst_31490);

(statearr_31538[(10)] = inst_31506);

return statearr_31538;
})();
var statearr_31539_31569 = state_31526__$1;
(statearr_31539_31569[(2)] = null);

(statearr_31539_31569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (9))){
var inst_31490 = (state_31526[(8)]);
var inst_31504 = cljs.core.vec.call(null,inst_31490);
var state_31526__$1 = state_31526;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31526__$1,(11),out,inst_31504);
} else {
if((state_val_31527 === (5))){
var inst_31499 = (state_31526[(11)]);
var inst_31491 = (state_31526[(7)]);
var inst_31494 = (state_31526[(9)]);
var inst_31490 = (state_31526[(8)]);
var inst_31498 = (inst_31490[inst_31491] = inst_31494);
var inst_31499__$1 = (inst_31491 + (1));
var inst_31500 = (inst_31499__$1 < n);
var state_31526__$1 = (function (){var statearr_31540 = state_31526;
(statearr_31540[(11)] = inst_31499__$1);

(statearr_31540[(12)] = inst_31498);

return statearr_31540;
})();
if(cljs.core.truth_(inst_31500)){
var statearr_31541_31570 = state_31526__$1;
(statearr_31541_31570[(1)] = (8));

} else {
var statearr_31542_31571 = state_31526__$1;
(statearr_31542_31571[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (14))){
var inst_31519 = (state_31526[(2)]);
var inst_31520 = cljs.core.async.close_BANG_.call(null,out);
var state_31526__$1 = (function (){var statearr_31544 = state_31526;
(statearr_31544[(13)] = inst_31519);

return statearr_31544;
})();
var statearr_31545_31572 = state_31526__$1;
(statearr_31545_31572[(2)] = inst_31520);

(statearr_31545_31572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (10))){
var inst_31510 = (state_31526[(2)]);
var state_31526__$1 = state_31526;
var statearr_31546_31573 = state_31526__$1;
(statearr_31546_31573[(2)] = inst_31510);

(statearr_31546_31573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31527 === (8))){
var inst_31499 = (state_31526[(11)]);
var inst_31490 = (state_31526[(8)]);
var tmp31543 = inst_31490;
var inst_31490__$1 = tmp31543;
var inst_31491 = inst_31499;
var state_31526__$1 = (function (){var statearr_31547 = state_31526;
(statearr_31547[(7)] = inst_31491);

(statearr_31547[(8)] = inst_31490__$1);

return statearr_31547;
})();
var statearr_31548_31574 = state_31526__$1;
(statearr_31548_31574[(2)] = null);

(statearr_31548_31574[(1)] = (2));


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
});})(c__28874__auto___31560,out))
;
return ((function (switch__27272__auto__,c__28874__auto___31560,out){
return (function() {
var cljs$core$async$state_machine__27273__auto__ = null;
var cljs$core$async$state_machine__27273__auto____0 = (function (){
var statearr_31552 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31552[(0)] = cljs$core$async$state_machine__27273__auto__);

(statearr_31552[(1)] = (1));

return statearr_31552;
});
var cljs$core$async$state_machine__27273__auto____1 = (function (state_31526){
while(true){
var ret_value__27274__auto__ = (function (){try{while(true){
var result__27275__auto__ = switch__27272__auto__.call(null,state_31526);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27275__auto__;
}
break;
}
}catch (e31553){if((e31553 instanceof Object)){
var ex__27276__auto__ = e31553;
var statearr_31554_31575 = state_31526;
(statearr_31554_31575[(5)] = ex__27276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31576 = state_31526;
state_31526 = G__31576;
continue;
} else {
return ret_value__27274__auto__;
}
break;
}
});
cljs$core$async$state_machine__27273__auto__ = function(state_31526){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27273__auto____1.call(this,state_31526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27273__auto____0;
cljs$core$async$state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27273__auto____1;
return cljs$core$async$state_machine__27273__auto__;
})()
;})(switch__27272__auto__,c__28874__auto___31560,out))
})();
var state__28876__auto__ = (function (){var statearr_31555 = f__28875__auto__.call(null);
(statearr_31555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28874__auto___31560);

return statearr_31555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28876__auto__);
});})(c__28874__auto___31560,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args31577 = [];
var len__26329__auto___31651 = arguments.length;
var i__26330__auto___31652 = (0);
while(true){
if((i__26330__auto___31652 < len__26329__auto___31651)){
args31577.push((arguments[i__26330__auto___31652]));

var G__31653 = (i__26330__auto___31652 + (1));
i__26330__auto___31652 = G__31653;
continue;
} else {
}
break;
}

var G__31579 = args31577.length;
switch (G__31579) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31577.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28874__auto___31655 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28874__auto___31655,out){
return (function (){
var f__28875__auto__ = (function (){var switch__27272__auto__ = ((function (c__28874__auto___31655,out){
return (function (state_31621){
var state_val_31622 = (state_31621[(1)]);
if((state_val_31622 === (7))){
var inst_31617 = (state_31621[(2)]);
var state_31621__$1 = state_31621;
var statearr_31623_31656 = state_31621__$1;
(statearr_31623_31656[(2)] = inst_31617);

(statearr_31623_31656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (1))){
var inst_31580 = [];
var inst_31581 = inst_31580;
var inst_31582 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31621__$1 = (function (){var statearr_31624 = state_31621;
(statearr_31624[(7)] = inst_31582);

(statearr_31624[(8)] = inst_31581);

return statearr_31624;
})();
var statearr_31625_31657 = state_31621__$1;
(statearr_31625_31657[(2)] = null);

(statearr_31625_31657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (4))){
var inst_31585 = (state_31621[(9)]);
var inst_31585__$1 = (state_31621[(2)]);
var inst_31586 = (inst_31585__$1 == null);
var inst_31587 = cljs.core.not.call(null,inst_31586);
var state_31621__$1 = (function (){var statearr_31626 = state_31621;
(statearr_31626[(9)] = inst_31585__$1);

return statearr_31626;
})();
if(inst_31587){
var statearr_31627_31658 = state_31621__$1;
(statearr_31627_31658[(1)] = (5));

} else {
var statearr_31628_31659 = state_31621__$1;
(statearr_31628_31659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (15))){
var inst_31611 = (state_31621[(2)]);
var state_31621__$1 = state_31621;
var statearr_31629_31660 = state_31621__$1;
(statearr_31629_31660[(2)] = inst_31611);

(statearr_31629_31660[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (13))){
var state_31621__$1 = state_31621;
var statearr_31630_31661 = state_31621__$1;
(statearr_31630_31661[(2)] = null);

(statearr_31630_31661[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (6))){
var inst_31581 = (state_31621[(8)]);
var inst_31606 = inst_31581.length;
var inst_31607 = (inst_31606 > (0));
var state_31621__$1 = state_31621;
if(cljs.core.truth_(inst_31607)){
var statearr_31631_31662 = state_31621__$1;
(statearr_31631_31662[(1)] = (12));

} else {
var statearr_31632_31663 = state_31621__$1;
(statearr_31632_31663[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (3))){
var inst_31619 = (state_31621[(2)]);
var state_31621__$1 = state_31621;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31621__$1,inst_31619);
} else {
if((state_val_31622 === (12))){
var inst_31581 = (state_31621[(8)]);
var inst_31609 = cljs.core.vec.call(null,inst_31581);
var state_31621__$1 = state_31621;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31621__$1,(15),out,inst_31609);
} else {
if((state_val_31622 === (2))){
var state_31621__$1 = state_31621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31621__$1,(4),ch);
} else {
if((state_val_31622 === (11))){
var inst_31585 = (state_31621[(9)]);
var inst_31589 = (state_31621[(10)]);
var inst_31599 = (state_31621[(2)]);
var inst_31600 = [];
var inst_31601 = inst_31600.push(inst_31585);
var inst_31581 = inst_31600;
var inst_31582 = inst_31589;
var state_31621__$1 = (function (){var statearr_31633 = state_31621;
(statearr_31633[(7)] = inst_31582);

(statearr_31633[(11)] = inst_31599);

(statearr_31633[(12)] = inst_31601);

(statearr_31633[(8)] = inst_31581);

return statearr_31633;
})();
var statearr_31634_31664 = state_31621__$1;
(statearr_31634_31664[(2)] = null);

(statearr_31634_31664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (9))){
var inst_31581 = (state_31621[(8)]);
var inst_31597 = cljs.core.vec.call(null,inst_31581);
var state_31621__$1 = state_31621;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31621__$1,(11),out,inst_31597);
} else {
if((state_val_31622 === (5))){
var inst_31582 = (state_31621[(7)]);
var inst_31585 = (state_31621[(9)]);
var inst_31589 = (state_31621[(10)]);
var inst_31589__$1 = f.call(null,inst_31585);
var inst_31590 = cljs.core._EQ_.call(null,inst_31589__$1,inst_31582);
var inst_31591 = cljs.core.keyword_identical_QMARK_.call(null,inst_31582,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31592 = (inst_31590) || (inst_31591);
var state_31621__$1 = (function (){var statearr_31635 = state_31621;
(statearr_31635[(10)] = inst_31589__$1);

return statearr_31635;
})();
if(cljs.core.truth_(inst_31592)){
var statearr_31636_31665 = state_31621__$1;
(statearr_31636_31665[(1)] = (8));

} else {
var statearr_31637_31666 = state_31621__$1;
(statearr_31637_31666[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (14))){
var inst_31614 = (state_31621[(2)]);
var inst_31615 = cljs.core.async.close_BANG_.call(null,out);
var state_31621__$1 = (function (){var statearr_31639 = state_31621;
(statearr_31639[(13)] = inst_31614);

return statearr_31639;
})();
var statearr_31640_31667 = state_31621__$1;
(statearr_31640_31667[(2)] = inst_31615);

(statearr_31640_31667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (10))){
var inst_31604 = (state_31621[(2)]);
var state_31621__$1 = state_31621;
var statearr_31641_31668 = state_31621__$1;
(statearr_31641_31668[(2)] = inst_31604);

(statearr_31641_31668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (8))){
var inst_31581 = (state_31621[(8)]);
var inst_31585 = (state_31621[(9)]);
var inst_31589 = (state_31621[(10)]);
var inst_31594 = inst_31581.push(inst_31585);
var tmp31638 = inst_31581;
var inst_31581__$1 = tmp31638;
var inst_31582 = inst_31589;
var state_31621__$1 = (function (){var statearr_31642 = state_31621;
(statearr_31642[(7)] = inst_31582);

(statearr_31642[(14)] = inst_31594);

(statearr_31642[(8)] = inst_31581__$1);

return statearr_31642;
})();
var statearr_31643_31669 = state_31621__$1;
(statearr_31643_31669[(2)] = null);

(statearr_31643_31669[(1)] = (2));


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
});})(c__28874__auto___31655,out))
;
return ((function (switch__27272__auto__,c__28874__auto___31655,out){
return (function() {
var cljs$core$async$state_machine__27273__auto__ = null;
var cljs$core$async$state_machine__27273__auto____0 = (function (){
var statearr_31647 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31647[(0)] = cljs$core$async$state_machine__27273__auto__);

(statearr_31647[(1)] = (1));

return statearr_31647;
});
var cljs$core$async$state_machine__27273__auto____1 = (function (state_31621){
while(true){
var ret_value__27274__auto__ = (function (){try{while(true){
var result__27275__auto__ = switch__27272__auto__.call(null,state_31621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27275__auto__;
}
break;
}
}catch (e31648){if((e31648 instanceof Object)){
var ex__27276__auto__ = e31648;
var statearr_31649_31670 = state_31621;
(statearr_31649_31670[(5)] = ex__27276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31671 = state_31621;
state_31621 = G__31671;
continue;
} else {
return ret_value__27274__auto__;
}
break;
}
});
cljs$core$async$state_machine__27273__auto__ = function(state_31621){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27273__auto____1.call(this,state_31621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27273__auto____0;
cljs$core$async$state_machine__27273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27273__auto____1;
return cljs$core$async$state_machine__27273__auto__;
})()
;})(switch__27272__auto__,c__28874__auto___31655,out))
})();
var state__28876__auto__ = (function (){var statearr_31650 = f__28875__auto__.call(null);
(statearr_31650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28874__auto___31655);

return statearr_31650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28876__auto__);
});})(c__28874__auto___31655,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1489246398092