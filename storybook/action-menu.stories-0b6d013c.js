import{c as e,p as t}from"./lit-element-45614e86.js";import{o as s,j as i,u as o,v as n,w as a}from"./storybook-preview-54ad6afb.js";import{_ as l}from"./tslib.es6-d9c764b6.js";import"./if-defined-b94f78ef.js";import{D as r}from"./index-e4452e6e.js";import"./index-16394ca3.js";import"./spectrum-icon-alert-small.css-b909ec33.js";import"./focusable-b12aa67a.js";import"./iconset-svg-5d368e15.js";import"./index-d58ab459.js";import{O as m}from"./observe-slot-text-5194cee4.js";import"./index-6ffc8a58.js";import"./index-7dda8932.js";var c=e`#button{width:auto}.icon{width:18px;height:18px;flex-shrink:0}#popover{width:auto;max-width:none}`;class p extends(m(r)){constructor(){super(...arguments),this.selected=!1,this.quiet=!0,this.listRole="menu",this.itemRole="menuitem"}static get styles(){return[...super.styles,c]}get hasLabel(){return this.slotHasContent}get buttonContent(){return[s` <slot name="icon"> <svg slot="icon" viewBox="0 0 36 36" class="icon" focusable="false" aria-hidden="true" fill="currentColor"> <circle cx="17.8" cy="18.2" r="3.4"></circle> <circle cx="29.5" cy="18.2" r="3.4"></circle> <circle cx="6.1" cy="18.2" r="3.4"></circle> </svg> </slot> <div id="label" ?hidden="${!this.hasLabel}"> <slot id="slot" @slotchange="${this.manageObservedSlot}"></slot> </div> `]}updated(e){super.updated(e),e.has("open")&&(this.selected=this.open),e.has("quiet")&&(this.quiet=!0),e.has("invalid")&&(this.invalid=!1)}}l([t({type:Boolean,reflect:!0})],p.prototype,"selected",void 0),l([t({type:Boolean,reflect:!0})],p.prototype,"quiet",void 0),customElements.get("sp-action-menu")||customElements.define("sp-action-menu",p);var d=({ariaLabel:e="More Actions",changeHandler:t=(()=>void 0),disabled:i=!1,visibleLabel:o=""}={})=>s` <sp-action-menu label="${e}" ?disabled="${i}" @change="${t}"> ${o} <sp-menu slot="options"> <sp-menu-item> Deselect </sp-menu-item> <sp-menu-item> Select Inverse </sp-menu-item> <sp-menu-item> Feather... </sp-menu-item> <sp-menu-item> Select and Mask... </sp-menu-item> <sp-menu-divider></sp-menu-divider> <sp-menu-item> Save Selection </sp-menu-item> <sp-menu-item disabled="disabled"> Make Work Path </sp-menu-item> </sp-menu> </sp-action-menu> `,u=()=>i`
    <style>
        sp-menu {
            min-width: 125px;
        }
    </style>
    ${d()}
`,b=()=>{var e=o("Arial Label","More Actions","Component"),t=o("Visible Label","More Actions","Component"),s=n("Is Disabled",!1,"Component");return d({ariaLabel:e,disabled:s,changeHandler:e=>{var t=e.target;a(`Change: ${t.value}`)()},visibleLabel:t})},h=["iconOnly","Default"];export default{component:"sp-action-menu",title:"Action menu"};export{b as Default,h as __namedExportsOrder,u as iconOnly};
//# sourceMappingURL=action-menu.stories-0b6d013c.js.map
