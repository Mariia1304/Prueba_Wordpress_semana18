/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(a,b,c){function d(c){var d=b.console;f[c]||(f[c]=!0,a.migrateWarnings.push(c),d&&d.warn&&!a.migrateMute&&(d.warn("JQMIGRATE: "+c),a.migrateTrace&&d.trace&&d.trace()))}function e(b,c,e,f){if(Object.defineProperty)try{return void Object.defineProperty(b,c,{configurable:!0,enumerable:!0,get:function(){return d(f),e},set:function(a){d(f),e=a}})}catch(g){}a._definePropertyBroken=!0,b[c]=e}a.migrateVersion="1.4.1";var f={};a.migrateWarnings=[],b.console&&b.console.log&&b.console.log("JQMIGRATE: Migrate is installed"+(a.migrateMute?"":" with logging active")+", version "+a.migrateVersion),a.migrateTrace===c&&(a.migrateTrace=!0),a.migrateReset=function(){f={},a.migrateWarnings.length=0},"BackCompat"===document.compatMode&&d("jQuery is not compatible with Quirks Mode");var g=a("<input/>",{size:1}).attr("size")&&a.attrFn,h=a.attr,i=a.attrHooks.value&&a.attrHooks.value.get||function(){return null},j=a.attrHooks.value&&a.attrHooks.value.set||function(){return c},k=/^(?:input|button)$/i,l=/^[238]$/,m=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,n=/^(?:checked|selected)$/i;e(a,"attrFn",g||{},"jQuery.attrFn is deprecated"),a.attr=function(b,e,f,i){var j=e.toLowerCase(),o=b&&b.nodeType;return i&&(h.length<4&&d("jQuery.fn.attr( props, pass ) is deprecated"),b&&!l.test(o)&&(g?e in g:a.isFunction(a.fn[e])))?a(b)[e](f):("type"===e&&f!==c&&k.test(b.nodeName)&&b.parentNode&&d("Can't change the 'type' of an input or button in IE 6/7/8"),!a.attrHooks[j]&&m.test(j)&&(a.attrHooks[j]={get:function(b,d){var e,f=a.prop(b,d);return f===!0||"boolean"!=typeof f&&(e=b.getAttributeNode(d))&&e.nodeValue!==!1?d.toLowerCase():c},set:function(b,c,d){var e;return c===!1?a.removeAttr(b,d):(e=a.propFix[d]||d,e in b&&(b[e]=!0),b.setAttribute(d,d.toLowerCase())),d}},n.test(j)&&d("jQuery.fn.attr('"+j+"') might use property instead of attribute")),h.call(a,b,e,f))},a.attrHooks.value={get:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?i.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value') no longer gets properties"),b in a?a.value:null)},set:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?j.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value', val) no longer sets properties"),void(a.value=b))}};var o,p,q=a.fn.init,r=a.find,s=a.parseJSON,t=/^\s*</,u=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,v=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,w=/^([^<]*)(<[\w\W]+>)([^>]*)$/;a.fn.init=function(b,e,f){var g,h;return b&&"string"==typeof b&&!a.isPlainObject(e)&&(g=w.exec(a.trim(b)))&&g[0]&&(t.test(b)||d("$(html) HTML strings must start with '<' character"),g[3]&&d("$(html) HTML text after last tag is ignored"),"#"===g[0].charAt(0)&&(d("HTML string cannot start with a '#' character"),a.error("JQMIGRATE: Invalid selector string (XSS)")),e&&e.context&&e.context.nodeType&&(e=e.context),a.parseHTML)?q.call(this,a.parseHTML(g[2],e&&e.ownerDocument||e||document,!0),e,f):(h=q.apply(this,arguments),b&&b.selector!==c?(h.selector=b.selector,h.context=b.context):(h.selector="string"==typeof b?b:"",b&&(h.context=b.nodeType?b:e||document)),h)},a.fn.init.prototype=a.fn,a.find=function(a){var b=Array.prototype.slice.call(arguments);if("string"==typeof a&&u.test(a))try{document.querySelector(a)}catch(c){a=a.replace(v,function(a,b,c,d){return"["+b+c+'"'+d+'"]'});try{document.querySelector(a),d("Attribute selector with '#' must be quoted: "+b[0]),b[0]=a}catch(e){d("Attribute selector with '#' was not fixed: "+b[0])}}return r.apply(this,b)};var x;for(x in r)Object.prototype.hasOwnProperty.call(r,x)&&(a.find[x]=r[x]);a.parseJSON=function(a){return a?s.apply(this,arguments):(d("jQuery.parseJSON requires a valid JSON string"),null)},a.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a.browser||(o=a.uaMatch(navigator.userAgent),p={},o.browser&&(p[o.browser]=!0,p.version=o.version),p.chrome?p.webkit=!0:p.webkit&&(p.safari=!0),a.browser=p),e(a,"browser",a.browser,"jQuery.browser is deprecated"),a.boxModel=a.support.boxModel="CSS1Compat"===document.compatMode,e(a,"boxModel",a.boxModel,"jQuery.boxModel is deprecated"),e(a.support,"boxModel",a.support.boxModel,"jQuery.support.boxModel is deprecated"),a.sub=function(){function b(a,c){return new b.fn.init(a,c)}a.extend(!0,b,this),b.superclass=this,b.fn=b.prototype=this(),b.fn.constructor=b,b.sub=this.sub,b.fn.init=function(d,e){var f=a.fn.init.call(this,d,e,c);return f instanceof b?f:b(f)},b.fn.init.prototype=b.fn;var c=b(document);return d("jQuery.sub() is deprecated"),b},a.fn.size=function(){return d("jQuery.fn.size() is deprecated; use the .length property"),this.length};var y=!1;a.swap&&a.each(["height","width","reliableMarginRight"],function(b,c){var d=a.cssHooks[c]&&a.cssHooks[c].get;d&&(a.cssHooks[c].get=function(){var a;return y=!0,a=d.apply(this,arguments),y=!1,a})}),a.swap=function(a,b,c,e){var f,g,h={};y||d("jQuery.swap() is undocumented and deprecated");for(g in b)h[g]=a.style[g],a.style[g]=b[g];f=c.apply(a,e||[]);for(g in b)a.style[g]=h[g];return f},a.ajaxSetup({converters:{"text json":a.parseJSON}});var z=a.fn.data;a.fn.data=function(b){var e,f,g=this[0];return!g||"events"!==b||1!==arguments.length||(e=a.data(g,b),f=a._data(g,b),e!==c&&e!==f||f===c)?z.apply(this,arguments):(d("Use of jQuery.fn.data('events') is deprecated"),f)};var A=/\/(java|ecma)script/i;a.clean||(a.clean=function(b,c,e,f){c=c||document,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,d("jQuery.clean() is deprecated");var g,h,i,j,k=[];if(a.merge(k,a.buildFragment(b,c).childNodes),e)for(i=function(a){return!a.type||A.test(a.type)?f?f.push(a.parentNode?a.parentNode.removeChild(a):a):e.appendChild(a):void 0},g=0;null!=(h=k[g]);g++)a.nodeName(h,"script")&&i(h)||(e.appendChild(h),"undefined"!=typeof h.getElementsByTagName&&(j=a.grep(a.merge([],h.getElementsByTagName("script")),i),k.splice.apply(k,[g+1,0].concat(j)),g+=j.length));return k});var B=a.event.add,C=a.event.remove,D=a.event.trigger,E=a.fn.toggle,F=a.fn.live,G=a.fn.die,H=a.fn.load,I="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",J=new RegExp("\\b(?:"+I+")\\b"),K=/(?:^|\s)hover(\.\S+|)\b/,L=function(b){return"string"!=typeof b||a.event.special.hover?b:(K.test(b)&&d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),b&&b.replace(K,"mouseenter$1 mouseleave$1"))};a.event.props&&"attrChange"!==a.event.props[0]&&a.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),a.event.dispatch&&e(a.event,"handle",a.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),a.event.add=function(a,b,c,e,f){a!==document&&J.test(b)&&d("AJAX events should be attached to document: "+b),B.call(this,a,L(b||""),c,e,f)},a.event.remove=function(a,b,c,d,e){C.call(this,a,L(b)||"",c,d,e)},a.each(["load","unload","error"],function(b,c){a.fn[c]=function(){var a=Array.prototype.slice.call(arguments,0);return"load"===c&&"string"==typeof a[0]?H.apply(this,a):(d("jQuery.fn."+c+"() is deprecated"),a.splice(0,0,c),arguments.length?this.bind.apply(this,a):(this.triggerHandler.apply(this,a),this))}}),a.fn.toggle=function(b,c){if(!a.isFunction(b)||!a.isFunction(c))return E.apply(this,arguments);d("jQuery.fn.toggle(handler, handler...) is deprecated");var e=arguments,f=b.guid||a.guid++,g=0,h=function(c){var d=(a._data(this,"lastToggle"+b.guid)||0)%g;return a._data(this,"lastToggle"+b.guid,d+1),c.preventDefault(),e[d].apply(this,arguments)||!1};for(h.guid=f;g<e.length;)e[g++].guid=f;return this.click(h)},a.fn.live=function(b,c,e){return d("jQuery.fn.live() is deprecated"),F?F.apply(this,arguments):(a(this.context).on(b,this.selector,c,e),this)},a.fn.die=function(b,c){return d("jQuery.fn.die() is deprecated"),G?G.apply(this,arguments):(a(this.context).off(b,this.selector||"**",c),this)},a.event.trigger=function(a,b,c,e){return c||J.test(a)||d("Global events are undocumented and deprecated"),D.call(this,a,b,c||document,e)},a.each(I.split("|"),function(b,c){a.event.special[c]={setup:function(){var b=this;return b!==document&&(a.event.add(document,c+"."+a.guid,function(){a.event.trigger(c,Array.prototype.slice.call(arguments,1),b,!0)}),a._data(this,c,a.guid++)),!1},teardown:function(){return this!==document&&a.event.remove(document,c+"."+a._data(this,c)),!1}}}),a.event.special.ready={setup:function(){this===document&&d("'ready' event is deprecated")}};var M=a.fn.andSelf||a.fn.addBack,N=a.fn.find;if(a.fn.andSelf=function(){return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),M.apply(this,arguments)},a.fn.find=function(a){var b=N.apply(this,arguments);return b.context=this.context,b.selector=this.selector?this.selector+" "+a:a,b},a.Callbacks){var O=a.Deferred,P=[["resolve","done",a.Callbacks("once memory"),a.Callbacks("once memory"),"resolved"],["reject","fail",a.Callbacks("once memory"),a.Callbacks("once memory"),"rejected"],["notify","progress",a.Callbacks("memory"),a.Callbacks("memory")]];a.Deferred=function(b){var c=O(),e=c.promise();return c.pipe=e.pipe=function(){var b=arguments;return d("deferred.pipe() is deprecated"),a.Deferred(function(d){a.each(P,function(f,g){var h=a.isFunction(b[f])&&b[f];c[g[1]](function(){var b=h&&h.apply(this,arguments);b&&a.isFunction(b.promise)?b.promise().done(d.resolve).fail(d.reject).progress(d.notify):d[g[0]+"With"](this===e?d.promise():this,h?[b]:arguments)})}),b=null}).promise()},c.isResolved=function(){return d("deferred.isResolved is deprecated"),"resolved"===c.state()},c.isRejected=function(){return d("deferred.isRejected is deprecated"),"rejected"===c.state()},b&&b.call(c,c),c}}}(jQuery,window);
function wpbc_define_var(wpbc_global_var){if(wpbc_global_var===undefined){return null;}
else{return jQuery.parseJSON(wpbc_global_var);}}
var wpbc_ajaxurl=wpbc_global1.wpbc_ajaxurl;var wpdev_bk_plugin_url=wpbc_global1.wpdev_bk_plugin_url;var wpdev_bk_today=wpbc_define_var(wpbc_global1.wpdev_bk_today);var visible_booking_id_on_page=wpbc_define_var(wpbc_global1.visible_booking_id_on_page);var booking_max_monthes_in_calendar=wpbc_global1.booking_max_monthes_in_calendar;var user_unavilable_days=wpbc_define_var(wpbc_global1.user_unavilable_days);var wpdev_bk_edit_id_hash=wpbc_global1.wpdev_bk_edit_id_hash;var wpdev_bk_plugin_filename=wpbc_global1.wpdev_bk_plugin_filename;var bk_days_selection_mode=wpbc_global1.bk_days_selection_mode;var wpdev_bk_personal=parseInt(wpbc_global1.wpdev_bk_personal);var block_some_dates_from_today=parseInt(wpbc_global1.block_some_dates_from_today);var message_verif_requred=wpbc_global1.message_verif_requred;var message_verif_requred_for_check_box=wpbc_global1.message_verif_requred_for_check_box;var message_verif_requred_for_radio_box=wpbc_global1.message_verif_requred_for_radio_box;var message_verif_emeil=wpbc_global1.message_verif_emeil;var message_verif_same_emeil=wpbc_global1.message_verif_same_emeil;var message_verif_selectdts=wpbc_global1.message_verif_selectdts;var parent_booking_resources=wpbc_define_var(wpbc_global1.parent_booking_resources);var new_booking_title=wpbc_global1.new_booking_title;var new_booking_title_time=parseInt(wpbc_global1.new_booking_title_time);var type_of_thank_you_message=wpbc_global1.type_of_thank_you_message;var thank_you_page_URL=wpbc_global1.thank_you_page_URL;var is_am_pm_inside_time=(wpbc_global1.is_am_pm_inside_time=="true");var is_booking_used_check_in_out_time=(wpbc_global1.is_booking_used_check_in_out_time=="true");var wpbc_active_locale=wpbc_global1.wpbc_active_locale;var wpbc_message_processing=wpbc_global1.wpbc_message_processing;var wpbc_message_deleting=wpbc_global1.wpbc_message_deleting;var wpbc_message_updating=wpbc_global1.wpbc_message_updating;var wpbc_message_saving=wpbc_global1.wpbc_message_saving;var message_checkinouttime_error=wpbc_global1.message_checkinouttime_error;var message_starttime_error=wpbc_global1.message_starttime_error;var message_endtime_error=wpbc_global1.message_endtime_error;var message_rangetime_error=wpbc_global1.message_rangetime_error;var message_durationtime_error=wpbc_global1.message_durationtime_error;var bk_highlight_timeslot_word=wpbc_global1.bk_highlight_timeslot_word;if(typeof wpbc_global2!=='undefined'){var message_time_error=wpbc_global2.message_time_error;}
if(typeof wpbc_global3!=='undefined'){var bk_1click_mode_days_num=parseInt(wpbc_global3.bk_1click_mode_days_num);var bk_1click_mode_days_start=wpbc_define_var(wpbc_global3.bk_1click_mode_days_start);var bk_2clicks_mode_days_min=parseInt(wpbc_global3.bk_2clicks_mode_days_min);var bk_2clicks_mode_days_max=parseInt(wpbc_global3.bk_2clicks_mode_days_max);var bk_2clicks_mode_days_specific=wpbc_define_var(wpbc_global3.bk_2clicks_mode_days_specific);var bk_2clicks_mode_days_start=wpbc_define_var(wpbc_global3.bk_2clicks_mode_days_start);bk_highlight_timeslot_word=wpbc_global3.bk_highlight_timeslot_word;var is_booking_recurrent_time=(wpbc_global3.is_booking_recurrent_time=="true");is_booking_used_check_in_out_time=(wpbc_global3.is_booking_used_check_in_out_time=="true");var bk_currency_pos=wpbc_global3.bk_currency_pos;}
if(typeof wpbc_global4!=='undefined'){var wpbc_available_days_num_from_today=parseInt(wpbc_global4.wpbc_available_days_num_from_today);var bk_cost_depends_from_selection_line1=wpbc_global4.bk_cost_depends_from_selection_line1;var bk_cost_depends_from_selection_line2=wpbc_global4.bk_cost_depends_from_selection_line2;var bk_cost_depends_from_selection_line3=wpbc_global4.bk_cost_depends_from_selection_line3;var bk_cost_depends_from_selection_line14summ=wpbc_global4.bk_cost_depends_from_selection_line14summ;var bk_cost_depends_from_selection_line24summ=wpbc_global4.bk_cost_depends_from_selection_line24summ;var wpdev_bk_season_filter=wpbc_define_var(wpbc_global4.wpdev_bk_season_filter);var bk_show_info_in_form=(wpbc_global4.bk_show_info_in_form=="true");}
if(typeof wpbc_global5!=='undefined'){var max_visitors_4_bk_res=wpbc_define_var(wpbc_global5.max_visitors_4_bk_res);var message_verif_visitors_more_then_available=wpbc_global5.message_verif_visitors_more_then_available;var is_use_visitors_number_for_availability=(wpbc_global5.is_use_visitors_number_for_availability=="true");var availability_based_on=wpbc_global5.availability_based_on;parent_booking_resources=wpbc_define_var(wpbc_global5.parent_booking_resources);};
/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=f4b4c9cb85df757ca08c)
 * Config saved to config.json and https://gist.github.com/f4b4c9cb85df757ca08c
 */
if(typeof jQuery==='undefined'){throw new Error('Bootstrap\'s JavaScript requires jQuery')}
+function($){'use strict';var version=$.fn.jquery.split(' ')[0].split('.')
if((version[0]<2&&version[1]<9)||(version[0]==1&&version[1]==9&&version[2]<1)){throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher')}}(jQuery);+function($){'use strict';var dismiss='[data-dismiss="alert"]'
var Alert=function(el){$(el).on('click',dismiss,this.close)}
Alert.VERSION='3.3.5'
Alert.TRANSITION_DURATION=150
Alert.prototype.close=function(e){var $this=$(this)
var selector=$this.attr('data-target')
if(!selector){selector=$this.attr('href')
selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'')}
var $parent=$(selector)
if(e)e.preventDefault()
if(!$parent.length){$parent=$this.closest('.alert')}
$parent.trigger(e=$.Event('close.bs.alert'))
if(e.isDefaultPrevented())return
$parent.removeClass('in')
function removeElement(){$parent.detach().trigger('closed.bs.alert').remove()}
$.support.transition&&$parent.hasClass('fade')?$parent.one('bsTransitionEnd',removeElement).emulateTransitionEnd(Alert.TRANSITION_DURATION):removeElement()}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.alert')
if(!data)$this.data('bs.alert',(data=new Alert(this)))
if(typeof option=='string')data[option].call($this)})}
var old=$.fn.alert
$.fn.alert=Plugin
$.fn.alert.Constructor=Alert
$.fn.alert.noConflict=function(){$.fn.alert=old
return this}
$(document).on('click.bs.alert.data-api',dismiss,Alert.prototype.close)}(jQuery);+function($){'use strict';var Button=function(element,options){this.$element=$(element)
this.options=$.extend({},Button.DEFAULTS,options)
this.isLoading=false}
Button.VERSION='3.3.5'
Button.DEFAULTS={loadingText:'loading...'}
Button.prototype.setState=function(state){var d='disabled'
var $el=this.$element
var val=$el.is('input')?'val':'html'
var data=$el.data()
state+='Text'
if(data.resetText==null)$el.data('resetText',$el[val]())
setTimeout($.proxy(function(){$el[val](data[state]==null?this.options[state]:data[state])
if(state=='loadingText'){this.isLoading=true
$el.addClass(d).attr(d,d)}else if(this.isLoading){this.isLoading=false
$el.removeClass(d).removeAttr(d)}},this),0)}
Button.prototype.toggle=function(){var changed=true
var $parent=this.$element.closest('[data-toggle="buttons"]')
if($parent.length){var $input=this.$element.find('input')
if($input.prop('type')=='radio'){if($input.prop('checked'))changed=false
$parent.find('.active').removeClass('active')
this.$element.addClass('active')}else if($input.prop('type')=='checkbox'){if(($input.prop('checked'))!==this.$element.hasClass('active'))changed=false
this.$element.toggleClass('active')}
$input.prop('checked',this.$element.hasClass('active'))
if(changed)$input.trigger('change')}else{this.$element.attr('aria-pressed',!this.$element.hasClass('active'))
this.$element.toggleClass('active')}}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.button')
var options=typeof option=='object'&&option
if(!data)$this.data('bs.button',(data=new Button(this,options)))
if(option=='toggle')data.toggle()
else if(option)data.setState(option)})}
var old=$.fn.button
$.fn.button=Plugin
$.fn.button.Constructor=Button
$.fn.button.noConflict=function(){$.fn.button=old
return this}
$(document).on('click.bs.button.data-api','[data-toggle^="button"]',function(e){var $btn=$(e.target)
if(!$btn.hasClass('btn'))$btn=$btn.closest('.btn')
Plugin.call($btn,'toggle')
if(!($(e.target).is('input[type="radio"]')||$(e.target).is('input[type="checkbox"]')))e.preventDefault()}).on('focus.bs.button.data-api blur.bs.button.data-api','[data-toggle^="button"]',function(e){$(e.target).closest('.btn').toggleClass('focus',/^focus(in)?$/.test(e.type))})}(jQuery);+function($){'use strict';var Carousel=function(element,options){this.$element=$(element)
this.$indicators=this.$element.find('.carousel-indicators')
this.options=options
this.paused=null
this.sliding=null
this.interval=null
this.$active=null
this.$items=null
this.options.keyboard&&this.$element.on('keydown.bs.carousel',$.proxy(this.keydown,this))
this.options.pause=='hover'&&!('ontouchstart'in document.documentElement)&&this.$element.on('mouseenter.bs.carousel',$.proxy(this.pause,this)).on('mouseleave.bs.carousel',$.proxy(this.cycle,this))}
Carousel.VERSION='3.3.5'
Carousel.TRANSITION_DURATION=600
Carousel.DEFAULTS={interval:5000,pause:'hover',wrap:true,keyboard:true}
Carousel.prototype.keydown=function(e){if(/input|textarea/i.test(e.target.tagName))return
switch(e.which){case 37:this.prev();break
case 39:this.next();break
default:return}
e.preventDefault()}
Carousel.prototype.cycle=function(e){e||(this.paused=false)
this.interval&&clearInterval(this.interval)
this.options.interval&&!this.paused&&(this.interval=setInterval($.proxy(this.next,this),this.options.interval))
return this}
Carousel.prototype.getItemIndex=function(item){this.$items=item.parent().children('.item')
return this.$items.index(item||this.$active)}
Carousel.prototype.getItemForDirection=function(direction,active){var activeIndex=this.getItemIndex(active)
var willWrap=(direction=='prev'&&activeIndex===0)||(direction=='next'&&activeIndex==(this.$items.length-1))
if(willWrap&&!this.options.wrap)return active
var delta=direction=='prev'?-1:1
var itemIndex=(activeIndex+delta)%this.$items.length
return this.$items.eq(itemIndex)}
Carousel.prototype.to=function(pos){var that=this
var activeIndex=this.getItemIndex(this.$active=this.$element.find('.item.active'))
if(pos>(this.$items.length-1)||pos<0)return
if(this.sliding)return this.$element.one('slid.bs.carousel',function(){that.to(pos)})
if(activeIndex==pos)return this.pause().cycle()
return this.slide(pos>activeIndex?'next':'prev',this.$items.eq(pos))}
Carousel.prototype.pause=function(e){e||(this.paused=true)
if(this.$element.find('.next, .prev').length&&$.support.transition){this.$element.trigger($.support.transition.end)
this.cycle(true)}
this.interval=clearInterval(this.interval)
return this}
Carousel.prototype.next=function(){if(this.sliding)return
return this.slide('next')}
Carousel.prototype.prev=function(){if(this.sliding)return
return this.slide('prev')}
Carousel.prototype.slide=function(type,next){var $active=this.$element.find('.item.active')
var $next=next||this.getItemForDirection(type,$active)
var isCycling=this.interval
var direction=type=='next'?'left':'right'
var that=this
if($next.hasClass('active'))return(this.sliding=false)
var relatedTarget=$next[0]
var slideEvent=$.Event('slide.bs.carousel',{relatedTarget:relatedTarget,direction:direction})
this.$element.trigger(slideEvent)
if(slideEvent.isDefaultPrevented())return
this.sliding=true
isCycling&&this.pause()
if(this.$indicators.length){this.$indicators.find('.active').removeClass('active')
var $nextIndicator=$(this.$indicators.children()[this.getItemIndex($next)])
$nextIndicator&&$nextIndicator.addClass('active')}
var slidEvent=$.Event('slid.bs.carousel',{relatedTarget:relatedTarget,direction:direction})
if($.support.transition&&this.$element.hasClass('slide')){$next.addClass(type)
$next[0].offsetWidth
$active.addClass(direction)
$next.addClass(direction)
$active.one('bsTransitionEnd',function(){$next.removeClass([type,direction].join(' ')).addClass('active')
$active.removeClass(['active',direction].join(' '))
that.sliding=false
setTimeout(function(){that.$element.trigger(slidEvent)},0)}).emulateTransitionEnd(Carousel.TRANSITION_DURATION)}else{$active.removeClass('active')
$next.addClass('active')
this.sliding=false
this.$element.trigger(slidEvent)}
isCycling&&this.cycle()
return this}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.carousel')
var options=$.extend({},Carousel.DEFAULTS,$this.data(),typeof option=='object'&&option)
var action=typeof option=='string'?option:options.slide
if(!data)$this.data('bs.carousel',(data=new Carousel(this,options)))
if(typeof option=='number')data.to(option)
else if(action)data[action]()
else if(options.interval)data.pause().cycle()})}
var old=$.fn.carousel
$.fn.carousel=Plugin
$.fn.carousel.Constructor=Carousel
$.fn.carousel.noConflict=function(){$.fn.carousel=old
return this}
var clickHandler=function(e){var href
var $this=$(this)
var $target=$($this.attr('data-target')||(href=$this.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,''))
if(!$target.hasClass('carousel'))return
var options=$.extend({},$target.data(),$this.data())
var slideIndex=$this.attr('data-slide-to')
if(slideIndex)options.interval=false
Plugin.call($target,options)
if(slideIndex){$target.data('bs.carousel').to(slideIndex)}
e.preventDefault()}
$(document).on('click.bs.carousel.data-api','[data-slide]',clickHandler).on('click.bs.carousel.data-api','[data-slide-to]',clickHandler)
$(window).on('load',function(){$('[data-ride="carousel"]').each(function(){var $carousel=$(this)
Plugin.call($carousel,$carousel.data())})})}(jQuery);+function($){'use strict';var backdrop='.dropdown-backdrop'
var toggle='[data-toggle="dropdown"]'
var Dropdown=function(element){$(element).on('click.bs.dropdown',this.toggle)}
Dropdown.VERSION='3.3.5'
function getParent($this){var selector=$this.attr('data-target')
if(!selector){selector=$this.attr('href')
selector=selector&&/#[A-Za-z]/.test(selector)&&selector.replace(/.*(?=#[^\s]*$)/,'')}
var $parent=selector&&$(selector)
return $parent&&$parent.length?$parent:$this.parent()}
function clearMenus(e){if(e&&e.which===3)return
$(backdrop).remove()
$(toggle).each(function(){var $this=$(this)
var $parent=getParent($this)
var relatedTarget={relatedTarget:this}
if(!$parent.hasClass('open'))return
if(e&&e.type=='click'&&/input|textarea/i.test(e.target.tagName)&&$.contains($parent[0],e.target))return
$parent.trigger(e=$.Event('hide.bs.dropdown',relatedTarget))
if(e.isDefaultPrevented())return
$this.attr('aria-expanded','false')
$parent.removeClass('open').trigger('hidden.bs.dropdown',relatedTarget)})}
Dropdown.prototype.toggle=function(e){var $this=$(this)
if($this.is('.disabled, :disabled'))return
var $parent=getParent($this)
var isActive=$parent.hasClass('open')
clearMenus()
if(!isActive){if('ontouchstart'in document.documentElement&&!$parent.closest('.navbar-nav').length){$(document.createElement('div')).addClass('dropdown-backdrop').insertAfter($(this)).on('click',clearMenus)}
var relatedTarget={relatedTarget:this}
$parent.trigger(e=$.Event('show.bs.dropdown',relatedTarget))
if(e.isDefaultPrevented())return
$this.trigger('focus').attr('aria-expanded','true')
$parent.toggleClass('open').trigger('shown.bs.dropdown',relatedTarget)}
return false}
Dropdown.prototype.keydown=function(e){if(!/(38|40|27|32)/.test(e.which)||/input|textarea/i.test(e.target.tagName))return
var $this=$(this)
e.preventDefault()
e.stopPropagation()
if($this.is('.disabled, :disabled'))return
var $parent=getParent($this)
var isActive=$parent.hasClass('open')
if(!isActive&&e.which!=27||isActive&&e.which==27){if(e.which==27)$parent.find(toggle).trigger('focus')
return $this.trigger('click')}
var desc=' li:not(.disabled):visible a'
var $items=$parent.find('.dropdown-menu'+desc)
if(!$items.length)return
var index=$items.index(e.target)
if(e.which==38&&index>0)index--
if(e.which==40&&index<$items.length-1)index++
if(!~index)index=0
$items.eq(index).trigger('focus')}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.dropdown')
if(!data)$this.data('bs.dropdown',(data=new Dropdown(this)))
if(typeof option=='string')data[option].call($this)})}
var old=$.fn.dropdown
$.fn.dropdown=Plugin
$.fn.dropdown.Constructor=Dropdown
$.fn.dropdown.noConflict=function(){$.fn.dropdown=old
return this}
$(document).on('click.bs.dropdown.data-api',clearMenus).on('click.bs.dropdown.data-api','.dropdown form',function(e){e.stopPropagation()}).on('click.bs.dropdown.data-api',toggle,Dropdown.prototype.toggle).on('keydown.bs.dropdown.data-api',toggle,Dropdown.prototype.keydown).on('keydown.bs.dropdown.data-api','.dropdown-menu',Dropdown.prototype.keydown)}(jQuery);+function($){'use strict';var Modal=function(element,options){this.options=options
this.$body=$(document.body)
this.$element=$(element)
this.$dialog=this.$element.find('.modal-dialog')
this.$backdrop=null
this.isShown=null
this.originalBodyPad=null
this.scrollbarWidth=0
this.ignoreBackdropClick=false
if(this.options.remote){this.$element.find('.modal-content').load(this.options.remote,$.proxy(function(){this.$element.trigger('loaded.bs.modal')},this))}}
Modal.VERSION='3.3.5'
Modal.TRANSITION_DURATION=300
Modal.BACKDROP_TRANSITION_DURATION=150
Modal.DEFAULTS={backdrop:true,keyboard:true,show:true}
Modal.prototype.toggle=function(_relatedTarget){return this.isShown?this.hide():this.show(_relatedTarget)}
Modal.prototype.show=function(_relatedTarget){var that=this
var e=$.Event('show.bs.modal',{relatedTarget:_relatedTarget})
this.$element.trigger(e)
if(this.isShown||e.isDefaultPrevented())return
this.isShown=true
this.checkScrollbar()
this.setScrollbar()
this.$body.addClass('modal-open')
this.escape()
this.resize()
this.$element.on('click.dismiss.bs.modal','[data-dismiss="modal"]',$.proxy(this.hide,this))
this.$dialog.on('mousedown.dismiss.bs.modal',function(){that.$element.one('mouseup.dismiss.bs.modal',function(e){if($(e.target).is(that.$element))that.ignoreBackdropClick=true})})
this.backdrop(function(){var transition=$.support.transition&&that.$element.hasClass('fade')
if(!that.$element.parent().length){that.$element.appendTo(that.$body)}
that.$element.show().scrollTop(0)
that.adjustDialog()
if(transition){that.$element[0].offsetWidth}
that.$element.addClass('in')
that.enforceFocus()
var e=$.Event('shown.bs.modal',{relatedTarget:_relatedTarget})
transition?that.$dialog.one('bsTransitionEnd',function(){that.$element.trigger('focus').trigger(e)}).emulateTransitionEnd(Modal.TRANSITION_DURATION):that.$element.trigger('focus').trigger(e)})}
Modal.prototype.hide=function(e){if(e)e.preventDefault()
e=$.Event('hide.bs.modal')
this.$element.trigger(e)
if(!this.isShown||e.isDefaultPrevented())return
this.isShown=false
this.escape()
this.resize()
$(document).off('focusin.bs.modal')
this.$element.removeClass('in').off('click.dismiss.bs.modal').off('mouseup.dismiss.bs.modal')
this.$dialog.off('mousedown.dismiss.bs.modal')
$.support.transition&&this.$element.hasClass('fade')?this.$element.one('bsTransitionEnd',$.proxy(this.hideModal,this)).emulateTransitionEnd(Modal.TRANSITION_DURATION):this.hideModal()}
Modal.prototype.enforceFocus=function(){$(document).off('focusin.bs.modal').on('focusin.bs.modal',$.proxy(function(e){if(this.$element[0]!==e.target&&!this.$element.has(e.target).length){this.$element.trigger('focus')}},this))}
Modal.prototype.escape=function(){if(this.isShown&&this.options.keyboard){this.$element.on('keydown.dismiss.bs.modal',$.proxy(function(e){e.which==27&&this.hide()},this))}else if(!this.isShown){this.$element.off('keydown.dismiss.bs.modal')}}
Modal.prototype.resize=function(){if(this.isShown){$(window).on('resize.bs.modal',$.proxy(this.handleUpdate,this))}else{$(window).off('resize.bs.modal')}}
Modal.prototype.hideModal=function(){var that=this
this.$element.hide()
this.backdrop(function(){that.$body.removeClass('modal-open')
that.resetAdjustments()
that.resetScrollbar()
that.$element.trigger('hidden.bs.modal')})}
Modal.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove()
this.$backdrop=null}
Modal.prototype.backdrop=function(callback){var that=this
var animate=this.$element.hasClass('fade')?'fade':''
if(this.isShown&&this.options.backdrop){var doAnimate=$.support.transition&&animate
this.$backdrop=$(document.createElement('div')).addClass('modal-backdrop '+animate).appendTo(this.$body)
this.$element.on('click.dismiss.bs.modal',$.proxy(function(e){if(this.ignoreBackdropClick){this.ignoreBackdropClick=false
return}
if(e.target!==e.currentTarget)return
this.options.backdrop=='static'?this.$element[0].focus():this.hide()},this))
if(doAnimate)this.$backdrop[0].offsetWidth
this.$backdrop.addClass('in')
if(!callback)return
doAnimate?this.$backdrop.one('bsTransitionEnd',callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION):callback()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass('in')
var callbackRemove=function(){that.removeBackdrop()
callback&&callback()}
$.support.transition&&this.$element.hasClass('fade')?this.$backdrop.one('bsTransitionEnd',callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION):callbackRemove()}else if(callback){callback()}}
Modal.prototype.handleUpdate=function(){this.adjustDialog()}
Modal.prototype.adjustDialog=function(){var modalIsOverflowing=this.$element[0].scrollHeight>document.documentElement.clientHeight
this.$element.css({paddingLeft:!this.bodyIsOverflowing&&modalIsOverflowing?this.scrollbarWidth:'',paddingRight:this.bodyIsOverflowing&&!modalIsOverflowing?this.scrollbarWidth:''})}
Modal.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:'',paddingRight:''})}
Modal.prototype.checkScrollbar=function(){var fullWindowWidth=window.innerWidth
if(!fullWindowWidth){var documentElementRect=document.documentElement.getBoundingClientRect()
fullWindowWidth=documentElementRect.right-Math.abs(documentElementRect.left)}
this.bodyIsOverflowing=document.body.clientWidth<fullWindowWidth
this.scrollbarWidth=this.measureScrollbar()}
Modal.prototype.setScrollbar=function(){var bodyPad=parseInt((this.$body.css('padding-right')||0),10)
this.originalBodyPad=document.body.style.paddingRight||''
if(this.bodyIsOverflowing)this.$body.css('padding-right',bodyPad+this.scrollbarWidth)}
Modal.prototype.resetScrollbar=function(){this.$body.css('padding-right',this.originalBodyPad)}
Modal.prototype.measureScrollbar=function(){var scrollDiv=document.createElement('div')
scrollDiv.className='modal-scrollbar-measure'
this.$body.append(scrollDiv)
var scrollbarWidth=scrollDiv.offsetWidth-scrollDiv.clientWidth
this.$body[0].removeChild(scrollDiv)
return scrollbarWidth}
function Plugin(option,_relatedTarget){return this.each(function(){var $this=$(this)
var data=$this.data('bs.modal')
var options=$.extend({},Modal.DEFAULTS,$this.data(),typeof option=='object'&&option)
if(!data)$this.data('bs.modal',(data=new Modal(this,options)))
if(typeof option=='string')data[option](_relatedTarget)
else if(options.show)data.show(_relatedTarget)})}
var old=$.fn.modal
$.fn.modal=Plugin
$.fn.modal.Constructor=Modal
$.fn.modal.noConflict=function(){$.fn.modal=old
return this}
$(document).on('click.bs.modal.data-api','[data-toggle="modal"]',function(e){var $this=$(this)
var href=$this.attr('href')
var $target=$($this.attr('data-target')||(href&&href.replace(/.*(?=#[^\s]+$)/,'')))
var option=$target.data('bs.modal')?'toggle':$.extend({remote:!/#/.test(href)&&href},$target.data(),$this.data())
if($this.is('a'))e.preventDefault()
$target.one('show.bs.modal',function(showEvent){if(showEvent.isDefaultPrevented())return
$target.one('hidden.bs.modal',function(){$this.is(':visible')&&$this.trigger('focus')})})
Plugin.call($target,option,this)})}(jQuery);+function($){'use strict';var Tooltip=function(element,options){this.type=null
this.options=null
this.enabled=null
this.timeout=null
this.hoverState=null
this.$element=null
this.inState=null
this.init('tooltip',element,options)}
Tooltip.VERSION='3.3.5'
Tooltip.TRANSITION_DURATION=150
Tooltip.DEFAULTS={animation:true,placement:'top',selector:false,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:'hover focus',title:'',delay:0,html:false,container:false,viewport:{selector:'body',padding:0}}
Tooltip.prototype.init=function(type,element,options){this.enabled=true
this.type=type
this.$element=$(element)
this.options=this.getOptions(options)
this.$viewport=this.options.viewport&&$($.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):(this.options.viewport.selector||this.options.viewport))
this.inState={click:false,hover:false,focus:false}
if(this.$element[0]instanceof document.constructor&&!this.options.selector){throw new Error('`selector` option must be specified when initializing '+this.type+' on the window.document object!')}
var triggers=this.options.trigger.split(' ')
for(var i=triggers.length;i--;){var trigger=triggers[i]
if(trigger=='click'){this.$element.on('click.'+this.type,this.options.selector,$.proxy(this.toggle,this))}else if(trigger!='manual'){var eventIn=trigger=='hover'?'mouseenter':'focusin'
var eventOut=trigger=='hover'?'mouseleave':'focusout'
this.$element.on(eventIn+'.'+this.type,this.options.selector,$.proxy(this.enter,this))
this.$element.on(eventOut+'.'+this.type,this.options.selector,$.proxy(this.leave,this))}}
this.options.selector?(this._options=$.extend({},this.options,{trigger:'manual',selector:''})):this.fixTitle()}
Tooltip.prototype.getDefaults=function(){return Tooltip.DEFAULTS}
Tooltip.prototype.getOptions=function(options){options=$.extend({},this.getDefaults(),this.$element.data(),options)
if(options.delay&&typeof options.delay=='number'){options.delay={show:options.delay,hide:options.delay}}
return options}
Tooltip.prototype.getDelegateOptions=function(){var options={}
var defaults=this.getDefaults()
this._options&&$.each(this._options,function(key,value){if(defaults[key]!=value)options[key]=value})
return options}
Tooltip.prototype.enter=function(obj){var self=obj instanceof this.constructor?obj:$(obj.currentTarget).data('bs.'+this.type)
if(!self){self=new this.constructor(obj.currentTarget,this.getDelegateOptions())
$(obj.currentTarget).data('bs.'+this.type,self)}
if(obj instanceof $.Event){self.inState[obj.type=='focusin'?'focus':'hover']=true}
if(self.tip().hasClass('in')||self.hoverState=='in'){self.hoverState='in'
return}
clearTimeout(self.timeout)
self.hoverState='in'
if(!self.options.delay||!self.options.delay.show)return self.show()
self.timeout=setTimeout(function(){if(self.hoverState=='in')self.show()},self.options.delay.show)}
Tooltip.prototype.isInStateTrue=function(){for(var key in this.inState){if(this.inState[key])return true}
return false}
Tooltip.prototype.leave=function(obj){var self=obj instanceof this.constructor?obj:$(obj.currentTarget).data('bs.'+this.type)
if(!self){self=new this.constructor(obj.currentTarget,this.getDelegateOptions())
$(obj.currentTarget).data('bs.'+this.type,self)}
if(obj instanceof $.Event){self.inState[obj.type=='focusout'?'focus':'hover']=false}
if(self.isInStateTrue())return
clearTimeout(self.timeout)
self.hoverState='out'
if(!self.options.delay||!self.options.delay.hide)return self.hide()
self.timeout=setTimeout(function(){if(self.hoverState=='out')self.hide()},self.options.delay.hide)}
Tooltip.prototype.show=function(){var e=$.Event('show.bs.'+this.type)
if(this.hasContent()&&this.enabled){this.$element.trigger(e)
var inDom=$.contains(this.$element[0].ownerDocument.documentElement,this.$element[0])
if(e.isDefaultPrevented()||!inDom)return
var that=this
var $tip=this.tip()
var tipId=this.getUID(this.type)
this.setContent()
$tip.attr('id',tipId)
this.$element.attr('aria-describedby',tipId)
if(this.options.animation)$tip.addClass('fade')
var placement=typeof this.options.placement=='function'?this.options.placement.call(this,$tip[0],this.$element[0]):this.options.placement
var autoToken=/\s?auto?\s?/i
var autoPlace=autoToken.test(placement)
if(autoPlace)placement=placement.replace(autoToken,'')||'top'
$tip.detach().css({top:0,left:0,display:'block'}).addClass(placement).data('bs.'+this.type,this)
this.options.container?$tip.appendTo(this.options.container):$tip.insertAfter(this.$element)
this.$element.trigger('inserted.bs.'+this.type)
var pos=this.getPosition()
var actualWidth=$tip[0].offsetWidth
var actualHeight=$tip[0].offsetHeight
if(autoPlace){var orgPlacement=placement
var viewportDim=this.getPosition(this.$viewport)
placement=placement=='bottom'&&pos.bottom+actualHeight>viewportDim.bottom?'top':placement=='top'&&pos.top-actualHeight<viewportDim.top?'bottom':placement=='right'&&pos.right+actualWidth>viewportDim.width?'left':placement=='left'&&pos.left-actualWidth<viewportDim.left?'right':placement
$tip.removeClass(orgPlacement).addClass(placement)}
var calculatedOffset=this.getCalculatedOffset(placement,pos,actualWidth,actualHeight)
this.applyPlacement(calculatedOffset,placement)
var complete=function(){var prevHoverState=that.hoverState
that.$element.trigger('shown.bs.'+that.type)
that.hoverState=null
if(prevHoverState=='out')that.leave(that)}
$.support.transition&&this.$tip.hasClass('fade')?$tip.one('bsTransitionEnd',complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION):complete()}}
Tooltip.prototype.applyPlacement=function(offset,placement){var $tip=this.tip()
var width=$tip[0].offsetWidth
var height=$tip[0].offsetHeight
var marginTop=parseInt($tip.css('margin-top'),10)
var marginLeft=parseInt($tip.css('margin-left'),10)
if(isNaN(marginTop))marginTop=0
if(isNaN(marginLeft))marginLeft=0
offset.top+=marginTop
offset.left+=marginLeft
$.offset.setOffset($tip[0],$.extend({using:function(props){$tip.css({top:Math.round(props.top),left:Math.round(props.left)})}},offset),0)
$tip.addClass('in')
var actualWidth=$tip[0].offsetWidth
var actualHeight=$tip[0].offsetHeight
if(placement=='top'&&actualHeight!=height){offset.top=offset.top+height-actualHeight}
var delta=this.getViewportAdjustedDelta(placement,offset,actualWidth,actualHeight)
if(delta.left)offset.left+=delta.left
else offset.top+=delta.top
var isVertical=/top|bottom/.test(placement)
var arrowDelta=isVertical?delta.left*2-width+actualWidth:delta.top*2-height+actualHeight
var arrowOffsetPosition=isVertical?'offsetWidth':'offsetHeight'
$tip.offset(offset)
this.replaceArrow(arrowDelta,$tip[0][arrowOffsetPosition],isVertical)}
Tooltip.prototype.replaceArrow=function(delta,dimension,isVertical){this.arrow().css(isVertical?'left':'top',50*(1-delta/dimension)+'%').css(isVertical?'top':'left','')}
Tooltip.prototype.setContent=function(){var $tip=this.tip()
var title=this.getTitle()
$tip.find('.tooltip-inner')[this.options.html?'html':'text'](title)
$tip.removeClass('fade in top bottom left right')}
Tooltip.prototype.hide=function(callback){var that=this
var $tip=$(this.$tip)
var e=$.Event('hide.bs.'+this.type)
function complete(){if(that.hoverState!='in')$tip.detach()
that.$element.removeAttr('aria-describedby').trigger('hidden.bs.'+that.type)
callback&&callback()}
this.$element.trigger(e)
if(e.isDefaultPrevented())return
$tip.removeClass('in')
$.support.transition&&$tip.hasClass('fade')?$tip.one('bsTransitionEnd',complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION):complete()
this.hoverState=null
return this}
Tooltip.prototype.fixTitle=function(){var $e=this.$element
if($e.attr('title')||typeof $e.attr('data-original-title')!='string'){$e.attr('data-original-title',$e.attr('title')||'').attr('title','')}}
Tooltip.prototype.hasContent=function(){return this.getTitle()}
Tooltip.prototype.getPosition=function($element){$element=$element||this.$element
var el=$element[0]
var isBody=el.tagName=='BODY'
var elRect=el.getBoundingClientRect()
if(elRect.width==null){elRect=$.extend({},elRect,{width:elRect.right-elRect.left,height:elRect.bottom-elRect.top})}
var elOffset=isBody?{top:0,left:0}:$element.offset()
var scroll={scroll:isBody?document.documentElement.scrollTop||document.body.scrollTop:$element.scrollTop()}
var outerDims=isBody?{width:$(window).width(),height:$(window).height()}:null
return $.extend({},elRect,scroll,outerDims,elOffset)}
Tooltip.prototype.getCalculatedOffset=function(placement,pos,actualWidth,actualHeight){return placement=='bottom'?{top:pos.top+pos.height,left:pos.left+pos.width/2-actualWidth/2}:placement=='top'?{top:pos.top-actualHeight,left:pos.left+pos.width/2-actualWidth/2}:placement=='left'?{top:pos.top+pos.height/2-actualHeight/2,left:pos.left-actualWidth}:{top:pos.top+pos.height/2-actualHeight/2,left:pos.left+pos.width}}
Tooltip.prototype.getViewportAdjustedDelta=function(placement,pos,actualWidth,actualHeight){var delta={top:0,left:0}
if(!this.$viewport)return delta
var viewportPadding=this.options.viewport&&this.options.viewport.padding||0
var viewportDimensions=this.getPosition(this.$viewport)
if(/right|left/.test(placement)){var topEdgeOffset=pos.top-viewportPadding-viewportDimensions.scroll
var bottomEdgeOffset=pos.top+viewportPadding-viewportDimensions.scroll+actualHeight
if(topEdgeOffset<viewportDimensions.top){delta.top=viewportDimensions.top-topEdgeOffset}else if(bottomEdgeOffset>viewportDimensions.top+viewportDimensions.height){delta.top=viewportDimensions.top+viewportDimensions.height-bottomEdgeOffset}}else{var leftEdgeOffset=pos.left-viewportPadding
var rightEdgeOffset=pos.left+viewportPadding+actualWidth
if(leftEdgeOffset<viewportDimensions.left){delta.left=viewportDimensions.left-leftEdgeOffset}else if(rightEdgeOffset>viewportDimensions.right){delta.left=viewportDimensions.left+viewportDimensions.width-rightEdgeOffset}}
return delta}
Tooltip.prototype.getTitle=function(){var title
var $e=this.$element
var o=this.options
title=$e.attr('data-original-title')||(typeof o.title=='function'?o.title.call($e[0]):o.title)
return title}
Tooltip.prototype.getUID=function(prefix){do prefix+=~~(Math.random()*1000000)
while(document.getElementById(prefix))
return prefix}
Tooltip.prototype.tip=function(){if(!this.$tip){this.$tip=$(this.options.template)
if(this.$tip.length!=1){throw new Error(this.type+' `template` option must consist of exactly 1 top-level element!')}}
return this.$tip}
Tooltip.prototype.arrow=function(){return(this.$arrow=this.$arrow||this.tip().find('.tooltip-arrow'))}
Tooltip.prototype.enable=function(){this.enabled=true}
Tooltip.prototype.disable=function(){this.enabled=false}
Tooltip.prototype.toggleEnabled=function(){this.enabled=!this.enabled}
Tooltip.prototype.toggle=function(e){var self=this
if(e){self=$(e.currentTarget).data('bs.'+this.type)
if(!self){self=new this.constructor(e.currentTarget,this.getDelegateOptions())
$(e.currentTarget).data('bs.'+this.type,self)}}
if(e){self.inState.click=!self.inState.click
if(self.isInStateTrue())self.enter(self)
else self.leave(self)}else{self.tip().hasClass('in')?self.leave(self):self.enter(self)}}
Tooltip.prototype.destroy=function(){var that=this
clearTimeout(this.timeout)
this.hide(function(){that.$element.off('.'+that.type).removeData('bs.'+that.type)
if(that.$tip){that.$tip.detach()}
that.$tip=null
that.$arrow=null
that.$viewport=null})}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.tooltip')
var options=typeof option=='object'&&option
if(!data&&/destroy|hide/.test(option))return
if(!data)$this.data('bs.tooltip',(data=new Tooltip(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.tooltip
$.fn.tooltip=Plugin
$.fn.tooltip.Constructor=Tooltip
$.fn.tooltip.noConflict=function(){$.fn.tooltip=old
return this}}(jQuery);+function($){'use strict';var Popover=function(element,options){this.init('popover',element,options)}
if(!$.fn.tooltip)throw new Error('Popover requires tooltip.js')
Popover.VERSION='3.3.5'
Popover.DEFAULTS=$.extend({},$.fn.tooltip.Constructor.DEFAULTS,{placement:'right',trigger:'click',content:'',template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'})
Popover.prototype=$.extend({},$.fn.tooltip.Constructor.prototype)
Popover.prototype.constructor=Popover
Popover.prototype.getDefaults=function(){return Popover.DEFAULTS}
Popover.prototype.setContent=function(){var $tip=this.tip()
var title=this.getTitle()
var content=this.getContent()
$tip.find('.popover-title')[this.options.html?'html':'text'](title)
$tip.find('.popover-content').children().detach().end()[this.options.html?(typeof content=='string'?'html':'append'):'text'](content)
$tip.removeClass('fade top bottom left right in')
if(!$tip.find('.popover-title').html())$tip.find('.popover-title').hide()}
Popover.prototype.hasContent=function(){return this.getTitle()||this.getContent()}
Popover.prototype.getContent=function(){var $e=this.$element
var o=this.options
return $e.attr('data-content')||(typeof o.content=='function'?o.content.call($e[0]):o.content)}
Popover.prototype.arrow=function(){return(this.$arrow=this.$arrow||this.tip().find('.arrow'))}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.popover')
var options=typeof option=='object'&&option
if(!data&&/destroy|hide/.test(option))return
if(!data)$this.data('bs.popover',(data=new Popover(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.popover
$.fn.popover=Plugin
$.fn.popover.Constructor=Popover
$.fn.popover.noConflict=function(){$.fn.popover=old
return this}}(jQuery);+function($){'use strict';var Tab=function(element){this.element=$(element)}
Tab.VERSION='3.3.5'
Tab.TRANSITION_DURATION=150
Tab.prototype.show=function(){var $this=this.element
var $ul=$this.closest('ul:not(.dropdown-menu)')
var selector=$this.data('target')
if(!selector){selector=$this.attr('href')
selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'')}
if($this.parent('li').hasClass('active'))return
var $previous=$ul.find('.active:last a')
var hideEvent=$.Event('hide.bs.tab',{relatedTarget:$this[0]})
var showEvent=$.Event('show.bs.tab',{relatedTarget:$previous[0]})
$previous.trigger(hideEvent)
$this.trigger(showEvent)
if(showEvent.isDefaultPrevented()||hideEvent.isDefaultPrevented())return
var $target=$(selector)
this.activate($this.closest('li'),$ul)
this.activate($target,$target.parent(),function(){$previous.trigger({type:'hidden.bs.tab',relatedTarget:$this[0]})
$this.trigger({type:'shown.bs.tab',relatedTarget:$previous[0]})})}
Tab.prototype.activate=function(element,container,callback){var $active=container.find('> .active')
var transition=callback&&$.support.transition&&($active.length&&$active.hasClass('fade')||!!container.find('> .fade').length)
function next(){$active.removeClass('active').find('> .dropdown-menu > .active').removeClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded',false)
element.addClass('active').find('[data-toggle="tab"]').attr('aria-expanded',true)
if(transition){element[0].offsetWidth
element.addClass('in')}else{element.removeClass('fade')}
if(element.parent('.dropdown-menu').length){element.closest('li.dropdown').addClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded',true)}
callback&&callback()}
$active.length&&transition?$active.one('bsTransitionEnd',next).emulateTransitionEnd(Tab.TRANSITION_DURATION):next()
$active.removeClass('in')}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.tab')
if(!data)$this.data('bs.tab',(data=new Tab(this)))
if(typeof option=='string')data[option]()})}
var old=$.fn.tab
$.fn.tab=Plugin
$.fn.tab.Constructor=Tab
$.fn.tab.noConflict=function(){$.fn.tab=old
return this}
var clickHandler=function(e){e.preventDefault()
Plugin.call($(this),'show')}
$(document).on('click.bs.tab.data-api','[data-toggle="tab"]',clickHandler).on('click.bs.tab.data-api','[data-toggle="pill"]',clickHandler)}(jQuery);+function($){'use strict';var Affix=function(element,options){this.options=$.extend({},Affix.DEFAULTS,options)
this.$target=$(this.options.target).on('scroll.bs.affix.data-api',$.proxy(this.checkPosition,this)).on('click.bs.affix.data-api',$.proxy(this.checkPositionWithEventLoop,this))
this.$element=$(element)
this.affixed=null
this.unpin=null
this.pinnedOffset=null
this.checkPosition()}
Affix.VERSION='3.3.5'
Affix.RESET='affix affix-top affix-bottom'
Affix.DEFAULTS={offset:0,target:window}
Affix.prototype.getState=function(scrollHeight,height,offsetTop,offsetBottom){var scrollTop=this.$target.scrollTop()
var position=this.$element.offset()
var targetHeight=this.$target.height()
if(offsetTop!=null&&this.affixed=='top')return scrollTop<offsetTop?'top':false
if(this.affixed=='bottom'){if(offsetTop!=null)return(scrollTop+this.unpin<=position.top)?false:'bottom'
return(scrollTop+targetHeight<=scrollHeight-offsetBottom)?false:'bottom'}
var initializing=this.affixed==null
var colliderTop=initializing?scrollTop:position.top
var colliderHeight=initializing?targetHeight:height
if(offsetTop!=null&&scrollTop<=offsetTop)return'top'
if(offsetBottom!=null&&(colliderTop+colliderHeight>=scrollHeight-offsetBottom))return'bottom'
return false}
Affix.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset
this.$element.removeClass(Affix.RESET).addClass('affix')
var scrollTop=this.$target.scrollTop()
var position=this.$element.offset()
return(this.pinnedOffset=position.top-scrollTop)}
Affix.prototype.checkPositionWithEventLoop=function(){setTimeout($.proxy(this.checkPosition,this),1)}
Affix.prototype.checkPosition=function(){if(!this.$element.is(':visible'))return
var height=this.$element.height()
var offset=this.options.offset
var offsetTop=offset.top
var offsetBottom=offset.bottom
var scrollHeight=Math.max($(document).height(),$(document.body).height())
if(typeof offset!='object')offsetBottom=offsetTop=offset
if(typeof offsetTop=='function')offsetTop=offset.top(this.$element)
if(typeof offsetBottom=='function')offsetBottom=offset.bottom(this.$element)
var affix=this.getState(scrollHeight,height,offsetTop,offsetBottom)
if(this.affixed!=affix){if(this.unpin!=null)this.$element.css('top','')
var affixType='affix'+(affix?'-'+affix:'')
var e=$.Event(affixType+'.bs.affix')
this.$element.trigger(e)
if(e.isDefaultPrevented())return
this.affixed=affix
this.unpin=affix=='bottom'?this.getPinnedOffset():null
this.$element.removeClass(Affix.RESET).addClass(affixType).trigger(affixType.replace('affix','affixed')+'.bs.affix')}
if(affix=='bottom'){this.$element.offset({top:scrollHeight-height-offsetBottom})}}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.affix')
var options=typeof option=='object'&&option
if(!data)$this.data('bs.affix',(data=new Affix(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.affix
$.fn.affix=Plugin
$.fn.affix.Constructor=Affix
$.fn.affix.noConflict=function(){$.fn.affix=old
return this}
$(window).on('load',function(){$('[data-spy="affix"]').each(function(){var $spy=$(this)
var data=$spy.data()
data.offset=data.offset||{}
if(data.offsetBottom!=null)data.offset.bottom=data.offsetBottom
if(data.offsetTop!=null)data.offset.top=data.offsetTop
Plugin.call($spy,data)})})}(jQuery);+function($){'use strict';var Collapse=function(element,options){this.$element=$(element)
this.options=$.extend({},Collapse.DEFAULTS,options)
this.$trigger=$('[data-toggle="collapse"][href="#'+element.id+'"],'+'[data-toggle="collapse"][data-target="#'+element.id+'"]')
this.transitioning=null
if(this.options.parent){this.$parent=this.getParent()}else{this.addAriaAndCollapsedClass(this.$element,this.$trigger)}
if(this.options.toggle)this.toggle()}
Collapse.VERSION='3.3.5'
Collapse.TRANSITION_DURATION=350
Collapse.DEFAULTS={toggle:true}
Collapse.prototype.dimension=function(){var hasWidth=this.$element.hasClass('width')
return hasWidth?'width':'height'}
Collapse.prototype.show=function(){if(this.transitioning||this.$element.hasClass('in'))return
var activesData
var actives=this.$parent&&this.$parent.children('.panel').children('.in, .collapsing')
if(actives&&actives.length){activesData=actives.data('bs.collapse')
if(activesData&&activesData.transitioning)return}
var startEvent=$.Event('show.bs.collapse')
this.$element.trigger(startEvent)
if(startEvent.isDefaultPrevented())return
if(actives&&actives.length){Plugin.call(actives,'hide')
activesData||actives.data('bs.collapse',null)}
var dimension=this.dimension()
this.$element.removeClass('collapse').addClass('collapsing')[dimension](0).attr('aria-expanded',true)
this.$trigger.removeClass('collapsed').attr('aria-expanded',true)
this.transitioning=1
var complete=function(){this.$element.removeClass('collapsing').addClass('collapse in')[dimension]('')
this.transitioning=0
this.$element.trigger('shown.bs.collapse')}
if(!$.support.transition)return complete.call(this)
var scrollSize=$.camelCase(['scroll',dimension].join('-'))
this.$element.one('bsTransitionEnd',$.proxy(complete,this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])}
Collapse.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass('in'))return
var startEvent=$.Event('hide.bs.collapse')
this.$element.trigger(startEvent)
if(startEvent.isDefaultPrevented())return
var dimension=this.dimension()
this.$element[dimension](this.$element[dimension]())[0].offsetHeight
this.$element.addClass('collapsing').removeClass('collapse in').attr('aria-expanded',false)
this.$trigger.addClass('collapsed').attr('aria-expanded',false)
this.transitioning=1
var complete=function(){this.transitioning=0
this.$element.removeClass('collapsing').addClass('collapse').trigger('hidden.bs.collapse')}
if(!$.support.transition)return complete.call(this)
this.$element
[dimension](0).one('bsTransitionEnd',$.proxy(complete,this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)}
Collapse.prototype.toggle=function(){this[this.$element.hasClass('in')?'hide':'show']()}
Collapse.prototype.getParent=function(){return $(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each($.proxy(function(i,element){var $element=$(element)
this.addAriaAndCollapsedClass(getTargetFromTrigger($element),$element)},this)).end()}
Collapse.prototype.addAriaAndCollapsedClass=function($element,$trigger){var isOpen=$element.hasClass('in')
$element.attr('aria-expanded',isOpen)
$trigger.toggleClass('collapsed',!isOpen).attr('aria-expanded',isOpen)}
function getTargetFromTrigger($trigger){var href
var target=$trigger.attr('data-target')||(href=$trigger.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,'')
return $(target)}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.collapse')
var options=$.extend({},Collapse.DEFAULTS,$this.data(),typeof option=='object'&&option)
if(!data&&options.toggle&&/show|hide/.test(option))options.toggle=false
if(!data)$this.data('bs.collapse',(data=new Collapse(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.collapse
$.fn.collapse=Plugin
$.fn.collapse.Constructor=Collapse
$.fn.collapse.noConflict=function(){$.fn.collapse=old
return this}
$(document).on('click.bs.collapse.data-api','[data-toggle="collapse"]',function(e){var $this=$(this)
if(!$this.attr('data-target'))e.preventDefault()
var $target=getTargetFromTrigger($this)
var data=$target.data('bs.collapse')
var option=data?'toggle':$this.data()
Plugin.call($target,option)})}(jQuery);+function($){'use strict';function ScrollSpy(element,options){this.$body=$(document.body)
this.$scrollElement=$(element).is(document.body)?$(window):$(element)
this.options=$.extend({},ScrollSpy.DEFAULTS,options)
this.selector=(this.options.target||'')+' .nav li > a'
this.offsets=[]
this.targets=[]
this.activeTarget=null
this.scrollHeight=0
this.$scrollElement.on('scroll.bs.scrollspy',$.proxy(this.process,this))
this.refresh()
this.process()}
ScrollSpy.VERSION='3.3.5'
ScrollSpy.DEFAULTS={offset:10}
ScrollSpy.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)}
ScrollSpy.prototype.refresh=function(){var that=this
var offsetMethod='offset'
var offsetBase=0
this.offsets=[]
this.targets=[]
this.scrollHeight=this.getScrollHeight()
if(!$.isWindow(this.$scrollElement[0])){offsetMethod='position'
offsetBase=this.$scrollElement.scrollTop()}
this.$body.find(this.selector).map(function(){var $el=$(this)
var href=$el.data('target')||$el.attr('href')
var $href=/^#./.test(href)&&$(href)
return($href&&$href.length&&$href.is(':visible')&&[[$href[offsetMethod]().top+offsetBase,href]])||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){that.offsets.push(this[0])
that.targets.push(this[1])})}
ScrollSpy.prototype.process=function(){var scrollTop=this.$scrollElement.scrollTop()+this.options.offset
var scrollHeight=this.getScrollHeight()
var maxScroll=this.options.offset+scrollHeight-this.$scrollElement.height()
var offsets=this.offsets
var targets=this.targets
var activeTarget=this.activeTarget
var i
if(this.scrollHeight!=scrollHeight){this.refresh()}
if(scrollTop>=maxScroll){return activeTarget!=(i=targets[targets.length-1])&&this.activate(i)}
if(activeTarget&&scrollTop<offsets[0]){this.activeTarget=null
return this.clear()}
for(i=offsets.length;i--;){activeTarget!=targets[i]&&scrollTop>=offsets[i]&&(offsets[i+1]===undefined||scrollTop<offsets[i+1])&&this.activate(targets[i])}}
ScrollSpy.prototype.activate=function(target){this.activeTarget=target
this.clear()
var selector=this.selector+'[data-target="'+target+'"],'+
this.selector+'[href="'+target+'"]'
var active=$(selector).parents('li').addClass('active')
if(active.parent('.dropdown-menu').length){active=active.closest('li.dropdown').addClass('active')}
active.trigger('activate.bs.scrollspy')}
ScrollSpy.prototype.clear=function(){$(this.selector).parentsUntil(this.options.target,'.active').removeClass('active')}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.scrollspy')
var options=typeof option=='object'&&option
if(!data)$this.data('bs.scrollspy',(data=new ScrollSpy(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.scrollspy
$.fn.scrollspy=Plugin
$.fn.scrollspy.Constructor=ScrollSpy
$.fn.scrollspy.noConflict=function(){$.fn.scrollspy=old
return this}
$(window).on('load.bs.scrollspy.data-api',function(){$('[data-spy="scroll"]').each(function(){var $spy=$(this)
Plugin.call($spy,$spy.data())})})}(jQuery);+function($){'use strict';function transitionEnd(){var el=document.createElement('bootstrap')
var transEndEventNames={WebkitTransition:'webkitTransitionEnd',MozTransition:'transitionend',OTransition:'oTransitionEnd otransitionend',transition:'transitionend'}
for(var name in transEndEventNames){if(el.style[name]!==undefined){return{end:transEndEventNames[name]}}}
return false}
$.fn.emulateTransitionEnd=function(duration){var called=false
var $el=this
$(this).one('bsTransitionEnd',function(){called=true})
var callback=function(){if(!called)$($el).trigger($.support.transition.end)}
setTimeout(callback,duration)
return this}
$(function(){$.support.transition=transitionEnd()
if(!$.support.transition)return
$.event.special.bsTransitionEnd={bindType:$.support.transition.end,delegateType:$.support.transition.end,handle:function(e){if($(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}}})}(jQuery);
(function($){var PROP_NAME='datepick';function Datepick(){this._uuid=new Date().getTime();this._curInst=null;this._keyEvent=false;this._disabledInputs=[];this._datepickerShowing=false;this._inDialog=false;this.regional=[];this.regional['']={clearText:'Clear',clearStatus:'Erase the current date',closeText:'Close',closeStatus:'Close without change',prevText:'&#x3c;Prev',prevStatus:'Show the previous month',prevBigText:'&#x3c;&#x3c;',prevBigStatus:'Show the previous year',nextText:'Next&#x3e;',nextStatus:'Show the next month',nextBigText:'&#x3e;&#x3e;',nextBigStatus:'Show the next year',currentText:'Today',currentStatus:'Show the current month',monthNames:['January','February','March','April','May','June','July','August','September','October','November','December'],monthNamesShort:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],monthStatus:'Show a different month',yearStatus:'Show a different year',weekHeader:'Wk',weekStatus:'Week of the year',dayNames:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],dayNamesShort:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],dayNamesMin:['Su','Mo','Tu','We','Th','Fr','Sa'],dayStatus:'Set DD as first week day',dateStatus:'Select DD, M d',dateFormat:'mm/dd/yy',firstDay:0,initStatus:'Select a date',isRTL:false,showMonthAfterYear:false,yearSuffix:''};this._defaults={useThemeRoller:false,showOn:'focus',showAnim:'show',showOptions:{},duration:'normal',buttonText:'...',buttonImage:'',buttonImageOnly:false,alignment:'bottom',autoSize:false,defaultDate:null,showDefault:false,appendText:'',closeAtTop:true,mandatory:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,showBigPrevNext:false,stepMonths:1,stepBigMonths:12,gotoCurrent:false,changeMonth:true,changeYear:true,yearRange:'-10:+10',changeFirstDay:false,showOtherMonths:false,selectOtherMonths:false,highlightWeek:false,showWeeks:false,calculateWeek:this.iso8601Week,shortYearCutoff:'+10',showStatus:false,statusForDate:this.dateStatus,minDate:null,maxDate:null,numberOfMonths:1,showCurrentAtPos:0,rangeSelect:false,rangeSeparator:' - ',multiSelect:0,multiSeparator:',',beforeShow:null,beforeShowDay:null,onChangeMonthYear:null,onHover:null,onSelect:null,onClose:null,altField:'',altFormat:'',constrainInput:true};$.extend(this._defaults,this.regional['']);this.dpDiv=$('<div style="display: none;"></div>');}
$.extend(Datepick.prototype,{version:'3.7.0',markerClassName:'hasDatepick',_mainDivId:['datepick-div','ui-datepicker-div'],_mainDivClass:['','ui-datepicker '+'ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'],_inlineClass:['datepick-inline','ui-datepicker-inline ui-datepicker '+'ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'],_multiClass:['datepick-multi','ui-datepicker-multi'],_rtlClass:['datepick-rtl','ui-datepicker-rtl'],_appendClass:['datepick-append','ui-datepicker-append'],_triggerClass:['datepick-trigger','ui-datepicker-trigger'],_dialogClass:['datepick-dialog','ui-datepicker-dialog'],_promptClass:['datepick-prompt','ui-datepicker-prompt'],_disableClass:['datepick-disabled','ui-datepicker-disabled'],_controlClass:['datepick-control','ui-datepicker-header '+'ui-widget-header ui-helper-clearfix ui-corner-all'],_clearClass:['datepick-clear','ui-datepicker-clear'],_closeClass:['datepick-close','ui-datepicker-close'],_linksClass:['datepick-links','ui-datepicker-header '+'ui-widget-header ui-helper-clearfix ui-corner-all'],_prevClass:['datepick-prev','ui-datepicker-prev'],_nextClass:['datepick-next','ui-datepicker-next'],_currentClass:['datepick-current','ui-datepicker-current'],_oneMonthClass:['datepick-one-month','ui-datepicker-group'],_newRowClass:['datepick-new-row','ui-datepicker-row-break'],_monthYearClass:['datepick-header','ui-datepicker-header '+'ui-widget-header ui-helper-clearfix ui-corner-all'],_monthSelectClass:['datepick-new-month','ui-datepicker-month'],_monthClass:['','ui-datepicker-month'],_yearSelectClass:['datepick-new-year','ui-datepicker-year'],_yearClass:['','ui-datepicker-year'],_tableClass:['datepick','ui-datepicker-calendar'],_tableHeaderClass:['datepick-title-row',''],_weekColClass:['datepick-week-col','ui-datepicker-week-col'],_weekRowClass:['datepick-days-row',''],_weekendClass:['datepick-week-end-cell','ui-datepicker-week-end'],_dayClass:['datepick-days-cell',''],_otherMonthClass:['datepick-other-month','ui-datepicker-other-month'],_todayClass:['datepick-today','ui-state-highlight'],_selectableClass:['','ui-state-default'],_unselectableClass:['datepick-unselectable','ui-datepicker-unselectable ui-state-disabled'],_selectedClass:['datepick-current-day','ui-state-active'],_dayOverClass:['datepick-days-cell-over','ui-state-hover'],_weekOverClass:['datepick-week-over','ui-state-hover'],_statusClass:['datepick-status','ui-datepicker-status'],_statusId:['datepick-status-','ui-datepicker-status-'],_coverClass:['datepick-cover','ui-datepicker-cover'],setDefaults:function(settings){extendRemove(this._defaults,settings||{});return this;},_attachDatepick:function(target,settings){if(!target.id)
target.id='dp'+(++this._uuid);var nodeName=target.nodeName.toLowerCase();var inst=this._newInst($(target),(nodeName=='div'||nodeName=='span'));var inlineSettings=($.fn.metadata?$(target).metadata():{});inst.settings=$.extend({},settings||{},inlineSettings||{});if(inst.inline){inst.dpDiv.addClass(this._inlineClass[this._get(inst,'useThemeRoller')?1:0]);this._inlineDatepick(target,inst);}
else
this._connectDatepick(target,inst);},_newInst:function(target,inline){var id=target[0].id.replace(/([:\[\]\.\$])/g,'\\\\$1');return{id:id,input:target,cursorDate:this._daylightSavingAdjust(new Date()),drawMonth:0,drawYear:0,dates:[],inline:inline,dpDiv:(!inline?this.dpDiv:$('<div></div>')),siblings:$([])};},_connectDatepick:function(target,inst){var input=$(target);if(input.hasClass(this.markerClassName))
return;var appendText=this._get(inst,'appendText');var isRTL=this._get(inst,'isRTL');var useTR=this._get(inst,'useThemeRoller')?1:0;if(appendText){var append=$('<span class="'+this._appendClass[useTR]+'">'+appendText+'</span>');input[isRTL?'before':'after'](append);inst.siblings=inst.siblings.add(append);}
var showOn=this._get(inst,'showOn');if(showOn=='focus'||showOn=='both')
input.focus(this._showDatepick);if(showOn=='button'||showOn=='both'){var buttonText=this._get(inst,'buttonText');var buttonImage=this._get(inst,'buttonImage');var trigger=$(this._get(inst,'buttonImageOnly')?$('<img/>').addClass(this._triggerClass[useTR]).attr({src:buttonImage,alt:buttonText,title:buttonText}):$('<button type="button"></button>').addClass(this._triggerClass[useTR]).html(buttonImage==''?buttonText:$('<img/>').attr({src:buttonImage,alt:buttonText,title:buttonText})));input[isRTL?'before':'after'](trigger);inst.siblings=inst.siblings.add(trigger);trigger.click(function(){if($.datepick._datepickerShowing&&$.datepick._lastInput==target)
$.datepick._hideDatepick();else
$.datepick._showDatepick(target);return false;});}
input.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp);if(this._get(inst,'showDefault')&&!inst.input.val()){inst.dates=[this._getDefaultDate(inst)];this._showDate(inst);}
this._autoSize(inst);$.data(target,PROP_NAME,inst);},_autoSize:function(inst){if(this._get(inst,'autoSize')&&!inst.inline){var date=new Date(2009,12-1,20);var dateFormat=this._get(inst,'dateFormat');if(dateFormat.match(/[DM]/)){var findMax=function(names){var max=0;var maxI=0;for(var i=0;i<names.length;i++){if(names[i].length>max){max=names[i].length;maxI=i;}}
return maxI;};date.setMonth(findMax(this._get(inst,(dateFormat.match(/MM/)?'monthNames':'monthNamesShort'))));date.setDate(findMax(this._get(inst,(dateFormat.match(/DD/)?'dayNames':'dayNamesShort')))+20-date.getDay());}
inst.input.attr('size',this._formatDate(inst,date).length);}},_inlineDatepick:function(target,inst){var divSpan=$(target);if(divSpan.hasClass(this.markerClassName))
return;divSpan.addClass(this.markerClassName);$.data(target,PROP_NAME,inst);inst.drawMonth=inst.cursorDate.getMonth();inst.drawYear=inst.cursorDate.getFullYear();$('body').append(inst.dpDiv);this._updateDatepick(inst);inst.dpDiv.width(this._getNumberOfMonths(inst)[1]*$('.'+this._oneMonthClass[this._get(inst,'useThemeRoller')?1:0],inst.dpDiv)[0].offsetWidth);divSpan.append(inst.dpDiv);this._updateAlternate(inst);},_dialogDatepick:function(input,date,onSelect,settings,pos){var inst=this._dialogInst;if(!inst){var id='dp'+(++this._uuid);this._dialogInput=$('<input type="text" id="'+id+'" style="position: absolute; width: 1px; z-index: -1"/>');this._dialogInput.keydown(this._doKeyDown);$('body').append(this._dialogInput);inst=this._dialogInst=this._newInst(this._dialogInput,false);inst.settings={};$.data(this._dialogInput[0],PROP_NAME,inst);}
extendRemove(inst.settings,settings||{});date=(date&&date.constructor==Date?this._formatDate(inst,date):date);this._dialogInput.val(date);this._pos=(pos?(isArray(pos)?pos:[pos.pageX,pos.pageY]):null);if(!this._pos){var scrollX=document.documentElement.scrollLeft||document.body.scrollLeft;var scrollY=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[(document.documentElement.clientWidth/2)-100+scrollX,(document.documentElement.clientHeight/2)-150+scrollY];}
this._dialogInput.css('left',(this._pos[0]+20)+'px').css('top',this._pos[1]+'px');inst.settings.onSelect=onSelect;this._inDialog=true;this.dpDiv.addClass(this._dialogClass[this._get(inst,'useThemeRoller')?1:0]);this._showDatepick(this._dialogInput[0]);if($.blockUI)
$.blockUI(this.dpDiv);$.data(this._dialogInput[0],PROP_NAME,inst);},_destroyDatepick:function(target){var $target=$(target);if(!$target.hasClass(this.markerClassName)){return;}
var inst=$.data(target,PROP_NAME);$.removeData(target,PROP_NAME);if(inst.inline)
$target.removeClass(this.markerClassName).empty();else{$(inst.siblings).remove();$target.removeClass(this.markerClassName).unbind('focus',this._showDatepick).unbind('keydown',this._doKeyDown).unbind('keypress',this._doKeyPress).unbind('keyup',this._doKeyUp);}},_enableDatepick:function(target){var $target=$(target);if(!$target.hasClass(this.markerClassName))
return;var inst=$.data(target,PROP_NAME);var useTR=this._get(inst,'useThemeRoller')?1:0;if(inst.inline)
$target.children('.'+this._disableClass[useTR]).remove().end().find('select').attr('disabled','');else{target.disabled=false;inst.siblings.filter('button.'+this._triggerClass[useTR]).each(function(){this.disabled=false;}).end().filter('img.'+this._triggerClass[useTR]).css({opacity:'1.0',cursor:''});}
this._disabledInputs=$.map(this._disabledInputs,function(value){return(value==target?null:value);});},_disableDatepick:function(target){var $target=$(target);if(!$target.hasClass(this.markerClassName))
return;var inst=$.data(target,PROP_NAME);var useTR=this._get(inst,'useThemeRoller')?1:0;if(inst.inline){var inline=$target.children('.'+this._inlineClass[useTR]);var offset=inline.offset();var relOffset={left:0,top:0};inline.parents().each(function(){if($(this).css('position')=='relative'){relOffset=$(this).offset();return false;}});$target.prepend('<div class="'+this._disableClass[useTR]+'" style="'+'width: '+inline.width()+'px; height: '+inline.height()+'px; left: '+(offset.left-relOffset.left)+'px; top: '+(offset.top-relOffset.top)+'px;"></div>').find('select').attr('disabled','disabled');}
else{target.disabled=true;inst.siblings.filter('button.'+this._triggerClass[useTR]).each(function(){this.disabled=true;}).end().filter('img.'+this._triggerClass[useTR]).css({opacity:'0.5',cursor:'default'});}
this._disabledInputs=$.map(this._disabledInputs,function(value){return(value==target?null:value);});this._disabledInputs.push(target);},_isDisabledDatepick:function(target){return(!target?false:$.inArray(target,this._disabledInputs)>-1);},_getInst:function(target){try{return $.data(target,PROP_NAME);}
catch(err){throw'Missing instance data for this datepicker';}},_optionDatepick:function(target,name,value){var inst=this._getInst(target);if(arguments.length==2&&typeof name=='string'){return(name=='defaults'?$.extend({},$.datepick._defaults):(inst?(name=='all'?$.extend({},inst.settings):this._get(inst,name)):null));}
var settings=name||{};if(typeof name=='string'){settings={};settings[name]=value;}
if(inst){if(this._curInst==inst){this._hideDatepick(null);}
var dates=this._getDateDatepick(target);extendRemove(inst.settings,settings);this._autoSize(inst);extendRemove(inst,{dates:[]});var blank=(!dates||isArray(dates));if(isArray(dates))
for(var i=0;i<dates.length;i++)
if(dates[i]){blank=false;break;}
if(!blank)
this._setDateDatepick(target,dates);if(inst.inline)
$(target).children('div').removeClass(this._inlineClass.join(' ')).addClass(this._inlineClass[this._get(inst,'useThemeRoller')?1:0]);this._updateDatepick(inst);}},_changeDatepick:function(target,name,value){this._optionDatepick(target,name,value);},_refreshDatepick:function(target){var inst=this._getInst(target);if(inst){this._updateDatepick(inst);}},_setDateDatepick:function(target,date,endDate){var inst=this._getInst(target);if(inst){this._setDate(inst,date,endDate);this._updateDatepick(inst);this._updateAlternate(inst);}},_getDateDatepick:function(target){var inst=this._getInst(target);if(inst&&!inst.inline)
this._setDateFromField(inst);return(inst?this._getDate(inst):null);},_doKeyDown:function(event){var inst=$.datepick._getInst(event.target);inst.keyEvent=true;var handled=true;var isRTL=$.datepick._get(inst,'isRTL');var useTR=$.datepick._get(inst,'useThemeRoller')?1:0;if($.datepick._datepickerShowing)
switch(event.keyCode){case 9:$.datepick._hideDatepick(null,'');break;case 13:var sel=$('td.'+$.datepick._dayOverClass[useTR],inst.dpDiv);if(sel.length==0)
sel=$('td.'+$.datepick._selectedClass[useTR]+':first',inst.dpDiv);if(sel[0])
$.datepick._selectDay(sel[0],event.target,inst.cursorDate.getTime());else
$.datepick._hideDatepick(null,$.datepick._get(inst,'duration'));break;case 27:$.datepick._hideDatepick(null,$.datepick._get(inst,'duration'));break;case 33:$.datepick._adjustDate(event.target,(event.ctrlKey?-$.datepick._get(inst,'stepBigMonths'):-$.datepick._get(inst,'stepMonths')),'M');break;case 34:$.datepick._adjustDate(event.target,(event.ctrlKey?+$.datepick._get(inst,'stepBigMonths'):+$.datepick._get(inst,'stepMonths')),'M');break;case 35:if(event.ctrlKey||event.metaKey)
$.datepick._clearDate(event.target);handled=event.ctrlKey||event.metaKey;break;case 36:if(event.ctrlKey||event.metaKey)
$.datepick._gotoToday(event.target);handled=event.ctrlKey||event.metaKey;break;case 37:if(event.ctrlKey||event.metaKey)
$.datepick._adjustDate(event.target,(isRTL?+1:-1),'D');handled=event.ctrlKey||event.metaKey;if(event.originalEvent.altKey)
$.datepick._adjustDate(event.target,(event.ctrlKey?-$.datepick._get(inst,'stepBigMonths'):-$.datepick._get(inst,'stepMonths')),'M');break;case 38:if(event.ctrlKey||event.metaKey)
$.datepick._adjustDate(event.target,-7,'D');handled=event.ctrlKey||event.metaKey;break;case 39:if(event.ctrlKey||event.metaKey)
$.datepick._adjustDate(event.target,(isRTL?-1:+1),'D');handled=event.ctrlKey||event.metaKey;if(event.originalEvent.altKey)
$.datepick._adjustDate(event.target,(event.ctrlKey?+$.datepick._get(inst,'stepBigMonths'):+$.datepick._get(inst,'stepMonths')),'M');break;case 40:if(event.ctrlKey||event.metaKey)
$.datepick._adjustDate(event.target,+7,'D');handled=event.ctrlKey||event.metaKey;break;default:handled=false;}
else if(event.keyCode==36&&event.ctrlKey)
$.datepick._showDatepick(this);else
handled=false;if(handled){event.preventDefault();event.stopPropagation();}
inst.ctrlKey=(event.keyCode<48);return!handled;},_doKeyPress:function(event){var inst=$.datepick._getInst(event.target);if($.datepick._get(inst,'constrainInput')){var chars=$.datepick._possibleChars(inst);var chr=String.fromCharCode(event.keyCode||event.charCode);return inst.ctrlKey||(chr<' '||!chars||chars.indexOf(chr)>-1);}},_doKeyUp:function(event){var inst=$.datepick._getInst(event.target);if(inst.input.val()!=inst.lastVal){try{var separator=($.datepick._get(inst,'rangeSelect')?$.datepick._get(inst,'rangeSeparator'):($.datepick._get(inst,'multiSelect')?$.datepick._get(inst,'multiSeparator'):''));var dates=(inst.input?inst.input.val():'');dates=(separator?dates.split(separator):[dates]);var ok=true;for(var i=0;i<dates.length;i++){if(!$.datepick.parseDate($.datepick._get(inst,'dateFormat'),dates[i],$.datepick._getFormatConfig(inst))){ok=false;break;}}
if(ok){$.datepick._setDateFromField(inst);$.datepick._updateAlternate(inst);$.datepick._updateDatepick(inst);}}
catch(event){}}
return true;},_possibleChars:function(inst){var dateFormat=$.datepick._get(inst,'dateFormat');var chars=($.datepick._get(inst,'rangeSelect')?$.datepick._get(inst,'rangeSeparator'):($.datepick._get(inst,'multiSelect')?$.datepick._get(inst,'multiSeparator'):''));var literal=false;for(var iFormat=0;iFormat<dateFormat.length;iFormat++)
if(literal)
if(dateFormat.charAt(iFormat)=="'"&&!lookAhead("'"))
literal=false;else
chars+=dateFormat.charAt(iFormat);else
switch(dateFormat.charAt(iFormat)){case'd':case'm':case'y':case'@':chars+='0123456789';break;case'D':case'M':return null;case"'":if(lookAhead("'"))
chars+="'";else
literal=true;break;default:chars+=dateFormat.charAt(iFormat);}
return chars;},_doMouseOver:function(td,id,timestamp){var inst=$.datepick._getInst($('#'+id)[0]);var useTR=$.datepick._get(inst,'useThemeRoller')?1:0;$(td).parents('tbody').find('td').removeClass($.datepick._dayOverClass[useTR]).end().end().addClass($.datepick._dayOverClass[useTR]);if($.datepick._get(inst,'highlightWeek'))
$(td).parent().parent().find('tr').removeClass($.datepick._weekOverClass[useTR]).end().end().addClass($.datepick._weekOverClass[useTR]);if($(td).text()){var date=new Date(timestamp);if($.datepick._get(inst,'showStatus')){var status=($.datepick._get(inst,'statusForDate').apply((inst.input?inst.input[0]:null),[date,inst])||$.datepick._get(inst,'initStatus'));$('#'+$.datepick._statusId[useTR]+id).html(status);}
if($.datepick._get(inst,'onHover'))
$.datepick._doHover(td,'#'+id,date.getFullYear(),date.getMonth());}},_doMouseOut:function(td,id){var inst=$.datepick._getInst($('#'+id)[0]);var useTR=$.datepick._get(inst,'useThemeRoller')?1:0;$(td).removeClass($.datepick._dayOverClass[useTR]).removeClass($.datepick._weekOverClass[useTR]);if($.datepick._get(inst,'showStatus'))
$('#'+$.datepick._statusId[useTR]+id).html($.datepick._get(inst,'initStatus'));if($.datepick._get(inst,'onHover'))
$.datepick._doHover(td,'#'+id);},_doHover:function(td,id,year,month){var inst=this._getInst($(id)[0]);var useTR=$.datepick._get(inst,'useThemeRoller')?1:0;var onHover=this._get(inst,'onHover');var date=(year?this._daylightSavingAdjust(new Date(year,month,$(td).find('a').text())):null);onHover.apply((inst.input?inst.input[0]:null),[(date?this._formatDate(inst,date):''),date,inst]);},_showDatepick:function(input){input=input.target||input;if($.datepick._isDisabledDatepick(input)||$.datepick._lastInput==input)
return;var inst=$.datepick._getInst(input);var beforeShow=$.datepick._get(inst,'beforeShow');var useTR=$.datepick._get(inst,'useThemeRoller')?1:0;extendRemove(inst.settings,(beforeShow?beforeShow.apply(input,[input,inst]):{}));$.datepick._hideDatepick(null,'');$.datepick._lastInput=input;$.datepick._setDateFromField(inst);if($.datepick._inDialog)
input.value='';if(!$.datepick._pos){$.datepick._pos=$.datepick._findPos(input);$.datepick._pos[1]+=input.offsetHeight;}
var isFixed=false;$(input).parents().each(function(){isFixed|=$(this).css('position')=='fixed';return!isFixed;});if(isFixed&&$.browser.opera){$.datepick._pos[0]-=document.documentElement.scrollLeft;$.datepick._pos[1]-=document.documentElement.scrollTop;}
var offset={left:$.datepick._pos[0],top:$.datepick._pos[1]};$.datepick._pos=null;inst.dpDiv.css({position:'absolute',display:'block',top:'-1000px'});$.datepick._updateDatepick(inst);inst.dpDiv.width($.datepick._getNumberOfMonths(inst)[1]*$('.'+$.datepick._oneMonthClass[useTR],inst.dpDiv).width());offset=$.datepick._checkOffset(inst,offset,isFixed);inst.dpDiv.css({position:($.datepick._inDialog&&$.blockUI?'static':(isFixed?'fixed':'absolute')),display:'none',left:offset.left+'px',top:offset.top+'px'});if(!inst.inline){var showAnim=$.datepick._get(inst,'showAnim')||'show';var duration=$.datepick._get(inst,'duration');var postProcess=function(){$.datepick._datepickerShowing=true;var borders=$.datepick._getBorders(inst.dpDiv);inst.dpDiv.find('iframe.'+$.datepick._coverClass[useTR]).css({left:-borders[0],top:-borders[1],width:inst.dpDiv.outerWidth(),height:inst.dpDiv.outerHeight()});};if($.effects&&$.effects[showAnim])
inst.dpDiv.show(showAnim,$.datepick._get(inst,'showOptions'),duration,postProcess);else
inst.dpDiv[showAnim](duration,postProcess);if(duration=='')
postProcess();if(inst.input[0].type!='hidden')
inst.input.focus();$.datepick._curInst=inst;}},_updateDatepick:function(inst){var borders=this._getBorders(inst.dpDiv);var useTR=this._get(inst,'useThemeRoller')?1:0;inst.dpDiv.empty().append(this._generateHTML(inst)).find('iframe.'+this._coverClass[useTR]).css({left:-borders[0],top:-borders[1],width:inst.dpDiv.outerWidth(),height:inst.dpDiv.outerHeight()});var numMonths=this._getNumberOfMonths(inst);if(!inst.inline)
inst.dpDiv.attr('id',this._mainDivId[useTR]);if(!inst.inline)inst.dpDiv.attr('class','datepick-inline');inst.dpDiv.removeClass(this._mainDivClass[1-useTR]).addClass(this._mainDivClass[useTR]).removeClass(this._multiClass.join(' ')).addClass(numMonths[0]!=1||numMonths[1]!=1?this._multiClass[useTR]:'').removeClass(this._rtlClass.join(' ')).addClass(this._get(inst,'isRTL')?this._rtlClass[useTR]:'');if(inst.input&&inst.input[0].type!='hidden'&&inst==$.datepick._curInst)
$(inst.input).focus();},_getBorders:function(elem){var convert=function(value){var extra=($.browser.msie?1:0);return{thin:1+extra,medium:3+extra,thick:5+extra}[value]||value;};return[parseFloat(convert(elem.css('border-left-width'))),parseFloat(convert(elem.css('border-top-width')))];},_checkOffset:function(inst,offset,isFixed){var alignment=this._get(inst,'alignment');var isRTL=this._get(inst,'isRTL');var pos=inst.input?this._findPos(inst.input[0]):null;var browserWidth=document.documentElement.clientWidth;var browserHeight=document.documentElement.clientHeight;if(browserWidth==0)
return offset;var scrollX=document.documentElement.scrollLeft||document.body.scrollLeft;var scrollY=document.documentElement.scrollTop||document.body.scrollTop;var above=pos[1]-(this._inDialog?0:inst.dpDiv.outerHeight())-
(isFixed&&$.browser.opera?document.documentElement.scrollTop:0);var below=offset.top;var alignL=offset.left;var alignR=pos[0]+(inst.input?inst.input.outerWidth():0)-inst.dpDiv.outerWidth()-
(isFixed&&$.browser.opera?document.documentElement.scrollLeft:0);var tooWide=(offset.left+inst.dpDiv.outerWidth()-scrollX)>browserWidth;var tooHigh=(offset.top+inst.dpDiv.outerHeight()-scrollY)>browserHeight;if(alignment=='topLeft'){offset={left:alignL,top:above};}
else if(alignment=='topRight'){offset={left:alignR,top:above};}
else if(alignment=='bottomLeft'){offset={left:alignL,top:below};}
else if(alignment=='bottomRight'){offset={left:alignR,top:below};}
else if(alignment=='top'){offset={left:(isRTL||tooWide?alignR:alignL),top:above};}
else{offset={left:(isRTL||tooWide?alignR:alignL),top:(tooHigh?above:below)};}
offset.left=Math.max((isFixed?0:scrollX),offset.left-(isFixed?scrollX:0));offset.top=Math.max((isFixed?0:scrollY),offset.top-(isFixed?scrollY:0));return offset;},_findPos:function(elem){while(elem&&(elem.type=='hidden'||elem.nodeType!=1)){elem=elem.nextSibling;}
var position=$(elem).offset();return[position.left,position.top];},_hideDatepick:function(input,duration){var inst=this._curInst;if(!inst||(input&&inst!=$.data(input,PROP_NAME)))
return false;var rangeSelect=this._get(inst,'rangeSelect');if(rangeSelect&&inst.stayOpen)
this._updateInput('#'+inst.id);inst.stayOpen=false;if(this._datepickerShowing){duration=(duration!=null?duration:this._get(inst,'duration'));var showAnim=this._get(inst,'showAnim');var postProcess=function(){$.datepick._tidyDialog(inst);};if(duration!=''&&$.effects&&$.effects[showAnim])
inst.dpDiv.hide(showAnim,$.datepick._get(inst,'showOptions'),duration,postProcess);else
inst.dpDiv[(duration==''?'hide':(showAnim=='slideDown'?'slideUp':(showAnim=='fadeIn'?'fadeOut':'hide')))](duration,postProcess);if(duration=='')
this._tidyDialog(inst);var onClose=this._get(inst,'onClose');if(onClose)
onClose.apply((inst.input?inst.input[0]:null),[(inst.input?inst.input.val():''),this._getDate(inst),inst]);this._datepickerShowing=false;this._lastInput=null;inst.settings.prompt=null;if(this._inDialog){this._dialogInput.css({position:'absolute',left:'0',top:'-100px'});this.dpDiv.removeClass(this._dialogClass[this._get(inst,'useThemeRoller')?1:0]);if($.blockUI){$.unblockUI();$('body').append(this.dpDiv);}}
this._inDialog=false;}
this._curInst=null;return false;},_tidyDialog:function(inst){var useTR=this._get(inst,'useThemeRoller')?1:0;inst.dpDiv.removeClass(this._dialogClass[useTR]).unbind('.datepick');$('.'+this._promptClass[useTR],inst.dpDiv).remove();},_checkExternalClick:function(event){if(!$.datepick._curInst)
return;var $target=$(event.target);var useTR=$.datepick._get($.datepick._curInst,'useThemeRoller')?1:0;if(!$target.parents().andSelf().is('#'+$.datepick._mainDivId[useTR])&&!$target.hasClass($.datepick.markerClassName)&&!$target.parents().andSelf().hasClass($.datepick._triggerClass[useTR])&&$.datepick._datepickerShowing&&!($.datepick._inDialog&&$.blockUI))
$.datepick._hideDatepick(null,'');},_adjustDate:function(id,offset,period){var inst=this._getInst($(id)[0]);this._adjustInstDate(inst,offset+
(period=='M'?this._get(inst,'showCurrentAtPos'):0),period);this._updateDatepick(inst);return false;},_gotoToday:function(id){var target=$(id);var inst=this._getInst(target[0]);if(this._get(inst,'gotoCurrent')&&inst.dates[0])
inst.cursorDate=new Date(inst.dates[0].getTime());else
inst.cursorDate=this._daylightSavingAdjust(new Date());inst.drawMonth=inst.cursorDate.getMonth();inst.drawYear=inst.cursorDate.getFullYear();this._notifyChange(inst);this._adjustDate(target);return false;},_selectMonthYear:function(id,select,period){var target=$(id);var inst=this._getInst(target[0]);inst.selectingMonthYear=false;var value=parseInt(select.options[select.selectedIndex].value,10);inst['selected'+(period=='M'?'Month':'Year')]=inst['draw'+(period=='M'?'Month':'Year')]=value;inst.cursorDate.setDate(Math.min(inst.cursorDate.getDate(),$.datepick._getDaysInMonth(inst.drawYear,inst.drawMonth)));inst.cursorDate['set'+(period=='M'?'Month':'FullYear')](value);this._notifyChange(inst);this._adjustDate(target);},_clickMonthYear:function(id){var inst=this._getInst($(id)[0]);if(inst.input&&inst.selectingMonthYear&&!$.browser.msie)
inst.input.focus();inst.selectingMonthYear=!inst.selectingMonthYear;},_changeFirstDay:function(id,day){var inst=this._getInst($(id)[0]);inst.settings.firstDay=day;this._updateDatepick(inst);return false;},_selectDay:function(td,id,timestamp){var inst=this._getInst($(id)[0]);var useTR=this._get(inst,'useThemeRoller')?1:0;if($(td).hasClass(this._unselectableClass[useTR]))
return false;var rangeSelect=this._get(inst,'rangeSelect');var multiSelect=this._get(inst,'multiSelect');if(rangeSelect)
inst.stayOpen=!inst.stayOpen;else if(multiSelect)
inst.stayOpen=true;if(inst.stayOpen){$('.datepick td',inst.dpDiv).removeClass(this._selectedClass[useTR]);$(td).addClass(this._selectedClass[useTR]);}
inst.cursorDate=this._daylightSavingAdjust(new Date(timestamp));var date=new Date(inst.cursorDate.getTime());if(rangeSelect&&!inst.stayOpen)
inst.dates[1]=date;else if(multiSelect){var pos=-1;for(var i=0;i<inst.dates.length;i++)
if(inst.dates[i]&&date.getTime()==inst.dates[i].getTime()){pos=i;break;}
if(pos>-1)
inst.dates.splice(pos,1);else if(inst.dates.length<multiSelect){if(inst.dates[0])
inst.dates.push(date);else
inst.dates=[date];inst.stayOpen=(inst.dates.length!=multiSelect);}}
else
inst.dates=[date];this._updateInput(id);if(inst.stayOpen)
this._updateDatepick(inst);else if((rangeSelect||multiSelect)&&inst.inline)
this._updateDatepick(inst);return false;},_clearDate:function(id){var target=$(id);var inst=this._getInst(target[0]);if(this._get(inst,'mandatory'))
return false;inst.stayOpen=false;inst.dates=(this._get(inst,'showDefault')?[this._getDefaultDate(inst)]:[]);this._updateInput(target);return false;},_updateInput:function(id){var inst=this._getInst($(id)[0]);var dateStr=this._showDate(inst);this._updateAlternate(inst);var onSelect=this._get(inst,'onSelect');if(onSelect)
onSelect.apply((inst.input?inst.input[0]:null),[dateStr,this._getDate(inst),inst]);else if(inst.input)
inst.input.trigger('change');if(inst.inline)
this._updateDatepick(inst);else if(!inst.stayOpen){this._hideDatepick(null,this._get(inst,'duration'));this._lastInput=inst.input[0];if(typeof(inst.input[0])!='object')
inst.input.focus();this._lastInput=null;}
return false;},_showDate:function(inst){var dateStr='';if(inst.input){dateStr=(inst.dates.length==0?'':this._formatDate(inst,inst.dates[0]));if(dateStr){if(this._get(inst,'rangeSelect'))
dateStr+=this._get(inst,'rangeSeparator')+
this._formatDate(inst,inst.dates[1]||inst.dates[0]);else if(this._get(inst,'multiSelect'))
for(var i=1;i<inst.dates.length;i++)
dateStr+=this._get(inst,'multiSeparator')+
this._formatDate(inst,inst.dates[i]);}
inst.input.val(dateStr);}
return dateStr;},_updateAlternate:function(inst){var altField=this._get(inst,'altField');if(altField){var altFormat=this._get(inst,'altFormat')||this._get(inst,'dateFormat');var settings=this._getFormatConfig(inst);var dateStr=this.formatDate(altFormat,inst.dates[0],settings);if(dateStr&&this._get(inst,'rangeSelect'))
dateStr+=this._get(inst,'rangeSeparator')+this.formatDate(altFormat,inst.dates[1]||inst.dates[0],settings);else if(this._get(inst,'multiSelect'))
for(var i=1;i<inst.dates.length;i++)
dateStr+=this._get(inst,'multiSeparator')+
this.formatDate(altFormat,inst.dates[i],settings);$(altField).val(dateStr);}},noWeekends:function(date){return[(date.getDay()||7)<6,''];},iso8601Week:function(date){var checkDate=new Date(date.getTime());checkDate.setDate(checkDate.getDate()+4-(checkDate.getDay()||7));var time=checkDate.getTime();checkDate.setMonth(0);checkDate.setDate(1);return Math.floor(Math.round((time-checkDate)/86400000)/7)+1;},dateStatus:function(date,inst){return $.datepick.formatDate($.datepick._get(inst,'dateStatus'),date,$.datepick._getFormatConfig(inst));},parseDate:function(format,value,settings){if(format==null||value==null)
throw'Invalid arguments';value=(typeof value=='object'?value.toString():value+'');if(value=='')
return null;settings=settings||{};var shortYearCutoff=settings.shortYearCutoff||this._defaults.shortYearCutoff;shortYearCutoff=(typeof shortYearCutoff!='string'?shortYearCutoff:new Date().getFullYear()%100+parseInt(shortYearCutoff,10));var dayNamesShort=settings.dayNamesShort||this._defaults.dayNamesShort;var dayNames=settings.dayNames||this._defaults.dayNames;var monthNamesShort=settings.monthNamesShort||this._defaults.monthNamesShort;var monthNames=settings.monthNames||this._defaults.monthNames;var year=-1;var month=-1;var day=-1;var doy=-1;var literal=false;var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);if(matches)
iFormat++;return matches;};var getNumber=function(match){lookAhead(match);var size=(match=='@'?14:(match=='!'?20:(match=='y'?4:(match=='o'?3:2))));var digits=new RegExp('^\\d{1,'+size+'}');var num=value.substring(iValue).match(digits);if(!num)
throw'Missing number at position '+iValue;iValue+=num[0].length;return parseInt(num[0],10);};var getName=function(match,shortNames,longNames){var names=(lookAhead(match)?longNames:shortNames);for(var i=0;i<names.length;i++){if(value.substr(iValue,names[i].length)==names[i]){iValue+=names[i].length;return i+1;}}
throw'Unknown name at position '+iValue;};var checkLiteral=function(){if(value.charAt(iValue)!=format.charAt(iFormat))
throw'Unexpected literal at position '+iValue;iValue++;};var iValue=0;for(var iFormat=0;iFormat<format.length;iFormat++){if(literal)
if(format.charAt(iFormat)=="'"&&!lookAhead("'"))
literal=false;else
checkLiteral();else
switch(format.charAt(iFormat)){case'd':day=getNumber('d');break;case'D':getName('D',dayNamesShort,dayNames);break;case'o':doy=getNumber('o');break;case'w':getNumber('w');break;case'm':month=getNumber('m');break;case'M':month=getName('M',monthNamesShort,monthNames);break;case'y':year=getNumber('y');break;case'@':var date=new Date(getNumber('@'));year=date.getFullYear();month=date.getMonth()+1;day=date.getDate();break;case'!':var date=new Date((getNumber('!')-this._ticksTo1970)/10000);year=date.getFullYear();month=date.getMonth()+1;day=date.getDate();break;case"'":if(lookAhead("'"))
checkLiteral();else
literal=true;break;default:checkLiteral();}}
if(iValue<value.length)
throw'Additional text found at end';if(year==-1)
year=new Date().getFullYear();else if(year<100)
year+=(shortYearCutoff==-1?1900:new Date().getFullYear()-
new Date().getFullYear()%100-(year<=shortYearCutoff?0:100));if(doy>-1){month=1;day=doy;do{var dim=this._getDaysInMonth(year,month-1);if(day<=dim)
break;month++;day-=dim;}while(true);}
var date=this._daylightSavingAdjust(new Date(year,month-1,day));if(date.getFullYear()!=year||date.getMonth()+1!=month||date.getDate()!=day)
throw'Invalid date';return date;},ATOM:'yy-mm-dd',COOKIE:'D, dd M yy',ISO_8601:'yy-mm-dd',RFC_822:'D, d M y',RFC_850:'DD, dd-M-y',RFC_1036:'D, d M y',RFC_1123:'D, d M yy',RFC_2822:'D, d M yy',RSS:'D, d M y',TICKS:'!',TIMESTAMP:'@',W3C:'yy-mm-dd',_ticksTo1970:(((1970-1)*365+Math.floor(1970/4)-Math.floor(1970/100)+
Math.floor(1970/400))*24*60*60*10000000),formatDate:function(format,date,settings){if(!date)
return'';settings=settings||{};var dayNamesShort=settings.dayNamesShort||this._defaults.dayNamesShort;var dayNames=settings.dayNames||this._defaults.dayNames;var monthNamesShort=settings.monthNamesShort||this._defaults.monthNamesShort;var monthNames=settings.monthNames||this._defaults.monthNames;var calculateWeek=settings.calculateWeek||this._defaults.calculateWeek;var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);if(matches)
iFormat++;return matches;};var formatNumber=function(match,value,len){var num=''+value;if(lookAhead(match))
while(num.length<len)
num='0'+num;return num;};var formatName=function(match,value,shortNames,longNames){return(lookAhead(match)?longNames[value]:shortNames[value]);};var output='';var literal=false;if(date)
for(var iFormat=0;iFormat<format.length;iFormat++){if(literal)
if(format.charAt(iFormat)=="'"&&!lookAhead("'"))
literal=false;else
output+=format.charAt(iFormat);else
switch(format.charAt(iFormat)){case'd':output+=formatNumber('d',date.getDate(),2);break;case'D':output+=formatName('D',date.getDay(),dayNamesShort,dayNames);break;case'o':output+=formatNumber('o',(date.getTime()-new Date(date.getFullYear(),0,0).getTime())/86400000,3);break;case'w':output+=formatNumber('w',calculateWeek(date),2);break;case'm':output+=formatNumber('m',date.getMonth()+1,2);break;case'M':output+=formatName('M',date.getMonth(),monthNamesShort,monthNames);break;case'y':output+=(lookAhead('y')?date.getFullYear():(date.getFullYear()%100<10?'0':'')+date.getFullYear()%100);break;case'@':output+=date.getTime();break;case'!':output+=date.getTime()*10000+this._ticksTo1970;break;case"'":if(lookAhead("'"))
output+="'";else
literal=true;break;default:output+=format.charAt(iFormat);}}
return output;},_get:function(inst,name){return inst.settings[name]!==undefined?inst.settings[name]:this._defaults[name];},_setDateFromField:function(inst){var dateFormat=this._get(inst,'dateFormat');var rangeSelect=this._get(inst,'rangeSelect');var multiSelect=this._get(inst,'multiSelect');inst.lastVal=(inst.input?inst.input.val():'');var dates=inst.lastVal;dates=(rangeSelect?dates.split(this._get(inst,'rangeSeparator')):(multiSelect?dates.split(this._get(inst,'multiSeparator')):[dates]));inst.dates=[];var settings=this._getFormatConfig(inst);for(var i=0;i<dates.length;i++)
try{inst.dates[i]=this.parseDate(dateFormat,dates[i],settings);}
catch(event){inst.dates[i]=null;}
for(var i=inst.dates.length-1;i>=0;i--)
if(!inst.dates[i])
inst.dates.splice(i,1);if(rangeSelect&&inst.dates.length<2)
inst.dates[1]=inst.dates[0];if(multiSelect&&inst.dates.length>multiSelect)
inst.dates.splice(multiSelect,inst.dates.length);inst.cursorDate=new Date((inst.dates[0]||this._getDefaultDate(inst)).getTime());inst.drawMonth=inst.cursorDate.getMonth();inst.drawYear=inst.cursorDate.getFullYear();this._adjustInstDate(inst);},_getDefaultDate:function(inst){return this._restrictMinMax(inst,this._determineDate(inst,this._get(inst,'defaultDate'),new Date()));},_determineDate:function(inst,date,defaultDate){var offsetNumeric=function(offset){var date=new Date();date.setDate(date.getDate()+offset);return date;};var offsetString=function(offset){try{return $.datepick.parseDate($.datepick._get(inst,'dateFormat'),offset,$.datepick._getFormatConfig(inst));}
catch(e){}
var date=(offset.toLowerCase().match(/^c/)?$.datepick._getDate(inst):null)||new Date();var year=date.getFullYear();var month=date.getMonth();var day=date.getDate();var pattern=/([+-]?[0-9]+)\s*(d|w|m|y)?/g;var matches=pattern.exec(offset.toLowerCase());while(matches){switch(matches[2]||'d'){case'd':day+=parseInt(matches[1],10);break;case'w':day+=parseInt(matches[1],10)*7;break;case'm':month+=parseInt(matches[1],10);day=Math.min(day,$.datepick._getDaysInMonth(year,month));break;case'y':year+=parseInt(matches[1],10);day=Math.min(day,$.datepick._getDaysInMonth(year,month));break;}
matches=pattern.exec(offset.toLowerCase());}
return new Date(year,month,day);};date=(date==null?defaultDate:(typeof date=='string'?offsetString(date):(typeof date=='number'?(isNaN(date)||date==Infinity||date==-Infinity?defaultDate:offsetNumeric(date)):date)));date=(date&&(date.toString()=='Invalid Date'||date.toString()=='NaN')?defaultDate:date);if(date){date.setHours(0);date.setMinutes(0);date.setSeconds(0);date.setMilliseconds(0);}
return this._daylightSavingAdjust(date);},_daylightSavingAdjust:function(date){if(!date)return null;date.setHours(date.getHours()>12?date.getHours()+2:0);return date;},_setDate:function(inst,date,endDate){date=(!date?[]:(isArray(date)?date:[date]));if(endDate)
date.push(endDate);var clear=(date.length==0);var origMonth=inst.cursorDate.getMonth();var origYear=inst.cursorDate.getFullYear();inst.dates=[this._restrictMinMax(inst,this._determineDate(inst,date[0],new Date()))];inst.cursorDate=new Date(inst.dates[0].getTime());inst.drawMonth=inst.cursorDate.getMonth();inst.drawYear=inst.cursorDate.getFullYear();if(this._get(inst,'rangeSelect'))
inst.dates[1]=(date.length<1?inst.dates[0]:this._restrictMinMax(inst,this._determineDate(inst,date[1],null)));else if(this._get(inst,'multiSelect'))
for(var i=1;i<date.length;i++)
inst.dates[i]=this._restrictMinMax(inst,this._determineDate(inst,date[i],null));if(origMonth!=inst.cursorDate.getMonth()||origYear!=inst.cursorDate.getFullYear())
this._notifyChange(inst);this._adjustInstDate(inst);this._showDate(inst);},_getDate:function(inst){var startDate=(inst.input&&inst.input.val()==''?null:inst.dates[0]);if(this._get(inst,'rangeSelect'))
return(startDate?[inst.dates[0],inst.dates[1]||inst.dates[0]]:[null,null]);else if(this._get(inst,'multiSelect'))
return inst.dates.slice(0,inst.dates.length);else
return startDate;},_generateHTML:function(inst){var today=new Date();today=this._daylightSavingAdjust(new Date(today.getFullYear(),today.getMonth(),today.getDate()));var showStatus=this._get(inst,'showStatus');var initStatus=this._get(inst,'initStatus')||'&#xa0;';var isRTL=this._get(inst,'isRTL');var useTR=this._get(inst,'useThemeRoller')?1:0;var clear=(this._get(inst,'mandatory')?'':'<div class="'+this._clearClass[useTR]+'"><a href="javascript:void(0)" '+'onclick="jQuery.datepick._clearDate(\'#'+inst.id+'\');"'+
this._addStatus(useTR,showStatus,inst.id,this._get(inst,'clearStatus'),initStatus)+'>'+this._get(inst,'clearText')+'</a></div>');var controls='<div class="'+this._controlClass[useTR]+'">'+(isRTL?'':clear)+'<div class="'+this._closeClass[useTR]+'"><a href="javascript:void(0)" '+'onclick="jQuery.datepick._hideDatepick();"'+
this._addStatus(useTR,showStatus,inst.id,this._get(inst,'closeStatus'),initStatus)+'>'+this._get(inst,'closeText')+'</a></div>'+(isRTL?clear:'')+'</div>';var prompt=this._get(inst,'prompt');var closeAtTop=this._get(inst,'closeAtTop');var hideIfNoPrevNext=this._get(inst,'hideIfNoPrevNext');var navigationAsDateFormat=this._get(inst,'navigationAsDateFormat');var showBigPrevNext=this._get(inst,'showBigPrevNext');var numMonths=this._getNumberOfMonths(inst);var showCurrentAtPos=this._get(inst,'showCurrentAtPos');var stepMonths=this._get(inst,'stepMonths');var stepBigMonths=this._get(inst,'stepBigMonths');var isMultiMonth=(numMonths[0]!=1||numMonths[1]!=1);var minDate=this._getMinMaxDate(inst,'min',true);var maxDate=this._getMinMaxDate(inst,'max');var drawMonth=inst.drawMonth-showCurrentAtPos;var drawYear=inst.drawYear;if(drawMonth<0){drawMonth+=12;drawYear--;}
if(maxDate){var maxDraw=this._daylightSavingAdjust(new Date(maxDate.getFullYear(),maxDate.getMonth()-(numMonths[0]*numMonths[1])+1,maxDate.getDate()));maxDraw=(minDate&&maxDraw<minDate?minDate:maxDraw);while(this._daylightSavingAdjust(new Date(drawYear,drawMonth,1))>maxDraw){drawMonth--;if(drawMonth<0){drawMonth=11;drawYear--;}}}
inst.drawMonth=drawMonth;inst.drawYear=drawYear;var prevText=this._get(inst,'prevText');prevText=(!navigationAsDateFormat?prevText:this.formatDate(prevText,this._daylightSavingAdjust(new Date(drawYear,drawMonth-stepMonths,1)),this._getFormatConfig(inst)));var prevBigText=(showBigPrevNext?this._get(inst,'prevBigText'):'');prevBigText=(!navigationAsDateFormat?prevBigText:this.formatDate(prevBigText,this._daylightSavingAdjust(new Date(drawYear,drawMonth-stepBigMonths,1)),this._getFormatConfig(inst)));var prev='<div class="'+this._prevClass[useTR]+'">'+
(this._canAdjustMonth(inst,-1,drawYear,drawMonth)?(showBigPrevNext?'<a href="javascript:void(0)" onclick="jQuery.datepick._adjustDate(\'#'+
inst.id+'\', -'+stepBigMonths+', \'M\');"'+
this._addStatus(useTR,showStatus,inst.id,this._get(inst,'prevBigStatus'),initStatus)+'>'+prevBigText+'</a>':'')+'<a href="javascript:void(0)" onclick="jQuery.datepick._adjustDate(\'#'+
inst.id+'\', -'+stepMonths+', \'M\');"'+
this._addStatus(useTR,showStatus,inst.id,this._get(inst,'prevStatus'),initStatus)+'>'+prevText+'</a>':(hideIfNoPrevNext?'&#xa0;':(showBigPrevNext?'<label>'+prevBigText+'</label>':'')+'<label>'+prevText+'</label>'))+'</div>';var nextText=this._get(inst,'nextText');nextText=(!navigationAsDateFormat?nextText:this.formatDate(nextText,this._daylightSavingAdjust(new Date(drawYear,drawMonth+stepMonths,1)),this._getFormatConfig(inst)));var nextBigText=(showBigPrevNext?this._get(inst,'nextBigText'):'');nextBigText=(!navigationAsDateFormat?nextBigText:this.formatDate(nextBigText,this._daylightSavingAdjust(new Date(drawYear,drawMonth+stepBigMonths,1)),this._getFormatConfig(inst)));var next='<div class="'+this._nextClass[useTR]+'">'+
(this._canAdjustMonth(inst,+1,drawYear,drawMonth)?'<a href="javascript:void(0)" onclick="jQuery.datepick._adjustDate(\'#'+
inst.id+'\', +'+stepMonths+', \'M\');"'+
this._addStatus(useTR,showStatus,inst.id,this._get(inst,'nextStatus'),initStatus)+'>'+nextText+'</a>'+
(showBigPrevNext?'<a href="javascript:void(0)" onclick="jQuery.datepick._adjustDate(\'#'+
inst.id+'\', +'+stepBigMonths+', \'M\');"'+
this._addStatus(useTR,showStatus,inst.id,this._get(inst,'nextBigStatus'),initStatus)+'>'+nextBigText+'</a>':''):(hideIfNoPrevNext?'&#xa0;':'<label>'+nextText+'</label>'+
(showBigPrevNext?'<label>'+nextBigText+'</label>':'')))+'</div>';var currentText=this._get(inst,'currentText');var gotoDate=(this._get(inst,'gotoCurrent')&&inst.dates[0]?inst.dates[0]:today);currentText=(!navigationAsDateFormat?currentText:this.formatDate(currentText,gotoDate,this._getFormatConfig(inst)));var html=(closeAtTop&&!inst.inline?controls:'');html+='<div class="calendar-links">'+(isRTL?next:prev);html+=(isRTL?prev:next)+'</div>';var firstDay=parseInt(this._get(inst,'firstDay'),10);firstDay=(isNaN(firstDay)?0:firstDay);var changeFirstDay=this._get(inst,'changeFirstDay');var dayNames=this._get(inst,'dayNames');var dayNamesShort=this._get(inst,'dayNamesShort');var dayNamesMin=this._get(inst,'dayNamesMin');var monthNames=this._get(inst,'monthNames');var beforeShowDay=this._get(inst,'beforeShowDay');var showOtherMonths=this._get(inst,'showOtherMonths');var selectOtherMonths=this._get(inst,'selectOtherMonths');var showWeeks=this._get(inst,'showWeeks');var calculateWeek=this._get(inst,'calculateWeek')||this.iso8601Week;var weekStatus=this._get(inst,'weekStatus');var status=(showStatus?this._get(inst,'dayStatus')||initStatus:'');var dateStatus=this._get(inst,'statusForDate')||this.dateStatus;var defaultDate=this._getDefaultDate(inst);for(var row=0;row<numMonths[0];row++){for(var col=0;col<numMonths[1];col++){var cursorDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,inst.cursorDate.getDate()));html+='<div class="'+this._oneMonthClass[useTR]+
(col==0&&!useTR?' '+this._newRowClass[useTR]:'')+'">'+
this._generateMonthYearHeader(inst,drawMonth,drawYear,minDate,maxDate,cursorDate,row>0||col>0,useTR,showStatus,initStatus,monthNames)+'<table class="'+this._tableClass[useTR]+'" cellpadding="0" cellspacing="0"><thead>'+'<tr class="'+this._tableHeaderClass[useTR]+'">'+(showWeeks?'<th'+
this._addStatus(useTR,showStatus,inst.id,weekStatus,initStatus)+'>'+
this._get(inst,'weekHeader')+'</th>':'');for(var dow=0;dow<7;dow++){var day=(dow+firstDay)%7;var dayStatus=(!showStatus||!changeFirstDay?'':status.replace(/DD/,dayNames[day]).replace(/D/,dayNamesShort[day]));html+='<th'+((dow+firstDay+6)%7<5?'':' class="'+this._weekendClass[useTR]+'"')+'>'+
(!changeFirstDay?'<span'+
this._addStatus(useTR,showStatus,inst.id,dayNames[day],initStatus):'<a href="javascript:void(0)" onclick="jQuery.datepick._changeFirstDay(\'#'+
inst.id+'\', '+day+');"'+
this._addStatus(useTR,showStatus,inst.id,dayStatus,initStatus))+' title="'+dayNames[day]+'">'+
dayNamesMin[day]+(changeFirstDay?'</a>':'</span>')+'</th>';}
html+='</tr></thead><tbody>';var daysInMonth=this._getDaysInMonth(drawYear,drawMonth);if(drawYear==inst.cursorDate.getFullYear()&&drawMonth==inst.cursorDate.getMonth())
inst.cursorDate.setDate(Math.min(inst.cursorDate.getDate(),daysInMonth));var leadDays=(this._getFirstDayOfMonth(drawYear,drawMonth)-firstDay+7)%7;var numRows=(isMultiMonth?6:Math.ceil((leadDays+daysInMonth)/7));var printDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,1-leadDays));for(var dRow=0;dRow<numRows;dRow++){html+='<tr class="'+this._weekRowClass[useTR]+'">'+
(showWeeks?'<td class="'+this._weekColClass[useTR]+'"'+
this._addStatus(useTR,showStatus,inst.id,weekStatus,initStatus)+'>'+
calculateWeek(printDate)+'</td>':'');for(var dow=0;dow<7;dow++){var daySettings=(beforeShowDay?beforeShowDay.apply((inst.input?inst.input[0]:null),[printDate]):[true,'']);var otherMonth=(printDate.getMonth()!=drawMonth);var unselectable=(otherMonth&&!selectOtherMonths)||!daySettings[0]||(minDate&&printDate<minDate)||(maxDate&&printDate>maxDate);var selected=(this._get(inst,'rangeSelect')&&inst.dates[0]&&printDate.getTime()>=inst.dates[0].getTime()&&printDate.getTime()<=(inst.dates[1]||inst.dates[0]).getTime());for(var i=0;i<inst.dates.length;i++)
selected=selected||(inst.dates[i]&&printDate.getTime()==inst.dates[i].getTime());var empty=otherMonth&&!showOtherMonths;html+='<td data-content="" class="'+this._dayClass[useTR]+
((dow+firstDay+6)%7>=5?' '+this._weekendClass[useTR]:'')+
(otherMonth?' '+this._otherMonthClass[useTR]:'')+
((printDate.getTime()==cursorDate.getTime()&&drawMonth==inst.cursorDate.getMonth()&&inst.keyEvent)||(defaultDate.getTime()==printDate.getTime()&&defaultDate.getTime()==cursorDate.getTime())?' '+$.datepick._dayOverClass[useTR]:'')+
(unselectable?' '+this._unselectableClass[useTR]:' '+this._selectableClass[useTR])+
(empty?'':' '+daySettings[1]+
(selected?' '+this._selectedClass[useTR]:'')+
(printDate.getTime()==today.getTime()?' '+this._todayClass[useTR]:''))+'"'+
(!empty&&daySettings[2]?' title="'+daySettings[2]+'"':'')+
(unselectable?'':' onmouseover="'+'jQuery.datepick._doMouseOver(this,\''+
inst.id+'\','+printDate.getTime()+')"'+' onmouseout="jQuery.datepick._doMouseOut(this,\''+inst.id+'\')"'+' onclick="jQuery.datepick._selectDay(this,\'#'+
inst.id+'\','+printDate.getTime()+')"')+'>'+'<div class="check-in-div"><div></div></div>'+'<div class="check-out-div"><div></div></div>'+'<div class="date-content-top">'+
(unselectable?'':((typeof(wpbc_show_date_info_top)=='function')?wpbc_show_date_info_top(inst.id,printDate.getTime()):''))+'</div>'+
(empty?'&#xa0;':(unselectable?'<span>'+printDate.getDate()+'</span>':'<a>'+printDate.getDate()+'</a>'))+'<div class="date-content-bottom">'+
(unselectable?'':((typeof(wpbc_show_date_info_bottom)=='function')?wpbc_show_date_info_bottom(inst.id,printDate.getTime()):''))+'</div>'+'</td>';printDate.setDate(printDate.getDate()+1);printDate=this._daylightSavingAdjust(printDate);}
html+='</tr>';}
drawMonth++;if(drawMonth>11){drawMonth=0;drawYear++;}
html+='</tbody></table></div>';}
if(useTR)
html+='<div class="'+this._newRowClass[useTR]+'"></div>';}
html+=(showStatus?'<div style="clear: both;"></div><div id="'+this._statusId[useTR]+
inst.id+'" class="'+this._statusClass[useTR]+'">'+initStatus+'</div>':'')+
(!closeAtTop&&!inst.inline?controls:'')+'<div style="clear: both;"></div>'+
($.browser.msie&&parseInt($.browser.version,10)<7&&!inst.inline?'<iframe src="javascript:false;" class="'+this._coverClass[useTR]+'"></iframe>':'');inst.keyEvent=false;return html;},_generateMonthYearHeader:function(inst,drawMonth,drawYear,minDate,maxDate,cursorDate,secondary,useTR,showStatus,initStatus,monthNames){var minDraw=this._daylightSavingAdjust(new Date(drawYear,drawMonth,1));minDate=(minDate&&minDraw<minDate?minDraw:minDate);var changeMonth=this._get(inst,'changeMonth');var changeYear=this._get(inst,'changeYear');var showMonthAfterYear=this._get(inst,'showMonthAfterYear');var html='<div class="'+this._monthYearClass[useTR]+'">';var monthHtml='';if(secondary||!changeMonth)
monthHtml+='<span class="'+this._monthClass[useTR]+'">'+
monthNames[drawMonth]+'</span>';else{var inMinYear=(minDate&&minDate.getFullYear()==drawYear);var inMaxYear=(maxDate&&maxDate.getFullYear()==drawYear);monthHtml+='<select class="'+this._monthSelectClass[useTR]+'" '+'onchange="jQuery.datepick._selectMonthYear(\'#'+inst.id+'\', this, \'M\');" '+'onclick="jQuery.datepick._clickMonthYear(\'#'+inst.id+'\');"'+
this._addStatus(useTR,showStatus,inst.id,this._get(inst,'monthStatus'),initStatus)+'>';for(var month=0;month<12;month++){if((!inMinYear||month>=minDate.getMonth())&&(!inMaxYear||month<=maxDate.getMonth()))
monthHtml+='<option value="'+month+'"'+
(month==drawMonth?' selected="selected"':'')+'>'+monthNames[month]+'</option>';}
monthHtml+='</select>';}
if(!showMonthAfterYear)
html+=monthHtml+(secondary||!changeMonth||!changeYear?'&#xa0;':'');if(secondary||!changeYear)
html+='<span class="'+this._yearClass[useTR]+'">'+drawYear+'</span>';else{var years=this._get(inst,'yearRange').split(':');var year=0;var endYear=0;if(years.length!=2){year=drawYear-10;endYear=drawYear+10;}else if(years[0].charAt(0)=='+'||years[0].charAt(0)=='-'){year=drawYear+parseInt(years[0],10);endYear=drawYear+parseInt(years[1],10);}else{year=parseInt(years[0],10);endYear=parseInt(years[1],10);}
year=(minDate?Math.max(year,minDate.getFullYear()):year);endYear=(maxDate?Math.min(endYear,maxDate.getFullYear()):endYear);html+='<select class="'+this._yearSelectClass[useTR]+'" '+'onchange="jQuery.datepick._selectMonthYear(\'#'+inst.id+'\', this, \'Y\');" '+'onclick="jQuery.datepick._clickMonthYear(\'#'+inst.id+'\');"'+
this._addStatus(useTR,showStatus,inst.id,this._get(inst,'yearStatus'),initStatus)+'>';for(;year<=endYear;year++){html+='<option value="'+year+'"'+
(year==drawYear?' selected="selected"':'')+'>'+year+'</option>';}
html+='</select>';}
html+=this._get(inst,'yearSuffix');if(showMonthAfterYear)
html+=(secondary||!changeMonth||!changeYear?'&#xa0;':'')+monthHtml;html+='</div>';return html;},_addStatus:function(useTR,showStatus,id,text,initStatus){return(showStatus?' onmouseover="jQuery(\'#'+this._statusId[useTR]+id+'\').html(\''+(text||initStatus)+'\');" '+'onmouseout="jQuery(\'#'+this._statusId[useTR]+id+'\').html(\''+initStatus+'\');"':'');},_adjustInstDate:function(inst,offset,period){var yearMonth=inst.drawYear+'/'+inst.drawMonth;var year=inst.drawYear+(period=='Y'?offset:0);var month=inst.drawMonth+(period=='M'?offset:0);var day=Math.min(inst.cursorDate.getDate(),this._getDaysInMonth(year,month))+
(period=='D'?offset:0);inst.cursorDate=this._restrictMinMax(inst,this._daylightSavingAdjust(new Date(year,month,day)));inst.drawMonth=inst.cursorDate.getMonth();inst.drawYear=inst.cursorDate.getFullYear();if(yearMonth!=inst.drawYear+'/'+inst.drawMonth)
this._notifyChange(inst);},_restrictMinMax:function(inst,date){var minDate=this._getMinMaxDate(inst,'min',true);var maxDate=this._getMinMaxDate(inst,'max');date=(minDate&&date<minDate?new Date(minDate.getTime()):date);date=(maxDate&&date>maxDate?new Date(maxDate.getTime()):date);return date;},_notifyChange:function(inst){var onChange=this._get(inst,'onChangeMonthYear');if(onChange)
onChange.apply((inst.input?inst.input[0]:null),[inst.cursorDate.getFullYear(),inst.cursorDate.getMonth()+1,this._daylightSavingAdjust(new Date(inst.cursorDate.getFullYear(),inst.cursorDate.getMonth(),1)),inst]);},_getNumberOfMonths:function(inst){var numMonths=this._get(inst,'numberOfMonths');return(numMonths==null?[1,1]:(typeof numMonths=='number'?[1,numMonths]:numMonths));},_getMinMaxDate:function(inst,minMax,checkRange){var date=this._determineDate(inst,this._get(inst,minMax+'Date'),null);var rangeMin=this._getRangeMin(inst);return(checkRange&&rangeMin&&(!date||rangeMin>date)?rangeMin:date);},_getRangeMin:function(inst){return(this._get(inst,'rangeSelect')&&inst.dates[0]&&!inst.dates[1]?inst.dates[0]:null);},_getDaysInMonth:function(year,month){return 32-new Date(year,month,32).getDate();},_getFirstDayOfMonth:function(year,month){return new Date(year,month,1).getDay();},_canAdjustMonth:function(inst,offset,curYear,curMonth){var numMonths=this._getNumberOfMonths(inst);var date=this._daylightSavingAdjust(new Date(curYear,curMonth+(offset<0?offset:numMonths[0]*numMonths[1]),1));if(offset<0)
date.setDate(this._getDaysInMonth(date.getFullYear(),date.getMonth()));return this._isInRange(inst,date);},_isInRange:function(inst,date){var minDate=this._getRangeMin(inst)||this._getMinMaxDate(inst,'min');var maxDate=this._getMinMaxDate(inst,'max');return((!minDate||date>=minDate)&&(!maxDate||date<=maxDate));},_getFormatConfig:function(inst){return{shortYearCutoff:this._get(inst,'shortYearCutoff'),dayNamesShort:this._get(inst,'dayNamesShort'),dayNames:this._get(inst,'dayNames'),monthNamesShort:this._get(inst,'monthNamesShort'),monthNames:this._get(inst,'monthNames')};},_formatDate:function(inst,year,month,day){if(!year)
inst.dates[0]=new Date(inst.cursorDate.getTime());var date=(year?(typeof year=='object'?year:this._daylightSavingAdjust(new Date(year,month,day))):inst.dates[0]);return this.formatDate(this._get(inst,'dateFormat'),date,this._getFormatConfig(inst));}});function extendRemove(target,props){$.extend(target,props);for(var name in props)
if(props[name]==null||props[name]==undefined)
target[name]=props[name];return target;};function isArray(a){return(a&&a.constructor==Array);};$.fn.datepick=function(options){var otherArgs=Array.prototype.slice.call(arguments,1);if(typeof options=='string'&&(options=='isDisabled'||options=='getDate'||options=='settings'))
return $.datepick['_'+options+'Datepick'].apply($.datepick,[this[0]].concat(otherArgs));if(options=='option'&&arguments.length==2&&typeof arguments[1]=='string')
return $.datepick['_'+options+'Datepick'].apply($.datepick,[this[0]].concat(otherArgs));return this.each(function(){typeof options=='string'?$.datepick['_'+options+'Datepick'].apply($.datepick,[this].concat(otherArgs)):$.datepick._attachDatepick(this,options);});};$.datepick=new Datepick();$(function(){$(document).mousedown($.datepick._checkExternalClick).find('body').append($.datepick.dpDiv);});})(jQuery);
(function($){$.datepick.regional['es']={clearText:'Limpiar',clearStatus:'',closeText:'Cerrar',closeStatus:'',prevText:'&#x3c;Ant',prevStatus:'',prevBigText:'&#x3c;&#x3c;',prevBigStatus:'',nextText:'Sig&#x3e;',nextStatus:'',nextBigText:'&#x3e;&#x3e;',nextBigStatus:'',currentText:'Hoy',currentStatus:'',monthNames:['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],monthNamesShort:['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],monthStatus:'',yearStatus:'',weekHeader:'Sm',weekStatus:'',dayNames:['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],dayNamesShort:['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],dayNamesMin:['Do','Lu','Ma','Mi','Ju','Vi','Sá'],dayStatus:'DD',dateStatus:'D, M d',dateFormat:'dd/mm/yy',firstDay:1,initStatus:'',isRTL:false,showMonthAfterYear:false,yearSuffix:''};$.datepick.setDefaults($.datepick.regional['es']);})(jQuery);
var is_booking_without_payment=false;var date_approved=[];var date2approve=[];var date_admin_blank=[];var dates_additional_info=[];var is_all_days_available=[];var avalaibility_filters=[];var is_show_cost_in_tooltips=false;var is_show_cost_in_date_cell=false;var is_show_availability_in_tooltips=false;var global_avalaibility_times=[];var numbb=0;var timeoutID_of_thank_you_page=null;function init_datepick_cal(bk_type,date_approved_par,my_num_month,start_day_of_week,start_bk_month){if(jQuery('#calendar_booking'+bk_type).hasClass('hasDatepick')==true){return false;}
var cl=document.getElementById('calendar_booking'+bk_type);if(cl===null)return;date_approved[bk_type]=date_approved_par;var isRangeSelect=false;var bkMultiDaysSelect=365;if(bk_days_selection_mode==='dynamic'){isRangeSelect=true;bkMultiDaysSelect=0;}
if(bk_days_selection_mode==='single')bkMultiDaysSelect=0;var bkMinDate=0;var bkMaxDate=booking_max_monthes_in_calendar;var is_this_admin=false;if((location.href.indexOf('page=wpbc-new')!=-1)&&(location.href.indexOf('booking_hash')!=-1)){is_this_admin=true;bkMinDate=null;bkMaxDate=null;}
function click_on_cal_td(){if(typeof(selectDayPro)=='function'){selectDayPro(bk_type);}}
function selectDay(date){var is_calendar_booking_unselectable=jQuery('#calendar_booking_unselectable'+bk_type);var is_booking_form_also=jQuery('#booking_form_div'+bk_type);if((is_calendar_booking_unselectable.length>0)&&(is_booking_form_also.length<=0)){wpbc_unselect_all_days(bk_type);jQuery('.wpbc_only_calendar .popover_calendar_hover').remove();return false;}
if(jQuery.isFunction(jQuery(".datepick-days-cell").popover)){jQuery('.datepick-days-cell').popover('hide');}
jQuery('#date_booking'+bk_type).val(date);if(typeof(bkDisableBookedTimeSlots)=='function'){if(typeof(prepare_tooltip)=='function'){setTimeout("prepare_tooltip("+bk_type+");",1000);}
bkDisableBookedTimeSlots(jQuery('#date_booking'+bk_type).val(),bk_type);}
if(typeof(selectDayPro)=='function'){selectDayPro(date,bk_type);}
jQuery(".booking_form_div").trigger("date_selected",[bk_type,date]);}
function hoverDay(value,date){if(typeof(hoverDayTime)=='function'){hoverDayTime(value,date,bk_type);}
if((location.href.indexOf('page=wpbc')==-1)||(location.href.indexOf('page=wpbc-new')>0)){if(typeof(hoverDayPro)=='function'){hoverDayPro(value,date,bk_type);}}
var is_calendar_booking_unselectable=jQuery('#calendar_booking_unselectable'+bk_type);var is_booking_form_also=jQuery('#booking_form_div'+bk_type);if((is_calendar_booking_unselectable.length==1)&&(is_booking_form_also.length!=1)){jQuery('#calendar_booking'+bk_type+' .datepick-days-cell-over').removeClass('datepick-days-cell-over');jQuery('.wpbc_only_calendar #calendar_booking'+bk_type+' .datepick-days-cell, '+'.wpbc_only_calendar #calendar_booking'+bk_type+' .datepick-days-cell a').css('cursor','default');return false;}}
function applyCSStoDays(date){var class_day=(date.getMonth()+1)+'-'+date.getDate()+'-'+date.getFullYear();var additional_class=' wpbc_weekday_'+date.getDay()+'  ';if((false)&&(date.getDate()==(wpdev_bk_today[2]))&&(date.getMonth()==(wpdev_bk_today[1]-1))&&(date.getFullYear()==(wpdev_bk_today[0]))){var my_test_date1=new Date(wpdev_bk_today[0],(wpdev_bk_today[1]-1),wpdev_bk_today[2],wpdev_bk_today[3],wpdev_bk_today[4],0);var my_test_date2=new Date(wpdev_bk_today[0],(wpdev_bk_today[1]-1),wpdev_bk_today[2],18,0,0);if(my_test_date2.getTime()<my_test_date1.getTime())
return[false,'cal4date-'+class_day+' date_user_unavailable'];}
if(typeof(prices_per_day)!=='undefined')
if(typeof(prices_per_day[bk_type])!=='undefined')
if(typeof(prices_per_day[bk_type][class_day])!=='undefined'){additional_class+=' rate_'+prices_per_day[bk_type][class_day];}
if(typeof(wpdev_bk_season_filter)!=='undefined')
if(typeof(wpdev_bk_season_filter[class_day])!=='undefined'){additional_class+=' '+wpdev_bk_season_filter[class_day].join(' ');}
if(is_this_admin==false){var my_test_date=new Date(wpdev_bk_today[0],(wpdev_bk_today[1]-1),wpdev_bk_today[2],0,0,0);if((days_between(date,my_test_date))<block_some_dates_from_today)
return[false,'cal4date-'+class_day+' date_user_unavailable'];if(typeof(wpbc_available_days_num_from_today)!=='undefined')
if(parseInt('0'+wpbc_available_days_num_from_today)>0)
if((days_between(date,my_test_date))>parseInt('0'+wpbc_available_days_num_from_today))
return[false,'cal4date-'+class_day+' date_user_unavailable'];}
if(typeof(is_this_day_available)=='function'){var is_day_available=is_this_day_available(date,bk_type);var season_filter='';if(is_day_available instanceof Array){season_filter=' season_filter_id_'+is_day_available[1];is_day_available=is_day_available[0];}
if(!is_day_available){return[false,'cal4date-'+class_day+' date_user_unavailable '+season_filter];}}
if(typeof(check_global_time_availability)=='function'){check_global_time_availability(date,bk_type);}
var blank_admin_class_day='';if(typeof(date_admin_blank[bk_type])!=='undefined')
if(typeof(date_admin_blank[bk_type][class_day])!=='undefined'){blank_admin_class_day=' date_admin_blank ';}
var reserved_days_count=1;if(typeof(availability_per_day)!=='undefined')
if(typeof(availability_per_day[bk_type])!=='undefined')
if(typeof(availability_per_day[bk_type][class_day])!=='undefined'){reserved_days_count=parseInt(availability_per_day[bk_type][class_day]);}
var checkin_days_count=[0,0];if(typeof(wpbc_check_in_dates)!=='undefined')
if(typeof(wpbc_check_in_dates[bk_type])!=='undefined')
if(typeof(wpbc_check_in_dates[bk_type][class_day])!=='undefined'){checkin_days_count=[wpbc_check_in_dates[bk_type][class_day][0],wpbc_check_in_dates[bk_type][class_day][1]];}
var checkout_days_count=[0,0];if(typeof(wpbc_check_out_dates)!=='undefined')
if(typeof(wpbc_check_out_dates[bk_type])!=='undefined')
if(typeof(wpbc_check_out_dates[bk_type][class_day])!=='undefined'){checkout_days_count=[wpbc_check_out_dates[bk_type][class_day][0],wpbc_check_out_dates[bk_type][class_day][1]];}
var both_check_in_out_num=0;if(typeof(getNumberClosedCheckInOutDays)=='function'){both_check_in_out_num=getNumberClosedCheckInOutDays(bk_type,class_day);}
if(wpdev_in_array(parent_booking_resources,bk_type))
if(reserved_days_count<=0){if(typeof(date2approve[bk_type])!=='undefined')
if(typeof(date2approve[bk_type][class_day])!=='undefined')
return[false,'cal4date-'+class_day+' date2approve date_unavailable_for_all_childs '+blank_admin_class_day];return[false,'cal4date-'+class_day+' date_approved date_unavailable_for_all_childs '+blank_admin_class_day];}
var th=0;var tm=0;var ts=0;var time_return_value=false;if(typeof(date2approve[bk_type])!=='undefined')
if(typeof(date2approve[bk_type][class_day])!=='undefined'){for(var ia=0;ia<date2approve[bk_type][class_day].length;ia++){th=date2approve[bk_type][class_day][ia][3];tm=date2approve[bk_type][class_day][ia][4];ts=date2approve[bk_type][class_day][ia][5];if((th==0)&&(tm==0)&&(ts==0)){return[false,'cal4date-'+class_day+' date2approve'+blank_admin_class_day];}else{if(is_booking_used_check_in_out_time===true){if(ts=='1')additional_class+=' check_in_time'+' check_in_time_date2approve';if(ts=='2')additional_class+=' check_out_time'+' check_out_time_date2approve';}else{additional_class+=' times_clock';}
time_return_value=[true,'date_available cal4date-'+class_day+' date2approve timespartly'+additional_class];if(typeof(isDayFullByTime)=='function'){if(isDayFullByTime(bk_type,class_day)){return[false,'cal4date-'+class_day+' date2approve'+blank_admin_class_day];}}}}}
if(typeof(date_approved[bk_type])!=='undefined')
if(typeof(date_approved[bk_type][class_day])!=='undefined'){for(var ia=0;ia<date_approved[bk_type][class_day].length;ia++){th=date_approved[bk_type][class_day][ia][3];tm=date_approved[bk_type][class_day][ia][4];ts=date_approved[bk_type][class_day][ia][5];if((th==0)&&(tm==0)&&(ts==0))
return[false,'cal4date-'+class_day+' date_approved'+blank_admin_class_day];else{if(is_booking_used_check_in_out_time===true){if(ts=='1')additional_class+=' check_in_time'+' check_in_time_date_approved';if(ts=='2')additional_class+=' check_out_time'+' check_out_time_date_approved';}else{additional_class+=' times_clock';}
time_return_value=[true,'date_available cal4date-'+class_day+' date_approved timespartly'+additional_class];if(typeof(isDayFullByTime)=='function'){if(isDayFullByTime(bk_type,class_day))return[false,'cal4date-'+class_day+' date_approved'+blank_admin_class_day];}}}}
for(var i=0;i<user_unavilable_days.length;i++){if(date.getDay()==user_unavilable_days[i])return[false,'cal4date-'+class_day+' date_user_unavailable'];}
var is_datepick_unselectable='';if(false){if((time_return_value!==false)&&(time_return_value[1].indexOf('timespartly')!=-1)&&(is_booking_used_check_in_out_time!==true)){time_return_value[1]=time_return_value[1].replace("date_approved","");time_return_value[1]=time_return_value[1].replace("date2approve","");}}
var is_exist_check_in_out_for_parent_resource=Math.max(checkin_days_count[0],checkout_days_count[0]);if((time_return_value!==false)&&(is_exist_check_in_out_for_parent_resource==0)){if(is_booking_used_check_in_out_time===true){if((additional_class.indexOf('check_in_time')!=-1)&&(additional_class.indexOf('check_out_time')!=-1)){time_return_value[0]=false;if(!(((additional_class.indexOf('check_in_time_date_approved')!=-1)&&(additional_class.indexOf('check_out_time_date2approve')!=-1))||((additional_class.indexOf('check_out_time_date_approved')!=-1)&&(additional_class.indexOf('check_in_time_date2approve')!=-1)))){time_return_value[1]=time_return_value[1].replace("check_in_time","");time_return_value[1]=time_return_value[1].replace("check_out_time","");time_return_value[1]=time_return_value[1].replace("timespartly","");}
time_return_value[1]=time_return_value[1].replace("date_available","");}}
if((wpdev_in_array(parent_booking_resources,bk_type))&&((reserved_days_count-both_check_in_out_num)<=0)){time_return_value[0]=false;time_return_value[1]=time_return_value[1].replace("check_in_time","");time_return_value[1]=time_return_value[1].replace("check_out_time","");time_return_value[1]=time_return_value[1].replace("timespartly","");time_return_value[1]=time_return_value[1].replace("date_available","");}
return time_return_value;}else{if((is_booking_used_check_in_out_time===true)&&((is_exist_check_in_out_for_parent_resource>0)||((reserved_days_count-both_check_in_out_num)<=0))){if((reserved_days_count-both_check_in_out_num)<=0){if(checkin_days_count[1]==1)additional_class=' date_approved';else additional_class=' date2approve';return[false,'cal4date-'+class_day+additional_class+blank_admin_class_day];}
if((reserved_days_count-both_check_in_out_num-checkin_days_count[0])<=0){if(checkin_days_count[1]==1)additional_class+=' date_approved';else additional_class+=' date2approve';additional_class+=' timespartly check_in_time';}
if((reserved_days_count-both_check_in_out_num-checkout_days_count[0])<=0){if(checkout_days_count[1]==1)additional_class+=' date_approved';else additional_class+=' date2approve';additional_class+=' timespartly check_out_time';}}
return[true,'date_available cal4date-'+class_day+' reserved_days_count'+reserved_days_count+' '+is_datepick_unselectable+additional_class+' '];}}
function changeMonthYear(year,month){if(typeof(prepare_tooltip)=='function'){setTimeout("prepare_tooltip("+bk_type+");",1000);}
if(typeof(prepare_highlight)=='function'){setTimeout("prepare_highlight();",1000);}}
jQuery('#calendar_booking'+bk_type).text('');jQuery('#calendar_booking'+bk_type).datepick({beforeShowDay:applyCSStoDays,onSelect:selectDay,onHover:hoverDay,onChangeMonthYear:changeMonthYear,showOn:'both',multiSelect:bkMultiDaysSelect,numberOfMonths:my_num_month,stepMonths:1,prevText:'&laquo;',nextText:'&raquo;',dateFormat:'dd.mm.yy',changeMonth:false,changeYear:false,minDate:bkMinDate,maxDate:bkMaxDate,showStatus:false,multiSeparator:', ',closeAtTop:false,firstDay:start_day_of_week,gotoCurrent:false,hideIfNoPrevNext:true,rangeSelect:isRangeSelect,useThemeRoller:false});setTimeout(function(){jQuery('.datepick-days-cell.datepick-today.datepick-days-cell-over').removeClass('datepick-days-cell-over');},500);if(start_bk_month!=false){var inst=jQuery.datepick._getInst(document.getElementById('calendar_booking'+bk_type));inst.cursorDate=new Date();inst.cursorDate.setFullYear(start_bk_month[0],(start_bk_month[1]-1),1);inst.cursorDate.setMonth(parseInt(start_bk_month[1]-1));inst.cursorDate.setDate(1);inst.drawMonth=inst.cursorDate.getMonth();inst.drawYear=inst.cursorDate.getFullYear();jQuery.datepick._notifyChange(inst);jQuery.datepick._adjustInstDate(inst);jQuery.datepick._showDate(inst);jQuery.datepick._updateDatepick(inst);}
if(typeof(prepare_tooltip)=='function'){setTimeout("prepare_tooltip("+bk_type+");",1000);}}
function get_first_day_of_selection(dates){if(dates.indexOf(',')!=-1){var dates_array=dates.split(/,\s*/);var length=dates_array.length;var element=null;var new_dates_array=[];for(var i=0;i<length;i++){element=dates_array[i].split(/\./);new_dates_array[new_dates_array.length]=element[2]+'.'+element[1]+'.'+element[0];}
new_dates_array.sort();element=new_dates_array[0].split(/\./);return element[2]+'.'+element[1]+'.'+element[0];}
if(dates.indexOf(' - ')!=-1){var start_end_date=dates.split(" - ");return start_end_date[0];}
return dates;}
function get_last_day_of_selection(dates){if(dates.indexOf(',')!=-1){var dates_array=dates.split(/,\s*/);var length=dates_array.length;var element=null;var new_dates_array=[];for(var i=0;i<length;i++){element=dates_array[i].split(/\./);new_dates_array[new_dates_array.length]=element[2]+'.'+element[1]+'.'+element[0];}
new_dates_array.sort();element=new_dates_array[(new_dates_array.length-1)].split(/\./);return element[2]+'.'+element[1]+'.'+element[0];}
if(dates.indexOf(' - ')!=-1){var start_end_date=dates.split(" - ");return start_end_date[(start_end_date.length-1)];}
return dates;}
function setUnavailableSelectedDays(bk_type){var sel_dates=jQuery('#calendar_booking'+bk_type).datepick('getDate');var class_day2;for(var i=0;i<sel_dates.length;i++){class_day2=(sel_dates[i].getMonth()+1)+'-'+sel_dates[i].getDate()+'-'+sel_dates[i].getFullYear();date_approved[bk_type][class_day2]=[(sel_dates[i].getMonth()+1),sel_dates[i].getDate(),sel_dates[i].getFullYear(),0,0,0];jQuery('#calendar_booking'+bk_type+' td.cal4date-'+class_day2).html(sel_dates[i].getDate());}}
function setReservedSelectedDates(bk_type){var is_pay_now=false;if(document.getElementById('calendar_booking'+bk_type)===null){jQuery('#submiting'+bk_type).html('');jQuery('#booking_form_div'+bk_type).hide();makeScroll('#ajax_respond_insert'+bk_type);if((document.getElementById('gateway_payment_forms'+bk_type)!=null)&&(document.getElementById('gateway_payment_forms'+bk_type).innerHTML!=''))
is_pay_now=true;if((!is_pay_now)||(is_booking_without_payment==true))
if(type_of_thank_you_message=='page'){timeoutID_of_thank_you_page=setTimeout(function(){location.href=thank_you_page_URL;},1000);}else{document.getElementById('submiting'+bk_type).innerHTML='<div class=\"submiting_content wpdev-help-message alert alert-warning alert-success\" >'+new_booking_title+'</div>';jQuery('.submiting_content').fadeOut(new_booking_title_time);setTimeout(function(){location.reload(true);},parseInt(1000+new_booking_title_time));}}else{setUnavailableSelectedDays(bk_type);document.getElementById('date_booking'+bk_type).value='';jQuery('#calendar_booking'+bk_type+', .block_hints').hide();if(location.href.indexOf('admin.php')==-1){jQuery('#calendar_booking'+bk_type).insertBefore("#booking_form_div"+bk_type);document.getElementById("booking_form_div"+bk_type).style.display="none";jQuery('#hided_booking_form'+bk_type).prevAll('select[name="active_booking_form"]').hide();jQuery('#hided_booking_form'+bk_type).prevAll('label[for="calendar_type"]').hide();makeScroll('#ajax_respond_insert'+bk_type);if((document.getElementById('gateway_payment_forms'+bk_type)!=null)&&(document.getElementById('gateway_payment_forms'+bk_type).innerHTML!=''))
is_pay_now=true;if((!is_pay_now)||(is_booking_without_payment==true)){if(type_of_thank_you_message=='page'){timeoutID_of_thank_you_page=setTimeout(function(){location.href=thank_you_page_URL;},1000);}else{document.getElementById('submiting'+bk_type).innerHTML='<div class=\"submiting_content wpdev-help-message alert alert-warning alert-success\" >'+new_booking_title+'</div>';makeScroll('#submiting'+bk_type);jQuery('.submiting_content').fadeOut(new_booking_title_time);setTimeout(function(){location.reload(true);},parseInt(1000+new_booking_title_time));}}}else{setTimeout(function(){location.reload(true);},1000);}}}
function mybooking_submit(submit_form,bk_type,wpdev_active_locale){var is_error=wpbc_check_errors_in_booking_form(bk_type);if(is_error){return false;}
if(document.getElementById('date_booking'+bk_type).value==''){if(document.getElementById('additional_calendars'+bk_type)!=null){var id_additional_str=document.getElementById('additional_calendars'+bk_type).value;var id_additional_arr=id_additional_str.split(',');var is_all_additional_days_unselected=true;for(var ia=0;ia<id_additional_arr.length;ia++){if(document.getElementById('date_booking'+id_additional_arr[ia]).value!=''){is_all_additional_days_unselected=false;}}
if(is_all_additional_days_unselected){showMessageUnderElement('#date_booking'+bk_type,message_verif_selectdts,'');makeScroll('#calendar_booking'+bk_type);return;}}else{showMessageUnderElement('#date_booking'+bk_type,message_verif_selectdts,'');makeScroll('#calendar_booking'+bk_type);return;}}
var count=submit_form.elements.length;var formdata='';var inp_value;var element;var el_type;for(i=0;i<count;i++){element=submit_form.elements[i];if(jQuery(element).closest('.booking_form_garbage').length){continue;}
if((element.type!=='button')&&(element.type!=='hidden')&&(element.name!==('date_booking'+bk_type))){if(element.type=='checkbox'){if(element.value==''){inp_value=element.checked;}else{if(element.checked)inp_value=element.value;else inp_value='';}}else if(element.type=='radio'){if(element.checked){inp_value=element.value;}else{if((element.className.indexOf('wpdev-validates-as-required')!==-1)&&(jQuery(element).is(':visible'))&&(!jQuery(':radio[name="'+element.name+'"]',submit_form).is(":checked"))){showErrorMessage(element,message_verif_requred_for_radio_box);return;}
continue;}}else{inp_value=element.value;}
if(element.type=='select-multiple'){inp_value=jQuery('[name="'+element.name+'"]').val();if((inp_value==null)||(inp_value.toString()==''))
inp_value='';}
if(jQuery(element).is(':visible')){if(element.name==('visitors'+bk_type)){if(typeof(is_max_visitors_selection_more_than_available)=='function'){if((wpbc_is_time_field_in_booking_form(bk_type,submit_form.elements))&&(!wpdev_in_array(parent_booking_resources,bk_type))){}else{if(is_max_visitors_selection_more_than_available(bk_type,inp_value,element)){return;}}}}
if(element.className.indexOf('wpdev-validates-as-required')!==-1){if((element.type=='checkbox')&&(element.checked===false)){if(!jQuery(':checkbox[name="'+element.name+'"]',submit_form).is(":checked")){showErrorMessage(element,message_verif_requred_for_check_box);return;}}
if(element.type=='radio'){if(!jQuery(':radio[name="'+element.name+'"]',submit_form).is(":checked")){showErrorMessage(element,message_verif_requred_for_radio_box);return;}}
if((element.type!='checkbox')&&(element.type!='radio')&&(jQuery.trim(inp_value)==='')){showErrorMessage(element,message_verif_requred);return;}}
if(element.className.indexOf('wpdev-validates-as-email')!==-1){inp_value=inp_value.replace(/^\s+|\s+$/gm,'');var reg=/^([A-Za-z0-9_\-\.\+])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,})$/;if(inp_value!='')
if(reg.test(inp_value)==false){showErrorMessage(element,message_verif_emeil);return;}}
if((element.className.indexOf('wpdev-validates-as-email')!==-1)&&(element.className.indexOf('same_as_')!==-1)){var primary_email_name=element.className.match(/same_as_([^\s])+/gi);if(primary_email_name!=null){primary_email_name=primary_email_name[0].substr(8);if(jQuery('[name="'+primary_email_name+bk_type+'"]').length>0){if(jQuery('[name="'+primary_email_name+bk_type+'"]').val()!==inp_value){showErrorMessage(element,message_verif_same_emeil);return;}}}
continue;}}
if(element.name!==('captcha_input'+bk_type)){if(formdata!=='')formdata+='~';el_type=element.type;if(element.className.indexOf('wpdev-validates-as-email')!==-1)el_type='email';if(element.className.indexOf('wpdev-validates-as-coupon')!==-1)el_type='coupon';inp_value=inp_value+'';inp_value=inp_value.replace(new RegExp("\\^",'g'),'&#94;');inp_value=inp_value.replace(new RegExp("~",'g'),'&#126;');inp_value=inp_value.replace(/"/g,'&#34;');inp_value=inp_value.replace(/'/g,'&#39;');formdata+=el_type+'^'+element.name+'^'+inp_value;}}}
if(typeof(is_this_time_selections_not_available)=='function'){if(document.getElementById('date_booking'+bk_type).value==''){if(document.getElementById('additional_calendars'+bk_type)!=null){var id_additional_str=document.getElementById('additional_calendars'+bk_type).value;var id_additional_arr=id_additional_str.split(',');var is_times_dates_ok=false;for(var ia=0;ia<id_additional_arr.length;ia++){if((document.getElementById('date_booking'+id_additional_arr[ia]).value!='')&&(!is_this_time_selections_not_available(id_additional_arr[ia],submit_form.elements))){is_times_dates_ok=true;}}
if(!is_times_dates_ok)return;}}else{if(is_this_time_selections_not_available(bk_type,submit_form.elements))
return;}}
if(bk_days_selection_mode=='dynamic'){var selected_dates_cal_id=[];if(document.getElementById('date_booking'+bk_type).value!=''){selected_dates_cal_id[selected_dates_cal_id.length]=bk_type;}
if(document.getElementById('additional_calendars'+bk_type)!=null){var id_additional_str=document.getElementById('additional_calendars'+bk_type).value;var id_additional_arr=id_additional_str.split(',');var is_all_additional_days_unselected=true;for(var ia=0;ia<id_additional_arr.length;ia++){if(document.getElementById('date_booking'+id_additional_arr[ia]).value!=''){selected_dates_cal_id[selected_dates_cal_id.length]=id_additional_arr[ia];}}}
for(var ci=0;ci<selected_dates_cal_id.length;ci++){var abk_type=selected_dates_cal_id[selected_dates_cal_id.length]
if(document.getElementById('calendar_booking'+abk_type)!=null){var inst=jQuery.datepick._getInst(document.getElementById('calendar_booking'+abk_type));if(bk_2clicks_mode_days_min!=undefined){if(typeof(check_conditions_for_range_days_selection_for_check_in)=='function'){var first_date=get_first_day_of_selection(document.getElementById('date_booking'+abk_type).value);var date_sections=first_date.split(".");var selceted_first_day=new Date;selceted_first_day.setFullYear(parseInt(date_sections[2]-0),parseInt(date_sections[1]-1),parseInt(date_sections[0]-0));check_conditions_for_range_days_selection_for_check_in(selceted_first_day,abk_type);}
if(inst.dates.length<bk_2clicks_mode_days_min){showMessageUnderElement('#date_booking'+abk_type,message_verif_selectdts,'');makeScroll('#calendar_booking'+abk_type);return;}}}}}
var captcha=document.getElementById('wpdev_captcha_challenge_'+bk_type);jQuery('#booking_form_div'+bk_type+' input[type=button]').prop("disabled",true);if(captcha!=null)form_submit_send(bk_type,formdata,captcha.value,document.getElementById('captcha_input'+bk_type).value,wpdev_active_locale);else form_submit_send(bk_type,formdata,'','',wpdev_active_locale);return;}
function form_submit_send(bk_type,formdata,captcha_chalange,user_captcha,wpdev_active_locale){document.getElementById('submiting'+bk_type).innerHTML='<div style="height:20px;width:100%;text-align:center;margin:15px auto;"><img style="vertical-align:middle;box-shadow:none;width:14px;" src="'+wpdev_bk_plugin_url+'/assets/img/ajax-loader.gif"><//div>';var my_booking_form='';var my_booking_hash='';if(document.getElementById('booking_form_type'+bk_type)!=undefined)
my_booking_form=document.getElementById('booking_form_type'+bk_type).value;if(wpdev_bk_edit_id_hash!='')my_booking_hash=wpdev_bk_edit_id_hash;var is_send_emeils=1;if(jQuery('#is_send_email_for_pending').length){is_send_emeils=jQuery('#is_send_email_for_pending').attr('checked');if(is_send_emeils==undefined){is_send_emeils=0;}
else{is_send_emeils=1;}}
if(document.getElementById('date_booking'+bk_type).value!='')
send_ajax_submit(bk_type,formdata,captcha_chalange,user_captcha,is_send_emeils,my_booking_hash,my_booking_form,wpdev_active_locale);else{jQuery('#booking_form_div'+bk_type).hide();jQuery('#submiting'+bk_type).hide();}
var formdata_additional_arr;var formdata_additional;var my_form_field;var id_additional;var id_additional_str;var id_additional_arr;if(document.getElementById('additional_calendars'+bk_type)!=null){id_additional_str=document.getElementById('additional_calendars'+bk_type).value;id_additional_arr=id_additional_str.split(',');for(var ia=0;ia<id_additional_arr.length;ia++){formdata_additional_arr=formdata;formdata_additional='';id_additional=id_additional_arr[ia];formdata_additional_arr=formdata_additional_arr.split('~');for(var j=0;j<formdata_additional_arr.length;j++){my_form_field=formdata_additional_arr[j].split('^');if(formdata_additional!=='')formdata_additional+='~';if(my_form_field[1].substr((my_form_field[1].length-2),2)=='[]')
my_form_field[1]=my_form_field[1].substr(0,(my_form_field[1].length-(''+bk_type).length)-2)+id_additional+'[]';else
my_form_field[1]=my_form_field[1].substr(0,(my_form_field[1].length-(''+bk_type).length))+id_additional;formdata_additional+=my_form_field[0]+'^'+my_form_field[1]+'^'+my_form_field[2];}
if(jQuery('#gateway_payment_forms'+bk_type).length>0){jQuery('#gateway_payment_forms'+bk_type).after('<div id="gateway_payment_forms'+id_additional+'"></div>');jQuery('#gateway_payment_forms'+bk_type).after('<div id="ajax_respond_insert'+id_additional+'" style="display:none;"></div>');send_ajax_submit(id_additional,formdata_additional,captcha_chalange,user_captcha,is_send_emeils,my_booking_hash,my_booking_form,wpdev_active_locale);}}}}
function send_ajax_submit(bk_type,formdata,captcha_chalange,user_captcha,is_send_emeils,my_booking_hash,my_booking_form,wpdev_active_locale){var my_bk_res=bk_type;if(document.getElementById('bk_type'+bk_type)!=null)my_bk_res=document.getElementById('bk_type'+bk_type).value;jQuery.ajax({url:wpbc_ajaxurl,type:'POST',success:function(data,textStatus){if(textStatus=='success')jQuery('#ajax_respond_insert'+bk_type).html(data);},error:function(XMLHttpRequest,textStatus,errorThrown){window.status='Ajax sending Error status:'+textStatus;alert(XMLHttpRequest.status+' '+XMLHttpRequest.statusText);if(XMLHttpRequest.status==500){alert('Please check at this page according this error:'+' https://wpbookingcalendar.com/faq/#ajax-sending-error');}},data:{action:'INSERT_INTO_TABLE',bktype:my_bk_res,dates:document.getElementById('date_booking'+bk_type).value,form:formdata,captcha_chalange:captcha_chalange,captcha_user_input:user_captcha,is_send_emeils:is_send_emeils,my_booking_hash:my_booking_hash,booking_form_type:my_booking_form,wpdev_active_locale:wpdev_active_locale,wpbc_nonce:document.getElementById('wpbc_nonce'+bk_type).value}});}
function showErrorMessage(element,errorMessage){makeScroll(element);jQuery("[name='"+element.name+"']").fadeOut(350).fadeIn(300).fadeOut(350).fadeIn(400).fadeOut(350).fadeIn(300).fadeOut(350).fadeIn(400).animate({opacity:1},4000);if(jQuery("[name='"+element.name+"']").attr('type')=="radio"){if((!jQuery("[name='"+element.name+"']").parent().parent().parent().next().hasClass('alert-warning'))||((jQuery("[name='"+element.name+"']").parent().parent().parent().next().hasClass('alert-warning'))&&(!jQuery("[name='"+element.name+"']").parent().parent().parent().next().is(':visible')))){jQuery("[name='"+element.name+"']").parent().parent().parent().after('<span class="wpdev-help-message alert alert-warning">'+errorMessage+'</span>');}}else if(jQuery("[name='"+element.name+"']").attr('type')=="checkbox"){if((!jQuery("[name='"+element.name+"']").parent().next().hasClass('alert-warning'))||((jQuery("[name='"+element.name+"']").parent().next().hasClass('alert-warning'))&&(!jQuery("[name='"+element.name+"']").parent().next().is(':visible')))){jQuery("[name='"+element.name+"']").parent().after('<span class="wpdev-help-message alert alert-warning">'+errorMessage+'</span>');}}else{if((!jQuery("[name='"+element.name+"']").next().hasClass('alert-warning'))||((jQuery("[name='"+element.name+"']").next().hasClass('alert-warning'))&&(!jQuery("[name='"+element.name+"']").next().is(':visible')))){jQuery("[name='"+element.name+"']").after('<span class="wpdev-help-message alert alert-warning">'+errorMessage+'</span>');}}
jQuery(".wpdev-help-message").css({'padding':'5px 5px 4px','margin':'2px 2px 2px 10px','vertical-align':'top','line-height':'32px'});if(element.type=='checkbox')
jQuery(".wpdev-help-message").css({'vertical-align':'middle'});jQuery(".widget_wpdev_booking .booking_form .wpdev-help-message").css({'vertical-align':'sub'});jQuery(".wpdev-help-message").animate({opacity:1},10000).fadeOut(2000);element.focus();return;}
function showMessageUnderElement(element,errorMessage,message_type){makeScroll(element);if(jQuery(element).attr('type')=="radio"){if((!jQuery(element).parent().parent().parent().next().hasClass('alert-warning'))||((jQuery(element).parent().parent().parent().next().hasClass('alert-warning'))&&(!jQuery(element).parent().parent().parent().next().is(':visible')))){jQuery(element).parent().parent().parent().after('<span class="wpdev-help-message wpdev-element-message alert alert-warning '+message_type+'">'+errorMessage+'</span>');}}else if(jQuery(element).attr('type')=="checkbox"){if((!jQuery(element).parent().next().hasClass('alert-warning'))||((jQuery(element).parent().next().hasClass('alert-warning'))&&(!jQuery(element).parent().next().is(':visible')))){jQuery(element).parent().after('<span class="wpdev-help-message wpdev-element-message alert alert-warning '+message_type+'">'+errorMessage+'</span>');}}else{if((!jQuery(element).next().hasClass('alert-warning'))||((jQuery(element).next().hasClass('alert-warning'))&&(!jQuery(element).next().is(':visible')))){jQuery(element).after('<span class="wpdev-help-message wpdev-element-message alert alert-warning '+message_type+'">'+errorMessage+'</span>');}}
jQuery(".widget_wpdev_booking .booking_form .wpdev-help-message").css({'vertical-align':'sub'});jQuery(".wpdev-help-message").animate({opacity:1},10000).fadeOut(2000);}
jQuery(document).ready(function(){jQuery('div.inside_hint').click(function(){jQuery(this).css('visibility','hidden').siblings('.has-inside-hint').focus();});jQuery('input.has-inside-hint').blur(function(){if(this.value=='')
jQuery(this).siblings('.inside_hint').css('visibility','');}).focus(function(){jQuery(this).siblings('.inside_hint').css('visibility','hidden');});jQuery('.booking_form_div input[type=button]').prop("disabled",false);});function makeScroll(object_name){var targetOffset=jQuery(object_name).offset().top;if(targetOffset<0)targetOffset=0;if(jQuery('#wpadminbar').length>0)targetOffset=targetOffset-50;else targetOffset=targetOffset-20;jQuery('html,body').animate({scrollTop:targetOffset},500);}
function wpdev_in_array(array_here,p_val){for(var i=0,l=array_here.length;i<l;i++){if(array_here[i]==p_val){return true;}}
return false;}
function days_between(date1,date2){var ONE_DAY=1000*60*60*24;var date1_ms=date1.getTime();var date2_ms=date2.getTime();var difference_ms=date1_ms-date2_ms;return Math.round(difference_ms/ONE_DAY);}
function daysInMonth(month,year){var m=[31,28,31,30,31,30,31,31,30,31,30,31];if(month!=2)return m[month-1];if(year%4!=0)return m[1];if(year%100==0&&year%400!=0)return m[1];return m[1]+1;}
function wpbc_timeline_nav(timeline_obj,nav_step){jQuery(".wpbc_timeline_front_end").trigger("timeline_nav",[timeline_obj,nav_step]);jQuery('#'+timeline_obj.html_client_id+' .wpbc_tl_prev,#'+timeline_obj.html_client_id+' .wpbc_tl_next').remove();jQuery('#'+timeline_obj.html_client_id+' .wpbc_tl_title').html('<span class="glyphicon glyphicon-refresh wpbc_spin"></span> &nbsp Loading...');if(jQuery.isFunction(jQuery(".popover_click.popover_bottom").popover))
jQuery('.popover_click.popover_bottom').popover('hide');jQuery.ajax({url:wpbc_ajaxurl,type:'POST',success:function(data,textStatus){if(textStatus=='success'){jQuery('#'+timeline_obj.html_client_id+' .wpbc_timeline_ajax_replace').html(data);return true;}},error:function(XMLHttpRequest,textStatus,errorThrown){window.status='Ajax Error! Status: '+textStatus;alert('Ajax Error! Status: '+XMLHttpRequest.status+' '+XMLHttpRequest.statusText);},data:{action:'WPBC_TIMELINE_NAV',timeline_obj:timeline_obj,nav_step:nav_step,wpdev_active_locale:wpbc_active_locale,wpbc_nonce:document.getElementById('wpbc_nonce_'+timeline_obj.html_client_id).value}});}
function wpbc_unselect_all_days(bk_type){var is_calendar_exist=jQuery('#calendar_booking'+bk_type);if(is_calendar_exist.length>0){var inst=jQuery.datepick._getInst(document.getElementById('calendar_booking'+bk_type));jQuery('#date_booking'+bk_type).val('');inst.stayOpen=false;inst.dates=[];jQuery.datepick._updateDatepick(inst);}}
function wpbc_check_errors_in_booking_form(bk_type){var is_error_in_field=false;var my_form=jQuery('#booking_form'+bk_type);if(my_form.length){my_form.find(':input').each(function(index,el){var skip_elements=['hidden','button'];if(-1==skip_elements.indexOf(jQuery(el).attr('type'))){if(('date_booking'+bk_type)==jQuery(el).attr('name')){if((jQuery('#calendar_booking'+bk_type).is(':visible'))&&(''==jQuery(el).val())){showMessageUnderElement('#date_booking'+bk_type,message_verif_selectdts,'');is_error_in_field=true;}}
if(jQuery(el).is(':visible')){if(jQuery(el).hasClass('wpdev-validates-as-required')){if('checkbox'==jQuery(el).attr('type')){if(!jQuery(el).is(':checked')){showErrorMessage(el,message_verif_requred_for_check_box);is_error_in_field=true;}}else if('radio'==jQuery(el).attr('type')){if(!jQuery(':radio[name="'+jQuery(el).attr('name')+'"]',my_form).is(':checked')){showErrorMessage(el,message_verif_requred_for_radio_box);is_error_in_field=true;}}else{var inp_value=jQuery(el).val();if(''===jQuery.trim(inp_value)){showErrorMessage(el,message_verif_requred);is_error_in_field=true;}}}
if(jQuery(el).hasClass('wpdev-validates-as-email')){var inp_value=jQuery(el).val();inp_value=inp_value.replace(/^\s+|\s+$/gm,'');var reg=/^([A-Za-z0-9_\-\.\+])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,})$/;if((inp_value!='')&&(reg.test(inp_value)==false)){showErrorMessage(el,message_verif_emeil);is_error_in_field=true;}}
var classList=jQuery(el).attr('class');if(classList){classList=classList.split(/\s+/);jQuery.each(classList,function(cl_index,cl_item){if('validate_as_date'===cl_item){var regex=new RegExp('^[0-3]?\\d{1}[\\/\\.\\-]+[0-3]?\\d{1}[\\/\\.\\-]+[0-2]+\\d{3}$');var message_verif_phone='This field must be valid date like this '+'09/25/2018';var inp_value=jQuery(el).val();if((inp_value!='')&&(regex.test(inp_value)==false)){showErrorMessage(el,message_verif_phone);is_error_in_field=true;}}
if('validate_as_digit'===cl_item){var regex=new RegExp('^[0-9]+\\.?[0-9]*$');var message_verif_phone='This field must contain only digits';var inp_value=jQuery(el).val();if((inp_value!='')&&(regex.test(inp_value)==false)){showErrorMessage(el,message_verif_phone);is_error_in_field=true;}}
var is_validate_digit=cl_item.substring(0,15);if('validate_digit_'===is_validate_digit){var digits_to_check=parseInt(cl_item.substring(15));if(!isNaN(digits_to_check)){var regex=new RegExp('^\\d{'+digits_to_check+'}$');var message_verif_phone='This field must contain '+digits_to_check+' digits';var inp_value=jQuery(el).val();if((inp_value!='')&&(regex.test(inp_value)==false)){showErrorMessage(el,message_verif_phone);is_error_in_field=true;}}}});}}}});}
return is_error_in_field;}
function bk_calendar_step_click(el){var br_id=jQuery(el).closest('form').find('input[name^="bk_type"]').val();var is_error=wpbc_check_errors_in_booking_form(br_id);if(is_error){return false;}
if(br_id!=undefined){jQuery("#booking_form"+br_id+" .bk_calendar_step").css({"display":"none"});jQuery("#booking_form"+br_id+" .bk_form_step").css({"display":"block"});}else{jQuery(".bk_calendar_step").css({"display":"none"});jQuery(".bk_form_step").css({"display":"block"});}}
function bk_form_step_click(el){var br_id=jQuery(el).closest('form').find('input[name^="bk_type"]').val();var is_error=false;if(is_error){return false;}
if(br_id!=undefined){jQuery("#booking_form"+br_id+" .bk_calendar_step").css({"display":"block"});jQuery("#booking_form"+br_id+" .bk_form_step").css({"display":"none"});makeScroll("#bklnk"+br_id);}else{jQuery(".bk_calendar_step").css({"display":"block"});jQuery(".bk_form_step").css({"display":"none"});}};
var time_buffer_value=0;var is_check_start_time_gone=false;var start_time_checking_index;function prepare_tooltip(myParam){wpbc_set_popover_in_cal(myParam);}
function hoverDayTime(value,date_obj,resource_id){wpbc_prepare_tooltip_content(value,date_obj,resource_id);}
function is_this_time_selections_not_available(resource_id,form_elements){var reslt=wpbc_is_this_time_selection_not_available(resource_id,form_elements);return reslt;}
function wpbc_set_popover_in_cal(resource_id){var tooltip_day_class_4_show=" .timespartly";if(is_show_availability_in_tooltips){if(wpdev_in_array(parent_booking_resources,resource_id))
tooltip_day_class_4_show=" .datepick-days-cell";}
if(is_show_cost_in_tooltips){tooltip_day_class_4_show=" .datepick-days-cell";}
if(typeof(global_avalaibility_times[resource_id])!="undefined"){if(global_avalaibility_times[resource_id].length>0)tooltip_day_class_4_show=" .datepick-days-cell";}
if(jQuery.isFunction(jQuery("#calendar_booking"+resource_id+tooltip_day_class_4_show).popover)){jQuery("#calendar_booking"+resource_id+tooltip_day_class_4_show).popover({placement:'top auto',trigger:'hover',delay:{show:500,hide:1},content:'',template:'<div class="popover popover_calendar_hover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',container:'#calendar_booking'+resource_id,html:'true'});}}
function wpbc_sort_times_array(times_array){var sort_time_arr=[];var sort_time_obj=[];var time_second=0
var is_it_endtime=0;for(var i=0;i<times_array.length;i++){if(times_array[i].length>2){time_second=parseInt(times_array[i][0])*3600+parseInt(times_array[i][1])*60+parseInt(times_array[i][2]);is_it_endtime=time_second%10;if(2===is_it_endtime){time_second=time_second-10;}else{time_second=time_second+10;}
sort_time_obj[sort_time_obj.length]={second:time_second,value:times_array[i]};}}
sort_time_obj.sort(function(a,b){return a.second-b.second;});for(var i=0;i<sort_time_obj.length;i++){sort_time_arr[sort_time_arr.length]=sort_time_obj[i].value;}
return sort_time_arr;}
function wpbc_prepare_tooltip_content(value,date_obj,resource_id){if(date_obj==null)return;var i=0;var h='';var m='';var s='';var td_class;var tooltip_time='';var times_array=[];td_class=(date_obj.getMonth()+1)+'-'+date_obj.getDate()+'-'+date_obj.getFullYear();var times_array_approved=wpbc_get_times_from_dates_arr(date_approved,resource_id,td_class);for(i=0;i<times_array_approved.length;i++){times_array[times_array.length]=times_array_approved[i];}
var times_array_pending=wpbc_get_times_from_dates_arr(date2approve,resource_id,td_class);for(i=0;i<times_array_pending.length;i++){times_array[times_array.length]=times_array_pending[i];}
if(typeof(hover_day_check_global_time_availability)=='function'){times_array=hover_day_check_global_time_availability(date_obj,resource_id,times_array);}
if(times_array.length>0){times_array=wpbc_sort_times_array(times_array);}
for(i=0;i<times_array.length;i++){s=parseInt(times_array[i][2]);if(s==2){if(tooltip_time=='')tooltip_time='&nbsp;&nbsp;&nbsp;&nbsp;...&nbsp;&nbsp;&nbsp; - ';}
if((tooltip_time=='')&&(times_array[i][0]=='00')&&(times_array[i][1]=='00'))
tooltip_time='&nbsp;&nbsp;&nbsp;&nbsp;...&nbsp;&nbsp;&nbsp;';else if((i==(times_array.length-1))&&(times_array[i][0]=='23')&&(times_array[i][1]=='59'))
tooltip_time+=' &nbsp;&nbsp;&nbsp;&nbsp;... ';else{var hours_show=times_array[i][0];var hours_show_sufix='';if(is_am_pm_inside_time){if(hours_show>=12){hours_show=hours_show-12;if(hours_show==0)hours_show=12;hours_show_sufix=' pm';}else{hours_show_sufix=' am';}}
if(times_array[i][2]=='02'){times_array[i][1]=(times_array[i][1]*1)+time_buffer_value;if(times_array[i][1]>59){times_array[i][1]=times_array[i][1]-60;hours_show=(hours_show*1)+1;}
if(times_array[i][1]<10)times_array[i][1]='0'+times_array[i][1];}
tooltip_time+=hours_show+':'+times_array[i][1]+hours_show_sufix;}
if(s==1){tooltip_time+=' - ';if(i==(times_array.length-1))tooltip_time+=' &nbsp;&nbsp;&nbsp;&nbsp;... ';}
if(s==2){if(typeof(wpbc_get_additional_info_for_tooltip)=='function'){tooltip_time+=wpbc_get_additional_info_for_tooltip(resource_id,td_class,parseInt(times_array[i][0]*60)+parseInt(times_array[i][1]));}
tooltip_time+='<br/>';}}
if(tooltip_time.indexOf("undefined")>-1){tooltip_time='';}
else{if((tooltip_time!='')&&(bk_highlight_timeslot_word!='')){if(is_booking_used_check_in_out_time===true)
tooltip_time='';else
tooltip_time='<span class="wpbc_booked_times_word">'+bk_highlight_timeslot_word+' </span><br />'+tooltip_time;}}
if(typeof(getDayPrice4Show)=='function'){tooltip_time=getDayPrice4Show(resource_id,tooltip_time,td_class);}
if(typeof(getDayAvailability4Show)=='function'){tooltip_time=getDayAvailability4Show(resource_id,tooltip_time,td_class);}
jQuery('#calendar_booking'+resource_id+' td.cal4date-'+td_class).attr('data-content',tooltip_time);}
function wpbc_get_times_from_dates_arr(dates_arr,resource_id,td_class){var i;var h='';var m='';var s='';var times_array=[];if((typeof(dates_arr[resource_id])!=='undefined')&&(typeof(dates_arr[resource_id][td_class])!=='undefined')&&((dates_arr[resource_id][td_class][0][3]!=0)||(dates_arr[resource_id][td_class][0][4]!=0))){for(i=0;i<dates_arr[resource_id][td_class].length;i++){h=dates_arr[resource_id][td_class][i][3];if(h<10)h='0'+h;if(h==0)h='00';m=dates_arr[resource_id][td_class][i][4];if(m<10)m='0'+m;if(m==0)m='00';s=dates_arr[resource_id][td_class][i][5];if(s==2)s='02';if(s==1)s='01';if(s==0)s='00';times_array[times_array.length]=[h,m,s];}}
return times_array;}
function wpbc_is_time_field_in_booking_form(resource_id,form_elements){var count=form_elements.length;var start_time=false;var end_time=false;var duration=false;var element;for(var i=0;i<count;i++){element=form_elements[i];if(jQuery(element).closest('.booking_form_garbage').length){continue;}
if(element.name!=undefined){var my_element=element.name;if(my_element.indexOf('rangetime')!==-1){return true;}
if((my_element.indexOf('durationtime')!==-1)){duration=element.value;}
if(my_element.indexOf('starttime')!==-1){start_time=element.value;}
if(my_element.indexOf('endtime')!==-1){end_time=element.value;}}}
if((duration!==false)&&(start_time!==false)){return true;}
if((start_time!==false)&&(end_time!==false)){return true;}
return false;}
function wpbc_is_this_time_selection_not_available(resource_id,form_elements){if(location.href.indexOf('page=wpbc-new')>0){return false;}
var count=form_elements.length;var start_time=false;var end_time=false;var duration=false;var element;var element_start=false;var element_end=false;var element_duration=false;var element_rangetime=false;for(var i=0;i<count;i++){element=form_elements[i];if(jQuery(element).closest('.booking_form_garbage').length){continue;}
if(element.name!=undefined){var my_element=element.name;if(my_element.indexOf('rangetime')!==-1){if(element.value==''){showErrorMessage(element,message_verif_requred);return true;}
var my_rangetime=element.value.split('-');if(my_rangetime.length>1){start_time=my_rangetime[0].replace(/(^\s+)|(\s+$)/g,"");end_time=my_rangetime[1].replace(/(^\s+)|(\s+$)/g,"");element_rangetime=element;}}
if((my_element.indexOf('durationtime')!==-1)){duration=element.value;element_duration=element;}
if(my_element.indexOf('starttime')!==-1){start_time=element.value;element_start=element;}
if(my_element.indexOf('endtime')!==-1){end_time=element.value;element_end=element;}}}
if((duration!==false)&&(start_time!==false)){var mylocalstarttime=start_time.split(':');var d=new Date(1980,1,1,mylocalstarttime[0],mylocalstarttime[1],0);var my_duration=duration.split(':');my_duration=my_duration[0]*60*60*1000+my_duration[1]*60*1000;d.setTime(d.getTime()+my_duration);var my_hours=d.getHours();if(my_hours<10)my_hours='0'+(my_hours+'');var my_minutes=d.getMinutes();if(my_minutes<10)my_minutes='0'+(my_minutes+'');end_time=(my_hours+'')+':'+(my_minutes+'');if(end_time=='00:00')end_time='23:59';}
if((start_time===false)||(end_time===false)){return false;}else{var valid_time=true;if((start_time=='')||(end_time==''))valid_time=false;if(!isValidTimeTextField(start_time))valid_time=false;if(!isValidTimeTextField(end_time))valid_time=false;if(valid_time===true)
if((typeof(checkRecurentTimeInside)=='function')&&(typeof(is_booking_recurrent_time)!=='undefined')&&(is_booking_recurrent_time==true)){valid_time=checkRecurentTimeInside([start_time,end_time],resource_id);}else{if(typeof(checkTimeInside)=='function'){valid_time=checkTimeInside(start_time,true,resource_id);}
if(valid_time===true){if(typeof(checkTimeInside)=='function'){valid_time=checkTimeInside(end_time,false,resource_id);}}}
if(valid_time!==true){if((is_booking_used_check_in_out_time)&&(element_start!==false)&&(element_end!==false)){showMessageUnderElement('#date_booking'+resource_id,message_checkinouttime_error,'');makeScroll('#calendar_booking'+resource_id);return true;}
if(element_rangetime!==false)showErrorTimeMessage(message_rangetime_error,element_rangetime);if(element_duration!==false)showErrorTimeMessage(message_durationtime_error,element_duration);if(element_start!==false)showErrorTimeMessage(message_starttime_error,element_start);if(element_end!==false)showErrorTimeMessage(message_endtime_error,element_end);return true;}else{return false;}}}
function isTimeTodayGone(myTime,sort_date_array){var date_to_check=sort_date_array[0];if(is_check_start_time_gone==false){date_to_check=sort_date_array[(sort_date_array.length-1)];}
if(parseInt(date_to_check[0])<parseInt(wpdev_bk_today[0]))return true;if((parseInt(date_to_check[0])==parseInt(wpdev_bk_today[0]))&&(parseInt(date_to_check[1])<parseInt(wpdev_bk_today[1])))
return true;if((parseInt(date_to_check[0])==parseInt(wpdev_bk_today[0]))&&(parseInt(date_to_check[1])==parseInt(wpdev_bk_today[1]))&&(parseInt(date_to_check[2])<parseInt(wpdev_bk_today[2])))
return true;if((parseInt(date_to_check[0])==parseInt(wpdev_bk_today[0]))&&(parseInt(date_to_check[1])==parseInt(wpdev_bk_today[1]))&&(parseInt(date_to_check[2])==parseInt(wpdev_bk_today[2]))){var mytime_value=myTime.split(":");mytime_value=mytime_value[0]*60+parseInt(mytime_value[1]);var current_time_value=wpdev_bk_today[3]*60+parseInt(wpdev_bk_today[4]);if(current_time_value>mytime_value)return true;}
return false;}
function checkTimeInside(mytime,is_start_time,bk_type){if(typeof(check_entered_time_to_global_availability_time)=='function'){if(!check_entered_time_to_global_availability_time(mytime,is_start_time,bk_type))return false;}
var my_dates_str=document.getElementById('date_booking'+bk_type).value;return checkTimeInsideProcess(mytime,is_start_time,bk_type,my_dates_str);}
function checkRecurentTimeInside(my_rangetime,bk_type){var valid_time=true;var my_dates_str=document.getElementById('date_booking'+bk_type).value;var date_array=my_dates_str.split(", ");if(date_array.length==2){if(date_array[0]==date_array[1]){date_array=[date_array[0]];}}
var temp_date_str='';for(var i=0;i<date_array.length;i++){temp_date_str=date_array[i];if(checkTimeInsideProcess(my_rangetime[0],true,bk_type,temp_date_str)==false)valid_time=false;if(checkTimeInsideProcess(my_rangetime[1],false,bk_type,temp_date_str)==false)valid_time=false;}
return valid_time;}
function checkTimeInsideProcess(mytime,is_start_time,bk_type,my_dates_str){var date_array=my_dates_str.split(", ");if(date_array.length==2){if(date_array[0]==date_array[1]){date_array=[date_array[0]];}}
var temp_elemnt;var td_class;var sort_date_array=[];var work_date_array=[];var times_array=[];var is_check_for_time;for(var i=0;i<date_array.length;i++){temp_elemnt=date_array[i].split(".");sort_date_array[i]=[temp_elemnt[2],temp_elemnt[1]+'',temp_elemnt[0]+''];}
sort_date_array.sort();for(i=0;i<sort_date_array.length;i++){sort_date_array[i]=[parseInt(sort_date_array[i][0]*1),parseInt(sort_date_array[i][1]*1),parseInt(sort_date_array[i][2]*1)];}
if(((is_check_start_time_gone)&&(is_start_time))||((!is_check_start_time_gone)&&(!is_start_time))){if(isTimeTodayGone(mytime,sort_date_array))return false;}
work_date_array=sort_date_array;for(var j=0;j<work_date_array.length;j++){td_class=work_date_array[j][1]+'-'+work_date_array[j][2]+'-'+work_date_array[j][0];if((j==0)||(j==(work_date_array.length-1)))is_check_for_time=true;else is_check_for_time=false;if(typeof(date2approve[bk_type])!=='undefined'){if((typeof(date2approve[bk_type][td_class])!=='undefined')){if(!is_check_for_time){return false;}
if((date2approve[bk_type][td_class][0][3]!=0)||(date2approve[bk_type][td_class][0][4]!=0)){}else{return false;}}}
if(typeof(date_approved[bk_type])!=='undefined'){if((typeof(date_approved[bk_type][td_class])!=='undefined')){if(!is_check_for_time){return false;}
if((date_approved[bk_type][td_class][0][3]!=0)||(date_approved[bk_type][td_class][0][4]!=0)){}else{return false;}}}}
if(is_start_time)work_date_array=sort_date_array[0];else work_date_array=sort_date_array[sort_date_array.length-1];td_class=work_date_array[1]+'-'+work_date_array[2]+'-'+work_date_array[0];if(typeof(date2approve[bk_type])!=='undefined')
if(typeof(date2approve[bk_type][td_class])!=='undefined')
for(i=0;i<date2approve[bk_type][td_class].length;i++){h=date2approve[bk_type][td_class][i][3];if(h<10)h='0'+h;if(h==0)h='00';m=date2approve[bk_type][td_class][i][4];if(m<10)m='0'+m;if(m==0)m='00';s=date2approve[bk_type][td_class][i][5];if(s=='02'){m=(m*1)+time_buffer_value;if(m>59){m=m-60;h=(h*1)+1;}
if(m<10)m='0'+m;}
times_array[times_array.length]=[h,m,s];}
if(typeof(date_approved[bk_type])!=='undefined')
if(typeof(date_approved[bk_type][td_class])!=='undefined')
for(i=0;i<date_approved[bk_type][td_class].length;i++){h=date_approved[bk_type][td_class][i][3];if(h<10)h='0'+h;if(h==0)h='00';m=date_approved[bk_type][td_class][i][4];if(m<10)m='0'+m;if(m==0)m='00';s=date_approved[bk_type][td_class][i][5];if(s=='02'){m=(m*1)+time_buffer_value;if(m>59){m=m-60;h=(h*1)+1;}
if(m<10)m='0'+m;}
times_array[times_array.length]=[h,m,s];}
times_array.sort();var times_in_day=[];var times_in_day_interval_marks=[];for(i=0;i<times_array.length;i++){s=times_array[i][2];if((s==2)&&(i==0)){times_in_day[times_in_day.length]=0;times_in_day_interval_marks[times_in_day_interval_marks.length]=1;}
times_in_day[times_in_day.length]=times_array[i][0]*60+parseInt(times_array[i][1]);times_in_day_interval_marks[times_in_day_interval_marks.length]=s;if((s==1)&&(i==(times_array.length-1))){times_in_day[times_in_day.length]=(24*60);times_in_day_interval_marks[times_in_day_interval_marks.length]=2;}}
var mytime_value=mytime.split(":");mytime_value=mytime_value[0]*60+parseInt(mytime_value[1]);var start_i=0;if(start_time_checking_index!=undefined)
if(start_time_checking_index[0]!=undefined)
if((!is_start_time)&&(sort_date_array.length==1)){start_i=start_time_checking_index[0];}
i=start_i;for(i=start_i;i<times_in_day.length;i++){times_in_day[i]=parseInt(times_in_day[i]);mytime_value=parseInt(mytime_value);if(is_start_time){if(mytime_value>times_in_day[i]){}else if(mytime_value==times_in_day[i]){if(times_in_day_interval_marks[i]==1){return false;}else{if((i+1)<=(times_in_day.length-1)){if(times_in_day[i+1]<=mytime_value)return false;else{if(sort_date_array.length>1)
if((i+1)<=(times_in_day.length-1))return false;start_time_checking_index=[i,td_class,mytime_value];return true;}}
if(sort_date_array.length>1)
if((i+1)<=(times_in_day.length-1))return false;start_time_checking_index=[i,td_class,mytime_value];return true;}}else if(mytime_value<times_in_day[i]){if(times_in_day_interval_marks[i]==2){return false;}else{if(sort_date_array.length>1)
if((i+1)<=(times_in_day.length-1))return false;start_time_checking_index=[i,td_class,mytime_value];return true;}}}else{if(sort_date_array.length==1){if(start_time_checking_index!=undefined)
if(start_time_checking_index[2]!=undefined)
if((start_time_checking_index[2]==times_in_day[i])&&(times_in_day_interval_marks[i]==2)){}else if(times_in_day[i]<mytime_value)return false;else{if(start_time_checking_index[2]>=mytime_value)return false;return true;}}else{if(times_in_day[i]<mytime_value)return false;else return true;}}}
if(is_start_time)start_time_checking_index=[i,td_class,mytime_value];else{if(start_time_checking_index!=undefined)
if(start_time_checking_index[2]!=undefined)
if((sort_date_array.length==1)&&(start_time_checking_index[2]>=mytime_value))return false;}
return true;}
function showErrorTimeMessage(my_message,element){var element_name=element.name;makeScroll(element);jQuery("[name='"+element_name+"']").css({'border':'1px solid red'}).fadeOut(350).fadeIn(500).animate({opacity:1},4000).animate({border:'1px solid #DFDFDF'},100);jQuery("[name='"+element_name+"']").after('<div class="wpdev-help-message alert alert-warning">'+my_message+'</div>');jQuery(".wpdev-help-message").animate({opacity:1},10000).fadeOut(2000);element.focus();return true;}
function isValidTimeTextField(timeStr){var timePat=/^(\d{1,2}):(\d{2})(\s?(AM|am|PM|pm))?$/;var matchArray=timeStr.match(timePat);if(matchArray==null){return false;}
var hour=matchArray[1];var minute=matchArray[2];var ampm=matchArray[4];if(ampm==""){ampm=null}
if(hour<0||hour>24){return false;}
if(hour>12&&ampm!=null){return false;}
if(minute<0||minute>59){return false;}
return true;}
function bkDisableBookedTimeSlots(all_dates,bk_type){var inst=jQuery.datepick._getInst(document.getElementById('calendar_booking'+bk_type));var td_class;var time_slot_field_name='select[name="rangetime'+bk_type+'"]';var time_slot_field_name2='select[name="rangetime'+bk_type+'[]"]';var start_time_slot_field_name='select[name="starttime'+bk_type+'"]';var start_time_slot_field_name2='select[name="starttime'+bk_type+'[]"]';all_dates=get_first_day_of_selection(all_dates);if((bk_days_selection_mode=='single')||(true)){var current_single_day_selections=all_dates.split('.');td_class=(current_single_day_selections[1]*1)+'-'+(current_single_day_selections[0]*1)+'-'+(current_single_day_selections[2]*1);var times_array=[];jQuery(time_slot_field_name+' option:disabled,'+time_slot_field_name2+' option:disabled,'+start_time_slot_field_name+' option:disabled,'+start_time_slot_field_name2+' option:disabled').removeClass('booked');jQuery(time_slot_field_name+' option:disabled,'+time_slot_field_name2+' option:disabled,'+start_time_slot_field_name+' option:disabled,'+start_time_slot_field_name2+' option:disabled').removeAttr('disabled');if(jQuery(time_slot_field_name+','+time_slot_field_name2+','+start_time_slot_field_name+','+start_time_slot_field_name2).length==0)return;var range_time_object=jQuery(time_slot_field_name+' option:first,'+time_slot_field_name2+' option:first,'+start_time_slot_field_name+' option:first,'+start_time_slot_field_name2+' option:first');if(range_time_object==undefined)return;if(typeof(date_approved[bk_type])!=='undefined')
if(typeof(date_approved[bk_type][td_class])!=='undefined'){if((date_approved[bk_type][td_class][0][3]!=0)||(date_approved[bk_type][td_class][0][4]!=0)){for(i=0;i<date_approved[bk_type][td_class].length;i++){h=date_approved[bk_type][td_class][i][3];if(h<10)h='0'+h;if(h==0)h='00';m=date_approved[bk_type][td_class][i][4];if(m<10)m='0'+m;if(m==0)m='00';s=date_approved[bk_type][td_class][i][5];if(s==2)s='02';times_array[times_array.length]=[h,m,s];}}}
if(typeof(date2approve[bk_type])!=='undefined')
if(typeof(date2approve[bk_type][td_class])!=='undefined')
if((date2approve[bk_type][td_class][0][3]!=0)||(date2approve[bk_type][td_class][0][4]!=0))
{for(i=0;i<date2approve[bk_type][td_class].length;i++){h=date2approve[bk_type][td_class][i][3];if(h<10)h='0'+h;if(h==0)h='00';m=date2approve[bk_type][td_class][i][4];if(m<10)m='0'+m;if(m==0)m='00';s=date2approve[bk_type][td_class][i][5];if(s==2)s='02';times_array[times_array.length]=[h,m,s];}}
times_array.sort();if(times_array.length>0){s=parseInt(times_array[0][2]);if(s==2){times_array[times_array.length]=['00','00','01'];times_array.sort();}
s=parseInt(times_array[(times_array.length-1)][2]);if(s==1){times_array[times_array.length]=['23','59','02'];times_array.sort();}}
var removed_time_slots=is_time_slot_booked_for_this_time_array(bk_type,times_array,td_class);var my_time_value=jQuery(time_slot_field_name+' option,'+time_slot_field_name2+' option,'+start_time_slot_field_name+' option,'+start_time_slot_field_name2+' option');for(j=0;j<my_time_value.length;j++){if(wpdev_in_array(removed_time_slots,j)){jQuery(time_slot_field_name+' option:eq('+j+'),'+time_slot_field_name2+' option:eq('+j+'),'+start_time_slot_field_name+' option:eq('+j+'),'+start_time_slot_field_name2+' option:eq('+j+')').attr('disabled','disabled');jQuery(time_slot_field_name+' option:eq('+j+'),'+time_slot_field_name2+' option:eq('+j+'),'+start_time_slot_field_name+' option:eq('+j+'),'+start_time_slot_field_name2+' option:eq('+j+')').addClass('booked');if(jQuery(time_slot_field_name+' option:eq('+j+'),'+time_slot_field_name2+' option:eq('+j+'),'+start_time_slot_field_name+' option:eq('+j+'),'+start_time_slot_field_name2+' option:eq('+j+')').attr('selected')){jQuery(time_slot_field_name+' option:eq('+j+'),'+time_slot_field_name2+' option:eq('+j+'),'+start_time_slot_field_name+' option:eq('+j+'),'+start_time_slot_field_name2+' option:eq('+j+')').removeAttr('selected');if(IEversion_4_bk==7){var rangetime_element=document.getElementsByName("rangetime"+bk_type);if(typeof(rangetime_element)!='undefined'&&rangetime_element!=null){set_selected_first_not_disabled_option_IE7(document.getElementsByName("rangetime"+bk_type)[0]);}
var start_element=document.getElementsByName("starttime"+bk_type);if(typeof(start_element)!='undefined'&&start_element!=null){set_selected_first_not_disabled_option_IE7(document.getElementsByName("starttime"+bk_type)[0]);}}}}}
if(IEversion_4_bk==7){emulate_disabled_options_to_gray_IE7("rangetime"+bk_type);emulate_disabled_options_to_gray_IE7("starttime"+bk_type);}}}
var isIE_4_bk=(navigator.appName=="Microsoft Internet Explorer");var IEversion_4_bk=navigator.appVersion;if(isIE_4_bk){IEversion_4_bk=parseInt(IEversion_4_bk.substr(IEversion_4_bk.indexOf("MSIE")+4));}else{IEversion_4_bk=0;}
if(IEversion_4_bk==7){window.onload=function(){if(document.getElementsByTagName){var s=document.getElementsByTagName("select");if(s.length>0){window.select_current=new Array();for(var i=0,select;select=s[i];i++){select.onfocus=function(){window.select_current[this.id]=this.selectedIndex;}
select.onchange=function(){set_selected_previos_selected_option_IE7(this);}
emulate_disabled_options_to_gray_IE7(select.name);}}}}
function set_selected_previos_selected_option_IE7(e){if(e.options[e.selectedIndex].disabled){e.selectedIndex=window.select_current[e.id];}}
function set_selected_first_not_disabled_option_IE7(e){if(e.options[e.selectedIndex].disabled){for(var i=0,option;option=e.options[i];i++){if(!option.disabled){e.selectedIndex=i;return 0;}}}
return 0;}
function emulate_disabled_options_to_gray_IE7(ename){jQuery('select[name="'+ename+'"] option,select[name="'+ename+'[]"] option').each(function(index){if(jQuery(this).prop('disabled')){jQuery(this).css('color','graytext');}else{jQuery(this).css('color','menutext');}});}}
function is_time_slot_booked_for_this_time_array(bk_type,times_array,td_class){var time_slot_field_name='select[name="rangetime'+bk_type+'"]';var time_slot_field_name2='select[name="rangetime'+bk_type+'[]"]';if(typeof(wpbc_get_conditional_section_id_for_weekday)=='function'){var conditional_field_element_id=wpbc_get_conditional_section_id_for_weekday(td_class,bk_type);if(conditional_field_element_id!==false){time_slot_field_name=conditional_field_element_id+' '+'select[name="rangetime'+bk_type+'"]';time_slot_field_name2=conditional_field_element_id+' '+'select[name="rangetime'+bk_type+'[]"]';}}
var start_time_slot_field_name='select[name="starttime'+bk_type+'"]';var start_time_slot_field_name2='select[name="starttime'+bk_type+'[]"]';if(typeof(wpbc_get_conditional_section_id_for_weekday)=='function'){var conditional_field_element_id=wpbc_get_conditional_section_id_for_weekday(td_class,bk_type);if(conditional_field_element_id!==false){start_time_slot_field_name=conditional_field_element_id+' '+'select[name="starttime'+bk_type+'"]';start_time_slot_field_name2=conditional_field_element_id+' '+'select[name="starttime'+bk_type+'[]"]';}}
times_array.sort();var my_time_value='';var j;var bk_time_slot_selection='';var minutes_booked;var minutes_slot;var my_range_time;var removed_time_slots=[];if(times_array.length>0){if(parseInt(times_array[0][2])==2){var new_times_array=[];new_times_array[new_times_array.length]=['00','00','01'];for(var i=0;i<times_array.length;i++){new_times_array[new_times_array.length]=times_array[i];}
times_array=new_times_array;}
if(parseInt(times_array[(times_array.length-1)][2])==1){times_array[times_array.length]=['23','59','02'];}}
for(var i=0;i<times_array.length;i++){var s=parseInt(times_array[i][2]);if(i>0){if(s==2){my_range_time=times_array[i-1][0]+':'+times_array[i-1][1]+' - '+times_array[i][0]+':'+times_array[i][1];my_time_value=jQuery(time_slot_field_name+' option,'+time_slot_field_name2+' option,'+start_time_slot_field_name+' option,'+start_time_slot_field_name2+' option');for(j=0;j<my_time_value.length;j++){if(my_time_value[j].value==my_range_time){removed_time_slots[removed_time_slots.length]=j;}else{bk_time_slot_selection=my_time_value[j].value;var is_time_range=bk_time_slot_selection.indexOf("-");if(is_time_range>-1){bk_time_slot_selection=bk_time_slot_selection.split('-');bk_time_slot_selection[0]=jQuery.trim(bk_time_slot_selection[0]);bk_time_slot_selection[1]=jQuery.trim(bk_time_slot_selection[1]);bk_time_slot_selection[0]=bk_time_slot_selection[0].split(':');bk_time_slot_selection[1]=bk_time_slot_selection[1].split(':');minutes_booked=[(parseInt(times_array[i-1][0]*60)+parseInt(times_array[i-1][1])),(parseInt(times_array[i][0]*60)+parseInt(times_array[i][1]))];minutes_slot=[(parseInt(bk_time_slot_selection[0][0]*60)+parseInt(bk_time_slot_selection[0][1])),(parseInt(bk_time_slot_selection[1][0]*60)+parseInt(bk_time_slot_selection[1][1]))];if(((minutes_booked[0]>=minutes_slot[0])&&(minutes_booked[0]<minutes_slot[1]))||((minutes_booked[1]>minutes_slot[0])&&(minutes_booked[1]<=minutes_slot[1]))||((minutes_slot[0]>=minutes_booked[0])&&(minutes_slot[0]<minutes_booked[1]))||((minutes_slot[1]>minutes_booked[0])&&(minutes_slot[1]<=minutes_booked[1]))){removed_time_slots[removed_time_slots.length]=j;}}else{bk_time_slot_selection=bk_time_slot_selection.split(':');minutes_booked=[(parseInt(times_array[i-1][0]*60)+parseInt(times_array[i-1][1])),(parseInt(times_array[i][0]*60)+parseInt(times_array[i][1]))];minutes_slot=[(parseInt(bk_time_slot_selection[0]*60)+parseInt(bk_time_slot_selection[1]))];if(((minutes_slot[0]>=minutes_booked[0])&&(minutes_slot[0]<minutes_booked[1]))){removed_time_slots[removed_time_slots.length]=j;}}}}}}}
return removed_time_slots;}
function isDayFullByTime(bk_type,td_class){var times_array=[];var time_slot_field_name='select[name="rangetime'+bk_type+'"]';var time_slot_field_name2='select[name="rangetime'+bk_type+'[]"]';if(typeof(wpbc_get_conditional_section_id_for_weekday)=='function'){var conditional_field_element_id=wpbc_get_conditional_section_id_for_weekday(td_class,bk_type);if(conditional_field_element_id!==false){time_slot_field_name=conditional_field_element_id+' '+'select[name="rangetime'+bk_type+'"]';time_slot_field_name2=conditional_field_element_id+' '+'select[name="rangetime'+bk_type+'[]"]';}}
if(typeof(wpbc_get_conditional_section_id_for_seasons)=='function'){var conditional_field_element_id2=wpbc_get_conditional_section_id_for_seasons(td_class,bk_type);if(conditional_field_element_id2!==false){time_slot_field_name=conditional_field_element_id2+' '+'select[name="rangetime'+bk_type+'"]';time_slot_field_name2=conditional_field_element_id2+' '+'select[name="rangetime'+bk_type+'[]"]';}}
if(typeof(date_approved[bk_type])!=='undefined')
if(typeof(date_approved[bk_type][td_class])!=='undefined'){for(i=0;i<date_approved[bk_type][td_class].length;i++){if((date_approved[bk_type][td_class][0][3]!=0)||(date_approved[bk_type][td_class][0][4]!=0)){h=date_approved[bk_type][td_class][i][3];if(h<10)h='0'+h;if(h==0)h='00';m=date_approved[bk_type][td_class][i][4];if(m<10)m='0'+m;if(m==0)m='00';s=date_approved[bk_type][td_class][i][5];if(s==2)s='02';times_array[times_array.length]=[h,m,s];}}}
if(typeof(date2approve[bk_type])!=='undefined')
if(typeof(date2approve[bk_type][td_class])!=='undefined')
for(i=0;i<date2approve[bk_type][td_class].length;i++){if((date2approve[bk_type][td_class][0][3]!=0)||(date2approve[bk_type][td_class][0][4]!=0)){h=date2approve[bk_type][td_class][i][3];if(h<10)h='0'+h;if(h==0)h='00';m=date2approve[bk_type][td_class][i][4];if(m<10)m='0'+m;if(m==0)m='00';s=date2approve[bk_type][td_class][i][5];if(s==2)s='02';times_array[times_array.length]=[h,m,s];}}
times_array.sort();var start_time_fields='select[name="starttime'+bk_type+'"]';var start_time_fields2='select[name="starttime'+bk_type+'[]"]';var is_element_exist=jQuery(time_slot_field_name+','+time_slot_field_name2+','+start_time_fields+','+start_time_fields2).length;if(is_element_exist){var my_timerange_value=jQuery(time_slot_field_name+' option,'+time_slot_field_name2+' option');var my_st_en_times;var my_temp_time;var times_ranges_array=[];for(var j=0;j<my_timerange_value.length;j++){my_st_en_times=my_timerange_value[j].value.split(' - ');my_temp_time=my_st_en_times[0].split(':');times_ranges_array[times_ranges_array.length]=[my_temp_time[0],my_temp_time[1],'01'];my_temp_time=my_st_en_times[1].split(':');times_ranges_array[times_ranges_array.length]=[my_temp_time[0],my_temp_time[1],'02'];}
if(times_array.length==times_ranges_array.length){var is_all_same=true;for(var i=0;i<times_array.length;i++){if((times_array[i][0]!=times_ranges_array[i][0])||(times_array[i][1]!=times_ranges_array[i][1])||(times_array[i][2]!=times_ranges_array[i][2]))
is_all_same=false;}
if(is_all_same)return true;}
var my_start_time_options=jQuery(start_time_fields+' option,'+start_time_fields2+' option');if((my_start_time_options.length>0)&&((bk_days_selection_mode=='single')||(bk_days_selection_mode=='multiple'))){var removed_time_slots=is_time_slot_booked_for_this_time_array(bk_type,times_array,td_class);var some_exist_time_slots=[];var my_time_value=jQuery(start_time_fields+' option,'+start_time_fields2+' option');for(j=0;j<my_time_value.length;j++){if(wpdev_in_array(removed_time_slots,j)){}else{some_exist_time_slots[some_exist_time_slots.length]=j;}}
if(some_exist_time_slots.length==0)return true;}
if((my_timerange_value.length>0)&&((bk_days_selection_mode=='single')||(bk_days_selection_mode=='multiple'))){var removed_time_slots=is_time_slot_booked_for_this_time_array(bk_type,times_array,td_class);var some_exist_time_slots=[];var my_time_value=jQuery(time_slot_field_name+' option,'+time_slot_field_name2+' option');for(j=0;j<my_time_value.length;j++){if(wpdev_in_array(removed_time_slots,j)){}else{some_exist_time_slots[some_exist_time_slots.length]=j;}}
if(some_exist_time_slots.length==0)return true;}}
for(var i=0;i<times_array.length;i++){s=parseInt(times_array[i][2]);if(i==0)
if(s!==2){return false;}
if(i>0){if(s==1)
if(!((times_array[i-1][0]==times_array[i][0])&&(times_array[i-1][1]==times_array[i][1]))){return false;}}
if(i==(times_array.length-1))
if(s!==1){return false;}}
return true;};
(function($){'use strict';if(typeof wpcf7==='undefined'||wpcf7===null){return;}
wpcf7=$.extend({cached:0,inputs:[]},wpcf7);$(function(){wpcf7.supportHtml5=(function(){var features={};var input=document.createElement('input');features.placeholder='placeholder'in input;var inputTypes=['email','url','tel','number','range','date'];$.each(inputTypes,function(index,value){input.setAttribute('type',value);features[value]=input.type!=='text';});return features;})();$('div.wpcf7 > form').each(function(){var $form=$(this);wpcf7.initForm($form);if(wpcf7.cached){wpcf7.refill($form);}});});wpcf7.getId=function(form){return parseInt($('input[name="_wpcf7"]',form).val(),10);};wpcf7.initForm=function(form){var $form=$(form);$form.submit(function(event){if(!wpcf7.supportHtml5.placeholder){$('[placeholder].placeheld',$form).each(function(i,n){$(n).val('').removeClass('placeheld');});}
if(typeof window.FormData==='function'){wpcf7.submit($form);event.preventDefault();}});$('.wpcf7-submit',$form).after('<span class="ajax-loader"></span>');wpcf7.toggleSubmit($form);$form.on('click','.wpcf7-acceptance',function(){wpcf7.toggleSubmit($form);});$('.wpcf7-exclusive-checkbox',$form).on('click','input:checkbox',function(){var name=$(this).attr('name');$form.find('input:checkbox[name="'+name+'"]').not(this).prop('checked',false);});$('.wpcf7-list-item.has-free-text',$form).each(function(){var $freetext=$(':input.wpcf7-free-text',this);var $wrap=$(this).closest('.wpcf7-form-control');if($(':checkbox, :radio',this).is(':checked')){$freetext.prop('disabled',false);}else{$freetext.prop('disabled',true);}
$wrap.on('change',':checkbox, :radio',function(){var $cb=$('.has-free-text',$wrap).find(':checkbox, :radio');if($cb.is(':checked')){$freetext.prop('disabled',false).focus();}else{$freetext.prop('disabled',true);}});});if(!wpcf7.supportHtml5.placeholder){$('[placeholder]',$form).each(function(){$(this).val($(this).attr('placeholder'));$(this).addClass('placeheld');$(this).focus(function(){if($(this).hasClass('placeheld')){$(this).val('').removeClass('placeheld');}});$(this).blur(function(){if(''===$(this).val()){$(this).val($(this).attr('placeholder'));$(this).addClass('placeheld');}});});}
if(wpcf7.jqueryUi&&!wpcf7.supportHtml5.date){$form.find('input.wpcf7-date[type="date"]').each(function(){$(this).datepicker({dateFormat:'yy-mm-dd',minDate:new Date($(this).attr('min')),maxDate:new Date($(this).attr('max'))});});}
if(wpcf7.jqueryUi&&!wpcf7.supportHtml5.number){$form.find('input.wpcf7-number[type="number"]').each(function(){$(this).spinner({min:$(this).attr('min'),max:$(this).attr('max'),step:$(this).attr('step')});});}
$('.wpcf7-character-count',$form).each(function(){var $count=$(this);var name=$count.attr('data-target-name');var down=$count.hasClass('down');var starting=parseInt($count.attr('data-starting-value'),10);var maximum=parseInt($count.attr('data-maximum-value'),10);var minimum=parseInt($count.attr('data-minimum-value'),10);var updateCount=function(target){var $target=$(target);var length=$target.val().length;var count=down?starting-length:length;$count.attr('data-current-value',count);$count.text(count);if(maximum&&maximum<length){$count.addClass('too-long');}else{$count.removeClass('too-long');}
if(minimum&&length<minimum){$count.addClass('too-short');}else{$count.removeClass('too-short');}};$(':input[name="'+name+'"]',$form).each(function(){updateCount(this);$(this).keyup(function(){updateCount(this);});});});$form.on('change','.wpcf7-validates-as-url',function(){var val=$.trim($(this).val());if(val&&!val.match(/^[a-z][a-z0-9.+-]*:/i)&&-1!==val.indexOf('.')){val=val.replace(/^\/+/,'');val='http://'+val;}
$(this).val(val);});};wpcf7.submit=function(form){if(typeof window.FormData!=='function'){return;}
var $form=$(form);$('.ajax-loader',$form).addClass('is-active');wpcf7.clearResponse($form);var formData=new FormData($form.get(0));var detail={id:$form.closest('div.wpcf7').attr('id'),status:'init',inputs:[],formData:formData};$.each($form.serializeArray(),function(i,field){if('_wpcf7'==field.name){detail.contactFormId=field.value;}else if('_wpcf7_version'==field.name){detail.pluginVersion=field.value;}else if('_wpcf7_locale'==field.name){detail.contactFormLocale=field.value;}else if('_wpcf7_unit_tag'==field.name){detail.unitTag=field.value;}else if('_wpcf7_container_post'==field.name){detail.containerPostId=field.value;}else if(field.name.match(/^_wpcf7_\w+_free_text_/)){var owner=field.name.replace(/^_wpcf7_\w+_free_text_/,'');detail.inputs.push({name:owner+'-free-text',value:field.value});}else if(field.name.match(/^_/)){}else{detail.inputs.push(field);}});wpcf7.triggerEvent($form.closest('div.wpcf7'),'beforesubmit',detail);var ajaxSuccess=function(data,status,xhr,$form){detail.id=$(data.into).attr('id');detail.status=data.status;detail.apiResponse=data;var $message=$('.wpcf7-response-output',$form);switch(data.status){case'validation_failed':$.each(data.invalidFields,function(i,n){$(n.into,$form).each(function(){wpcf7.notValidTip(this,n.message);$('.wpcf7-form-control',this).addClass('wpcf7-not-valid');$('[aria-invalid]',this).attr('aria-invalid','true');});});$message.addClass('wpcf7-validation-errors');$form.addClass('invalid');wpcf7.triggerEvent(data.into,'invalid',detail);break;case'acceptance_missing':$message.addClass('wpcf7-acceptance-missing');$form.addClass('unaccepted');wpcf7.triggerEvent(data.into,'unaccepted',detail);break;case'spam':$message.addClass('wpcf7-spam-blocked');$form.addClass('spam');wpcf7.triggerEvent(data.into,'spam',detail);break;case'aborted':$message.addClass('wpcf7-aborted');$form.addClass('aborted');wpcf7.triggerEvent(data.into,'aborted',detail);break;case'mail_sent':$message.addClass('wpcf7-mail-sent-ok');$form.addClass('sent');wpcf7.triggerEvent(data.into,'mailsent',detail);break;case'mail_failed':$message.addClass('wpcf7-mail-sent-ng');$form.addClass('failed');wpcf7.triggerEvent(data.into,'mailfailed',detail);break;default:var customStatusClass='custom-'
+data.status.replace(/[^0-9a-z]+/i,'-');$message.addClass('wpcf7-'+customStatusClass);$form.addClass(customStatusClass);}
wpcf7.refill($form,data);wpcf7.triggerEvent(data.into,'submit',detail);if('mail_sent'==data.status){$form.each(function(){this.reset();});wpcf7.toggleSubmit($form);}
if(!wpcf7.supportHtml5.placeholder){$form.find('[placeholder].placeheld').each(function(i,n){$(n).val($(n).attr('placeholder'));});}
$message.html('').append(data.message).slideDown('fast');$message.attr('role','alert');$('.screen-reader-response',$form.closest('.wpcf7')).each(function(){var $response=$(this);$response.html('').attr('role','').append(data.message);if(data.invalidFields){var $invalids=$('<ul></ul>');$.each(data.invalidFields,function(i,n){if(n.idref){var $li=$('<li></li>').append($('<a></a>').attr('href','#'+n.idref).append(n.message));}else{var $li=$('<li></li>').append(n.message);}
$invalids.append($li);});$response.append($invalids);}
$response.attr('role','alert').focus();});};$.ajax({type:'POST',url:wpcf7.apiSettings.getRoute('/contact-forms/'+wpcf7.getId($form)+'/feedback'),data:formData,dataType:'json',processData:false,contentType:false}).done(function(data,status,xhr){ajaxSuccess(data,status,xhr,$form);$('.ajax-loader',$form).removeClass('is-active');}).fail(function(xhr,status,error){var $e=$('<div class="ajax-error"></div>').text(error.message);$form.after($e);});};wpcf7.triggerEvent=function(target,name,detail){var $target=$(target);var event=new CustomEvent('wpcf7'+name,{bubbles:true,detail:detail});$target.get(0).dispatchEvent(event);$target.trigger('wpcf7:'+name,detail);$target.trigger(name+'.wpcf7',detail);};wpcf7.toggleSubmit=function(form,state){var $form=$(form);var $submit=$('input:submit',$form);if(typeof state!=='undefined'){$submit.prop('disabled',!state);return;}
if($form.hasClass('wpcf7-acceptance-as-validation')){return;}
$submit.prop('disabled',false);$('.wpcf7-acceptance',$form).each(function(){var $span=$(this);var $input=$('input:checkbox',$span);if(!$span.hasClass('optional')){if($span.hasClass('invert')&&$input.is(':checked')||!$span.hasClass('invert')&&!$input.is(':checked')){$submit.prop('disabled',true);return false;}}});};wpcf7.notValidTip=function(target,message){var $target=$(target);$('.wpcf7-not-valid-tip',$target).remove();$('<span role="alert" class="wpcf7-not-valid-tip"></span>').text(message).appendTo($target);if($target.is('.use-floating-validation-tip *')){var fadeOut=function(target){$(target).not(':hidden').animate({opacity:0},'fast',function(){$(this).css({'z-index':-100});});};$target.on('mouseover','.wpcf7-not-valid-tip',function(){fadeOut(this);});$target.on('focus',':input',function(){fadeOut($('.wpcf7-not-valid-tip',$target));});}};wpcf7.refill=function(form,data){var $form=$(form);var refillCaptcha=function($form,items){$.each(items,function(i,n){$form.find(':input[name="'+i+'"]').val('');$form.find('img.wpcf7-captcha-'+i).attr('src',n);var match=/([0-9]+)\.(png|gif|jpeg)$/.exec(n);$form.find('input:hidden[name="_wpcf7_captcha_challenge_'+i+'"]').attr('value',match[1]);});};var refillQuiz=function($form,items){$.each(items,function(i,n){$form.find(':input[name="'+i+'"]').val('');$form.find(':input[name="'+i+'"]').siblings('span.wpcf7-quiz-label').text(n[0]);$form.find('input:hidden[name="_wpcf7_quiz_answer_'+i+'"]').attr('value',n[1]);});};if(typeof data==='undefined'){$.ajax({type:'GET',url:wpcf7.apiSettings.getRoute('/contact-forms/'+wpcf7.getId($form)+'/refill'),beforeSend:function(xhr){var nonce=$form.find(':input[name="_wpnonce"]').val();if(nonce){xhr.setRequestHeader('X-WP-Nonce',nonce);}},dataType:'json'}).done(function(data,status,xhr){if(data.captcha){refillCaptcha($form,data.captcha);}
if(data.quiz){refillQuiz($form,data.quiz);}});}else{if(data.captcha){refillCaptcha($form,data.captcha);}
if(data.quiz){refillQuiz($form,data.quiz);}}};wpcf7.clearResponse=function(form){var $form=$(form);$form.removeClass('invalid spam sent failed');$form.siblings('.screen-reader-response').html('').attr('role','');$('.wpcf7-not-valid-tip',$form).remove();$('[aria-invalid]',$form).attr('aria-invalid','false');$('.wpcf7-form-control',$form).removeClass('wpcf7-not-valid');$('.wpcf7-response-output',$form).hide().empty().removeAttr('role').removeClass('wpcf7-mail-sent-ok wpcf7-mail-sent-ng wpcf7-validation-errors wpcf7-spam-blocked');};wpcf7.apiSettings.getRoute=function(path){var url=wpcf7.apiSettings.root;url=url.replace(wpcf7.apiSettings.namespace,wpcf7.apiSettings.namespace+path);return url;};})(jQuery);(function(){if(typeof window.CustomEvent==="function")return false;function CustomEvent(event,params){params=params||{bubbles:false,cancelable:false,detail:undefined};var evt=document.createEvent('CustomEvent');evt.initCustomEvent(event,params.bubbles,params.cancelable,params.detail);return evt;}
CustomEvent.prototype=window.Event.prototype;window.CustomEvent=CustomEvent;})();
$(document).ready(function(){$('#menu-items li').children(this).addClass('sliding-link');$(".sliding-link").on('click',function(event){if(this.hash!==""){event.preventDefault();var hash=this.hash;$('html, body').animate({scrollTop:$(hash).offset().top},800,function(){window.location.hash=hash;});}});$("#reservar").on("click",function(){$("#form").toggleClass("display");});});
!function(a,b){"use strict";function c(){if(!e){e=!0;var a,c,d,f,g=-1!==navigator.appVersion.indexOf("MSIE 10"),h=!!navigator.userAgent.match(/Trident.*rv:11\./),i=b.querySelectorAll("iframe.wp-embedded-content");for(c=0;c<i.length;c++){if(d=i[c],!d.getAttribute("data-secret"))f=Math.random().toString(36).substr(2,10),d.src+="#?secret="+f,d.setAttribute("data-secret",f);if(g||h)a=d.cloneNode(!0),a.removeAttribute("security"),d.parentNode.replaceChild(a,d)}}}var d=!1,e=!1;if(b.querySelector)if(a.addEventListener)d=!0;if(a.wp=a.wp||{},!a.wp.receiveEmbedMessage)if(a.wp.receiveEmbedMessage=function(c){var d=c.data;if(d)if(d.secret||d.message||d.value)if(!/[^a-zA-Z0-9]/.test(d.secret)){var e,f,g,h,i,j=b.querySelectorAll('iframe[data-secret="'+d.secret+'"]'),k=b.querySelectorAll('blockquote[data-secret="'+d.secret+'"]');for(e=0;e<k.length;e++)k[e].style.display="none";for(e=0;e<j.length;e++)if(f=j[e],c.source===f.contentWindow){if(f.removeAttribute("style"),"height"===d.message){if(g=parseInt(d.value,10),g>1e3)g=1e3;else if(~~g<200)g=200;f.height=g}if("link"===d.message)if(h=b.createElement("a"),i=b.createElement("a"),h.href=f.getAttribute("src"),i.href=d.value,i.host===h.host)if(b.activeElement===f)a.top.location.href=d.value}else;}},d)a.addEventListener("message",a.wp.receiveEmbedMessage,!1),b.addEventListener("DOMContentLoaded",c,!1),a.addEventListener("load",c,!1)}(window,document);