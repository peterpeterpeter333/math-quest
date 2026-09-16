import "./styles.css";

const stages=[
 {level:"初級",title:"平均から「今」へ",sub:"平均の速さと瞬間の速さ",slides:[
  ["平均の速さを出す","100 m を20秒で進む。","100 ÷ 20 = 5 m/s","平均は区間全体の速さ。","bar"],
  ["ずっと5 m/sだった？","止まった時間と走った時間があっても、","平均は5 m/sになる。","「今」の速さは別に知りたい。","dots"],
  ["区間を短くする","時刻1秒の近くを調べる。","1秒の平均：15 m/s","0.1秒の平均：10.5 m/s","slope"],
  ["近づく先を見る","0.01秒では10.05 m/s。","区間を縮めると10へ近づく。","0で割るのではない。","slope"],
  ["新しい基本事項","短い区間の平均変化率は、","その時刻の変化率へ近づく。","上級予告：v = dx/dt","formula"]]},
 {level:"初級",title:"接線は今の傾き",sub:"グラフで瞬間を読む",slides:[
  ["二点を結ぶ傾き","PとQを結ぶ線の傾きは、","PからQまでの平均変化率。","QをPへ近づけてみよう。","slope"],
  ["近づけると接線になる","区間が短いほど、線は曲線の","その場所での向きに近づく。","","slope"],
  ["新しい基本事項","接線の傾きが、","その瞬間の変化率。","微分は傾きを読む道具。","formula"]]},
 {level:"初級",title:"面積はなぜ距離？",sub:"一定の速さを積み上げる",slides:[
  ["毎秒3 m進む","速さ3 m/sで4秒進む。","距離 = 3 × 4 = 12 m","縦が速さ、横が時間。","bar"],
  ["長方形も3×4","v-tグラフの長方形の面積も3×4。","m/s × s = m","だから面積の数値が距離になる。","bar"],
  ["新しい基本事項","速さが一定なら、","v-tグラフの面積が移動距離。","","formula"]]},
 {level:"初級",title:"変わる速さを足す",sub:"短冊の和から積分へ",slides:[
  ["速さが一つに決まらない","1秒ごとに速さが変わる。","2 m/s、3 m/s、4 m/s","一つの速さでは掛けられない。","bars"],
  ["最初の1秒","2 m/s × 1 s = 2 m","この小さな長方形が距離。","","bars"],
  ["全部を足す","2 + 3 + 4 = 9 m","各区間の速さ×時間を足す。","","bars"],
  ["曲線ならもっと細かく","4本、8本、16本と増やせば、","長方形は曲線に近づく。","上級予告：∫","integral"]]},
 {level:"初級",title:"小さな変化を足す",sub:"積分の直感",slides:[
  ["曲線の下はどう数える？","長方形は少し大きすぎたり、","小さすぎたりする。","","integral"],
  ["幅を半分にする","長方形を細かくすると、","上からと下からの差が小さくなる。","","integral"],
  ["新しい基本事項","値 × 小さい幅を細かく足す。","それが積分の出発点。","∫ は細かい和の行き先。","formula"]]},
 {level:"初級",title:"微分と積分はつながる",sub:"傾きと積み上げ",slides:[
  ["位置から速さへ","位置グラフの傾きが速さ。","x → v は微分。","","slope"],
  ["速さから距離へ","速さグラフの面積が距離。","v → x は積分。","","integral"],
  ["上級への予告","微分は変化を読む。","積分は変化を積み上げる。","二つは往復できる。","formula"]]},
 {level:"中級",title:"差分を式で書く",sub:"平均変化率",slides:[
  ["変化を記号にする","位置の変化を Δx。","時間の変化を Δt。","平均変化率 = Δx / Δt","formula"],
  ["x=t²で調べる","tからt+hまでの平均変化率。","((t+h)² - t²) / h","","formula"],
  ["平方を展開する","(t+h)² = t² + 2th + h²","分子のt²と-t²が消える。","","formula"],
  ["hで割る","(2th+h²)/h = 2t+h","hは0ではない区間の幅。","","formula"]]},
 {level:"中級",title:"微分係数を作る",sub:"極限と接線",slides:[
  ["hを0へ近づける","2t+h は、hが0へ近づくと","2tへ近づく。","","formula"],
  ["微分係数","dx/dt = lim(h→0) Δx/Δt","x=t² なら dx/dt = 2t","","formula"],
  ["記号の意味","dx/dtは普通の割り算ではない。","平均変化率の極限を表す一まとまり。","","formula"]]},
 {level:"中級",title:"Σで短冊を並べる",sub:"有限和",slides:[
  ["区間をn個に分ける","区間[a,b]を同じ幅に分ける。","Δx = (b-a)/n","","bars"],
  ["一枚の短冊","i番目の高さを f(x_i) とする。","短冊の面積は f(x_i)Δx","","bars"],
  ["全部を足す","S_n = Σ f(x_i)Δx","Σは1番目からn番目まで足す印。","","formula"]]},
 {level:"中級",title:"有限和から定積分へ",sub:"リーマン和",slides:[
  ["分割を増やす","nを大きくすると、短冊の和は","曲線の下へ近づく。","","integral"],
  ["行き先を定義する","∫_a^b f(x)dx = lim(n→∞) Σf(x_i)Δx","aとbは始点と終点。","","formula"],
  ["記号を読む","f(x)は高さ、dxは小さい幅。","∫は全部を足す操作。","","formula"]]},
 {level:"中級",title:"積分は元へ戻す",sub:"微分と逆向きの操作",slides:[
  ["位置 x=t²","微分すると速度 v=2t。","では2tを積み上げると？","","formula"],
  ["0秒から3秒まで","∫_0^3 2t dt = [t²]_0^3","= 9 - 0 = 9 m","","formula"],
  ["定数が消える理由","[t²+C]_0^3 = (9+C)-(0+C)","始点と終点の差ではCが消える。","","formula"]]},
 {level:"中級",title:"物理への接続",sub:"微積分で運動を読む",slides:[
  ["位置 → 速度","v = dx/dt","位置グラフの傾きを読む。","","slope"],
  ["速度 → 加速度","a = dv/dt","速度が変わる速さを読む。","","formula"],
  ["速度 → 距離","Δx = ∫v dt","短い距離を時間に沿って足す。","","integral"]]}
];
let view="map",stageIndex=0,page=0;
const app=document.querySelector("#app");
function visual(kind){
 if(kind==="bar")return '<svg viewBox="0 0 360 150"><path d="M35 120H335M35 120V25" class="axis"/><rect x="35" y="55" width="240" height="65" class="fill"/><text x="145" y="48">3 m/s</text><text x="275" y="141">4 s</text></svg>';
 if(kind==="bars")return '<svg viewBox="0 0 360 150"><path d="M35 120H335M35 120V25" class="axis"/><rect x="45" y="85" width="75" height="35" class="fill"/><rect x="120" y="67" width="75" height="53" class="fill gold"/><rect x="195" y="48" width="75" height="72" class="fill"/><text x="92" y="143">1</text><text x="167" y="143">2</text><text x="242" y="143">3</text></svg>';
 if(kind==="slope")return '<svg viewBox="0 0 360 150"><path d="M35 120H335M35 120V25" class="axis"/><path d="M48 112 Q135 110 185 77 T315 30" class="curve"/><path d="M135 108L246 46" class="tangent"/><circle cx="135" cy="108" r="5" class="point"/><circle cx="246" cy="46" r="5" class="point"/></svg>';
 if(kind==="integral")return '<svg viewBox="0 0 360 150"><path d="M35 120H335M35 120V25" class="axis"/><path d="M40 108 Q120 40 180 83 T325 35" class="curve"/><g class="tiles"><rect x="48" y="91" width="25" height="29"/><rect x="74" y="70" width="25" height="50"/><rect x="100" y="52" width="25" height="68"/><rect x="126" y="44" width="25" height="76"/><rect x="152" y="50" width="25" height="70"/><rect x="178" y="76" width="25" height="44"/><rect x="204" y="76" width="25" height="44"/><rect x="230" y="58" width="25" height="62"/></g></svg>';
 return '<svg viewBox="0 0 360 150"><path d="M45 75H315" class="axis"/><circle cx="110" cy="75" r="15" class="point"/><circle cx="190" cy="75" r="15" class="point"/><circle cx="270" cy="75" r="15" class="point"/></svg>';
}
function render(){
 if(view==="map"){
  app.innerHTML='<main><header><div><p class="eyebrow">MATH QUEST</p><h1>大学数学：微積分の入口</h1><p class="lead">変化を見る。小さく分けて足す。</p></div></header><section class="levels">'+["初級","中級"].map(level=>'<section class="level"><h2>'+level+'</h2><p>'+ (level==="初級"?"図と小さな計算で、意味をつかむ":"記号と式変形で、意味を一般化する")+'</p><div class="cards">'+stages.map((s,i)=>s.level===level?'<button class="card" data-stage="'+i+'"><span>'+s.level+'</span><strong>'+s.title+'</strong><small>'+s.sub+'</small></button>':"").join("")+'</div></section>').join("")+'</section></main>';
  document.querySelectorAll("[data-stage]").forEach(b=>b.onclick=()=>{stageIndex=+b.dataset.stage;page=0;view="lesson";render()});
 } else {
  const s=stages[stageIndex],sl=s.slides[page];
  app.innerHTML='<main class="lesson"><button class="back" id="back">← 単元一覧</button><p class="eyebrow">'+s.level+'　'+(page+1)+' / '+s.slides.length+'</p><h1>'+s.title+'</h1><div class="progress"><i style="width:'+(page+1)/s.slides.length*100+'%"></i></div><article><h2>'+sl[0]+'</h2><div class="copy">'+sl.slice(1,4).filter(Boolean).map(x=>'<p>'+x+'</p>').join("")+'</div>'+visual(sl[4])+'</article><nav><button id="prev" '+(page===0?"disabled":"")+'>← 前へ</button><button class="next" id="next">'+(page===s.slides.length-1?"単元を終える":"次の一手 →")+'</button></nav></main>';
  document.querySelector("#back").onclick=()=>{view="map";render()};document.querySelector("#prev").onclick=()=>{page--;render()};document.querySelector("#next").onclick=()=>{if(page<s.slides.length-1){page++;render()}else{view="map";render()}};
 }
}
render();
