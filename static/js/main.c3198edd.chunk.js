(this.webpackJsonparraysortreact=this.webpackJsonparraysortreact||[]).push([[0],[,,,,,,,function(t,e,n){},,,function(t,e,n){t.exports=n(19)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(8),s=n.n(i),o=(n(15),n(1)),l=n(2),c=n(4),d=n(3);n(16),n(7);var h=function(t){var e=t.title,n=t.algoNumber,a=t.setAlgorithm,i=t.currentAlgorithm,s=t.animationRunning,o="navElem";return parseInt(n)===parseInt(i)&&(o+=" active"),s&&(o+=" disabled"),r.a.createElement("div",{className:o,onClick:function(){s||a(n)}},r.a.createElement("span",null,e))};var u,m,f,g,p,v,y=function(t){var e=t.algorithm,n=t.setAlgorithm,a=t.animationRunning;return r.a.createElement("div",{id:"navbar"},r.a.createElement(h,{title:"bubblesort",algoNumber:"0",setAlgorithm:n,currentAlgorithm:e,animationRunning:a}),r.a.createElement(h,{title:"insertionsort",algoNumber:"1",setAlgorithm:n,currentAlgorithm:e,animationRunning:a}),r.a.createElement(h,{title:"mergesort",algoNumber:"2",setAlgorithm:n,currentAlgorithm:e,animationRunning:a}))},x=n(5),S=(n(17),n(18),function(t){Object(c.a)(n,t);var e=Object(d.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t="arrayElem";return this.props.sorted?t+=" sorted":this.props.special&&(t+=" "+this.props.special),r.a.createElement("div",{className:t,style:this.props.style})}}]),n}(r.a.Component)),I=function(t){Object(c.a)(n,t);var e=Object(d.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t="";return!0===this.props.sorted&&(t="sorted"),r.a.createElement("div",{id:"mainDiv",className:t},this.printArray())}},{key:"printArray",value:function(){var t=this.props.array.length,e=Math.round(1e3/t),n=Math.floor((600-t)/300),a=this.props.firstIndex,i=this.props.secondIndex,s=this.props.leftBorder,o=this.props.rightBorder,l=this.props.mid,c=null!==l&&null!==s&&null!==o,d={width:e,marginLeft:n+"px"};return this.props.array.map((function(t,e,n){var h=null;return s<=e&&e<=o&&c&&(h=e<l?"leftHalf":"rightHalf"),e===a&&(h="firstHighlight"),e===i&&(h="secondHighlight"),r.a.createElement(S,{style:Object(x.a)(Object(x.a)({},d),{},{height:t+"px"}),key:e,array:n,index:e,special:h})}))}}]),n}(r.a.Component),b=n(9),E=function(t){for(var e=0;e<t.length-1;e++)if(t[e]>t[e+1])return!1;return!0},w=function(t,e){for(var n=Object(b.a)(Array(e).keys()),a=[],r=0;r<t;r++)a[r]=n.splice(Math.floor(Math.random()*n.length),1)[0]+10;return a};function A(t){return u=[],m=t,function(){for(var t=m.length;t>1;t--)for(var e=0;e<t-1;e++){var n={firstIndex:e,elementsSwapped:!1};if(u.push(n),m[e]>m[e+1]){n={firstIndex:e,elementsSwapped:!0};var a=m[e];m[e]=m[e+1],m[e+1]=a,u.push(n)}}}(),u}function B(t){return f=[],g=t,function(){for(var t=0;t<g.length;t++){f.push({firstIndex:t});for(var e=g[t],n=t;n>0&&g[n-1]>e;)g[n]=g[n-1],n--;f.push({firstIndex:t,correctPosition:n}),g[n]=e}}(),f}function k(t,e){if(e-t===0);else if(e-t===1){var n={inMergeSort:!0,firstIndex:t,secondIndex:e,swapped:!1};if(p.push(n),v[t]>v[e]){var a=v[t];v[t]=v[e],v[e]=a,n={inMergeSort:!0,firstIndex:t,secondIndex:e,swapped:!0},p.push(n)}}else{var r=Math.floor((e+t)/2),i={inMergeSort:!0,leftBorder:t,rightBorder:e,mid:r};p.push(i),k(t,r-1),k(r,e),function(t,e,n){var a=n;for(;a<=e;){var r={inMergeSort:!1,firstIndex:a,secondIndex:a-1,leftBorder:t,rightBorder:e,mid:a+1,moved:!1};if(p.push(r),v[a]<v[a-1]){for(var i=t,s=t;s<a;s++)if(v[s]>v[a]){i=s;break}for(var o=a;o>i;o--){var l=v[o];v[o]=v[o-1],v[o-1]=l}r={inMergeSort:!1,firstIndex:i,secondIndex:a,leftBorder:t,rightBorder:e,mid:a+1,moved:!0},p.push(r)}a++}}(t,e,r)}}var O,R=function(){function t(e){var n=this;Object(o.a)(this,t),this.bubbleSortStep=function(){var t=n.swap.shift(),e=t.firstIndex;if(!0===t.elementsSwapped){var a=n.array[e];n.array[e]=n.array[e+1],n.array[e+1]=a,n.setState({array:n.array,firstIndex:e,secondIndex:e+1})}else n.setState({firstIndex:e+1,secondIndex:e})},this.insertionSortStep=function(){var t=n.swap.shift(),e=t.firstIndex,a=t.correctPosition;if(void 0!==a){for(var r=n.array[e],i=e;i>a;i--)n.array[i]=n.array[i-1];n.array[a]=r,n.setState({array:n.array,firstIndex:null,secondIndex:a})}else n.setState({firstIndex:e,secondIndex:null})},this.mergeSortStep=function(){var t=n.swap.shift();if(!0===t.inMergeSort)if(void 0!==t.firstIndex){var e=t.firstIndex,a=t.secondIndex;if(!0===t.swapped){var r=n.array[e];n.array[e]=n.array[a],n.array[a]=r,n.setState({array:n.array,firstIndex:a,secondIndex:e})}else n.setState({array:n.array,firstIndex:e,secondIndex:a})}else n.setState({leftBorder:t.leftBorder,rightBorder:t.rightBorder,mid:t.mid,firstIndex:null,secondIndex:null});else{var i=t.leftBorder,s=t.rightBorder,o=t.mid,l=t.firstIndex,c=t.secondIndex;if(!1===t.moved)n.setState({leftBorder:i,rightBorder:s,mid:o,firstIndex:l,secondIndex:c});else{for(var d=c;d>l;d--){var h=n.array[d];n.array[d]=n.array[d-1],n.array[d-1]=h}n.setState({array:n.array,leftBorder:i,rightBorder:s,mid:o,firstIndex:l,secondIndex:c})}}},this.setState=e,this.algorithm=0,this.speed=5,this.swap=[]}return Object(l.a)(t,[{key:"changeAlgorithm",value:function(t){this.algorithm=t,this.swap=[]}},{key:"changeArray",value:function(t){this.array=t,this.swap=[]}},{key:"changeSpeed",value:function(t){this.speed=505-t}},{key:"startAnimation",value:function(){switch(this.algorithm){case 0:return 0===this.swap.length&&(this.swap=A(this.array.slice(0))),this.animate(this.bubbleSortStep),!0;case 1:return 0===this.swap.length&&(this.swap=B(this.array.slice(0))),this.animate(this.insertionSortStep),!0;case 2:return 0===this.swap.length&&(this.swap=(t=this.array.slice(0),p=[],v=t,k(0,t.length-1),p)),this.animate(this.mergeSortStep),!0;default:return alert("error"),!1}var t}},{key:"endAnimation",value:function(t){clearInterval(this.interval),this.setState({animationRunning:!1}),t&&(this.setState({firstIndex:null,secondIndex:null,leftBorder:null,rightBorder:null,mid:null}),E(this.array)&&this.setState({sorted:!0}))}},{key:"animate",value:function(t){var e=this;this.interval=setInterval((function(){0!==e.swap.length?t():e.endAnimation(!0)}),this.speed)}}]),t}(),j=function(t){Object(c.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={algorithm:0,minElems:5,maxElems:600,numberOfElements:100,animationSpeed:500,animationRunning:!1,array:[],firstIndex:null,secondIndex:null,leftBorder:null,rightBorder:null,mid:null,sorted:!1},t.setAlgorithm=function(e){e=parseInt(e),t.setState({algorithm:e},(function(){O.changeAlgorithm(e)}))},t.changeSpeed=function(e){var n=parseFloat(e.target.value);t.state.animationRunning||(t.setState({animationSpeed:n}),O.changeSpeed(n))},t.changeElemNumber=function(e){t.state.animationRunning||t.setState({numberOfElements:parseInt(e.target.value)},(function(){t.createArray()}))},t.animationClick=function(){t.state.animationRunning?(O.endAnimation(),t.setState({animationRunning:!1})):!1===t.state.sorted&&t.setState({animationRunning:!0},(function(){O.startAnimation()||t.setState({animationRunning:!1})}))},t.newArrayClick=function(){t.state.animationRunning||t.createArray()},t.changeState=function(e){t.setState(e)},t.createArray=function(){var e=w(t.state.numberOfElements,t.state.maxElems);O.changeArray(e),t.setState({array:e}),t.setState({sorted:E(e),firstIndex:null,secondIndex:null,leftBorder:null,rightBorder:null,mid:null})},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){O=new R(this.changeState),this.createArray()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(y,{algorithm:this.state.algorithm,animationRunning:this.state.animationRunning,setAlgorithm:this.setAlgorithm}),r.a.createElement("div",{id:"settingsDiv"},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:this.state.animationRunning?"disabled":""},r.a.createElement("input",{type:"range",min:this.state.minElems,max:this.state.maxElems,value:this.state.numberOfElements,onChange:this.changeElemNumber})),r.a.createElement("td",{className:"settingsButton"+(this.state.sorted?" disabledSetting":""),rowSpan:"2",style:this.state.animationRunning?M:N,onClick:this.animationClick},this.state.animationRunning?"stop":"start"),r.a.createElement("td",{className:"settingsButton"+(this.state.animationRunning?" disabled":""),rowSpan:"2",style:C,onClick:this.newArrayClick},"new array"),r.a.createElement("td",{className:this.state.animationRunning?"disabled":""},r.a.createElement("input",{type:"range",min:"10",max:"500",value:this.state.animationSpeed,onChange:this.changeSpeed}))),r.a.createElement("tr",null,r.a.createElement("td",{className:this.state.animationRunning?"disabled":""},this.state.numberOfElements," elements"),r.a.createElement("td",{className:this.state.animationRunning?"disabled":""},"animation speed"))))),r.a.createElement(I,{array:this.state.array,algorithm:this.state.algorithm,numberOfElements:this.state.numberOfElements,animationSpeed:this.state.animationSpeed,firstIndex:this.state.firstIndex,secondIndex:this.state.secondIndex,leftBorder:this.state.leftBorder,rightBorder:this.state.rightBorder,mid:this.state.mid,sorted:this.state.sorted}))}}]),n}(r.a.Component),N={color:"lightgreen"},M={color:"orange"},C={color:"lightblue"},H=j;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.c3198edd.chunk.js.map