//masi dalam tahap ujicoba sc sementara di enc
const _0x28fb92=_0x20e2;(function(_0x34a23b,_0x47346e){const _0x537cb6=_0x20e2,_0x300d7d=_0x34a23b();while(!![]){try{const _0x506fe4=parseInt(_0x537cb6(0x244))/0x1*(-parseInt(_0x537cb6(0x1f3))/0x2)+parseInt(_0x537cb6(0x1e9))/0x3*(-parseInt(_0x537cb6(0x218))/0x4)+-parseInt(_0x537cb6(0x24b))/0x5+parseInt(_0x537cb6(0x23a))/0x6*(-parseInt(_0x537cb6(0x23c))/0x7)+parseInt(_0x537cb6(0x232))/0x8+-parseInt(_0x537cb6(0x277))/0x9+parseInt(_0x537cb6(0x219))/0xa*(parseInt(_0x537cb6(0x27a))/0xb);if(_0x506fe4===_0x47346e)break;else _0x300d7d['push'](_0x300d7d['shift']());}catch(_0x2fcfbf){_0x300d7d['push'](_0x300d7d['shift']());}}}(_0x3fba,0x6159b));const {sansbot}=require('./setting'),{botname}=require(_0x28fb92(0x201)),apikey_cuaca=_0x28fb92(0x237);console[_0x28fb92(0x265)](_0x28fb92(0x21d)+apikey_cuaca),module[_0x28fb92(0x272)]=function handlers(_0x4a0eb1){const _0x529803=_0x28fb92,_0x2f95d5='/',_0x81893=new RegExp(_0x2f95d5+'start'),_0x4ecba0=new RegExp('^'+_0x2f95d5+_0x529803(0x21b)),_0x82c523=new RegExp('^'+_0x2f95d5+_0x529803(0x248)),_0x1dc57e=new RegExp('^'+_0x2f95d5+'ko\x20\x20\x20ta$'),_0x9cfe02=new RegExp('^'+_0x2f95d5+_0x529803(0x25e)),_0x154e9b=new RegExp('^'+_0x2f95d5+'corona$'),_0x30c27b=new RegExp('^'+_0x2f95d5+'beasiswa$'),_0xb1f3ed=new RegExp('^'+_0x2f95d5+_0x529803(0x259)),_0x583df7=new RegExp('^'+_0x2f95d5+'jadwalsholat$'),_0x2c9523=new RegExp(_0x2f95d5+_0x529803(0x205)),_0x166a1a=new RegExp(_0x2f95d5+_0x529803(0x22a)),_0x3332e0=new RegExp(_0x2f95d5+_0x529803(0x1f4)),_0x37ebcb=new RegExp(_0x2f95d5+_0x529803(0x1f9)),_0x5c24d5=new RegExp(_0x2f95d5+_0x529803(0x21e)),_0xc5c957=new RegExp(_0x2f95d5+_0x529803(0x20c)),_0x2b87bb=new RegExp(_0x2f95d5+_0x529803(0x224));_0x4a0eb1[_0x529803(0x1ee)](/^\/start$/,_0x3bc3b4=>{const _0x7510a1=_0x529803,_0x1ef740=_0x3bc3b4['chat']['id'],_0x269063=botname,_0x446dd1='\x0a\x20\x20\x20\x20\x20\x20\x20\x20Hallo\x20selamat\x20datang!\x20Silakan\x20pilih\x20salah\x20satu\x20fitur\x20dari\x20menu\x20di\x20bawah\x20ini:\x0a\x20\x20\x20\x20\x20\x20\x20\x20',_0x1a6bf6=_0x7510a1(0x239);_0x4a0eb1['sendPhoto'](_0x1ef740,_0x1a6bf6,{'caption':_0x446dd1,'reply_markup':{'inline_keyboard':[[{'text':_0x7510a1(0x20b),'callback_data':_0x7510a1(0x221)}],[{'text':_0x7510a1(0x255),'callback_data':'sholat'}],[{'text':_0x7510a1(0x1ed),'callback_data':_0x7510a1(0x20d)}],[{'text':_0x7510a1(0x22c),'callback_data':_0x7510a1(0x21e)}],[{'text':_0x7510a1(0x273),'callback_data':_0x7510a1(0x20c)}],[{'text':_0x7510a1(0x22f),'callback_data':_0x7510a1(0x1ea)}],[{'text':_0x7510a1(0x22e),'callback_data':_0x7510a1(0x212)}],[{'text':'Roboguru','callback_data':_0x7510a1(0x1f4)}],[{'text':_0x7510a1(0x26a),'callback_data':_0x7510a1(0x224)}],[{'text':_0x7510a1(0x27d),'callback_data':_0x7510a1(0x278)}],[{'text':_0x7510a1(0x213),'callback_data':'igdl'}]]}})[_0x7510a1(0x206)](_0x246abf=>{const _0x42a16a=_0x7510a1;console[_0x42a16a(0x227)](_0x42a16a(0x24f),_0x246abf),_0x4a0eb1['sendMessage'](_0x1ef740,_0x446dd1);});}),_0x4a0eb1[_0x529803(0x1ee)](/^\/cuaca (.+)/,async(_0x5a2644,_0x2dbb56)=>{const _0x2a0bea=_0x529803,_0x1f66ad=_0x5a2644['chat']['id'],_0x31f08c=_0x2dbb56[0x1],_0x67e0b8=_0x2a0bea(0x208)+_0x31f08c+_0x2a0bea(0x226)+apikey_cuaca;try{const _0x22a3c3=await _0x4a0eb1[_0x2a0bea(0x238)](_0x1f66ad,_0x2a0bea(0x270)),_0x21481c=await fetch(_0x67e0b8),_0x28d8dd=await _0x21481c['json']();_0x28d8dd[_0x2a0bea(0x26d)]?(_0x4a0eb1[_0x2a0bea(0x238)](_0x1f66ad,JSON['stringify'](_0x28d8dd['result'],null,0x2)),_0x4a0eb1[_0x2a0bea(0x231)](_0x1f66ad,_0x22a3c3[_0x2a0bea(0x207)])):_0x4a0eb1['sendMessage'](_0x1f66ad,_0x2a0bea(0x26e));}catch(_0x5ddb7a){console[_0x2a0bea(0x227)](_0x2a0bea(0x1ff),_0x5ddb7a),_0x4a0eb1[_0x2a0bea(0x238)](_0x1f66ad,_0x2a0bea(0x243));}}),_0x4a0eb1[_0x529803(0x1ee)](/^\/jadwalsholat (.+)/,async(_0xb88fc,_0x9b67dd)=>{const _0xbcdcd1=_0x529803,_0x39022f=_0xb88fc['chat']['id'],_0x25893c=_0x9b67dd[0x1],_0x48efa6=_0xbcdcd1(0x23f)+_0x25893c+'?apikey='+apikey_cuaca;try{_0x4a0eb1[_0xbcdcd1(0x238)](_0x39022f,_0xbcdcd1(0x21a));const _0x1f1c0e=await fetch(_0x48efa6),_0x179ca3=await _0x1f1c0e['json']();if(_0x179ca3[_0xbcdcd1(0x26d)]){const _0x351fe3=_0xbcdcd1(0x245)+_0x25893c+'\x0a\x20\x20\x20\x20Wilayah:\x20'+_0x179ca3[_0xbcdcd1(0x26d)][_0xbcdcd1(0x250)]+_0xbcdcd1(0x25a)+_0x179ca3['result']['tanggal']+_0xbcdcd1(0x1eb)+_0x179ca3[_0xbcdcd1(0x26d)][_0xbcdcd1(0x211)]+'\x0a\x20\x20\x20\x20Imsak:\x20'+_0x179ca3[_0xbcdcd1(0x26d)][_0xbcdcd1(0x251)]+_0xbcdcd1(0x1f1)+_0x179ca3[_0xbcdcd1(0x26d)][_0xbcdcd1(0x25c)]+_0xbcdcd1(0x220)+_0x179ca3[_0xbcdcd1(0x26d)][_0xbcdcd1(0x22b)]+_0xbcdcd1(0x21c)+_0x179ca3[_0xbcdcd1(0x26d)][_0xbcdcd1(0x25f)]+'\x0a\x20\x20\x20\x20Maghrib:\x20'+_0x179ca3[_0xbcdcd1(0x26d)]['maghrib']+'\x0a\x20\x20\x20\x20Isya:\x20'+_0x179ca3[_0xbcdcd1(0x26d)]['isya']+_0xbcdcd1(0x22d);_0x4a0eb1[_0xbcdcd1(0x238)](_0x39022f,_0x351fe3);}else _0x4a0eb1[_0xbcdcd1(0x238)](_0x39022f,'Maaf,\x20tidak\x20dapat\x20menemukan\x20jadwal\x20sholat\x20untuk\x20kota\x20tersebut.');}catch(_0x47f514){console[_0xbcdcd1(0x227)](_0xbcdcd1(0x210),_0x47f514),_0x4a0eb1[_0xbcdcd1(0x238)](_0x39022f,_0xbcdcd1(0x240));}}),_0x4a0eb1['on'](_0x529803(0x20e),async _0x43e214=>{const _0x35dff6=_0x529803,_0x221359=_0x43e214[_0x35dff6(0x269)][_0x35dff6(0x25d)]['id'],_0x1e1a87=_0x43e214['data'];switch(_0x1e1a87){case _0x35dff6(0x221):_0x4a0eb1[_0x35dff6(0x238)](_0x221359,'Contoh:\x20/cuaca\x20subang');break;case _0x35dff6(0x24c):_0x4a0eb1[_0x35dff6(0x238)](_0x221359,_0x35dff6(0x1f6));break;case _0x35dff6(0x20c):_0x2e07ea(_0x221359);break;case _0x35dff6(0x20d):_0x989949(_0x221359);break;case'beasiswa':_0x1afc4d(_0x221359);break;case _0x35dff6(0x212):_0x548b14(_0x221359);break;case'katabijak':_0x4debe7(_0x221359);break;case _0x35dff6(0x1f4):_0x4a0eb1[_0x35dff6(0x238)](_0x221359,_0x35dff6(0x1ec));break;case _0x35dff6(0x278):_0x4a0eb1[_0x35dff6(0x238)](_0x221359,_0x35dff6(0x1e8));break;case _0x35dff6(0x229):_0x4a0eb1[_0x35dff6(0x238)](_0x221359,'Contoh:\x20/instagram\x20[link]\x20');break;case _0x35dff6(0x21e):_0x4a0eb1[_0x35dff6(0x238)](_0x221359,'Masukkan\x20username\x20Instagram:'),_0x4a0eb1['on'](_0x35dff6(0x269),async _0x848a69=>{const _0x5ae1e5=_0x35dff6;if(_0x848a69[_0x5ae1e5(0x23b)]&&_0x848a69[_0x5ae1e5(0x23b)][_0x5ae1e5(0x266)]('@')){const _0x36328f=_0x848a69[_0x5ae1e5(0x23b)][_0x5ae1e5(0x20a)](0x1),_0x339c4c='https://api.lolhuman.xyz/api/stalkig/'+_0x36328f+'?apikey='+apikey_cuaca;try{const _0xbfd3ea=await _0x4a0eb1[_0x5ae1e5(0x238)](_0x221359,_0x5ae1e5(0x275)),_0x3e1561=await fetch(_0x339c4c),_0x4e131a=await _0x3e1561[_0x5ae1e5(0x214)]();if(_0x4e131a[_0x5ae1e5(0x1f7)]===0xc8&&_0x4e131a[_0x5ae1e5(0x26d)]){const _0x5c5351=_0x4e131a[_0x5ae1e5(0x26d)],_0x3ab323=_0x5c5351[_0x5ae1e5(0x25b)],_0x49ccd2=_0x5ae1e5(0x268)+_0x5c5351[_0x5ae1e5(0x216)]+_0x5ae1e5(0x204)+_0x5c5351['fullname']+'\x0a\x20\x20\x20\x20Pengikut:\x20'+_0x5c5351['followers']+_0x5ae1e5(0x228)+_0x5c5351[_0x5ae1e5(0x217)]+_0x5ae1e5(0x271)+_0x5c5351[_0x5ae1e5(0x246)]+_0x5ae1e5(0x235)+_0x5c5351['bio']+_0x5ae1e5(0x200);_0x4a0eb1[_0x5ae1e5(0x1fb)](_0x221359,_0x3ab323,{'caption':_0x49ccd2}),_0x4a0eb1[_0x5ae1e5(0x231)](_0x221359,_0xbfd3ea[_0x5ae1e5(0x207)]);}else _0x4a0eb1[_0x5ae1e5(0x238)](_0x221359,'Maaf,\x20tidak\x20dapat\x20menemukan\x20profil\x20Instagram\x20untuk\x20pengguna\x20tersebut.');}catch(_0x3410dd){console['error'](_0x5ae1e5(0x256),_0x3410dd),_0x4a0eb1[_0x5ae1e5(0x238)](_0x221359,_0x5ae1e5(0x27c));}}});break;default:_0x4a0eb1[_0x35dff6(0x238)](_0x221359,_0x35dff6(0x230));}}),_0x4a0eb1[_0x529803(0x1ee)](/^\/instagram (.+)/,async(_0xb2bce5,_0x19d8f5)=>{const _0x367704=_0x529803,_0x19a906=_0xb2bce5['chat']['id'],_0x42a9f7=_0x19d8f5[0x1],_0xc35e18=_0x367704(0x1fc)+apikey_cuaca+_0x367704(0x1fe)+encodeURIComponent(_0x42a9f7);try{_0x4a0eb1[_0x367704(0x238)](_0x19a906,'Mohon\x20tunggu,\x20sedang\x20mengambil\x20konten\x20Instagram...');const _0x3aca66=await fetch(_0xc35e18),_0x5e9055=await _0x3aca66[_0x367704(0x214)]();if(_0x5e9055['status']===0xc8&&_0x5e9055[_0x367704(0x26d)]&&_0x5e9055[_0x367704(0x26d)][_0x367704(0x21f)]&&_0x5e9055[_0x367704(0x26d)][_0x367704(0x21f)][_0x367704(0x264)]>0x0){const _0x57e16c=_0x5e9055['result']['media'][0x0],_0x1291d4=_0x5e9055[_0x367704(0x26d)][_0x367704(0x242)],_0x25d7b5=_0x5e9055[_0x367704(0x26d)],_0x36640c=_0x367704(0x1f0)+_0x1291d4['username']+'\x0a\x0acaption:\x20'+_0x25d7b5['caption'];_0x4a0eb1[_0x367704(0x267)](_0x19a906,_0x57e16c,{'caption':_0x36640c});}else _0x4a0eb1['sendMessage'](_0x19a906,'Maaf,\x20tidak\x20dapat\x20menemukan\x20video\x20Instagram\x20untuk\x20URL\x20yang\x20diberikan.');}catch(_0x40f07f){console['error'](_0x367704(0x276),_0x40f07f),_0x4a0eb1[_0x367704(0x238)](_0x19a906,'Maaf,\x20terjadi\x20kesalahan\x20saat\x20mengambil\x20konten\x20Instagram.');}});async function _0x4debe7(_0x497ea6){const _0x2befd5=_0x529803,_0x428386='https://api.lolhuman.xyz/api/random/katabijak?apikey='+apikey_cuaca;try{const _0x4b43e7=await _0x4a0eb1[_0x2befd5(0x238)](_0x497ea6,'Mohon\x20tunggu,\x20sedang\x20mengambil\x20data\x20katabijak...'),_0xaffedc=await fetch(_0x428386),_0xfad72e=await _0xaffedc[_0x2befd5(0x214)]();if(_0xfad72e['status']===0xc8&&_0xfad72e[_0x2befd5(0x26d)]){const _0x15f19a=_0xfad72e[_0x2befd5(0x26d)],_0x3692fa='\x0a'+_0x15f19a+_0x2befd5(0x258);_0x4a0eb1[_0x2befd5(0x238)](_0x497ea6,'\x22'+_0x3692fa+'\x22'),_0x4a0eb1[_0x2befd5(0x231)](_0x497ea6,_0x4b43e7[_0x2befd5(0x207)]);}else _0x4a0eb1[_0x2befd5(0x238)](_0x497ea6,_0x2befd5(0x1f5));}catch(_0x4c7bd1){console[_0x2befd5(0x227)](_0x2befd5(0x233),_0x4c7bd1),_0x4a0eb1[_0x2befd5(0x238)](_0x497ea6,'Maaf,\x20terjadi\x20kesalahan.');}};_0x4a0eb1[_0x529803(0x1ee)](/^\/roboguru/,async _0x1bd6bb=>{const _0x266b5c=_0x529803,_0x448d06=_0x1bd6bb[_0x266b5c(0x25d)]['id'];_0x4a0eb1[_0x266b5c(0x238)](_0x448d06,_0x266b5c(0x279)),_0x4a0eb1[_0x266b5c(0x254)](_0x266b5c(0x269),async _0x28f81d=>{const _0x4602e8=_0x266b5c,_0x23cc0c=encodeURIComponent(_0x28f81d[_0x4602e8(0x23b)]),_0x5d41bd=_0x4602e8(0x23d),_0x41db2e='sejarah',_0x1c5fce='https://api.lolhuman.xyz/api/roboguru?apikey='+apikey_cuaca+_0x4602e8(0x27b)+_0x23cc0c+'&grade='+_0x5d41bd+_0x4602e8(0x26b)+_0x41db2e;try{const _0x3a726f=await fetch(_0x1c5fce),_0x591622=await _0x3a726f[_0x4602e8(0x214)]();if(_0x591622[_0x4602e8(0x1f7)]===0xc8&&_0x591622[_0x4602e8(0x26d)]){const {question:_0x4479a7,answer:_0xf1aa92}=_0x591622[_0x4602e8(0x26d)][0x0],_0x140b4b=_0x4602e8(0x262)+_0x4479a7+'\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Jawaban:\x20'+_0xf1aa92+_0x4602e8(0x22d);_0x4a0eb1[_0x4602e8(0x238)](_0x448d06,_0x140b4b);}else _0x4a0eb1[_0x4602e8(0x238)](_0x448d06,_0x4602e8(0x247));}catch(_0x25758d){console[_0x4602e8(0x227)]('Error\x20fetching\x20Robo\x20Guru\x20content:',_0x25758d),_0x4a0eb1['sendMessage'](_0x448d06,_0x4602e8(0x209));}});});async function _0x548b14(_0xac32b6){const _0x27ab27=_0x529803;_0x4a0eb1[_0x27ab27(0x238)](_0xac32b6,_0x27ab27(0x249));try{const _0x38e327='https://api.lolhuman.xyz/api/jadwalbola?apikey='+apikey_cuaca,_0x5e9617=await fetch(_0x38e327),_0xcdc1ed=await _0x5e9617[_0x27ab27(0x214)](),{result:_0x16b0aa}=_0xcdc1ed;let _0x35c80f=_0x27ab27(0x203);_0x16b0aa[_0x27ab27(0x263)](_0x9c96b5=>{const _0x18e8b0=_0x27ab27;_0x35c80f+='Waktu:\x20'+_0x9c96b5[_0x18e8b0(0x253)]+'\x0a',_0x35c80f+=_0x18e8b0(0x23e)+_0x9c96b5['event']+'\x0a',_0x35c80f+=_0x18e8b0(0x274)+_0x9c96b5[_0x18e8b0(0x215)]+'\x0a',_0x35c80f+=_0x18e8b0(0x1e7)+_0x9c96b5['tv']+'\x0a\x0a';}),_0x4a0eb1[_0x27ab27(0x238)](_0xac32b6,_0x35c80f);}catch(_0x1c2243){console[_0x27ab27(0x227)](_0x27ab27(0x236),_0x1c2243),_0x4a0eb1[_0x27ab27(0x238)](_0xac32b6,_0x27ab27(0x26c));}};async function _0x1afc4d(_0x2c53ec){const _0x36828f=_0x529803;_0x4a0eb1['sendMessage'](_0x2c53ec,_0x36828f(0x249));try{const _0x5d0545=_0x36828f(0x26f)+apikey_cuaca,_0x34ba01=await fetch(_0x5d0545),_0x199269=await _0x34ba01['json'](),{result:_0x4d3324}=_0x199269;let _0x2e7121='Informasi\x20Beasiswa:\x0a\x0a';_0x4d3324[_0x36828f(0x263)](_0xbe4fb0=>{const _0x3591ba=_0x36828f;_0x2e7121+=_0x3591ba(0x234)+_0xbe4fb0[_0x3591ba(0x20f)]+'\x0a',_0x2e7121+=_0x3591ba(0x24e)+_0xbe4fb0[_0x3591ba(0x252)]+'\x0a\x0a';}),_0x4a0eb1['sendMessage'](_0x2c53ec,_0x2e7121);}catch(_0x2802e9){console[_0x36828f(0x227)](_0x36828f(0x236),_0x2802e9),_0x4a0eb1[_0x36828f(0x238)](_0x2c53ec,'Maaf,\x20terjadi\x20kesalahan\x20saat\x20mengambil\x20informasi\x20beasiswa\x20atau\x20data\x20tidak\x20tersedia.');}};async function _0x2e07ea(_0x50f316){const _0x5bc6ce=_0x529803,_0x4ff364='https://api.lolhuman.xyz/api/cerpen?apikey='+apikey_cuaca;try{await _0x4a0eb1['sendMessage'](_0x50f316,_0x5bc6ce(0x260));const _0x1bf0d8=await fetch(_0x4ff364),_0x2796ba=await _0x1bf0d8['json']();if(_0x2796ba[_0x5bc6ce(0x1f7)]===0xc8&&_0x2796ba[_0x5bc6ce(0x26d)]){const _0x48b756=_0x2796ba[_0x5bc6ce(0x26d)],_0x415245=_0x5bc6ce(0x1fd)+_0x48b756[_0x5bc6ce(0x20f)]+_0x5bc6ce(0x1f2)+_0x48b756[_0x5bc6ce(0x1ef)]+'\x0a\x0aCerpen:\x0a'+_0x48b756['cerpen'][_0x5bc6ce(0x20a)](0x0,0xfa0)+_0x5bc6ce(0x202);await _0x4a0eb1[_0x5bc6ce(0x238)](_0x50f316,_0x415245);}else await _0x4a0eb1[_0x5bc6ce(0x238)](_0x50f316,_0x5bc6ce(0x225));}catch(_0x1838c4){console[_0x5bc6ce(0x227)](_0x5bc6ce(0x24d),_0x1838c4),await _0x4a0eb1['sendMessage'](_0x50f316,'Maaf,\x20terjadi\x20kesalahan\x20saat\x20mengambil\x20cerpen.');}}async function _0x989949(_0x3b189f){const _0x2ba8fb=_0x529803;_0x4a0eb1[_0x2ba8fb(0x238)](_0x3b189f,_0x2ba8fb(0x249));try{const _0x4587c6=_0x2ba8fb(0x222)+apikey_cuaca,_0x11630e=await fetch(_0x4587c6),_0x4d0d33=await _0x11630e[_0x2ba8fb(0x214)](),{result:_0xd9f995}=_0x4d0d33,_0x407f74=_0x2ba8fb(0x223)+_0xd9f995[_0x2ba8fb(0x261)]+_0x2ba8fb(0x257)+_0xd9f995[_0x2ba8fb(0x1f8)]+_0x2ba8fb(0x24a)+_0xd9f995[_0x2ba8fb(0x1fa)]+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20dirawat:\x20'+_0xd9f995[_0x2ba8fb(0x241)]+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20';_0x4a0eb1[_0x2ba8fb(0x238)](_0x3b189f,_0x407f74);}catch(_0x5a9cac){console[_0x2ba8fb(0x227)](_0x2ba8fb(0x236),_0x5a9cac),_0x4a0eb1[_0x2ba8fb(0x238)](_0x3b189f,'Maaf,\x20terjadi\x20kesalahan\x20saat\x20mengambil\x20informasi\x20corona.');}}};function _0x20e2(_0x1305c6,_0x1f29cd){const _0x3fba4d=_0x3fba();return _0x20e2=function(_0x20e2a9,_0x5a79c6){_0x20e2a9=_0x20e2a9-0x1e7;let _0x20b6ff=_0x3fba4d[_0x20e2a9];return _0x20b6ff;},_0x20e2(_0x1305c6,_0x1f29cd);}function _0x3fba(){const _0x3d7247=['\x0a\x20\x20\x20\x20Sahur:\x20','Contoh:\x20/roboguru\x20siapa\x20orang\x20terkaya?','Corona\x20Indonesia','onText','creator','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Username:\x20','\x0a\x20\x20\x20\x20Subuh:\x20','\x0aPenulis:\x20','5536cCSqAW','roboguru','Maaf,\x20tidak\x20dapat\x20menemukan\x20katabijak.....','Contoh:\x20/Jadwalsholat\x20bandung','status','meninggal','republika','sembuh','sendPhoto','https://api.lolhuman.xyz/api/instagram2?apikey=','\x0aTitle:\x20','&url=','Error\x20fetching\x20weather\x20data:','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','./setting','...','Informasi\x20Jadwal\x20Bola:\x0a\x0a',':\x0a\x20\x20\x20\x20Nama:\x20','instagram','catch','message_id','https://api.lolhuman.xyz/api/cuaca/','Maaf,\x20terjadi\x20kesalahan\x20saat\x20mencari\x20jawaban\x20dari\x20Robo\x20Guru.','substring','Cuaca','cerpen','corona','callback_query','title','Error\x20fetching\x20prayer\x20schedule\x20data:','sahur','jadwalbolla','Download\x20Konten\x20Instagram','json','match','username','following','870108sNaOBm','10SXgAAB','Mohon\x20tunggu,\x20sedang\x20mengambil\x20jadwal\x20sholat...','halo$','\x0a\x20\x20\x20\x20Ashar:\x20','apikey\x20saat\x20ini\x20','stalkig','media','\x0a\x20\x20\x20\x20Dzuhur:\x20','cuaca','https://api.lolhuman.xyz/api/corona/indonesia?apikey=','\x0a\x20\x20\x20\x20\x20\x20\x20\x20Berita\x20terbaru\x20corona\x20di\x20indonesia\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20positif:\x20','katabijak','Maaf,\x20tidak\x20dapat\x20menemukan\x20cerpen\x20saat\x20ini.','?apikey=','error','\x0a\x20\x20\x20\x20Mengikuti:\x20','igdl','tiktok','dzuhur','Stalk\x20Instagram','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','Info\x20Jadwal\x20Bola\x20Terkini','Info\x20Beasiswa','Tombol\x20tidak\x20dikenali','deleteMessage','1689152RiubWM','Error\x20fetching:','Nama:\x20','\x0a\x20\x20\x20\x20Deskripsi:\x20','Error\x20fetching\x20data:','sansline','sendMessage','https://ibb.co/f8nsrDm','66gLiDFX','text','226877yuOXNE','sma','Even:\x20','https://api.lolhuman.xyz/api/sholat/','Maaf,\x20terjadi\x20kesalahan\x20saat\x20mengambil\x20jadwal\x20sholat.','dirawat','account','Maaf,\x20terjadi\x20kesalahan\x20saat\x20mengambil\x20informasi\x20cuaca.','62jobrHs','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Jadwal\x20sholat\x20di\x20','posts','Maaf,\x20tidak\x20dapat\x20menemukan\x20jawaban\x20dari\x20Robo\x20Guru\x20untuk\x20pertanyaan\x20Anda.','gempa$','Mohon\x20Tunggu','\x0a\x20\x20\x20\x20\x20\x20\x20\x20sembuh:\x20','3252570DTfhjk','sholat','Error\x20fetching\x20cerpen:','Link:\x20','Error\x20sending\x20photo:','wilayah','imsak','link','time','once','Jadwal\x20Sholat','Error\x20fetching\x20Instagram\x20profile:','\x0a\x20\x20\x20\x20\x20\x20\x20\x20meninggal:\x20',':\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','jadwalbola$','\x0a\x20\x20\x20\x20Tanggal:\x20','photo_profile','subuh','chat','cuaca$','ashar','Mohon\x20tunggu,\x20sedang\x20mengambil\x20cerpen...','positif','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Pertanyaan:\x20','forEach','length','log','startsWith','sendVideo','\x0a\x20\x20\x20\x20Profil\x20Instagram\x20dari\x20','message','Kata-kata\x20Bijak','&subject=','Maaf,\x20terjadi\x20kesalahan\x20saat\x20mengambil\x20informasi\x20jadwal\x20bola\x20atau\x20data\x20tidak\x20tersedia.','result','Maaf,\x20tidak\x20dapat\x20menemukan\x20informasi\x20cuaca\x20untuk\x20kota\x20tersebut.','https://api.lolhuman.xyz/api/indbeasiswa?apikey=','Mohon\x20tunggu,\x20sedang\x20mengambil\x20informasi\x20cuaca...','\x0a\x20\x20\x20\x20Total\x20Postingan:\x20','exports','Cerpen','Match:\x20','Mohon\x20tunggu,\x20sedang\x20melakukan\x20stalking\x20Instagram...','Error\x20fetching\x20Instagram\x20content:','6708339idyRrM','tiktokdl','Mohon\x20tunggu,\x20sedang\x20mencari\x20jawaban\x20dari\x20Robo\x20Guru...','25620672XNhZpw','&query=','Maaf,\x20terjadi\x20kesalahan\x20saat\x20melakukan\x20stalking\x20Instagram.','Download\x20Tiktok\x20NO-WM','Tayang:\x20','Contoh:\x20/tiktok\x20[link]','3HzyfVm','beasiswa'];_0x3fba=function(){return _0x3d7247;};return _0x3fba();}