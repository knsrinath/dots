(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[553],{98910:(e,t,a)=>{"use strict";a.d(t,{q:()=>D,o:()=>_});var s=a(27378),l=a.n(s),n=a(95611),c=a(40980),o=a(85349),r=a(18534),i=a(60042),d=a.n(i);const m="e101972ec13283b451808a7f119d6534-scss",u="ec656e2851ddef1af54142a2fda58707-scss",f="_8fd8f2805cbdb1e5c07fff9beffa12b7-scss",g="_0b719c18acac24a966000c50ed1f8cf4-scss",b="c59944439a7f344198a334f50b81117e-scss",p="d948d9f0ad2955bf1a02eeacddc5f977-scss",E="f3a93f62e7b188a60f7ec4f819785bb2-scss";var y=a(91369),C=a(61043);const v=new(a(93592).J)({idPrefix:"download-live-region-"}),h=(e,t)=>{(0,s.useEffect)((()=>()=>{v.clearNode()}),[]);const a=(0,s.useRef)(!1);(0,s.useEffect)((()=>{e===o.V8.DOWNLOADING&&!1===a.current&&(a.current=!0,v.say(C.ag.get("download.downloading",t.totalItems)))}),[e,t]);const l=function(e){const t=(0,s.useRef)();return(0,s.useEffect)((()=>{t.current=e}),[e]),t.current}(e);(0,s.useEffect)((()=>{l===o.V8.DOWNLOADING&&e===o.V8.YES&&(a.current=!1,v.say(C.ag.get("download.complete")))}),[l,e])};var w=a(74988),k=a(62351);let D;!function(e){e[e.sm=24]="sm",e[e.md=32]="md"}(D||(D={}));const _=({uri:e,isFollowing:t,onFollow:a,size:i=D.sm,className:v})=>{const _={"--size":`${i}px`},{useDownloading:x,useDownloadCapability:N}=(0,s.useContext)(c.I),[S,T]=(0,s.useState)(!1),[L,O]=N(),[A,I]=(0,s.useState)(!1),{currentAvailability:R,progress:M,beginDownload:P,clearDownload:B}=x(e);h(R,M);const U=()=>{!1===t?(a(),T(!0)):P()};return(0,s.useEffect)((()=>{!0===S&&!0===t&&(P(),T(!1))}),[t,S,P]),L===o.PQ.NO_DOWNLOAD_CAPABILITY?null:O===o.v$.DOWNLOADING_NOT_ALLOWED?l().createElement("div",{className:u},l().createElement(k.u,{label:C.ag.get("download.download")},l().createElement("button",{className:d()(f,v),onClick:()=>{I(!0)},"aria-label":C.ag.get("download.download")},l().createElement(n.a,{iconSize:i}))),A&&l().createElement("div",{className:E},l().createElement(w.E,{withTopLeftPointer:!0,horizontal:!0,onClose:()=>{I(!1)}},C.ag.get("download.upsell")))):R===o.V8.YES?l().createElement(k.u,{label:C.ag.get("download.remove")},l().createElement("button",{className:d()(f,v,g),onClick:B,"aria-label":C.ag.get("download.remove")},l().createElement(r.Z,{size:i}))):R===o.V8.NO?l().createElement(k.u,{label:C.ag.get("download.download")},l().createElement("button",{className:d()(f,v),onClick:U,"aria-label":C.ag.get("download.download")},l().createElement(n.a,{iconSize:i}))):l().createElement("div",{className:d()(b,v)},l().createElement(k.u,{label:C.ag.get("download.cancel")},l().createElement("button",{style:_,className:d()(f,m,v),onClick:B,"aria-label":C.ag.get("download.cancel")})),l().createElement("span",{style:_,className:d()(p,m)},l().createElement(y.e,{"aria-valuetext":C.ag.get("progress.downloading-tracks"),percentage:M.percentage,size:i})))}},90143:(e,t,a)=>{"use strict";a.r(t),a.d(t,{LIKED_SONGS_IMAGE_URL:()=>q,LikedSongs:()=>W,LikedSongsContainer:()=>j,default:()=>X,likedSongsImage:()=>H,likedSongscolumns:()=>K});var s=a(27378),l=a.n(s),n=a(79308),c=a(86883),o=a(39551),r=a(61043),i=a(4783),d=a(33644),m=a(13559),u=a(23301),f=a(71338),g=a(56958),b=a(67101),p=a(96415),E=a(2146),y=a(98910),C=a(29088),v=a(74544),h=a(38517),w=a(58681),k=a(55157),D=a(77964);const _=()=>l().createElement("svg",{width:"64",height:"64",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M47 18.538L48 16.806L31.478 7.26801V42.327C29.826 40.299 27.313 39 24.5 39C19.538 39 15.5 43.038 15.5 48C15.5 52.963 19.538 57 24.5 57C29.27 57 33.175 53.266 33.471 48.569L33.478 48.433C33.485 48.288 33.485 47.711 33.478 47.566V10.732L47 18.538ZM31.478 48.434C31.252 52.091 28.213 55 24.5 55C20.64 55 17.5 51.86 17.5 48C17.5 44.141 20.64 41 24.5 41C28.213 41 31.252 43.909 31.478 47.566V48.434Z",fill:"currentColor"}));var x=a(60858),N=a(7593),S=a(65821),T=a(27952),L=a(96582);const O={[T.bD.ADDED_AT]:L._1.ADDED_AT,[T.bD.ADDED_BY]:null,[T.bD.ALBUM]:L._1.ALBUM_NAME,[T.bD.ARTIST]:L._1.ARTIST_NAME,[T.bD.DURATION]:null,[T.bD.TITLE]:L._1.NAME},A=e=>{const t=(0,b._j)(e);if(!t)return;const a=O[t.field],s=t.order;return a&&s?{field:a,order:s}:void 0};var I=a(38533),R=a(44471),M=a(51970),P=a(20023),B=a(88732),U=a(43908);const z=new Set(R.P0),F=new Set([]),V=l().memo((({nrTracks:e,collectionUri:t,columns:a})=>{const n=(0,s.useContext)(d.H),c=(0,s.useRef)(null),[o,i]=(0,s.useState)(e),{filter:m}=(0,s.useContext)(I.fo),u=(0,s.useRef)((()=>{})),[f,g]=(0,s.useState)([]),{sortState:p,setSortState:E}=(0,s.useContext)(R.Gb);(0,U.T)("liked-songs");const y=(0,s.useCallback)((e=>{E((0,b.VK)(e,p))}),[E,p]);(0,s.useEffect)((()=>{c.current&&c.current.update()}),[p,m]),(0,s.useEffect)((()=>{i(e)}),[e]);const C=(0,s.useCallback)((e=>{const t=e.map((e=>e.uri));u.current(),null==n||n.remove(...t)}),[n]),v=(0,s.useCallback)(((e,t)=>{u.current=t,e.length>1?g(e):C(e)}),[C]),w=(0,s.useCallback)((async(e,t)=>{const a=await(null==n?void 0:n.getTracks({offset:e,limit:t,sort:A(p),filter:(0,b.$u)(m)})),s=null==a?void 0:a.totalLength,l=(null==a?void 0:a.items)||[];return"number"==typeof s&&s!==o&&i(s),l}),[m,n,o,p]),k=(0,s.useCallback)(((e,a)=>{var s;const n=(0,S.Z)(null===(s=e.album)||void 0===s?void 0:s.images,{desiredSize:40,desiredLabel:"small"});return l().createElement(h.dx,{key:a+e.uri,index:a,playIndex:a,contextUri:t,uri:e.uri,sortedBy:(0,P.Qu)(A(p)),filteredBy:(0,M.Q)((0,b.$u)(m)),isPlayable:e.isPlayable,duration_ms:e.duration.milliseconds,name:e.name,artists:e.artists,albumOrShow:e.album,isExplicit:e.isExplicit,isCollaborative:!1,isMixedMedia:!1,isLocal:e.isLocal,addedBy:null,dateAdded:e.addedAt,hasDecoratedAddedBy:!1,release_date:"",isMOGEFRestricted:e.is19PlusOnly,type:e.type,imgUrl:(null==n?void 0:n.url)||"",onMove:()=>{},onInsert:()=>{},allowedDropTypes:[],isDisliked:!1,playlistName:""})}),[t,m,p]);return l().createElement(l().Fragment,null,l().createElement(N.ZP,{value:"liked-songs-tracklist"},l().createElement(h.Pv,{ariaLabel:r.ag.get("sidebar.liked_songs"),key:t,hasHeaderRow:!0,columns:a,sortableColumns:null!=n&&n.getCapabilities().canSort?z:F,sortState:p,onSort:y,renderRow:k,resolveUri:e=>e.uri,onRemove:v,nrTracks:o,fetchTracks:w,limit:50,outerRef:c})),l().createElement(B.h,{title:r.ag.get("remove_from_your_liked_songs"),isOpen:f.length>0,tracks:f,onClose:e=>{e.stopPropagation(),g([])},onRemove:C}))}));var Z=a(51870),Q=a(10106),G=a(16782),Y=a(73998),$=a(6070);const K=[h.QD.INDEX,h.QD.TITLE,h.QD.ALBUM,h.QD.ADDED_AT,h.QD.DURATION],W=({metadata:e,canFilter:t,canSort:a})=>{const{uri:i,name:d,images:m,totalLength:E,owner:h}=e,N=(0,g.k)()&&E>0,S=E>0,T=(0,s.useMemo)((()=>({id:h.username,uri:h.uri,name:h.username,displayName:h.displayName||void 0,images:h.images||[]})),[h]),L=(0,n.I0)(),O=(0,n.v9)(p.dO),A=O.isPlaying&&O.contextURI===i,M=(0,Y.Y5)("#5038a0"),{filter:P}=(0,s.useContext)(I.fo),{sortState:B}=(0,s.useContext)(R.Gb);(0,s.useEffect)((()=>{L((0,f.Dk)(r.ag.get("playlist.page-title",d)))}),[L,d]);const U=(0,s.useCallback)((()=>{L((0,u.MP)(i,(0,b.O4)(B),(0,b.aK)(P)))}),[L,i,P,B]);return l().createElement("section",{className:Z.Z.playlist,"data-testid":"playlist-page"},l().createElement(v.gF,{backgroundColor:M},l().createElement(w.W,null,l().createElement(G.$,{size:o.qE.sm,onClick:U,isPlaying:A,uri:i}),l().createElement(k.i,{text:d})),l().createElement("div",{className:Z.Z.playlistImageContainer},l().createElement(Q.T,{canEdit:!1,name:d,images:m,onClick:()=>{},placeholderType:"playlist"})),l().createElement(v.sP,null,l().createElement(v.dy,{small:!0,uppercase:!0},r.ag.get("playlist")),l().createElement(v.xd,{canEdit:!1,onClick:()=>{},className:Z.Z.playlistTitle},d),l().createElement(v.QS,{creators:[T],totalTracks:E}))),l().createElement(c.o,{backgroundColor:M},l().createElement(c.F,null,S?l().createElement(G.$,{onClick:U,isPlaying:A,size:o.qE.lg,uri:i}):null,N?l().createElement(y.o,{uri:i,isFollowing:!0,onFollow:()=>{},size:y.q.md}):null,t&&a&&l().createElement("div",{className:Z.Z.searchBoxContainer},l().createElement(D.K,{placeholder:r.ag.get("playlist.search_in_playlist")}),l().createElement($.c,{columns:R.P0})))),l().createElement("div",{className:"contentSpacing"},E>0?l().createElement(s.Suspense,{fallback:l().createElement(x.h,{errorMessage:r.ag.get("error.request-collection-tracks-failure")})},l().createElement(V,{nrTracks:E,columns:K,collectionUri:i})):l().createElement(C.u,{message:r.ag.get("collection.empty-page.songs-subtitle"),title:r.ag.get("collection.empty-page.songs-title"),linkTo:"/search",linkTitle:r.ag.get("collection.empty-page.songs-cta")},l().createElement(_,null))))},q="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png",H={url:q,width:300,height:300};const j=l().memo((()=>{const e=function(){const e=(0,i.MY)({offset:0,limit:1}),{user:t}=(0,n.v9)(E.Gg);return null===e||null===t?null:{uri:`spotify:user:${t.id}:collection`,name:r.ag.get("sidebar.liked_songs"),images:[H],totalLength:null==e?void 0:e.totalLength,owner:(0,m.V3)(t)}}(),t=(0,s.useContext)(d.H).getCapabilities();return e?l().createElement(R.kz,{uri:e.uri},l().createElement(I.hz,{uri:e.uri},l().createElement(W,{metadata:e,canFilter:t.canFilter&&e.totalLength>0,canSort:t.canSort&&e.totalLength>0}))):l().createElement(x.h,{errorMessage:r.ag.get("error.not_found.title.playlist"),loadOffline:t.canModifyOffline})})),X=j},10106:(e,t,a)=>{"use strict";a.d(t,{T:()=>d});var s=a(27378),l=a.n(s),n=a(51117),c=a(74544),o=a(52774);const r="bf13f049f6eb974da846ec38034a706c-scss",i="ef6889cda11475b8d2cca7b4236d1c34-scss",d=function({onClick:e,name:t,images:a,canEdit:s,placeholderType:d,shape:m=c.Kc.SQUARE}){const[u,f]=(0,c.RH)(a),g=(0,n.VO)(u,f)===n.KO.loaded;return l().createElement("div",{className:r,"data-testid":`${d}-image`},l().createElement(c.Oe,{loading:"eager",name:t,images:a,placeholderType:d,shape:m}),s&&l().createElement("div",{className:i},l().createElement(o.F,{overlay:g,onClick:e,rounded:m===c.Kc.CIRCLE})))}},88732:(e,t,a)=>{"use strict";a.d(t,{h:()=>g});var s=a(27378),l=a.n(s),n=a(61043);const c="ab5365d0ff5365c7c491fd6a3d8c4477-scss",o="_04e794ff20e8a593c3ee6d5a901eae49-scss",r="_330ce60daa0b6a702b688a2d5355e94c-scss",i="_6e3472480c862c33080c8c285236fd1e-scss",d="dbc60189322a703e55ec8fb5ac4d3dc0-scss";var m=a(46036),u=a(95547),f=a(53177);const g=l().memo((({onClose:e,onRemove:t,isOpen:a,tracks:g,title:b})=>{const p=(0,s.useCallback)((a=>{t(g),e(a)}),[t,e,g]);return l().createElement(m.Z,{shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,onRequestClose:e,contentLabel:b,isOpen:a},l().createElement("div",{className:c},l().createElement(f.Dy,{as:"h2",variant:f.Dy.cello,className:o},b),l().createElement(f.Dy,{as:"p",variant:f.Dy.mesto,className:r},n.ag.get("playlist.remove_multiple_description")),l().createElement("div",{className:i},l().createElement(u.Y,{className:d,version:"tertiary",onClick:e},n.ag.get("playlist.delete-cancel")),l().createElement(u.Y,{version:"primary",onClick:p},n.ag.get("remove")))))}))},4783:(e,t,a)=>{"use strict";a.d(t,{j$:()=>m,MY:()=>d});var s=a(27378),l=a(52033),n=a(33644);var c=a(46903),o=a(85583);const r=l.EW.UPDATE;function i(e,t){const a=(0,s.useContext)(n.H),[l,c]=(0,s.useState)(null),i=(0,s.useCallback)((async s=>{e===s.data.list&&c(await t(a))}),[a,e,t]);return(0,s.useEffect)((()=>{i(new o.B(r,{list:e}))}),[i,e]),function(e,t){const a=(0,s.useContext)(n.H);(0,s.useEffect)((()=>{const s=a.getEvents();return s.addListener(e,t),()=>{s.removeListener(e,t)}}),[e,t,a])}(r,i),l}function d(e){return i(l.XD.TRACKS,(0,c.jP)((t=>t.getTracks(e)),[e]))}function m(e){return i(l.XD.EPISODES,(0,c.jP)((t=>t.getEpisodes(e)),[e]))}},51870:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});const s={xs:"(min-width: 0px)",xsOnly:"(min-width: 0px) and (max-width: 767px)",sm:"(min-width: 768px)",smOnly:"(min-width: 768px) and (max-width: 1023px)",md:"(min-width: 1024px)",mdOnly:"(min-width: 1024px) and (max-width: 1279px)",lg:"(min-width: 1280px)",lgOnly:"(min-width: 1280px) and (max-width: 1919px)",xl:"(min-width: 1920px)",playlist:"_9fe8a0caa4f26833e73e09018d2e33fd-scss",searchBoxContainer:"_5c9d00c22b479513050a4a8e0f7ae32e-scss",recommendedTrackList:"c8771d6fe15a76aad93b3fe08be2cdbe-scss",playlistContent:"_235729a60d5e265806e8509d8633b779-scss",top:"_774456834f4a0dcc05be3b82fcb213b4-scss",header:"_3297dd5ef27784632c074833e1f88a54-scss",subtitle:"_1aeb8cb3caf53b3d962919b32849de54-scss",refreshButton:"_9d21ba4ec8f152aec636796d26a43b3d-scss",playlistImageContainer:"_9e10063a7b1e2d5f588e34f07376302a-scss",playlistInlineCurationSection:"de070095f1acc3b916f7d894db9c3cea-scss",playlistInlineCurationWrapper:"_2344314d54f51c4d8442d4c7469faf6d-scss",playlistInlineCurationTitle:"_08cebbd009e54a3bcaca84cf8026c0a3-scss",playlistInlineCurationCloseButton:"e71030a394c72c62ca0938f9cf87c5f6-scss",playlistInlineCurationBackButton:"_5ecce0325c3f40054e8a4573213dad6c-scss",artistResultListTitle:"_2f46506909f77e06ee7d4896c8626101-scss",seeMore:"_1de06189bc33bb25805c19bdbc99664e-scss",emptyStateContainer:"_6e26a428b218e647d22be6a924a0485f-scss",searchResultListContainer:"b1f1f199ca5ddfb8dfd1387cb450c9f1-scss",emptySearchTermContainer:"_478fe58ed3760d1fd76e69fb11f5ba61-scss",icon:"bed6242740699f9a7578a3031f4c9486-scss"}}}]);