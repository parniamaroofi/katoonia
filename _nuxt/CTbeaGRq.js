import{_ as T}from"./X1S6Nx99.js";import{_ as j}from"./BLTjAdUL.js";import{_ as D,t as l,v as i,I as b,P as g,x as e,y as n,z as p,A as c,B as x,V as k,G as _,H as y,a8 as N,W as I,ab as q,N as C,ac as A,ad as R,ae as B,a7 as P,a2 as H,af as U,C as F,ag as L,f as m,U as O}from"./DaplssYx.js";import{u as G}from"./DNOVaXMB.js";import{G as W,A as E,S as M}from"./Bn6PYqT_.js";import"./DRdyhPWe.js";import"./Dudy9OWa.js";const J={name:"DigitizeFrontendProductDetails",setup(){const r=m({}),s=m(0),d=m(""),t=m(""),f=m(!1),u=m([]),h=m([]),w=m([]),v=m(!0),V=m(null),z=m(null),o=m({}),a=O([{image:"/images/original-products.svg",title:"تضمین کیفیت"},{image:"/images/support.svg",title:"پشتیبانی آنلاین"},{image:"/images/express-delivery.svg",title:"تحویل سریع"}]);return{cart:r,window:s,statics:a,product:d,loading:f,parentPage:t,pageLoading:v,totalImages:u,selectedSize:V,productSizes:h,selectedColor:z,productColors:w,selectedVariant:o}},mounted(){this.parentPage=`/${(this._.provides[L]||this.$route).fullPath.split("/")[1]}`,this.getData()},beforeRouteLeave(r,s,d){this.$emitter.emit("clearSearch"),d()},methods:{async getData(){var d;this.pageLoading=!0;const r=await this.$axios.get(`${M}/${(this._.provides[L]||this.$route).query.id}`);this.product=r.data,this.productSizes=[...new Set(this.product.varians.map(t=>t.size))],this.productColors=this.product.varians.map(t=>t.color).filter((t,f,u)=>f===u.findIndex(h=>h.id===t.id&&h.name===t.name)),this.selectedVariant=this.product.varians[0],this.selectedColor=this.productColors[0],this.selectedSize=this.productSizes[0];const s=this.product.name;this.pageLoading=!1,this.totalImages=(d=this.product)==null?void 0:d.images.sort((t,f)=>f.isMainPicture-t.isMainPicture),G({title:s,meta:[{name:"description",content:"محصول فروشگاه کتونیا"},{name:"keywords",content:"Nuxt 3, Dynamic Header, SEO"}]})},setTextColorBasedOnHex(r){const d=(f=>{const u=parseInt(f.slice(1),16),h=u>>16&255,w=u>>8&255,v=u&255;return{r:h,g:w,b:v}})(r);return .2126*d.r+.7152*d.g+.0722*d.b>128?"text-black":"text-white"},showProductsByCategory(){this.$router.push({path:"/products",query:{categoryId:this.product.category.id}})},showViewer(r){console.log(this.totalImages);const s=this.totalImages.map(d=>d.name?`${this.$cdnUrl}${d.name}`:"/images/product.png");this.$viewerApi({images:s,options:{title:!1,initialViewIndex:r,toolbar:{zoomIn:2,zoomOut:2,prev:2,next:2}}})},addToCart(){this.loading=!0,this.$axios.post(E,{userId:this.$cookies.get("userId"),variantId:this.selectedVariant.id}).then(r=>{this.$toast.success("محصول به سبد خرید شما اضافه شد")}).finally(()=>{this.loading=!1})},async getCart(){const{data:r}=await this.$axios.get(`${W}/${this.$cookies.get("userId")}`);this.cart=r}},watch:{selectedColor(){this.selectedVariant=this.product.varians.filter(r=>r.size==this.selectedSize&&r.color.id==this.selectedColor.id)[0]},selectedSize(){this.selectedVariant=this.product.varians.filter(r=>r.size==this.selectedSize&&r.color.id==this.selectedColor.id)[0]},"$route.query.id":function(){this.getData()}}},K={class:"p-[14px_25px] text-[13px] font-semibold flex flex-row gap-x-2"},Q={class:"text-black"},X={class:"p-[30px]"},Y={class:"flex max-md:flex-col gap-8"},Z={class:"flex flex-col gap-4"},$={class:"aspect-square h-[25vw] min-h-[320px] mix-blend-darken flex justify-center items-center bg-gray-100 rounded-[12px]"},tt={key:0},et=["onClick","src"],st={key:0,class:"flex gap-3"},ot=["onClick"],at={class:"w-full py-1"},lt={class:"text-secondary font-bold text-[22px]"},rt={class:"text-secondary mt-2 poppins-family"},it={key:0,class:"text-gray-500 font-semibold text-[12.5px]"},nt={class:"mb-3 font-bold flex items-center text-[20px]"},ct={class:"text-[12px]"},dt={class:"flex gap-x-2 mt-4"},ut=["onClick"],pt={class:"flex gap-x-2 mt-4"},mt=["onClick"],gt={class:"text-[12.5px]"},ft={class:"mt-20 gradient-box rounded-[8px] flex justify-between py-3"},ht=["src"],xt={class:"text-[13px] font-semibold"},_t={class:"mt-12"},yt={class:"mt-3 leading-[30px] text-[14px]"},vt={class:"mt-12"},bt={class:"mt-4 rounded-medium overflow-hidden"},wt={class:"flex gap-x-0.5 items-center"},kt={class:"col-span-2"},Ct={class:"font-semibold pr-6 mt-0.5"},Vt={class:"mt-20"},zt={class:"text-[20px] font-semibold"},St={class:"mt-3 leading-[30px] text-[14px] whitespace-pre-line"};function Pt(r,s,d,t,f,u){var v,V,z;const h=T,w=j;return l(),i("div",null,[t.pageLoading?(l(),b(h,{key:0})):g("",!0),e("div",null,[e("div",K,[t.parentPage?(l(),i("span",{key:0,class:"text-gray-400 cursor-pointer",onClick:s[0]||(s[0]=o=>r.$router.push(t.parentPage))},n(r.$router.resolve(t.parentPage).name??"کتونیا"),1)):g("",!0),p(k,{class:"stroke-gray-400 scale-[0.45]"},{default:c(()=>s[4]||(s[4]=[x("svg:chevronLeft")])),_:1}),e("span",{class:"text-gray-400 cursor-pointer",onClick:s[1]||(s[1]=(...o)=>u.showProductsByCategory&&u.showProductsByCategory(...o))},"دسته‌بندی "+n((v=t.product.category)==null?void 0:v.name),1),p(k,{class:"stroke-gray-400 scale-[0.45]"},{default:c(()=>s[5]||(s[5]=[x("svg:chevronLeft")])),_:1}),e("span",Q,n(t.product.name),1)]),e("div",X,[e("section",Y,[e("section",Z,[e("div",$,[(V=t.totalImages)!=null&&V.length?(l(),b(q,{key:0,modelValue:t.window,"onUpdate:modelValue":s[2]||(s[2]=o=>t.window=o),class:"mix-blend-darken"},{default:c(()=>[(l(!0),i(_,null,y(t.totalImages,(o,a)=>(l(),b(N,{key:a,value:a},{default:c(()=>[p(I,{name:"fade"},{default:c(()=>[t.window==a?(l(),i("div",tt,[e("img",{onClick:S=>u.showViewer(a),src:`${r.$cdnUrl}${o.name}`,class:"h-full aspect-square mix-blend-darken object-contain rounded-[12px] cursor-pointer"},null,8,et)])):g("",!0)]),_:2},1024)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])):g("",!0)]),(z=t.totalImages)!=null&&z.length?(l(),i("div",st,[(l(!0),i(_,null,y(t.totalImages.slice(0,5),(o,a)=>(l(),i("div",{key:a,class:C(["relative border-[1px] overflow-hidden xl:rounded-2xl rounded-lg w-[calc(23vw/5-3px)] min-w-[61px] aspect-square cursor-pointer duration-500",{"border-primary":t.window==a,"border-grey-300":t.window!=a}]),onClick:S=>t.totalImages.length>5&&a==4?u.showViewer(a):t.window=a},[p(A,{src:`${r.$cdnUrl}${o.name}`,class:"w-full h-full object-contain before:content-['']"},{default:c(()=>[e("div",{class:C(["w-full h-full flex justify-center items-center",{"before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-black/50":t.totalImages.length>5&&a==4}])},[t.totalImages.length>5&&a==4?(l(),b(k,{key:0,class:"mx-auto",color:"white"},{default:c(()=>s[6]||(s[6]=[x("mdi-dots-horizontal")])),_:1})):g("",!0)],2)]),_:2},1032,["src"])],10,ot))),128))])):g("",!0)]),e("section",at,[e("h1",lt,n(t.product.name),1),e("h1",rt,n(t.product.englishName),1),p(R,{"model-value":5,readonly:"",size:"x-small",color:"#FFAA39",class:"custom-rating mt-1.5","full-icon":"svg:fullStar","empty-icon":"svg:emptyStar"}),e("div",null,[t.selectedVariant.discountPercent?(l(),i("s",it,n(Number(t.selectedVariant.regularPrice).toLocaleString())+" تومان ",1)):g("",!0),e("p",nt,[x(n(Number(t.selectedVariant.price).toLocaleString("fa-IR"))+" تومان ",1),t.selectedVariant.discountPercent?(l(),b(B,{key:0,color:"red",class:"mr-3 h-5",variant:"flat",density:"compact"},{default:c(()=>[e("span",ct,n(t.selectedVariant.discountPercent)+"%",1)]),_:1})):g("",!0)])]),p(P,{class:"opacity-70 my-4"}),e("div",null,[s[8]||(s[8]=e("p",{class:"text-gray-500 text-[15px]"},"انتخاب رنگ",-1)),e("div",dt,[(l(!0),i(_,null,y(t.productColors,(o,a)=>(l(),i("div",{key:a,class:"rounded-full flex justify-center items-center cursor-pointer",onClick:S=>t.selectedColor=o},[e("div",{class:"size-8 border rounded-full flex justify-center items-center",style:H(`background-color: ${o.hexCode};`)},[p(I,{name:"fade"},{default:c(()=>[t.selectedColor==o?(l(),b(k,{key:0,size:"x-small",class:C(u.setTextColorBasedOnHex(o.hexCode))},{default:c(()=>s[7]||(s[7]=[x("mdi-check")])),_:2},1032,["class"])):g("",!0)]),_:2},1024),p(U,{activator:"parent",location:"top"},{default:c(()=>[x(n(o.name),1)]),_:2},1024)],4)],8,ut))),128))])]),p(P,{class:"opacity-70 my-4"}),e("div",null,[s[9]||(s[9]=e("p",{class:"text-gray-500 text-[15px]"},"انتخاب سایز",-1)),e("div",pt,[(l(!0),i(_,null,y(t.productSizes,(o,a)=>(l(),i("div",{key:a,class:"rounded-full flex justify-center items-center cursor-pointer",onClick:S=>t.selectedSize=o},[p(B,{class:C(["px-4",t.selectedSize==o?"bg-black":"opacity-70"])},{default:c(()=>[e("span",gt,n(o),1)]),_:2},1032,["class"])],8,mt))),128))])]),p(P,{class:"opacity-70 my-6"}),p(F,{color:"black",class:"h-[52px] w-[400px]",rounded:"xl",onClick:s[3]||(s[3]=o=>u.addToCart()),loading:t.loading},{loader:c(()=>[p(w,{color:"#fff"})]),default:c(()=>[s[10]||(s[10]=x(" افزودن به سبد خرید "))]),_:1},8,["loading"])])]),e("section",ft,[(l(!0),i(_,null,y(t.statics,(o,a)=>(l(),i("div",{key:a,class:"flex items-center justify-center gap-x-3"},[e("img",{src:o.image,class:"size-[50px]"},null,8,ht),e("span",xt,n(o.title),1)]))),128))]),e("div",_t,[s[11]||(s[11]=e("p",{class:"font-semibold text-[20px]"},"توضیحات محصول:",-1)),e("p",yt,n(t.product.description),1)]),e("div",vt,[s[13]||(s[13]=e("p",{class:"font-semibold text-[20px]"},"مشخصات کالا:",-1)),e("div",bt,[(l(!0),i(_,null,y(t.product.features,(o,a)=>(l(),i("div",{key:a,class:C([a%2==0?"bg-gray-50":"bg-white","text-secondary text-[14px] grid grid-cols-3 py-1.5 px-2"])},[e("div",wt,[p(k,null,{default:c(()=>s[12]||(s[12]=[x("mdi-circle-small")])),_:1}),e("span",null,n(o.name),1)]),e("div",kt,[e("p",Ct,n(o.value),1)])],2))),128))])]),e("section",Vt,[(l(!0),i(_,null,y(t.product.articles,(o,a)=>(l(),i("div",{key:a,class:"text-secondary mb-10"},[e("h1",zt,n(o.title),1),e("p",St,n(o.text),1)]))),128))])])])])}const qt=D(J,[["render",Pt]]);export{qt as default};
