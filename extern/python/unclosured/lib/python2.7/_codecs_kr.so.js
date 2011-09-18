"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  Runtime.QUANTUM_SIZE = 4;
  var $0___SIZE = 32;
  var $1___SIZE = 16;
  var $2___SIZE = 144;
  var $3___SIZE = 36;
  var $struct_FILE___SIZE = 148;
  var $struct_FILE___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 70, 71, 72, 76, 84, 88, 92, 96, 100, 104, 108 ];
  var $struct_MultibyteCodec___SIZE = 36;
  var $struct_PyBufferProcs___SIZE = 24;
  var $struct_PyGetSetDef___SIZE = 20;
  var $struct_PyMappingMethods___SIZE = 12;
  var $struct_PyMemberDef___SIZE = 0;
  var $struct_PyMemberDef___FLATTENER = [];
  var $struct_PyMethodDef___SIZE = 16;
  var $struct_PyNumberMethods___SIZE = 156;
  var $struct_PyObject___SIZE = 8;
  var $struct_PySequenceMethods___SIZE = 40;
  var $struct_PyStringObject___SIZE = 24;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var $struct_dbcs_index___SIZE = 8;
  var $struct_dbcs_index___FLATTENER = [ 0, 4, 5 ];
  var $struct_dbcs_map___SIZE = 12;
  var $union_MultibyteCodec_State___SIZE = 8;
  var _cofunc_8453;
  var __str;
  var __str1;
  var __str2;
  var __str3;
  var __str4;
  var __str5;
  var __str6;
  var ___methods;
  var __str7;
  var ___ksx1001_decmap;
  var _ksx1001_decmap;
  var ___cp949ext_decmap;
  var _cp949ext_decmap;
  var ___cp949_encmap;
  var _cp949_encmap;
  var _u2cgk_choseong;
  var _u2cgk_jungseong;
  var _u2cgk_jongseong;
  var __str8;
  var __str9;
  var ___PRETTY_FUNCTION___8558;
  var _cgk2u_choseong;
  var _cgk2u_jongseong;
  var _u2johabidx_choseong;
  var _u2johabidx_jungseong;
  var _u2johabidx_jongseong;
  var _u2johabjamo;
  var __str10;
  var ___PRETTY_FUNCTION___9011;
  var _johabidx_choseong;
  var _johabidx_jungseong;
  var _johabidx_jongseong;
  var _johabjamo_choseong;
  var _johabjamo_jungseong;
  var _johabjamo_jongseong;
  var __mapping_list;
  var __str11;
  var __str12;
  var __str13;
  var __str14;
  var __str15;
  var __codec_list;
  var __str16;
  function _getmultibytecodec() {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $retval;
      var $0;
      var $mod;
      
      
      if (HEAP[_cofunc_8453] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 1:
      var $3 = _PyImport_ImportModuleNoBlock(__str);
      $mod = $3;
      
      
      if ($mod == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 6;
      break;
     case 3:
      
      var $7 = _PyObject_GetAttrString($mod, __str1);
      HEAP[_cofunc_8453] = $7;
      
      
      
      var $11 = HEAP[$mod] - 1;
      
      
      HEAP[$mod] = $11;
      
      
      
      
      if (HEAP[$mod] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $22 = HEAP[HEAP[$mod + 4] + 24];
      
      FUNCTION_TABLE[$22]($mod);
      __label__ = 5;
      break;
     case 5:
      
      $0 = HEAP[_cofunc_8453];
      __label__ = 6;
      break;
     case 6:
      
      $retval = $0;
      var $retval6 = $retval;
      return $retval6;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _getcodec($self, $encoding) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $encoding_addr;
      var $retval;
      var $0;
      var $codecobj;
      var $r;
      var $cofunc;
      var $codec;
      var $enc;
      $self_addr = $self;
      $encoding_addr = $encoding;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$encoding_addr + 4] + 84] & 134217728) == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $8 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($8, __str2);
      $0 = 0;
      __label__ = 15;
      break;
     case 2:
      var $9 = _getmultibytecodec();
      $cofunc = $9;
      
      
      if ($cofunc == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 15;
      break;
     case 4:
      
      
      
      
      $enc = $encoding_addr + 20;
      $codec = __codec_list;
      __label__ = 7;
      break;
     case 5:
      
      
      var $18 = HEAP[$codec];
      
      var $20 = _strcmp($18, $enc);
      
      if ($20 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      var $23 = $codec + 36;
      $codec = $23;
      __label__ = 7;
      break;
     case 7:
      
      
      
      
      
      
      if (HEAP[HEAP[$codec]] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      
      if (HEAP[HEAP[$codec]] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $36 = HEAP[_PyExc_LookupError];
      _PyErr_SetString($36, __str3);
      $0 = 0;
      __label__ = 15;
      break;
     case 10:
      
      
      var $39 = _PyCapsule_New($codec, __str4, 0);
      $codecobj = $39;
      
      
      if ($codecobj == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      $0 = 0;
      __label__ = 15;
      break;
     case 12:
      
      
      var $44 = _PyObject_CallFunctionObjArgs($cofunc, allocate([ $codecobj, 0, 0, 0, 0, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $r = $44;
      
      
      
      var $48 = HEAP[$codecobj] - 1;
      
      
      HEAP[$codecobj] = $48;
      
      
      
      
      if (HEAP[$codecobj] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $59 = HEAP[HEAP[$codecobj + 4] + 24];
      
      FUNCTION_TABLE[$59]($codecobj);
      __label__ = 14;
      break;
     case 14:
      
      $0 = $r;
      __label__ = 15;
      break;
     case 15:
      
      $retval = $0;
      var $retval15 = $retval;
      return $retval15;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _register_maps($module) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 256;
    _memset(__stackBase__, 0, 256);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $module_addr;
      var $0;
      var $h;
      var $mhname = __stackBase__;
      var $r;
      $module_addr = $module;
      $h = __mapping_list;
      var $mhname1 = $mhname;
      
      
      var $2 = $mhname + 7 + -1;
      var $mhname3 = $mhname;
      __label__ = 4;
      break;
     case 1:
      _llvm_memcpy_p0i8_p0i8_i32($mhname1, __str7, 256, 1, 0);
      
      
      var $5 = HEAP[$h];
      var $6 = _strcpy($2, $5);
      
      
      var $9 = _PyCapsule_New($h, __str4, 0);
      
      var $11 = _PyModule_AddObject($module_addr, $mhname3, $9);
      $r = $11;
      
      var $13 = $r == -1;
      if ($13) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = -1;
      __label__ = 6;
      break;
     case 3:
      
      var $15 = $h + 12;
      $h = $15;
      __label__ = 4;
      break;
     case 4:
      
      
      
      
      
      
      if (HEAP[HEAP[$h]] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 6;
      break;
     case 6:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _euc_kr_encode($state, $config, $inbuf, $inleft, $outbuf, $outleft, $flags) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $config_addr;
      var $inbuf_addr;
      var $inleft_addr;
      var $outbuf_addr;
      var $outleft_addr;
      var $flags_addr;
      var $retval;
      var $0;
      var $c;
      var $code;
      $state_addr = $state;
      $config_addr = $config;
      $inbuf_addr = $inbuf;
      $inleft_addr = $inleft;
      $outbuf_addr = $outbuf;
      $outleft_addr = $outleft;
      $flags_addr = $flags;
      __lastLabel__ = -1;
      __label__ = 20;
      break;
     case 1:
      
      
      
      
      $c = HEAP[HEAP[$inbuf_addr]];
      
      
      var $7 = $outleft_addr;
      if ($c <= 127) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 2:
      
      if ($7 <= 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = -1;
      __label__ = 22;
      break;
     case 4:
      
      
      
      
      var $13 = HEAP[$outbuf_addr];
      HEAP[$13] = $c & 255;
      
      
      var $16 = HEAP[$inbuf_addr] + 2;
      
      HEAP[$inbuf_addr] = $16;
      
      var $19 = $inleft_addr - 1;
      $inleft_addr = $19;
      
      
      var $22 = HEAP[$outbuf_addr] + 1;
      
      HEAP[$outbuf_addr] = $22;
      
      var $25 = $outleft_addr - 1;
      $outleft_addr = $25;
      __label__ = 19;
      break;
     case 5:
      
      if ($7 <= 1) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = -1;
      __label__ = 22;
      break;
     case 7:
      
      
      
      
      
      
      
      
      if (HEAP[_cp949_encmap + ($c >>> 8) * 8] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      
      
      
      
      
      
      if (($c & 255) < HEAP[_cp949_encmap + ($c >>> 8) * 8 + 4]) {
        __label__ = 12;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      
      
      
      
      
      
      
      if (($c & 255) > HEAP[_cp949_encmap + ($c >>> 8) * 8 + 5]) {
        __label__ = 12;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $code = HEAP[HEAP[_cp949_encmap + ($c >>> 8) * 8] + 2 * (($c & 255) - HEAP[_cp949_encmap + ($c >>> 8) * 8 + 4])];
      
      var $77 = $code == -1;
      if ($77) {
        __label__ = 12;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      if ($code >= 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      $0 = 1;
      __label__ = 22;
      break;
     case 13:
      
      
      
      
      
      var $85 = $code >>> 8 & 255 | -128;
      var $86 = HEAP[$outbuf_addr];
      HEAP[$86] = $85;
      
      
      
      
      var $91 = $code & 255 | -128;
      var $92 = HEAP[$outbuf_addr] + 1;
      HEAP[$92] = $91;
      
      
      var $95 = HEAP[$inbuf_addr] + 2;
      
      HEAP[$inbuf_addr] = $95;
      
      var $98 = $inleft_addr - 1;
      $inleft_addr = $98;
      
      
      var $101 = HEAP[$outbuf_addr] + 2;
      
      HEAP[$outbuf_addr] = $101;
      
      var $104 = $outleft_addr - 2;
      $outleft_addr = $104;
      __label__ = 19;
      break;
     case 14:
      
      
      if ($outleft_addr <= 7) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      $0 = -1;
      __label__ = 22;
      break;
     case 16:
      
      
      var $109 = HEAP[$outbuf_addr];
      HEAP[$109] = -92;
      
      
      var $112 = HEAP[$outbuf_addr] + 1;
      HEAP[$112] = -44;
      
      
      
      
      
      if ($c <= 44031 | $c > 55203) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      ___assert_fail(__str8, __str9, 69, ___PRETTY_FUNCTION___8558);
      throw "Reached an unreachable!";
     case 18:
      
      var $118 = $c - -21504;
      $c = $118;
      
      
      var $121 = HEAP[$outbuf_addr] + 2;
      HEAP[$121] = -92;
      
      var $123 = HEAP[$outbuf_addr];
      
      var $125 = Math.floor($c / 588);
      
      
      var $128 = HEAP[_u2cgk_choseong + $125];
      var $129 = $123 + 3;
      HEAP[$129] = $128;
      
      
      var $132 = HEAP[$outbuf_addr] + 4;
      
      HEAP[$outbuf_addr] = $132;
      
      var $135 = $outleft_addr - 4;
      $outleft_addr = $135;
      
      
      var $138 = HEAP[$outbuf_addr];
      HEAP[$138] = -92;
      
      var $140 = HEAP[$outbuf_addr];
      
      var $142 = Math.floor($c / 28);
      
      
      
      var $146 = HEAP[_u2cgk_jungseong + $142 % 21];
      var $147 = $140 + 1;
      HEAP[$147] = $146;
      
      
      var $150 = HEAP[$outbuf_addr] + 2;
      HEAP[$150] = -92;
      
      
      
      
      
      
      var $157 = HEAP[_u2cgk_jongseong + $c % 28];
      var $158 = HEAP[$outbuf_addr] + 3;
      HEAP[$158] = $157;
      
      
      var $161 = HEAP[$inbuf_addr] + 2;
      
      HEAP[$inbuf_addr] = $161;
      
      var $164 = $inleft_addr - 1;
      $inleft_addr = $164;
      
      
      var $167 = HEAP[$outbuf_addr] + 4;
      
      HEAP[$outbuf_addr] = $167;
      
      var $170 = $outleft_addr - 4;
      $outleft_addr = $170;
      __label__ = 19;
      break;
     case 19:
      var $_pr = $inleft_addr;
      __lastLabel__ = 19;
      __label__ = 20;
      break;
     case 20:
      var $171 = __lastLabel__ == 19 ? $_pr : $inleft;
      
      if ($171 > 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      $0 = 0;
      __label__ = 22;
      break;
     case 22:
      
      $retval = $0;
      var $retval22 = $retval;
      return $retval22;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _euc_kr_decode($state, $config, $inbuf, $inleft, $outbuf, $outleft) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $config_addr;
      var $inbuf_addr;
      var $inleft_addr;
      var $outbuf_addr;
      var $outleft_addr;
      var $retval;
      var $iftmp_8;
      var $0;
      var $c;
      var $cho;
      var $jung;
      var $jong;
      $state_addr = $state;
      $config_addr = $config;
      $inbuf_addr = $inbuf;
      $inleft_addr = $inleft;
      $outbuf_addr = $outbuf;
      $outleft_addr = $outleft;
      __lastLabel__ = -1;
      __label__ = 38;
      break;
     case 1:
      
      
      
      
      $c = HEAP[HEAP[$inbuf_addr]];
      
      
      if ($outleft_addr <= 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = -1;
      __label__ = 40;
      break;
     case 3:
      
      
      if ($c >= 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $13 = HEAP[$outbuf_addr];
      HEAP[$13] = $c;
      
      
      var $16 = HEAP[$inbuf_addr] + 1;
      
      HEAP[$inbuf_addr] = $16;
      
      var $19 = $inleft_addr - 1;
      $inleft_addr = $19;
      
      
      var $22 = HEAP[$outbuf_addr] + 2;
      
      HEAP[$outbuf_addr] = $22;
      
      var $25 = $outleft_addr - 1;
      $outleft_addr = $25;
      __label__ = 37;
      break;
     case 5:
      
      
      if ($inleft_addr <= 1) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = -2;
      __label__ = 40;
      break;
     case 7:
      
      var $29 = $c != -92;
      if ($29) {
        __label__ = 31;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      var $34 = HEAP[HEAP[$inbuf_addr] + 1] != -44;
      if ($34) {
        __label__ = 31;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      if ($inleft_addr <= 7) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      $0 = -2;
      __label__ = 40;
      break;
     case 11:
      
      
      
      
      var $41 = HEAP[HEAP[$inbuf_addr] + 2] != -92;
      if ($41) {
        __label__ = 14;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      
      var $46 = HEAP[HEAP[$inbuf_addr] + 4] != -92;
      if ($46) {
        __label__ = 14;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      
      var $51 = HEAP[HEAP[$inbuf_addr] + 6] != -92;
      if ($51) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      $0 = 8;
      __label__ = 40;
      break;
     case 15:
      
      
      
      
      $c = HEAP[HEAP[$inbuf_addr] + 3];
      
      
      
      
      
      if ($c <= 160 | $c > 190) {
        __label__ = 17;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      
      
      
      
      $cho = HEAP[_cgk2u_choseong + ($c - 161)];
      __label__ = 18;
      break;
     case 17:
      $cho = 127;
      __label__ = 18;
      break;
     case 18:
      
      
      
      
      $c = HEAP[HEAP[$inbuf_addr] + 5];
      
      
      
      
      
      if ($c <= 190 | $c > 211) {
        __label__ = 20;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      
      $iftmp_8 = $c - 191;
      __label__ = 21;
      break;
     case 20:
      $iftmp_8 = 127;
      __label__ = 21;
      break;
     case 21:
      
      $jung = $iftmp_8;
      
      
      
      
      $c = HEAP[HEAP[$inbuf_addr] + 7];
      var $82 = HEAP[HEAP[$inbuf_addr] + 7] == -44;
      if ($82) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      $jong = 0;
      __label__ = 26;
      break;
     case 23:
      
      
      
      
      
      if ($c <= 160 | $c > 190) {
        __label__ = 25;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      
      
      
      
      
      
      $jong = HEAP[_cgk2u_jongseong + ($c - 161)];
      __label__ = 26;
      break;
     case 25:
      $jong = 127;
      __label__ = 26;
      break;
     case 26:
      
      
      if ($cho == 127) {
        __label__ = 29;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      
      
      if ($jung == 127) {
        __label__ = 29;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      
      
      if ($jong == 127) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      $0 = 8;
      __label__ = 40;
      break;
     case 30:
      
      
      
      
      
      
      
      
      
      
      
      var $110 = $jong + -21504;
      
      
      var $113 = HEAP[$outbuf_addr];
      HEAP[$113] = $110 + ($cho * 588 & 65535) + ($jung * 28 & 65535);
      
      
      var $116 = HEAP[$inbuf_addr] + 8;
      
      HEAP[$inbuf_addr] = $116;
      
      var $119 = $inleft_addr - 8;
      $inleft_addr = $119;
      
      
      var $122 = HEAP[$outbuf_addr] + 2;
      
      HEAP[$outbuf_addr] = $122;
      
      var $125 = $outleft_addr - 1;
      $outleft_addr = $125;
      __label__ = 37;
      break;
     case 31:
      
      var $127 = $c ^ -128;
      
      
      
      
      
      
      if (HEAP[_ksx1001_decmap + $127 * 8] == 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      
      
      
      
      var $138 = HEAP[HEAP[$inbuf_addr] + 1] ^ -128;
      
      var $140 = $c ^ -128;
      
      
      
      
      
      if ($138 < HEAP[_ksx1001_decmap + $140 * 8 + 4]) {
        __label__ = 36;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 33:
      
      
      
      
      var $150 = HEAP[HEAP[$inbuf_addr] + 1] ^ -128;
      
      var $152 = $c ^ -128;
      
      
      
      
      
      if ($150 > HEAP[_ksx1001_decmap + $152 * 8 + 5]) {
        __label__ = 36;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 34:
      
      var $159 = HEAP[$outbuf_addr];
      
      var $161 = $c ^ -128;
      
      
      
      
      
      
      
      
      var $170 = HEAP[HEAP[$inbuf_addr] + 1] ^ -128;
      
      
      var $173 = $c ^ -128;
      
      
      
      
      
      
      
      var $181 = HEAP[HEAP[_ksx1001_decmap + $161 * 8] + 2 * ($170 - HEAP[_ksx1001_decmap + $173 * 8 + 4])];
      HEAP[$159] = $181;
      
      var $183 = HEAP[$159] == -2;
      if ($183) {
        __label__ = 36;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      
      
      var $186 = HEAP[$inbuf_addr] + 2;
      
      HEAP[$inbuf_addr] = $186;
      
      var $189 = $inleft_addr - 2;
      $inleft_addr = $189;
      
      
      var $192 = HEAP[$outbuf_addr] + 2;
      
      HEAP[$outbuf_addr] = $192;
      
      var $195 = $outleft_addr - 1;
      $outleft_addr = $195;
      __label__ = 37;
      break;
     case 36:
      $0 = 2;
      __label__ = 40;
      break;
     case 37:
      var $_pr = $inleft_addr;
      __lastLabel__ = 37;
      __label__ = 38;
      break;
     case 38:
      var $196 = __lastLabel__ == 37 ? $_pr : $inleft;
      
      if ($196 > 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 39:
      $0 = 0;
      __label__ = 40;
      break;
     case 40:
      
      $retval = $0;
      var $retval42 = $retval;
      return $retval42;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _cp949_encode($state, $config, $inbuf, $inleft, $outbuf, $outleft, $flags) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $config_addr;
      var $inbuf_addr;
      var $inleft_addr;
      var $outbuf_addr;
      var $outleft_addr;
      var $flags_addr;
      var $retval;
      var $0;
      var $c;
      var $code;
      $state_addr = $state;
      $config_addr = $config;
      $inbuf_addr = $inbuf;
      $inleft_addr = $inleft;
      $outbuf_addr = $outbuf;
      $outleft_addr = $outleft;
      $flags_addr = $flags;
      __lastLabel__ = -1;
      __label__ = 17;
      break;
     case 1:
      
      
      
      
      $c = HEAP[HEAP[$inbuf_addr]];
      
      
      var $7 = $outleft_addr;
      if ($c <= 127) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 2:
      
      if ($7 <= 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = -1;
      __label__ = 19;
      break;
     case 4:
      
      
      
      
      var $13 = HEAP[$outbuf_addr];
      HEAP[$13] = $c & 255;
      
      
      var $16 = HEAP[$inbuf_addr] + 2;
      
      HEAP[$inbuf_addr] = $16;
      
      var $19 = $inleft_addr - 1;
      $inleft_addr = $19;
      
      
      var $22 = HEAP[$outbuf_addr] + 1;
      
      HEAP[$outbuf_addr] = $22;
      
      var $25 = $outleft_addr - 1;
      $outleft_addr = $25;
      __label__ = 16;
      break;
     case 5:
      
      if ($7 <= 1) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = -1;
      __label__ = 19;
      break;
     case 7:
      
      
      
      
      
      
      
      
      if (HEAP[_cp949_encmap + ($c >>> 8) * 8] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      
      
      
      
      
      
      
      if (($c & 255) < HEAP[_cp949_encmap + ($c >>> 8) * 8 + 4]) {
        __label__ = 12;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      
      
      
      
      
      
      
      if (($c & 255) > HEAP[_cp949_encmap + ($c >>> 8) * 8 + 5]) {
        __label__ = 12;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $code = HEAP[HEAP[_cp949_encmap + ($c >>> 8) * 8] + 2 * (($c & 255) - HEAP[_cp949_encmap + ($c >>> 8) * 8 + 4])];
      
      var $77 = $code == -1;
      if ($77) {
        __label__ = 12;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      
      
      var $83 = $code >>> 8 & 255 | -128;
      var $84 = HEAP[$outbuf_addr];
      HEAP[$84] = $83;
      
      
      
      var $88 = HEAP[$outbuf_addr];
      
      var $90 = $code & 255;
      if ($code < 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      $0 = 1;
      __label__ = 19;
      break;
     case 13:
      var $91 = $88 + 1;
      HEAP[$91] = $90;
      __label__ = 15;
      break;
     case 14:
      var $92 = $90 | -128;
      var $93 = $88 + 1;
      HEAP[$93] = $92;
      __label__ = 15;
      break;
     case 15:
      
      
      var $96 = HEAP[$inbuf_addr] + 2;
      
      HEAP[$inbuf_addr] = $96;
      
      var $99 = $inleft_addr - 1;
      $inleft_addr = $99;
      
      
      var $102 = HEAP[$outbuf_addr] + 2;
      
      HEAP[$outbuf_addr] = $102;
      
      var $105 = $outleft_addr - 2;
      $outleft_addr = $105;
      __label__ = 16;
      break;
     case 16:
      var $_pr = $inleft_addr;
      __lastLabel__ = 16;
      __label__ = 17;
      break;
     case 17:
      var $106 = __lastLabel__ == 16 ? $_pr : $inleft;
      
      if ($106 > 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      $0 = 0;
      __label__ = 19;
      break;
     case 19:
      
      $retval = $0;
      var $retval18 = $retval;
      return $retval18;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _cp949_decode($state, $config, $inbuf, $inleft, $outbuf, $outleft) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $config_addr;
      var $inbuf_addr;
      var $inleft_addr;
      var $outbuf_addr;
      var $outleft_addr;
      var $retval;
      var $0;
      var $c;
      $state_addr = $state;
      $config_addr = $config;
      $inbuf_addr = $inbuf;
      $inleft_addr = $inleft;
      $outbuf_addr = $outbuf;
      $outleft_addr = $outleft;
      __lastLabel__ = -1;
      __label__ = 18;
      break;
     case 1:
      
      
      
      
      $c = HEAP[HEAP[$inbuf_addr]];
      
      
      if ($outleft_addr <= 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = -1;
      __label__ = 20;
      break;
     case 3:
      
      
      if ($c >= 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $13 = HEAP[$outbuf_addr];
      HEAP[$13] = $c;
      
      
      var $16 = HEAP[$inbuf_addr] + 1;
      
      HEAP[$inbuf_addr] = $16;
      
      var $19 = $inleft_addr - 1;
      $inleft_addr = $19;
      
      
      var $22 = HEAP[$outbuf_addr] + 2;
      
      HEAP[$outbuf_addr] = $22;
      
      var $25 = $outleft_addr - 1;
      $outleft_addr = $25;
      __label__ = 17;
      break;
     case 5:
      
      
      if ($inleft_addr <= 1) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = -2;
      __label__ = 20;
      break;
     case 7:
      
      var $29 = $c ^ -128;
      
      
      
      
      
      
      if (HEAP[_ksx1001_decmap + $29 * 8] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      
      var $40 = HEAP[HEAP[$inbuf_addr] + 1] ^ -128;
      
      var $42 = $c ^ -128;
      
      
      
      
      
      if ($40 < HEAP[_ksx1001_decmap + $42 * 8 + 4]) {
        __label__ = 11;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      var $52 = HEAP[HEAP[$inbuf_addr] + 1] ^ -128;
      
      var $54 = $c ^ -128;
      
      
      
      
      
      if ($52 > HEAP[_ksx1001_decmap + $54 * 8 + 5]) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      var $61 = HEAP[$outbuf_addr];
      
      var $63 = $c ^ -128;
      
      
      
      
      
      
      
      
      var $72 = HEAP[HEAP[$inbuf_addr] + 1] ^ -128;
      
      
      var $75 = $c ^ -128;
      
      
      
      
      
      
      
      var $83 = HEAP[HEAP[_ksx1001_decmap + $63 * 8] + 2 * ($72 - HEAP[_ksx1001_decmap + $75 * 8 + 4])];
      HEAP[$61] = $83;
      
      var $85 = HEAP[$61] == -2;
      if ($85) {
        __label__ = 11;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 11:
      
      
      
      
      
      
      
      if (HEAP[_cp949ext_decmap + $c * 8] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$inbuf_addr] + 1] < HEAP[_cp949ext_decmap + $c * 8 + 4]) {
        __label__ = 15;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      
      
      
      
      
      
      
      if (HEAP[HEAP[$inbuf_addr] + 1] > HEAP[_cp949ext_decmap + $c * 8 + 5]) {
        __label__ = 15;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      var $114 = HEAP[$outbuf_addr];
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $133 = HEAP[HEAP[_cp949ext_decmap + $c * 8] + 2 * (HEAP[HEAP[$inbuf_addr] + 1] - HEAP[_cp949ext_decmap + $c * 8 + 4])];
      HEAP[$114] = $133;
      
      var $135 = HEAP[$114] == -2;
      if ($135) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      $0 = 2;
      __label__ = 20;
      break;
     case 16:
      
      
      var $138 = HEAP[$inbuf_addr] + 2;
      
      HEAP[$inbuf_addr] = $138;
      
      var $141 = $inleft_addr - 2;
      $inleft_addr = $141;
      
      
      var $144 = HEAP[$outbuf_addr] + 2;
      
      HEAP[$outbuf_addr] = $144;
      
      var $147 = $outleft_addr - 1;
      $outleft_addr = $147;
      __label__ = 17;
      break;
     case 17:
      var $_pr = $inleft_addr;
      __lastLabel__ = 17;
      __label__ = 18;
      break;
     case 18:
      var $148 = __lastLabel__ == 17 ? $_pr : $inleft;
      
      if ($148 > 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      $0 = 0;
      __label__ = 20;
      break;
     case 20:
      
      $retval = $0;
      var $retval21 = $retval;
      return $retval21;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _johab_encode($state, $config, $inbuf, $inleft, $outbuf, $outleft, $flags) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $config_addr;
      var $inbuf_addr;
      var $inleft_addr;
      var $outbuf_addr;
      var $outleft_addr;
      var $flags_addr;
      var $retval;
      var $iftmp_14;
      var $iftmp_13;
      var $iftmp_12;
      var $0;
      var $c;
      var $code;
      var $c1;
      var $c2;
      var $t2;
      var $t1;
      $state_addr = $state;
      $config_addr = $config;
      $inbuf_addr = $inbuf;
      $inleft_addr = $inleft;
      $outbuf_addr = $outbuf;
      $outleft_addr = $outleft;
      $flags_addr = $flags;
      __lastLabel__ = -1;
      __label__ = 34;
      break;
     case 1:
      
      
      
      
      $c = HEAP[HEAP[$inbuf_addr]];
      
      
      var $7 = $outleft_addr;
      if ($c <= 127) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 2:
      
      if ($7 <= 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = -1;
      __label__ = 36;
      break;
     case 4:
      
      
      
      
      var $13 = HEAP[$outbuf_addr];
      HEAP[$13] = $c & 255;
      
      
      var $16 = HEAP[$inbuf_addr] + 2;
      
      HEAP[$inbuf_addr] = $16;
      
      var $19 = $inleft_addr - 1;
      $inleft_addr = $19;
      
      
      var $22 = HEAP[$outbuf_addr] + 1;
      
      HEAP[$outbuf_addr] = $22;
      
      var $25 = $outleft_addr - 1;
      $outleft_addr = $25;
      __label__ = 33;
      break;
     case 5:
      
      if ($7 <= 1) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = -1;
      __label__ = 36;
      break;
     case 7:
      
      
      
      
      
      var $31 = $c;
      if ($c <= 44031 | $c > 55203) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      var $32 = $31 - -21504;
      $c = $32;
      
      var $34 = Math.floor($c / 588);
      
      
      
      
      
      var $40 = HEAP[_u2johabidx_choseong + $34] << 10 & 65535;
      
      var $42 = Math.floor($c / 28);
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $56 = $40 | -32768;
      
      
      $code = $56 | HEAP[_u2johabidx_jungseong + $42 % 21] << 5 & 65535 | HEAP[_u2johabidx_jongseong + $c % 28];
      __label__ = 32;
      break;
     case 9:
      
      
      
      
      var $62 = $c;
      if ($31 <= 12592 | $c > 12643) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      
      $code = HEAP[_u2johabjamo + ($62 - 12593) * 2];
      __label__ = 32;
      break;
     case 11:
      
      
      
      
      
      
      
      if (HEAP[_cp949_encmap + ($62 >>> 8) * 8] == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      
      
      
      
      
      
      
      
      if (($c & 255) < HEAP[_cp949_encmap + ($c >>> 8) * 8 + 4]) {
        __label__ = 31;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      
      
      
      
      
      
      
      
      if (($c & 255) > HEAP[_cp949_encmap + ($c >>> 8) * 8 + 5]) {
        __label__ = 31;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $code = HEAP[HEAP[_cp949_encmap + ($c >>> 8) * 8] + 2 * (($c & 255) - HEAP[_cp949_encmap + ($c >>> 8) * 8 + 4])];
      
      var $116 = $code == -1;
      if ($116) {
        __label__ = 31;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      if ($code < 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      ___assert_fail(__str10, __str9, 279, ___PRETTY_FUNCTION___9011);
      throw "Reached an unreachable!";
     case 17:
      
      
      
      $c1 = $code >>> 8 & 255;
      
      
      $c2 = $code & 255;
      
      
      
      
      
      if ($c1 > 32 & $c1 <= 44) {
        __label__ = 19;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      
      
      
      if ($c1 > 73 & $c1 <= 125) {
        __label__ = 19;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 19:
      
      
      
      
      
      if ($c2 <= 32 | $c2 > 126) {
        __label__ = 30;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      
      var $139 = $c1;
      if ($c1 <= 73) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      $iftmp_12 = $139 + 401;
      __label__ = 23;
      break;
     case 22:
      
      $iftmp_12 = $139 + 374;
      __label__ = 23;
      break;
     case 23:
      
      $t1 = $iftmp_12;
      
      
      
      
      
      if (($t1 & 1 & 255) != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      $iftmp_13 = 94;
      __label__ = 26;
      break;
     case 25:
      $iftmp_13 = 0;
      __label__ = 26;
      break;
     case 26:
      
      
      var $149 = $iftmp_13 + -33;
      
      $t2 = $149 + $c2;
      
      
      
      
      
      var $156 = HEAP[$outbuf_addr];
      HEAP[$156] = $t1 >>> 1 & 255;
      
      var $158 = HEAP[$outbuf_addr];
      
      
      var $161 = $t2;
      if ($t2 <= 77) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      $iftmp_14 = $161 + 49;
      __label__ = 29;
      break;
     case 28:
      
      $iftmp_14 = $161 + 67;
      __label__ = 29;
      break;
     case 29:
      var $164 = $158 + 1;
      
      HEAP[$164] = $iftmp_14;
      
      
      var $168 = HEAP[$inbuf_addr] + 2;
      
      HEAP[$inbuf_addr] = $168;
      
      var $171 = $inleft_addr - 1;
      $inleft_addr = $171;
      
      
      var $174 = HEAP[$outbuf_addr] + 2;
      
      HEAP[$outbuf_addr] = $174;
      
      var $177 = $outleft_addr - 2;
      $outleft_addr = $177;
      __label__ = 33;
      break;
     case 30:
      $0 = 1;
      __label__ = 36;
      break;
     case 31:
      $0 = 1;
      __label__ = 36;
      break;
     case 32:
      
      
      
      
      
      var $183 = HEAP[$outbuf_addr];
      HEAP[$183] = $code >>> 8 & 255;
      
      
      
      
      var $188 = HEAP[$outbuf_addr] + 1;
      HEAP[$188] = $code & 255;
      
      
      var $191 = HEAP[$inbuf_addr] + 2;
      
      HEAP[$inbuf_addr] = $191;
      
      var $194 = $inleft_addr - 1;
      $inleft_addr = $194;
      
      
      var $197 = HEAP[$outbuf_addr] + 2;
      
      HEAP[$outbuf_addr] = $197;
      
      var $200 = $outleft_addr - 2;
      $outleft_addr = $200;
      __label__ = 33;
      break;
     case 33:
      var $_pr = $inleft_addr;
      __lastLabel__ = 33;
      __label__ = 34;
      break;
     case 34:
      var $201 = __lastLabel__ == 33 ? $_pr : $inleft;
      
      if ($201 > 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      $0 = 0;
      __label__ = 36;
      break;
     case 36:
      
      $retval = $0;
      var $retval40 = $retval;
      return $retval40;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _johab_decode($state, $config, $inbuf, $inleft, $outbuf, $outleft) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $state_addr;
      var $config_addr;
      var $inbuf_addr;
      var $inleft_addr;
      var $outbuf_addr;
      var $outleft_addr;
      var $retval;
      var $iftmp_20;
      var $iftmp_19;
      var $iftmp_18;
      var $iftmp_16;
      var $0;
      var $c;
      var $c2;
      var $c_cho;
      var $c_jung;
      var $c_jong;
      var $i_cho;
      var $i_jung;
      var $i_jong;
      var $t1;
      var $t2;
      $state_addr = $state;
      $config_addr = $config;
      $inbuf_addr = $inbuf;
      $inleft_addr = $inleft;
      $outbuf_addr = $outbuf;
      $outleft_addr = $outleft;
      __lastLabel__ = -1;
      __label__ = 53;
      break;
     case 1:
      
      
      
      
      $c = HEAP[HEAP[$inbuf_addr]];
      
      
      if ($outleft_addr <= 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = -1;
      __label__ = 55;
      break;
     case 3:
      
      
      if ($c >= 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $13 = HEAP[$outbuf_addr];
      HEAP[$13] = $c;
      
      
      var $16 = HEAP[$inbuf_addr] + 1;
      
      HEAP[$inbuf_addr] = $16;
      
      var $19 = $inleft_addr - 1;
      $inleft_addr = $19;
      
      
      var $22 = HEAP[$outbuf_addr] + 2;
      
      HEAP[$outbuf_addr] = $22;
      
      var $25 = $outleft_addr - 1;
      $outleft_addr = $25;
      __label__ = 52;
      break;
     case 5:
      
      
      if ($inleft_addr <= 1) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = -2;
      __label__ = 55;
      break;
     case 7:
      
      
      
      
      $c2 = HEAP[HEAP[$inbuf_addr] + 1];
      
      
      var $34 = $c;
      if ($c <= 215) {
        __label__ = 8;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 8:
      
      
      $c_cho = $34 >>> 2 & 31;
      
      
      
      
      
      
      
      
      $c_jung = ($c << 3 & 255 | $c2 >>> 5) & 31;
      
      
      $c_jong = $c2 & 31;
      
      
      
      
      $i_cho = HEAP[_johabidx_choseong + $c_cho];
      
      
      
      
      $i_jung = HEAP[_johabidx_jungseong + $c_jung];
      
      
      
      
      $i_jong = HEAP[_johabidx_jongseong + $c_jong];
      
      var $60 = $i_cho == -1;
      if ($60) {
        __label__ = 11;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      var $62 = $i_jung == -1;
      if ($62) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      var $64 = $i_jong == -1;
      if ($64) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      $0 = 2;
      __label__ = 55;
      break;
     case 12:
      
      var $66 = $i_cho == -3;
      
      var $68 = $i_jung == -3;
      if ($66) {
        __label__ = 13;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 13:
      
      var $70 = $i_jong == -3;
      if ($68) {
        __label__ = 14;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 14:
      
      var $72 = HEAP[$outbuf_addr];
      if ($70) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      var $73 = $72;
      HEAP[$73] = 12288;
      __label__ = 28;
      break;
     case 16:
      
      
      
      
      
      var $79 = HEAP[_johabjamo_jongseong + $c_jong] | 12544;
      var $80 = $72;
      HEAP[$80] = $79;
      __label__ = 28;
      break;
     case 17:
      if ($70) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      
      
      
      var $88 = HEAP[_johabjamo_jungseong + $c_jung] | 12544;
      var $89 = HEAP[$outbuf_addr];
      HEAP[$89] = $88;
      __label__ = 28;
      break;
     case 19:
      $0 = 2;
      __label__ = 55;
      break;
     case 20:
      if ($68) {
        __label__ = 21;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 21:
      
      var $91 = $i_jong == -3;
      if ($91) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      
      
      
      var $99 = HEAP[_johabjamo_choseong + $c_cho] | 12544;
      var $100 = HEAP[$outbuf_addr];
      HEAP[$100] = $99;
      __label__ = 28;
      break;
     case 23:
      $0 = 2;
      __label__ = 55;
      break;
     case 24:
      
      var $102 = HEAP[$outbuf_addr];
      
      
      
      var $106 = $i_cho * 588 & 65535;
      
      
      
      var $110 = $i_jung * 28 & 65535;
      
      var $112 = $i_jong != -3;
      if ($112) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      
      $iftmp_16 = $i_jong;
      __label__ = 27;
      break;
     case 26:
      $iftmp_16 = 0;
      __label__ = 27;
      break;
     case 27:
      
      var $116 = $106 + -21504;
      
      
      var $119 = $102;
      HEAP[$119] = $116 + $110 + $iftmp_16;
      __label__ = 28;
      break;
     case 28:
      
      
      var $122 = HEAP[$inbuf_addr] + 2;
      
      HEAP[$inbuf_addr] = $122;
      
      var $125 = $inleft_addr - 2;
      $inleft_addr = $125;
      
      
      var $128 = HEAP[$outbuf_addr] + 2;
      
      HEAP[$outbuf_addr] = $128;
      
      var $131 = $outleft_addr - 1;
      $outleft_addr = $131;
      __label__ = 52;
      break;
     case 29:
      var $132 = $34 == -33;
      
      
      
      if ($132 | $c > 249) {
        __label__ = 35;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 30:
      
      
      if ($c2 <= 48) {
        __label__ = 35;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      
      
      
      
      
      if ($c2 < 0 & $c2 <= 144) {
        __label__ = 35;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      
      
      
      
      if (($c2 & 127) == 127) {
        __label__ = 35;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 33:
      var $145 = $c;
      var $146 = $145 != -38;
      if ($146) {
        __lastLabel__ = 33;
        __label__ = 37;
        break;
      } else {
        __lastLabel__ = 33;
        __label__ = 34;
        break;
      }
     case 34:
      
      
      
      
      
      if ($c2 > 160 & $c2 <= 211) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      $0 = 2;
      __label__ = 55;
      break;
     case 36:
      var $_pr = $c;
      __lastLabel__ = 36;
      __label__ = 37;
      break;
     case 37:
      var $151 = __lastLabel__ == 36 ? $_pr : $145;
      
      
      
      
      var $156 = $c * 2 & 255;
      if ($151 <= 223) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      
      $iftmp_18 = $156 + 78;
      __label__ = 40;
      break;
     case 39:
      var $158 = $156 - -105;
      $iftmp_18 = $158;
      __label__ = 40;
      break;
     case 40:
      
      $t1 = $iftmp_18;
      
      
      var $162 = $c2;
      if ($c2 <= 144) {
        __label__ = 41;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 41:
      
      $iftmp_19 = $162 - 49;
      __label__ = 43;
      break;
     case 42:
      
      $iftmp_19 = $162 - 67;
      __label__ = 43;
      break;
     case 43:
      
      $t2 = $iftmp_19;
      
      
      
      
      
      var $171 = $t1 + 33 + ($t2 > 93);
      $t1 = $171;
      
      
      var $174 = $t2;
      if ($t2 <= 93) {
        __label__ = 44;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 44:
      
      $iftmp_20 = $174 + 33;
      __label__ = 46;
      break;
     case 45:
      
      $iftmp_20 = $174 - 61;
      __label__ = 46;
      break;
     case 46:
      
      $t2 = $iftmp_20;
      
      
      
      
      
      
      
      if (HEAP[_ksx1001_decmap + $t1 * 8] == 0) {
        __label__ = 51;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 47:
      
      
      
      
      
      
      
      if (HEAP[_ksx1001_decmap + $t1 * 8 + 4] > $t2) {
        __label__ = 51;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 48:
      
      
      
      
      
      
      
      if (HEAP[_ksx1001_decmap + $t1 * 8 + 5] < $t2) {
        __label__ = 51;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 49:
      
      var $200 = HEAP[$outbuf_addr];
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $216 = HEAP[HEAP[_ksx1001_decmap + $t1 * 8] + 2 * ($t2 - HEAP[_ksx1001_decmap + $t1 * 8 + 4])];
      HEAP[$200] = $216;
      
      var $218 = HEAP[$200] == -2;
      if ($218) {
        __label__ = 51;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 50:
      
      
      var $221 = HEAP[$inbuf_addr] + 2;
      
      HEAP[$inbuf_addr] = $221;
      
      var $224 = $inleft_addr - 2;
      $inleft_addr = $224;
      
      
      var $227 = HEAP[$outbuf_addr] + 2;
      
      HEAP[$outbuf_addr] = $227;
      
      var $230 = $outleft_addr - 1;
      $outleft_addr = $230;
      __label__ = 52;
      break;
     case 51:
      $0 = 2;
      __label__ = 55;
      break;
     case 52:
      var $_pr6 = $inleft_addr;
      __lastLabel__ = 52;
      __label__ = 53;
      break;
     case 53:
      var $231 = __lastLabel__ == 52 ? $_pr6 : $inleft;
      
      if ($231 > 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 54:
      $0 = 0;
      __label__ = 55;
      break;
     case 55:
      
      $retval = $0;
      var $retval58 = $retval;
      return $retval58;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _init_codecs_kr() {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m;
      var $0 = _Py_InitModule4(__str16, ___methods, 0, 0, 1013);
      $m = $0;
      
      
      if ($m != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      _register_maps($m);
      __label__ = 2;
      break;
     case 2:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_codecs_kr"] = _init_codecs_kr;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _getcodec, 0, _euc_kr_encode, 0, _euc_kr_decode, 0, _cp949_encode, 0, _cp949_decode, 0, _johab_encode, 0, _johab_decode, 0 ]);
  function run(args) {
    _cofunc_8453 = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str = allocate([ 95, 109, 117, 108, 116, 105, 98, 121, 116, 101, 99, 111, 100, 101, 99, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 95, 95, 99, 114, 101, 97, 116, 101, 95, 99, 111, 100, 101, 99, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 101, 110, 99, 111, 100, 105, 110, 103, 32, 110, 97, 109, 101, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 115, 116, 114, 105, 110, 103, 46, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 110, 111, 32, 115, 117, 99, 104, 32, 99, 111, 100, 101, 99, 32, 105, 115, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 109, 117, 108, 116, 105, 98, 121, 116, 101, 99, 111, 100, 101, 99, 46, 95, 95, 109, 97, 112, 95, 42, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 103, 101, 116, 99, 111, 100, 101, 99, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate(1, "i8", ALLOC_NORMAL);
    ___methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str7 = allocate([ 95, 95, 109, 97, 112, 95, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], "i8", ALLOC_NORMAL);
    ___ksx1001_decmap = allocate([ 12288, 0, 12289, 0, 12290, 0, 183, 0, 8229, 0, 8230, 0, 168, 0, 12291, 0, 173, 0, 8213, 0, 8741, 0, -196, 0, 8764, 0, 8216, 0, 8217, 0, 8220, 0, 8221, 0, 12308, 0, 12309, 0, 12296, 0, 12297, 0, 12298, 0, 12299, 0, 12300, 0, 12301, 0, 12302, 0, 12303, 0, 12304, 0, 12305, 0, 177, 0, 215, 0, 247, 0, 8800, 0, 8804, 0, 8805, 0, 8734, 0, 8756, 0, 176, 0, 8242, 0, 8243, 0, 8451, 0, 8491, 0, -32, 0, -31, 0, -27, 0, 9794, 0, 9792, 0, 8736, 0, 8869, 0, 8978, 0, 8706, 0, 8711, 0, 8801, 0, 8786, 0, 167, 0, 8251, 0, 9734, 0, 9733, 0, 9675, 0, 9679, 0, 9678, 0, 9671, 0, 9670, 0, 9633, 0, 9632, 0, 9651, 0, 9650, 0, 9661, 0, 9660, 0, 8594, 0, 8592, 0, 8593, 0, 8595, 0, 8596, 0, 12307, 0, 8810, 0, 8811, 0, 8730, 0, 8765, 0, 8733, 0, 8757, 0, 8747, 0, 8748, 0, 8712, 0, 8715, 0, 8838, 0, 8839, 0, 8834, 0, 8835, 0, 8746, 0, 8745, 0, 8743, 0, 8744, 0, -30, 0, 8658, 0, 8660, 0, 8704, 0, 8707, 0, 180, 0, -162, 0, 711, 0, 728, 0, 733, 0, 730, 0, 729, 0, 184, 0, 731, 0, 161, 0, 191, 0, 720, 0, 8750, 0, 8721, 0, 8719, 0, 164, 0, 8457, 0, 8240, 0, 9665, 0, 9664, 0, 9655, 0, 9654, 0, 9828, 0, 9824, 0, 9825, 0, 9829, 0, 9831, 0, 9827, 0, 8857, 0, 9672, 0, 9635, 0, 9680, 0, 9681, 0, 9618, 0, 9636, 0, 9637, 0, 9640, 0, 9639, 0, 9638, 0, 9641, 0, 9832, 0, 9743, 0, 9742, 0, 9756, 0, 9758, 0, 182, 0, 8224, 0, 8225, 0, 8597, 0, 8599, 0, 8601, 0, 8598, 0, 8600, 0, 9837, 0, 9833, 0, 9834, 0, 9836, 0, 12927, 0, 12828, 0, 8470, 0, 13255, 0, 8482, 0, 13250, 0, 13272, 0, 8481, 0, 8364, 0, 174, 0, -255, 0, -254, 0, -253, 0, -252, 0, -251, 0, -250, 0, -249, 0, -248, 0, -247, 0, -246, 0, -245, 0, -244, 0, -243, 0, -242, 0, -241, 0, -240, 0, -239, 0, -238, 0, -237, 0, -236, 0, -235, 0, -234, 0, -233, 0, -232, 0, -231, 0, -230, 0, -229, 0, -228, 0, -227, 0, -226, 0, -225, 0, -224, 0, -223, 0, -222, 0, -221, 0, -220, 0, -219, 0, -218, 0, -217, 0, -216, 0, -215, 0, -214, 0, -213, 0, -212, 0, -211, 0, -210, 0, -209, 0, -208, 0, -207, 0, -206, 0, -205, 0, -204, 0, -203, 0, -202, 0, -201, 0, -200, 0, -199, 0, -198, 0, -197, 0, -26, 0, -195, 0, -194, 0, -193, 0, -192, 0, -191, 0, -190, 0, -189, 0, -188, 0, -187, 0, -186, 0, -185, 0, -184, 0, -183, 0, -182, 0, -181, 0, -180, 0, -179, 0, -178, 0, -177, 0, -176, 0, -175, 0, -174, 0, -173, 0, -172, 0, -171, 0, -170, 0, -169, 0, -168, 0, -167, 0, -166, 0, -165, 0, -164, 0, -163, 0, -29, 0, 12593, 0, 12594, 0, 12595, 0, 12596, 0, 12597, 0, 12598, 0, 12599, 0, 12600, 0, 12601, 0, 12602, 0, 12603, 0, 12604, 0, 12605, 0, 12606, 0, 12607, 0, 12608, 0, 12609, 0, 12610, 0, 12611, 0, 12612, 0, 12613, 0, 12614, 0, 12615, 0, 12616, 0, 12617, 0, 12618, 0, 12619, 0, 12620, 0, 12621, 0, 12622, 0, 12623, 0, 12624, 0, 12625, 0, 12626, 0, 12627, 0, 12628, 0, 12629, 0, 12630, 0, 12631, 0, 12632, 0, 12633, 0, 12634, 0, 12635, 0, 12636, 0, 12637, 0, 12638, 0, 12639, 0, 12640, 0, 12641, 0, 12642, 0, 12643, 0, 12644, 0, 12645, 0, 12646, 0, 12647, 0, 12648, 0, 12649, 0, 12650, 0, 12651, 0, 12652, 0, 12653, 0, 12654, 0, 12655, 0, 12656, 0, 12657, 0, 12658, 0, 12659, 0, 12660, 0, 12661, 0, 12662, 0, 12663, 0, 12664, 0, 12665, 0, 12666, 0, 12667, 0, 12668, 0, 12669, 0, 12670, 0, 12671, 0, 12672, 0, 12673, 0, 12674, 0, 12675, 0, 12676, 0, 12677, 0, 12678, 0, 12679, 0, 12680, 0, 12681, 0, 12682, 0, 12683, 0, 12684, 0, 12685, 0, 12686, 0, 8560, 0, 8561, 0, 8562, 0, 8563, 0, 8564, 0, 8565, 0, 8566, 0, 8567, 0, 8568, 0, 8569, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, 8544, 0, 8545, 0, 8546, 0, 8547, 0, 8548, 0, 8549, 0, 8550, 0, 8551, 0, 8552, 0, 8553, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, 913, 0, 914, 0, 915, 0, 916, 0, 917, 0, 918, 0, 919, 0, 920, 0, 921, 0, 922, 0, 923, 0, 924, 0, 925, 0, 926, 0, 927, 0, 928, 0, 929, 0, 931, 0, 932, 0, 933, 0, 934, 0, 935, 0, 936, 0, 937, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, 945, 0, 946, 0, 947, 0, 948, 0, 949, 0, 950, 0, 951, 0, 952, 0, 953, 0, 954, 0, 955, 0, 956, 0, 957, 0, 958, 0, 959, 0, 960, 0, 961, 0, 963, 0, 964, 0, 965, 0, 966, 0, 967, 0, 968, 0, 969, 0, 9472, 0, 9474, 0, 9484, 0, 9488, 0, 9496, 0, 9492, 0, 9500, 0, 9516, 0, 9508, 0, 9524, 0, 9532, 0, 9473, 0, 9475, 0, 9487, 0, 9491, 0, 9499, 0, 9495, 0, 9507, 0, 9523, 0, 9515, 0, 9531, 0, 9547, 0, 9504, 0, 9519, 0, 9512, 0, 9527, 0, 9535, 0, 9501, 0, 9520, 0, 9509, 0, 9528, 0, 9538, 0, 9490, 0, 9489, 0, 9498, 0, 9497, 0, 9494, 0, 9493, 0, 9486, 0, 9485, 0, 9502, 0, 9503, 0, 9505, 0, 9506, 0, 9510, 0, 9511, 0, 9513, 0, 9514, 0, 9517, 0, 9518, 0, 9521, 0, 9522, 0, 9525, 0, 9526, 0, 9529, 0, 9530, 0, 9533, 0, 9534, 0, 9536, 0, 9537, 0, 9539, 0, 9540, 0, 9541, 0, 9542, 0, 9543, 0, 9544, 0, 9545, 0, 9546, 0, 13205, 0, 13206, 0, 13207, 0, 8467, 0, 13208, 0, 13252, 0, 13219, 0, 13220, 0, 13221, 0, 13222, 0, 13209, 0, 13210, 0, 13211, 0, 13212, 0, 13213, 0, 13214, 0, 13215, 0, 13216, 0, 13217, 0, 13218, 0, 13258, 0, 13197, 0, 13198, 0, 13199, 0, 13263, 0, 13192, 0, 13193, 0, 13256, 0, 13223, 0, 13224, 0, 13232, 0, 13233, 0, 13234, 0, 13235, 0, 13236, 0, 13237, 0, 13238, 0, 13239, 0, 13240, 0, 13241, 0, 13184, 0, 13185, 0, 13186, 0, 13187, 0, 13188, 0, 13242, 0, 13243, 0, 13244, 0, 13245, 0, 13246, 0, 13247, 0, 13200, 0, 13201, 0, 13202, 0, 13203, 0, 13204, 0, 8486, 0, 13248, 0, 13249, 0, 13194, 0, 13195, 0, 13196, 0, 13270, 0, 13253, 0, 13229, 0, 13230, 0, 13231, 0, 13275, 0, 13225, 0, 13226, 0, 13227, 0, 13228, 0, 13277, 0, 13264, 0, 13267, 0, 13251, 0, 13257, 0, 13276, 0, 13254, 0, 198, 0, 208, 0, 170, 0, 294, 0, -2, 0, 306, 0, -2, 0, 319, 0, 321, 0, 216, 0, 338, 0, 186, 0, 222, 0, 358, 0, 330, 0, -2, 0, 12896, 0, 12897, 0, 12898, 0, 12899, 0, 12900, 0, 12901, 0, 12902, 0, 12903, 0, 12904, 0, 12905, 0, 12906, 0, 12907, 0, 12908, 0, 12909, 0, 12910, 0, 12911, 0, 12912, 0, 12913, 0, 12914, 0, 12915, 0, 12916, 0, 12917, 0, 12918, 0, 12919, 0, 12920, 0, 12921, 0, 12922, 0, 12923, 0, 9424, 0, 9425, 0, 9426, 0, 9427, 0, 9428, 0, 9429, 0, 9430, 0, 9431, 0, 9432, 0, 9433, 0, 9434, 0, 9435, 0, 9436, 0, 9437, 0, 9438, 0, 9439, 0, 9440, 0, 9441, 0, 9442, 0, 9443, 0, 9444, 0, 9445, 0, 9446, 0, 9447, 0, 9448, 0, 9449, 0, 9312, 0, 9313, 0, 9314, 0, 9315, 0, 9316, 0, 9317, 0, 9318, 0, 9319, 0, 9320, 0, 9321, 0, 9322, 0, 9323, 0, 9324, 0, 9325, 0, 9326, 0, 189, 0, 8531, 0, 8532, 0, 188, 0, 190, 0, 8539, 0, 8540, 0, 8541, 0, 8542, 0, 230, 0, 273, 0, 240, 0, 295, 0, 305, 0, 307, 0, 312, 0, 320, 0, 322, 0, 248, 0, 339, 0, 223, 0, 254, 0, 359, 0, 331, 0, 329, 0, 12800, 0, 12801, 0, 12802, 0, 12803, 0, 12804, 0, 12805, 0, 12806, 0, 12807, 0, 12808, 0, 12809, 0, 12810, 0, 12811, 0, 12812, 0, 12813, 0, 12814, 0, 12815, 0, 12816, 0, 12817, 0, 12818, 0, 12819, 0, 12820, 0, 12821, 0, 12822, 0, 12823, 0, 12824, 0, 12825, 0, 12826, 0, 12827, 0, 9372, 0, 9373, 0, 9374, 0, 9375, 0, 9376, 0, 9377, 0, 9378, 0, 9379, 0, 9380, 0, 9381, 0, 9382, 0, 9383, 0, 9384, 0, 9385, 0, 9386, 0, 9387, 0, 9388, 0, 9389, 0, 9390, 0, 9391, 0, 9392, 0, 9393, 0, 9394, 0, 9395, 0, 9396, 0, 9397, 0, 9332, 0, 9333, 0, 9334, 0, 9335, 0, 9336, 0, 9337, 0, 9338, 0, 9339, 0, 9340, 0, 9341, 0, 9342, 0, 9343, 0, 9344, 0, 9345, 0, 9346, 0, 185, 0, 178, 0, 179, 0, 8308, 0, 8319, 0, 8321, 0, 8322, 0, 8323, 0, 8324, 0, 12353, 0, 12354, 0, 12355, 0, 12356, 0, 12357, 0, 12358, 0, 12359, 0, 12360, 0, 12361, 0, 12362, 0, 12363, 0, 12364, 0, 12365, 0, 12366, 0, 12367, 0, 12368, 0, 12369, 0, 12370, 0, 12371, 0, 12372, 0, 12373, 0, 12374, 0, 12375, 0, 12376, 0, 12377, 0, 12378, 0, 12379, 0, 12380, 0, 12381, 0, 12382, 0, 12383, 0, 12384, 0, 12385, 0, 12386, 0, 12387, 0, 12388, 0, 12389, 0, 12390, 0, 12391, 0, 12392, 0, 12393, 0, 12394, 0, 12395, 0, 12396, 0, 12397, 0, 12398, 0, 12399, 0, 12400, 0, 12401, 0, 12402, 0, 12403, 0, 12404, 0, 12405, 0, 12406, 0, 12407, 0, 12408, 0, 12409, 0, 12410, 0, 12411, 0, 12412, 0, 12413, 0, 12414, 0, 12415, 0, 12416, 0, 12417, 0, 12418, 0, 12419, 0, 12420, 0, 12421, 0, 12422, 0, 12423, 0, 12424, 0, 12425, 0, 12426, 0, 12427, 0, 12428, 0, 12429, 0, 12430, 0, 12431, 0, 12432, 0, 12433, 0, 12434, 0, 12435, 0, 12449, 0, 12450, 0, 12451, 0, 12452, 0, 12453, 0, 12454, 0, 12455, 0, 12456, 0, 12457, 0, 12458, 0, 12459, 0, 12460, 0, 12461, 0, 12462, 0, 12463, 0, 12464, 0, 12465, 0, 12466, 0, 12467, 0, 12468, 0, 12469, 0, 12470, 0, 12471, 0, 12472, 0, 12473, 0, 12474, 0, 12475, 0, 12476, 0, 12477, 0, 12478, 0, 12479, 0, 12480, 0, 12481, 0, 12482, 0, 12483, 0, 12484, 0, 12485, 0, 12486, 0, 12487, 0, 12488, 0, 12489, 0, 12490, 0, 12491, 0, 12492, 0, 12493, 0, 12494, 0, 12495, 0, 12496, 0, 12497, 0, 12498, 0, 12499, 0, 12500, 0, 12501, 0, 12502, 0, 12503, 0, 12504, 0, 12505, 0, 12506, 0, 12507, 0, 12508, 0, 12509, 0, 12510, 0, 12511, 0, 12512, 0, 12513, 0, 12514, 0, 12515, 0, 12516, 0, 12517, 0, 12518, 0, 12519, 0, 12520, 0, 12521, 0, 12522, 0, 12523, 0, 12524, 0, 12525, 0, 12526, 0, 12527, 0, 12528, 0, 12529, 0, 12530, 0, 12531, 0, 12532, 0, 12533, 0, 12534, 0, 1040, 0, 1041, 0, 1042, 0, 1043, 0, 1044, 0, 1045, 0, 1025, 0, 1046, 0, 1047, 0, 1048, 0, 1049, 0, 1050, 0, 1051, 0, 1052, 0, 1053, 0, 1054, 0, 1055, 0, 1056, 0, 1057, 0, 1058, 0, 1059, 0, 1060, 0, 1061, 0, 1062, 0, 1063, 0, 1064, 0, 1065, 0, 1066, 0, 1067, 0, 1068, 0, 1069, 0, 1070, 0, 1071, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, 1072, 0, 1073, 0, 1074, 0, 1075, 0, 1076, 0, 1077, 0, 1105, 0, 1078, 0, 1079, 0, 1080, 0, 1081, 0, 1082, 0, 1083, 0, 1084, 0, 1085, 0, 1086, 0, 1087, 0, 1088, 0, 1089, 0, 1090, 0, 1091, 0, 1092, 0, 1093, 0, 1094, 0, 1095, 0, 1096, 0, 1097, 0, 1098, 0, 1099, 0, 1100, 0, 1101, 0, 1102, 0, 1103, 0, -21504, 0, -21503, 0, -21500, 0, -21497, 0, -21496, 0, -21495, 0, -21494, 0, -21488, 0, -21487, 0, -21486, 0, -21485, 0, -21484, 0, -21483, 0, -21482, 0, -21481, 0, -21479, 0, -21478, 0, -21477, 0, -21476, 0, -21475, 0, -21472, 0, -21468, 0, -21460, 0, -21459, 0, -21457, 0, -21456, 0, -21455, 0, -21448, 0, -21447, 0, -21444, 0, -21440, 0, -21429, 0, -21427, 0, -21420, 0, -21416, 0, -21412, 0, -21392, 0, -21391, 0, -21388, 0, -21385, 0, -21384, 0, -21382, 0, -21376, 0, -21375, 0, -21373, 0, -21372, 0, -21371, 0, -21370, 0, -21367, 0, -21366, 0, -21365, 0, -21364, 0, -21360, 0, -21356, 0, -21348, 0, -21347, 0, -21345, 0, -21344, 0, -21343, 0, -21336, 0, -21335, 0, -21334, 0, -21332, 0, -21329, 0, -21328, 0, -21320, 0, -21319, 0, -21317, 0, -21316, 0, -21315, 0, -21311, 0, -21308, 0, -21304, 0, -21300, 0, -21291, 0, -21289, 0, -21280, 0, -21279, 0, -21276, 0, -21273, 0, -21272, 0, -21270, 0, -21268, 0, -21265, 0, -21264, 0, -21263, 0, -21261, 0, -21259, 0, -21258, 0, -21252, 0, -21251, 0, -21248, 0, -21244, 0, -21242, 0, -21236, 0, -21235, 0, -21233, 0, -21231, 0, -21224, 0, -21220, 0, -21216, 0, -21207, 0, -21204, 0, -21203, 0, -21196, 0, -21195, 0, -21192, 0, -21188, 0, -21180, 0, -21179, 0, -21177, 0, -21175, 0, -21168, 0, -21164, 0, -21160, 0, -21151, 0, -21149, 0, -21140, 0, -21139, 0, -21136, 0, -21133, 0, -21132, 0, -21131, 0, -21130, 0, -21125, 0, -21124, 0, -21123, 0, -21121, 0, -21119, 0, -21118, 0, -21112, 0, -21111, 0, -21108, 0, -21104, 0, -21092, 0, -21091, 0, -21084, 0, -21065, 0, -21056, 0, -21055, 0, -21052, 0, -21048, 0, -21040, 0, -21039, 0, -21037, 0, -21028, 0, -21024, 0, -21020, 0, -21e3, 0, -20999, 0, -20996, 0, -20993, 0, -20992, 0, -20991, 0, -20984, 0, -20983, 0, -20981, 0, -20979, 0, -20972, 0, -20944, 0, -20943, 0, -20940, 0, -20937, 0, -20936, 0, -20934, 0, -20928, 0, -20927, 0, -20925, 0, -20923, 0, -20922, 0, -20918, 0, -20916, 0, -20915, 0, -20914, 0, -20912, 0, -20908, 0, -20906, 0, -20900, 0, -20899, 0, -20897, 0, -20896, 0, -20895, 0, -20891, 0, -20888, 0, -20887, 0, -20884, 0, -20880, 0, -20872, 0, -20871, 0, -20869, 0, -20868, 0, -20867, 0, -20860, 0, -20859, 0, -20852, 0, -20804, 0, -20803, 0, -20802, 0, -20800, 0, -20796, 0, -20788, 0, -20787, 0, -20785, 0, -20784, 0, -20783, 0, -20776, 0, -20775, 0, -20772, 0, -20760, 0, -20757, 0, -20755, 0, -20748, 0, -20744, 0, -20740, 0, -20729, 0, -20728, 0, -20723, 0, -20720, 0, -20692, 0, -20691, 0, -20688, 0, -20686, 0, -20684, 0, -20676, 0, -20675, 0, -20673, 0, -20671, 0, -20670, 0, -20669, 0, -20664, 0, -20663, 0, -20656, 0, -20644, 0, -20643, 0, -20636, 0, -20635, 0, -20615, 0, -20608, 0, -20604, 0, -20600, 0, -20592, 0, -20591, 0, -20587, 0, -20580, 0, -20552, 0, -20551, 0, -20548, 0, -20544, 0, -20537, 0, -20536, 0, -20535, 0, -20533, 0, -20531, 0, -20530, 0, -20524, 0, -20516, 0, -20504, 0, -20503, 0, -20496, 0, -20495, 0, -20492, 0, -20488, 0, -20480, 0, -20479, 0, -20476, 0, -20468, 0, -20464, 0, -20460, 0, -20452, 0, -20451, 0, -20440, 0, -20412, 0, -20411, 0, -20408, 0, -20406, 0, -20404, 0, -20402, 0, -20397, 0, -20396, 0, -20395, 0, -20393, 0, -20391, 0, -20387, 0, -20356, 0, -20355, 0, -20352, 0, -20348, 0, -20340, 0, -20339, 0, -20337, 0, -20335, 0, -20328, 0, -20327, 0, -20326, 0, -20324, 0, -20321, 0, -20320, 0, -20319, 0, -20318, 0, -20312, 0, -20311, 0, -20309, 0, -20308, 0, -20307, 0, -20306, 0, -20305, 0, -20303, 0, -20301, 0, -20300, 0, -20299, 0, -20296, 0, -20292, 0, -20284, 0, -20283, 0, -20281, 0, -20280, 0, -20279, 0, -20272, 0, -20271, 0, -20268, 0, -20264, 0, -20256, 0, -20251, 0, -20216, 0, -20215, 0, -20213, 0, -20212, 0, -20208, 0, -20206, 0, -20205, 0, -20200, 0, -20199, 0, -20197, 0, -20196, 0, -20195, 0, -20189, 0, -20188, 0, -20187, 0, -20184, 0, -20180, 0, -20172, 0, -20171, 0, -20169, 0, -20168, 0, -20167, 0, -20160, 0, -20159, 0, -20156, 0, -20152, 0, -20144, 0, -20143, 0, -20140, 0, -20139, 0, -20136, 0, -20132, 0, -20128, 0, -20104, 0, -20103, 0, -20100, 0, -20096, 0, -20094, 0, -20088, 0, -20087, 0, -20085, 0, -20083, 0, -20078, 0, -20077, 0, -20076, 0, -20072, 0, -20068, 0, -20056, 0, -20020, 0, -20016, 0, -20012, 0, -20004, 0, -20003, 0, -20001, 0, -19992, 0, -19991, 0, -19988, 0, -19984, 0, -19975, 0, -19973, 0, -19971, 0, -19964, 0, -19963, 0, -19960, 0, -19957, 0, -19956, 0, -19948, 0, -19947, 0, -19945, 0, -19943, 0, -19936, 0, -19916, 0, -19908, 0, -19880, 0, -19876, 0, -19872, 0, -19864, 0, -19863, 0, -19852, 0, -19851, 0, -19844, 0, -19836, 0, -19835, 0, -19831, 0, -19824, 0, -19823, 0, -19820, 0, -19816, 0, -19815, 0, -19814, 0, -19808, 0, -19807, 0, -19805, 0, -19803, 0, -19802, 0, -19798, 0, -19796, 0, -19792, 0, -19788, 0, -19768, 0, -19767, 0, -19764, 0, -19760, 0, -19758, 0, -19752, 0, -19751, 0, -19749, 0, -19747, 0, -19742, 0, -19740, 0, -19739, 0, -19738, 0, -19736, 0, -19733, 0, -19732, 0, -19731, 0, -19730, 0, -19729, 0, -19725, 0, -19724, 0, -19723, 0, -19721, 0, -19720, 0, -19719, 0, -19718, 0, -19717, 0, -19713, 0, -19712, 0, -19711, 0, -19708, 0, -19704, 0, -19696, 0, -19695, 0, -19693, 0, -19692, 0, -19691, 0, -19684, 0, -19628, 0, -19627, 0, -19626, 0, -19624, 0, -19621, 0, -19620, 0, -19618, 0, -19617, 0, -19612, 0, -19611, 0, -19609, 0, -19607, 0, -19605, 0, -19602, 0, -19600, 0, -19599, 0, -19596, 0, -19592, 0, -19584, 0, -19583, 0, -19581, 0, -19580, 0, -19579, 0, -19572, 0, -19568, 0, -19564, 0, -19552, 0, -19551, 0, -19544, 0, -19540, 0, -19516, 0, -19515, 0, -19512, 0, -19509, 0, -19508, 0, -19506, 0, -19504, 0, -19500, 0, -19499, 0, -19497, 0, -19495, 0, -19493, 0, -19491, 0, -19488, 0, -19484, 0, -19480, 0, -19460, 0, -19440, 0, -19432, 0, -19428, 0, -19424, 0, -19416, 0, -19415, 0, -19413, 0, -19404, 0, -19376, 0, -19375, 0, -19372, 0, -19368, 0, -19360, 0, -19359, 0, -19357, 0, -19355, 0, -19348, 0, -19328, 0, -19320, 0, -19299, 0, -19292, 0, -19288, 0, -19284, 0, -19275, 0, -19273, 0, -19271, 0, -19264, 0, -19260, 0, -19256, 0, -19248, 0, -19243, 0, -19236, 0, -19235, 0, -19232, 0, -19229, 0, -19228, 0, -19226, 0, -19220, 0, -19219, 0, -19217, 0, -19215, 0, -19208, 0, -19180, 0, -19179, 0, -19176, 0, -19173, 0, -19172, 0, -19164, 0, -19163, 0, -19161, 0, -19160, 0, -19159, 0, -19158, 0, -19152, 0, -19151, 0, -19148, 0, -19144, 0, -19136, 0, -19135, 0, -19133, 0, -19132, 0, -19131, 0, -19125, 0, -19124, 0, -19123, 0, -19120, 0, -19116, 0, -19108, 0, -19107, 0, -19105, 0, -19104, 0, -19103, 0, -19040, 0, -19039, 0, -19036, 0, -19032, 0, -19030, 0, -19029, 0, -19024, 0, -19023, 0, -19021, 0, -19020, 0, -19019, 0, -19013, 0, -19012, 0, -19011, 0, -19008, 0, -19004, 0, -18996, 0, -18995, 0, -18993, 0, -18992, 0, -18991, 0, -18984, 0, -18964, 0, -18928, 0, -18927, 0, -18924, 0, -18920, 0, -18907, 0, -18900, 0, -18892, 0, -18872, 0, -18844, 0, -18840, 0, -18788, 0, -18787, 0, -18784, 0, -18780, 0, -18773, 0, -18772, 0, -18767, 0, -18732, 0, -18704, 0, -18700, 0, -18696, 0, -18688, 0, -18687, 0, -18683, 0, -18648, 0, -18647, 0, -18644, 0, -18641, 0, -18640, 0, -18632, 0, -18631, 0, -18629, 0, -18620, 0, -18616, 0, -18612, 0, -18604, 0, -18603, 0, -18592, 0, -18588, 0, -18584, 0, -18576, 0, -18575, 0, -18573, 0, -18571, 0, -18564, 0, -18563, 0, -18560, 0, -18556, 0, -18548, 0, -18547, 0, -18545, 0, -18544, 0, -18543, 0, -18542, 0, -18538, 0, -18537, 0, -18536, 0, -18535, 0, -18532, 0, -18528, 0, -18520, 0, -18519, 0, -18517, 0, -18516, 0, -18515, 0, -18508, 0, -18507, 0, -18504, 0, -18489, 0, -18487, 0, -18452, 0, -18451, 0, -18448, 0, -18444, 0, -18436, 0, -18435, 0, -18433, 0, -18432, 0, -18431, 0, -18425, 0, -18424, 0, -18423, 0, -18420, 0, -18416, 0, -18408, 0, -18407, 0, -18405, 0, -18403, 0, -18396, 0, -18395, 0, -18392, 0, -18388, 0, -18380, 0, -18379, 0, -18377, 0, -18376, 0, -18375, 0, -18368, 0, -18364, 0, -18351, 0, -18349, 0, -18340, 0, -18339, 0, -18336, 0, -18332, 0, -18324, 0, -18323, 0, -18321, 0, -18319, 0, -18312, 0, -18308, 0, -18291, 0, -18264, 0, -18256, 0, -18252, 0, -18248, 0, -18240, 0, -18239, 0, -18237, 0, -18235, 0, -18228, 0, -18224, 0, -18220, 0, -18211, 0, -18209, 0, -18207, 0, -18200, 0, -18199, 0, -18196, 0, -18192, 0, -18184, 0, -18183, 0, -18181, 0, -18179, 0, -18172, 0, -18152, 0, -18144, 0, -18116, 0, -18115, 0, -18112, 0, -18108, 0, -18100, 0, -18097, 0, -18095, 0, -18088, 0, -18087, 0, -18084, 0, -18080, 0, -18072, 0, -18071, 0, -18069, 0, -18067, 0, -18060, 0, -18059, 0, -18056, 0, -18052, 0, -18044, 0, -18043, 0, -18041, 0, -18039, 0, -18038, 0, -18035, 0, -18034, 0, -18004, 0, -18003, 0, -18e3, 0, -17996, 0, -17988, 0, -17987, 0, -17985, 0, -17983, 0, -17976, 0, -17975, 0, -17972, 0, -17970, 0, -17969, 0, -17968, 0, -17967, 0, -17966, 0, -17960, 0, -17959, 0, -17957, 0, -17955, 0, -17954, 0, -17951, 0, -17949, 0, -17948, 0, -17947, 0, -17944, 0, -17940, 0, -17932, 0, -17931, 0, -17929, 0, -17928, 0, -17927, 0, -17926, 0, -17920, 0, -17919, 0, -17912, 0, -17899, 0, -17864, 0, -17863, 0, -17860, 0, -17856, 0, -17854, 0, -17848, 0, -17847, 0, -17845, 0, -17843, 0, -17842, 0, -17837, 0, -17836, 0, -17835, 0, -17832, 0, -17828, 0, -17820, 0, -17819, 0, -17817, 0, -17816, 0, -17815, 0, -17808, 0, -17807, 0, -17804, 0, -17800, 0, -17789, 0, -17788, 0, -17787, 0, -17785, 0, -17780, 0, -17752, 0, -17751, 0, -17749, 0, -17748, 0, -17744, 0, -17742, 0, -17736, 0, -17735, 0, -17733, 0, -17731, 0, -17724, 0, -17720, 0, -17704, 0, -17703, 0, -17668, 0, -17664, 0, -17660, 0, -17651, 0, -17649, 0, -17647, 0, -17640, 0, -17636, 0, -17632, 0, -17623, 0, -17621, 0, -17612, 0, -17611, 0, -17610, 0, -17608, 0, -17605, 0, -17604, 0, -17603, 0, -17602, 0, -17596, 0, -17595, 0, -17593, 0, -17591, 0, -17587, 0, -17585, 0, -17584, 0, -17580, 0, -17576, 0, -17567, 0, -17565, 0, -17556, 0, -17528, 0, -17524, 0, -17520, 0, -17500, 0, -17496, 0, -17492, 0, -17484, 0, -17481, 0, -17472, 0, -17468, 0, -17464, 0, -17456, 0, -17453, 0, -17416, 0, -17415, 0, -17412, 0, -17409, 0, -17408, 0, -17406, 0, -17400, 0, -17399, 0, -17397, 0, -17396, 0, -17395, 0, -17393, 0, -17391, 0, -17388, 0, -17387, 0, -17386, 0, -17385, 0, -17384, 0, -17381, 0, -17380, 0, -17379, 0, -17378, 0, -17377, 0, -17372, 0, -17371, 0, -17369, 0, -17367, 0, -17363, 0, -17360, 0, -17359, 0, -17356, 0, -17352, 0, -17344, 0, -17343, 0, -17341, 0, -17340, 0, -17339, 0, -17335, 0, -17332, 0, -17331, 0, -17328, 0, -17315, 0, -17276, 0, -17275, 0, -17272, 0, -17269, 0, -17268, 0, -17266, 0, -17260, 0, -17259, 0, -17257, 0, -17255, 0, -17254, 0, -17248, 0, -17247, 0, -17244, 0, -17241, 0, -17240, 0, -17232, 0, -17231, 0, -17229, 0, -17228, 0, -17227, 0, -17220, 0, -17219, 0, -17216, 0, -17212, 0, -17203, 0, -17201, 0, -17200, 0, -17199, 0, -17195, 0, -17192, 0, -17188, 0, -17164, 0, -17163, 0, -17162, 0, -17160, 0, -17156, 0, -17148, 0, -17147, 0, -17145, 0, -17143, 0, -17136, 0, -17132, 0, -17116, 0, -17108, 0, -17088, 0, -17080, 0, -17079, 0, -17076, 0, -17072, 0, -17064, 0, -17063, 0, -17052, 0, -17048, 0, -17024, 0, -17023, 0, -17020, 0, -17017, 0, -17016, 0, -17015, 0, -17014, 0, -17008, 0, -17007, 0, -17005, 0, -17003, 0, -16999, 0, -16998, 0, -16996, 0, -16988, 0, -16976, 0, -16968, 0, -16940, 0, -16939, 0, -16936, 0, -16932, 0, -16919, 0, -16912, 0, -16908, 0, -16904, 0, -16896, 0, -16893, 0, -16891, 0, -16884, 0, -16883, 0, -16880, 0, -16876, 0, -16868, 0, -16867, 0, -16865, 0, -16828, 0, -16827, 0, -16824, 0, -16820, 0, -16818, 0, -16812, 0, -16811, 0, -16809, 0, -16807, 0, -16806, 0, -16805, 0, -16800, 0, -16799, 0, -16796, 0, -16792, 0, -16790, 0, -16784, 0, -16783, 0, -16781, 0, -16780, 0, -16779, 0, -16773, 0, -16772, 0, -16771, 0, -16768, 0, -16764, 0, -16756, 0, -16755, 0, -16753, 0, -16752, 0, -16751, 0, -16744, 0, -16743, 0, -16728, 0, -16688, 0, -16687, 0, -16684, 0, -16681, 0, -16680, 0, -16672, 0, -16669, 0, -16668, 0, -16667, 0, -16660, 0, -16639, 0, -16632, 0, -16631, 0, -16616, 0, -16615, 0, -16613, 0, -16612, 0, -16611, 0, -16576, 0, -16575, 0, -16572, 0, -16568, 0, -16560, 0, -16559, 0, -16555, 0, -16492, 0, -16464, 0, -16443, 0, -16436, 0, -16435, 0, -16432, 0, -16428, 0, -16420, 0, -16417, 0, -16415, 0, -16324, 0, -16303, 0, -16296, 0, -16292, 0, -16288, 0, -16280, 0, -16279, 0, -16240, 0, -16239, 0, -16236, 0, -16232, 0, -16224, 0, -16223, 0, -16221, 0, -16219, 0, -16212, 0, -16211, 0, -16209, 0, -16208, 0, -16205, 0, -16204, 0, -16203, 0, -16202, 0, -16196, 0, -16195, 0, -16193, 0, -16192, 0, -16191, 0, -16187, 0, -16184, 0, -16183, 0, -16180, 0, -16176, 0, -16168, 0, -16167, 0, -16165, 0, -16164, 0, -16163, 0, -16156, 0, -16155, 0, -16152, 0, -16148, 0, -16140, 0, -16139, 0, -16137, 0, -16135, 0, -16128, 0, -16124, 0, -16120, 0, -16112, 0, -16107, 0, -16100, 0, -16099, 0, -16098, 0, -16097, 0, -16096, 0, -16093, 0, -16092, 0, -16090, 0, -16089, 0, -16084, 0, -16083, 0, -16081, 0, -16080, 0, -16079, 0, -16074, 0, -16072, 0, -16071, 0, -16068, 0, -16064, 0, -16056, 0, -16055, 0, -16053, 0, -16052, 0, -16051, 0, -16044, 0, -16043, 0, -16040, 0, -16036, 0, -16028, 0, -16027, 0, -16025, 0, -16024, 0, -16023, 0, -16016, 0, -16012, 0, -16008, 0, -15995, 0, -15988, 0, -15987, 0, -15986, 0, -15984, 0, -15980, 0, -15978, 0, -15972, 0, -15971, 0, -15969, 0, -15967, 0, -15963, 0, -15960, 0, -15959, 0, -15956, 0, -15952, 0, -15939, 0, -15932, 0, -15928, 0, -15924, 0, -15916, 0, -15913, 0, -15912, 0, -15904, 0, -15900, 0, -15896, 0, -15888, 0, -15887, 0, -15885, 0, -15876, 0, -15875, 0, -15872, 0, -15868, 0, -15860, 0, -15859, 0, -15857, 0, -15855, 0, -15848, 0, -15847, 0, -15844, 0, -15841, 0, -15840, 0, -15832, 0, -15831, 0, -15829, 0, -15827, 0, -15825, 0, -15823, 0, -15822, 0, -15820, 0, -15800, 0, -15792, 0, -15791, 0, -15788, 0, -15784, 0, -15776, 0, -15771, 0, -15764, 0, -15763, 0, -15760, 0, -15756, 0, -15748, 0, -15747, 0, -15745, 0, -15743, 0, -15736, 0, -15735, 0, -15728, 0, -15720, 0, -15717, 0, -15715, 0, -15708, 0, -15707, 0, -15704, 0, -15700, 0, -15699, 0, -15692, 0, -15691, 0, -15689, 0, -15687, 0, -15652, 0, -15651, 0, -15648, 0, -15645, 0, -15644, 0, -15637, 0, -15636, 0, -15635, 0, -15633, 0, -15631, 0, -15626, 0, -15624, 0, -15623, 0, -15621, 0, -15620, 0, -15616, 0, -15608, 0, -15607, 0, -15604, 0, -15603, 0, -15597, 0, -15596, 0, -15595, 0, -15592, 0, -15588, 0, -15580, 0, -15579, 0, -15576, 0, -15575, 0, -15547, 0, -15512, 0, -15511, 0, -15508, 0, -15504, 0, -15502, 0, -15496, 0, -15495, 0, -15492, 0, -15491, 0, -15484, 0, -15480, 0, -15476, 0, -15424, 0, -15400, 0, -15399, 0, -15396, 0, -15393, 0, -15392, 0, -15390, 0, -15384, 0, -15383, 0, -15379, 0, -15372, 0, -15371, 0, -15368, 0, -15352, 0, -15344, 0, -15324, 0, -15316, 0, -15312, 0, -15308, 0, -15300, 0, -15299, 0, -15288, 0, -15260, 0, -15259, 0, -15256, 0, -15252, 0, -15244, 0, -15243, 0, -15239, 0, -15232, 0, -15212, 0, -15204, 0, -15176, 0, -15172, 0, -15127, 0, -15120, 0, -15119, 0, -15116, 0, -15112, 0, -15110, 0, -15105, 0, -15104, 0, -15103, 0, -15092, 0, -15088, 0, -15084, 0, -15076, 0, -15064, 0, -15063, 0, -15060, 0, -15056, 0, -15048, 0, -15047, 0, -15045, 0, -15043, 0, -15036, 0, -15035, 0, -15032, 0, -15031, 0, -15030, 0, -15028, 0, -15027, 0, -15026, 0, -15021, 0, -15020, 0, -15019, 0, -15017, 0, -15016, 0, -15015, 0, -15011, 0, -15010, 0, -15008, 0, -15007, 0, -15004, 0, -15e3, 0, -14992, 0, -14991, 0, -14989, 0, -14988, 0, -14987, 0, -14980, 0, -14979, 0, -14976, 0, -14972, 0, -14969, 0, -14964, 0, -14963, 0, -14961, 0, -14959, 0, -14955, 0, -14953, 0, -14952, 0, -14948, 0, -14944, 0, -14935, 0, -14924, 0, -14923, 0, -14920, 0, -14919, 0, -14917, 0, -14916, 0, -14915, 0, -14914, 0, -14908, 0, -14907, 0, -14906, 0, -14905, 0, -14904, 0, -14903, 0, -14902, 0, -14900, 0, -14898, 0, -14896, 0, -14895, 0, -14892, 0, -14888, 0, -14880, 0, -14879, 0, -14877, 0, -14875, 0, -14868, 0, -14867, 0, -14866, 0, -14864, 0, -14860, 0, -14858, 0, -14857, 0, -14852, 0, -14851, 0, -14850, 0, -14849, 0, -14848, 0, -14847, 0, -14843, 0, -14842, 0, -14841, 0, -14840, 0, -14836, 0, -14832, 0, -14824, 0, -14823, 0, -14821, 0, -14820, 0, -14812, 0, -14811, 0, -14808, 0, -14804, 0, -14803, 0, -14802, 0, -14800, 0, -14797, 0, -14796, 0, -14795, 0, -14793, 0, -14791, 0, -14789, 0, -14784, 0, -14783, 0, -14780, 0, -14776, 0, -14768, 0, -14767, 0, -14765, 0, -14764, 0, -14763, 0, -14756, 0, -14755, 0, -14752, 0, -14740, 0, -14737, 0, -14735, 0, -14728, 0, -14727, 0, -14724, 0, -14720, 0, -14712, 0, -14711, 0, -14709, 0, -14707, 0, -14700, 0, -14699, 0, -14696, 0, -14692, 0, -14684, 0, -14683, 0, -14681, 0, -14679, 0, -14672, 0, -14671, 0, -14668, 0, -14664, 0, -14663, 0, -14662, 0, -14656, 0, -14655, 0, -14653, 0, -14651, 0, -14644, 0, -14643, 0, -14640, 0, -14636, 0, -14628, 0, -14627, 0, -14624, 0, -14623, 0, -14616, 0, -14615, 0, -14612, 0, -14608, 0, -14600, 0, -14599, 0, -14595, 0, -14588, 0, -14587, 0, -14584, 0, -14580, 0, -14572, 0, -14571, 0, -14569, 0, -14567, 0, -14560, 0, -14559, 0, -14556, 0, -14552, 0, -14544, 0, -14543, 0, -14541, 0, -14539, 0, -14537, 0, -14532, 0, -14531, 0, -14528, 0, -14524, 0, -14518, 0, -14516, 0, -14515, 0, -14513, 0, -14511, 0, -14510, 0, -14509, 0, -14508, 0, -14507, 0, -14506, 0, -14505, 0, -14504, 0, -14500, 0, -14496, 0, -14488, 0, -14485, 0, -14476, 0, -14475, 0, -14472, 0, -14468, 0, -14467, 0, -14466, 0, -14461, 0, -14460, 0, -14459, 0, -14457, 0, -14456, 0, -14455, 0, -14454, 0, -14450, 0, -14448, 0, -14447, 0, -14444, 0, -14442, 0, -14441, 0, -14440, 0, -14438, 0, -14432, 0, -14431, 0, -14429, 0, -14428, 0, -14427, 0, -14426, 0, -14420, 0, -14419, 0, -14416, 0, -14412, 0, -14404, 0, -14403, 0, -14401, 0, -14400, 0, -14399, 0, -14392, 0, -14391, 0, -14388, 0, -14386, 0, -14384, 0, -14376, 0, -14371, 0, -14364, 0, -14360, 0, -14356, 0, -14336, 0, -14335, 0, -14332, 0, -14328, 0, -14326, 0, -14320, 0, -14319, 0, -14317, 0, -14315, 0, -14314, 0, -14308, 0, -14307, 0, -14304, 0, -14300, 0, -14292, 0, -14291, 0, -14289, 0, -14287, 0, -14280, 0, -14276, 0, -14272, 0, -14264, 0, -14263, 0, -14260, 0, -14259, 0, -14252, 0, -14224, 0, -14223, 0, -14220, 0, -14216, 0, -14214, 0, -14208, 0, -14207, 0, -14205, 0, -14203, 0, -14202, 0, -14201, 0, -14197, 0, -14196, 0, -14195, 0, -14188, 0, -14179, 0, -14177, 0, -14175, 0, -14168, 0, -14148, 0, -14147, 0, -14140, 0, -14136, 0, -14132, 0, -14124, 0, -14123, 0, -14121, 0, -14119, 0, -14112, 0, -14111, 0, -14108, 0, -14091, 0, -14084, 0, -14083, 0, -14080, 0, -14076, 0, -14075, 0, -14074, 0, -14068, 0, -14067, 0, -14065, 0, -14063, 0, -14056, 0, -14036, 0, -14028, 0, -14e3, 0, -13999, 0, -13996, 0, -13992, 0, -13984, 0, -13983, 0, -13981, 0, -13972, 0, -13968, 0, -13964, 0, -13956, 0, -13944, 0, -13943, 0, -13940, 0, -13936, 0, -13928, 0, -13927, 0, -13925, 0, -13923, 0, -13888, 0, -13887, 0, -13884, 0, -13881, 0, -13880, 0, -13878, 0, -13872, 0, -13871, 0, -13869, 0, -13867, 0, -13866, 0, -13863, 0, -13862, 0, -13860, 0, -13859, 0, -13856, 0, -13854, 0, -13852, 0, -13849, 0, -13844, 0, -13843, 0, -13841, 0, -13840, 0, -13839, 0, -13832, 0, -13831, 0, -13828, 0, -13824, 0, -13816, 0, -13815, 0, -13813, 0, -13812, 0, -13811, 0, -13804, 0, -13800, 0, -13783, 0, -13748, 0, -13747, 0, -13744, 0, -13740, 0, -13732, 0, -13731, 0, -13729, 0, -13728, 0, -13727, 0, -13720, 0, -13699, 0, -13692, 0, -13672, 0, -13636, 0, -13635, 0, -13632, 0, -13628, 0, -13620, 0, -13619, 0, -13617, 0, -13615, 0, -13613, 0, -13608, 0, -13607, 0, -13600, 0, -13588, 0, -13580, 0, -13560, 0, -13552, 0, -13548, 0, -13544, 0, -13536, 0, -13535, 0, -13503, 0, -13496, 0, -13495, 0, -13492, 0, -13488, 0, -13480, 0, -13479, 0, -13475, 0, -13468, 0, -13448, 0, -13447, 0, -13412, 0, -13384, 0, -13356, 0, -13340, 0, -13337, 0, -13335, 0, -13300, 0, -13299, 0, -13296, 0, -13292, 0, -13284, 0, -13283, 0, -13279, 0, -13278, 0, -13273, 0, -13272, 0, -13271, 0, -13268, 0, -13266, 0, -13264, 0, -13256, 0, -13255, 0, -13253, 0, -13252, 0, -13251, 0, -13250, 0, -13244, 0, -13243, 0, -13240, 0, -13236, 0, -13228, 0, -13227, 0, -13225, 0, -13224, 0, -13223, 0, -13216, 0, -13212, 0, -13210, 0, -13208, 0, -13200, 0, -13195, 0, -13160, 0, -13159, 0, -13156, 0, -13152, 0, -13144, 0, -13143, 0, -13141, 0, -13140, 0, -13139, 0, -13132, 0, -13131, 0, -13128, 0, -13124, 0, -13116, 0, -13115, 0, -13113, 0, -13111, 0, -13104, 0, -13100, 0, -13084, 0, -13076, 0, -13072, 0, -13055, 0, -13048, 0, -13047, 0, -13044, 0, -13040, 0, -13032, 0, -13031, 0, -13029, 0, -13027, 0, -13020, 0, -13016, 0, -13012, 0, -12999, 0, -12964, 0, -12960, 0, -12956, 0, -12948, 0, -12947, 0, -12945, 0, -12943, 0, -12936, 0, -12920, 0, -12908, 0, -12907, 0, -12904, 0, -12900, 0, -12892, 0, -12891, 0, -12889, 0, -12887, 0, -12880, 0, -12860, 0, -12852, 0, -12848, 0, -12824, 0, -12820, 0, -12816, 0, -12808, 0, -12807, 0, -12805, 0, -12803, 0, -12796, 0, -12792, 0, -12788, 0, -12780, 0, -12775, 0, -12768, 0, -12767, 0, -12764, 0, -12760, 0, -12752, 0, -12751, 0, -12749, 0, -12747, 0, -12712, 0, -12711, 0, -12708, 0, -12705, 0, -12704, 0, -12703, 0, -12696, 0, -12695, 0, -12693, 0, -12691, 0, -12684, 0, -12683, 0, -12680, 0, -12676, 0, -12668, 0, -12667, 0, -12665, 0, -12663, 0, -12656, 0, -12655, 0, -12652, 0, -12648, 0, -12640, 0, -12639, 0, -12637, 0, -12636, 0, -12635, 0, -12628, 0, -12627, 0, -12607, 0, -12572, 0, -12571, 0, -12568, 0, -12565, 0, -12564, 0, -12556, 0, -12555, 0, -12553, 0, -12552, 0, -12551, 0, -12544, 0, -12543, 0, -12540, 0, -12536, 0, -12528, 0, -12527, 0, -12525, 0, -12523, 0, -12516, 0, -12512, 0, -12508, 0, -12500, 0, -12499, 0, -12497, 0, -12496, 0, -12495, 0, -12488, 0, -12460, 0, -12459, 0, -12456, 0, -12452, 0, -12444, 0, -12443, 0, -12441, 0, -12439, 0, -12432, 0, -12431, 0, -12428, 0, -12424, 0, -12416, 0, -12411, 0, -12404, 0, -12383, 0, -12376, 0, -12368, 0, -12348, 0, -12320, 0, -12319, 0, -12316, 0, -12312, 0, -12304, 0, -12303, 0, -12301, 0, -12299, 0, -12292, 0, -12288, 0, -12284, 0, -12271, 0, -12264, 0, -12243, 0, -12236, 0, -12235, 0, -12232, 0, -12228, 0, -12220, 0, -12219, 0, -12217, 0, -12215, 0, -12208, 0, -12204, 0, -12200, 0, -12192, 0, -12180, 0, -12179, 0, -12176, 0, -12172, 0, -12164, 0, -12163, 0, -12159, 0, -12124, 0, -12123, 0, -12120, 0, -12116, 0, -12108, 0, -12107, 0, -12105, 0, -12103, 0, -12096, 0, -12095, 0, -12092, 0, -12088, 0, -12087, 0, -12080, 0, -12079, 0, -12077, 0, -12076, 0, -12075, 0, -12068, 0, -12067, 0, -12064, 0, -12060, 0, -12052, 0, -12051, 0, -12049, 0, -12048, 0, -12047, 0, -12040, 0, -12019, 0, -11984, 0, -11983, 0, -11980, 0, -11976, 0, -11974, 0, -11968, 0, -11967, 0, -11965, 0, -11964, 0, -11963, 0, -11956, 0, -11955, 0, -11952, 0, -11948, 0, -11940, 0, -11939, 0, -11937, 0, -11935, 0, -11928, 0, -11924, 0, -11908, 0, -11900, 0, -11896, 0, -11872, 0, -11871, 0, -11868, 0, -11864, 0, -11856, 0, -11855, 0, -11853, 0, -11851, 0, -11846, 0, -11844, 0, -11840, 0, -11816, 0, -11788, 0, -11784, 0, -11769, 0, -11767, 0, -11760, 0, -11732, 0, -11731, 0, -11728, 0, -11724, 0, -11716, 0, -11715, 0, -11713, 0, -11711, 0, -11704, 0, -11684, 0, -11676, 0, -11648, 0, -11647, 0, -11644, 0, -11640, 0, -11632, 0, -11631, 0, -11627, 0, -11620, 0, -11616, 0, -11612, 0, -11604, 0, -11599, 0, -11592, 0, -11591, 0, -11588, 0, -11585, 0, -11584, 0, -11582, 0, -11576, 0, -11575, 0, -11573, 0, -11564, 0, -11560, 0, -11556, 0, -11548, 0, -11547, 0, -11536, 0, -11535, 0, -11532, 0, -11528, 0, -11520, 0, -11519, 0, -11517, 0, -11515, 0, -11508, 0, -11507, 0, -11506, 0, -11504, 0, -11500, 0, -11498, 0, -11492, 0, -11491, 0, -11489, 0, -11488, 0, -11487, 0, -11483, 0, -11480, 0, -11479, 0, -11476, 0, -11472, 0, -11464, 0, -11463, 0, -11461, 0, -11460, 0, -11459, 0, -11452, 0, -11451, 0, -11396, 0, -11395, 0, -11392, 0, -11388, 0, -11380, 0, -11379, 0, -11377, 0, -11376, 0, -11375, 0, -11368, 0, -11367, 0, -11364, 0, -11360, 0, -11352, 0, -11351, 0, -11349, 0, -11347, 0, -11340, 0, -11336, 0, -11332, 0, -11324, 0, -11323, 0, -11320, 0, -11319, 0, -11312, 0, -11304, 0, -11295, 0, -11293, 0, -11284, 0, -11283, 0, -11280, 0, -11276, 0, -11268, 0, -11267, 0, -11265, 0, -11263, 0, -11256, 0, -11235, 0, -11200, 0, -11196, 0, -11172, 0, -11168, 0, -11164, 0, -11155, 0, -11153, 0, -11144, 0, -11143, 0, -11140, 0, -11137, 0, -11136, 0, -11134, 0, -11128, 0, -11127, 0, -11125, 0, -11123, 0, -11116, 0, -11095, 0, -11060, 0, -11056, 0, -11052, 0, -11044, 0, -11041, 0, -11032, 0, -11028, 0, -11024, 0, -11016, 0, -11013, 0, -11011, 0, -11004, 0, -11e3, 0, -10996, 0, -10988, 0, -10987, 0, -10985, 0, -10948, 0, -10947, 0, -10944, 0, -10940, 0, -10932, 0, -10931, 0, -10929, 0, -10927, 0, -10920, 0, -10919, 0, -10916, 0, -10912, 0, -10907, 0, -10904, 0, -10903, 0, -10901, 0, -10899, 0, -10892, 0, -10891, 0, -10888, 0, -10884, 0, -10876, 0, -10875, 0, -10873, 0, -10872, 0, -10871, 0, -10864, 0, -10843, 0, -10808, 0, -10807, 0, -10804, 0, -10800, 0, -10798, 0, -10792, 0, -10791, 0, -10789, 0, -10787, 0, -10780, 0, -10779, 0, -10776, 0, -10772, 0, -10764, 0, -10763, 0, -10761, 0, -10759, 0, -10752, 0, -10751, 0, -10748, 0, -10744, 0, -10736, 0, -10735, 0, -10733, 0, -10732, 0, -10731, 0, -10724, 0, -10720, 0, -10716, 0, -10707, 0, -10696, 0, -10695, 0, -10692, 0, -10688, 0, -10683, 0, -10680, 0, -10679, 0, -10677, 0, -10675, 0, -10671, 0, -10668, 0, -10667, 0, -10664, 0, -10660, 0, -10649, 0, -10647, 0, -10640, 0, -10639, 0, -10636, 0, -10621, 0, -10619, 0, -10612, 0, -10611, 0, -10608, 0, -10604, 0, -10595, 0, -10593, 0, -10591, 0, -10584, 0, -10580, 0, -10576, 0, -10567, 0, -10565, 0, -10556, 0, -10555, 0, -10552, 0, -10548, 0, -10543, 0, -10540, 0, -10537, 0, -10535, 0, -10528, 0, -10524, 0, -10520, 0, -10512, 0, -10507, 0, -10500, 0, -10499, 0, -10496, 0, -10492, 0, -10479, 0, -10472, 0, -10471, 0, -10468, 0, -10464, 0, -10456, 0, -10455, 0, -10453, 0, -10451, 0, -10444, 0, -10443, 0, -10440, 0, -10436, 0, -10428, 0, -10425, 0, -10423, 0, -10416, 0, -10415, 0, -10412, 0, -10410, 0, -10409, 0, -10408, 0, -10407, 0, -10400, 0, -10399, 0, -10397, 0, -10395, 0, -10391, 0, -10388, 0, -10384, 0, -10380, 0, -10372, 0, -10371, 0, -10367, 0, -10360, 0, -10359, 0, -10356, 0, -10352, 0, -10344, 0, -10343, 0, -10341, 0, -10339, 0, 20285, 0, 20339, 0, 20551, 0, 20729, 0, 21152, 0, 21487, 0, 21621, 0, 21733, 0, 22025, 0, 23233, 0, 23478, 0, 26247, 0, 26550, 0, 26551, 0, 26607, 0, 27468, 0, 29634, 0, 30146, 0, 31292, 0, -32037, 0, -31996, 0, -30633, 0, -30584, 0, -30154, 0, -29496, 0, -29233, 0, -28933, 0, -28698, 0, -26155, 0, 21051, 0, 21364, 0, 21508, 0, 24682, 0, 24932, 0, 27580, 0, 29647, 0, -32486, 0, -30278, 0, -30254, 0, -27229, 0, 20355, 0, 21002, 0, 22718, 0, 22904, 0, 23014, 0, 24178, 0, 24185, 0, 25031, 0, 25536, 0, 26438, 0, 26604, 0, 26751, 0, 28567, 0, 30286, 0, 30475, 0, 30965, 0, 31240, 0, 31487, 0, 31777, 0, -32611, 0, -32146, 0, -32143, 0, -29973, 0, -27245, 0, 20075, 0, 21917, 0, 26359, 0, 28212, 0, 30883, 0, 31469, 0, -31653, 0, -30448, 0, -30898, 0, -26712, 0, 21208, 0, 22350, 0, 22570, 0, 23884, 0, 24863, 0, 25022, 0, 25121, 0, 25954, 0, 26577, 0, 27204, 0, 28187, 0, 29976, 0, 30131, 0, 30435, 0, 30640, 0, 32058, 0, -28497, 0, -27567, 0, -27566, 0, -24683, 0, 21283, 0, 23724, 0, 30002, 0, -32549, 0, -28096, 0, -27240, 0, 21083, 0, 22536, 0, 23004, 0, 23713, 0, 23831, 0, 24247, 0, 24378, 0, 24394, 0, 24951, 0, 27743, 0, 30074, 0, 30086, 0, 31968, 0, 32115, 0, 32177, 0, 32652, 0, -32428, 0, -32223, 0, -31343, 0, -30399, 0, -29925, 0, -27908, 0, -27059, 0, -25529, 0, 20171, 0, 20215, 0, 20491, 0, 20977, 0, 22607, 0, 24887, 0, 24894, 0, 24936, 0, 25913, 0, 27114, 0, 28433, 0, 30117, 0, 30342, 0, 30422, 0, 31623, 0, -32091, 0, -31541, 0, -1792, 0, -27737, 0, -27253, 0, 21888, 0, 23458, 0, 22353, 0, -1791, 0, 31923, 0, 32697, 0, -28235, 0, 20520, 0, 21435, 0, 23621, 0, 24040, 0, 25298, 0, 25454, 0, 25818, 0, 25831, 0, 28192, 0, 28844, 0, 31067, 0, -29219, 0, -29154, 0, -1790, 0, -28547, 0, -28091, 0, -27912, 0, 20094, 0, 20214, 0, 20581, 0, 24062, 0, 24314, 0, 24838, 0, 26967, 0, -32399, 0, -31148, 0, -29113, 0, -27787, 0, -26069, 0, 20062, 0, 20625, 0, 26480, 0, 26688, 0, 20745, 0, 21133, 0, 21138, 0, 27298, 0, 30652, 0, -28144, 0, -24876, 0, 21163, 0, 24623, 0, -28686, 0, 20552, 0, 25001, 0, 25581, 0, 25802, 0, 26684, 0, 27268, 0, 28608, 0, -32376, 0, -30303, 0, -26988, 0, 22533, 0, 29309, 0, 29356, 0, 29956, 0, 32121, 0, 32365, 0, -32599, 0, -30325, 0, -29836, 0, -28573, 0, -25263, 0, 25225, 0, 27770, 0, 28500, 0, 32080, 0, 32570, 0, -30173, 0, 20860, 0, 24906, 0, 31645, 0, -29927, 0, -28073, 0, -27764, 0, 20140, 0, 20435, 0, 20510, 0, 20670, 0, 20742, 0, 21185, 0, 21197, 0, 21375, 0, 22384, 0, 22659, 0, 24218, 0, 24465, 0, 24950, 0, 25004, 0, 25806, 0, 25964, 0, 26223, 0, 26299, 0, 26356, 0, 26775, 0, 28039, 0, 28805, 0, 28913, 0, 29855, 0, 29861, 0, 29898, 0, 30169, 0, 30828, 0, 30956, 0, 31455, 0, 31478, 0, 32069, 0, 32147, 0, -32747, 0, -32705, 0, -32485, 0, -31850, 0, -29850, 0, -28907, 0, -28651, 0, -27679, 0, -26621, 0, -26568, 0, -26022, 0, -25624, 0, 20418, 0, 21843, 0, 22586, 0, 22865, 0, 23395, 0, 23622, 0, 24760, 0, 25106, 0, 26690, 0, 26800, 0, 26856, 0, 28330, 0, 30028, 0, 30328, 0, 30926, 0, 31293, 0, 31995, 0, 32363, 0, 32380, 0, -30200, 0, -30047, 0, -29633, 0, -26994, 0, -25148, 0, 21476, 0, 21481, 0, 21578, 0, 21617, 0, 22266, 0, 22993, 0, 23396, 0, 23611, 0, 24235, 0, 25335, 0, 25911, 0, 25925, 0, 25970, 0, 26272, 0, 26543, 0, 27073, 0, 27837, 0, 30204, 0, 30352, 0, 30590, 0, 31295, 0, 32660, 0, -32765, 0, -32607, 0, -32369, 0, -32026, 0, -32003, 0, -31760, 0, -31295, 0, -30671, 0, -30540, 0, -30043, 0, -1789, 0, -28772, 0, -27858, 0, -26937, 0, -26521, 0, -25896, 0, -24813, 0, 21741, 0, 26011, 0, 26354, 0, 26767, 0, 31296, 0, -29641, 0, -25248, 0, 22256, 0, 22372, 0, 23825, 0, 26118, 0, 26801, 0, 26829, 0, 28414, 0, 29736, 0, -30562, 0, -25628, 0, 27752, 0, -1788, 0, -25944, 0, 20379, 0, 20844, 0, 20849, 0, 21151, 0, 23380, 0, 24037, 0, 24656, 0, 24685, 0, 25329, 0, 25511, 0, 25915, 0, 29657, 0, 31354, 0, -31069, 0, -29534, 0, -26737, 0, 20018, 0, 23521, 0, 25096, 0, 26524, 0, 29916, 0, 31185, 0, -31789, 0, -30073, 0, -30030, 0, -29208, 0, -28594, 0, -27829, 0, -26554, 0, 24275, 0, 27112, 0, -31233, 0, -28435, 0, -1787, 0, 20896, 0, 23448, 0, 23532, 0, 24931, 0, 26874, 0, 27454, 0, 28748, 0, 29743, 0, 29912, 0, 31649, 0, 32592, 0, -31803, 0, -30272, 0, -29525, 0, -27172, 0, -26328, 0, 21038, 0, 24669, 0, 25324, 0, -28670, 0, 20362, 0, 20809, 0, 21281, 0, 22745, 0, 24291, 0, 26336, 0, 27960, 0, 28826, 0, 29378, 0, 29654, 0, 31568, 0, -32527, 0, -27557, 0, 21350, 0, 25499, 0, 32619, 0, 20054, 0, 20608, 0, 22602, 0, 22750, 0, 24618, 0, 24871, 0, 25296, 0, 27088, 0, -25791, 0, 23439, 0, 32024, 0, -32591, 0, -28833, 0, 20132, 0, 20689, 0, 21676, 0, 21932, 0, 23308, 0, 23968, 0, 24039, 0, 25898, 0, 25934, 0, 26657, 0, 27211, 0, 29409, 0, 30350, 0, 30703, 0, 32094, 0, 32761, 0, -32352, 0, -31410, 0, -31009, 0, -28925, 0, -28850, 0, -28470, 0, -26365, 0, -26027, 0, -25685, 0, 19992, 0, 20037, 0, 20061, 0, 20167, 0, 20465, 0, 20855, 0, 21246, 0, 21312, 0, 21475, 0, 21477, 0, 21646, 0, 22036, 0, 22389, 0, 22434, 0, 23495, 0, 23943, 0, 24272, 0, 25084, 0, 25304, 0, 25937, 0, 26552, 0, 26601, 0, 27083, 0, 27472, 0, 27590, 0, 27628, 0, 27714, 0, 28317, 0, 28792, 0, 29399, 0, 29590, 0, 29699, 0, 30655, 0, 30697, 0, 31350, 0, 32127, 0, -32759, 0, -32260, 0, -32251, 0, -32246, 0, -32033, 0, -30622, 0, -29901, 0, -29444, 0, -28992, 0, -28655, 0, -28495, 0, -28060, 0, -27978, 0, -26158, 0, -26043, 0, -25367, 0, -25129, 0, -24676, 0, 22283, 0, 23616, 0, -31798, 0, -26720, 0, -26709, 0, -24908, 0, 21531, 0, 31384, 0, 32676, 0, -30503, 0, -28979, 0, -28447, 0, 22528, 0, 23624, 0, 25496, 0, 31391, 0, 23470, 0, 24339, 0, 31353, 0, 31406, 0, -32114, 0, -29012, 0, 20518, 0, 21048, 0, 21240, 0, 21367, 0, 22280, 0, 25331, 0, 25458, 0, 27402, 0, 28099, 0, 30519, 0, 21413, 0, 29527, 0, -31384, 0, -29066, 0, -27179, 0, 26426, 0, 27331, 0, 28528, 0, -30099, 0, -28980, 0, -26293, 0, -1786, 0, 26231, 0, 27512, 0, -29516, 0, -25796, 0, -1785, 0, 21483, 0, 22317, 0, 22862, 0, 25542, 0, 27131, 0, 29674, 0, 30789, 0, 31418, 0, 31429, 0, 31998, 0, -31627, 0, -30321, 0, -29325, 0, -28619, 0, -27224, 0, 21243, 0, 22343, 0, 30023, 0, 31584, 0, -31796, 0, -28130, 0, -1784, 0, 27224, 0, 20811, 0, 21067, 0, 21127, 0, 25119, 0, 26840, 0, 26997, 0, -26983, 0, 20677, 0, 21156, 0, 21220, 0, 25027, 0, 26020, 0, 26681, 0, 27135, 0, 29822, 0, 31563, 0, -32071, 0, -31765, 0, -30286, 0, -29895, 0, -28719, 0, -26295, 0, -1783, 0, 20170, 0, 22935, 0, 25810, 0, 26129, 0, 27278, 0, 29748, 0, 31105, 0, 31165, 0, -32087, 0, -30594, 0, -30593, 0, -30369, 0, -1782, 0, -27866, 0, 20235, 0, 21450, 0, 24613, 0, 25201, 0, 27762, 0, 32026, 0, 32102, 0, 20120, 0, 20834, 0, 30684, 0, -32593, 0, 20225, 0, 20238, 0, 20854, 0, 20864, 0, 21980, 0, 22120, 0, 22331, 0, 22522, 0, 22524, 0, 22804, 0, 22855, 0, 22931, 0, 23492, 0, 23696, 0, 23822, 0, 24049, 0, 24190, 0, 24524, 0, 25216, 0, 26071, 0, 26083, 0, 26398, 0, 26399, 0, 26462, 0, 26827, 0, 26820, 0, 27231, 0, 27450, 0, 27683, 0, 27773, 0, 27778, 0, 28103, 0, 29592, 0, 29734, 0, 29738, 0, 29826, 0, 29859, 0, 30072, 0, 30079, 0, 30849, 0, 30959, 0, 31041, 0, 31047, 0, 31048, 0, 31098, 0, 31637, 0, 32e3, 0, 32186, 0, 32648, 0, -32762, 0, -32723, 0, -32628, 0, -30184, 0, -29873, 0, -29624, 0, -29321, 0, -27871, 0, -27868, 0, -26398, 0, -26287, 0, -26098, 0, -26097, 0, -26011, 0, -24942, 0, 32202, 0, 20342, 0, 21513, 0, 25326, 0, 26708, 0, -28207, 0, 21931, 0, 20794, 0, -1781, 0, -1780, 0, 23068, 0, 25062, 0, -1779, 0, 25295, 0, 25343, 0, -1778, 0, -1777, 0, -1776, 0, -1775, 0, -1774, 0, -1773, 0, -28509, 0, -1772, 0, -1771, 0, -1770, 0, -1769, 0, -1768, 0, -29954, 0, -1767, 0, -1766, 0, -1765, 0, -1764, 0, 26262, 0, -1763, 0, 29014, 0, -1762, 0, -1761, 0, -26909, 0, -1760, 0, 25423, 0, 25466, 0, 21335, 0, -1759, 0, 26511, 0, 26976, 0, 28275, 0, -1758, 0, 30007, 0, -1757, 0, -1756, 0, -1755, 0, 32013, 0, -1754, 0, -1753, 0, -30606, 0, 22218, 0, 23064, 0, -1752, 0, -1751, 0, -1750, 0, -1749, 0, -1748, 0, 20035, 0, -1747, 0, 20839, 0, 22856, 0, 26608, 0, -32752, 0, -1746, 0, 22899, 0, 24180, 0, 25754, 0, 31178, 0, 24565, 0, 24684, 0, 25288, 0, 25467, 0, 23527, 0, 23511, 0, 21162, 0, -1745, 0, 22900, 0, 24361, 0, 24594, 0, -1744, 0, -1743, 0, -1742, 0, 29785, 0, -1741, 0, -1740, 0, -1739, 0, -1738, 0, -1737, 0, -1736, 0, -26159, 0, -1735, 0, -1734, 0, -1733, 0, -1732, 0, -1731, 0, -1730, 0, -1729, 0, -1728, 0, -1727, 0, -1726, 0, -1725, 0, 28611, 0, -1724, 0, -1723, 0, -32321, 0, -28750, 0, 24817, 0, -1722, 0, -1721, 0, -32410, 0, -1720, 0, -1719, 0, 23615, 0, -1718, 0, -1717, 0, -1716, 0, -1715, 0, -1714, 0, -1713, 0, -1712, 0, -1711, 0, 23273, 0, -30171, 0, 26491, 0, 32016, 0, -1710, 0, -1709, 0, -1708, 0, -1707, 0, -1706, 0, -1705, 0, -32515, 0, -1704, 0, -1703, 0, 23612, 0, 27877, 0, 21311, 0, 28346, 0, 22810, 0, -31946, 0, 20025, 0, 20150, 0, 20294, 0, 21934, 0, 22296, 0, 22727, 0, 24406, 0, 26039, 0, 26086, 0, 27264, 0, 27573, 0, 28237, 0, 30701, 0, 31471, 0, 31774, 0, 32222, 0, -31029, 0, -30574, 0, -28366, 0, -27813, 0, 25787, 0, 28606, 0, 29562, 0, 30136, 0, -28588, 0, 21846, 0, 22349, 0, 25018, 0, 25812, 0, 26311, 0, 28129, 0, 28251, 0, 28525, 0, 28601, 0, 30192, 0, -32701, 0, -32323, 0, -31423, 0, -30333, 0, -30009, 0, -29862, 0, -27873, 0, 27795, 0, 30035, 0, 31572, 0, -29169, 0, -28579, 0, 21776, 0, 22530, 0, 22616, 0, 24162, 0, 25095, 0, 25758, 0, 26848, 0, 30070, 0, 31958, 0, -30797, 0, -24856, 0, 20195, 0, 22408, 0, 22382, 0, 22823, 0, 23565, 0, 23729, 0, 24118, 0, 24453, 0, 25140, 0, 25825, 0, 29619, 0, -32262, 0, -30581, 0, -29512, 0, -26998, 0, -24869, 0, 23429, 0, 24503, 0, 24755, 0, 20498, 0, 20992, 0, 21040, 0, 22294, 0, 22581, 0, 22615, 0, 23566, 0, 23648, 0, 23798, 0, 23947, 0, 24230, 0, 24466, 0, 24764, 0, 25361, 0, 25481, 0, 25623, 0, 26691, 0, 26873, 0, 27330, 0, 28120, 0, 28193, 0, 28372, 0, 28644, 0, 29182, 0, 30428, 0, 30585, 0, 31153, 0, 31291, 0, -31740, 0, -30295, 0, -29459, 0, -29197, 0, -29112, 0, -28669, 0, -28652, 0, -28589, 0, -28419, 0, -27827, 0, -27018, 0, -26660, 0, 27602, 0, 28678, 0, 29272, 0, 29346, 0, 29544, 0, 30563, 0, 31167, 0, 31716, 0, 32411, 0, -29824, 0, 22697, 0, 24775, 0, 25958, 0, 26109, 0, 26302, 0, 27788, 0, 28958, 0, 29129, 0, -29606, 0, -26605, 0, 20077, 0, 31361, 0, 20189, 0, 20908, 0, 20941, 0, 21205, 0, 21516, 0, 24999, 0, 26481, 0, 26704, 0, 26847, 0, 27934, 0, 28540, 0, 30140, 0, 30643, 0, 31461, 0, -32524, 0, -31645, 0, -28027, 0, 20828, 0, 26007, 0, 26460, 0, 26515, 0, 30168, 0, 31431, 0, -31885, 0, -1702, 0, -29626, 0, -28649, 0, -26579, 0, 23663, 0, -32320, 0, -32102, 0, -28607, 0, -28561, 0, -28147, 0, 24471, 0, 23965, 0, 27225, 0, 29128, 0, 30331, 0, 31561, 0, -31260, 0, -29948, 0, -28377, 0, -26064, 0, 21895, 0, 25078, 0, -1701, 0, 30313, 0, 32645, 0, -31169, 0, -30790, 0, -30472, 0, -28529, 0, -1700, 0, 27931, 0, 28889, 0, 29662, 0, 32097, 0, -31683, 0, -1699, 0, -28310, 0, -26127, 0, -1698, 0, 20098, 0, 21365, 0, 27396, 0, 27410, 0, 28734, 0, 29211, 0, -31187, 0, -25058, 0, 21068, 0, -28765, 0, 23888, 0, 25829, 0, 25900, 0, 27414, 0, 28651, 0, 31811, 0, 32412, 0, -31283, 0, -30364, 0, -30275, 0, 25289, 0, -32296, 0, -30689, 0, 24266, 0, 26391, 0, 28010, 0, 29436, 0, 29701, 0, 29807, 0, -30846, 0, -28450, 0, 20358, 0, 23821, 0, 24480, 0, -31734, 0, 20919, 0, 25504, 0, 30053, 0, 20142, 0, 20486, 0, 20841, 0, 20937, 0, 26753, 0, 27153, 0, 31918, 0, 31921, 0, 31975, 0, -32145, 0, -29998, 0, -28901, 0, -28209, 0, 20406, 0, 20791, 0, 21237, 0, 21570, 0, 24300, 0, 24942, 0, 25150, 0, 26053, 0, 27354, 0, 28670, 0, 31018, 0, -31268, 0, -30685, 0, -27219, 0, -26014, 0, -26006, 0, -24937, 0, -24882, 0, 21147, 0, 26310, 0, 27511, 0, 28701, 0, 31019, 0, -28830, 0, -26814, 0, 24976, 0, 25088, 0, 25891, 0, 28451, 0, 29001, 0, 29833, 0, 32244, 0, -32657, 0, -31506, 0, -28890, 0, -28637, 0, -27830, 0, 20925, 0, 21015, 0, 21155, 0, 27916, 0, 28872, 0, -30526, 0, 24265, 0, 25986, 0, 27566, 0, 28610, 0, 31806, 0, 29557, 0, 20196, 0, 20278, 0, 22265, 0, -1697, 0, 23738, 0, 23994, 0, 24604, 0, 29618, 0, 31533, 0, 32666, 0, 32718, 0, -32698, 0, -28642, 0, -28108, 0, -26890, 0, -26808, 0, -26600, 0, -24735, 0, 20363, 0, 28583, 0, 31150, 0, -28236, 0, -26953, 0, 21214, 0, -1696, 0, 25736, 0, 25796, 0, 27347, 0, 28510, 0, 28696, 0, 29200, 0, 30439, 0, -32767, 0, -31226, 0, -31140, 0, -29201, 0, -28923, 0, -26830, 0, -25745, 0, -25094, 0, -24971, 0, 30860, 0, 31103, 0, 32160, 0, -31799, 0, -27900, 0, -24961, 0, -24941, 0, -29994, 0, 22751, 0, 24324, 0, 26407, 0, 28711, 0, 29903, 0, 31840, 0, -32642, 0, 20769, 0, 28712, 0, 29282, 0, 30922, 0, -29502, 0, -29478, 0, -29452, 0, -26889, 0, 20102, 0, 20698, 0, 23534, 0, 24278, 0, 26009, 0, 29134, 0, 30274, 0, 30637, 0, -32694, 0, -31492, 0, -28548, 0, -25817, 0, -24691, 0, 22744, 0, 23105, 0, 23650, 0, 27155, 0, 28122, 0, 28431, 0, 30267, 0, 32047, 0, 32311, 0, -31458, 0, -30408, 0, -27676, 0, -27061, 0, 21129, 0, 26066, 0, 26611, 0, 27060, 0, 27969, 0, 28316, 0, 28687, 0, 29705, 0, 29792, 0, 30041, 0, 30244, 0, 30827, 0, -29908, 0, -26530, 0, 20845, 0, 25134, 0, -27016, 0, 20374, 0, 20523, 0, 23833, 0, 28138, 0, 32184, 0, -28886, 0, 24459, 0, 24900, 0, 26647, 0, -1695, 0, -27002, 0, 21202, 0, -32629, 0, 20956, 0, 20940, 0, 26974, 0, 31260, 0, 32190, 0, -31759, 0, -27019, 0, 20442, 0, 21033, 0, 21400, 0, 21519, 0, 21774, 0, 23653, 0, 24743, 0, 26446, 0, 26792, 0, 28012, 0, 29313, 0, 29432, 0, 29702, 0, 29827, 0, -1694, 0, 30178, 0, 31852, 0, 32633, 0, 32696, 0, -31863, 0, -30513, 0, -30495, 0, -28212, 0, -28208, 0, -26910, 0, -25655, 0, 21533, 0, 28542, 0, 29136, 0, 29848, 0, -31238, 0, -29014, 0, -26973, 0, -25513, 0, -24929, 0, 26519, 0, 28107, 0, 29747, 0, -32280, 0, -26858, 0, 30764, 0, 31435, 0, 31520, 0, 31890, 0, 25705, 0, 29802, 0, 30194, 0, 30908, 0, 30952, 0, -26196, 0, -25772, 0, -24901, 0, 23518, 0, 24149, 0, 28448, 0, -32356, 0, -31829, 0, -28536, 0, 19975, 0, 21325, 0, 23081, 0, 24018, 0, 24398, 0, 24930, 0, 25405, 0, 26217, 0, 26364, 0, 28415, 0, 28459, 0, 28771, 0, 30622, 0, -31700, 0, -31469, 0, -30661, 0, -28909, 0, -26299, 0, -25541, 0, 21788, 0, 25273, 0, 26411, 0, 27819, 0, -31991, 0, -30358, 0, -26758, 0, 20129, 0, 22916, 0, 24536, 0, 24537, 0, 26395, 0, 32178, 0, 32596, 0, -32110, 0, -31957, 0, -31811, 0, -28898, 0, -28519, 0, 22475, 0, 22969, 0, 23186, 0, 23504, 0, 26151, 0, 26522, 0, 26757, 0, 27599, 0, 29028, 0, 32629, 0, -29513, 0, -29469, 0, -28543, 0, -25787, 0, -32504, 0, -29558, 0, -27060, 0, -26048, 0, -24923, 0, 23391, 0, 27667, 0, 29467, 0, 30450, 0, 30431, 0, -31732, 0, 20906, 0, -30317, 0, 20813, 0, 20885, 0, 21193, 0, 26825, 0, 27796, 0, 30468, 0, 30496, 0, 32191, 0, 32236, 0, -26782, 0, -24907, 0, 28357, 0, -31471, 0, 20901, 0, 21517, 0, 21629, 0, 26126, 0, 26269, 0, 26919, 0, 28319, 0, 30399, 0, 30609, 0, -31977, 0, -31550, 0, -30817, 0, -28311, 0, -28008, 0, -25356, 0, -30590, 0, 20398, 0, 20882, 0, 21215, 0, 22982, 0, 24125, 0, 24917, 0, 25720, 0, 25721, 0, 26286, 0, 26576, 0, 27169, 0, 27597, 0, 27611, 0, 29279, 0, 29281, 0, 29761, 0, 30520, 0, 30683, 0, -32745, 0, -32068, 0, -31995, 0, -29952, 0, -29912, 0, -29556, 0, 26408, 0, 27792, 0, 29287, 0, 30446, 0, 30566, 0, 31302, 0, -25175, 0, 27519, 0, 27794, 0, 22818, 0, 26406, 0, -31591, 0, 21359, 0, 22675, 0, 22937, 0, 24287, 0, 25551, 0, 26164, 0, 26483, 0, 28218, 0, 29483, 0, 31447, 0, -32041, 0, -27864, 0, 21209, 0, 24043, 0, 25006, 0, 25035, 0, 25098, 0, 25287, 0, 25771, 0, 26080, 0, 26969, 0, 27494, 0, 27595, 0, 28961, 0, 29687, 0, 30045, 0, 32326, 0, -32226, 0, -31998, 0, -31382, 0, -30045, 0, -29505, 0, -26841, 0, -25247, 0, 22696, 0, -24872, 0, 20497, 0, 21006, 0, 21563, 0, 21839, 0, 25991, 0, 27766, 0, 32010, 0, 32011, 0, -32674, 0, -31094, 0, -27264, 0, -26897, 0, 21247, 0, 27797, 0, 29289, 0, 21619, 0, 23194, 0, 23614, 0, 23883, 0, 24396, 0, 24494, 0, 26410, 0, 26806, 0, 26979, 0, 28220, 0, 28228, 0, 30473, 0, 31859, 0, 32654, 0, -31353, 0, -29938, 0, -28681, 0, -26783, 0, -24844, 0, 23735, 0, 24758, 0, 24845, 0, 25003, 0, 25935, 0, 26107, 0, 26108, 0, 27665, 0, 27887, 0, 29599, 0, 29641, 0, 32225, 0, -27244, 0, 23494, 0, -30948, 0, -29936, 0, 21085, 0, 21338, 0, 25293, 0, 25615, 0, 25778, 0, 26420, 0, 27192, 0, 27850, 0, 29632, 0, 29854, 0, 31636, 0, 31893, 0, 32283, 0, -32374, 0, -32202, 0, -31356, 0, -28693, 0, -26887, 0, -26175, 0, 20276, 0, 21322, 0, 21453, 0, 21467, 0, 25292, 0, 25644, 0, 25856, 0, 26001, 0, 27075, 0, 27886, 0, 28504, 0, 29677, 0, 30036, 0, 30242, 0, 30436, 0, 30460, 0, 30928, 0, 30971, 0, 31020, 0, 32070, 0, -32212, 0, -30752, 0, -28716, 0, -26606, 0, -26385, 0, 21187, 0, 25300, 0, 25765, 0, 28196, 0, 28497, 0, 30332, 0, -29237, 0, -28239, 0, -28062, 0, -25874, 0, -25789, 0, 20515, 0, 20621, 0, 22346, 0, 22952, 0, 23592, 0, 24135, 0, 24439, 0, 25151, 0, 25918, 0, 26041, 0, 26049, 0, 26121, 0, 26507, 0, 27036, 0, 28354, 0, 30917, 0, 32033, 0, -32598, 0, -32384, 0, -32213, 0, -32077, 0, -31583, 0, -31092, 0, -30166, 0, -29929, 0, -28506, 0, -27086, 0, -24688, 0, 20493, 0, 20467, 0, -1693, 0, 22521, 0, 24472, 0, 25308, 0, 25490, 0, 26479, 0, 28227, 0, 28953, 0, 30403, 0, -32564, 0, -32550, 0, -30476, 0, -30475, 0, -30439, 0, -29472, 0, -28887, 0, -28339, 0, -27030, 0, 20271, 0, 20336, 0, 24091, 0, 26575, 0, 26658, 0, 30333, 0, 30334, 0, -25788, 0, 24161, 0, 27146, 0, 29033, 0, 29140, 0, 30058, 0, -1692, 0, 32321, 0, -31421, 0, -31255, 0, -26404, 0, 20240, 0, 31567, 0, 32624, 0, -27227, 0, 20961, 0, 24070, 0, 26805, 0, 27710, 0, 27726, 0, 27867, 0, 29359, 0, 31684, 0, -31997, 0, 27861, 0, 29754, 0, 20731, 0, 21128, 0, 22721, 0, 25816, 0, 27287, 0, 29863, 0, 30294, 0, 30887, 0, -31209, 0, -27166, 0, -26823, 0, -1691, 0, 21342, 0, 24321, 0, -29814, 0, -28760, 0, -28753, 0, -28534, 0, 21029, 0, 30629, 0, -25527, 0, -24824, 0, 19993, 0, 20482, 0, 20853, 0, 23643, 0, 24183, 0, 26142, 0, 26170, 0, 26564, 0, 26821, 0, 28851, 0, 29953, 0, 30149, 0, 31177, 0, 31453, 0, -28889, 0, -26336, 0, -26104, 0, 20445, 0, 22561, 0, 22577, 0, 23542, 0, 26222, 0, 27493, 0, 27921, 0, 28282, 0, 28541, 0, 29668, 0, 29995, 0, -31767, 0, -30500, 0, -30445, 0, -29860, 0, -28908, 0, 20239, 0, 20693, 0, 21264, 0, 21340, 0, 23443, 0, 24489, 0, 26381, 0, 31119, 0, -32391, 0, -31953, 0, -31468, 0, -30457, 0, -30330, 0, -28871, 0, -28869, 0, -26203, 0, -25582, 0, 26412, 0, 20086, 0, 20472, 0, 22857, 0, 23553, 0, 23791, 0, 23792, 0, 25447, 0, 26834, 0, 28925, 0, 29090, 0, 29739, 0, 32299, 0, -31508, 0, -30974, 0, -28638, 0, -27950, 0, -25357, 0, 19981, 0, 20184, 0, 20463, 0, 20613, 0, 21078, 0, 21103, 0, 21542, 0, 21648, 0, 22496, 0, 22827, 0, 23142, 0, 23386, 0, 23413, 0, 23500, 0, 24220, 0, -1690, 0, 25206, 0, 25975, 0, 26023, 0, 28014, 0, 28325, 0, 29238, 0, 31526, 0, 31807, 0, 32566, 0, -32432, 0, -32431, 0, -32358, 0, -32192, 0, -32103, 0, -31831, 0, -30205, 0, -29536, 0, -29466, 0, -29445, 0, -29324, 0, -29254, 0, -28440, 0, -28196, 0, -27108, 0, -27068, 0, -26151, 0, -25369, 0, 21271, 0, 20998, 0, 21545, 0, 22132, 0, 22707, 0, 22868, 0, 22894, 0, 24575, 0, 24996, 0, 25198, 0, 26128, 0, 27774, 0, 28954, 0, 30406, 0, 31881, 0, 31966, 0, 32027, 0, -32084, 0, -29503, 0, -26896, 0, -1689, 0, 20315, 0, 24343, 0, 24447, 0, 25282, 0, 23849, 0, 26379, 0, 26842, 0, 30844, 0, 32323, 0, -25236, 0, 19989, 0, 20633, 0, 21269, 0, 21290, 0, 21329, 0, 22915, 0, 23138, 0, 24199, 0, 24754, 0, 24970, 0, 25161, 0, 25209, 0, 26e3, 0, 26503, 0, 27047, 0, 27604, 0, 27606, 0, 27607, 0, 27608, 0, 27832, 0, -1688, 0, 29749, 0, 30202, 0, 30738, 0, 30865, 0, 31189, 0, 31192, 0, 31875, 0, 32203, 0, 32737, 0, -32603, 0, -32450, 0, -32318, 0, -31758, 0, -30950, 0, -30488, 0, -30023, 0, -29844, 0, -29509, 0, -28391, 0, -26786, 0, -26405, 0, -24773, 0, 22188, 0, 23338, 0, 24428, 0, 25996, 0, 27315, 0, 27567, 0, 27996, 0, 28657, 0, 28693, 0, 29277, 0, 29613, 0, -29529, 0, -29485, 0, -26565, 0, 24977, 0, 27703, 0, -32680, 0, -26111, 0, 20045, 0, 20107, 0, 20123, 0, 20181, 0, 20282, 0, 20284, 0, 20351, 0, 20447, 0, 20735, 0, 21490, 0, 21496, 0, 21766, 0, 21987, 0, 22235, 0, 22763, 0, 22882, 0, 23057, 0, 23531, 0, 23546, 0, 23556, 0, 24051, 0, 24107, 0, 24473, 0, 24605, 0, 25448, 0, 26012, 0, 26031, 0, 26614, 0, 26619, 0, 26797, 0, 27515, 0, 27801, 0, 27863, 0, 28195, 0, 28681, 0, 29509, 0, 30722, 0, 31038, 0, 31040, 0, 31072, 0, 31169, 0, 31721, 0, 32023, 0, 32114, 0, -32634, 0, -32243, 0, -31858, 0, -31535, 0, -31033, 0, -30497, 0, -30128, 0, -30114, 0, -29923, 0, -29476, 0, -29338, 0, -28755, 0, -28502, 0, -26372, 0, -26145, 0, -24931, 0, 21066, 0, -1687, 0, 26388, 0, -1686, 0, 20632, 0, 21034, 0, 23665, 0, 25955, 0, 27733, 0, 29642, 0, 29987, 0, 30109, 0, 31639, 0, -31588, 0, -28296, 0, -26832, 0, 20087, 0, 25746, 0, 27578, 0, 29022, 0, -31319, 0, 19977, 0, -1685, 0, 26441, 0, 26862, 0, 28183, 0, -32097, 0, -31464, 0, -30613, 0, 25591, 0, 28545, 0, -28142, 0, -26449, 0, 19978, 0, 20663, 0, 20687, 0, 20767, 0, 21830, 0, 21930, 0, 22039, 0, 23360, 0, 23577, 0, 23776, 0, 24120, 0, 24202, 0, 24224, 0, 24258, 0, 24819, 0, 26705, 0, 27233, 0, 28248, 0, 29245, 0, 29248, 0, 29376, 0, 30456, 0, 31077, 0, 31665, 0, 32724, 0, -30477, 0, -30220, 0, -30093, 0, -29599, 0, -29474, 0, -26852, 0, 22622, 0, 29885, 0, -29443, 0, 21959, 0, -1684, 0, 31329, 0, 32034, 0, -32142, 0, 29298, 0, 29983, 0, 29989, 0, -1683, 0, 31513, 0, 22661, 0, 22779, 0, 23996, 0, 24207, 0, 24246, 0, 24464, 0, 24661, 0, 25234, 0, 25471, 0, 25933, 0, 26257, 0, 26329, 0, 26360, 0, 26646, 0, 26866, 0, 29312, 0, 29790, 0, 31598, 0, 32110, 0, 32214, 0, 32626, 0, -32539, 0, -32238, 0, -31313, 0, -30337, 0, -30061, 0, -28643, 0, -27932, 0, -24883, 0, -24800, 0, 22805, 0, 22893, 0, 24109, 0, 24796, 0, 26132, 0, 26227, 0, 26512, 0, 27728, 0, 28101, 0, 28511, 0, 30707, 0, 30889, 0, -31546, 0, -28213, 0, -27861, 0, 20185, 0, 20682, 0, 20808, 0, 21892, 0, 23307, 0, 23459, 0, 25159, 0, 25982, 0, 26059, 0, 28210, 0, 29053, 0, 29697, 0, 29764, 0, 29831, 0, 29887, 0, 30316, 0, 31146, 0, 32218, 0, 32341, 0, 32680, 0, -32390, 0, -32333, 0, -32199, 0, -31206, 0, -30740, 0, -30091, 0, -29213, 0, -28552, 0, -28015, 0, -27611, 0, -26291, 0, -25682, 0, 21352, 0, 23633, 0, 26964, 0, 27844, 0, 27945, 0, 28203, 0, -32244, 0, -31333, 0, -30405, 0, -30163, 0, -30038, 0, -26902, 0, -24729, 0, 21089, 0, 26297, 0, 27570, 0, 32406, 0, -30722, 0, -29427, 0, -27261, 0, -27043, 0, 25885, 0, 28041, 0, 29166, 0, -1682, 0, 22478, 0, 22995, 0, 23468, 0, 24615, 0, 24826, 0, 25104, 0, 26143, 0, 26207, 0, 29481, 0, 29689, 0, 30427, 0, 30465, 0, 31596, 0, -32682, 0, -32654, 0, -32411, 0, -30048, 0, -28270, 0, 19990, 0, 21218, 0, 27506, 0, 27927, 0, 31237, 0, 31545, 0, 32048, 0, -1681, 0, -29520, 0, 21484, 0, 22063, 0, 22609, 0, 23477, 0, 23567, 0, 23569, 0, 24034, 0, 25152, 0, 25475, 0, 25620, 0, 26157, 0, 26803, 0, 27836, 0, 28040, 0, 28335, 0, 28703, 0, 28836, 0, 29138, 0, 29990, 0, 30095, 0, 30094, 0, 30233, 0, 31505, 0, 31712, 0, 31787, 0, 32032, 0, 32057, 0, -31444, 0, -31379, 0, -31225, 0, -30156, 0, -28659, 0, -28575, 0, -28491, 0, -27977, 0, -26634, 0, -26057, 0, 20439, 0, 23660, 0, 26463, 0, 28049, 0, 31903, 0, 32396, 0, -29930, 0, -29418, 0, -28641, 0, 23403, 0, 24061, 0, 25613, 0, -31552, 0, -28580, 0, -26399, 0, 29575, 0, 23435, 0, 24730, 0, 26494, 0, 28126, 0, -30177, 0, -30042, 0, -28671, 0, -26612, 0, 21047, 0, -1680, 0, 28753, 0, 30862, 0, -27754, 0, -30608, 0, -28201, 0, 20462, 0, 21463, 0, 22013, 0, 22234, 0, 22402, 0, 22781, 0, 23234, 0, 23432, 0, 23723, 0, 23744, 0, 24101, 0, 24833, 0, 25101, 0, 25163, 0, 25480, 0, 25628, 0, 25910, 0, 25976, 0, 27193, 0, 27530, 0, 27700, 0, 27929, 0, 28465, 0, 29159, 0, 29417, 0, 29560, 0, 29703, 0, 29874, 0, 30246, 0, 30561, 0, 31168, 0, 31319, 0, 31466, 0, 31929, 0, 32143, 0, 32172, 0, 32353, 0, 32670, 0, -32471, 0, -31951, 0, -31600, 0, -31526, 0, -31254, 0, -30570, 0, -30032, 0, -29808, 0, -28872, 0, -28606, 0, -28541, 0, -28308, 0, -28010, 0, -27975, 0, -26997, 0, -26969, 0, -26968, 0, -26922, 0, -26880, 0, -26616, 0, -26218, 0, -25901, 0, -25830, 0, 21460, 0, 22654, 0, 22809, 0, 23408, 0, 23487, 0, 28113, 0, 28506, 0, 29087, 0, 29729, 0, 29881, 0, -32635, 0, -31747, 0, 24033, 0, 24455, 0, 24490, 0, 24642, 0, 26092, 0, 26642, 0, 26991, 0, 27219, 0, 27529, 0, 27957, 0, 28147, 0, 29667, 0, 30462, 0, 30636, 0, 31565, 0, 32020, 0, -32477, 0, -32228, 0, -31936, 0, -31500, 0, -31389, 0, -30110, 0, -30012, 0, -28281, 0, -27874, 0, -26618, 0, -26188, 0, 25100, 0, -30637, 0, -28688, 0, -28059, 0, 23815, 0, 23847, 0, 23913, 0, 29791, 0, -32355, 0, -30872, 0, 28629, 0, 25342, 0, 32722, 0, -30410, 0, -30350, 0, 19998, 0, 20056, 0, 20711, 0, 21213, 0, 21319, 0, 25215, 0, 26119, 0, 32361, 0, -30715, 0, -27042, 0, 20365, 0, 21273, 0, 22070, 0, 22987, 0, 23204, 0, 23608, 0, 23630, 0, 23629, 0, 24066, 0, 24337, 0, 24643, 0, 26045, 0, 26159, 0, 26178, 0, 26558, 0, 26612, 0, 29468, 0, 30690, 0, 31034, 0, 32709, 0, -31596, 0, -31539, 0, -30314, 0, -30106, 0, -30103, 0, -29983, 0, -29611, 0, -29574, 0, 22516, 0, 23508, 0, 24335, 0, 24687, 0, 25325, 0, 26893, 0, 27542, 0, 28252, 0, 29060, 0, 31698, 0, -30891, 0, -29864, 0, -28930, 0, -26401, 0, -26370, 0, 20280, 0, 20353, 0, 20449, 0, 21627, 0, 23072, 0, 23480, 0, 24892, 0, 26032, 0, 26216, 0, 29180, 0, 30003, 0, 31070, 0, 32051, 0, -32434, 0, -32285, 0, -31848, 0, -31318, 0, -31282, 0, -30973, 0, -30198, 0, -29013, 0, -28773, 0, -1679, 0, -28731, 0, 22833, 0, 23460, 0, 23526, 0, 24713, 0, 23529, 0, 23563, 0, 24515, 0, 27777, 0, -1678, 0, 28145, 0, 28683, 0, 29978, 0, -32081, 0, -29962, 0, 20160, 0, 21313, 0, -1677, 0, -26919, 0, 27663, 0, 20126, 0, 20420, 0, 20818, 0, 21854, 0, 23077, 0, 23784, 0, 25105, 0, 29273, 0, -32067, 0, -31830, 0, -30978, 0, -30631, 0, -30179, 0, -27073, 0, -26939, 0, -26349, 0, -25335, 0, -25251, 0, 22538, 0, 23731, 0, 23997, 0, 24132, 0, 24801, 0, 24853, 0, 25569, 0, 27138, 0, 28197, 0, -28414, 0, -27820, 0, -26546, 0, -25584, 0, -24713, 0, 23433, 0, 23736, 0, 25353, 0, 26191, 0, 26696, 0, 30524, 0, -26943, 0, -26739, 0, -26540, 0, -25697, 0, 26017, 0, -29951, 0, -28981, 0, -27204, 0, 21813, 0, 23721, 0, 24022, 0, 24245, 0, 26263, 0, 30284, 0, -31756, 0, -27193, 0, 22739, 0, 25276, 0, 29390, 0, -25304, 0, 20208, 0, 22830, 0, 24591, 0, 26171, 0, 27523, 0, 31207, 0, -25306, 0, 21395, 0, 21696, 0, 22467, 0, 23830, 0, 24859, 0, 26326, 0, 28079, 0, 30861, 0, -32130, 0, -26984, 0, -26812, 0, 21380, 0, 25212, 0, 25494, 0, 28082, 0, 32266, 0, -32437, 0, -26547, 0, 27387, 0, 32588, 0, -25169, 0, -25062, 0, 20063, 0, 20539, 0, 20918, 0, 22812, 0, 24825, 0, 25590, 0, 26928, 0, 29242, 0, -32714, 0, -1676, 0, -28210, 0, 24369, 0, -1675, 0, -1674, 0, 32004, 0, -32027, 0, -31633, 0, -31557, 0, -31259, 0, -29043, 0, -1673, 0, 20335, 0, -1672, 0, -1671, 0, 22756, 0, 23363, 0, 24665, 0, 25562, 0, 25880, 0, 25965, 0, 26264, 0, -1670, 0, 26954, 0, 27171, 0, 27915, 0, 28673, 0, 29036, 0, 30162, 0, 30221, 0, 31155, 0, 31344, 0, -1669, 0, 32650, 0, -1668, 0, -30396, 0, -1667, 0, -29805, 0, -28224, 0, -27011, 0, -1666, 0, -26358, 0, 22276, 0, 24481, 0, 26044, 0, 28417, 0, 30208, 0, 31142, 0, -30050, 0, -26195, 0, -25766, 0, -24724, 0, 20740, 0, 25014, 0, 25233, 0, 27277, 0, -32314, 0, 20547, 0, 22576, 0, 24422, 0, 28937, 0, -30208, 0, -29958, 0, 23420, 0, -31210, 0, 20474, 0, 20796, 0, 22196, 0, 22852, 0, 25513, 0, 28153, 0, 23978, 0, 26989, 0, 20870, 0, 20104, 0, 20313, 0, -1665, 0, -1664, 0, -1663, 0, 22914, 0, -1662, 0, -1661, 0, 27487, 0, 27741, 0, -1660, 0, 29877, 0, 30998, 0, -1659, 0, -32249, 0, -32187, 0, -31943, 0, -28865, 0, -28835, 0, -1658, 0, -26344, 0, -1657, 0, -1656, 0, -1655, 0, 20134, 0, -1654, 0, 22495, 0, 24441, 0, 26131, 0, -1653, 0, -1652, 0, 30123, 0, 32377, 0, -29841, 0, -1651, 0, -28666, 0, -26021, 0, 22181, 0, 22567, 0, 23032, 0, 23071, 0, 23476, 0, -1650, 0, 24310, 0, -1649, 0, -1648, 0, 25424, 0, 25403, 0, -1647, 0, 26941, 0, 27783, 0, 27839, 0, 28046, 0, 28051, 0, 28149, 0, 28436, 0, -1646, 0, 28895, 0, 28982, 0, 29017, 0, -1645, 0, 29123, 0, 29141, 0, -1644, 0, 30799, 0, 30831, 0, -1643, 0, 31605, 0, 32227, 0, -1642, 0, 32303, 0, -1641, 0, -30643, 0, -28961, 0, -1640, 0, -1639, 0, -1638, 0, -28069, 0, -1637, 0, -25354, 0, -1636, 0, -1635, 0, -1634, 0, 24709, 0, 28037, 0, -1633, 0, 29105, 0, -1632, 0, -1631, 0, -27215, 0, 21421, 0, -1630, 0, -1629, 0, -1628, 0, 26579, 0, -1627, 0, 28814, 0, 28976, 0, 29744, 0, -32138, 0, -32046, 0, -1626, 0, -27205, 0, -25883, 0, -24963, 0, 26308, 0, -1625, 0, 29121, 0, -31671, 0, -1624, 0, -1623, 0, 22603, 0, -1622, 0, -1621, 0, 23992, 0, 24433, 0, -1620, 0, 26144, 0, 26254, 0, 27001, 0, 27054, 0, 27704, 0, 27891, 0, 28214, 0, 28481, 0, 28634, 0, 28699, 0, 28719, 0, 29008, 0, 29151, 0, 29552, 0, -1619, 0, 29787, 0, -1618, 0, 29908, 0, 30408, 0, 31310, 0, 32403, 0, -1617, 0, -1616, 0, -32015, 0, -30112, 0, -28722, 0, -1615, 0, -27832, 0, -1614, 0, -26855, 0, -1613, 0, -1612, 0, 20034, 0, 20522, 0, -1611, 0, 21e3, 0, 21473, 0, 26355, 0, 27757, 0, 28618, 0, 29450, 0, 30591, 0, 31330, 0, -32082, 0, -31267, 0, -31230, 0, -1610, 0, -30508, 0, -30109, 0, -29827, 0, -29589, 0, -1609, 0, -27981, 0, -1608, 0, -26861, 0, -26608, 0, 20116, 0, 20237, 0, 20425, 0, 20658, 0, 21320, 0, 21566, 0, 21555, 0, 21978, 0, 22626, 0, 22714, 0, 22887, 0, 23067, 0, 23524, 0, 24735, 0, -1607, 0, 25034, 0, 25942, 0, 26111, 0, 26212, 0, 26791, 0, 27738, 0, 28595, 0, 28879, 0, 29100, 0, 29522, 0, 31613, 0, -30968, 0, -30044, 0, -25550, 0, -24825, 0, 23627, 0, 27779, 0, 29508, 0, 29577, 0, -28102, 0, 28331, 0, 29797, 0, 30239, 0, 31337, 0, 32277, 0, -31222, 0, 20800, 0, 22725, 0, 25793, 0, 29934, 0, 29973, 0, 30320, 0, 32705, 0, -28523, 0, -26931, 0, -26284, 0, 28198, 0, 29926, 0, 31401, 0, 31402, 0, -32283, 0, -31015, 0, -30856, 0, -30181, 0, 23113, 0, 23436, 0, 23451, 0, 26785, 0, 26880, 0, 28003, 0, 29609, 0, 29715, 0, 29740, 0, 30871, 0, 32233, 0, 32747, 0, -32488, 0, -32427, 0, -31842, 0, -29620, 0, -27090, 0, -26607, 0, 26352, 0, 24448, 0, 26106, 0, 26505, 0, 27754, 0, 29579, 0, 20525, 0, 23043, 0, 27498, 0, 30702, 0, 22806, 0, 23916, 0, 24013, 0, 29477, 0, 30031, 0, -1606, 0, -1605, 0, 20709, 0, 20985, 0, 22575, 0, 22829, 0, 22934, 0, 23002, 0, 23525, 0, -1604, 0, -1603, 0, 23970, 0, 25303, 0, 25622, 0, 25747, 0, 25854, 0, -1602, 0, 26332, 0, -1601, 0, 27208, 0, -1600, 0, 29183, 0, 29796, 0, -1599, 0, 31368, 0, 31407, 0, 32327, 0, 32350, 0, -32768, 0, -32400, 0, -1598, 0, -30737, 0, -30335, 0, -29920, 0, -28583, 0, -1597, 0, -28544, 0, -26286, 0, 24958, 0, 27442, 0, 28020, 0, 32287, 0, -30427, 0, -28751, 0, 20433, 0, 20653, 0, 20887, 0, 21191, 0, 22471, 0, 22665, 0, 23481, 0, 24248, 0, 24898, 0, 27029, 0, 28044, 0, 28263, 0, 28342, 0, 29076, 0, 29794, 0, 29992, 0, 29996, 0, -32653, 0, -31944, 0, -31543, 0, -29174, 0, -27756, 0, -27682, 0, -1596, 0, 20110, 0, 20305, 0, 20598, 0, 20778, 0, 21448, 0, 21451, 0, 21491, 0, 23431, 0, 23507, 0, 23588, 0, 24858, 0, 24962, 0, 26100, 0, 29275, 0, 29591, 0, 29760, 0, 30402, 0, 31056, 0, 31121, 0, 31161, 0, 32006, 0, 32701, 0, -32117, 0, -31275, 0, -31138, 0, -28734, 0, -28601, 0, -28427, 0, -28182, 0, -27003, 0, -26904, 0, -26903, 0, 21206, 0, 24423, 0, 26093, 0, 26161, 0, 26671, 0, 29020, 0, 31286, 0, -28479, 0, -26614, 0, 20113, 0, -1595, 0, 27218, 0, 27550, 0, 28560, 0, 29065, 0, -32744, 0, -32072, 0, -31405, 0, -28597, 0, -26987, 0, -26894, 0, -26629, 0, -31462, 0, -25807, 0, 20112, 0, 29066, 0, -26940, 0, 20803, 0, 21407, 0, 21729, 0, 22291, 0, 22290, 0, 22435, 0, 23195, 0, 23236, 0, 23491, 0, 24616, 0, 24895, 0, 25588, 0, 27781, 0, 27961, 0, 28274, 0, 28304, 0, 29232, 0, 29503, 0, 29783, 0, -32047, 0, -30591, 0, -28859, 0, -28576, 0, -1594, 0, -27038, 0, -26536, 0, -25317, 0, 26376, 0, -29302, 0, -28066, 0, 20301, 0, 20553, 0, 20702, 0, 21361, 0, 22285, 0, 22996, 0, 23041, 0, 23561, 0, 24944, 0, 26256, 0, 28205, 0, 29234, 0, 29771, 0, 32239, 0, -32573, 0, -31730, 0, -31642, 0, -31425, 0, -30881, 0, -30629, 0, -30440, 0, -29950, 0, -28587, 0, -26677, 0, -25777, 0, 20083, 0, 20369, 0, 20754, 0, 20842, 0, -1593, 0, 21807, 0, 21929, 0, 23418, 0, 23461, 0, 24188, 0, 24189, 0, 24254, 0, 24736, 0, 24799, 0, 24840, 0, 24841, 0, 25540, 0, 25912, 0, 26377, 0, -1592, 0, 26580, 0, 26586, 0, -1591, 0, 26977, 0, 26978, 0, 27833, 0, 27943, 0, -1590, 0, 28216, 0, -1589, 0, 28641, 0, 29494, 0, 29495, 0, -1588, 0, 29788, 0, 30001, 0, -1587, 0, 30290, 0, -1586, 0, -1585, 0, 32173, 0, -32258, 0, -31688, 0, -30507, 0, -30056, 0, -29989, 0, -29971, 0, -29136, 0, -29118, 0, -28598, 0, -28610, 0, -28550, 0, -28343, 0, -28215, 0, -27794, 0, -1584, 0, -1583, 0, 22537, 0, -1582, 0, 27603, 0, -32631, 0, -32590, 0, -1581, 0, -1580, 0, 20801, 0, 22891, 0, 23609, 0, -1579, 0, -1578, 0, 28516, 0, 29607, 0, -32540, 0, -29433, 0, -1577, 0, -28137, 0, -27249, 0, -1576, 0, -1575, 0, -1574, 0, -1573, 0, -32641, 0, 25102, 0, 28700, 0, 32104, 0, -30835, 0, -1572, 0, 22432, 0, 24681, 0, 24903, 0, 27575, 0, -30018, 0, -28032, 0, -26959, 0, 20057, 0, 21535, 0, 28139, 0, -31443, 0, -27024, 0, -26637, 0, -26386, 0, 25558, 0, 27875, 0, -28527, 0, 20957, 0, 25033, 0, -32326, 0, -25095, 0, 20381, 0, 20506, 0, 20736, 0, 23452, 0, 24847, 0, 25087, 0, 25836, 0, 26885, 0, 27589, 0, 30097, 0, 30691, 0, 32681, 0, -32156, 0, -31345, 0, -30725, 0, -30621, 0, -30020, 0, -29840, 0, -28245, 0, 20108, 0, 20197, 0, 20234, 0, -1571, 0, -1570, 0, 22839, 0, 23016, 0, -1569, 0, 24050, 0, 24347, 0, 24411, 0, 24609, 0, -1568, 0, -1567, 0, -1566, 0, -1565, 0, 29246, 0, 29669, 0, -1564, 0, 30064, 0, 30157, 0, -1563, 0, 31227, 0, -1562, 0, -32756, 0, -32717, 0, -32636, 0, -32031, 0, -31919, 0, -1561, 0, -1560, 0, -29507, 0, -29517, 0, -28537, 0, -1559, 0, -1558, 0, -26380, 0, -26356, 0, -1557, 0, -1556, 0, 28727, 0, 30410, 0, 32714, 0, 32716, 0, 32764, 0, -29926, 0, 20154, 0, 20161, 0, 20995, 0, 21360, 0, -1555, 0, 21693, 0, 22240, 0, 23035, 0, 23493, 0, 24341, 0, 24525, 0, 28270, 0, -1554, 0, -1553, 0, 32106, 0, -31947, 0, -1552, 0, -31085, 0, -30067, 0, -1551, 0, -26771, 0, -26761, 0, -1550, 0, -1549, 0, 19968, 0, 20314, 0, 20350, 0, 22777, 0, 26085, 0, 28322, 0, -28616, 0, -27728, 0, -26183, 0, 20219, 0, 22764, 0, 22922, 0, 23001, 0, 24641, 0, -1548, 0, -1547, 0, 31252, 0, -1546, 0, -31921, 0, -29501, 0, 20837, 0, 21316, 0, -1545, 0, -1544, 0, -1543, 0, 20173, 0, 21097, 0, 23381, 0, -32065, 0, 20180, 0, 21050, 0, 21672, 0, 22985, 0, 23039, 0, 23376, 0, 23383, 0, 23388, 0, 24675, 0, 24904, 0, 28363, 0, 28825, 0, 29038, 0, 29574, 0, 29943, 0, 30133, 0, 30913, 0, 32043, 0, -32763, 0, -32278, 0, -31960, 0, -31465, 0, -31287, 0, -29970, 0, -29497, 0, -26932, 0, 20316, 0, 21242, 0, 22204, 0, 26027, 0, 26152, 0, 28796, 0, 28856, 0, 29237, 0, 32189, 0, -32115, 0, -28340, 0, -26944, 0, -25230, 0, 23409, 0, 26855, 0, 27544, 0, 28538, 0, 30430, 0, 23697, 0, 26283, 0, 28507, 0, 31668, 0, 31786, 0, -30666, 0, -26916, 0, 19976, 0, 20183, 0, 21280, 0, 22580, 0, 22715, 0, 22767, 0, 22892, 0, 23559, 0, 24115, 0, 24196, 0, 24373, 0, 25484, 0, 26290, 0, 26454, 0, 27167, 0, 27299, 0, 27404, 0, 28479, 0, 29254, 0, -1542, 0, 29520, 0, 29835, 0, 31456, 0, 31911, 0, -32392, 0, -32289, 0, -32281, 0, -31862, 0, -31636, 0, -31453, 0, -31340, 0, -31281, 0, -30499, 0, -29421, 0, -28244, 0, -27273, 0, -26980, 0, 20877, 0, 21705, 0, 22312, 0, 23472, 0, 25165, 0, 26448, 0, 26685, 0, 26771, 0, 28221, 0, 28371, 0, 28797, 0, 32289, 0, -30527, 0, -29535, 0, -28919, 0, -24757, 0, -24754, 0, 29229, 0, 31631, 0, -30003, 0, -27878, 0, 20295, 0, 20302, 0, 20786, 0, 21632, 0, 22992, 0, 24213, 0, 25269, 0, 26485, 0, 26990, 0, 27159, 0, 27822, 0, 28186, 0, 29401, 0, 29482, 0, 30141, 0, 31672, 0, 32053, 0, -32025, 0, -31751, 0, -31657, 0, -31241, 0, -30117, 0, -29521, 0, -29049, 0, -28647, 0, -28488, 0, -26930, 0, -24737, 0, 21219, 0, 21514, 0, 23265, 0, 23490, 0, 25688, 0, 25973, 0, 28404, 0, 29380, 0, -1541, 0, 30340, 0, 31309, 0, 31515, 0, 31821, 0, 32318, 0, 32735, 0, -31877, 0, -29909, 0, -29494, 0, -29340, 0, -29215, 0, -29089, 0, -28694, 0, -28679, 0, -28567, 0, -27695, 0, 20291, 0, 20346, 0, 20659, 0, 20840, 0, 20856, 0, 21069, 0, 21098, 0, 22625, 0, 22652, 0, 22880, 0, 23560, 0, 23637, 0, 24283, 0, 24731, 0, 25136, 0, 26643, 0, 27583, 0, 27656, 0, 28593, 0, 29006, 0, 29728, 0, 3e4, 0, 30008, 0, 30033, 0, 30322, 0, 31564, 0, 31627, 0, 31661, 0, 31686, 0, 32399, 0, -30098, 0, -28866, 0, -28855, 0, -28097, 0, -28013, 0, -27870, 0, -27605, 0, -26885, 0, -26534, 0, -26517, 0, -26338, 0, 20999, 0, 25130, 0, 25240, 0, 27993, 0, 30308, 0, 31434, 0, 31680, 0, 32118, 0, 21344, 0, 23742, 0, 24215, 0, 28472, 0, 28857, 0, 31896, 0, -26863, 0, -25714, 0, -24866, 0, 25509, 0, 25722, 0, -30858, 0, 19969, 0, 20117, 0, 20141, 0, 20572, 0, 20597, 0, 21576, 0, 22979, 0, 23450, 0, 24128, 0, 24237, 0, 24311, 0, 24449, 0, 24773, 0, 25402, 0, 25919, 0, 25972, 0, 26060, 0, 26230, 0, 26232, 0, 26622, 0, 26984, 0, 27273, 0, 27491, 0, 27712, 0, 28096, 0, 28136, 0, 28191, 0, 28254, 0, 28702, 0, 28833, 0, 29582, 0, 29693, 0, 30010, 0, 30555, 0, 30855, 0, 31118, 0, 31243, 0, 31357, 0, 31934, 0, 32142, 0, -32185, 0, -30206, 0, -29974, 0, -29538, 0, -28371, 0, -28342, 0, -28200, 0, -28058, 0, -27956, 0, -27872, 0, -26874, 0, -26794, 0, -26788, 0, -26622, 0, -24818, 0, 21046, 0, 21137, 0, 21884, 0, 22564, 0, 24093, 0, 24351, 0, 24716, 0, 25552, 0, 26799, 0, 28639, 0, 31085, 0, 31532, 0, -32307, 0, -31302, 0, -30467, 0, -29960, 0, -29116, 0, -28275, 0, -27036, 0, -26981, 0, -26819, 0, -26548, 0, -24758, 0, 20430, 0, 20806, 0, 20939, 0, 21161, 0, 22066, 0, 24340, 0, 24427, 0, 25514, 0, 25805, 0, 26089, 0, 26177, 0, 26362, 0, 26361, 0, 26397, 0, 26781, 0, 26839, 0, 27133, 0, 28437, 0, 28526, 0, 29031, 0, 29157, 0, 29226, 0, 29866, 0, 30522, 0, 31062, 0, 31066, 0, 31199, 0, 31264, 0, 31381, 0, 31895, 0, 31967, 0, 32068, 0, 32368, 0, -32633, 0, -31237, 0, -31068, 0, -30124, 0, -30017, 0, -29287, 0, -29055, 0, -28640, 0, -28563, 0, -28189, 0, -27077, 0, -26923, 0, -25371, 0, 26063, 0, 31751, 0, -29261, 0, -27709, 0, 23384, 0, 23562, 0, 21330, 0, 25305, 0, 29469, 0, 20519, 0, 23447, 0, 24478, 0, 24752, 0, 24939, 0, 26837, 0, 28121, 0, 29742, 0, 31278, 0, 32066, 0, 32156, 0, 32305, 0, -32405, 0, -29142, 0, -29131, 0, -27778, 0, -27624, 0, 20304, 0, 22352, 0, 24038, 0, 24231, 0, 25387, 0, 32618, 0, 20027, 0, 20303, 0, 20367, 0, 20570, 0, 23005, 0, -32572, 0, 21610, 0, 21608, 0, 22014, 0, 22863, 0, 23449, 0, 24030, 0, 24282, 0, 26205, 0, 26417, 0, 26609, 0, 26666, 0, 27880, 0, 27954, 0, 28234, 0, 28557, 0, 28855, 0, 29664, 0, 30087, 0, 31820, 0, 32002, 0, 32044, 0, 32162, 0, -32225, 0, -31013, 0, -30149, 0, -30075, 0, -29328, 0, -29046, 0, -28877, 0, -28623, 0, -28338, 0, -28334, 0, -27580, 0, -26160, 0, 31481, 0, 31909, 0, 20426, 0, 20737, 0, 20934, 0, 22472, 0, 23535, 0, 23803, 0, 26201, 0, 27197, 0, 27994, 0, 28310, 0, 28652, 0, 28940, 0, 30063, 0, 31459, 0, -30686, 0, -28639, 0, -28555, 0, -26933, 0, -26113, 0, -31999, 0, 20013, 0, 20210, 0, -30650, 0, -28211, 0, 21373, 0, 27355, 0, 26987, 0, 27713, 0, -31622, 0, 22686, 0, 24974, 0, 26366, 0, 25327, 0, 28893, 0, 29969, 0, 30151, 0, 32338, 0, -31560, 0, -29879, 0, -29432, 0, 20043, 0, 21482, 0, 21675, 0, 22320, 0, 22336, 0, 24535, 0, 25345, 0, 25351, 0, 25711, 0, 25903, 0, 26088, 0, 26234, 0, 26525, 0, 26547, 0, 27490, 0, 27744, 0, 27802, 0, 28460, 0, 30693, 0, 30757, 0, 31049, 0, 31063, 0, 32025, 0, -32606, 0, -32510, 0, -32269, 0, -32099, 0, -32073, 0, -30952, 0, -30068, 0, -1540, 0, -29436, 0, -29250, 0, -28558, 0, 30452, 0, 31257, 0, 31287, 0, 32340, 0, -32649, 0, 21767, 0, 21972, 0, 22645, 0, 25391, 0, 25634, 0, 26185, 0, 26187, 0, 26733, 0, 27035, 0, 27524, 0, 27941, 0, 28337, 0, 29645, 0, 29800, 0, 29857, 0, 30043, 0, 30137, 0, 30433, 0, 30494, 0, 30603, 0, 31206, 0, 32265, 0, 32285, 0, -32261, 0, -31441, 0, -30569, 0, -30150, 0, -29487, 0, -28949, 0, -28752, 0, -28622, 0, -27731, 0, -27037, 0, -27021, 0, -26873, 0, 20356, 0, 21489, 0, 23018, 0, 23241, 0, 24089, 0, 26702, 0, 29894, 0, 30142, 0, 31209, 0, 31378, 0, -32349, 0, -30995, 0, -29462, 0, -29236, 0, -28691, 0, 26015, 0, 26389, 0, -1539, 0, 22519, 0, 28503, 0, 32221, 0, -28881, 0, -27658, 0, -26938, 0, 24501, 0, 25074, 0, 28548, 0, 19988, 0, 20376, 0, 20511, 0, 21449, 0, 21983, 0, 23919, 0, 24046, 0, 27425, 0, 27492, 0, 30923, 0, 31642, 0, -1538, 0, -29111, 0, -28982, 0, -28562, 0, 25417, 0, 25662, 0, 30528, 0, 31364, 0, -27857, 0, -27521, 0, -24726, 0, 25776, 0, 28591, 0, 29158, 0, 29864, 0, 29914, 0, 31428, 0, 31762, 0, 32386, 0, 31922, 0, 32408, 0, -29798, 0, -29430, 0, -27523, 0, -26352, 0, -26292, 0, 21049, 0, 23519, 0, 25830, 0, 26413, 0, 32046, 0, 20717, 0, 21443, 0, 22649, 0, 24920, 0, 24921, 0, 25082, 0, 26028, 0, 31449, 0, -29806, 0, -29802, 0, 20489, 0, 20513, 0, 21109, 0, 21809, 0, 23100, 0, 24288, 0, 24432, 0, 24884, 0, 25950, 0, 26124, 0, 26166, 0, 26274, 0, 27085, 0, 28356, 0, 28466, 0, 29462, 0, 30241, 0, 31379, 0, -32455, 0, -32167, 0, -31786, 0, -31556, 0, 20661, 0, 22512, 0, 23488, 0, 23528, 0, 24425, 0, 25505, 0, 30758, 0, 32181, 0, -31780, 0, -31455, 0, -28217, 0, -28171, 0, 20874, 0, 26613, 0, 31574, 0, -29524, 0, 20932, 0, 22971, 0, 24765, 0, -31147, 0, 20508, 0, -1537, 0, 21076, 0, 23610, 0, 24957, 0, 25114, 0, 25299, 0, 25842, 0, 26021, 0, 28364, 0, 30240, 0, -32502, 0, -29088, 0, -27041, 0, -26949, 0, 20191, 0, 21315, 0, 21912, 0, 22825, 0, 24029, 0, 25797, 0, 27849, 0, 28154, 0, 29588, 0, 31359, 0, -32229, 0, -31322, 0, -29468, 0, -29168, 0, -28553, 0, -28185, 0, -27167, 0, -27103, 0, -26682, 0, 20984, 0, 21746, 0, 21894, 0, 24505, 0, 25764, 0, 28552, 0, 32180, 0, -28897, 0, -28851, 0, -27595, 0, 20681, 0, 23574, 0, 27838, 0, 28155, 0, 29979, 0, 30651, 0, 31805, 0, 31844, 0, -30087, 0, -30014, 0, 22558, 0, 22974, 0, 24086, 0, 25463, 0, 29266, 0, 30090, 0, 30571, 0, -29988, 0, -29508, 0, -28910, 0, 24307, 0, 26228, 0, 28152, 0, -32643, 0, -31807, 0, -30005, 0, -26799, 0, -25642, 0, -1536, 0, 21059, 0, 26367, 0, 28053, 0, 28399, 0, 32224, 0, -29978, 0, -28626, 0, -28578, 0, -25900, 0, 21021, 0, 21119, 0, 21736, 0, 24980, 0, 25220, 0, 25307, 0, 26786, 0, 26898, 0, 26970, 0, 27189, 0, 28818, 0, 28966, 0, 30813, 0, 30977, 0, 30990, 0, 31186, 0, 31245, 0, -32618, 0, -32136, 0, -32043, 0, -31927, 0, -31415, 0, -29566, 0, -29307, 0, -28318, 0, -28277, 0, -28242, 0, 20419, 0, 22225, 0, 29165, 0, 30679, 0, -30976, 0, -30216, 0, 23544, 0, 24534, 0, 26449, 0, -28504, 0, 21474, 0, 22618, 0, 23541, 0, 24740, 0, 24961, 0, 25696, 0, 32317, 0, -32656, 0, -31451, 0, -28029, 0, 25774, 0, 20652, 0, 23828, 0, 26368, 0, 22684, 0, 25277, 0, 25512, 0, 26894, 0, 27e3, 0, 27166, 0, 28267, 0, 30394, 0, 31179, 0, -32069, 0, -31703, 0, -30001, 0, -29272, 0, -28675, 0, -28398, 0, -28341, 0, -28260, 0, -27888, 0, -27880, 0, -27750, 0, -26917, 0, -26058, 0, -25587, 0, 19985, 0, 30044, 0, 31069, 0, 31482, 0, 31569, 0, 31689, 0, 32302, 0, -31548, 0, -29095, 0, -29068, 0, -28936, 0, -28656, 0, 26149, 0, 26943, 0, 29763, 0, 20986, 0, 26414, 0, -24868, 0, 20805, 0, 24544, 0, 27798, 0, -30734, 0, -30627, 0, -30601, 0, 24756, 0, -32331, 0, -31741, 0, -29435, 0, 21462, 0, 21561, 0, 22068, 0, 23094, 0, 23601, 0, 28810, 0, 32736, 0, -32678, 0, -32506, 0, -32275, 0, -29277, 0, -28279, 0, -26017, 0, -25102, 0, 20596, 0, 20164, 0, 21408, 0, 24827, 0, 28204, 0, 23652, 0, 20360, 0, 20516, 0, 21988, 0, 23769, 0, 24159, 0, 24677, 0, 26772, 0, 27835, 0, 28100, 0, 29118, 0, 30164, 0, 30196, 0, 30305, 0, 31258, 0, 31305, 0, 32199, 0, 32251, 0, 32622, 0, -32268, 0, -31063, 0, -28900, 0, -26935, 0, -26189, 0, -24750, 0, 21063, 0, 21189, 0, -26387, 0, -30294, 0, 19971, 0, 26578, 0, 28422, 0, 20405, 0, 23522, 0, 26517, 0, 27784, 0, 28024, 0, 29723, 0, 30759, 0, -28195, 0, -27780, 0, -30780, 0, 31204, 0, 31281, 0, 24555, 0, 20182, 0, 21668, 0, 21822, 0, 22702, 0, 22949, 0, 24816, 0, 25171, 0, 25302, 0, 26422, 0, 26965, 0, -32203, 0, -27072, 0, -26191, 0, -26147, 0, 20524, 0, 21331, 0, 21828, 0, 22396, 0, -1535, 0, 25176, 0, -1534, 0, 25826, 0, 26219, 0, 26589, 0, 28609, 0, 28655, 0, 29730, 0, 29752, 0, -30185, 0, -27592, 0, 21585, 0, 22022, 0, 22374, 0, 24392, 0, 24986, 0, 27470, 0, 28760, 0, 28845, 0, 32187, 0, -30059, 0, 22890, 0, -32469, 0, 25506, 0, 30472, 0, -32707, 0, -29526, 0, 22612, 0, 25645, 0, 27067, 0, 23445, 0, 24081, 0, 28271, 0, -1533, 0, -31383, 0, 20812, 0, 21488, 0, 22826, 0, 24608, 0, 24907, 0, 27526, 0, 27760, 0, 27888, 0, 31518, 0, -32562, 0, -32044, 0, -29242, 0, -28496, 0, -26447, 0, -1532, 0, 25799, 0, 28580, 0, 25745, 0, 25860, 0, 20814, 0, 21520, 0, 22303, 0, -30194, 0, 24927, 0, 26742, 0, -1531, 0, 30171, 0, 31570, 0, 32113, 0, -28646, 0, 22534, 0, 27084, 0, -32385, 0, -30422, 0, -28672, 0, -26567, 0, 20600, 0, 22871, 0, 22956, 0, 25237, 0, -28657, 0, -25814, 0, 24925, 0, 29305, 0, -27178, 0, 22369, 0, 23110, 0, 24052, 0, 25226, 0, 25773, 0, 25850, 0, 26487, 0, 27874, 0, 27966, 0, 29228, 0, 29750, 0, 30772, 0, 32631, 0, -32083, 0, -29221, 0, -26601, 0, 21028, 0, 22338, 0, 26495, 0, 29256, 0, 29923, 0, -29527, 0, -28762, 0, -28143, 0, -27094, 0, 20843, 0, 21485, 0, 25420, 0, 20329, 0, 21764, 0, 24726, 0, 25943, 0, 27803, 0, 28031, 0, 29260, 0, 29437, 0, 31255, 0, -30329, 0, -29539, 0, 24429, 0, 28558, 0, 28921, 0, -32344, 0, 24846, 0, 20415, 0, 20559, 0, 25153, 0, 29255, 0, 31687, 0, 32232, 0, 32745, 0, -28595, 0, -26707, 0, -26087, 0, -29514, 0, 22378, 0, 24179, 0, 26544, 0, -31731, 0, -30123, 0, 21536, 0, 23318, 0, 24163, 0, 24290, 0, 24330, 0, 25987, 0, -32582, 0, -31427, 0, -27255, 0, -27045, 0, 20296, 0, 21253, 0, 21261, 0, 21263, 0, 21638, 0, 21754, 0, 22275, 0, 24067, 0, 24598, 0, 25243, 0, 25265, 0, 25429, 0, -1530, 0, 27873, 0, 28006, 0, 30129, 0, 30770, 0, -32546, 0, -32465, 0, -32034, 0, -31647, 0, -31566, 0, -30579, 0, -30446, 0, -28661, 0, -27926, 0, -26371, 0, -25711, 0, 24133, 0, 26292, 0, 26333, 0, 28689, 0, 29190, 0, -1529, 0, 20469, 0, 21117, 0, 24426, 0, 24915, 0, 26451, 0, 27161, 0, 28418, 0, 29922, 0, 31080, 0, -30616, 0, -29575, 0, -26425, 0, -26428, 0, -26045, 0, 21697, 0, 31263, 0, 26963, 0, -29961, 0, -29622, 0, -26456, 0, -26194, 0, 24444, 0, 25259, 0, 30130, 0, 30382, 0, -30549, 0, -28545, 0, -27070, 0, 21305, 0, 24380, 0, 24517, 0, 27852, 0, 29644, 0, 30050, 0, 30091, 0, 31558, 0, -32002, 0, -26211, 0, 20047, 0, -28612, 0, 19979, 0, 20309, 0, 21414, 0, 22799, 0, 24264, 0, 26160, 0, 27827, 0, 29781, 0, -31881, 0, -30874, 0, -29504, 0, -28592, 0, -26850, 0, -25579, 0, 22737, 0, 23416, 0, -31152, 0, -29932, 0, -25164, 0, 23506, 0, 24680, 0, 24717, 0, 26097, 0, 27735, 0, 28450, 0, 28579, 0, 28698, 0, 32597, 0, 32752, 0, -27247, 0, -27246, 0, -27056, 0, -26669, 0, 21106, 0, -28860, 0, 20989, 0, 21547, 0, 21688, 0, 21859, 0, 21898, 0, 27323, 0, 28085, 0, 32216, 0, -32154, 0, -28004, 0, -27017, 0, -24967, 0, 21512, 0, 21704, 0, 30418, 0, -31004, 0, -27228, 0, -27180, 0, -27044, 0, 20130, 0, 20233, 0, 23022, 0, 23270, 0, 24055, 0, 24658, 0, 25239, 0, 26477, 0, 26689, 0, 27782, 0, 28207, 0, 32568, 0, -32613, 0, -32214, 0, -1528, 0, -1527, 0, -26619, 0, 20133, 0, 20565, 0, 21683, 0, 22419, 0, 22874, 0, 23401, 0, 23475, 0, 25032, 0, 26999, 0, 28023, 0, 28707, 0, -30727, 0, -30237, 0, -30094, 0, -29977, 0, -28542, 0, -26131, 0, -25928, 0, 21182, 0, 26680, 0, 20502, 0, 24184, 0, 26447, 0, -31929, 0, -30644, 0, 20139, 0, 21521, 0, 22190, 0, 29670, 0, -28395, 0, -26625, 0, -26359, 0, -26281, 0, -26215, 0, 22099, 0, 22687, 0, -31141, 0, -30159, 0, 25010, 0, 27382, 0, 29563, 0, -28974, 0, 27463, 0, -26966, 0, -26025, 0, 22869, 0, 29184, 0, -29333, 0, -26775, 0, 20436, 0, 23796, 0, 24358, 0, 25080, 0, 26203, 0, 27883, 0, 28843, 0, 29572, 0, 29625, 0, 29694, 0, 30505, 0, 30541, 0, 32067, 0, 32098, 0, 32291, 0, -32201, 0, -30638, 0, -1526, 0, -29470, 0, -28087, 0, -26513, 0, 23377, 0, 31348, 0, -30656, 0, -26623, 0, 23244, 0, 20448, 0, 21332, 0, 22846, 0, 23805, 0, 25406, 0, 28025, 0, 29433, 0, -32507, 0, -32505, 0, -31838, 0, -27953, 0, -26576, 0, 20136, 0, 20804, 0, 21009, 0, 22411, 0, 24418, 0, 27842, 0, 28366, 0, 28677, 0, 28752, 0, 28847, 0, 29074, 0, 29673, 0, 29801, 0, -31926, 0, -30814, 0, -30623, 0, -28664, 0, -28510, 0, -27741, 0, -26200, 0, 20846, 0, 24407, 0, 24800, 0, 24935, 0, 26291, 0, -31399, 0, -29110, 0, -28241, 0, -26741, 0, 20046, 0, 20114, 0, 21628, 0, 22741, 0, 22778, 0, 22909, 0, 23733, 0, 24359, 0, 25142, 0, 25160, 0, 26122, 0, 26215, 0, 27627, 0, 28009, 0, 28111, 0, 28246, 0, 28408, 0, 28564, 0, 28640, 0, 28649, 0, 28765, 0, 29392, 0, 29733, 0, 29786, 0, 29920, 0, 30355, 0, 31068, 0, 31946, 0, 32286, 0, -32543, 0, -32090, 0, -31637, 0, -31553, 0, -31154, 0, -31137, 0, -30860, 0, -29833, 0, -29590, 0, -27732, 0, -26624, 0, -26523, 0, 24785, 0, 25110, 0, -28297, 0, 23130, 0, 26127, 0, 28151, 0, 28222, 0, 29759, 0, -25790, 0, 24573, 0, 24794, 0, 31503, 0, 21700, 0, 24344, 0, 27742, 0, 27859, 0, 27946, 0, 28888, 0, 32005, 0, -31111, 0, -30196, 0, -25285, 0, 21270, 0, 21644, 0, 23301, 0, 27194, 0, 28779, 0, 30069, 0, 31117, 0, 31166, 0, -32079, 0, -31761, 0, -30095, 0, -29887, 0, -29528, 0, -26764, 0, -1525, 0, 25844, 0, 25899, 0, 30906, 0, 30907, 0, 31339, 0, 20024, 0, 21914, 0, 22864, 0, 23462, 0, 24187, 0, 24739, 0, 25563, 0, 27489, 0, 26213, 0, 26707, 0, 28185, 0, 29029, 0, 29872, 0, 32008, 0, -28540, 0, -26007, 0, -25563, 0, 27963, 0, 28369, 0, 29502, 0, -29631, 0, -27190, 0, 20976, 0, 24140, 0, 24488, 0, 24653, 0, 24822, 0, 24880, 0, 24908, 0, 26179, 0, 26180, 0, 27045, 0, 27841, 0, 28255, 0, 28361, 0, 28514, 0, 29004, 0, 29852, 0, 30343, 0, 31681, 0, 31783, 0, -31918, 0, -30889, 0, -28591, 0, -26995, 0, -24893, 0, 21295, 0, 22238, 0, 24315, 0, 24458, 0, 24674, 0, 24724, 0, 25079, 0, 26214, 0, 26371, 0, 27292, 0, 28142, 0, 28590, 0, 28784, 0, 29546, 0, 32362, 0, -32322, 0, -31948, 0, -31020, 0, -30040, 0, -29500, 0, 21123, 0, 29554, 0, 23446, 0, 27243, 0, -27644, 0, 21742, 0, 22150, 0, 23389, 0, 25928, 0, 25989, 0, 26313, 0, 26783, 0, 28045, 0, 28102, 0, 29243, 0, -32588, 0, -28299, 0, -26035, 0, 20399, 0, 20505, 0, 21402, 0, 21518, 0, 21564, 0, 21897, 0, 21957, 0, 24127, 0, 24460, 0, 26429, 0, 29030, 0, 29661, 0, -28667, 0, 21211, 0, 21235, 0, 22628, 0, 22734, 0, 28932, 0, 29071, 0, 29179, 0, -31312, 0, -30189, 0, 26248, 0, -31320, 0, 21927, 0, 26244, 0, 29002, 0, -31695, 0, 21321, 0, 21913, 0, 27585, 0, 24409, 0, 24509, 0, 25582, 0, 26249, 0, 28999, 0, -29967, 0, -28899, 0, -24898, 0, 20241, 0, 25658, 0, 28875, 0, 30054, 0, -31129, 0, 24676, 0, -29874, 0, -25096, 0, 20807, 0, 20982, 0, 21256, 0, 27958, 0, -32520, 0, -24879, 0, 26133, 0, 27427, 0, 28824, 0, 30165, 0, 21507, 0, 23673, 0, 32007, 0, -30186, 0, 27424, 0, 27453, 0, 27462, 0, 21560, 0, 24688, 0, 27965, 0, 32725, 0, -32248, 0, 20694, 0, 20958, 0, 21916, 0, 22123, 0, 22221, 0, 23020, 0, 23305, 0, 24076, 0, 24985, 0, 24984, 0, 25137, 0, 26206, 0, 26342, 0, 29081, 0, 29113, 0, 29114, 0, 29351, 0, 31143, 0, 31232, 0, 32690, 0, -30096, 0 ], [ "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0 ], ALLOC_NORMAL);
    _ksx1001_decmap = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 103, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 120, 0, 0, 0, 0, 0, 0, 33, 100, 0, 0, 0, 0, 0, 0, 33, 111, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 115, 0, 0, 0, 0, 0, 0, 33, 118, 0, 0, 0, 0, 0, 0, 33, 113, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 33, 126, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0 ], ALLOC_NORMAL);
    ___cp949ext_decmap = allocate([ -21502, 0, -21501, 0, -21499, 0, -21498, 0, -21493, 0, -21492, 0, -21491, 0, -21490, 0, -21489, 0, -21480, 0, -21474, 0, -21473, 0, -21471, 0, -21470, 0, -21469, 0, -21467, 0, -21466, 0, -21465, 0, -21464, 0, -21463, 0, -21462, 0, -21461, 0, -21458, 0, -21454, 0, -21453, 0, -21452, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -21451, 0, -21450, 0, -21449, 0, -21446, 0, -21445, 0, -21443, 0, -21442, 0, -21441, 0, -21439, 0, -21438, 0, -21437, 0, -21436, 0, -21435, 0, -21434, 0, -21433, 0, -21432, 0, -21431, 0, -21430, 0, -21428, 0, -21426, 0, -21425, 0, -21424, 0, -21423, 0, -21422, 0, -21421, 0, -21419, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -21418, 0, -21417, 0, -21415, 0, -21414, 0, -21413, 0, -21411, 0, -21410, 0, -21409, 0, -21408, 0, -21407, 0, -21406, 0, -21405, 0, -21404, 0, -21403, 0, -21402, 0, -21401, 0, -21400, 0, -21399, 0, -21398, 0, -21397, 0, -21396, 0, -21395, 0, -21394, 0, -21393, 0, -21390, 0, -21389, 0, -21387, 0, -21386, 0, -21383, 0, -21381, 0, -21380, 0, -21379, 0, -21378, 0, -21377, 0, -21374, 0, -21369, 0, -21368, 0, -21363, 0, -21362, 0, -21361, 0, -21359, 0, -21358, 0, -21357, 0, -21355, 0, -21354, 0, -21353, 0, -21352, 0, -21351, 0, -21350, 0, -21349, 0, -21346, 0, -21342, 0, -21341, 0, -21340, 0, -21339, 0, -21338, 0, -21337, 0, -21333, 0, -21331, 0, -21330, 0, -21327, 0, -21326, 0, -21325, 0, -21324, 0, -21323, 0, -21322, 0, -21321, 0, -21318, 0, -21314, 0, -21313, 0, -21312, 0, -21310, 0, -21309, 0, -21307, 0, -21306, 0, -21305, 0, -21303, 0, -21302, 0, -21301, 0, -21299, 0, -21298, 0, -21297, 0, -21296, 0, -21295, 0, -21294, 0, -21293, 0, -21292, 0, -21290, 0, -21288, 0, -21287, 0, -21286, 0, -21285, 0, -21284, 0, -21283, 0, -21282, 0, -21281, 0, -21278, 0, -21277, 0, -21275, 0, -21274, 0, -21271, 0, -21269, 0, -21267, 0, -21266, 0, -21262, 0, -21260, 0, -21257, 0, -21256, 0, -21255, 0, -21254, 0, -21253, 0, -21250, 0, -21249, 0, -21247, 0, -21246, 0, -21245, 0, -21243, 0, -21241, 0, -21240, 0, -21239, 0, -21238, 0, -21237, 0, -21234, 0, -21232, 0, -21230, 0, -21229, 0, -21228, 0, -21227, 0, -21226, 0, -21225, 0, -21223, 0, -21222, 0, -21221, 0, -21219, 0, -21218, 0, -21217, 0, -21215, 0, -21214, 0, -21213, 0, -21212, 0, -21211, 0, -21210, 0, -21209, 0, -21208, 0, -21206, 0, -21205, 0, -21202, 0, -21201, 0, -21200, 0, -21199, 0, -21198, 0, -21197, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -21194, 0, -21193, 0, -21191, 0, -21190, 0, -21189, 0, -21187, 0, -21186, 0, -21185, 0, -21184, 0, -21183, 0, -21182, 0, -21181, 0, -21178, 0, -21176, 0, -21174, 0, -21173, 0, -21172, 0, -21171, 0, -21170, 0, -21169, 0, -21167, 0, -21166, 0, -21165, 0, -21163, 0, -21162, 0, -21161, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -21159, 0, -21158, 0, -21157, 0, -21156, 0, -21155, 0, -21154, 0, -21153, 0, -21152, 0, -21150, 0, -21148, 0, -21147, 0, -21146, 0, -21145, 0, -21144, 0, -21143, 0, -21142, 0, -21141, 0, -21138, 0, -21137, 0, -21135, 0, -21134, 0, -21129, 0, -21128, 0, -21127, 0, -21126, 0, -21122, 0, -21120, 0, -21117, 0, -21116, 0, -21115, 0, -21114, 0, -21113, 0, -21110, 0, -21109, 0, -21107, 0, -21106, 0, -21105, 0, -21103, 0, -21102, 0, -21101, 0, -21100, 0, -21099, 0, -21098, 0, -21097, 0, -21096, 0, -21095, 0, -21094, 0, -21093, 0, -21090, 0, -21089, 0, -21088, 0, -21087, 0, -21086, 0, -21085, 0, -21083, 0, -21082, 0, -21081, 0, -21080, 0, -21079, 0, -21078, 0, -21077, 0, -21076, 0, -21075, 0, -21074, 0, -21073, 0, -21072, 0, -21071, 0, -21070, 0, -21069, 0, -21068, 0, -21067, 0, -21066, 0, -21064, 0, -21063, 0, -21062, 0, -21061, 0, -21060, 0, -21059, 0, -21058, 0, -21057, 0, -21054, 0, -21053, 0, -21051, 0, -21050, 0, -21049, 0, -21047, 0, -21046, 0, -21045, 0, -21044, 0, -21043, 0, -21042, 0, -21041, 0, -21038, 0, -21036, 0, -21035, 0, -21034, 0, -21033, 0, -21032, 0, -21031, 0, -21030, 0, -21029, 0, -21027, 0, -21026, 0, -21025, 0, -21023, 0, -21022, 0, -21021, 0, -21019, 0, -21018, 0, -21017, 0, -21016, 0, -21015, 0, -21014, 0, -21013, 0, -21012, 0, -21011, 0, -21010, 0, -21009, 0, -21008, 0, -21007, 0, -21006, 0, -21005, 0, -21004, 0, -21003, 0, -21002, 0, -21001, 0, -20998, 0, -20997, 0, -20995, 0, -20994, 0, -20990, 0, -20989, 0, -20988, 0, -20987, 0, -20986, 0, -20985, 0, -20982, 0, -20980, 0, -20978, 0, -20977, 0, -20976, 0, -20975, 0, -20974, 0, -20973, 0, -20971, 0, -20970, 0, -20969, 0, -20968, 0, -20967, 0, -20966, 0, -20965, 0, -20964, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -20963, 0, -20962, 0, -20961, 0, -20960, 0, -20959, 0, -20958, 0, -20957, 0, -20956, 0, -20955, 0, -20954, 0, -20953, 0, -20952, 0, -20951, 0, -20950, 0, -20949, 0, -20948, 0, -20947, 0, -20946, 0, -20945, 0, -20942, 0, -20941, 0, -20939, 0, -20938, 0, -20935, 0, -20933, 0, -20932, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -20931, 0, -20930, 0, -20929, 0, -20926, 0, -20924, 0, -20921, 0, -20920, 0, -20919, 0, -20917, 0, -20913, 0, -20911, 0, -20910, 0, -20909, 0, -20907, 0, -20905, 0, -20904, 0, -20903, 0, -20902, 0, -20901, 0, -20898, 0, -20894, 0, -20893, 0, -20892, 0, -20890, 0, -20889, 0, -20886, 0, -20885, 0, -20883, 0, -20882, 0, -20881, 0, -20879, 0, -20878, 0, -20877, 0, -20876, 0, -20875, 0, -20874, 0, -20873, 0, -20870, 0, -20866, 0, -20865, 0, -20864, 0, -20863, 0, -20862, 0, -20861, 0, -20858, 0, -20857, 0, -20856, 0, -20855, 0, -20854, 0, -20853, 0, -20851, 0, -20850, 0, -20849, 0, -20848, 0, -20847, 0, -20846, 0, -20845, 0, -20844, 0, -20843, 0, -20842, 0, -20841, 0, -20840, 0, -20839, 0, -20838, 0, -20837, 0, -20836, 0, -20835, 0, -20834, 0, -20833, 0, -20832, 0, -20831, 0, -20830, 0, -20829, 0, -20828, 0, -20827, 0, -20826, 0, -20825, 0, -20824, 0, -20823, 0, -20822, 0, -20821, 0, -20820, 0, -20819, 0, -20818, 0, -20817, 0, -20816, 0, -20815, 0, -20814, 0, -20813, 0, -20812, 0, -20811, 0, -20810, 0, -20809, 0, -20808, 0, -20807, 0, -20806, 0, -20805, 0, -20801, 0, -20799, 0, -20798, 0, -20797, 0, -20795, 0, -20794, 0, -20793, 0, -20792, 0, -20791, 0, -20790, 0, -20789, 0, -20786, 0, -20782, 0, -20781, 0, -20780, 0, -20779, 0, -20778, 0, -20777, 0, -20774, 0, -20773, 0, -20771, 0, -20770, 0, -20769, 0, -20768, 0, -20767, 0, -20766, 0, -20765, 0, -20764, 0, -20763, 0, -20762, 0, -20761, 0, -20759, 0, -20758, 0, -20756, 0, -20754, 0, -20753, 0, -20752, 0, -20751, 0, -20750, 0, -20749, 0, -20747, 0, -20746, 0, -20745, 0, -20743, 0, -20742, 0, -20741, 0, -20739, 0, -20738, 0, -20737, 0, -20736, 0, -20735, 0, -20734, 0, -20733, 0, -20732, 0, -20731, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -20730, 0, -20727, 0, -20726, 0, -20725, 0, -20724, 0, -20722, 0, -20721, 0, -20719, 0, -20718, 0, -20717, 0, -20716, 0, -20715, 0, -20714, 0, -20713, 0, -20712, 0, -20711, 0, -20710, 0, -20709, 0, -20708, 0, -20707, 0, -20706, 0, -20705, 0, -20704, 0, -20703, 0, -20702, 0, -20701, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -20700, 0, -20699, 0, -20698, 0, -20697, 0, -20696, 0, -20695, 0, -20694, 0, -20693, 0, -20690, 0, -20689, 0, -20687, 0, -20685, 0, -20683, 0, -20682, 0, -20681, 0, -20680, 0, -20679, 0, -20678, 0, -20677, 0, -20674, 0, -20672, 0, -20668, 0, -20667, 0, -20666, 0, -20665, 0, -20662, 0, -20661, 0, -20660, 0, -20659, 0, -20658, 0, -20657, 0, -20655, 0, -20654, 0, -20653, 0, -20652, 0, -20651, 0, -20650, 0, -20649, 0, -20648, 0, -20647, 0, -20646, 0, -20645, 0, -20642, 0, -20641, 0, -20640, 0, -20639, 0, -20638, 0, -20637, 0, -20634, 0, -20633, 0, -20632, 0, -20631, 0, -20630, 0, -20629, 0, -20628, 0, -20627, 0, -20626, 0, -20625, 0, -20624, 0, -20623, 0, -20622, 0, -20621, 0, -20620, 0, -20619, 0, -20618, 0, -20617, 0, -20616, 0, -20614, 0, -20613, 0, -20612, 0, -20611, 0, -20610, 0, -20609, 0, -20607, 0, -20606, 0, -20605, 0, -20603, 0, -20602, 0, -20601, 0, -20599, 0, -20598, 0, -20597, 0, -20596, 0, -20595, 0, -20594, 0, -20593, 0, -20590, 0, -20589, 0, -20588, 0, -20586, 0, -20585, 0, -20584, 0, -20583, 0, -20582, 0, -20581, 0, -20579, 0, -20578, 0, -20577, 0, -20576, 0, -20575, 0, -20574, 0, -20573, 0, -20572, 0, -20571, 0, -20570, 0, -20569, 0, -20568, 0, -20567, 0, -20566, 0, -20565, 0, -20564, 0, -20563, 0, -20562, 0, -20561, 0, -20560, 0, -20559, 0, -20558, 0, -20557, 0, -20556, 0, -20555, 0, -20554, 0, -20553, 0, -20550, 0, -20549, 0, -20547, 0, -20546, 0, -20545, 0, -20543, 0, -20542, 0, -20541, 0, -20540, 0, -20539, 0, -20538, 0, -20534, 0, -20532, 0, -20529, 0, -20528, 0, -20527, 0, -20526, 0, -20525, 0, -20523, 0, -20522, 0, -20521, 0, -20520, 0, -20519, 0, -20518, 0, -20517, 0, -20515, 0, -20514, 0, -20513, 0, -20512, 0, -20511, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -20510, 0, -20509, 0, -20508, 0, -20507, 0, -20506, 0, -20505, 0, -20502, 0, -20501, 0, -20500, 0, -20499, 0, -20498, 0, -20497, 0, -20494, 0, -20493, 0, -20491, 0, -20490, 0, -20489, 0, -20487, 0, -20486, 0, -20485, 0, -20484, 0, -20483, 0, -20482, 0, -20481, 0, -20478, 0, -20477, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -20475, 0, -20474, 0, -20473, 0, -20472, 0, -20471, 0, -20470, 0, -20469, 0, -20467, 0, -20466, 0, -20465, 0, -20463, 0, -20462, 0, -20461, 0, -20459, 0, -20458, 0, -20457, 0, -20456, 0, -20455, 0, -20454, 0, -20453, 0, -20450, 0, -20449, 0, -20448, 0, -20447, 0, -20446, 0, -20445, 0, -20444, 0, -20443, 0, -20442, 0, -20441, 0, -20439, 0, -20438, 0, -20437, 0, -20436, 0, -20435, 0, -20434, 0, -20433, 0, -20432, 0, -20431, 0, -20430, 0, -20429, 0, -20428, 0, -20427, 0, -20426, 0, -20425, 0, -20424, 0, -20423, 0, -20422, 0, -20421, 0, -20420, 0, -20419, 0, -20418, 0, -20417, 0, -20416, 0, -20415, 0, -20414, 0, -20413, 0, -20410, 0, -20409, 0, -20407, 0, -20405, 0, -20403, 0, -20401, 0, -20400, 0, -20399, 0, -20398, 0, -20394, 0, -20392, 0, -20390, 0, -20389, 0, -20388, 0, -20386, 0, -20385, 0, -20384, 0, -20383, 0, -20382, 0, -20381, 0, -20380, 0, -20379, 0, -20378, 0, -20377, 0, -20376, 0, -20375, 0, -20374, 0, -20373, 0, -20372, 0, -20371, 0, -20370, 0, -20369, 0, -20368, 0, -20367, 0, -20366, 0, -20365, 0, -20364, 0, -20363, 0, -20362, 0, -20361, 0, -20360, 0, -20359, 0, -20358, 0, -20357, 0, -20354, 0, -20353, 0, -20351, 0, -20350, 0, -20349, 0, -20347, 0, -20346, 0, -20345, 0, -20344, 0, -20343, 0, -20342, 0, -20341, 0, -20338, 0, -20336, 0, -20334, 0, -20333, 0, -20332, 0, -20331, 0, -20330, 0, -20329, 0, -20325, 0, -20323, 0, -20322, 0, -20317, 0, -20316, 0, -20315, 0, -20314, 0, -20313, 0, -20310, 0, -20304, 0, -20302, 0, -20298, 0, -20297, 0, -20295, 0, -20294, 0, -20293, 0, -20291, 0, -20290, 0, -20289, 0, -20288, 0, -20287, 0, -20286, 0, -20285, 0, -20282, 0, -20278, 0, -20277, 0, -20276, 0, -20275, 0, -20274, 0, -20273, 0, -20270, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -20269, 0, -20267, 0, -20266, 0, -20265, 0, -20263, 0, -20262, 0, -20261, 0, -20260, 0, -20259, 0, -20258, 0, -20257, 0, -20255, 0, -20254, 0, -20253, 0, -20252, 0, -20250, 0, -20249, 0, -20248, 0, -20247, 0, -20246, 0, -20245, 0, -20244, 0, -20243, 0, -20242, 0, -20241, 0, -20240, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -20239, 0, -20238, 0, -20237, 0, -20236, 0, -20235, 0, -20234, 0, -20233, 0, -20232, 0, -20231, 0, -20230, 0, -20229, 0, -20228, 0, -20227, 0, -20226, 0, -20225, 0, -20224, 0, -20223, 0, -20222, 0, -20221, 0, -20220, 0, -20219, 0, -20218, 0, -20217, 0, -20214, 0, -20211, 0, -20210, 0, -20209, 0, -20207, 0, -20204, 0, -20203, 0, -20202, 0, -20201, 0, -20198, 0, -20194, 0, -20193, 0, -20192, 0, -20191, 0, -20190, 0, -20186, 0, -20185, 0, -20183, 0, -20182, 0, -20181, 0, -20179, 0, -20178, 0, -20177, 0, -20176, 0, -20175, 0, -20174, 0, -20173, 0, -20170, 0, -20166, 0, -20165, 0, -20164, 0, -20163, 0, -20162, 0, -20161, 0, -20158, 0, -20157, 0, -20155, 0, -20154, 0, -20153, 0, -20151, 0, -20150, 0, -20149, 0, -20148, 0, -20147, 0, -20146, 0, -20145, 0, -20142, 0, -20141, 0, -20138, 0, -20137, 0, -20135, 0, -20134, 0, -20133, 0, -20131, 0, -20130, 0, -20129, 0, -20127, 0, -20126, 0, -20125, 0, -20124, 0, -20123, 0, -20122, 0, -20121, 0, -20120, 0, -20119, 0, -20118, 0, -20117, 0, -20116, 0, -20115, 0, -20114, 0, -20113, 0, -20112, 0, -20111, 0, -20110, 0, -20109, 0, -20108, 0, -20107, 0, -20106, 0, -20105, 0, -20102, 0, -20101, 0, -20099, 0, -20098, 0, -20097, 0, -20095, 0, -20093, 0, -20092, 0, -20091, 0, -20090, 0, -20089, 0, -20086, 0, -20084, 0, -20082, 0, -20081, 0, -20080, 0, -20079, 0, -20075, 0, -20074, 0, -20073, 0, -20071, 0, -20070, 0, -20069, 0, -20067, 0, -20066, 0, -20065, 0, -20064, 0, -20063, 0, -20062, 0, -20061, 0, -20060, 0, -20059, 0, -20058, 0, -20057, 0, -20055, 0, -20054, 0, -20053, 0, -20052, 0, -20051, 0, -20050, 0, -20049, 0, -20048, 0, -20047, 0, -20046, 0, -20045, 0, -20044, 0, -20043, 0, -20042, 0, -20041, 0, -20040, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -20039, 0, -20038, 0, -20037, 0, -20036, 0, -20035, 0, -20034, 0, -20033, 0, -20032, 0, -20031, 0, -20030, 0, -20029, 0, -20028, 0, -20027, 0, -20026, 0, -20025, 0, -20024, 0, -20023, 0, -20022, 0, -20021, 0, -20019, 0, -20018, 0, -20017, 0, -20015, 0, -20014, 0, -20013, 0, -20011, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -20010, 0, -20009, 0, -20008, 0, -20007, 0, -20006, 0, -20005, 0, -20002, 0, -2e4, 0, -19999, 0, -19998, 0, -19997, 0, -19996, 0, -19995, 0, -19994, 0, -19993, 0, -19990, 0, -19989, 0, -19987, 0, -19986, 0, -19985, 0, -19983, 0, -19982, 0, -19981, 0, -19980, 0, -19979, 0, -19978, 0, -19977, 0, -19976, 0, -19974, 0, -19972, 0, -19970, 0, -19969, 0, -19968, 0, -19967, 0, -19966, 0, -19965, 0, -19962, 0, -19961, 0, -19959, 0, -19958, 0, -19955, 0, -19954, 0, -19953, 0, -19952, 0, -19951, 0, -19950, 0, -19949, 0, -19946, 0, -19944, 0, -19942, 0, -19941, 0, -19940, 0, -19939, 0, -19938, 0, -19937, 0, -19935, 0, -19934, 0, -19933, 0, -19932, 0, -19931, 0, -19930, 0, -19929, 0, -19928, 0, -19927, 0, -19926, 0, -19925, 0, -19924, 0, -19923, 0, -19922, 0, -19921, 0, -19920, 0, -19919, 0, -19918, 0, -19917, 0, -19915, 0, -19914, 0, -19913, 0, -19912, 0, -19911, 0, -19910, 0, -19909, 0, -19907, 0, -19906, 0, -19905, 0, -19904, 0, -19903, 0, -19902, 0, -19901, 0, -19900, 0, -19899, 0, -19898, 0, -19897, 0, -19896, 0, -19895, 0, -19894, 0, -19893, 0, -19892, 0, -19891, 0, -19890, 0, -19889, 0, -19888, 0, -19887, 0, -19886, 0, -19885, 0, -19884, 0, -19883, 0, -19882, 0, -19881, 0, -19879, 0, -19878, 0, -19877, 0, -19875, 0, -19874, 0, -19873, 0, -19871, 0, -19870, 0, -19869, 0, -19868, 0, -19867, 0, -19866, 0, -19865, 0, -19862, 0, -19861, 0, -19860, 0, -19859, 0, -19858, 0, -19857, 0, -19856, 0, -19855, 0, -19854, 0, -19853, 0, -19850, 0, -19849, 0, -19848, 0, -19847, 0, -19846, 0, -19845, 0, -19843, 0, -19842, 0, -19841, 0, -19840, 0, -19839, 0, -19838, 0, -19837, 0, -19834, 0, -19833, 0, -19832, 0, -19830, 0, -19829, 0, -19828, 0, -19827, 0, -19826, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -19825, 0, -19822, 0, -19821, 0, -19819, 0, -19818, 0, -19817, 0, -19813, 0, -19812, 0, -19811, 0, -19810, 0, -19809, 0, -19806, 0, -19804, 0, -19801, 0, -19800, 0, -19799, 0, -19797, 0, -19795, 0, -19794, 0, -19793, 0, -19791, 0, -19790, 0, -19789, 0, -19787, 0, -19786, 0, -19785, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -19784, 0, -19783, 0, -19782, 0, -19781, 0, -19780, 0, -19779, 0, -19778, 0, -19777, 0, -19776, 0, -19775, 0, -19774, 0, -19773, 0, -19772, 0, -19771, 0, -19770, 0, -19769, 0, -19766, 0, -19765, 0, -19763, 0, -19762, 0, -19761, 0, -19759, 0, -19757, 0, -19756, 0, -19755, 0, -19754, 0, -19753, 0, -19750, 0, -19748, 0, -19746, 0, -19745, 0, -19744, 0, -19743, 0, -19741, 0, -19737, 0, -19735, 0, -19734, 0, -19728, 0, -19727, 0, -19726, 0, -19722, 0, -19716, 0, -19715, 0, -19714, 0, -19710, 0, -19709, 0, -19707, 0, -19706, 0, -19705, 0, -19703, 0, -19702, 0, -19701, 0, -19700, 0, -19699, 0, -19698, 0, -19697, 0, -19694, 0, -19690, 0, -19689, 0, -19688, 0, -19687, 0, -19686, 0, -19685, 0, -19683, 0, -19682, 0, -19681, 0, -19680, 0, -19679, 0, -19678, 0, -19677, 0, -19676, 0, -19675, 0, -19674, 0, -19673, 0, -19672, 0, -19671, 0, -19670, 0, -19669, 0, -19668, 0, -19667, 0, -19666, 0, -19665, 0, -19664, 0, -19663, 0, -19662, 0, -19661, 0, -19660, 0, -19659, 0, -19658, 0, -19657, 0, -19656, 0, -19655, 0, -19654, 0, -19653, 0, -19652, 0, -19651, 0, -19650, 0, -19649, 0, -19648, 0, -19647, 0, -19646, 0, -19645, 0, -19644, 0, -19643, 0, -19642, 0, -19641, 0, -19640, 0, -19639, 0, -19638, 0, -19637, 0, -19636, 0, -19635, 0, -19634, 0, -19633, 0, -19632, 0, -19631, 0, -19630, 0, -19629, 0, -19625, 0, -19623, 0, -19622, 0, -19619, 0, -19616, 0, -19615, 0, -19614, 0, -19613, 0, -19610, 0, -19608, 0, -19606, 0, -19604, 0, -19603, 0, -19601, 0, -19598, 0, -19597, 0, -19595, 0, -19594, 0, -19593, 0, -19591, 0, -19590, 0, -19589, 0, -19588, 0, -19587, 0, -19586, 0, -19585, 0, -19582, 0, -19578, 0, -19577, 0, -19576, 0, -19575, 0, -19574, 0, -19573, 0, -19571, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -19570, 0, -19569, 0, -19567, 0, -19566, 0, -19565, 0, -19563, 0, -19562, 0, -19561, 0, -19560, 0, -19559, 0, -19558, 0, -19557, 0, -19556, 0, -19555, 0, -19554, 0, -19553, 0, -19550, 0, -19549, 0, -19548, 0, -19547, 0, -19546, 0, -19545, 0, -19543, 0, -19542, 0, -19541, 0, -19539, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -19538, 0, -19537, 0, -19536, 0, -19535, 0, -19534, 0, -19533, 0, -19532, 0, -19531, 0, -19530, 0, -19529, 0, -19528, 0, -19527, 0, -19526, 0, -19525, 0, -19524, 0, -19523, 0, -19522, 0, -19521, 0, -19520, 0, -19519, 0, -19518, 0, -19517, 0, -19514, 0, -19513, 0, -19511, 0, -19510, 0, -19507, 0, -19505, 0, -19503, 0, -19502, 0, -19501, 0, -19498, 0, -19496, 0, -19494, 0, -19492, 0, -19490, 0, -19489, 0, -19487, 0, -19486, 0, -19485, 0, -19483, 0, -19482, 0, -19481, 0, -19479, 0, -19478, 0, -19477, 0, -19476, 0, -19475, 0, -19474, 0, -19473, 0, -19472, 0, -19471, 0, -19470, 0, -19469, 0, -19468, 0, -19467, 0, -19466, 0, -19465, 0, -19464, 0, -19463, 0, -19462, 0, -19461, 0, -19459, 0, -19458, 0, -19457, 0, -19456, 0, -19455, 0, -19454, 0, -19453, 0, -19452, 0, -19451, 0, -19450, 0, -19449, 0, -19448, 0, -19447, 0, -19446, 0, -19445, 0, -19444, 0, -19443, 0, -19442, 0, -19441, 0, -19439, 0, -19438, 0, -19437, 0, -19436, 0, -19435, 0, -19434, 0, -19433, 0, -19431, 0, -19430, 0, -19429, 0, -19427, 0, -19426, 0, -19425, 0, -19423, 0, -19422, 0, -19421, 0, -19420, 0, -19419, 0, -19418, 0, -19417, 0, -19414, 0, -19412, 0, -19411, 0, -19410, 0, -19409, 0, -19408, 0, -19407, 0, -19406, 0, -19405, 0, -19403, 0, -19402, 0, -19401, 0, -19400, 0, -19399, 0, -19398, 0, -19397, 0, -19396, 0, -19395, 0, -19394, 0, -19393, 0, -19392, 0, -19391, 0, -19390, 0, -19389, 0, -19388, 0, -19387, 0, -19386, 0, -19385, 0, -19384, 0, -19383, 0, -19382, 0, -19381, 0, -19380, 0, -19379, 0, -19378, 0, -19377, 0, -19374, 0, -19373, 0, -19371, 0, -19370, 0, -19369, 0, -19367, 0, -19366, 0, -19365, 0, -19364, 0, -19363, 0, -19362, 0, -19361, 0, -19358, 0, -19356, 0, -19354, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -19353, 0, -19352, 0, -19351, 0, -19350, 0, -19349, 0, -19347, 0, -19346, 0, -19345, 0, -19344, 0, -19343, 0, -19342, 0, -19341, 0, -19340, 0, -19339, 0, -19338, 0, -19337, 0, -19336, 0, -19335, 0, -19334, 0, -19333, 0, -19332, 0, -19331, 0, -19330, 0, -19329, 0, -19327, 0, -19326, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -19325, 0, -19324, 0, -19323, 0, -19322, 0, -19321, 0, -19319, 0, -19318, 0, -19317, 0, -19316, 0, -19315, 0, -19314, 0, -19313, 0, -19312, 0, -19311, 0, -19310, 0, -19309, 0, -19308, 0, -19307, 0, -19306, 0, -19305, 0, -19304, 0, -19303, 0, -19302, 0, -19301, 0, -19300, 0, -19298, 0, -19297, 0, -19296, 0, -19295, 0, -19294, 0, -19293, 0, -19291, 0, -19290, 0, -19289, 0, -19287, 0, -19286, 0, -19285, 0, -19283, 0, -19282, 0, -19281, 0, -19280, 0, -19279, 0, -19278, 0, -19277, 0, -19276, 0, -19274, 0, -19272, 0, -19270, 0, -19269, 0, -19268, 0, -19267, 0, -19266, 0, -19265, 0, -19263, 0, -19262, 0, -19261, 0, -19259, 0, -19258, 0, -19257, 0, -19255, 0, -19254, 0, -19253, 0, -19252, 0, -19251, 0, -19250, 0, -19249, 0, -19247, 0, -19246, 0, -19245, 0, -19244, 0, -19242, 0, -19241, 0, -19240, 0, -19239, 0, -19238, 0, -19237, 0, -19234, 0, -19233, 0, -19231, 0, -19230, 0, -19227, 0, -19225, 0, -19224, 0, -19223, 0, -19222, 0, -19221, 0, -19218, 0, -19216, 0, -19214, 0, -19213, 0, -19212, 0, -19211, 0, -19210, 0, -19209, 0, -19207, 0, -19206, 0, -19205, 0, -19204, 0, -19203, 0, -19202, 0, -19201, 0, -19200, 0, -19199, 0, -19198, 0, -19197, 0, -19196, 0, -19195, 0, -19194, 0, -19193, 0, -19192, 0, -19191, 0, -19190, 0, -19189, 0, -19188, 0, -19187, 0, -19186, 0, -19185, 0, -19184, 0, -19183, 0, -19182, 0, -19181, 0, -19178, 0, -19177, 0, -19175, 0, -19174, 0, -19171, 0, -19170, 0, -19169, 0, -19168, 0, -19167, 0, -19166, 0, -19165, 0, -19162, 0, -19157, 0, -19156, 0, -19155, 0, -19154, 0, -19153, 0, -19150, 0, -19149, 0, -19147, 0, -19146, 0, -19145, 0, -19143, 0, -19142, 0, -19141, 0, -19140, 0, -19139, 0, -19138, 0, -19137, 0, -19134, 0, -19130, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -19129, 0, -19128, 0, -19127, 0, -19126, 0, -19122, 0, -19121, 0, -19119, 0, -19118, 0, -19117, 0, -19115, 0, -19114, 0, -19113, 0, -19112, 0, -19111, 0, -19110, 0, -19109, 0, -19106, 0, -19102, 0, -19101, 0, -19100, 0, -19099, 0, -19098, 0, -19097, 0, -19096, 0, -19095, 0, -19094, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -19093, 0, -19092, 0, -19091, 0, -19090, 0, -19089, 0, -19088, 0, -19087, 0, -19086, 0, -19085, 0, -19084, 0, -19083, 0, -19082, 0, -19081, 0, -19080, 0, -19079, 0, -19078, 0, -19077, 0, -19076, 0, -19075, 0, -19074, 0, -19073, 0, -19072, 0, -19071, 0, -19070, 0, -19069, 0, -19068, 0, -19067, 0, -19066, 0, -19065, 0, -19064, 0, -19063, 0, -19062, 0, -19061, 0, -19060, 0, -19059, 0, -19058, 0, -19057, 0, -19056, 0, -19055, 0, -19054, 0, -19053, 0, -19052, 0, -19051, 0, -19050, 0, -19049, 0, -19048, 0, -19047, 0, -19046, 0, -19045, 0, -19044, 0, -19043, 0, -19042, 0, -19041, 0, -19038, 0, -19037, 0, -19035, 0, -19034, 0, -19033, 0, -19031, 0, -19028, 0, -19027, 0, -19026, 0, -19025, 0, -19022, 0, -19018, 0, -19017, 0, -19016, 0, -19015, 0, -19014, 0, -19010, 0, -19009, 0, -19007, 0, -19006, 0, -19005, 0, -19003, 0, -19002, 0, -19001, 0, -19e3, 0, -18999, 0, -18998, 0, -18997, 0, -18994, 0, -18990, 0, -18989, 0, -18988, 0, -18987, 0, -18986, 0, -18985, 0, -18983, 0, -18982, 0, -18981, 0, -18980, 0, -18979, 0, -18978, 0, -18977, 0, -18976, 0, -18975, 0, -18974, 0, -18973, 0, -18972, 0, -18971, 0, -18970, 0, -18969, 0, -18968, 0, -18967, 0, -18966, 0, -18965, 0, -18963, 0, -18962, 0, -18961, 0, -18960, 0, -18959, 0, -18958, 0, -18957, 0, -18956, 0, -18955, 0, -18954, 0, -18953, 0, -18952, 0, -18951, 0, -18950, 0, -18949, 0, -18948, 0, -18947, 0, -18946, 0, -18945, 0, -18944, 0, -18943, 0, -18942, 0, -18941, 0, -18940, 0, -18939, 0, -18938, 0, -18937, 0, -18936, 0, -18935, 0, -18934, 0, -18933, 0, -18932, 0, -18931, 0, -18930, 0, -18929, 0, -18926, 0, -18925, 0, -18923, 0, -18922, 0, -18921, 0, -18919, 0, -18918, 0, -18917, 0, -18916, 0, -18915, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -18914, 0, -18913, 0, -18912, 0, -18911, 0, -18910, 0, -18909, 0, -18908, 0, -18906, 0, -18905, 0, -18904, 0, -18903, 0, -18902, 0, -18901, 0, -18899, 0, -18898, 0, -18897, 0, -18896, 0, -18895, 0, -18894, 0, -18893, 0, -18891, 0, -18890, 0, -18889, 0, -18888, 0, -18887, 0, -18886, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -18885, 0, -18884, 0, -18883, 0, -18882, 0, -18881, 0, -18880, 0, -18879, 0, -18878, 0, -18877, 0, -18876, 0, -18875, 0, -18874, 0, -18873, 0, -18871, 0, -18870, 0, -18869, 0, -18868, 0, -18867, 0, -18866, 0, -18865, 0, -18864, 0, -18863, 0, -18862, 0, -18861, 0, -18860, 0, -18859, 0, -18858, 0, -18857, 0, -18856, 0, -18855, 0, -18854, 0, -18853, 0, -18852, 0, -18851, 0, -18850, 0, -18849, 0, -18848, 0, -18847, 0, -18846, 0, -18845, 0, -18843, 0, -18842, 0, -18841, 0, -18839, 0, -18838, 0, -18837, 0, -18836, 0, -18835, 0, -18834, 0, -18833, 0, -18832, 0, -18831, 0, -18830, 0, -18829, 0, -18828, 0, -18827, 0, -18826, 0, -18825, 0, -18824, 0, -18823, 0, -18822, 0, -18821, 0, -18820, 0, -18819, 0, -18818, 0, -18817, 0, -18816, 0, -18815, 0, -18814, 0, -18813, 0, -18812, 0, -18811, 0, -18810, 0, -18809, 0, -18808, 0, -18807, 0, -18806, 0, -18805, 0, -18804, 0, -18803, 0, -18802, 0, -18801, 0, -18800, 0, -18799, 0, -18798, 0, -18797, 0, -18796, 0, -18795, 0, -18794, 0, -18793, 0, -18792, 0, -18791, 0, -18790, 0, -18789, 0, -18786, 0, -18785, 0, -18783, 0, -18782, 0, -18781, 0, -18779, 0, -18778, 0, -18777, 0, -18776, 0, -18775, 0, -18774, 0, -18771, 0, -18770, 0, -18769, 0, -18768, 0, -18766, 0, -18765, 0, -18764, 0, -18763, 0, -18762, 0, -18761, 0, -18760, 0, -18759, 0, -18758, 0, -18757, 0, -18756, 0, -18755, 0, -18754, 0, -18753, 0, -18752, 0, -18751, 0, -18750, 0, -18749, 0, -18748, 0, -18747, 0, -18746, 0, -18745, 0, -18744, 0, -18743, 0, -18742, 0, -18741, 0, -18740, 0, -18739, 0, -18738, 0, -18737, 0, -18736, 0, -18735, 0, -18734, 0, -18733, 0, -18731, 0, -18730, 0, -18729, 0, -18728, 0, -18727, 0, -18726, 0, -18725, 0, -18724, 0, -18723, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -18722, 0, -18721, 0, -18720, 0, -18719, 0, -18718, 0, -18717, 0, -18716, 0, -18715, 0, -18714, 0, -18713, 0, -18712, 0, -18711, 0, -18710, 0, -18709, 0, -18708, 0, -18707, 0, -18706, 0, -18705, 0, -18703, 0, -18702, 0, -18701, 0, -18699, 0, -18698, 0, -18697, 0, -18695, 0, -18694, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -18693, 0, -18692, 0, -18691, 0, -18690, 0, -18689, 0, -18686, 0, -18685, 0, -18684, 0, -18682, 0, -18681, 0, -18680, 0, -18679, 0, -18678, 0, -18677, 0, -18676, 0, -18675, 0, -18674, 0, -18673, 0, -18672, 0, -18671, 0, -18670, 0, -18669, 0, -18668, 0, -18667, 0, -18666, 0, -18665, 0, -18664, 0, -18663, 0, -18662, 0, -18661, 0, -18660, 0, -18659, 0, -18658, 0, -18657, 0, -18656, 0, -18655, 0, -18654, 0, -18653, 0, -18652, 0, -18651, 0, -18650, 0, -18649, 0, -18646, 0, -18645, 0, -18643, 0, -18642, 0, -18639, 0, -18638, 0, -18637, 0, -18636, 0, -18635, 0, -18634, 0, -18633, 0, -18630, 0, -18628, 0, -18627, 0, -18626, 0, -18625, 0, -18624, 0, -18623, 0, -18622, 0, -18621, 0, -18619, 0, -18618, 0, -18617, 0, -18615, 0, -18614, 0, -18613, 0, -18611, 0, -18610, 0, -18609, 0, -18608, 0, -18607, 0, -18606, 0, -18605, 0, -18602, 0, -18601, 0, -18600, 0, -18599, 0, -18598, 0, -18597, 0, -18596, 0, -18595, 0, -18594, 0, -18593, 0, -18591, 0, -18590, 0, -18589, 0, -18587, 0, -18586, 0, -18585, 0, -18583, 0, -18582, 0, -18581, 0, -18580, 0, -18579, 0, -18578, 0, -18577, 0, -18574, 0, -18572, 0, -18570, 0, -18569, 0, -18568, 0, -18567, 0, -18566, 0, -18565, 0, -18562, 0, -18561, 0, -18559, 0, -18558, 0, -18557, 0, -18555, 0, -18554, 0, -18553, 0, -18552, 0, -18551, 0, -18550, 0, -18549, 0, -18546, 0, -18541, 0, -18540, 0, -18539, 0, -18534, 0, -18533, 0, -18531, 0, -18530, 0, -18529, 0, -18527, 0, -18526, 0, -18525, 0, -18524, 0, -18523, 0, -18522, 0, -18521, 0, -18518, 0, -18514, 0, -18513, 0, -18512, 0, -18511, 0, -18510, 0, -18509, 0, -18506, 0, -18505, 0, -18503, 0, -18502, 0, -18501, 0, -18500, 0, -18499, 0, -18498, 0, -18497, 0, -18496, 0, -18495, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -18494, 0, -18493, 0, -18492, 0, -18491, 0, -18490, 0, -18488, 0, -18486, 0, -18485, 0, -18484, 0, -18483, 0, -18482, 0, -18481, 0, -18480, 0, -18479, 0, -18478, 0, -18477, 0, -18476, 0, -18475, 0, -18474, 0, -18473, 0, -18472, 0, -18471, 0, -18470, 0, -18469, 0, -18468, 0, -18467, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -18466, 0, -18465, 0, -18464, 0, -18463, 0, -18462, 0, -18461, 0, -18460, 0, -18459, 0, -18458, 0, -18457, 0, -18456, 0, -18455, 0, -18454, 0, -18453, 0, -18450, 0, -18449, 0, -18447, 0, -18446, 0, -18445, 0, -18443, 0, -18442, 0, -18441, 0, -18440, 0, -18439, 0, -18438, 0, -18437, 0, -18434, 0, -18430, 0, -18429, 0, -18428, 0, -18427, 0, -18426, 0, -18422, 0, -18421, 0, -18419, 0, -18418, 0, -18417, 0, -18415, 0, -18414, 0, -18413, 0, -18412, 0, -18411, 0, -18410, 0, -18409, 0, -18406, 0, -18404, 0, -18402, 0, -18401, 0, -18400, 0, -18399, 0, -18398, 0, -18397, 0, -18394, 0, -18393, 0, -18391, 0, -18390, 0, -18389, 0, -18387, 0, -18386, 0, -18385, 0, -18384, 0, -18383, 0, -18382, 0, -18381, 0, -18378, 0, -18374, 0, -18373, 0, -18372, 0, -18371, 0, -18370, 0, -18369, 0, -18367, 0, -18366, 0, -18365, 0, -18363, 0, -18362, 0, -18361, 0, -18360, 0, -18359, 0, -18358, 0, -18357, 0, -18356, 0, -18355, 0, -18354, 0, -18353, 0, -18352, 0, -18350, 0, -18348, 0, -18347, 0, -18346, 0, -18345, 0, -18344, 0, -18343, 0, -18342, 0, -18341, 0, -18338, 0, -18337, 0, -18335, 0, -18334, 0, -18333, 0, -18331, 0, -18330, 0, -18329, 0, -18328, 0, -18327, 0, -18326, 0, -18325, 0, -18322, 0, -18320, 0, -18318, 0, -18317, 0, -18316, 0, -18315, 0, -18314, 0, -18313, 0, -18311, 0, -18310, 0, -18309, 0, -18307, 0, -18306, 0, -18305, 0, -18304, 0, -18303, 0, -18302, 0, -18301, 0, -18300, 0, -18299, 0, -18298, 0, -18297, 0, -18296, 0, -18295, 0, -18294, 0, -18293, 0, -18292, 0, -18290, 0, -18289, 0, -18288, 0, -18287, 0, -18286, 0, -18285, 0, -18284, 0, -18283, 0, -18282, 0, -18281, 0, -18280, 0, -18279, 0, -18278, 0, -18277, 0, -18276, 0, -18275, 0, -18274, 0, -18273, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -18272, 0, -18271, 0, -18270, 0, -18269, 0, -18268, 0, -18267, 0, -18266, 0, -18265, 0, -18263, 0, -18262, 0, -18261, 0, -18260, 0, -18259, 0, -18258, 0, -18257, 0, -18255, 0, -18254, 0, -18253, 0, -18251, 0, -18250, 0, -18249, 0, -18247, 0, -18246, 0, -18245, 0, -18244, 0, -18243, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -18242, 0, -18241, 0, -18238, 0, -18236, 0, -18234, 0, -18233, 0, -18232, 0, -18231, 0, -18230, 0, -18229, 0, -18227, 0, -18226, 0, -18225, 0, -18223, 0, -18222, 0, -18221, 0, -18219, 0, -18218, 0, -18217, 0, -18216, 0, -18215, 0, -18214, 0, -18213, 0, -18212, 0, -18210, 0, -18208, 0, -18206, 0, -18205, 0, -18204, 0, -18203, 0, -18202, 0, -18201, 0, -18198, 0, -18197, 0, -18195, 0, -18194, 0, -18193, 0, -18191, 0, -18190, 0, -18189, 0, -18188, 0, -18187, 0, -18186, 0, -18185, 0, -18182, 0, -18180, 0, -18178, 0, -18177, 0, -18176, 0, -18175, 0, -18174, 0, -18173, 0, -18171, 0, -18170, 0, -18169, 0, -18168, 0, -18167, 0, -18166, 0, -18165, 0, -18164, 0, -18163, 0, -18162, 0, -18161, 0, -18160, 0, -18159, 0, -18158, 0, -18157, 0, -18156, 0, -18155, 0, -18154, 0, -18153, 0, -18151, 0, -18150, 0, -18149, 0, -18148, 0, -18147, 0, -18146, 0, -18145, 0, -18143, 0, -18142, 0, -18141, 0, -18140, 0, -18139, 0, -18138, 0, -18137, 0, -18136, 0, -18135, 0, -18134, 0, -18133, 0, -18132, 0, -18131, 0, -18130, 0, -18129, 0, -18128, 0, -18127, 0, -18126, 0, -18125, 0, -18124, 0, -18123, 0, -18122, 0, -18121, 0, -18120, 0, -18119, 0, -18118, 0, -18117, 0, -18114, 0, -18113, 0, -18111, 0, -18110, 0, -18109, 0, -18107, 0, -18106, 0, -18105, 0, -18104, 0, -18103, 0, -18102, 0, -18101, 0, -18099, 0, -18098, 0, -18096, 0, -18094, 0, -18093, 0, -18092, 0, -18091, 0, -18090, 0, -18089, 0, -18086, 0, -18085, 0, -18083, 0, -18082, 0, -18081, 0, -18079, 0, -18078, 0, -18077, 0, -18076, 0, -18075, 0, -18074, 0, -18073, 0, -18070, 0, -18068, 0, -18066, 0, -18065, 0, -18064, 0, -18063, 0, -18062, 0, -18061, 0, -18058, 0, -18057, 0, -18055, 0, -18054, 0, -18053, 0, -18051, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -18050, 0, -18049, 0, -18048, 0, -18047, 0, -18046, 0, -18045, 0, -18042, 0, -18040, 0, -18037, 0, -18036, 0, -18033, 0, -18032, 0, -18031, 0, -18030, 0, -18029, 0, -18028, 0, -18027, 0, -18026, 0, -18025, 0, -18024, 0, -18023, 0, -18022, 0, -18021, 0, -18020, 0, -18019, 0, -18018, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -18017, 0, -18016, 0, -18015, 0, -18014, 0, -18013, 0, -18012, 0, -18011, 0, -18010, 0, -18009, 0, -18008, 0, -18007, 0, -18006, 0, -18005, 0, -18002, 0, -18001, 0, -17999, 0, -17998, 0, -17997, 0, -17995, 0, -17994, 0, -17993, 0, -17992, 0, -17991, 0, -17990, 0, -17989, 0, -17986, 0, -17984, 0, -17982, 0, -17981, 0, -17980, 0, -17979, 0, -17978, 0, -17977, 0, -17974, 0, -17973, 0, -17971, 0, -17965, 0, -17964, 0, -17963, 0, -17962, 0, -17961, 0, -17958, 0, -17956, 0, -17953, 0, -17952, 0, -17950, 0, -17946, 0, -17945, 0, -17943, 0, -17942, 0, -17941, 0, -17939, 0, -17938, 0, -17937, 0, -17936, 0, -17935, 0, -17934, 0, -17933, 0, -17930, 0, -17925, 0, -17924, 0, -17923, 0, -17922, 0, -17921, 0, -17918, 0, -17917, 0, -17916, 0, -17915, 0, -17914, 0, -17913, 0, -17911, 0, -17910, 0, -17909, 0, -17908, 0, -17907, 0, -17906, 0, -17905, 0, -17904, 0, -17903, 0, -17902, 0, -17901, 0, -17900, 0, -17898, 0, -17897, 0, -17896, 0, -17895, 0, -17894, 0, -17893, 0, -17892, 0, -17891, 0, -17890, 0, -17889, 0, -17888, 0, -17887, 0, -17886, 0, -17885, 0, -17884, 0, -17883, 0, -17882, 0, -17881, 0, -17880, 0, -17879, 0, -17878, 0, -17877, 0, -17876, 0, -17875, 0, -17874, 0, -17873, 0, -17872, 0, -17871, 0, -17870, 0, -17869, 0, -17868, 0, -17867, 0, -17866, 0, -17865, 0, -17862, 0, -17861, 0, -17859, 0, -17858, 0, -17857, 0, -17855, 0, -17853, 0, -17852, 0, -17851, 0, -17850, 0, -17849, 0, -17846, 0, -17844, 0, -17841, 0, -17840, 0, -17839, 0, -17838, 0, -17834, 0, -17833, 0, -17831, 0, -17830, 0, -17829, 0, -17827, 0, -17826, 0, -17825, 0, -17824, 0, -17823, 0, -17822, 0, -17821, 0, -17818, 0, -17814, 0, -17813, 0, -17812, 0, -17811, 0, -17810, 0, -17809, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -17806, 0, -17805, 0, -17803, 0, -17802, 0, -17801, 0, -17799, 0, -17798, 0, -17797, 0, -17796, 0, -17795, 0, -17794, 0, -17793, 0, -17792, 0, -17791, 0, -17790, 0, -17786, 0, -17784, 0, -17783, 0, -17782, 0, -17781, 0, -17779, 0, -17778, 0, -17777, 0, -17776, 0, -17775, 0, -17774, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -17773, 0, -17772, 0, -17771, 0, -17770, 0, -17769, 0, -17768, 0, -17767, 0, -17766, 0, -17765, 0, -17764, 0, -17763, 0, -17762, 0, -17761, 0, -17760, 0, -17759, 0, -17758, 0, -17757, 0, -17756, 0, -17755, 0, -17754, 0, -17753, 0, -17750, 0, -17747, 0, -17746, 0, -17745, 0, -17743, 0, -17741, 0, -17740, 0, -17739, 0, -17738, 0, -17737, 0, -17734, 0, -17732, 0, -17730, 0, -17729, 0, -17728, 0, -17727, 0, -17726, 0, -17725, 0, -17723, 0, -17722, 0, -17721, 0, -17719, 0, -17718, 0, -17717, 0, -17716, 0, -17715, 0, -17714, 0, -17713, 0, -17712, 0, -17711, 0, -17710, 0, -17709, 0, -17708, 0, -17707, 0, -17706, 0, -17705, 0, -17702, 0, -17701, 0, -17700, 0, -17699, 0, -17698, 0, -17697, 0, -17696, 0, -17695, 0, -17694, 0, -17693, 0, -17692, 0, -17691, 0, -17690, 0, -17689, 0, -17688, 0, -17687, 0, -17686, 0, -17685, 0, -17684, 0, -17683, 0, -17682, 0, -17681, 0, -17680, 0, -17679, 0, -17678, 0, -17677, 0, -17676, 0, -17675, 0, -17674, 0, -17673, 0, -17672, 0, -17671, 0, -17670, 0, -17669, 0, -17667, 0, -17666, 0, -17665, 0, -17663, 0, -17662, 0, -17661, 0, -17659, 0, -17658, 0, -17657, 0, -17656, 0, -17655, 0, -17654, 0, -17653, 0, -17652, 0, -17650, 0, -17648, 0, -17646, 0, -17645, 0, -17644, 0, -17643, 0, -17642, 0, -17641, 0, -17639, 0, -17638, 0, -17637, 0, -17635, 0, -17634, 0, -17633, 0, -17631, 0, -17630, 0, -17629, 0, -17628, 0, -17627, 0, -17626, 0, -17625, 0, -17624, 0, -17622, 0, -17620, 0, -17619, 0, -17618, 0, -17617, 0, -17616, 0, -17615, 0, -17614, 0, -17613, 0, -17609, 0, -17607, 0, -17606, 0, -17601, 0, -17600, 0, -17599, 0, -17598, 0, -17597, 0, -17594, 0, -17592, 0, -17590, 0, -17589, 0, -17588, 0, -17586, 0, -17583, 0, -17582, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -17581, 0, -17579, 0, -17578, 0, -17577, 0, -17575, 0, -17574, 0, -17573, 0, -17572, 0, -17571, 0, -17570, 0, -17569, 0, -17568, 0, -17566, 0, -17564, 0, -17563, 0, -17562, 0, -17561, 0, -17560, 0, -17559, 0, -17558, 0, -17557, 0, -17555, 0, -17554, 0, -17553, 0, -17552, 0, -17551, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -17550, 0, -17549, 0, -17548, 0, -17547, 0, -17546, 0, -17545, 0, -17544, 0, -17543, 0, -17542, 0, -17541, 0, -17540, 0, -17539, 0, -17538, 0, -17537, 0, -17536, 0, -17535, 0, -17534, 0, -17533, 0, -17532, 0, -17531, 0, -17530, 0, -17529, 0, -17527, 0, -17526, 0, -17525, 0, -17523, 0, -17522, 0, -17521, 0, -17519, 0, -17518, 0, -17517, 0, -17516, 0, -17515, 0, -17514, 0, -17513, 0, -17512, 0, -17511, 0, -17510, 0, -17509, 0, -17508, 0, -17507, 0, -17506, 0, -17505, 0, -17504, 0, -17503, 0, -17502, 0, -17501, 0, -17499, 0, -17498, 0, -17497, 0, -17495, 0, -17494, 0, -17493, 0, -17491, 0, -17490, 0, -17489, 0, -17488, 0, -17487, 0, -17486, 0, -17485, 0, -17483, 0, -17482, 0, -17480, 0, -17479, 0, -17478, 0, -17477, 0, -17476, 0, -17475, 0, -17474, 0, -17473, 0, -17471, 0, -17470, 0, -17469, 0, -17467, 0, -17466, 0, -17465, 0, -17463, 0, -17462, 0, -17461, 0, -17460, 0, -17459, 0, -17458, 0, -17457, 0, -17455, 0, -17454, 0, -17452, 0, -17451, 0, -17450, 0, -17449, 0, -17448, 0, -17447, 0, -17446, 0, -17445, 0, -17444, 0, -17443, 0, -17442, 0, -17441, 0, -17440, 0, -17439, 0, -17438, 0, -17437, 0, -17436, 0, -17435, 0, -17434, 0, -17433, 0, -17432, 0, -17431, 0, -17430, 0, -17429, 0, -17428, 0, -17427, 0, -17426, 0, -17425, 0, -17424, 0, -17423, 0, -17422, 0, -17421, 0, -17420, 0, -17419, 0, -17418, 0, -17417, 0, -17414, 0, -17413, 0, -17411, 0, -17410, 0, -17407, 0, -17405, 0, -17404, 0, -17403, 0, -17402, 0, -17401, 0, -17398, 0, -17394, 0, -17392, 0, -17390, 0, -17389, 0, -17383, 0, -17382, 0, -17376, 0, -17375, 0, -17374, 0, -17373, 0, -17370, 0, -17368, 0, -17366, 0, -17365, 0, -17364, 0, -17362, 0, -17361, 0, -17358, 0, -17357, 0, -17355, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -17354, 0, -17353, 0, -17351, 0, -17350, 0, -17349, 0, -17348, 0, -17347, 0, -17346, 0, -17345, 0, -17342, 0, -17338, 0, -17337, 0, -17336, 0, -17334, 0, -17333, 0, -17330, 0, -17329, 0, -17327, 0, -17326, 0, -17325, 0, -17324, 0, -17323, 0, -17322, 0, -17321, 0, -17320, 0, -17319, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -17318, 0, -17317, 0, -17316, 0, -17314, 0, -17313, 0, -17312, 0, -17311, 0, -17310, 0, -17309, 0, -17308, 0, -17307, 0, -17306, 0, -17305, 0, -17304, 0, -17303, 0, -17302, 0, -17301, 0, -17300, 0, -17299, 0, -17298, 0, -17297, 0, -17296, 0, -17295, 0, -17294, 0, -17293, 0, -17292, 0, -17291, 0, -17290, 0, -17289, 0, -17288, 0, -17287, 0, -17286, 0, -17285, 0, -17284, 0, -17283, 0, -17282, 0, -17281, 0, -17280, 0, -17279, 0, -17278, 0, -17277, 0, -17274, 0, -17273, 0, -17271, 0, -17270, 0, -17267, 0, -17265, 0, -17264, 0, -17263, 0, -17262, 0, -17261, 0, -17258, 0, -17256, 0, -17253, 0, -17252, 0, -17251, 0, -17250, 0, -17249, 0, -17246, 0, -17245, 0, -17243, 0, -17242, 0, -17239, 0, -17238, 0, -17237, 0, -17236, 0, -17235, 0, -17234, 0, -17233, 0, -17230, 0, -17226, 0, -17225, 0, -17224, 0, -17223, 0, -17222, 0, -17221, 0, -17218, 0, -17217, 0, -17215, 0, -17214, 0, -17213, 0, -17211, 0, -17210, 0, -17209, 0, -17208, 0, -17207, 0, -17206, 0, -17205, 0, -17204, 0, -17202, 0, -17198, 0, -17197, 0, -17196, 0, -17194, 0, -17193, 0, -17191, 0, -17190, 0, -17189, 0, -17187, 0, -17186, 0, -17185, 0, -17184, 0, -17183, 0, -17182, 0, -17181, 0, -17180, 0, -17179, 0, -17178, 0, -17177, 0, -17176, 0, -17175, 0, -17174, 0, -17173, 0, -17172, 0, -17171, 0, -17170, 0, -17169, 0, -17168, 0, -17167, 0, -17166, 0, -17165, 0, -17161, 0, -17159, 0, -17158, 0, -17157, 0, -17155, 0, -17154, 0, -17153, 0, -17152, 0, -17151, 0, -17150, 0, -17149, 0, -17146, 0, -17144, 0, -17142, 0, -17141, 0, -17140, 0, -17139, 0, -17138, 0, -17137, 0, -17135, 0, -17134, 0, -17133, 0, -17131, 0, -17130, 0, -17129, 0, -17128, 0, -17127, 0, -17126, 0, -17125, 0, -17124, 0, -17123, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -17122, 0, -17121, 0, -17120, 0, -17119, 0, -17118, 0, -17117, 0, -17115, 0, -17114, 0, -17113, 0, -17112, 0, -17111, 0, -17110, 0, -17109, 0, -17107, 0, -17106, 0, -17105, 0, -17104, 0, -17103, 0, -17102, 0, -17101, 0, -17100, 0, -17099, 0, -17098, 0, -17097, 0, -17096, 0, -17095, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -17094, 0, -17093, 0, -17092, 0, -17091, 0, -17090, 0, -17089, 0, -17087, 0, -17086, 0, -17085, 0, -17084, 0, -17083, 0, -17082, 0, -17081, 0, -17078, 0, -17077, 0, -17075, 0, -17074, 0, -17073, 0, -17071, 0, -17070, 0, -17069, 0, -17068, 0, -17067, 0, -17066, 0, -17065, 0, -17062, 0, -17061, 0, -17060, 0, -17059, 0, -17058, 0, -17057, 0, -17056, 0, -17055, 0, -17054, 0, -17053, 0, -17051, 0, -17050, 0, -17049, 0, -17047, 0, -17046, 0, -17045, 0, -17044, 0, -17043, 0, -17042, 0, -17041, 0, -17040, 0, -17039, 0, -17038, 0, -17037, 0, -17036, 0, -17035, 0, -17034, 0, -17033, 0, -17032, 0, -17031, 0, -17030, 0, -17029, 0, -17028, 0, -17027, 0, -17026, 0, -17025, 0, -17022, 0, -17021, 0, -17019, 0, -17018, 0, -17013, 0, -17012, 0, -17011, 0, -17010, 0, -17009, 0, -17006, 0, -17004, 0, -17002, 0, -17001, 0, -17e3, 0, -16997, 0, -16995, 0, -16994, 0, -16993, 0, -16992, 0, -16991, 0, -16990, 0, -16989, 0, -16987, 0, -16986, 0, -16985, 0, -16984, 0, -16983, 0, -16982, 0, -16981, 0, -16980, 0, -16979, 0, -16978, 0, -16977, 0, -16975, 0, -16974, 0, -16973, 0, -16972, 0, -16971, 0, -16970, 0, -16969, 0, -16967, 0, -16966, 0, -16965, 0, -16964, 0, -16963, 0, -16962, 0, -16961, 0, -16960, 0, -16959, 0, -16958, 0, -16957, 0, -16956, 0, -16955, 0, -16954, 0, -16953, 0, -16952, 0, -16951, 0, -16950, 0, -16949, 0, -16948, 0, -16947, 0, -16946, 0, -16945, 0, -16944, 0, -16943, 0, -16942, 0, -16941, 0, -16938, 0, -16937, 0, -16935, 0, -16934, 0, -16933, 0, -16931, 0, -16930, 0, -16929, 0, -16928, 0, -16927, 0, -16926, 0, -16925, 0, -16924, 0, -16923, 0, -16922, 0, -16921, 0, -16920, 0, -16918, 0, -16917, 0, -16916, 0, -16915, 0, -16914, 0, -16913, 0, -16911, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -16910, 0, -16909, 0, -16907, 0, -16906, 0, -16905, 0, -16903, 0, -16902, 0, -16901, 0, -16900, 0, -16899, 0, -16898, 0, -16897, 0, -16895, 0, -16894, 0, -16892, 0, -16890, 0, -16889, 0, -16888, 0, -16887, 0, -16886, 0, -16885, 0, -16882, 0, -16881, 0, -16879, 0, -16878, 0, -16877, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -16875, 0, -16874, 0, -16873, 0, -16872, 0, -16871, 0, -16870, 0, -16869, 0, -16866, 0, -16864, 0, -16863, 0, -16862, 0, -16861, 0, -16860, 0, -16859, 0, -16858, 0, -16857, 0, -16856, 0, -16855, 0, -16854, 0, -16853, 0, -16852, 0, -16851, 0, -16850, 0, -16849, 0, -16848, 0, -16847, 0, -16846, 0, -16845, 0, -16844, 0, -16843, 0, -16842, 0, -16841, 0, -16840, 0, -16839, 0, -16838, 0, -16837, 0, -16836, 0, -16835, 0, -16834, 0, -16833, 0, -16832, 0, -16831, 0, -16830, 0, -16829, 0, -16826, 0, -16825, 0, -16823, 0, -16822, 0, -16821, 0, -16819, 0, -16817, 0, -16816, 0, -16815, 0, -16814, 0, -16813, 0, -16810, 0, -16808, 0, -16804, 0, -16803, 0, -16802, 0, -16801, 0, -16798, 0, -16797, 0, -16795, 0, -16794, 0, -16793, 0, -16791, 0, -16789, 0, -16788, 0, -16787, 0, -16786, 0, -16785, 0, -16782, 0, -16778, 0, -16777, 0, -16776, 0, -16775, 0, -16774, 0, -16770, 0, -16769, 0, -16767, 0, -16766, 0, -16765, 0, -16763, 0, -16762, 0, -16761, 0, -16760, 0, -16759, 0, -16758, 0, -16757, 0, -16754, 0, -16750, 0, -16749, 0, -16748, 0, -16747, 0, -16746, 0, -16745, 0, -16742, 0, -16741, 0, -16740, 0, -16739, 0, -16738, 0, -16737, 0, -16736, 0, -16735, 0, -16734, 0, -16733, 0, -16732, 0, -16731, 0, -16730, 0, -16729, 0, -16727, 0, -16726, 0, -16725, 0, -16724, 0, -16723, 0, -16722, 0, -16721, 0, -16720, 0, -16719, 0, -16718, 0, -16717, 0, -16716, 0, -16715, 0, -16714, 0, -16713, 0, -16712, 0, -16711, 0, -16710, 0, -16709, 0, -16708, 0, -16707, 0, -16706, 0, -16705, 0, -16704, 0, -16703, 0, -16702, 0, -16701, 0, -16700, 0, -16699, 0, -16698, 0, -16697, 0, -16696, 0, -16695, 0, -16694, 0, -16693, 0, -16692, 0, -16691, 0, -16690, 0, -16689, 0, -16686, 0, -16685, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -16683, 0, -16682, 0, -16679, 0, -16678, 0, -16677, 0, -16676, 0, -16675, 0, -16674, 0, -16673, 0, -16671, 0, -16670, 0, -16666, 0, -16665, 0, -16664, 0, -16663, 0, -16662, 0, -16661, 0, -16659, 0, -16658, 0, -16657, 0, -16656, 0, -16655, 0, -16654, 0, -16653, 0, -16652, 0, -16651, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -16650, 0, -16649, 0, -16648, 0, -16647, 0, -16646, 0, -16645, 0, -16644, 0, -16643, 0, -16642, 0, -16641, 0, -16640, 0, -16638, 0, -16637, 0, -16636, 0, -16635, 0, -16634, 0, -16633, 0, -16630, 0, -16629, 0, -16628, 0, -16627, 0, -16626, 0, -16625, 0, -16624, 0, -16623, 0, -16622, 0, -16621, 0, -16620, 0, -16619, 0, -16618, 0, -16617, 0, -16614, 0, -16610, 0, -16609, 0, -16608, 0, -16607, 0, -16606, 0, -16605, 0, -16604, 0, -16603, 0, -16602, 0, -16601, 0, -16600, 0, -16599, 0, -16598, 0, -16597, 0, -16596, 0, -16595, 0, -16594, 0, -16593, 0, -16592, 0, -16591, 0, -16590, 0, -16589, 0, -16588, 0, -16587, 0, -16586, 0, -16585, 0, -16584, 0, -16583, 0, -16582, 0, -16581, 0, -16580, 0, -16579, 0, -16578, 0, -16577, 0, -16574, 0, -16573, 0, -16571, 0, -16570, 0, -16569, 0, -16567, 0, -16566, 0, -16565, 0, -16564, 0, -16563, 0, -16562, 0, -16561, 0, -16558, 0, -16557, 0, -16556, 0, -16554, 0, -16553, 0, -16552, 0, -16551, 0, -16550, 0, -16549, 0, -16548, 0, -16547, 0, -16546, 0, -16545, 0, -16544, 0, -16543, 0, -16542, 0, -16541, 0, -16540, 0, -16539, 0, -16538, 0, -16537, 0, -16536, 0, -16535, 0, -16534, 0, -16533, 0, -16532, 0, -16531, 0, -16530, 0, -16529, 0, -16528, 0, -16527, 0, -16526, 0, -16525, 0, -16524, 0, -16523, 0, -16522, 0, -16521, 0, -16520, 0, -16519, 0, -16518, 0, -16517, 0, -16516, 0, -16515, 0, -16514, 0, -16513, 0, -16512, 0, -16511, 0, -16510, 0, -16509, 0, -16508, 0, -16507, 0, -16506, 0, -16505, 0, -16504, 0, -16503, 0, -16502, 0, -16501, 0, -16500, 0, -16499, 0, -16498, 0, -16497, 0, -16496, 0, -16495, 0, -16494, 0, -16493, 0, -16491, 0, -16490, 0, -16489, 0, -16488, 0, -16487, 0, -16486, 0, -16485, 0, -16484, 0, -16483, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -16482, 0, -16481, 0, -16480, 0, -16479, 0, -16478, 0, -16477, 0, -16476, 0, -16475, 0, -16474, 0, -16473, 0, -16472, 0, -16471, 0, -16470, 0, -16469, 0, -16468, 0, -16467, 0, -16466, 0, -16465, 0, -16463, 0, -16462, 0, -16461, 0, -16460, 0, -16459, 0, -16458, 0, -16457, 0, -16456, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -16455, 0, -16454, 0, -16453, 0, -16452, 0, -16451, 0, -16450, 0, -16449, 0, -16448, 0, -16447, 0, -16446, 0, -16445, 0, -16444, 0, -16442, 0, -16441, 0, -16440, 0, -16439, 0, -16438, 0, -16437, 0, -16434, 0, -16433, 0, -16431, 0, -16430, 0, -16429, 0, -16427, 0, -16426, 0, -16425, 0, -16424, 0, -16423, 0, -16422, 0, -16421, 0, -16419, 0, -16418, 0, -16416, 0, -16414, 0, -16413, 0, -16412, 0, -16411, 0, -16410, 0, -16409, 0, -16408, 0, -16407, 0, -16406, 0, -16405, 0, -16404, 0, -16403, 0, -16402, 0, -16401, 0, -16400, 0, -16399, 0, -16398, 0, -16397, 0, -16396, 0, -16395, 0, -16394, 0, -16393, 0, -16392, 0, -16391, 0, -16390, 0, -16389, 0, -16388, 0, -16387, 0, -16386, 0, -16385, 0, -16384, 0, -16383, 0, -16382, 0, -16381, 0, -16380, 0, -16379, 0, -16378, 0, -16377, 0, -16376, 0, -16375, 0, -16374, 0, -16373, 0, -16372, 0, -16371, 0, -16370, 0, -16369, 0, -16368, 0, -16367, 0, -16366, 0, -16365, 0, -16364, 0, -16363, 0, -16362, 0, -16361, 0, -16360, 0, -16359, 0, -16358, 0, -16357, 0, -16356, 0, -16355, 0, -16354, 0, -16353, 0, -16352, 0, -16351, 0, -16350, 0, -16349, 0, -16348, 0, -16347, 0, -16346, 0, -16345, 0, -16344, 0, -16343, 0, -16342, 0, -16341, 0, -16340, 0, -16339, 0, -16338, 0, -16337, 0, -16336, 0, -16335, 0, -16334, 0, -16333, 0, -16332, 0, -16331, 0, -16330, 0, -16329, 0, -16328, 0, -16327, 0, -16326, 0, -16325, 0, -16323, 0, -16322, 0, -16321, 0, -16320, 0, -16319, 0, -16318, 0, -16317, 0, -16316, 0, -16315, 0, -16314, 0, -16313, 0, -16312, 0, -16311, 0, -16310, 0, -16309, 0, -16308, 0, -16307, 0, -16306, 0, -16305, 0, -16304, 0, -16302, 0, -16301, 0, -16300, 0, -16299, 0, -16298, 0, -16297, 0, -16295, 0, -16294, 0, -16293, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -16291, 0, -16290, 0, -16289, 0, -16287, 0, -16286, 0, -16285, 0, -16284, 0, -16283, 0, -16282, 0, -16281, 0, -16278, 0, -16277, 0, -16276, 0, -16275, 0, -16274, 0, -16273, 0, -16272, 0, -16271, 0, -16270, 0, -16269, 0, -16268, 0, -16267, 0, -16266, 0, -16265, 0, -16264, 0, -16263, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -16262, 0, -16261, 0, -16260, 0, -16259, 0, -16258, 0, -16257, 0, -16256, 0, -16255, 0, -16254, 0, -16253, 0, -16252, 0, -16251, 0, -16250, 0, -16249, 0, -16248, 0, -16247, 0, -16246, 0, -16245, 0, -16244, 0, -16243, 0, -16242, 0, -16241, 0, -16238, 0, -16237, 0, -16235, 0, -16234, 0, -16233, 0, -16231, 0, -16230, 0, -16229, 0, -16228, 0, -16227, 0, -16226, 0, -16225, 0, -16222, 0, -16220, 0, -16218, 0, -16217, 0, -16216, 0, -16215, 0, -16214, 0, -16213, 0, -16210, 0, -16207, 0, -16206, 0, -16201, 0, -16200, 0, -16199, 0, -16198, 0, -16197, 0, -16194, 0, -16190, 0, -16189, 0, -16188, 0, -16186, 0, -16185, 0, -16182, 0, -16181, 0, -16179, 0, -16178, 0, -16177, 0, -16175, 0, -16174, 0, -16173, 0, -16172, 0, -16171, 0, -16170, 0, -16169, 0, -16166, 0, -16162, 0, -16161, 0, -16160, 0, -16159, 0, -16158, 0, -16157, 0, -16154, 0, -16153, 0, -16151, 0, -16150, 0, -16149, 0, -16147, 0, -16146, 0, -16145, 0, -16144, 0, -16143, 0, -16142, 0, -16141, 0, -16138, 0, -16136, 0, -16134, 0, -16133, 0, -16132, 0, -16131, 0, -16130, 0, -16129, 0, -16127, 0, -16126, 0, -16125, 0, -16123, 0, -16122, 0, -16121, 0, -16119, 0, -16118, 0, -16117, 0, -16116, 0, -16115, 0, -16114, 0, -16113, 0, -16111, 0, -16110, 0, -16109, 0, -16108, 0, -16106, 0, -16105, 0, -16104, 0, -16103, 0, -16102, 0, -16101, 0, -16095, 0, -16094, 0, -16091, 0, -16088, 0, -16087, 0, -16086, 0, -16085, 0, -16082, 0, -16078, 0, -16077, 0, -16076, 0, -16075, 0, -16073, 0, -16070, 0, -16069, 0, -16067, 0, -16066, 0, -16065, 0, -16063, 0, -16062, 0, -16061, 0, -16060, 0, -16059, 0, -16058, 0, -16057, 0, -16054, 0, -16050, 0, -16049, 0, -16048, 0, -16047, 0, -16046, 0, -16045, 0, -16042, 0, -16041, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -16039, 0, -16038, 0, -16037, 0, -16035, 0, -16034, 0, -16033, 0, -16032, 0, -16031, 0, -16030, 0, -16029, 0, -16026, 0, -16022, 0, -16021, 0, -16020, 0, -16019, 0, -16018, 0, -16017, 0, -16015, 0, -16014, 0, -16013, 0, -16011, 0, -16010, 0, -16009, 0, -16007, 0, -16006, 0, -16005, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -16004, 0, -16003, 0, -16002, 0, -16001, 0, -16e3, 0, -15999, 0, -15998, 0, -15997, 0, -15996, 0, -15994, 0, -15993, 0, -15992, 0, -15991, 0, -15990, 0, -15989, 0, -15985, 0, -15983, 0, -15982, 0, -15981, 0, -15979, 0, -15977, 0, -15976, 0, -15975, 0, -15974, 0, -15973, 0, -15970, 0, -15968, 0, -15966, 0, -15965, 0, -15964, 0, -15962, 0, -15961, 0, -15958, 0, -15957, 0, -15955, 0, -15954, 0, -15953, 0, -15951, 0, -15950, 0, -15949, 0, -15948, 0, -15947, 0, -15946, 0, -15945, 0, -15944, 0, -15943, 0, -15942, 0, -15941, 0, -15940, 0, -15938, 0, -15937, 0, -15936, 0, -15935, 0, -15934, 0, -15933, 0, -15931, 0, -15930, 0, -15929, 0, -15927, 0, -15926, 0, -15925, 0, -15923, 0, -15922, 0, -15921, 0, -15920, 0, -15919, 0, -15918, 0, -15917, 0, -15915, 0, -15914, 0, -15911, 0, -15910, 0, -15909, 0, -15908, 0, -15907, 0, -15906, 0, -15905, 0, -15903, 0, -15902, 0, -15901, 0, -15899, 0, -15898, 0, -15897, 0, -15895, 0, -15894, 0, -15893, 0, -15892, 0, -15891, 0, -15890, 0, -15889, 0, -15886, 0, -15884, 0, -15883, 0, -15882, 0, -15881, 0, -15880, 0, -15879, 0, -15878, 0, -15877, 0, -15874, 0, -15873, 0, -15871, 0, -15870, 0, -15869, 0, -15867, 0, -15866, 0, -15865, 0, -15864, 0, -15863, 0, -15862, 0, -15861, 0, -15858, 0, -15856, 0, -15854, 0, -15853, 0, -15852, 0, -15851, 0, -15850, 0, -15849, 0, -15846, 0, -15845, 0, -15843, 0, -15842, 0, -15839, 0, -15838, 0, -15837, 0, -15836, 0, -15835, 0, -15834, 0, -15833, 0, -15830, 0, -15828, 0, -15826, 0, -15824, 0, -15821, 0, -15819, 0, -15818, 0, -15817, 0, -15816, 0, -15815, 0, -15814, 0, -15813, 0, -15812, 0, -15811, 0, -15810, 0, -15809, 0, -15808, 0, -15807, 0, -15806, 0, -15805, 0, -15804, 0, -15803, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -15802, 0, -15801, 0, -15799, 0, -15798, 0, -15797, 0, -15796, 0, -15795, 0, -15794, 0, -15793, 0, -15790, 0, -15789, 0, -15787, 0, -15786, 0, -15785, 0, -15783, 0, -15782, 0, -15781, 0, -15780, 0, -15779, 0, -15778, 0, -15777, 0, -15775, 0, -15774, 0, -15773, 0, -15772, 0, -15770, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -15769, 0, -15768, 0, -15767, 0, -15766, 0, -15765, 0, -15762, 0, -15761, 0, -15759, 0, -15758, 0, -15757, 0, -15755, 0, -15754, 0, -15753, 0, -15752, 0, -15751, 0, -15750, 0, -15749, 0, -15746, 0, -15744, 0, -15742, 0, -15741, 0, -15740, 0, -15739, 0, -15738, 0, -15737, 0, -15734, 0, -15733, 0, -15732, 0, -15731, 0, -15730, 0, -15729, 0, -15727, 0, -15726, 0, -15725, 0, -15724, 0, -15723, 0, -15722, 0, -15721, 0, -15719, 0, -15718, 0, -15716, 0, -15714, 0, -15713, 0, -15712, 0, -15711, 0, -15710, 0, -15709, 0, -15706, 0, -15705, 0, -15703, 0, -15702, 0, -15701, 0, -15698, 0, -15697, 0, -15696, 0, -15695, 0, -15694, 0, -15693, 0, -15690, 0, -15688, 0, -15686, 0, -15685, 0, -15684, 0, -15683, 0, -15682, 0, -15681, 0, -15680, 0, -15679, 0, -15678, 0, -15677, 0, -15676, 0, -15675, 0, -15674, 0, -15673, 0, -15672, 0, -15671, 0, -15670, 0, -15669, 0, -15668, 0, -15667, 0, -15666, 0, -15665, 0, -15664, 0, -15663, 0, -15662, 0, -15661, 0, -15660, 0, -15659, 0, -15658, 0, -15657, 0, -15656, 0, -15655, 0, -15654, 0, -15653, 0, -15650, 0, -15649, 0, -15647, 0, -15646, 0, -15643, 0, -15642, 0, -15641, 0, -15640, 0, -15639, 0, -15638, 0, -15634, 0, -15632, 0, -15630, 0, -15629, 0, -15628, 0, -15627, 0, -15625, 0, -15622, 0, -15619, 0, -15618, 0, -15617, 0, -15615, 0, -15614, 0, -15613, 0, -15612, 0, -15611, 0, -15610, 0, -15609, 0, -15606, 0, -15605, 0, -15602, 0, -15601, 0, -15600, 0, -15599, 0, -15598, 0, -15594, 0, -15593, 0, -15591, 0, -15590, 0, -15589, 0, -15587, 0, -15586, 0, -15585, 0, -15584, 0, -15583, 0, -15582, 0, -15581, 0, -15578, 0, -15577, 0, -15574, 0, -15573, 0, -15572, 0, -15571, 0, -15570, 0, -15569, 0, -15568, 0, -15567, 0, -15566, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -15565, 0, -15564, 0, -15563, 0, -15562, 0, -15561, 0, -15560, 0, -15559, 0, -15558, 0, -15557, 0, -15556, 0, -15555, 0, -15554, 0, -15553, 0, -15552, 0, -15551, 0, -15550, 0, -15549, 0, -15548, 0, -15546, 0, -15545, 0, -15544, 0, -15543, 0, -15542, 0, -15541, 0, -15540, 0, -15539, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -15538, 0, -15537, 0, -15536, 0, -15535, 0, -15534, 0, -15533, 0, -15532, 0, -15531, 0, -15530, 0, -15529, 0, -15528, 0, -15527, 0, -15526, 0, -15525, 0, -15524, 0, -15523, 0, -15522, 0, -15521, 0, -15520, 0, -15519, 0, -15518, 0, -15517, 0, -15516, 0, -15515, 0, -15514, 0, -15513, 0, -15510, 0, -15509, 0, -15507, 0, -15506, 0, -15505, 0, -15503, 0, -15501, 0, -15500, 0, -15499, 0, -15498, 0, -15497, 0, -15494, 0, -15493, 0, -15490, 0, -15489, 0, -15488, 0, -15487, 0, -15486, 0, -15485, 0, -15483, 0, -15482, 0, -15481, 0, -15479, 0, -15478, 0, -15477, 0, -15475, 0, -15474, 0, -15473, 0, -15472, 0, -15471, 0, -15470, 0, -15469, 0, -15468, 0, -15467, 0, -15466, 0, -15465, 0, -15464, 0, -15463, 0, -15462, 0, -15461, 0, -15460, 0, -15459, 0, -15458, 0, -15457, 0, -15456, 0, -15455, 0, -15454, 0, -15453, 0, -15452, 0, -15451, 0, -15450, 0, -15449, 0, -15448, 0, -15447, 0, -15446, 0, -15445, 0, -15444, 0, -15443, 0, -15442, 0, -15441, 0, -15440, 0, -15439, 0, -15438, 0, -15437, 0, -15436, 0, -15435, 0, -15434, 0, -15433, 0, -15432, 0, -15431, 0, -15430, 0, -15429, 0, -15428, 0, -15427, 0, -15426, 0, -15425, 0, -15423, 0, -15422, 0, -15421, 0, -15420, 0, -15419, 0, -15418, 0, -15417, 0, -15416, 0, -15415, 0, -15414, 0, -15413, 0, -15412, 0, -15411, 0, -15410, 0, -15409, 0, -15408, 0, -15407, 0, -15406, 0, -15405, 0, -15404, 0, -15403, 0, -15402, 0, -15401, 0, -15398, 0, -15397, 0, -15395, 0, -15394, 0, -15391, 0, -15389, 0, -15388, 0, -15387, 0, -15386, 0, -15385, 0, -15382, 0, -15381, 0, -15380, 0, -15378, 0, -15377, 0, -15376, 0, -15375, 0, -15374, 0, -15373, 0, -15370, 0, -15369, 0, -15367, 0, -15366, 0, -15365, 0, -15364, 0, -15363, 0, -15362, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -15361, 0, -15360, 0, -15359, 0, -15358, 0, -15357, 0, -15356, 0, -15355, 0, -15354, 0, -15353, 0, -15351, 0, -15350, 0, -15349, 0, -15348, 0, -15347, 0, -15346, 0, -15345, 0, -15343, 0, -15342, 0, -15341, 0, -15340, 0, -15339, 0, -15338, 0, -15337, 0, -15336, 0, -15335, 0, -15334, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -15333, 0, -15332, 0, -15331, 0, -15330, 0, -15329, 0, -15328, 0, -15327, 0, -15326, 0, -15325, 0, -15323, 0, -15322, 0, -15321, 0, -15320, 0, -15319, 0, -15318, 0, -15317, 0, -15315, 0, -15314, 0, -15313, 0, -15311, 0, -15310, 0, -15309, 0, -15307, 0, -15306, 0, -15305, 0, -15304, 0, -15303, 0, -15302, 0, -15301, 0, -15298, 0, -15297, 0, -15296, 0, -15295, 0, -15294, 0, -15293, 0, -15292, 0, -15291, 0, -15290, 0, -15289, 0, -15287, 0, -15286, 0, -15285, 0, -15284, 0, -15283, 0, -15282, 0, -15281, 0, -15280, 0, -15279, 0, -15278, 0, -15277, 0, -15276, 0, -15275, 0, -15274, 0, -15273, 0, -15272, 0, -15271, 0, -15270, 0, -15269, 0, -15268, 0, -15267, 0, -15266, 0, -15265, 0, -15264, 0, -15263, 0, -15262, 0, -15261, 0, -15258, 0, -15257, 0, -15255, 0, -15254, 0, -15253, 0, -15251, 0, -15250, 0, -15249, 0, -15248, 0, -15247, 0, -15246, 0, -15245, 0, -15242, 0, -15241, 0, -15240, 0, -15238, 0, -15237, 0, -15236, 0, -15235, 0, -15234, 0, -15233, 0, -15231, 0, -15230, 0, -15229, 0, -15228, 0, -15227, 0, -15226, 0, -15225, 0, -15224, 0, -15223, 0, -15222, 0, -15221, 0, -15220, 0, -15219, 0, -15218, 0, -15217, 0, -15216, 0, -15215, 0, -15214, 0, -15213, 0, -15211, 0, -15210, 0, -15209, 0, -15208, 0, -15207, 0, -15206, 0, -15205, 0, -15203, 0, -15202, 0, -15201, 0, -15200, 0, -15199, 0, -15198, 0, -15197, 0, -15196, 0, -15195, 0, -15194, 0, -15193, 0, -15192, 0, -15191, 0, -15190, 0, -15189, 0, -15188, 0, -15187, 0, -15186, 0, -15185, 0, -15184, 0, -15183, 0, -15182, 0, -15181, 0, -15180, 0, -15179, 0, -15178, 0, -15177, 0, -15175, 0, -15174, 0, -15173, 0, -15171, 0, -15170, 0, -15169, 0, -15168, 0, -15167, 0, -15166, 0, -15165, 0, -15164, 0, -15163, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -15162, 0, -15161, 0, -15160, 0, -15159, 0, -15158, 0, -15157, 0, -15156, 0, -15155, 0, -15154, 0, -15153, 0, -15152, 0, -15151, 0, -15150, 0, -15149, 0, -15148, 0, -15147, 0, -15146, 0, -15145, 0, -15144, 0, -15143, 0, -15142, 0, -15141, 0, -15140, 0, -15139, 0, -15138, 0, -15137, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -15136, 0, -15135, 0, -15134, 0, -15133, 0, -15132, 0, -15131, 0, -15130, 0, -15129, 0, -15128, 0, -15126, 0, -15125, 0, -15124, 0, -15123, 0, -15122, 0, -15121, 0, -15118, 0, -15117, 0, -15115, 0, -15114, 0, -15113, 0, -15111, 0, -15109, 0, -15108, 0, -15107, 0, -15106, 0, -15102, 0, -15101, 0, -15100, 0, -15099, 0, -15098, 0, -15097, 0, -15096, 0, -15095, 0, -15094, 0, -15093, 0, -15091, 0, -15090, 0, -15089, 0, -15087, 0, -15086, 0, -15085, 0, -15083, 0, -15082, 0, -15081, 0, -15080, 0, -15079, 0, -15078, 0, -15077, 0, -15075, 0, -15074, 0, -15073, 0, -15072, 0, -15071, 0, -15070, 0, -15069, 0, -15068, 0, -15067, 0, -15066, 0, -15065, 0, -15062, 0, -15061, 0, -15059, 0, -15058, 0, -15057, 0, -15055, 0, -15054, 0, -15053, 0, -15052, 0, -15051, 0, -15050, 0, -15049, 0, -15046, 0, -15044, 0, -15042, 0, -15041, 0, -15040, 0, -15039, 0, -15038, 0, -15037, 0, -15034, 0, -15033, 0, -15029, 0, -15025, 0, -15024, 0, -15023, 0, -15022, 0, -15018, 0, -15014, 0, -15013, 0, -15012, 0, -15009, 0, -15006, 0, -15005, 0, -15003, 0, -15002, 0, -15001, 0, -14999, 0, -14998, 0, -14997, 0, -14996, 0, -14995, 0, -14994, 0, -14993, 0, -14990, 0, -14986, 0, -14985, 0, -14984, 0, -14983, 0, -14982, 0, -14981, 0, -14978, 0, -14977, 0, -14975, 0, -14974, 0, -14973, 0, -14971, 0, -14970, 0, -14968, 0, -14967, 0, -14966, 0, -14965, 0, -14962, 0, -14960, 0, -14958, 0, -14957, 0, -14956, 0, -14954, 0, -14951, 0, -14950, 0, -14949, 0, -14947, 0, -14946, 0, -14945, 0, -14943, 0, -14942, 0, -14941, 0, -14940, 0, -14939, 0, -14938, 0, -14937, 0, -14936, 0, -14934, 0, -14933, 0, -14932, 0, -14931, 0, -14930, 0, -14929, 0, -14928, 0, -14927, 0, -14926, 0, -14925, 0, -14922, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -14921, 0, -14918, 0, -14913, 0, -14912, 0, -14911, 0, -14910, 0, -14909, 0, -14901, 0, -14899, 0, -14897, 0, -14894, 0, -14893, 0, -14891, 0, -14890, 0, -14889, 0, -14887, 0, -14886, 0, -14885, 0, -14884, 0, -14883, 0, -14882, 0, -14881, 0, -14878, 0, -14876, 0, -14874, 0, -14873, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -14872, 0, -14871, 0, -14870, 0, -14869, 0, -14865, 0, -14863, 0, -14862, 0, -14861, 0, -14859, 0, -14856, 0, -14855, 0, -14854, 0, -14853, 0, -14846, 0, -14845, 0, -14844, 0, -14839, 0, -14838, 0, -14837, 0, -14835, 0, -14834, 0, -14833, 0, -14831, 0, -14830, 0, -14829, 0, -14828, 0, -14827, 0, -14826, 0, -14825, 0, -14822, 0, -14819, 0, -14818, 0, -14817, 0, -14816, 0, -14815, 0, -14814, 0, -14813, 0, -14810, 0, -14809, 0, -14807, 0, -14806, 0, -14805, 0, -14801, 0, -14799, 0, -14798, 0, -14794, 0, -14792, 0, -14790, 0, -14788, 0, -14787, 0, -14786, 0, -14785, 0, -14782, 0, -14781, 0, -14779, 0, -14778, 0, -14777, 0, -14775, 0, -14774, 0, -14773, 0, -14772, 0, -14771, 0, -14770, 0, -14769, 0, -14766, 0, -14762, 0, -14761, 0, -14760, 0, -14759, 0, -14758, 0, -14757, 0, -14754, 0, -14753, 0, -14751, 0, -14750, 0, -14749, 0, -14748, 0, -14747, 0, -14746, 0, -14745, 0, -14744, 0, -14743, 0, -14742, 0, -14741, 0, -14739, 0, -14738, 0, -14736, 0, -14734, 0, -14733, 0, -14732, 0, -14731, 0, -14730, 0, -14729, 0, -14726, 0, -14725, 0, -14723, 0, -14722, 0, -14721, 0, -14719, 0, -14718, 0, -14717, 0, -14716, 0, -14715, 0, -14714, 0, -14713, 0, -14710, 0, -14708, 0, -14706, 0, -14705, 0, -14704, 0, -14703, 0, -14702, 0, -14701, 0, -14698, 0, -14697, 0, -14695, 0, -14694, 0, -14693, 0, -14691, 0, -14690, 0, -14689, 0, -14688, 0, -14687, 0, -14686, 0, -14685, 0, -14682, 0, -14680, 0, -14678, 0, -14677, 0, -14676, 0, -14675, 0, -14674, 0, -14673, 0, -14670, 0, -14669, 0, -14667, 0, -14666, 0, -14665, 0, -14661, 0, -14660, 0, -14659, 0, -14658, 0, -14657, 0, -14654, 0, -14652, 0, -14650, 0, -14649, 0, -14648, 0, -14647, 0, -14646, 0, -14645, 0, -14642, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -14641, 0, -14639, 0, -14638, 0, -14637, 0, -14635, 0, -14634, 0, -14633, 0, -14632, 0, -14631, 0, -14630, 0, -14629, 0, -14626, 0, -14625, 0, -14622, 0, -14621, 0, -14620, 0, -14619, 0, -14618, 0, -14617, 0, -14614, 0, -14613, 0, -14611, 0, -14610, 0, -14609, 0, -14607, 0, -14606, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -14605, 0, -14604, 0, -14603, 0, -14602, 0, -14601, 0, -14598, 0, -14597, 0, -14596, 0, -14594, 0, -14593, 0, -14592, 0, -14591, 0, -14590, 0, -14589, 0, -14586, 0, -14585, 0, -14583, 0, -14582, 0, -14581, 0, -14579, 0, -14578, 0, -14577, 0, -14576, 0, -14575, 0, -14574, 0, -14573, 0, -14570, 0, -14568, 0, -14566, 0, -14565, 0, -14564, 0, -14563, 0, -14562, 0, -14561, 0, -14558, 0, -14557, 0, -14555, 0, -14554, 0, -14553, 0, -14551, 0, -14550, 0, -14549, 0, -14548, 0, -14547, 0, -14546, 0, -14545, 0, -14542, 0, -14540, 0, -14538, 0, -14536, 0, -14535, 0, -14534, 0, -14533, 0, -14530, 0, -14529, 0, -14527, 0, -14526, 0, -14525, 0, -14523, 0, -14522, 0, -14521, 0, -14520, 0, -14519, 0, -14517, 0, -14514, 0, -14512, 0, -14503, 0, -14502, 0, -14501, 0, -14499, 0, -14498, 0, -14497, 0, -14495, 0, -14494, 0, -14493, 0, -14492, 0, -14491, 0, -14490, 0, -14489, 0, -14487, 0, -14486, 0, -14484, 0, -14483, 0, -14482, 0, -14481, 0, -14480, 0, -14479, 0, -14478, 0, -14477, 0, -14474, 0, -14473, 0, -14471, 0, -14470, 0, -14469, 0, -14465, 0, -14464, 0, -14463, 0, -14462, 0, -14458, 0, -14453, 0, -14452, 0, -14451, 0, -14449, 0, -14446, 0, -14445, 0, -14443, 0, -14439, 0, -14437, 0, -14436, 0, -14435, 0, -14434, 0, -14433, 0, -14430, 0, -14425, 0, -14424, 0, -14423, 0, -14422, 0, -14421, 0, -14418, 0, -14417, 0, -14415, 0, -14414, 0, -14413, 0, -14411, 0, -14410, 0, -14409, 0, -14408, 0, -14407, 0, -14406, 0, -14405, 0, -14402, 0, -14398, 0, -14397, 0, -14396, 0, -14395, 0, -14394, 0, -14393, 0, -14390, 0, -14389, 0, -14387, 0, -14385, 0, -14383, 0, -14382, 0, -14381, 0, -14380, 0, -14379, 0, -14378, 0, -14377, 0, -14375, 0, -14374, 0, -14373, 0, -14372, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -14370, 0, -14369, 0, -14368, 0, -14367, 0, -14366, 0, -14365, 0, -14363, 0, -14362, 0, -14361, 0, -14359, 0, -14358, 0, -14357, 0, -14355, 0, -14354, 0, -14353, 0, -14352, 0, -14351, 0, -14350, 0, -14349, 0, -14348, 0, -14347, 0, -14346, 0, -14345, 0, -14344, 0, -14343, 0, -14342, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -14341, 0, -14340, 0, -14339, 0, -14338, 0, -14337, 0, -14334, 0, -14333, 0, -14331, 0, -14330, 0, -14329, 0, -14327, 0, -14325, 0, -14324, 0, -14323, 0, -14322, 0, -14321, 0, -14318, 0, -14316, 0, -14313, 0, -14312, 0, -14311, 0, -14310, 0, -14309, 0, -14306, 0, -14305, 0, -14303, 0, -14302, 0, -14301, 0, -14299, 0, -14298, 0, -14297, 0, -14296, 0, -14295, 0, -14294, 0, -14293, 0, -14290, 0, -14288, 0, -14286, 0, -14285, 0, -14284, 0, -14283, 0, -14282, 0, -14281, 0, -14279, 0, -14278, 0, -14277, 0, -14275, 0, -14274, 0, -14273, 0, -14271, 0, -14270, 0, -14269, 0, -14268, 0, -14267, 0, -14266, 0, -14265, 0, -14262, 0, -14261, 0, -14258, 0, -14257, 0, -14256, 0, -14255, 0, -14254, 0, -14253, 0, -14251, 0, -14250, 0, -14249, 0, -14248, 0, -14247, 0, -14246, 0, -14245, 0, -14244, 0, -14243, 0, -14242, 0, -14241, 0, -14240, 0, -14239, 0, -14238, 0, -14237, 0, -14236, 0, -14235, 0, -14234, 0, -14233, 0, -14232, 0, -14231, 0, -14230, 0, -14229, 0, -14228, 0, -14227, 0, -14226, 0, -14225, 0, -14222, 0, -14221, 0, -14219, 0, -14218, 0, -14217, 0, -14215, 0, -14213, 0, -14212, 0, -14211, 0, -14210, 0, -14209, 0, -14206, 0, -14204, 0, -14200, 0, -14199, 0, -14198, 0, -14194, 0, -14193, 0, -14192, 0, -14191, 0, -14190, 0, -14189, 0, -14187, 0, -14186, 0, -14185, 0, -14184, 0, -14183, 0, -14182, 0, -14181, 0, -14180, 0, -14178, 0, -14176, 0, -14174, 0, -14173, 0, -14172, 0, -14171, 0, -14170, 0, -14169, 0, -14167, 0, -14166, 0, -14165, 0, -14164, 0, -14163, 0, -14162, 0, -14161, 0, -14160, 0, -14159, 0, -14158, 0, -14157, 0, -14156, 0, -14155, 0, -14154, 0, -14153, 0, -14152, 0, -14151, 0, -14150, 0, -14149, 0, -14146, 0, -14145, 0, -14144, 0, -14143, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -14142, 0, -14141, 0, -14139, 0, -14138, 0, -14137, 0, -14135, 0, -14134, 0, -14133, 0, -14131, 0, -14130, 0, -14129, 0, -14128, 0, -14127, 0, -14126, 0, -14125, 0, -14122, 0, -14120, 0, -14118, 0, -14117, 0, -14116, 0, -14115, 0, -14114, 0, -14113, 0, -14110, 0, -14109, 0, -14107, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -14106, 0, -14105, 0, -14104, 0, -14103, 0, -14102, 0, -14101, 0, -14100, 0, -14099, 0, -14098, 0, -14097, 0, -14096, 0, -14095, 0, -14094, 0, -14093, 0, -14092, 0, -14090, 0, -14089, 0, -14088, 0, -14087, 0, -14086, 0, -14085, 0, -14082, 0, -14081, 0, -14079, 0, -14078, 0, -14077, 0, -14073, 0, -14072, 0, -14071, 0, -14070, 0, -14069, 0, -14066, 0, -14064, 0, -14062, 0, -14061, 0, -14060, 0, -14059, 0, -14058, 0, -14057, 0, -14055, 0, -14054, 0, -14053, 0, -14052, 0, -14051, 0, -14050, 0, -14049, 0, -14048, 0, -14047, 0, -14046, 0, -14045, 0, -14044, 0, -14043, 0, -14042, 0, -14041, 0, -14040, 0, -14039, 0, -14038, 0, -14037, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -14035, 0, -14034, 0, -14033, 0, -14032, 0, -14031, 0, -14030, 0, -14029, 0, -14027, 0, -14026, 0, -14025, 0, -14024, 0, -14023, 0, -14022, 0, -14021, 0, -14020, 0, -14019, 0, -14018, 0, -14017, 0, -14016, 0, -14015, 0, -14014, 0, -14013, 0, -14012, 0, -14011, 0, -14010, 0, -14009, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -14008, 0, -14007, 0, -14006, 0, -14005, 0, -14004, 0, -14003, 0, -14002, 0, -14001, 0, -13998, 0, -13997, 0, -13995, 0, -13994, 0, -13993, 0, -13991, 0, -13990, 0, -13989, 0, -13988, 0, -13987, 0, -13986, 0, -13985, 0, -13982, 0, -13980, 0, -13979, 0, -13978, 0, -13977, 0, -13976, 0, -13975, 0, -13974, 0, -13973, 0, -13971, 0, -13970, 0, -13969, 0, -13967, 0, -13966, 0, -13965, 0, -13963, 0, -13962, 0, -13961, 0, -13960, 0, -13959, 0, -13958, 0, -13957, 0, -13955, 0, -13954, 0, -13953, 0, -13952, 0, -13951, 0, -13950, 0, -13949, 0, -13948, 0, -13947, 0, -13946, 0, -13945, 0, -13942, 0, -13941, 0, -13939, 0, -13938, 0, -13937, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -13935, 0, -13934, 0, -13933, 0, -13932, 0, -13931, 0, -13930, 0, -13929, 0, -13926, 0, -13924, 0, -13922, 0, -13921, 0, -13920, 0, -13919, 0, -13918, 0, -13917, 0, -13916, 0, -13915, 0, -13914, 0, -13913, 0, -13912, 0, -13911, 0, -13910, 0, -13909, 0, -13908, 0, -13907, 0, -13906, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -13905, 0, -13904, 0, -13903, 0, -13902, 0, -13901, 0, -13900, 0, -13899, 0, -13898, 0, -13897, 0, -13896, 0, -13895, 0, -13894, 0, -13893, 0, -13892, 0, -13891, 0, -13890, 0, -13889, 0, -13886, 0, -13885, 0, -13883, 0, -13882, 0, -13879, 0, -13877, 0, -13876, 0, -13875, 0, -13874, 0, -13873, 0, -13870, 0, -13868, 0, -13865, 0, -13864, 0, -13861, 0, -13858, 0, -13857, 0, -13855, 0, -13853, 0, -13851, 0, -13850, 0, -13848, 0, -13847, 0, -13846, 0, -13845, 0, -13842, 0, -13838, 0, -13837, 0, -13836, 0, -13835, 0, -13834, 0, -13833, 0, -13830, 0, -13829, 0, -13827, 0, -13826, 0, -13825, 0, -13823, 0, -13822, 0, -13821, 0, -13820, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -13819, 0, -13818, 0, -13817, 0, -13814, 0, -13810, 0, -13809, 0, -13808, 0, -13807, 0, -13806, 0, -13805, 0, -13803, 0, -13802, 0, -13801, 0, -13799, 0, -13798, 0, -13797, 0, -13796, 0, -13795, 0, -13794, 0, -13793, 0, -13792, 0, -13791, 0, -13790, 0, -13789, 0, -13788, 0, -13787, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -13786, 0, -13785, 0, -13784, 0, -13782, 0, -13781, 0, -13780, 0, -13779, 0, -13778, 0, -13777, 0, -13776, 0, -13775, 0, -13774, 0, -13773, 0, -13772, 0, -13771, 0, -13770, 0, -13769, 0, -13768, 0, -13767, 0, -13766, 0, -13765, 0, -13764, 0, -13763, 0, -13762, 0, -13761, 0, -13760, 0, -13759, 0, -13758, 0, -13757, 0, -13756, 0, -13755, 0, -13754, 0, -13753, 0, -13752, 0, -13751, 0, -13750, 0, -13749, 0, -13746, 0, -13745, 0, -13743, 0, -13742, 0, -13741, 0, -13739, 0, -13738, 0, -13737, 0, -13736, 0, -13735, 0, -13734, 0, -13733, 0, -13730, 0, -13726, 0, -13725, 0, -13724, 0, -13723, 0, -13722, 0, -13721, 0, -13719, 0, -13718, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -13717, 0, -13716, 0, -13715, 0, -13714, 0, -13713, 0, -13712, 0, -13711, 0, -13710, 0, -13709, 0, -13708, 0, -13707, 0, -13706, 0, -13705, 0, -13704, 0, -13703, 0, -13702, 0, -13701, 0, -13700, 0, -13698, 0, -13697, 0, -13696, 0, -13695, 0, -13694, 0, -13693, 0, -13691, 0, -13690, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -13689, 0, -13688, 0, -13687, 0, -13686, 0, -13685, 0, -13684, 0, -13683, 0, -13682, 0, -13681, 0, -13680, 0, -13679, 0, -13678, 0, -13677, 0, -13676, 0, -13675, 0, -13674, 0, -13673, 0, -13671, 0, -13670, 0, -13669, 0, -13668, 0, -13667, 0, -13666, 0, -13665, 0, -13664, 0, -13663, 0, -13662, 0, -13661, 0, -13660, 0, -13659, 0, -13658, 0, -13657, 0, -13656, 0, -13655, 0, -13654, 0, -13653, 0, -13652, 0, -13651, 0, -13650, 0, -13649, 0, -13648, 0, -13647, 0, -13646, 0, -13645, 0, -13644, 0, -13643, 0, -13642, 0, -13641, 0, -13640, 0, -13639, 0, -13638, 0, -13637, 0, -13634, 0, -13633, 0, -13631, 0, -13630, 0, -13629, 0, -13627, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -13626, 0, -13625, 0, -13624, 0, -13623, 0, -13622, 0, -13621, 0, -13618, 0, -13616, 0, -13614, 0, -13612, 0, -13611, 0, -13610, 0, -13609, 0, -13606, 0, -13605, 0, -13604, 0, -13603, 0, -13602, 0, -13601, 0, -13599, 0, -13598, 0, -13597, 0, -13596, 0, -13595, 0, -13594, 0, -13593, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -13592, 0, -13591, 0, -13590, 0, -13589, 0, -13587, 0, -13586, 0, -13585, 0, -13584, 0, -13583, 0, -13582, 0, -13581, 0, -13579, 0, -13578, 0, -13577, 0, -13576, 0, -13575, 0, -13574, 0, -13573, 0, -13572, 0, -13571, 0, -13570, 0, -13569, 0, -13568, 0, -13567, 0, -13566, 0, -13565, 0, -13564, 0, -13563, 0, -13562, 0, -13561, 0, -13559, 0, -13558, 0, -13557, 0, -13556, 0, -13555, 0, -13554, 0, -13553, 0, -13551, 0, -13550, 0, -13549, 0, -13547, 0, -13546, 0, -13545, 0, -13543, 0, -13542, 0, -13541, 0, -13540, 0, -13539, 0, -13538, 0, -13537, 0, -13534, 0, -13533, 0, -13532, 0, -13531, 0, -13530, 0, -13529, 0, -13528, 0, -13527, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -13526, 0, -13525, 0, -13524, 0, -13523, 0, -13522, 0, -13521, 0, -13520, 0, -13519, 0, -13518, 0, -13517, 0, -13516, 0, -13515, 0, -13514, 0, -13513, 0, -13512, 0, -13511, 0, -13510, 0, -13509, 0, -13508, 0, -13507, 0, -13506, 0, -13505, 0, -13504, 0, -13502, 0, -13501, 0, -13500, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -13499, 0, -13498, 0, -13497, 0, -13494, 0, -13493, 0, -13491, 0, -13490, 0, -13489, 0, -13487, 0, -13486, 0, -13485, 0, -13484, 0, -13483, 0, -13482, 0, -13481, 0, -13478, 0, -13477, 0, -13476, 0, -13474, 0, -13473, 0, -13472, 0, -13471, 0, -13470, 0, -13469, 0, -13467, 0, -13466, 0, -13465, 0, -13464, 0, -13463, 0, -13462, 0, -13461, 0, -13460, 0, -13459, 0, -13458, 0, -13457, 0, -13456, 0, -13455, 0, -13454, 0, -13453, 0, -13452, 0, -13451, 0, -13450, 0, -13449, 0, -13446, 0, -13445, 0, -13444, 0, -13443, 0, -13442, 0, -13441, 0, -13440, 0, -13439, 0, -13438, 0, -13437, 0, -13436, 0, -13435, 0, -13434, 0, -13433, 0, -13432, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -13431, 0, -13430, 0, -13429, 0, -13428, 0, -13427, 0, -13426, 0, -13425, 0, -13424, 0, -13423, 0, -13422, 0, -13421, 0, -13420, 0, -13419, 0, -13418, 0, -13417, 0, -13416, 0, -13415, 0, -13414, 0, -13413, 0, -13411, 0, -13410, 0, -13409, 0, -13408, 0, -13407, 0, -13406, 0, -13405, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -13404, 0, -13403, 0, -13402, 0, -13401, 0, -13400, 0, -13399, 0, -13398, 0, -13397, 0, -13396, 0, -13395, 0, -13394, 0, -13393, 0, -13392, 0, -13391, 0, -13390, 0, -13389, 0, -13388, 0, -13387, 0, -13386, 0, -13385, 0, -13383, 0, -13382, 0, -13381, 0, -13380, 0, -13379, 0, -13378, 0, -13377, 0, -13376, 0, -13375, 0, -13374, 0, -13373, 0, -13372, 0, -13371, 0, -13370, 0, -13369, 0, -13368, 0, -13367, 0, -13366, 0, -13365, 0, -13364, 0, -13363, 0, -13362, 0, -13361, 0, -13360, 0, -13359, 0, -13358, 0, -13357, 0, -13355, 0, -13354, 0, -13353, 0, -13352, 0, -13351, 0, -13350, 0, -13349, 0, -13348, 0, -13347, 0, -13346, 0, -13345, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -13344, 0, -13343, 0, -13342, 0, -13341, 0, -13339, 0, -13338, 0, -13336, 0, -13334, 0, -13333, 0, -13332, 0, -13331, 0, -13330, 0, -13329, 0, -13328, 0, -13327, 0, -13326, 0, -13325, 0, -13324, 0, -13323, 0, -13322, 0, -13321, 0, -13320, 0, -13319, 0, -13318, 0, -13317, 0, -13316, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -13315, 0, -13314, 0, -13313, 0, -13312, 0, -13311, 0, -13310, 0, -13309, 0, -13308, 0, -13307, 0, -13306, 0, -13305, 0, -13304, 0, -13303, 0, -13302, 0, -13301, 0, -13298, 0, -13297, 0, -13295, 0, -13294, 0, -13293, 0, -13291, 0, -13290, 0, -13289, 0, -13288, 0, -13287, 0, -13286, 0, -13285, 0, -13282, 0, -13281, 0, -13280, 0, -13277, 0, -13276, 0, -13275, 0, -13274, 0, -13270, 0, -13269, 0, -13267, 0, -13265, 0, -13263, 0, -13262, 0, -13261, 0, -13260, 0, -13259, 0, -13258, 0, -13257, 0, -13254, 0, -13249, 0, -13248, 0, -13247, 0, -13246, 0, -13245, 0, -13242, 0, -13241, 0, -13239, 0, -13238, 0, -13237, 0, -13235, 0, -13234, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -13233, 0, -13232, 0, -13231, 0, -13230, 0, -13229, 0, -13226, 0, -13222, 0, -13221, 0, -13220, 0, -13219, 0, -13218, 0, -13217, 0, -13215, 0, -13214, 0, -13213, 0, -13211, 0, -13209, 0, -13207, 0, -13206, 0, -13205, 0, -13204, 0, -13203, 0, -13202, 0, -13201, 0, -13199, 0, -13198, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -13197, 0, -13196, 0, -13194, 0, -13193, 0, -13192, 0, -13191, 0, -13190, 0, -13189, 0, -13188, 0, -13187, 0, -13186, 0, -13185, 0, -13184, 0, -13183, 0, -13182, 0, -13181, 0, -13180, 0, -13179, 0, -13178, 0, -13177, 0, -13176, 0, -13175, 0, -13174, 0, -13173, 0, -13172, 0, -13171, 0, -13170, 0, -13169, 0, -13168, 0, -13167, 0, -13166, 0, -13165, 0, -13164, 0, -13163, 0, -13162, 0, -13161, 0, -13158, 0, -13157, 0, -13155, 0, -13154, 0, -13153, 0, -13151, 0, -13150, 0, -13149, 0, -13148, 0, -13147, 0, -13146, 0, -13145, 0, -13142, 0, -13138, 0, -13137, 0, -13136, 0, -13135, 0, -13134, 0, -13133, 0, -13130, 0, -13129, 0, -13127, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -13126, 0, -13125, 0, -13123, 0, -13122, 0, -13121, 0, -13120, 0, -13119, 0, -13118, 0, -13117, 0, -13114, 0, -13112, 0, -13110, 0, -13109, 0, -13108, 0, -13107, 0, -13106, 0, -13105, 0, -13103, 0, -13102, 0, -13101, 0, -13099, 0, -13098, 0, -13097, 0, -13096, 0, -13095, 0, -13094, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -13093, 0, -13092, 0, -13091, 0, -13090, 0, -13089, 0, -13088, 0, -13087, 0, -13086, 0, -13085, 0, -13083, 0, -13082, 0, -13081, 0, -13080, 0, -13079, 0, -13078, 0, -13077, 0, -13075, 0, -13074, 0, -13073, 0, -13071, 0, -13070, 0, -13069, 0, -13068, 0, -13067, 0, -13066, 0, -13065, 0, -13064, 0, -13063, 0, -13062, 0, -13061, 0, -13060, 0, -13059, 0, -13058, 0, -13057, 0, -13056, 0, -13054, 0, -13053, 0, -13052, 0, -13051, 0, -13050, 0, -13049, 0, -13046, 0, -13045, 0, -13043, 0, -13042, 0, -13041, 0, -13039, 0, -13038, 0, -13037, 0, -13036, 0, -13035, 0, -13034, 0, -13033, 0, -13030, 0, -13028, 0, -13026, 0, -13025, 0, -13024, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -13023, 0, -13022, 0, -13021, 0, -13019, 0, -13018, 0, -13017, 0, -13015, 0, -13014, 0, -13013, 0, -13011, 0, -13010, 0, -13009, 0, -13008, 0, -13007, 0, -13006, 0, -13005, 0, -13004, 0, -13003, 0, -13002, 0, -13001, 0, -13e3, 0, -12998, 0, -12997, 0, -12996, 0, -12995, 0, -12994, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -12993, 0, -12992, 0, -12991, 0, -12990, 0, -12989, 0, -12988, 0, -12987, 0, -12986, 0, -12985, 0, -12984, 0, -12983, 0, -12982, 0, -12981, 0, -12980, 0, -12979, 0, -12978, 0, -12977, 0, -12976, 0, -12975, 0, -12974, 0, -12973, 0, -12972, 0, -12971, 0, -12970, 0, -12969, 0, -12968, 0, -12967, 0, -12966, 0, -12965, 0, -12963, 0, -12962, 0, -12961, 0, -12959, 0, -12958, 0, -12957, 0, -12955, 0, -12954, 0, -12953, 0, -12952, 0, -12951, 0, -12950, 0, -12949, 0, -12946, 0, -12944, 0, -12942, 0, -12941, 0, -12940, 0, -12939, 0, -12938, 0, -12937, 0, -12935, 0, -12934, 0, -12933, 0, -12932, 0, -12931, 0, -12930, 0, -12929, 0, -12928, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -12927, 0, -12926, 0, -12925, 0, -12924, 0, -12923, 0, -12922, 0, -12921, 0, -12919, 0, -12918, 0, -12917, 0, -12916, 0, -12915, 0, -12914, 0, -12913, 0, -12912, 0, -12911, 0, -12910, 0, -12909, 0, -12906, 0, -12905, 0, -12903, 0, -12902, 0, -12901, 0, -12899, 0, -12898, 0, -12897, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -12896, 0, -12895, 0, -12894, 0, -12893, 0, -12890, 0, -12888, 0, -12886, 0, -12885, 0, -12884, 0, -12883, 0, -12882, 0, -12881, 0, -12879, 0, -12878, 0, -12877, 0, -12876, 0, -12875, 0, -12874, 0, -12873, 0, -12872, 0, -12871, 0, -12870, 0, -12869, 0, -12868, 0, -12867, 0, -12866, 0, -12865, 0, -12864, 0, -12863, 0, -12862, 0, -12861, 0, -12859, 0, -12858, 0, -12857, 0, -12856, 0, -12855, 0, -12854, 0, -12853, 0, -12851, 0, -12850, 0, -12849, 0, -12847, 0, -12846, 0, -12845, 0, -12844, 0, -12843, 0, -12842, 0, -12841, 0, -12840, 0, -12839, 0, -12838, 0, -12837, 0, -12836, 0, -12835, 0, -12834, 0, -12833, 0, -12832, 0, -12831, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -12830, 0, -12829, 0, -12828, 0, -12827, 0, -12826, 0, -12825, 0, -12823, 0, -12822, 0, -12821, 0, -12819, 0, -12818, 0, -12817, 0, -12815, 0, -12814, 0, -12813, 0, -12812, 0, -12811, 0, -12810, 0, -12809, 0, -12806, 0, -12804, 0, -12802, 0, -12801, 0, -12800, 0, -12799, 0, -12798, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -12797, 0, -12795, 0, -12794, 0, -12793, 0, -12791, 0, -12790, 0, -12789, 0, -12787, 0, -12786, 0, -12785, 0, -12784, 0, -12783, 0, -12782, 0, -12781, 0, -12779, 0, -12778, 0, -12777, 0, -12776, 0, -12774, 0, -12773, 0, -12772, 0, -12771, 0, -12770, 0, -12769, 0, -12766, 0, -12765, 0, -12763, 0, -12762, 0, -12761, 0, -12759, 0, -12758, 0, -12757, 0, -12756, 0, -12755, 0, -12754, 0, -12753, 0, -12750, 0, -12748, 0, -12746, 0, -12745, 0, -12744, 0, -12743, 0, -12742, 0, -12741, 0, -12740, 0, -12739, 0, -12738, 0, -12737, 0, -12736, 0, -12735, 0, -12734, 0, -12733, 0, -12732, 0, -12731, 0, -12730, 0, -12729, 0, -12728, 0, -12727, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -12726, 0, -12725, 0, -12724, 0, -12723, 0, -12722, 0, -12721, 0, -12720, 0, -12719, 0, -12718, 0, -12717, 0, -12716, 0, -12715, 0, -12714, 0, -12713, 0, -12710, 0, -12709, 0, -12707, 0, -12706, 0, -12702, 0, -12701, 0, -12700, 0, -12699, 0, -12698, 0, -12697, 0, -12694, 0, -12692, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -12690, 0, -12689, 0, -12688, 0, -12687, 0, -12686, 0, -12685, 0, -12682, 0, -12681, 0, -12679, 0, -12678, 0, -12677, 0, -12675, 0, -12674, 0, -12673, 0, -12672, 0, -12671, 0, -12670, 0, -12669, 0, -12666, 0, -12664, 0, -12662, 0, -12661, 0, -12660, 0, -12659, 0, -12658, 0, -12657, 0, -12654, 0, -12653, 0, -12651, 0, -12650, 0, -12649, 0, -12647, 0, -12646, 0, -12645, 0, -12644, 0, -12643, 0, -12642, 0, -12641, 0, -12638, 0, -12634, 0, -12633, 0, -12632, 0, -12631, 0, -12630, 0, -12629, 0, -12626, 0, -12625, 0, -12624, 0, -12623, 0, -12622, 0, -12621, 0, -12620, 0, -12619, 0, -12618, 0, -12617, 0, -12616, 0, -12615, 0, -12614, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -12613, 0, -12612, 0, -12611, 0, -12610, 0, -12609, 0, -12608, 0, -12606, 0, -12605, 0, -12604, 0, -12603, 0, -12602, 0, -12601, 0, -12600, 0, -12599, 0, -12598, 0, -12597, 0, -12596, 0, -12595, 0, -12594, 0, -12593, 0, -12592, 0, -12591, 0, -12590, 0, -12589, 0, -12588, 0, -12587, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -12586, 0, -12585, 0, -12584, 0, -12583, 0, -12582, 0, -12581, 0, -12580, 0, -12579, 0, -12578, 0, -12577, 0, -12576, 0, -12575, 0, -12574, 0, -12573, 0, -12570, 0, -12569, 0, -12567, 0, -12566, 0, -12563, 0, -12562, 0, -12561, 0, -12560, 0, -12559, 0, -12558, 0, -12557, 0, -12554, 0, -12550, 0, -12549, 0, -12548, 0, -12547, 0, -12546, 0, -12545, 0, -12542, 0, -12541, 0, -12539, 0, -12538, 0, -12537, 0, -12535, 0, -12534, 0, -12533, 0, -12532, 0, -12531, 0, -12530, 0, -12529, 0, -12526, 0, -12524, 0, -12522, 0, -12521, 0, -12520, 0, -12519, 0, -12518, 0, -12517, 0, -12515, 0, -12514, 0, -12513, 0, -12511, 0, -12510, 0, -12509, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -12507, 0, -12506, 0, -12505, 0, -12504, 0, -12503, 0, -12502, 0, -12501, 0, -12498, 0, -12494, 0, -12493, 0, -12492, 0, -12491, 0, -12490, 0, -12489, 0, -12487, 0, -12486, 0, -12485, 0, -12484, 0, -12483, 0, -12482, 0, -12481, 0, -12480, 0, -12479, 0, -12478, 0, -12477, 0, -12476, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -12475, 0, -12474, 0, -12473, 0, -12472, 0, -12471, 0, -12470, 0, -12469, 0, -12468, 0, -12467, 0, -12466, 0, -12465, 0, -12464, 0, -12463, 0, -12462, 0, -12461, 0, -12458, 0, -12457, 0, -12455, 0, -12454, 0, -12453, 0, -12451, 0, -12450, 0, -12449, 0, -12448, 0, -12447, 0, -12446, 0, -12445, 0, -12442, 0, -12440, 0, -12438, 0, -12437, 0, -12436, 0, -12435, 0, -12434, 0, -12433, 0, -12430, 0, -12429, 0, -12427, 0, -12426, 0, -12425, 0, -12423, 0, -12422, 0, -12421, 0, -12420, 0, -12419, 0, -12418, 0, -12417, 0, -12415, 0, -12414, 0, -12413, 0, -12412, 0, -12410, 0, -12409, 0, -12408, 0, -12407, 0, -12406, 0, -12405, 0, -12403, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -12402, 0, -12401, 0, -12400, 0, -12399, 0, -12398, 0, -12397, 0, -12396, 0, -12395, 0, -12394, 0, -12393, 0, -12392, 0, -12391, 0, -12390, 0, -12389, 0, -12388, 0, -12387, 0, -12386, 0, -12385, 0, -12384, 0, -12382, 0, -12381, 0, -12380, 0, -12379, 0, -12378, 0, -12377, 0, -12375, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -12374, 0, -12373, 0, -12372, 0, -12371, 0, -12370, 0, -12369, 0, -12367, 0, -12366, 0, -12365, 0, -12364, 0, -12363, 0, -12362, 0, -12361, 0, -12360, 0, -12359, 0, -12358, 0, -12357, 0, -12356, 0, -12355, 0, -12354, 0, -12353, 0, -12352, 0, -12351, 0, -12350, 0, -12349, 0, -12347, 0, -12346, 0, -12345, 0, -12344, 0, -12343, 0, -12342, 0, -12341, 0, -12340, 0, -12339, 0, -12338, 0, -12337, 0, -12336, 0, -12335, 0, -12334, 0, -12333, 0, -12332, 0, -12331, 0, -12330, 0, -12329, 0, -12328, 0, -12327, 0, -12326, 0, -12325, 0, -12324, 0, -12323, 0, -12322, 0, -12321, 0, -12318, 0, -12317, 0, -12315, 0, -12314, 0, -12313, 0, -12311, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -12310, 0, -12309, 0, -12308, 0, -12307, 0, -12306, 0, -12305, 0, -12302, 0, -12300, 0, -12298, 0, -12297, 0, -12296, 0, -12295, 0, -12294, 0, -12293, 0, -12291, 0, -12290, 0, -12289, 0, -12287, 0, -12286, 0, -12285, 0, -12283, 0, -12282, 0, -12281, 0, -12280, 0, -12279, 0, -12278, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -12277, 0, -12276, 0, -12275, 0, -12274, 0, -12273, 0, -12272, 0, -12270, 0, -12269, 0, -12268, 0, -12267, 0, -12266, 0, -12265, 0, -12263, 0, -12262, 0, -12261, 0, -12260, 0, -12259, 0, -12258, 0, -12257, 0, -12256, 0, -12255, 0, -12254, 0, -12253, 0, -12252, 0, -12251, 0, -12250, 0, -12249, 0, -12248, 0, -12247, 0, -12246, 0, -12245, 0, -12244, 0, -12242, 0, -12241, 0, -12240, 0, -12239, 0, -12238, 0, -12237, 0, -12234, 0, -12233, 0, -12231, 0, -12230, 0, -12229, 0, -12227, 0, -12226, 0, -12225, 0, -12224, 0, -12223, 0, -12222, 0, -12221, 0, -12218, 0, -12216, 0, -12214, 0, -12213, 0, -12212, 0, -12211, 0, -12210, 0, -12209, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -12207, 0, -12206, 0, -12205, 0, -12203, 0, -12202, 0, -12201, 0, -12199, 0, -12198, 0, -12197, 0, -12196, 0, -12195, 0, -12194, 0, -12193, 0, -12191, 0, -12190, 0, -12189, 0, -12188, 0, -12187, 0, -12186, 0, -12185, 0, -12184, 0, -12183, 0, -12182, 0, -12181, 0, -12178, 0, -12177, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -12175, 0, -12174, 0, -12173, 0, -12171, 0, -12170, 0, -12169, 0, -12168, 0, -12167, 0, -12166, 0, -12165, 0, -12162, 0, -12161, 0, -12160, 0, -12158, 0, -12157, 0, -12156, 0, -12155, 0, -12154, 0, -12153, 0, -12152, 0, -12151, 0, -12150, 0, -12149, 0, -12148, 0, -12147, 0, -12146, 0, -12145, 0, -12144, 0, -12143, 0, -12142, 0, -12141, 0, -12140, 0, -12139, 0, -12138, 0, -12137, 0, -12136, 0, -12135, 0, -12134, 0, -12133, 0, -12132, 0, -12131, 0, -12130, 0, -12129, 0, -12128, 0, -12127, 0, -12126, 0, -12125, 0, -12122, 0, -12121, 0, -12119, 0, -12118, 0, -12117, 0, -12115, 0, -12114, 0, -12113, 0, -12112, 0, -12111, 0, -12110, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -12109, 0, -12106, 0, -12104, 0, -12102, 0, -12101, 0, -12100, 0, -12099, 0, -12098, 0, -12097, 0, -12094, 0, -12093, 0, -12091, 0, -12090, 0, -12089, 0, -12086, 0, -12085, 0, -12084, 0, -12083, 0, -12082, 0, -12081, 0, -12078, 0, -12074, 0, -12073, 0, -12072, 0, -12071, 0, -12070, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -12069, 0, -12066, 0, -12065, 0, -12063, 0, -12062, 0, -12061, 0, -12059, 0, -12058, 0, -12057, 0, -12056, 0, -12055, 0, -12054, 0, -12053, 0, -12050, 0, -12046, 0, -12045, 0, -12044, 0, -12043, 0, -12042, 0, -12041, 0, -12039, 0, -12038, 0, -12037, 0, -12036, 0, -12035, 0, -12034, 0, -12033, 0, -12032, 0, -12031, 0, -12030, 0, -12029, 0, -12028, 0, -12027, 0, -12026, 0, -12025, 0, -12024, 0, -12023, 0, -12022, 0, -12021, 0, -12020, 0, -12018, 0, -12017, 0, -12016, 0, -12015, 0, -12014, 0, -12013, 0, -12012, 0, -12011, 0, -12010, 0, -12009, 0, -12008, 0, -12007, 0, -12006, 0, -12005, 0, -12004, 0, -12003, 0, -12002, 0, -12001, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -12e3, 0, -11999, 0, -11998, 0, -11997, 0, -11996, 0, -11995, 0, -11994, 0, -11993, 0, -11992, 0, -11991, 0, -11990, 0, -11989, 0, -11988, 0, -11987, 0, -11986, 0, -11985, 0, -11982, 0, -11981, 0, -11979, 0, -11978, 0, -11977, 0, -11975, 0, -11973, 0, -11972, 0, -11971, 0, -11970, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -11969, 0, -11966, 0, -11962, 0, -11961, 0, -11960, 0, -11959, 0, -11958, 0, -11957, 0, -11954, 0, -11953, 0, -11951, 0, -11950, 0, -11949, 0, -11947, 0, -11946, 0, -11945, 0, -11944, 0, -11943, 0, -11942, 0, -11941, 0, -11938, 0, -11936, 0, -11934, 0, -11933, 0, -11932, 0, -11931, 0, -11930, 0, -11929, 0, -11927, 0, -11926, 0, -11925, 0, -11923, 0, -11922, 0, -11921, 0, -11920, 0, -11919, 0, -11918, 0, -11917, 0, -11916, 0, -11915, 0, -11914, 0, -11913, 0, -11912, 0, -11911, 0, -11910, 0, -11909, 0, -11907, 0, -11906, 0, -11905, 0, -11904, 0, -11903, 0, -11902, 0, -11901, 0, -11899, 0, -11898, 0, -11897, 0, -11895, 0, -11894, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -11893, 0, -11892, 0, -11891, 0, -11890, 0, -11889, 0, -11888, 0, -11887, 0, -11886, 0, -11885, 0, -11884, 0, -11883, 0, -11882, 0, -11881, 0, -11880, 0, -11879, 0, -11878, 0, -11877, 0, -11876, 0, -11875, 0, -11874, 0, -11873, 0, -11870, 0, -11869, 0, -11867, 0, -11866, 0, -11865, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -11863, 0, -11862, 0, -11861, 0, -11860, 0, -11859, 0, -11858, 0, -11857, 0, -11854, 0, -11852, 0, -11850, 0, -11849, 0, -11848, 0, -11847, 0, -11845, 0, -11843, 0, -11842, 0, -11841, 0, -11839, 0, -11838, 0, -11837, 0, -11836, 0, -11835, 0, -11834, 0, -11833, 0, -11832, 0, -11831, 0, -11830, 0, -11829, 0, -11828, 0, -11827, 0, -11826, 0, -11825, 0, -11824, 0, -11823, 0, -11822, 0, -11821, 0, -11820, 0, -11819, 0, -11818, 0, -11817, 0, -11815, 0, -11814, 0, -11813, 0, -11812, 0, -11811, 0, -11810, 0, -11809, 0, -11808, 0, -11807, 0, -11806, 0, -11805, 0, -11804, 0, -11803, 0, -11802, 0, -11801, 0, -11800, 0, -11799, 0, -11798, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -11797, 0, -11796, 0, -11795, 0, -11794, 0, -11793, 0, -11792, 0, -11791, 0, -11790, 0, -11789, 0, -11787, 0, -11786, 0, -11785, 0, -11783, 0, -11782, 0, -11781, 0, -11780, 0, -11779, 0, -11778, 0, -11777, 0, -11776, 0, -11775, 0, -11774, 0, -11773, 0, -11772, 0, -11771, 0, -11770, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -11768, 0, -11766, 0, -11765, 0, -11764, 0, -11763, 0, -11762, 0, -11761, 0, -11759, 0, -11758, 0, -11757, 0, -11756, 0, -11755, 0, -11754, 0, -11753, 0, -11752, 0, -11751, 0, -11750, 0, -11749, 0, -11748, 0, -11747, 0, -11746, 0, -11745, 0, -11744, 0, -11743, 0, -11742, 0, -11741, 0, -11740, 0, -11739, 0, -11738, 0, -11737, 0, -11736, 0, -11735, 0, -11734, 0, -11733, 0, -11730, 0, -11729, 0, -11727, 0, -11726, 0, -11725, 0, -11723, 0, -11722, 0, -11721, 0, -11720, 0, -11719, 0, -11718, 0, -11717, 0, -11714, 0, -11712, 0, -11710, 0, -11709, 0, -11708, 0, -11707, 0, -11706, 0, -11705, 0, -11703, 0, -11702, 0, -11701, 0, -11700, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -11699, 0, -11698, 0, -11697, 0, -11696, 0, -11695, 0, -11694, 0, -11693, 0, -11692, 0, -11691, 0, -11690, 0, -11689, 0, -11688, 0, -11687, 0, -11686, 0, -11685, 0, -11683, 0, -11682, 0, -11681, 0, -11680, 0, -11679, 0, -11678, 0, -11677, 0, -11675, 0, -11674, 0, -11673, 0, -11672, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -11671, 0, -11670, 0, -11669, 0, -11668, 0, -11667, 0, -11666, 0, -11665, 0, -11664, 0, -11663, 0, -11662, 0, -11661, 0, -11660, 0, -11659, 0, -11658, 0, -11657, 0, -11656, 0, -11655, 0, -11654, 0, -11653, 0, -11652, 0, -11651, 0, -11650, 0, -11649, 0, -11646, 0, -11645, 0, -11643, 0, -11642, 0, -11641, 0, -11639, 0, -11638, 0, -11637, 0, -11636, 0, -11635, 0, -11634, 0, -11633, 0, -11630, 0, -11629, 0, -11628, 0, -11626, 0, -11625, 0, -11624, 0, -11623, 0, -11622, 0, -11621, 0, -11619, 0, -11618, 0, -11617, 0, -11615, 0, -11614, 0, -11613, 0, -11611, 0, -11610, 0, -11609, 0, -11608, 0, -11607, 0, -11606, 0, -11605, 0, -11603, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -11602, 0, -11601, 0, -11600, 0, -11598, 0, -11597, 0, -11596, 0, -11595, 0, -11594, 0, -11593, 0, -11590, 0, -11589, 0, -11587, 0, -11586, 0, -11583, 0, -11581, 0, -11580, 0, -11579, 0, -11578, 0, -11577, 0, -11574, 0, -11572, 0, -11571, 0, -11570, 0, -11569, 0, -11568, 0, -11567, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -11566, 0, -11565, 0, -11563, 0, -11562, 0, -11561, 0, -11559, 0, -11558, 0, -11557, 0, -11555, 0, -11554, 0, -11553, 0, -11552, 0, -11551, 0, -11550, 0, -11549, 0, -11546, 0, -11545, 0, -11544, 0, -11543, 0, -11542, 0, -11541, 0, -11540, 0, -11539, 0, -11538, 0, -11537, 0, -11534, 0, -11533, 0, -11531, 0, -11530, 0, -11529, 0, -11527, 0, -11526, 0, -11525, 0, -11524, 0, -11523, 0, -11522, 0, -11521, 0, -11518, 0, -11516, 0, -11514, 0, -11513, 0, -11512, 0, -11511, 0, -11510, 0, -11509, 0, -11505, 0, -11503, 0, -11502, 0, -11501, 0, -11499, 0, -11497, 0, -11496, 0, -11495, 0, -11494, 0, -11493, 0, -11490, 0, -11486, 0, -11485, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -11484, 0, -11482, 0, -11481, 0, -11478, 0, -11477, 0, -11475, 0, -11474, 0, -11473, 0, -11471, 0, -11470, 0, -11469, 0, -11468, 0, -11467, 0, -11466, 0, -11465, 0, -11462, 0, -11458, 0, -11457, 0, -11456, 0, -11455, 0, -11454, 0, -11453, 0, -11450, 0, -11449, 0, -11448, 0, -11447, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -11446, 0, -11445, 0, -11444, 0, -11443, 0, -11442, 0, -11441, 0, -11440, 0, -11439, 0, -11438, 0, -11437, 0, -11436, 0, -11435, 0, -11434, 0, -11433, 0, -11432, 0, -11431, 0, -11430, 0, -11429, 0, -11428, 0, -11427, 0, -11426, 0, -11425, 0, -11424, 0, -11423, 0, -11422, 0, -11421, 0, -11420, 0, -11419, 0, -11418, 0, -11417, 0, -11416, 0, -11415, 0, -11414, 0, -11413, 0, -11412, 0, -11411, 0, -11410, 0, -11409, 0, -11408, 0, -11407, 0, -11406, 0, -11405, 0, -11404, 0, -11403, 0, -11402, 0, -11401, 0, -11400, 0, -11399, 0, -11398, 0, -11397, 0, -11394, 0, -11393, 0, -11391, 0, -11390, 0, -11389, 0, -11387, 0, -11386, 0, -11385, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -11384, 0, -11383, 0, -11382, 0, -11381, 0, -11378, 0, -11374, 0, -11373, 0, -11372, 0, -11371, 0, -11370, 0, -11369, 0, -11366, 0, -11365, 0, -11363, 0, -11362, 0, -11361, 0, -11359, 0, -11358, 0, -11357, 0, -11356, 0, -11355, 0, -11354, 0, -11353, 0, -11350, 0, -11348, 0, -11346, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -11345, 0, -11344, 0, -11343, 0, -11342, 0, -11341, 0, -11339, 0, -11338, 0, -11337, 0, -11335, 0, -11334, 0, -11333, 0, -11331, 0, -11330, 0, -11329, 0, -11328, 0, -11327, 0, -11326, 0, -11325, 0, -11322, 0, -11321, 0, -11318, 0, -11317, 0, -11316, 0, -11315, 0, -11314, 0, -11313, 0, -11311, 0, -11310, 0, -11309, 0, -11308, 0, -11307, 0, -11306, 0, -11305, 0, -11303, 0, -11302, 0, -11301, 0, -11300, 0, -11299, 0, -11298, 0, -11297, 0, -11296, 0, -11294, 0, -11292, 0, -11291, 0, -11290, 0, -11289, 0, -11288, 0, -11287, 0, -11286, 0, -11285, 0, -11282, 0, -11281, 0, -11279, 0, -11278, 0, -11277, 0, -11275, 0, -11274, 0, -11273, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -11272, 0, -11271, 0, -11270, 0, -11269, 0, -11266, 0, -11264, 0, -11262, 0, -11261, 0, -11260, 0, -11259, 0, -11258, 0, -11257, 0, -11255, 0, -11254, 0, -11253, 0, -11252, 0, -11251, 0, -11250, 0, -11249, 0, -11248, 0, -11247, 0, -11246, 0, -11245, 0, -11244, 0, -11243, 0, -11242, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -11241, 0, -11240, 0, -11239, 0, -11238, 0, -11237, 0, -11236, 0, -11234, 0, -11233, 0, -11232, 0, -11231, 0, -11230, 0, -11229, 0, -11228, 0, -11227, 0, -11226, 0, -11225, 0, -11224, 0, -11223, 0, -11222, 0, -11221, 0, -11220, 0, -11219, 0, -11218, 0, -11217, 0, -11216, 0, -11215, 0, -11214, 0, -11213, 0, -11212, 0, -11211, 0, -11210, 0, -11209, 0, -11208, 0, -11207, 0, -11206, 0, -11205, 0, -11204, 0, -11203, 0, -11202, 0, -11201, 0, -11199, 0, -11198, 0, -11197, 0, -11195, 0, -11194, 0, -11193, 0, -11192, 0, -11191, 0, -11190, 0, -11189, 0, -11188, 0, -11187, 0, -11186, 0, -11185, 0, -11184, 0, -11183, 0, -11182, 0, -11181, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -11180, 0, -11179, 0, -11178, 0, -11177, 0, -11176, 0, -11175, 0, -11174, 0, -11173, 0, -11171, 0, -11170, 0, -11169, 0, -11167, 0, -11166, 0, -11165, 0, -11163, 0, -11162, 0, -11161, 0, -11160, 0, -11159, 0, -11158, 0, -11157, 0, -11156, 0, -11154, 0, -11152, 0, -11151, 0, -11150, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -11149, 0, -11148, 0, -11147, 0, -11146, 0, -11145, 0, -11142, 0, -11141, 0, -11139, 0, -11138, 0, -11135, 0, -11133, 0, -11132, 0, -11131, 0, -11130, 0, -11129, 0, -11126, 0, -11124, 0, -11122, 0, -11121, 0, -11120, 0, -11119, 0, -11118, 0, -11117, 0, -11115, 0, -11114, 0, -11113, 0, -11112, 0, -11111, 0, -11110, 0, -11109, 0, -11108, 0, -11107, 0, -11106, 0, -11105, 0, -11104, 0, -11103, 0, -11102, 0, -11101, 0, -11100, 0, -11099, 0, -11098, 0, -11097, 0, -11096, 0, -11094, 0, -11093, 0, -11092, 0, -11091, 0, -11090, 0, -11089, 0, -11088, 0, -11087, 0, -11086, 0, -11085, 0, -11084, 0, -11083, 0, -11082, 0, -11081, 0, -11080, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -11079, 0, -11078, 0, -11077, 0, -11076, 0, -11075, 0, -11074, 0, -11073, 0, -11072, 0, -11071, 0, -11070, 0, -11069, 0, -11068, 0, -11067, 0, -11066, 0, -11065, 0, -11064, 0, -11063, 0, -11062, 0, -11061, 0, -11059, 0, -11058, 0, -11057, 0, -11055, 0, -11054, 0, -11053, 0, -11051, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -11050, 0, -11049, 0, -11048, 0, -11047, 0, -11046, 0, -11045, 0, -11043, 0, -11042, 0, -11040, 0, -11039, 0, -11038, 0, -11037, 0, -11036, 0, -11035, 0, -11034, 0, -11033, 0, -11031, 0, -11030, 0, -11029, 0, -11027, 0, -11026, 0, -11025, 0, -11023, 0, -11022, 0, -11021, 0, -11020, 0, -11019, 0, -11018, 0, -11017, 0, -11015, 0, -11014, 0, -11012, 0, -11010, 0, -11009, 0, -11008, 0, -11007, 0, -11006, 0, -11005, 0, -11003, 0, -11002, 0, -11001, 0, -10999, 0, -10998, 0, -10997, 0, -10995, 0, -10994, 0, -10993, 0, -10992, 0, -10991, 0, -10990, 0, -10989, 0, -10986, 0, -10984, 0, -10983, 0, -10982, 0, -10981, 0, -10980, 0, -10979, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -10978, 0, -10977, 0, -10976, 0, -10975, 0, -10974, 0, -10973, 0, -10972, 0, -10971, 0, -10970, 0, -10969, 0, -10968, 0, -10967, 0, -10966, 0, -10965, 0, -10964, 0, -10963, 0, -10962, 0, -10961, 0, -10960, 0, -10959, 0, -10958, 0, -10957, 0, -10956, 0, -10955, 0, -10954, 0, -10953, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -10952, 0, -10951, 0, -10950, 0, -10949, 0, -10946, 0, -10945, 0, -10943, 0, -10942, 0, -10941, 0, -10939, 0, -10938, 0, -10937, 0, -10936, 0, -10935, 0, -10934, 0, -10933, 0, -10930, 0, -10928, 0, -10926, 0, -10925, 0, -10924, 0, -10923, 0, -10922, 0, -10921, 0, -10918, 0, -10917, 0, -10915, 0, -10914, 0, -10913, 0, -10911, 0, -10910, 0, -10909, 0, -10908, 0, -10906, 0, -10905, 0, -10902, 0, -10900, 0, -10898, 0, -10897, 0, -10896, 0, -10895, 0, -10894, 0, -10893, 0, -10890, 0, -10889, 0, -10887, 0, -10886, 0, -10885, 0, -10883, 0, -10882, 0, -10881, 0, -10880, 0, -10879, 0, -10878, 0, -10877, 0, -10874, 0, -10870, 0, -10869, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -10868, 0, -10867, 0, -10866, 0, -10865, 0, -10863, 0, -10862, 0, -10861, 0, -10860, 0, -10859, 0, -10858, 0, -10857, 0, -10856, 0, -10855, 0, -10854, 0, -10853, 0, -10852, 0, -10851, 0, -10850, 0, -10849, 0, -10848, 0, -10847, 0, -10846, 0, -10845, 0, -10844, 0, -10842, 0, -10841, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -10840, 0, -10839, 0, -10838, 0, -10837, 0, -10836, 0, -10835, 0, -10834, 0, -10833, 0, -10832, 0, -10831, 0, -10830, 0, -10829, 0, -10828, 0, -10827, 0, -10826, 0, -10825, 0, -10824, 0, -10823, 0, -10822, 0, -10821, 0, -10820, 0, -10819, 0, -10818, 0, -10817, 0, -10816, 0, -10815, 0, -10814, 0, -10813, 0, -10812, 0, -10811, 0, -10810, 0, -10809, 0, -10806, 0, -10805, 0, -10803, 0, -10802, 0, -10801, 0, -10799, 0, -10797, 0, -10796, 0, -10795, 0, -10794, 0, -10793, 0, -10790, 0, -10788, 0, -10786, 0, -10785, 0, -10784, 0, -10783, 0, -10782, 0, -10781, 0, -10778, 0, -10777, 0, -10775, 0, -10774, 0, -10773, 0, -10771, 0, -10770, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -10769, 0, -10768, 0, -10767, 0, -10766, 0, -10765, 0, -10762, 0, -10760, 0, -10758, 0, -10757, 0, -10756, 0, -10755, 0, -10754, 0, -10753, 0, -10750, 0, -10749, 0, -10747, 0, -10746, 0, -10745, 0, -10743, 0, -10742, 0, -10741, 0, -10740, 0, -10739, 0, -10738, 0, -10737, 0, -10734, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -10730, 0, -10729, 0, -10728, 0, -10727, 0, -10726, 0, -10725, 0, -10723, 0, -10722, 0, -10721, 0, -10719, 0, -10718, 0, -10717, 0, -10715, 0, -10714, 0, -10713, 0, -10712, 0, -10711, 0, -10710, 0, -10709, 0, -10708, 0, -10706, 0, -10705, 0, -10704, 0, -10703, 0, -10702, 0, -10701, 0, -10700, 0, -10699, 0, -10698, 0, -10697, 0, -10694, 0, -10693, 0, -10691, 0, -10690, 0, -10689, 0, -10687, 0, -10686, 0, -10685, 0, -10684, 0, -10682, 0, -10681, 0, -10678, 0, -10676, 0, -10674, 0, -10673, 0, -10672, 0, -10670, 0, -10669, 0, -10666, 0, -10665, 0, -10663, 0, -10662, 0, -10661, 0, -10659, 0, -10658, 0, -10657, 0, -10656, 0, -10655, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -10654, 0, -10653, 0, -10652, 0, -10651, 0, -10650, 0, -10648, 0, -10646, 0, -10645, 0, -10644, 0, -10643, 0, -10642, 0, -10641, 0, -10638, 0, -10637, 0, -10635, 0, -10634, 0, -10633, 0, -10632, 0, -10631, 0, -10630, 0, -10629, 0, -10628, 0, -10627, 0, -10626, 0, -10625, 0, -10624, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -10623, 0, -10622, 0, -10620, 0, -10618, 0, -10617, 0, -10616, 0, -10615, 0, -10614, 0, -10613, 0, -10610, 0, -10609, 0, -10607, 0, -10606, 0, -10605, 0, -10603, 0, -10602, 0, -10601, 0, -10600, 0, -10599, 0, -10598, 0, -10597, 0, -10596, 0, -10594, 0, -10592, 0, -10590, 0, -10589, 0, -10588, 0, -10587, 0, -10586, 0, -10585, 0, -10583, 0, -10582, 0, -10581, 0, -10579, 0, -10578, 0, -10577, 0, -10575, 0, -10574, 0, -10573, 0, -10572, 0, -10571, 0, -10570, 0, -10569, 0, -10568, 0, -10566, 0, -10564, 0, -10563, 0, -10562, 0, -10561, 0, -10560, 0, -10559, 0, -10558, 0, -10557, 0, -10554, 0, -10553, 0, -10551, 0, -10550, 0, -10549, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -10547, 0, -10546, 0, -10545, 0, -10544, 0, -10542, 0, -10541, 0, -10539, 0, -10538, 0, -10536, 0, -10534, 0, -10533, 0, -10532, 0, -10531, 0, -10530, 0, -10529, 0, -10527, 0, -10526, 0, -10525, 0, -10523, 0, -10522, 0, -10521, 0, -10519, 0, -10518, 0, -10517, 0, -10516, 0, -10515, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -10514, 0, -10513, 0, -10511, 0, -10510, 0, -10509, 0, -10508, 0, -10506, 0, -10505, 0, -10504, 0, -10503, 0, -10502, 0, -10501, 0, -10498, 0, -10497, 0, -10495, 0, -10494, 0, -10493, 0, -10491, 0, -10490, 0, -10489, 0, -10488, 0, -10487, 0, -10486, 0, -10485, 0, -10484, 0, -10483, 0, -10482, 0, -10481, 0, -10480, 0, -10478, 0, -10477, 0, -10476, 0, -10475, 0, -10474, 0, -10473, 0, -10470, 0, -10469, 0, -10467, 0, -10466, 0, -10465, 0, -10463, 0, -10462, 0, -10461, 0, -10460, 0, -10459, 0, -10458, 0, -10457, 0, -10454, 0, -10452, 0, -10450, 0, -10449, 0, -10448, 0, -10447, 0, -10446, 0, -10445, 0, -10442, 0, -10441, 0, -10439, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -10438, 0, -10437, 0, -10435, 0, -10434, 0, -10433, 0, -10432, 0, -10431, 0, -10430, 0, -10429, 0, -10427, 0, -10426, 0, -10424, 0, -10422, 0, -10421, 0, -10420, 0, -10419, 0, -10418, 0, -10417, 0, -10414, 0, -10413, 0, -10411, 0, -10406, 0, -10405, 0, -10404, 0, -10403, 0, -10402, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -2, 0, -10401, 0, -10398, 0, -10396, 0, -10394, 0, -10393, 0, -10392, 0, -10390, 0, -10389, 0, -10387, 0, -10386, 0, -10385, 0, -10383, 0, -10382, 0, -10381, 0, -10379, 0, -10378, 0, -10377, 0, -10376, 0, -10375, 0, -10374, 0, -10373, 0, -10370, 0, -10369, 0, -10368, 0, -10366, 0, -10365, 0, -10364, 0, -10363, 0, -10362, 0, -10361, 0, -10358, 0, -10357, 0, -10355, 0, -10354, 0, -10353, 0, -10351, 0, -10350, 0, -10349, 0, -10348, 0, -10347, 0, -10346, 0, -10345, 0, -10342, 0, -10340, 0, -10338, 0, -10337, 0, -10336, 0, -10335, 0, -10334, 0, -10333, 0 ], [ "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0 ], ALLOC_NORMAL);
    _cp949ext_decmap = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 65, -2, 0, 0, 0, 0, 0, 0, 65, -2, 0, 0, 0, 0, 0, 0, 65, -2, 0, 0, 0, 0, 0, 0, 65, -2, 0, 0, 0, 0, 0, 0, 65, -2, 0, 0, 0, 0, 0, 0, 65, -2, 0, 0, 0, 0, 0, 0, 65, -2, 0, 0, 0, 0, 0, 0, 65, -2, 0, 0, 0, 0, 0, 0, 65, -2, 0, 0, 0, 0, 0, 0, 65, -2, 0, 0, 0, 0, 0, 0, 65, -2, 0, 0, 0, 0, 0, 0, 65, -2, 0, 0, 0, 0, 0, 0, 65, -2, 0, 0, 0, 0, 0, 0, 65, -2, 0, 0, 0, 0, 0, 0, 65, -2, 0, 0, 0, 0, 0, 0, 65, -2, 0, 0, 0, 0, 0, 0, 65, -2, 0, 0, 0, 0, 0, 0, 65, -2, 0, 0, 0, 0, 0, 0, 65, -2, 0, 0, 0, 0, 0, 0, 65, -2, 0, 0, 0, 0, 0, 0, 65, -2, 0, 0, 0, 0, 0, 0, 65, -2, 0, 0, 0, 0, 0, 0, 65, -2, 0, 0, 0, 0, 0, 0, 65, -2, 0, 0, 0, 0, 0, 0, 65, -2, 0, 0, 0, 0, 0, 0, 65, -2, 0, 0, 0, 0, 0, 0, 65, -2, 0, 0, 0, 0, 0, 0, 65, -2, 0, 0, 0, 0, 0, 0, 65, -2, 0, 0, 0, 0, 0, 0, 65, -2, 0, 0, 0, 0, 0, 0, 65, -2, 0, 0, 0, 0, 0, 0, 65, -2, 0, 0, 0, 0, 0, 0, 65, -96, 0, 0, 0, 0, 0, 0, 65, -96, 0, 0, 0, 0, 0, 0, 65, -96, 0, 0, 0, 0, 0, 0, 65, -96, 0, 0, 0, 0, 0, 0, 65, -96, 0, 0, 0, 0, 0, 0, 65, -96, 0, 0, 0, 0, 0, 0, 65, -96, 0, 0, 0, 0, 0, 0, 65, -96, 0, 0, 0, 0, 0, 0, 65, -96, 0, 0, 0, 0, 0, 0, 65, -96, 0, 0, 0, 0, 0, 0, 65, -96, 0, 0, 0, 0, 0, 0, 65, -96, 0, 0, 0, 0, 0, 0, 65, -96, 0, 0, 0, 0, 0, 0, 65, -96, 0, 0, 0, 0, 0, 0, 65, -96, 0, 0, 0, 0, 0, 0, 65, -96, 0, 0, 0, 0, 0, 0, 65, -96, 0, 0, 0, 0, 0, 0, 65, -96, 0, 0, 0, 0, 0, 0, 65, -96, 0, 0, 0, 0, 0, 0, 65, -96, 0, 0, 0, 0, 0, 0, 65, -96, 0, 0, 0, 0, 0, 0, 65, -96, 0, 0, 0, 0, 0, 0, 65, -96, 0, 0, 0, 0, 0, 0, 65, -96, 0, 0, 0, 0, 0, 0, 65, -96, 0, 0, 0, 0, 0, 0, 65, -96, 0, 0, 0, 0, 0, 0, 65, -96, 0, 0, 0, 0, 0, 0, 65, -96, 0, 0, 0, 0, 0, 0, 65, -96, 0, 0, 0, 0, 0, 0, 65, -96, 0, 0, 0, 0, 0, 0, 65, -96, 0, 0, 0, 0, 0, 0, 65, -96, 0, 0, 0, 0, 0, 0, 65, -96, 0, 0, 0, 0, 0, 0, 65, -96, 0, 0, 0, 0, 0, 0, 65, -96, 0, 0, 0, 0, 0, 0, 65, -96, 0, 0, 0, 0, 0, 0, 65, -96, 0, 0, 0, 0, 0, 0, 65, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0 ], ALLOC_NORMAL);
    _cp949_encmap = allocate([ 0, 0, 0, 0, -95, -2, 0, 0, 0, 0, 0, 0, 17, 103, 0, 0, 0, 0, 0, 0, -57, -35, 0, 0, 0, 0, 0, 0, -111, -55, 0, 0, 0, 0, 0, 0, 1, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, -84, 0, 0, 0, 0, 0, 0, 3, -44, 0, 0, 0, 0, 0, 0, 0, -91, 0, 0, 0, 0, 0, 0, 18, 18, 0, 0, 0, 0, 0, 0, 96, -23, 0, 0, 0, 0, 0, 0, 0, -47, 0, 0, 0, 0, 0, 0, 5, 109, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -10, 0, 0, 0, 0, 0, 0, 49, -114, 0, 0, 0, 0, 0, 0, 0, 127, 0, 0, 0, 0, 0, 0, -128, -35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -5, 0, 0, 0, 0, 0, 0, 1, -6, 0, 0, 0, 0, 0, 0, 2, -1, 0, 0, 0, 0, 0, 0, 0, -3, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 5, -8, 0, 0, 0, 0, 0, 0, 3, -6, 0, 0, 0, 0, 0, 0, 4, -2, 0, 0, 0, 0, 0, 0, 6, -6, 0, 0, 0, 0, 0, 0, 3, -4, 0, 0, 0, 0, 0, 0, 0, -3, 0, 0, 0, 0, 0, 0, 15, -1, 0, 0, 0, 0, 0, 0, 1, -23, 0, 0, 0, 0, 0, 0, 5, -6, 0, 0, 0, 0, 0, 0, 1, -3, 0, 0, 0, 0, 0, 0, 7, -2, 0, 0, 0, 0, 0, 0, 2, -5, 0, 0, 0, 0, 0, 0, 1, -1, 0, 0, 0, 0, 0, 0, 15, -5, 0, 0, 0, 0, 0, 0, 1, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 1, -9, 0, 0, 0, 0, 0, 0, 13, -2, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 6, -1, 0, 0, 0, 0, 0, 0, 0, -2, 0, 0, 0, 0, 0, 0, 18, -6, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 2, -5, 0, 0, 0, 0, 0, 0, 4, -20, 0, 0, 0, 0, 0, 0, 8, -13, 0, 0, 0, 0, 0, 0, 11, -5, 0, 0, 0, 0, 0, 0, 23, -1, 0, 0, 0, 0, 0, 0, 1, -2, 0, 0, 0, 0, 0, 0, 1, -3, 0, 0, 0, 0, 0, 0, 4, -1, 0, 0, 0, 0, 0, 0, 0, -3, 0, 0, 0, 0, 0, 0, 10, -2, 0, 0, 0, 0, 0, 0, 1, -9, 0, 0, 0, 0, 0, 0, 1, -4, 0, 0, 0, 0, 0, 0, 0, -2, 0, 0, 0, 0, 0, 0, 1, -13, 0, 0, 0, 0, 0, 0, 2, -5, 0, 0, 0, 0, 0, 0, 1, -5, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 15, -23, 0, 0, 0, 0, 0, 0, 7, -2, 0, 0, 0, 0, 0, 0, 0, -5, 0, 0, 0, 0, 0, 0, 9, -100, 0, 0, 0, 0, 0, 0, 54, -4, 0, 0, 0, 0, 0, 0, 0, -3, 0, 0, 0, 0, 0, 0, 2, -2, 0, 0, 0, 0, 0, 0, 5, -2, 0, 0, 0, 0, 0, 0, 1, -3, 0, 0, 0, 0, 0, 0, 3, -4, 0, 0, 0, 0, 0, 0, 17, -1, 0, 0, 0, 0, 0, 0, 2, -2, 0, 0, 0, 0, 0, 0, 0, -2, 0, 0, 0, 0, 0, 0, 5, -3, 0, 0, 0, 0, 0, 0, 7, -8, 0, 0, 0, 0, 0, 0, 0, -2, 0, 0, 0, 0, 0, 0, 0, -102, 0, 0, 0, 0, 0, 0, 55, -3, 0, 0, 0, 0, 0, 0, 4, -13, 0, 0, 0, 0, 0, 0, 10, -2, 0, 0, 0, 0, 0, 0, 3, -3, 0, 0, 0, 0, 0, 0, 0, -3, 0, 0, 0, 0, 0, 0, 2, -11, 0, 0, 0, 0, 0, 0, 13, -4, 0, 0, 0, 0, 0, 0, 4, -10, 0, 0, 0, 0, 0, 0, 4, 127, 0, 0, 0, 0, 0, 0, 119, -30, 0, 0, 0, 0, 0, 0, 28, -5, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, -2, 0, 0, 0, 0, 0, 0, 3, -1, 0, 0, 0, 0, 0, 0, 1, -18, 0, 0, 0, 0, 0, 0, 26, -24, 0, 0, 0, 0, 0, 0, 13, -10, 0, 0, 0, 0, 0, 0, 9, -6, 0, 0, 0, 0, 0, 0, 26, -12, 0, 0, 0, 0, 0, 0, 7, -100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, -93, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, -26, 0, 0 ], [ "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0, "i16*", 0, 0, 0, "i8", "i8", 0, 0 ], ALLOC_NORMAL);
    _u2cgk_choseong = allocate([ 161, 162, 164, 167, 168, 169, 177, 178, 179, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190 ], "i8", ALLOC_NORMAL);
    _u2cgk_jungseong = allocate([ 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211 ], "i8", ALLOC_NORMAL);
    _u2cgk_jongseong = allocate([ 212, 161, 162, 163, 164, 165, 166, 167, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 180, 181, 182, 183, 184, 186, 187, 188, 189, 190 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 48, 120, 97, 99, 48, 48, 32, 60, 61, 32, 99, 32, 38, 38, 32, 99, 32, 60, 61, 32, 48, 120, 100, 55, 97, 51, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 46, 46, 47, 99, 112, 121, 116, 104, 111, 110, 47, 77, 111, 100, 117, 108, 101, 115, 47, 99, 106, 107, 99, 111, 100, 101, 99, 115, 47, 95, 99, 111, 100, 101, 99, 115, 95, 107, 114, 46, 99, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8558 = allocate([ 101, 117, 99, 95, 107, 114, 95, 101, 110, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    _cgk2u_choseong = allocate([ 0, 1, 127, 2, 127, 127, 3, 4, 5, 127, 127, 127, 127, 127, 127, 127, 6, 7, 8, 127, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18 ], "i8", ALLOC_NORMAL);
    _cgk2u_jongseong = allocate([ 1, 2, 3, 4, 5, 6, 7, 127, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 127, 18, 19, 20, 21, 22, 127, 23, 24, 25, 26, 27 ], "i8", ALLOC_NORMAL);
    _u2johabidx_choseong = allocate([ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], "i8", ALLOC_NORMAL);
    _u2johabidx_jungseong = allocate([ 3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21, 22, 23, 26, 27, 28, 29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], "i8", ALLOC_NORMAL);
    _u2johabidx_jongseong = allocate([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 0, 0, 0, 0 ], "i8", ALLOC_NORMAL);
    _u2johabjamo = allocate([ -30655, 0, -29631, 0, -31676, 0, -28607, 0, -31674, 0, -31673, 0, -27583, 0, -26559, 0, -25535, 0, -31670, 0, -31669, 0, -31668, 0, -31667, 0, -31666, 0, -31665, 0, -31664, 0, -24511, 0, -23487, 0, -22463, 0, -31660, 0, -21439, 0, -20415, 0, -19391, 0, -18367, 0, -17343, 0, -16319, 0, -15295, 0, -14271, 0, -13247, 0, -12223, 0, -31647, 0, -31615, 0, -31583, 0, -31551, 0, -31519, 0, -31423, 0, -31391, 0, -31359, 0, -31327, 0, -31295, 0, -31263, 0, -31167, 0, -31135, 0, -31103, 0, -31071, 0, -31039, 0, -31007, 0, -30911, 0, -30879, 0, -30847, 0, -30815, 0 ], [ "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0, "i16", 0 ], ALLOC_NORMAL);
    __str10 = allocate([ 40, 99, 111, 100, 101, 32, 38, 32, 48, 120, 56, 48, 48, 48, 41, 32, 61, 61, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9011 = allocate([ 106, 111, 104, 97, 98, 95, 101, 110, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    _johabidx_choseong = allocate([ 255, 253, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255 ], "i8", ALLOC_NORMAL);
    _johabidx_jungseong = allocate([ 255, 255, 253, 0, 1, 2, 3, 4, 255, 255, 5, 6, 7, 8, 9, 10, 255, 255, 11, 12, 13, 14, 15, 16, 255, 255, 17, 18, 19, 20, 255, 255 ], "i8", ALLOC_NORMAL);
    _johabidx_jongseong = allocate([ 255, 253, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 255, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 255, 255 ], "i8", ALLOC_NORMAL);
    _johabjamo_choseong = allocate([ 255, 253, 49, 50, 52, 55, 56, 57, 65, 66, 67, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255 ], "i8", ALLOC_NORMAL);
    _johabjamo_jungseong = allocate([ 255, 255, 253, 79, 80, 81, 82, 83, 255, 255, 84, 85, 86, 87, 88, 89, 255, 255, 90, 91, 92, 93, 94, 95, 255, 255, 96, 97, 98, 99, 255, 255 ], "i8", ALLOC_NORMAL);
    _johabjamo_jongseong = allocate([ 255, 253, 49, 50, 51, 52, 53, 54, 55, 57, 58, 59, 60, 61, 62, 63, 64, 65, 255, 66, 68, 69, 70, 71, 72, 74, 75, 76, 77, 78, 255, 255 ], "i8", ALLOC_NORMAL);
    __mapping_list = allocate(48, [ "i8*", 0, 0, 0, "%struct.dbcs_index*", 0, 0, 0, "%struct.dbcs_index*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.dbcs_index*", 0, 0, 0, "%struct.dbcs_index*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.dbcs_index*", 0, 0, 0, "%struct.dbcs_index*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.dbcs_index*", 0, 0, 0, "%struct.dbcs_index*", 0, 0, 0 ], ALLOC_NORMAL);
    __str11 = allocate([ 107, 115, 120, 49, 48, 48, 49, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 99, 112, 57, 52, 57, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 99, 112, 57, 52, 57, 101, 120, 116, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 101, 117, 99, 95, 107, 114, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 106, 111, 104, 97, 98, 0 ], "i8", ALLOC_NORMAL);
    __codec_list = allocate(144, [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*, i16**, i32, i8**, i32, i32)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*, i8**, i32)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*, i8**, i32, i16**, i32)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*, i16**, i32, i8**, i32, i32)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*, i8**, i32)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*, i8**, i32, i16**, i32)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32 (i8*)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*, i16**, i32, i8**, i32, i32)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*, i8**, i32)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*, i8**, i32, i16**, i32)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*)*", 0, 0, 0, "i32 (%union.MultibyteCodec_State*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str16 = allocate([ 95, 99, 111, 100, 101, 99, 115, 95, 107, 114, 0 ], "i8", ALLOC_NORMAL);
    HEAP[___methods] = __str5;
    HEAP[___methods + 4] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[___methods + 12] = __str6;
    HEAP[_ksx1001_decmap + 264] = ___ksx1001_decmap;
    HEAP[_ksx1001_decmap + 272] = ___ksx1001_decmap + 188;
    HEAP[_ksx1001_decmap + 280] = ___ksx1001_decmap + 330;
    HEAP[_ksx1001_decmap + 288] = ___ksx1001_decmap + 518;
    HEAP[_ksx1001_decmap + 296] = ___ksx1001_decmap + 706;
    HEAP[_ksx1001_decmap + 304] = ___ksx1001_decmap + 882;
    HEAP[_ksx1001_decmap + 312] = ___ksx1001_decmap + 1018;
    HEAP[_ksx1001_decmap + 320] = ___ksx1001_decmap + 1176;
    HEAP[_ksx1001_decmap + 328] = ___ksx1001_decmap + 1364;
    HEAP[_ksx1001_decmap + 336] = ___ksx1001_decmap + 1552;
    HEAP[_ksx1001_decmap + 344] = ___ksx1001_decmap + 1718;
    HEAP[_ksx1001_decmap + 352] = ___ksx1001_decmap + 1890;
    HEAP[_ksx1001_decmap + 384] = ___ksx1001_decmap + 2052;
    HEAP[_ksx1001_decmap + 392] = ___ksx1001_decmap + 2240;
    HEAP[_ksx1001_decmap + 400] = ___ksx1001_decmap + 2428;
    HEAP[_ksx1001_decmap + 408] = ___ksx1001_decmap + 2616;
    HEAP[_ksx1001_decmap + 416] = ___ksx1001_decmap + 2804;
    HEAP[_ksx1001_decmap + 424] = ___ksx1001_decmap + 2992;
    HEAP[_ksx1001_decmap + 432] = ___ksx1001_decmap + 3180;
    HEAP[_ksx1001_decmap + 440] = ___ksx1001_decmap + 3368;
    HEAP[_ksx1001_decmap + 448] = ___ksx1001_decmap + 3556;
    HEAP[_ksx1001_decmap + 456] = ___ksx1001_decmap + 3744;
    HEAP[_ksx1001_decmap + 464] = ___ksx1001_decmap + 3932;
    HEAP[_ksx1001_decmap + 472] = ___ksx1001_decmap + 4120;
    HEAP[_ksx1001_decmap + 480] = ___ksx1001_decmap + 4308;
    HEAP[_ksx1001_decmap + 488] = ___ksx1001_decmap + 4496;
    HEAP[_ksx1001_decmap + 496] = ___ksx1001_decmap + 4684;
    HEAP[_ksx1001_decmap + 504] = ___ksx1001_decmap + 4872;
    HEAP[_ksx1001_decmap + 512] = ___ksx1001_decmap + 5060;
    HEAP[_ksx1001_decmap + 520] = ___ksx1001_decmap + 5248;
    HEAP[_ksx1001_decmap + 528] = ___ksx1001_decmap + 5436;
    HEAP[_ksx1001_decmap + 536] = ___ksx1001_decmap + 5624;
    HEAP[_ksx1001_decmap + 544] = ___ksx1001_decmap + 5812;
    HEAP[_ksx1001_decmap + 552] = ___ksx1001_decmap + 6e3;
    HEAP[_ksx1001_decmap + 560] = ___ksx1001_decmap + 6188;
    HEAP[_ksx1001_decmap + 568] = ___ksx1001_decmap + 6376;
    HEAP[_ksx1001_decmap + 576] = ___ksx1001_decmap + 6564;
    HEAP[_ksx1001_decmap + 592] = ___ksx1001_decmap + 6752;
    HEAP[_ksx1001_decmap + 600] = ___ksx1001_decmap + 6940;
    HEAP[_ksx1001_decmap + 608] = ___ksx1001_decmap + 7128;
    HEAP[_ksx1001_decmap + 616] = ___ksx1001_decmap + 7316;
    HEAP[_ksx1001_decmap + 624] = ___ksx1001_decmap + 7504;
    HEAP[_ksx1001_decmap + 632] = ___ksx1001_decmap + 7692;
    HEAP[_ksx1001_decmap + 640] = ___ksx1001_decmap + 7880;
    HEAP[_ksx1001_decmap + 648] = ___ksx1001_decmap + 8068;
    HEAP[_ksx1001_decmap + 656] = ___ksx1001_decmap + 8256;
    HEAP[_ksx1001_decmap + 664] = ___ksx1001_decmap + 8444;
    HEAP[_ksx1001_decmap + 672] = ___ksx1001_decmap + 8632;
    HEAP[_ksx1001_decmap + 680] = ___ksx1001_decmap + 8820;
    HEAP[_ksx1001_decmap + 688] = ___ksx1001_decmap + 9008;
    HEAP[_ksx1001_decmap + 696] = ___ksx1001_decmap + 9196;
    HEAP[_ksx1001_decmap + 704] = ___ksx1001_decmap + 9384;
    HEAP[_ksx1001_decmap + 712] = ___ksx1001_decmap + 9572;
    HEAP[_ksx1001_decmap + 720] = ___ksx1001_decmap + 9760;
    HEAP[_ksx1001_decmap + 728] = ___ksx1001_decmap + 9948;
    HEAP[_ksx1001_decmap + 736] = ___ksx1001_decmap + 10136;
    HEAP[_ksx1001_decmap + 744] = ___ksx1001_decmap + 10324;
    HEAP[_ksx1001_decmap + 752] = ___ksx1001_decmap + 10512;
    HEAP[_ksx1001_decmap + 760] = ___ksx1001_decmap + 10700;
    HEAP[_ksx1001_decmap + 768] = ___ksx1001_decmap + 10888;
    HEAP[_ksx1001_decmap + 776] = ___ksx1001_decmap + 11076;
    HEAP[_ksx1001_decmap + 784] = ___ksx1001_decmap + 11264;
    HEAP[_ksx1001_decmap + 792] = ___ksx1001_decmap + 11452;
    HEAP[_ksx1001_decmap + 800] = ___ksx1001_decmap + 11640;
    HEAP[_ksx1001_decmap + 808] = ___ksx1001_decmap + 11828;
    HEAP[_ksx1001_decmap + 816] = ___ksx1001_decmap + 12016;
    HEAP[_ksx1001_decmap + 824] = ___ksx1001_decmap + 12204;
    HEAP[_ksx1001_decmap + 832] = ___ksx1001_decmap + 12392;
    HEAP[_ksx1001_decmap + 840] = ___ksx1001_decmap + 12580;
    HEAP[_ksx1001_decmap + 848] = ___ksx1001_decmap + 12768;
    HEAP[_ksx1001_decmap + 856] = ___ksx1001_decmap + 12956;
    HEAP[_ksx1001_decmap + 864] = ___ksx1001_decmap + 13144;
    HEAP[_ksx1001_decmap + 872] = ___ksx1001_decmap + 13332;
    HEAP[_ksx1001_decmap + 880] = ___ksx1001_decmap + 13520;
    HEAP[_ksx1001_decmap + 888] = ___ksx1001_decmap + 13708;
    HEAP[_ksx1001_decmap + 896] = ___ksx1001_decmap + 13896;
    HEAP[_ksx1001_decmap + 904] = ___ksx1001_decmap + 14084;
    HEAP[_ksx1001_decmap + 912] = ___ksx1001_decmap + 14272;
    HEAP[_ksx1001_decmap + 920] = ___ksx1001_decmap + 14460;
    HEAP[_ksx1001_decmap + 928] = ___ksx1001_decmap + 14648;
    HEAP[_ksx1001_decmap + 936] = ___ksx1001_decmap + 14836;
    HEAP[_ksx1001_decmap + 944] = ___ksx1001_decmap + 15024;
    HEAP[_ksx1001_decmap + 952] = ___ksx1001_decmap + 15212;
    HEAP[_ksx1001_decmap + 960] = ___ksx1001_decmap + 15400;
    HEAP[_ksx1001_decmap + 968] = ___ksx1001_decmap + 15588;
    HEAP[_ksx1001_decmap + 976] = ___ksx1001_decmap + 15776;
    HEAP[_ksx1001_decmap + 984] = ___ksx1001_decmap + 15964;
    HEAP[_ksx1001_decmap + 992] = ___ksx1001_decmap + 16152;
    HEAP[_ksx1001_decmap + 1e3] = ___ksx1001_decmap + 16340;
    HEAP[_cp949ext_decmap + 1032] = ___cp949ext_decmap;
    HEAP[_cp949ext_decmap + 1040] = ___cp949ext_decmap + 380;
    HEAP[_cp949ext_decmap + 1048] = ___cp949ext_decmap + 760;
    HEAP[_cp949ext_decmap + 1056] = ___cp949ext_decmap + 1140;
    HEAP[_cp949ext_decmap + 1064] = ___cp949ext_decmap + 1520;
    HEAP[_cp949ext_decmap + 1072] = ___cp949ext_decmap + 1900;
    HEAP[_cp949ext_decmap + 1080] = ___cp949ext_decmap + 2280;
    HEAP[_cp949ext_decmap + 1088] = ___cp949ext_decmap + 2660;
    HEAP[_cp949ext_decmap + 1096] = ___cp949ext_decmap + 3040;
    HEAP[_cp949ext_decmap + 1104] = ___cp949ext_decmap + 3420;
    HEAP[_cp949ext_decmap + 1112] = ___cp949ext_decmap + 3800;
    HEAP[_cp949ext_decmap + 1120] = ___cp949ext_decmap + 4180;
    HEAP[_cp949ext_decmap + 1128] = ___cp949ext_decmap + 4560;
    HEAP[_cp949ext_decmap + 1136] = ___cp949ext_decmap + 4940;
    HEAP[_cp949ext_decmap + 1144] = ___cp949ext_decmap + 5320;
    HEAP[_cp949ext_decmap + 1152] = ___cp949ext_decmap + 5700;
    HEAP[_cp949ext_decmap + 1160] = ___cp949ext_decmap + 6080;
    HEAP[_cp949ext_decmap + 1168] = ___cp949ext_decmap + 6460;
    HEAP[_cp949ext_decmap + 1176] = ___cp949ext_decmap + 6840;
    HEAP[_cp949ext_decmap + 1184] = ___cp949ext_decmap + 7220;
    HEAP[_cp949ext_decmap + 1192] = ___cp949ext_decmap + 7600;
    HEAP[_cp949ext_decmap + 1200] = ___cp949ext_decmap + 7980;
    HEAP[_cp949ext_decmap + 1208] = ___cp949ext_decmap + 8360;
    HEAP[_cp949ext_decmap + 1216] = ___cp949ext_decmap + 8740;
    HEAP[_cp949ext_decmap + 1224] = ___cp949ext_decmap + 9120;
    HEAP[_cp949ext_decmap + 1232] = ___cp949ext_decmap + 9500;
    HEAP[_cp949ext_decmap + 1240] = ___cp949ext_decmap + 9880;
    HEAP[_cp949ext_decmap + 1248] = ___cp949ext_decmap + 10260;
    HEAP[_cp949ext_decmap + 1256] = ___cp949ext_decmap + 10640;
    HEAP[_cp949ext_decmap + 1264] = ___cp949ext_decmap + 11020;
    HEAP[_cp949ext_decmap + 1272] = ___cp949ext_decmap + 11400;
    HEAP[_cp949ext_decmap + 1280] = ___cp949ext_decmap + 11780;
    HEAP[_cp949ext_decmap + 1288] = ___cp949ext_decmap + 12160;
    HEAP[_cp949ext_decmap + 1296] = ___cp949ext_decmap + 12352;
    HEAP[_cp949ext_decmap + 1304] = ___cp949ext_decmap + 12544;
    HEAP[_cp949ext_decmap + 1312] = ___cp949ext_decmap + 12736;
    HEAP[_cp949ext_decmap + 1320] = ___cp949ext_decmap + 12928;
    HEAP[_cp949ext_decmap + 1328] = ___cp949ext_decmap + 13120;
    HEAP[_cp949ext_decmap + 1336] = ___cp949ext_decmap + 13312;
    HEAP[_cp949ext_decmap + 1344] = ___cp949ext_decmap + 13504;
    HEAP[_cp949ext_decmap + 1352] = ___cp949ext_decmap + 13696;
    HEAP[_cp949ext_decmap + 1360] = ___cp949ext_decmap + 13888;
    HEAP[_cp949ext_decmap + 1368] = ___cp949ext_decmap + 14080;
    HEAP[_cp949ext_decmap + 1376] = ___cp949ext_decmap + 14272;
    HEAP[_cp949ext_decmap + 1384] = ___cp949ext_decmap + 14464;
    HEAP[_cp949ext_decmap + 1392] = ___cp949ext_decmap + 14656;
    HEAP[_cp949ext_decmap + 1400] = ___cp949ext_decmap + 14848;
    HEAP[_cp949ext_decmap + 1408] = ___cp949ext_decmap + 15040;
    HEAP[_cp949ext_decmap + 1416] = ___cp949ext_decmap + 15232;
    HEAP[_cp949ext_decmap + 1424] = ___cp949ext_decmap + 15424;
    HEAP[_cp949ext_decmap + 1432] = ___cp949ext_decmap + 15616;
    HEAP[_cp949ext_decmap + 1440] = ___cp949ext_decmap + 15808;
    HEAP[_cp949ext_decmap + 1448] = ___cp949ext_decmap + 16e3;
    HEAP[_cp949ext_decmap + 1456] = ___cp949ext_decmap + 16192;
    HEAP[_cp949ext_decmap + 1464] = ___cp949ext_decmap + 16384;
    HEAP[_cp949ext_decmap + 1472] = ___cp949ext_decmap + 16576;
    HEAP[_cp949ext_decmap + 1480] = ___cp949ext_decmap + 16768;
    HEAP[_cp949ext_decmap + 1488] = ___cp949ext_decmap + 16960;
    HEAP[_cp949ext_decmap + 1496] = ___cp949ext_decmap + 17152;
    HEAP[_cp949ext_decmap + 1504] = ___cp949ext_decmap + 17344;
    HEAP[_cp949ext_decmap + 1512] = ___cp949ext_decmap + 17536;
    HEAP[_cp949ext_decmap + 1520] = ___cp949ext_decmap + 17728;
    HEAP[_cp949ext_decmap + 1528] = ___cp949ext_decmap + 17920;
    HEAP[_cp949ext_decmap + 1536] = ___cp949ext_decmap + 18112;
    HEAP[_cp949ext_decmap + 1544] = ___cp949ext_decmap + 18304;
    HEAP[_cp949ext_decmap + 1552] = ___cp949ext_decmap + 18496;
    HEAP[_cp949ext_decmap + 1560] = ___cp949ext_decmap + 18688;
    HEAP[_cp949ext_decmap + 1568] = ___cp949ext_decmap + 18880;
    HEAP[_cp949ext_decmap + 1576] = ___cp949ext_decmap + 19072;
    HEAP[_cp949ext_decmap + 1584] = ___cp949ext_decmap + 19264;
    HEAP[_cp949_encmap] = ___cp949_encmap;
    HEAP[_cp949_encmap + 8] = ___cp949_encmap + 188;
    HEAP[_cp949_encmap + 16] = ___cp949_encmap + 362;
    HEAP[_cp949_encmap + 24] = ___cp949_encmap + 408;
    HEAP[_cp949_encmap + 32] = ___cp949_encmap + 522;
    HEAP[_cp949_encmap + 256] = ___cp949_encmap + 684;
    HEAP[_cp949_encmap + 264] = ___cp949_encmap + 988;
    HEAP[_cp949_encmap + 272] = ___cp949_encmap + 1408;
    HEAP[_cp949_encmap + 280] = ___cp949_encmap + 1740;
    HEAP[_cp949_encmap + 288] = ___cp949_encmap + 1742;
    HEAP[_cp949_encmap + 296] = ___cp949_encmap + 2018;
    HEAP[_cp949_encmap + 304] = ___cp949_encmap + 2438;
    HEAP[_cp949_encmap + 384] = ___cp949_encmap + 2648;
    HEAP[_cp949_encmap + 392] = ___cp949_encmap + 3142;
    HEAP[_cp949_encmap + 400] = ___cp949_encmap + 3330;
    HEAP[_cp949_encmap + 408] = ___cp949_encmap + 3586;
    HEAP[_cp949_encmap + 624] = ___cp949_encmap + 3774;
    HEAP[_cp949_encmap + 632] = ___cp949_encmap + 4278;
    HEAP[_cp949_encmap + 640] = ___cp949_encmap + 4778;
    HEAP[_cp949_encmap + 648] = ___cp949_encmap + 5286;
    HEAP[_cp949_encmap + 656] = ___cp949_encmap + 5794;
    HEAP[_cp949_encmap + 664] = ___cp949_encmap + 6306;
    HEAP[_cp949_encmap + 672] = ___cp949_encmap + 6794;
    HEAP[_cp949_encmap + 680] = ___cp949_encmap + 7290;
    HEAP[_cp949_encmap + 688] = ___cp949_encmap + 7792;
    HEAP[_cp949_encmap + 696] = ___cp949_encmap + 8282;
    HEAP[_cp949_encmap + 704] = ___cp949_encmap + 8782;
    HEAP[_cp949_encmap + 712] = ___cp949_encmap + 9290;
    HEAP[_cp949_encmap + 720] = ___cp949_encmap + 9772;
    HEAP[_cp949_encmap + 728] = ___cp949_encmap + 10238;
    HEAP[_cp949_encmap + 736] = ___cp949_encmap + 10730;
    HEAP[_cp949_encmap + 744] = ___cp949_encmap + 11236;
    HEAP[_cp949_encmap + 752] = ___cp949_encmap + 11732;
    HEAP[_cp949_encmap + 760] = ___cp949_encmap + 12232;
    HEAP[_cp949_encmap + 768] = ___cp949_encmap + 12742;
    HEAP[_cp949_encmap + 776] = ___cp949_encmap + 13216;
    HEAP[_cp949_encmap + 784] = ___cp949_encmap + 13726;
    HEAP[_cp949_encmap + 792] = ___cp949_encmap + 14238;
    HEAP[_cp949_encmap + 800] = ___cp949_encmap + 14732;
    HEAP[_cp949_encmap + 808] = ___cp949_encmap + 15216;
    HEAP[_cp949_encmap + 816] = ___cp949_encmap + 15728;
    HEAP[_cp949_encmap + 824] = ___cp949_encmap + 16228;
    HEAP[_cp949_encmap + 832] = ___cp949_encmap + 16738;
    HEAP[_cp949_encmap + 840] = ___cp949_encmap + 17204;
    HEAP[_cp949_encmap + 848] = ___cp949_encmap + 17716;
    HEAP[_cp949_encmap + 856] = ___cp949_encmap + 18216;
    HEAP[_cp949_encmap + 864] = ___cp949_encmap + 18682;
    HEAP[_cp949_encmap + 872] = ___cp949_encmap + 19154;
    HEAP[_cp949_encmap + 880] = ___cp949_encmap + 19636;
    HEAP[_cp949_encmap + 888] = ___cp949_encmap + 20102;
    HEAP[_cp949_encmap + 896] = ___cp949_encmap + 20610;
    HEAP[_cp949_encmap + 904] = ___cp949_encmap + 21116;
    HEAP[_cp949_encmap + 912] = ___cp949_encmap + 21620;
    HEAP[_cp949_encmap + 920] = ___cp949_encmap + 22128;
    HEAP[_cp949_encmap + 928] = ___cp949_encmap + 22618;
    HEAP[_cp949_encmap + 936] = ___cp949_encmap + 23112;
    HEAP[_cp949_encmap + 944] = ___cp949_encmap + 23616;
    HEAP[_cp949_encmap + 952] = ___cp949_encmap + 24126;
    HEAP[_cp949_encmap + 960] = ___cp949_encmap + 24612;
    HEAP[_cp949_encmap + 968] = ___cp949_encmap + 25112;
    HEAP[_cp949_encmap + 976] = ___cp949_encmap + 25614;
    HEAP[_cp949_encmap + 984] = ___cp949_encmap + 26126;
    HEAP[_cp949_encmap + 992] = ___cp949_encmap + 26564;
    HEAP[_cp949_encmap + 1e3] = ___cp949_encmap + 27060;
    HEAP[_cp949_encmap + 1008] = ___cp949_encmap + 27564;
    HEAP[_cp949_encmap + 1016] = ___cp949_encmap + 27860;
    HEAP[_cp949_encmap + 1024] = ___cp949_encmap + 28258;
    HEAP[_cp949_encmap + 1032] = ___cp949_encmap + 28766;
    HEAP[_cp949_encmap + 1040] = ___cp949_encmap + 29272;
    HEAP[_cp949_encmap + 1048] = ___cp949_encmap + 29772;
    HEAP[_cp949_encmap + 1056] = ___cp949_encmap + 30278;
    HEAP[_cp949_encmap + 1064] = ___cp949_encmap + 30778;
    HEAP[_cp949_encmap + 1072] = ___cp949_encmap + 31256;
    HEAP[_cp949_encmap + 1080] = ___cp949_encmap + 31762;
    HEAP[_cp949_encmap + 1088] = ___cp949_encmap + 32272;
    HEAP[_cp949_encmap + 1096] = ___cp949_encmap + 32770;
    HEAP[_cp949_encmap + 1104] = ___cp949_encmap + 33254;
    HEAP[_cp949_encmap + 1112] = ___cp949_encmap + 33764;
    HEAP[_cp949_encmap + 1120] = ___cp949_encmap + 34074;
    HEAP[_cp949_encmap + 1128] = ___cp949_encmap + 34472;
    HEAP[_cp949_encmap + 1136] = ___cp949_encmap + 34952;
    HEAP[_cp949_encmap + 1144] = ___cp949_encmap + 35442;
    HEAP[_cp949_encmap + 1152] = ___cp949_encmap + 35944;
    HEAP[_cp949_encmap + 1160] = ___cp949_encmap + 36452;
    HEAP[_cp949_encmap + 1168] = ___cp949_encmap + 36940;
    HEAP[_cp949_encmap + 1176] = ___cp949_encmap + 37420;
    HEAP[_cp949_encmap + 1184] = ___cp949_encmap + 37906;
    HEAP[_cp949_encmap + 1192] = ___cp949_encmap + 38154;
    HEAP[_cp949_encmap + 1200] = ___cp949_encmap + 38370;
    HEAP[_cp949_encmap + 1208] = ___cp949_encmap + 38818;
    HEAP[_cp949_encmap + 1216] = ___cp949_encmap + 39330;
    HEAP[_cp949_encmap + 1224] = ___cp949_encmap + 39840;
    HEAP[_cp949_encmap + 1232] = ___cp949_encmap + 40346;
    HEAP[_cp949_encmap + 1240] = ___cp949_encmap + 40822;
    HEAP[_cp949_encmap + 1248] = ___cp949_encmap + 41236;
    HEAP[_cp949_encmap + 1256] = ___cp949_encmap + 41704;
    HEAP[_cp949_encmap + 1264] = ___cp949_encmap + 42188;
    HEAP[_cp949_encmap + 1272] = ___cp949_encmap + 42626;
    HEAP[_cp949_encmap + 1376] = ___cp949_encmap + 42926;
    HEAP[_cp949_encmap + 1384] = ___cp949_encmap + 43438;
    HEAP[_cp949_encmap + 1392] = ___cp949_encmap + 43950;
    HEAP[_cp949_encmap + 1400] = ___cp949_encmap + 44462;
    HEAP[_cp949_encmap + 1408] = ___cp949_encmap + 44974;
    HEAP[_cp949_encmap + 1416] = ___cp949_encmap + 45486;
    HEAP[_cp949_encmap + 1424] = ___cp949_encmap + 45998;
    HEAP[_cp949_encmap + 1432] = ___cp949_encmap + 46510;
    HEAP[_cp949_encmap + 1440] = ___cp949_encmap + 47022;
    HEAP[_cp949_encmap + 1448] = ___cp949_encmap + 47534;
    HEAP[_cp949_encmap + 1456] = ___cp949_encmap + 48046;
    HEAP[_cp949_encmap + 1464] = ___cp949_encmap + 48558;
    HEAP[_cp949_encmap + 1472] = ___cp949_encmap + 49070;
    HEAP[_cp949_encmap + 1480] = ___cp949_encmap + 49582;
    HEAP[_cp949_encmap + 1488] = ___cp949_encmap + 50094;
    HEAP[_cp949_encmap + 1496] = ___cp949_encmap + 50606;
    HEAP[_cp949_encmap + 1504] = ___cp949_encmap + 51118;
    HEAP[_cp949_encmap + 1512] = ___cp949_encmap + 51630;
    HEAP[_cp949_encmap + 1520] = ___cp949_encmap + 52142;
    HEAP[_cp949_encmap + 1528] = ___cp949_encmap + 52654;
    HEAP[_cp949_encmap + 1536] = ___cp949_encmap + 53166;
    HEAP[_cp949_encmap + 1544] = ___cp949_encmap + 53678;
    HEAP[_cp949_encmap + 1552] = ___cp949_encmap + 54190;
    HEAP[_cp949_encmap + 1560] = ___cp949_encmap + 54702;
    HEAP[_cp949_encmap + 1568] = ___cp949_encmap + 55214;
    HEAP[_cp949_encmap + 1576] = ___cp949_encmap + 55726;
    HEAP[_cp949_encmap + 1584] = ___cp949_encmap + 56238;
    HEAP[_cp949_encmap + 1592] = ___cp949_encmap + 56750;
    HEAP[_cp949_encmap + 1600] = ___cp949_encmap + 57262;
    HEAP[_cp949_encmap + 1608] = ___cp949_encmap + 57774;
    HEAP[_cp949_encmap + 1616] = ___cp949_encmap + 58286;
    HEAP[_cp949_encmap + 1624] = ___cp949_encmap + 58798;
    HEAP[_cp949_encmap + 1632] = ___cp949_encmap + 59310;
    HEAP[_cp949_encmap + 1640] = ___cp949_encmap + 59822;
    HEAP[_cp949_encmap + 1648] = ___cp949_encmap + 60334;
    HEAP[_cp949_encmap + 1656] = ___cp949_encmap + 60846;
    HEAP[_cp949_encmap + 1664] = ___cp949_encmap + 61358;
    HEAP[_cp949_encmap + 1672] = ___cp949_encmap + 61870;
    HEAP[_cp949_encmap + 1680] = ___cp949_encmap + 62382;
    HEAP[_cp949_encmap + 1688] = ___cp949_encmap + 62894;
    HEAP[_cp949_encmap + 1696] = ___cp949_encmap + 63406;
    HEAP[_cp949_encmap + 1704] = ___cp949_encmap + 63918;
    HEAP[_cp949_encmap + 1712] = ___cp949_encmap + 64430;
    HEAP[_cp949_encmap + 1720] = ___cp949_encmap + 64942;
    HEAP[_cp949_encmap + 1992] = ___cp949_encmap + 65270;
    HEAP[_cp949_encmap + 2e3] = ___cp949_encmap + 65782;
    HEAP[_cp949_encmap + 2040] = ___cp949_encmap + 65806;
    HEAP[__mapping_list] = __str11;
    HEAP[__mapping_list + 8] = _ksx1001_decmap;
    HEAP[__mapping_list + 12] = __str12;
    HEAP[__mapping_list + 16] = _cp949_encmap;
    HEAP[__mapping_list + 24] = __str13;
    HEAP[__mapping_list + 32] = _cp949ext_decmap;
    HEAP[__mapping_list + 36] = __str6;
    HEAP[__codec_list] = __str14;
    HEAP[__codec_list + 12] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[__codec_list + 24] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[__codec_list + 36] = __str12;
    HEAP[__codec_list + 48] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[__codec_list + 60] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[__codec_list + 72] = __str15;
    HEAP[__codec_list + 84] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[__codec_list + 96] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[__codec_list + 108] = __str6;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});