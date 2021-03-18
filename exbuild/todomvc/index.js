/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".index.js"
/******/ 	}
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		"./pkg/index_bg.wasm": function() {
/******/ 			return {
/******/ 				"./index_bg.js": {
/******/ 					"__wbindgen_string_new": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_string_new"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_cb_drop": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_cb_drop"](p0i32);
/******/ 					},
/******/ 					"__wbg_error_4bb6c2a97407129a": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_error_4bb6c2a97407129a"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_new_59cb74e423758ede": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_new_59cb74e423758ede"]();
/******/ 					},
/******/ 					"__wbg_stack_558ba5917b466edd": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_stack_558ba5917b466edd"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbg_target_90b16facc122062f": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_target_90b16facc122062f"](p0i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Element_232bac56aebfaadb": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_instanceof_Element_232bac56aebfaadb"](p0i32);
/******/ 					},
/******/ 					"__wbg_setclassName_67184906153ab5cf": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_setclassName_67184906153ab5cf"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_classList_f8bcdf88b62ed0f2": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_classList_f8bcdf88b62ed0f2"](p0i32);
/******/ 					},
/******/ 					"__wbg_setinnerHTML_fbaa20055a3b9e5c": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_setinnerHTML_fbaa20055a3b9e5c"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_querySelector_d69682dcf49b82d7": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_querySelector_d69682dcf49b82d7"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_hash_5216e2863cc43a1d": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_hash_5216e2863cc43a1d"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_instanceof_EventTarget_ac6924cc51e580ff": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_instanceof_EventTarget_ac6924cc51e580ff"](p0i32);
/******/ 					},
/******/ 					"__wbg_addEventListener_4428ad4051fd6fee": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_addEventListener_4428ad4051fd6fee"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_addEventListener_7792c264979b122c": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_addEventListener_7792c264979b122c"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_removeEventListener_56d81963cfbbe596": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_removeEventListener_56d81963cfbbe596"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_add_aa43204d1e28cbf5": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_add_aa43204d1e28cbf5"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_remove_61eb7552f0036f2f": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_remove_61eb7552f0036f2f"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_instanceof_HtmlInputElement_631f8bb677bb0897": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_instanceof_HtmlInputElement_631f8bb677bb0897"](p0i32);
/******/ 					},
/******/ 					"__wbg_checked_30cce9c320fb74d6": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_checked_30cce9c320fb74d6"](p0i32);
/******/ 					},
/******/ 					"__wbg_setchecked_e9a4b8ce0e28b973": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_setchecked_e9a4b8ce0e28b973"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_value_98044d455b0093f7": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_value_98044d455b0093f7"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setvalue_2924913056a0a03c": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_setvalue_2924913056a0a03c"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_exception_7d318504dbea7fee": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_exception_7d318504dbea7fee"](p0i32);
/******/ 					},
/******/ 					"__wbg_length_7adf269a3140d97d": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_length_7adf269a3140d97d"](p0i32);
/******/ 					},
/******/ 					"__wbg_get_d718ba8f721b2194": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_get_d718ba8f721b2194"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_instanceof_KeyboardEvent_ddc872c409de586b": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_instanceof_KeyboardEvent_ddc872c409de586b"](p0i32);
/******/ 					},
/******/ 					"__wbg_keyCode_ab330bf4e247da83": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_keyCode_ab330bf4e247da83"](p0i32);
/******/ 					},
/******/ 					"__wbg_instanceof_HtmlElement_f6d482e9f214594e": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_instanceof_HtmlElement_f6d482e9f214594e"](p0i32);
/******/ 					},
/******/ 					"__wbg_dataset_09e72267d91c2975": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_dataset_09e72267d91c2975"](p0i32);
/******/ 					},
/******/ 					"__wbg_sethidden_6a1b4264ec295d2a": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_sethidden_6a1b4264ec295d2a"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_blur_dc647244a55ad3ca": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_blur_dc647244a55ad3ca"](p0i32);
/******/ 					},
/******/ 					"__wbg_focus_3cc1dba7cad33fd2": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_focus_3cc1dba7cad33fd2"](p0i32);
/******/ 					},
/******/ 					"__wbg_get_7ff6ecea6e5374fd": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_get_7ff6ecea6e5374fd"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_set_bbf134f1470532f5": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_set_bbf134f1470532f5"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Window_5993230e7331f098": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_instanceof_Window_5993230e7331f098"](p0i32);
/******/ 					},
/******/ 					"__wbg_document_85584f745133c6ad": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_document_85584f745133c6ad"](p0i32);
/******/ 					},
/******/ 					"__wbg_localStorage_17cc4197ac61d472": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_localStorage_17cc4197ac61d472"](p0i32);
/******/ 					},
/******/ 					"__wbg_getItem_6f7454cacf0a18f9": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_getItem_6f7454cacf0a18f9"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_setItem_606c0308b699113d": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_setItem_606c0308b699113d"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Node_594ed48b16e798ff": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_instanceof_Node_594ed48b16e798ff"](p0i32);
/******/ 					},
/******/ 					"__wbg_parentElement_d8af97dfb29502bb": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_parentElement_d8af97dfb29502bb"](p0i32);
/******/ 					},
/******/ 					"__wbg_textContent_06c1d06e1d69ea68": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_textContent_06c1d06e1d69ea68"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_settextContent_fc0cd9a9eb38a146": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_settextContent_fc0cd9a9eb38a146"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_appendChild_57f30a01b30ec33c": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_appendChild_57f30a01b30ec33c"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_isEqualNode_54a926c7446b3e82": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_isEqualNode_54a926c7446b3e82"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_removeChild_77c0b65b7396e214": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_removeChild_77c0b65b7396e214"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_location_7bf809f31f20f523": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_location_7bf809f31f20f523"](p0i32);
/******/ 					},
/******/ 					"__wbg_body_3a554c5c0c4ddc09": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_body_3a554c5c0c4ddc09"](p0i32);
/******/ 					},
/******/ 					"__wbg_createElement_9291c0306f179f1e": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_createElement_9291c0306f179f1e"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_querySelectorAll_723d14bbfc5fa2e9": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_querySelectorAll_723d14bbfc5fa2e9"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_parse_bfabfc5b3b2c8150": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_parse_bfabfc5b3b2c8150"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_stringify_e03882f4e2de48ef": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_stringify_e03882f4e2de48ef"](p0i32);
/******/ 					},
/******/ 					"__wbg_get_4e90ba4e3de362de": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_get_4e90ba4e3de362de"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_new_7c995f2adeba6fb5": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_new_7c995f2adeba6fb5"]();
/******/ 					},
/******/ 					"__wbg_isArray_dcc02660d0bae0c9": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_isArray_dcc02660d0bae0c9"](p0i32);
/******/ 					},
/******/ 					"__wbg_push_3f7c76b58919ce0d": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_push_3f7c76b58919ce0d"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_shift_3882f87049b08ece": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_shift_3882f87049b08ece"](p0i32);
/******/ 					},
/******/ 					"__wbg_newnoargs_2349ba6aefe72376": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_newnoargs_2349ba6aefe72376"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_call_e5847d15cc228e4f": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_call_e5847d15cc228e4f"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_next_cf4ec627a2e85bac": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_next_cf4ec627a2e85bac"](p0i32);
/******/ 					},
/******/ 					"__wbg_next_f613b44647788059": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_next_f613b44647788059"](p0i32);
/******/ 					},
/******/ 					"__wbg_done_4e046ac6e3b595e0": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_done_4e046ac6e3b595e0"](p0i32);
/******/ 					},
/******/ 					"__wbg_value_6fa14ba8ee7b7c3d": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_value_6fa14ba8ee7b7c3d"](p0i32);
/******/ 					},
/******/ 					"__wbg_now_054023ae26da499d": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_now_054023ae26da499d"]();
/******/ 					},
/******/ 					"__wbg_iterator_7d4f7917ab7aeca0": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_iterator_7d4f7917ab7aeca0"]();
/******/ 					},
/******/ 					"__wbg_globalThis_1d843c4ad7b6a1f5": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_globalThis_1d843c4ad7b6a1f5"]();
/******/ 					},
/******/ 					"__wbg_self_35a0fda3eb965abe": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_self_35a0fda3eb965abe"]();
/******/ 					},
/******/ 					"__wbg_window_88a6f88dd3a474f1": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_window_88a6f88dd3a474f1"]();
/******/ 					},
/******/ 					"__wbg_global_294ce70448e8fbbf": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_global_294ce70448e8fbbf"]();
/******/ 					},
/******/ 					"__wbindgen_is_function": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_is_function"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_undefined": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_is_undefined"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_object": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_is_object"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_object_clone_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_string_get": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_string_get"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_boolean_get": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_boolean_get"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_debug_string": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_debug_string"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_rethrow": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_rethrow"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper1019": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_closure_wrapper1019"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper1021": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_closure_wrapper1021"](p0i32,p1i32,p2i32);
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"1":["./pkg/index_bg.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = fetch(__webpack_require__.p + "" + {"./pkg/index_bg.wasm":"2eed00afb551628aef74"}[wasmModuleId] + ".module.wasm");
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {
/******/ 					promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 					promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// For more comments about what's going on here, check out the `hello_world`\n// example\nconst rust = Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./pkg */ \"./pkg/index.js\"));\n\nrust\n  .then(m => m.run())\n  .catch(console.error);\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });