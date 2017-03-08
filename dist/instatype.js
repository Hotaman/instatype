!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("React")):"function"==typeof define&&define.amd?define(["React"],t):"object"==typeof exports?exports.instatype=t(require("React")):e.instatype=t(e.React)}(this,function(e){return function(e){function t(n){if(i[n])return i[n].exports;var l=i[n]={exports:{},id:n,loaded:!1};return e[n].call(l.exports,l,l.exports,t),l.loaded=!0,l.exports}var i={};return t.m=e,t.c=i,t.p="",t(0)}([function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),a=i(1),s=n(a),d=i(2),c=n(d),p=i(4),I=n(p),f=i(5),h=n(f),y=i(7),b=n(y);"function"==typeof s.default.initializeTouchEvents&&s.default.initializeTouchEvents(!0);var m=[],g=function(e){function t(e){l(this,t);var i=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return i.state={inputValue:"",showResults:!1,loading:!1,results:m,resultsQuery:null},i.loadResultsFromServer=i.loadResultsFromServer.bind(i),i.handleSelect=i.handleSelect.bind(i),i.handleChange=i.handleChange.bind(i),i.showResults=i.showResults.bind(i),i.hideResults=i.hideResults.bind(i),i.handleFocus=i.handleFocus.bind(i),i.handleBlur=i.handleBlur.bind(i),i.handleTouch=i.handleTouch.bind(i),i.clearState=i.clearState.bind(i),i.blurInput=i.blurInput.bind(i),i.handleBlur=i.handleBlur.bind(i),i}return u(t,e),r(t,[{key:"componentDidMount",value:function(){this.props.blurOnTouchStart===!0&&document.addEventListener("touchstart",this.blurInput,!0)}},{key:"componentWillUnmount",value:function(){clearTimeout(window.blurHideResultsTimeout),this.props.blurOnTouchStart===!0&&document.removeEventListener("touchstart",this.blurInput,!0)}},{key:"loadResultsFromServer",value:function(e){var t=this;this.setState({loading:!0}),this.props.requestHandler(e,this.props.limit,function(i){return t.state.inputValue==e&&(i=i.slice(0,t.props.limit),void t.setState({results:i,resultsQuery:e,loading:!1}))})}},{key:"handleSelect",value:function(e){this.props.selectedHandler(e),this.clearState()}},{key:"handleChange",value:function(e){var t=this;clearTimeout(window.loadResultsTimeout),e?(this.setState({inputValue:e}),window.loadResultsTimeout=setTimeout(function(){t.loadResultsFromServer(e)},200)):this.clearState()}},{key:"showResults",value:function(){this.state.showResults===!1&&this.setState({showResults:!0}),clearTimeout(window.blurHideResultsTimeout)}},{key:"hideResults",value:function(){this.state.showResults===!0&&this.setState({showResults:!1}),clearTimeout(window.blurHideResultsTimeout)}},{key:"handleFocus",value:function(){this.showResults()}},{key:"handleBlur",value:function(e){var t=this;window.blurHideResultsTimeout=setTimeout(function(){t.hideResults()},400),this.props.onBlur&&setTimeout(function(){t.props.onBlur()},10)}},{key:"handleTouch",value:function(){this.props.blurOnTouchStart===!1&&this.blurInput(),clearTimeout(window.blurHideResultsTimeout)}},{key:"clearState",value:function(){this.setState({results:m,resultsQuery:null,inputValue:"",loading:!1})}},{key:"blurInput",value:function(){this.refs.inputComponent.refs.input.blur()}},{key:"render",value:function(){var e=this.props,t=e.defaultInputValue,i=e.placeholder,n=e.loadingIcon,l=e.thumbStyle,o=this.state,u=o.results,r=o.resultsQuery,a=o.showResults,d=o.loading;return s.default.createElement("div",{id:"instatype",onTouchStart:this.handleTouch},s.default.createElement("style",{dangerouslySetInnerHTML:{__html:b.default}}),s.default.createElement("div",{className:"input-wrapper"},s.default.createElement(I.default,{defaultValue:t,placeholder:i,handleChange:this.handleChange,handleFocus:this.handleFocus,handleBlur:this.handleBlur,ref:"inputComponent"}),d&&s.default.createElement(h.default,{icon:n||void 0})),a&&s.default.createElement(c.default,{data:u,resultsId:r,handleSelect:this.handleSelect,thumbStyle:l}))}}]),t}(s.default.PureComponent);g.propTypes={limit:s.default.PropTypes.number,defaultInputValue:s.default.PropTypes.string,placeholder:s.default.PropTypes.string,thumbStyle:s.default.PropTypes.oneOf(["circle","square"]),loadingIcon:s.default.PropTypes.string,blurOnTouchStart:s.default.PropTypes.bool,onBlur:s.default.PropTypes.func,requestHandler:s.default.PropTypes.func.isRequired,selectedHandler:s.default.PropTypes.func.isRequired},g.defaultProps={limit:10,defaultInputValue:null,placeholder:"Search",thumbStyle:"square",loadingIcon:null,blurOnTouchStart:!1},e.exports=g},function(t,i){t.exports=e},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),a=i(1),s=n(a),d=i(3),c=n(d),p=function(e){function t(e){return l(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return u(t,e),r(t,[{key:"render",value:function(){var e=this.props,t=e.data,i=e.handleSelect,n=e.thumbStyle;return s.default.createElement("div",{className:"resultsContainer"},t&&t.length>0&&s.default.createElement("ul",{className:"results thumb-"+n},t.map(function(e,t){return s.default.createElement(c.default,{image:e.image,handleSelect:i,data:e,key:"result-"+(e.id||t)},e.name)})))}}]),t}(s.default.PureComponent);p.propTypes={data:s.default.PropTypes.arrayOf(s.default.PropTypes.shape({image:s.default.PropTypes.string,name:s.default.PropTypes.string.isRequired})),handleSelect:s.default.PropTypes.func.isRequired,thumbStyle:s.default.PropTypes.string.isRequired},t.default=p},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),a=i(1),s=n(a),d=function(e){function t(e){l(this,t);var i=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return i.state={isHovered:!1},i.handleSelect=i.handleSelect.bind(i),i.onMouseOver=i.onMouseOver.bind(i),i.onMouseLeave=i.onMouseLeave.bind(i),i}return u(t,e),r(t,[{key:"handleSelect",value:function(e){this.props.handleSelect(this.props.data),e.preventDefault(),e.stopPropagation()}},{key:"onMouseOver",value:function(){this.setState({isHovered:!0})}},{key:"onMouseLeave",value:function(){this.setState({isHovered:!1})}},{key:"render",value:function(){var e=this.props,t=e.image,i=e.children,n=this.state.isHovered;return s.default.createElement("li",{className:(n?"hovered":"")+" clearfix",onClick:this.handleSelect,onMouseOver:this.onMouseOver,onMouseLeave:this.onMouseLeave},t&&s.default.createElement("img",{src:t}),s.default.createElement("div",null,i))}}]),t}(s.default.PureComponent);d.propTypes={data:s.default.PropTypes.object.isRequired,image:s.default.PropTypes.string,children:s.default.PropTypes.node},t.default=d},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),a=i(1),s=n(a),d=function(e){function t(e){l(this,t);var i=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return i.handleChange=i.handleChange.bind(i),i.handleFocus=i.handleFocus.bind(i),i.handleBlur=i.handleBlur.bind(i),i}return u(t,e),r(t,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"handleChange",value:function(e){this.props.handleChange(e.target.value)}},{key:"handleFocus",value:function(e){this.props.handleFocus(e)}},{key:"handleBlur",value:function(e){this.props.handleBlur(e)}},{key:"render",value:function(){var e=this.props,t=e.defaultValue,i=e.placeholder;return s.default.createElement("input",{type:"text",defaultValue:t,autoCorrect:"off",autoComplete:"off",autoCapitalize:"off",placeholder:i,className:"input-typeahead",onChange:this.handleChange,onFocus:this.handleFocus,onBlur:this.handleBlur,ref:"input"})}}]),t}(s.default.Component);d.propTypes={handleChange:s.default.PropTypes.func.isRequired,handleFocus:s.default.PropTypes.func,handleBlur:s.default.PropTypes.func,defaultValue:s.default.PropTypes.string,placeholder:s.default.PropTypes.string},t.default=d},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=i(1),o=n(l),u=i(6),r=n(u),a=function(e){var t=e.icon;return o.default.createElement("img",{className:"loading-icon",src:t})};a.propTypes={loadingIcon:o.default.PropTypes.string},a.defaultProps={icon:r.default},t.default=a},function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ4IiBoZWlnaHQ9IjE0OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiIGNsYXNzPSJ1aWwtZGVmYXVsdCI+PHBhdGggZmlsbD0ibm9uZSIgY2xhc3M9ImJrIiBkPSJNMCAwaDEwMHYxMDBIMHoiLz48cmVjdCB4PSI0Ni41IiB5PSI0MCIgd2lkdGg9IjciIGhlaWdodD0iMjAiIHJ4PSI1IiByeT0iNSIgZmlsbD0iIzI0MjQyNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMzApIj48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iMCIgZHVyPSIxcyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPjwvcmVjdD48cmVjdCB4PSI0Ni41IiB5PSI0MCIgd2lkdGg9IjciIGhlaWdodD0iMjAiIHJ4PSI1IiByeT0iNSIgZmlsbD0iIzI0MjQyNCIgdHJhbnNmb3JtPSJyb3RhdGUoMzAgMTA1Ljk4IDY1KSI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAiIGR1cj0iMXMiIGJlZ2luPSIwLjA4MzMzMzMzMzMzMzMzMzMzcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3JlY3Q+PHJlY3QgeD0iNDYuNSIgeT0iNDAiIHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiByeD0iNSIgcnk9IjUiIGZpbGw9IiMyNDI0MjQiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAiIGR1cj0iMXMiIGJlZ2luPSIwLjE2NjY2NjY2NjY2NjY2NjY2cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3JlY3Q+PHJlY3QgeD0iNDYuNSIgeT0iNDAiIHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiByeD0iNSIgcnk9IjUiIGZpbGw9IiMyNDI0MjQiIHRyYW5zZm9ybT0icm90YXRlKDkwIDY1IDY1KSI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAiIGR1cj0iMXMiIGJlZ2luPSIwLjI1cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3JlY3Q+PHJlY3QgeD0iNDYuNSIgeT0iNDAiIHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiByeD0iNSIgcnk9IjUiIGZpbGw9IiMyNDI0MjQiIHRyYW5zZm9ybT0icm90YXRlKDEyMCA1OC42NiA2NSkiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwIiBkdXI9IjFzIiBiZWdpbj0iMC4zMzMzMzMzMzMzMzMzMzMzcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3JlY3Q+PHJlY3QgeD0iNDYuNSIgeT0iNDAiIHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiByeD0iNSIgcnk9IjUiIGZpbGw9IiMyNDI0MjQiIHRyYW5zZm9ybT0icm90YXRlKDE1MCA1NC4wMiA2NSkiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwIiBkdXI9IjFzIiBiZWdpbj0iMC40MTY2NjY2NjY2NjY2NjY3cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3JlY3Q+PHJlY3QgeD0iNDYuNSIgeT0iNDAiIHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiByeD0iNSIgcnk9IjUiIGZpbGw9IiMyNDI0MjQiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwIiBkdXI9IjFzIiBiZWdpbj0iMC41cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3JlY3Q+PHJlY3QgeD0iNDYuNSIgeT0iNDAiIHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiByeD0iNSIgcnk9IjUiIGZpbGw9IiMyNDI0MjQiIHRyYW5zZm9ybT0icm90YXRlKC0xNTAgNDUuOTggNjUpIj48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iMCIgZHVyPSIxcyIgYmVnaW49IjAuNTgzMzMzMzMzMzMzMzMzNHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+PC9yZWN0PjxyZWN0IHg9IjQ2LjUiIHk9IjQwIiB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgcng9IjUiIHJ5PSI1IiBmaWxsPSIjMjQyNDI0IiB0cmFuc2Zvcm09InJvdGF0ZSgtMTIwIDQxLjM0IDY1KSI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAiIGR1cj0iMXMiIGJlZ2luPSIwLjY2NjY2NjY2NjY2NjY2NjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPjwvcmVjdD48cmVjdCB4PSI0Ni41IiB5PSI0MCIgd2lkdGg9IjciIGhlaWdodD0iMjAiIHJ4PSI1IiByeT0iNSIgZmlsbD0iIzI0MjQyNCIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAiIGR1cj0iMXMiIGJlZ2luPSIwLjc1cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3JlY3Q+PHJlY3QgeD0iNDYuNSIgeT0iNDAiIHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiByeD0iNSIgcnk9IjUiIGZpbGw9IiMyNDI0MjQiIHRyYW5zZm9ybT0icm90YXRlKC02MCAyNC4wMiA2NSkiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwIiBkdXI9IjFzIiBiZWdpbj0iMC44MzMzMzMzMzMzMzMzMzM0cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3JlY3Q+PHJlY3QgeD0iNDYuNSIgeT0iNDAiIHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiByeD0iNSIgcnk9IjUiIGZpbGw9IiMyNDI0MjQiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwIiBkdXI9IjFzIiBiZWdpbj0iMC45MTY2NjY2NjY2NjY2NjY2cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3JlY3Q+PC9zdmc+"},function(e,t){e.exports='#instatype{position:relative;display:block;width:100%}#instatype *{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}#instatype .input-wrapper{position:relative}#instatype .input-typeahead{width:100%;margin:0;font-size:2em;padding-top:.5em;padding-bottom:.5em;padding-left:.5em;border-radius:0}#instatype .loading-icon{position:absolute;height:100%;padding-top:1em;padding-bottom:1em;right:1em}#instatype .resultsContainer{position:absolute;z-index:9997;width:100%;margin:0}#instatype ul.results{position:absolute;z-index:9999;top:0;width:100%;margin:0;padding:0;background-color:#fff;border:1px solid #ccc;border-top:none;list-style-type:none}#instatype ul.results.hide,#instatype ul.results.empty{display:none}#instatype ul.results>li{line-height:4em;padding-top:.5em;padding-right:0;padding-bottom:.5em;padding-left:1em;position:relative;cursor:pointer}#instatype ul.results>li:hover{background-color:#FFFEE2}#instatype ul.results>li>img{float:left;width:4em;height:4em;margin-right:1em}#instatype ul.results.thumb-circle>li>img{border-radius:4em}#instatype ul.results>li>div{float:left;font-size:2em}#instatype .clearfix:after{content:"";display:table;clear:both}'}])});