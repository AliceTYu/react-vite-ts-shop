import{j as t,I as p,c as h,L as x,r as n,a as g,P as j,A as C}from"./index-DrAtXf37.js";import{T as I}from"./Title-B_jSurJ0.js";const f="_header_16joa_1",N="_headerInput_16joa_21",v="_headerImg_16joa_35",b="_headerInp_16joa_21",d={header:f,headerInput:N,headerImg:v,headerInp:b};function k(){return t.jsxs("div",{className:d.header,children:[t.jsx(I,{children:"Меню"}),t.jsxs("div",{className:d.headerInput,children:[t.jsx("img",{className:d.headerImg,src:"./search.svg",alt:"search"}),t.jsx(p,{className:d.headerInp,placeholder:"Введите блюдо или состав"})]})]})}const y="_menu_glkx1_1",E="_blockCard_glkx1_7",l={menu:y,blockCard:E},$="_item_1aw2g_1",L={item:$};function u({children:e,filter:s,className:c}){return t.jsxs("div",{className:h(L.item,c),children:[e," ",s==="rub"?t.jsx("span",{children:"₽"}):t.jsx("img",{src:"./star.svg",alt:"лого звезд"})]})}const P="_productCart_o57ps_1",F="_link_o57ps_35",M="_price_o57ps_99",S="_rating_o57ps_149",r={productCart:P,link:F,"productCart-body":"_productCart-body_o57ps_43","productCart-head":"_productCart-head_o57ps_51","productCart-title":"_productCart-title_o57ps_71","productCart-text":"_productCart-text_o57ps_89",price:M,"add-to-cart":"_add-to-cart_o57ps_111",rating:S};function w(e){return t.jsx(x,{to:`/react-vite-ts-shop/product/${e.id}`,className:r.link,children:t.jsxs("button",{className:r.productCart,children:[t.jsxs("div",{className:r["productCart-head"],style:{backgroundImage:`url('${e.image}')`},children:[t.jsx(u,{className:r.price,filter:"rub",children:e.price}),t.jsx("button",{className:r["add-to-cart"],children:t.jsx("img",{src:"./addcart.svg",alt:"Добавить в корзину"})}),t.jsx(u,{className:r.rating,filter:"star",children:e.rating})]}),t.jsxs("div",{className:r["productCart-body"],children:[t.jsx("div",{className:r["productCart-title"],children:e.name}),t.jsx("div",{className:r["productCart-text"],children:e.description})]})]})})}function A({products:e}){return e.map(s=>t.jsx(w,{id:s.id,name:s.name,description:s.ingredients.join(", "),price:s.price,rating:s.rating,image:s.image},s.id))}function H(){const[e,s]=n.useState([]),[c,i]=n.useState(!1),[o,m]=n.useState(),_=async()=>{try{i(!0);const{data:a}=await g.get(`${j}/products`);s(a),i(!1)}catch(a){console.error(a),a instanceof C&&m(a.message),i(!1);return}};return n.useEffect(()=>{_()},[]),t.jsxs("div",{className:l.menu,children:[t.jsx(k,{}),t.jsxs("div",{className:l.blockCard,children:[o&&t.jsx(t.Fragment,{children:o}),!c&&t.jsx(A,{products:e}),c&&t.jsx(t.Fragment,{children:"Загрузка..."})]})]})}export{H as default};