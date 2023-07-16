import{h as I,a as g}from"./axios-ca9f0948.js";import{_ as w,w as M,o as r,c as h,r as S,u as d,F as k,a as t,t as i,b as x,p as B,d as V,e as C,f,S as $,g as D}from"./index-635d8d66.js";const p=o=>(B("data-v-6f6728ea"),o=o(),V(),o),H=["onClick"],T=["src"],E={class:"InfoSection"},L=p(()=>t("h1",null," Hero Played ",-1)),O={class:"InfoSection"},b=p(()=>t("h1",null," Match Outcome ",-1)),A=["innerHTML"],F={class:"InfoSection"},N=p(()=>t("h1",null," KDA ",-1)),P={__name:"BasicMatchInfo",async setup(o){let n,_;const y=localStorage.getItem("playerId"),l=([n,_]=M(()=>g.get(`https://api.opendota.com/api/players/${y}/recentMatches`)),n=await n,_(),n),u=l.data.map(s=>I.heroes.find(c=>c.id===s.hero_id));function m(s){const c=l.data[s],a=c.player_slot<128,e=c.radiant_win===!0;return a&&e||!a&&!e?"<span style='color:#D59843' class='Victory'>Victory</span>":"<span style='color:#b04e53' class='Defeat'>Defeat</span>"}function v(s){x.push(`/matches/${l.data[s].match_id}`)}return(s,c)=>(r(!0),h(k,null,S(d(l).data,(a,e)=>(r(),h("div",null,[t("div",{class:"BasicMatchCard",onClick:K=>v(e)},[t("img",{src:"https://cdn.cloudflare.steamstatic.com"+d(u)[e].img,width:"96",height:"54"},null,8,T),t("div",E,[L,t("h2",null,i(d(u)[e].localized_name),1)]),t("div",O,[b,t("h2",{innerHTML:m(e)},null,8,A)]),t("div",F,[N,t("h2",null,i(a.kills)+" / "+i(a.deaths)+" / "+i(a.assists),1)])],8,H)]))),256))}},R=w(P,[["__scopeId","data-v-6f6728ea"]]);const W=t("div",{class:"ExplanationBar"},[t("div",{class:"ExplanationContent"},[t("h2",null,"Matches Overview"),t("p",{class:"ExplanationWaffle"}," These are the last 20 matches you played, click on a match to check your team's win percentages against that of the enemy. See if you should have won, or if it was truly out of your control. ")])],-1),z={class:"MatchInfoHolder"},G=t("div",{class:"TemplateHolder"},[t("p",null,"Getting your matches..."),t("div",{class:"loader"})],-1),J={__name:"MatchView",setup(o){return(n,_)=>(r(),h("div",null,[W,(r(),C($,null,{fallback:f(()=>[G]),default:f(()=>[t("div",z,[D(R)])]),_:1}))]))}};export{J as default};
