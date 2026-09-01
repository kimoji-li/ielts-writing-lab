'use client';

import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import { sourceLinks, task1Guides, task1Topics, task2Guides, task2Topics, type Guide, type Task1Topic, type Task2Topic } from './ielts-data';
import { task1Report, task2Essay } from './essay-content';
import { task1Visuals, type BarSpec, type LineSpec, type MapSpec, type PieSpec, type ProcessSpec, type TableSpec, type VisualSpec } from './task1-visuals';

type TaskKey = 'task2' | 'task1';
type ContentTab = 'brief' | 'essayA' | 'essayB' | 'practice';

const moduleCards = [
  { task: 'task2' as TaskKey, mark: '02', title: 'Task 2 · 大作文', subtitle: '5 大题型 · 50 个真题主题', color: 'coral', time: '40 MIN' },
  { task: 'task1' as TaskKey, mark: '01', title: 'Task 1 · 小作文', subtitle: '5 大图表 · 50 组真题训练', color: 'mint', time: '20 MIN' },
];

function cn(...values: Array<string | false | undefined>) { return values.filter(Boolean).join(' '); }

const chartColors=['#ff745c','#64cbb0','#9b88e8','#ffd36b','#6ca6d9','#d9ff67'];

function VisualFrame({spec,children}:{spec:VisualSpec;children:React.ReactNode}) {
  const unit='unit' in spec?spec.unit:undefined;
  return <figure className={cn('visual-frame',`visual-${spec.kind}`)} aria-label={spec.title}>
    <figcaption><div><span>ACADEMIC TASK 1 · DATA VISUAL</span><h3>{spec.title}</h3></div><div className="visual-meta"><b>近期题库结构</b>{unit&&<small>UNIT · {unit}</small>}</div></figcaption>
    {children}
    <div className="visual-foot"><span>Source format: IELTS Academic recall / published test · teaching reconstruction</span><span>SELECT · COMPARE · REPORT</span></div>
  </figure>;
}

function LineCanvas({spec,axisMin,range}:{spec:LineSpec;axisMin:number;range:number}) {
  const canvasRef=useRef<HTMLCanvasElement>(null);

  useEffect(()=>{
    const canvas=canvasRef.current;
    if(!canvas) return;
    const draw=()=>{
      const rect=canvas.getBoundingClientRect();
      const ratio=Math.max(window.devicePixelRatio||1,1);
      canvas.width=Math.max(1,Math.round(rect.width*ratio));
      canvas.height=Math.max(1,Math.round(rect.height*ratio));
      const context=canvas.getContext('2d');
      if(!context) return;
      context.setTransform(ratio,0,0,ratio,0,0);
      context.clearRect(0,0,rect.width,rect.height);
      context.lineWidth=3;
      context.lineCap='round';
      context.lineJoin='round';
      spec.series.forEach((series,seriesIndex)=>{
        context.beginPath();
        series.values.forEach((value,index)=>{
          const x=index*(rect.width/Math.max(series.values.length-1,1));
          const y=rect.height-((value-axisMin)/range)*rect.height;
          if(index===0) context.moveTo(x,y); else context.lineTo(x,y);
        });
        context.strokeStyle=series.color||chartColors[seriesIndex%chartColors.length];
        context.stroke();
      });
    };
    draw();
    const observer=new ResizeObserver(draw);
    observer.observe(canvas);
    return()=>observer.disconnect();
  },[spec,axisMin,range]);

  return <canvas ref={canvasRef} className="line-canvas" aria-hidden="true" />;
}

function LineChart({spec}:{spec:LineSpec}) {
  const all=spec.series.flatMap(item=>item.values); const rawMax=Math.max(...all,1); const rawMin=Math.min(...all,0);
  const step=rawMax<=10?Math.max(1,Math.ceil(rawMax/5)):Math.ceil(rawMax/50)*10; const axisMax=Math.ceil(rawMax/step)*step; const axisMin=rawMin<0?Math.floor(rawMin/step)*step:0; const range=Math.max(axisMax-axisMin,1);
  const ticks=Array.from({length:6},(_,index)=>axisMax-(range/5)*index);
  return <VisualFrame spec={spec}><div className="line-chart-layout">
    <div className="line-chart-body"><div className="y-axis">{ticks.map(value=><span key={value}>{Number.isInteger(value)?value:value.toFixed(1)}</span>)}</div><div className="line-plot">
      <div className="line-grid" />
      <LineCanvas spec={spec} axisMin={axisMin} range={range} />
      {spec.series.map((series,seriesIndex)=>{
        const color=series.color||chartColors[seriesIndex%chartColors.length];
        const points=series.values.map((value,index)=>({x:index*(100/Math.max(series.values.length-1,1)),y:100-((value-axisMin)/range)*100,value}));
        return <div className="line-series" key={series.name}>{points.map((point,index)=><span className="clean-point" key={index} style={{left:`${point.x}%`,top:`${point.y}%`,borderColor:color,background:index===points.length-1?color:'#fff'}}><em>{point.value}</em></span>)}</div>;
      })}
    </div></div>
    <div className="x-axis" style={{'--axis-count':spec.labels.length} as React.CSSProperties}><span />{spec.labels.map(label=><b key={label}>{label}</b>)}</div>
    <div className="series-legend">{spec.series.map((series,index)=><span key={series.name}><i style={{background:series.color||chartColors[index%chartColors.length]}} />{series.name}</span>)}</div>
  </div></VisualFrame>;
}

function BarChart({spec}:{spec:BarSpec}) {
  const max=Math.max(...spec.series.flatMap(item=>item.values.map(value=>Math.abs(value))),1);
  if(spec.layout==='horizontal') return <VisualFrame spec={spec}><div className="horizontal-chart"><div className="bar-axis-note">0 <span>{Math.round(max/2)}</span> {max}</div>{spec.categories.map((category,catIndex)=><div className="horizontal-category" key={category}><b>{category}</b><div>{spec.series.map((series,seriesIndex)=><span key={series.name}><i style={{width:`${Math.abs(series.values[catIndex])/max*100}%`,background:series.color||chartColors[seriesIndex]}}><em>{series.values[catIndex]}</em></i><small>{series.name}</small></span>)}</div></div>)}</div><SeriesLegend series={spec.series}/></VisualFrame>;
  if(spec.layout==='stacked') return <VisualFrame spec={spec}><div className="stacked-chart">{spec.categories.map((category,catIndex)=>{const total=spec.series.reduce((sum,series)=>sum+series.values[catIndex],0)||1;return <div className="stacked-row" key={category}><b>{category}</b><div>{spec.series.map((series,seriesIndex)=><span key={series.name} style={{width:`${series.values[catIndex]/total*100}%`,background:series.color||chartColors[seriesIndex]}}><em>{series.values[catIndex]}%</em></span>)}</div></div>})}</div><SeriesLegend series={spec.series}/></VisualFrame>;
  return <VisualFrame spec={spec}><div className="grouped-chart">{spec.categories.map((category,catIndex)=><div className="bar-group" key={category}><div>{spec.series.map((series,seriesIndex)=><span key={series.name} style={{height:`${Math.abs(series.values[catIndex])/max*100}%`,background:series.color||chartColors[seriesIndex]}}><em>{series.values[catIndex]}</em></span>)}</div><b>{category}</b></div>)}</div><SeriesLegend series={spec.series}/></VisualFrame>;
}

function SeriesLegend({series}:{series:{name:string;color?:string}[]}) { return <div className="series-legend compact">{series.map((item,index)=><span key={item.name}><i style={{background:item.color||chartColors[index%chartColors.length]}} />{item.name}</span>)}</div>; }

function PieCharts({spec}:{spec:PieSpec}) {
  return <VisualFrame spec={spec}><div className={cn('multi-pie-grid',spec.pies.length>4&&'many')}>{spec.pies.map((item,pieIndex)=>{const total=item.segments.reduce((sum,part)=>sum+Math.max(part.value,0),0)||1;let cursor=0;const stops=item.segments.map((part,index)=>{const start=cursor;cursor+=Math.max(part.value,0)/total*360;return `${part.color||chartColors[index%chartColors.length]} ${start}deg ${cursor}deg`;});return <div className="pie-panel" key={`${item.title}-${pieIndex}`}><h4>{item.title}</h4><div className="donut" style={{background:`conic-gradient(${stops.join(',')})`}}><span>{total.toFixed(total%1?1:0)}<small>{spec.unit}</small></span></div><div className="pie-legend">{item.segments.map((part,index)=><span key={part.name}><i style={{background:part.color||chartColors[index%chartColors.length]}}/><b>{part.name}</b><em>{part.value}</em></span>)}</div></div>})}</div></VisualFrame>;
}

function DataTable({spec}:{spec:TableSpec}) {
  return <VisualFrame spec={spec}><div className="rich-table-wrap">{spec.subtitle&&<p>{spec.subtitle}</p>}<table><thead><tr>{spec.columns.map((column,index)=><th key={column} className={index===0?'row-label':''}>{column}</th>)}</tr></thead><tbody>{spec.rows.map((row,rowIndex)=><tr key={`${row[0]}-${rowIndex}`}>{row.map((cell,index)=><td key={index} className={index===0?'row-label':''}>{cell}</td>)}</tr>)}</tbody></table></div></VisualFrame>;
}

function ProcessDiagram({spec}:{spec:ProcessSpec}) {
  const lane=(stages:ProcessSpec['stages'],branch=false)=><div className={cn('process-lane',branch&&'branch-lane')}>{stages.map((item,index)=><div className="process-card" key={`${item.label}-${index}`}><span>{item.icon||String(index+1).padStart(2,'0')}</span><div><b>{item.label}</b>{item.note&&<small>{item.note}</small>}</div>{index<stages.length-1&&<i>→</i>}</div>)}</div>;
  return <VisualFrame spec={spec}><div className={cn('process-board',`is-${spec.variant}`)}>{lane(spec.stages)}{spec.branch&&<><div className="branch-label"><span>PLUS</span> concrete production</div>{lane(spec.branch,true)}</>}</div></VisualFrame>;
}

function MapComparison({spec}:{spec:MapSpec}) {
  return <VisualFrame spec={spec}><div className="map-comparison">{spec.panels.map((panel,panelIndex)=><div className="map-panel" key={panel.title}><h4><span>{String(panelIndex+1).padStart(2,'0')}</span>{panel.title}</h4><div className="map-canvas">{panel.features.map((item,index)=><div className={cn('map-feature',`feature-${item.type}`)} key={`${item.label}-${index}`} style={{left:`${item.x}%`,top:`${item.y}%`,width:`${item.w}%`,height:`${item.h}%`,transform:item.rotate?`rotate(${item.rotate}deg)`:undefined}}><span>{item.label}</span></div>)}</div></div>)}</div><div className="map-key"><span><i className="feature-building"/>Building</span><span><i className="feature-green"/>Green space</span><span><i className="feature-water"/>Water</span><span><i className="feature-road"/>Road / route</span></div></VisualFrame>;
}

function TaskGraphic({ topic }: { topic: Task1Topic }) {
  const spec=task1Visuals[topic.id];
  if(!spec) return null;
  if(spec.kind==='line') return <LineChart spec={spec}/>;
  if(spec.kind==='bar') return <BarChart spec={spec}/>;
  if(spec.kind==='pie') return <PieCharts spec={spec}/>;
  if(spec.kind==='table') return <DataTable spec={spec}/>;
  if(spec.kind==='process') return <ProcessDiagram spec={spec}/>;
  return <MapComparison spec={spec as MapSpec}/>;
}

function EssayView({ paragraphs, label }: { paragraphs: string[]; label: string }) {
  const words=paragraphs.join(' ').trim().split(/\s+/).length;
  return <article className="essay-paper">
    <div className="essay-meta"><span>{label}</span><span>{words} WORDS</span><span>ORIGINAL MODEL</span></div>
    <h3>Model response</h3>
    {paragraphs.map((paragraph,index)=><p key={index}>{paragraph}</p>)}
    <div className="essay-note"><span>✦</span><p><b>精读提示</b> 先圈出每段主题句，再标记论点之后的 because / for instance / therefore 逻辑链。第二遍只抄写你能迁移到新题目的句型。</p></div>
  </article>;
}

function GuidePanel({ guide }: { guide: Guide }) {
  return <section className="guide-panel">
    <div className="guide-title"><span style={{background:guide.accent}}>{guide.name.slice(0,1)}</span><div><p>TYPE PLAYBOOK</p><h3>{guide.name} <i>{guide.en}</i></h3><small>{guide.short}</small></div><Link className="full-guide-link" href={`/guide/${guide.id}`}>系统精讲<span>打开完整课程 →</span></Link></div>
    <div className="guide-grid">
      <div className="guide-block wide"><h4><span>01</span> 写作技巧</h4><ol>{guide.tips.map(item=><li key={item}>{item}</li>)}</ol></div>
      <div className="guide-block"><h4><span>02</span> 四段模板</h4>{guide.template.map((item,index)=><p key={item}><b>{index+1}</b>{item}</p>)}</div>
      <div className="guide-block"><h4><span>03</span> 高分句式</h4>{guide.sentences.map(item=><blockquote key={item}>{item}</blockquote>)}</div>
      <div className="guide-block"><h4><span>04</span> 高级词汇</h4><div className="word-stack">{guide.vocab.map(item=><span key={item}>{item}</span>)}</div></div>
      <div className="guide-block"><h4><span>05</span> 高级表达</h4>{guide.expressions.map(item=><blockquote key={item}>{item}</blockquote>)}</div>
    </div>
  </section>;
}

export default function WritingStudio() {
  const [task,setTask]=useState<TaskKey>('task2');
  const [typeId,setTypeId]=useState('opinion');
  const [topicId,setTopicId]=useState('op1');
  const [tab,setTab]=useState<ContentTab>('brief');
  const [search,setSearch]=useState('');
  const [completed,setCompleted]=useState<string[]>([]);
  const [seconds,setSeconds]=useState(40*60);
  const [timerOn,setTimerOn]=useState(false);
  const [copied,setCopied]=useState(false);

  const guides=task==='task2'?task2Guides:task1Guides;
  const allTopics=task==='task2'?task2Topics:task1Topics;
  const guide=guides.find(item=>item.id===typeId) || guides[0];
  const typeTopics=allTopics.filter(item=>item.typeId===guide.id);
  const visibleTopics=typeTopics.filter(item=>`${item.title} ${item.prompt}`.toLowerCase().includes(search.toLowerCase()));
  const topic=(allTopics.find(item=>item.id===topicId) || typeTopics[0]) as Task1Topic | Task2Topic;
  const progress=Math.round(completed.filter(id=>allTopics.some(item=>item.id===id)).length/50*100);

  useEffect(()=>{ try { setCompleted(JSON.parse(localStorage.getItem('motopic-progress')||'[]')); } catch {} },[]);
  useEffect(()=>{
    const params=new URLSearchParams(window.location.search);
    const requestedTask=params.get('task');
    const requestedType=params.get('type');
    if(requestedTask!=='task1'&&requestedTask!=='task2') return;
    const requestedGuides=requestedTask==='task1'?task1Guides:task2Guides;
    const validType=requestedGuides.some(item=>item.id===requestedType)?requestedType!:requestedGuides[0].id;
    const requestedTopics=requestedTask==='task1'?task1Topics:task2Topics;
    const firstTopic=requestedTopics.find(item=>item.typeId===validType);
    setTask(requestedTask); setTypeId(validType); if(firstTopic)setTopicId(firstTopic.id); setSeconds((requestedTask==='task1'?20:40)*60);
  },[]);
  useEffect(()=>{ if(!timerOn) return; const id=window.setInterval(()=>setSeconds(value=>value>0?value-1:0),1000); return()=>window.clearInterval(id); },[timerOn]);
  useEffect(()=>{ if(seconds===0) setTimerOn(false); },[seconds]);

  const switchTask=(next:TaskKey)=>{
    setTask(next); const isTask2=next==='task2'; setTypeId(isTask2?'opinion':'line'); setTopicId(isTask2?'op1':'l1'); setTab('brief'); setSearch(''); setSeconds((isTask2?40:20)*60); setTimerOn(false);
    window.setTimeout(()=>document.getElementById('studio')?.scrollIntoView({behavior:'smooth'}),50);
  };
  const selectType=(next:string)=>{ setTypeId(next); const first=(task==='task2'?task2Topics:task1Topics).find(item=>item.typeId===next); if(first)setTopicId(first.id); setTab('brief'); setSearch(''); };
  const selectTopic=(id:string)=>{ setTopicId(id); setTab('brief'); if(window.innerWidth<900) document.getElementById('lesson')?.scrollIntoView({behavior:'smooth',block:'start'}); };
  const toggleComplete=()=>{ const next=completed.includes(topic.id)?completed.filter(id=>id!==topic.id):[...completed,topic.id]; setCompleted(next); localStorage.setItem('motopic-progress',JSON.stringify(next)); };
  const formatTime=`${String(Math.floor(seconds/60)).padStart(2,'0')}:${String(seconds%60).padStart(2,'0')}`;
  const practicePrompt=topic.practice;
  const copyPrompt=async()=>{ await navigator.clipboard.writeText(practicePrompt); setCopied(true); window.setTimeout(()=>setCopied(false),1400); };
  const essays=useMemo(()=> task==='task2' ? {A:task2Essay(topic as Task2Topic,'A'),B:task2Essay(topic as Task2Topic,'B')} : {A:task1Report(topic as Task1Topic,'A'),B:task1Report(topic as Task1Topic,'B')},[task,topic]);

  return <main>
    <header className="topbar">
      <a className="brand" href="#top" aria-label="墨题 IELTS 写作实验室首页"><span className="brand-mark">M</span><span>墨题 · IELTS</span></a>
      <nav aria-label="主导航"><a href="#tracks">课程库</a><a href="#method">写作方法</a><button type="button" onClick={()=>switchTask(task)}>继续学习 <span>↗</span></button></nav>
    </header>

    <section className="hero" id="top">
      <div className="eyebrow"><span /> BAND 7+ WRITING STUDIO</div>
      <h1>把雅思写作，<br />拆成<span>可以练会</span>的能力。</h1>
      <p className="hero-copy">从历年实考母题出发，读懂题型逻辑、积累地道表达，再用一题完成自己的输出。大作文与小作文，一套方法学到底。</p>
      <div className="hero-actions"><a className="primary" href="#tracks">进入课程库 <span>→</span></a><div className="stat"><strong>100</strong><small>真题母题主题</small></div><div className="stat"><strong>200</strong><small>原创高分范文</small></div></div>
      <div className="margin-note">READ · NOTICE · REWRITE</div><div className="stamp" aria-hidden="true">7.0<span>READY</span></div>
    </section>

    <section className="tracks" id="tracks">
      <div className="section-heading"><p>CHOOSE YOUR TRACK</p><h2>两条路径，建立完整写作系统</h2></div>
      <div className="module-grid">{moduleCards.map(module=><button className={cn('module-card',module.color,task===module.task&&'active')} key={module.mark} onClick={()=>switchTask(module.task)}>
        <span className="module-number">{module.mark}</span><div><p>ACADEMIC WRITING · {module.time}</p><h3>{module.title}</h3><p className="module-subtitle">{module.subtitle}</p></div><span className="round-arrow">↗</span>
      </button>)}</div>
    </section>
    <section className="method" id="method"><p>01 识别题型</p><span>→</span><p>02 拆解范文</p><span>→</span><p>03 迁移表达</p><span>→</span><p>04 独立输出</p></section>

    <section className="studio" id="studio">
      <div className="studio-topline"><div><p>YOUR WRITING DESK</p><h2>{task==='task2'?'大作文学习台':'小作文学习台'}</h2></div><div className="progress-card"><span>当前模块完成度</span><b>{progress}%</b><i><em style={{width:`${progress}%`}} /></i></div></div>
      <div className="type-switcher" role="tablist" aria-label="题型选择">{guides.map((item,index)=><button role="tab" aria-selected={guide.id===item.id} className={guide.id===item.id?'active':''} style={{'--type-accent':item.accent} as React.CSSProperties} key={item.id} onClick={()=>selectType(item.id)}><span>{String(index+1).padStart(2,'0')}</span><b>{item.name}</b><small>{item.en}</small></button>)}</div>

      <GuidePanel guide={guide} />

      <div className="library-heading"><div><p>REAL EXAM TOPIC LIBRARY</p><h2>{guide.name} · 十个实考母题</h2></div><label className="search-box"><span>⌕</span><input value={search} onChange={event=>setSearch(event.target.value)} placeholder="搜索主题或题目关键词" aria-label="搜索主题" /></label></div>
      <div className="lesson-shell">
        <aside className="topic-list"><div className="topic-list-head"><span>TOPICS</span><b>{visibleTopics.length}/10</b></div>{visibleTopics.map((item,index)=><button className={cn(item.id===topic.id&&'active',completed.includes(item.id)&&'done')} key={item.id} onClick={()=>selectTopic(item.id)}><span>{String(index+1).padStart(2,'0')}</span><div><b>{item.title}</b><small>{completed.includes(item.id)?'✓ 已完成':'实考母题 · 教学改写'}</small></div><i>→</i></button>)}{visibleTopics.length===0&&<p className="empty">没有匹配的主题</p>}</aside>
        <section className="lesson" id="lesson">
          <div className="lesson-header"><div><span className="exam-tag">REAL EXAM RECALL · ADAPTED</span><p>{guide.name} / TOPIC {String(typeTopics.findIndex(item=>item.id===topic.id)+1).padStart(2,'0')}</p><h2>{topic.title}</h2></div><button className={cn('complete-button',completed.includes(topic.id)&&'is-complete')} onClick={toggleComplete}>{completed.includes(topic.id)?'✓ 已完成':'标记完成'}</button></div>
          <div className="lesson-tabs" role="tablist" aria-label="学习内容">{([['brief','题目与思路'],['essayA','范文 A'],['essayB','范文 B'],['practice','练习题']] as [ContentTab,string][]).map(([key,label])=><button role="tab" aria-selected={tab===key} className={tab===key?'active':''} key={key} onClick={()=>setTab(key)}>{label}</button>)}</div>
          <div className="lesson-content">
            {tab==='brief'&&<>
              {task==='task1'&&<TaskGraphic topic={topic as Task1Topic} />}
              <div className="prompt-card"><div><span>EXAM PROMPT</span><b>{task==='task2'?'40 MIN · 250+ WORDS':'20 MIN · 150+ WORDS'}</b></div><p>{topic.prompt}</p></div>
              <div className="thinking-grid">
                <div><span>01</span><h4>{task==='task2'?'核心立场':'Overview 抓手'}</h4><p>{task==='task2'?(topic as Task2Topic).stance:(topic as Task1Topic).overview}</p></div>
                <div><span>02</span><h4>{task==='task2'?'论证路径 A':'细节组织'}</h4><p>{task==='task2'?(topic as Task2Topic).pointA:(topic as Task1Topic).detail}</p></div>
                <div><span>03</span><h4>{task==='task2'?'论证路径 B':'关键数据'}</h4><p>{task==='task2'?(topic as Task2Topic).pointB:(topic as Task1Topic).facts.map(item=>`${item.label} ${item.value}${item.unit}`).join(' · ')}</p></div>
                <div><span>04</span><h4>{task==='task2'?'例证迁移':'表达目标'}</h4><p>{task==='task2'?(topic as Task2Topic).example:'优先比较极值、方向与结构变化，不解释数据背后的原因。'}</p></div>
              </div>
              <div className="topic-words"><span>本题高频表达</span>{topic.keywords.map(word=><b key={word}>{word}</b>)}</div>
            </>}
            {tab==='essayA'&&<EssayView paragraphs={essays.A} label="MODEL A · ANALYTICAL" />}
            {tab==='essayB'&&<EssayView paragraphs={essays.B} label="MODEL B · ALTERNATIVE" />}
            {tab==='practice'&&<div className="practice-card"><div className="practice-top"><span>PRACTICE ONLY</span><div className="timer"><b>{formatTime}</b><button onClick={()=>setTimerOn(value=>!value)}>{timerOn?'暂停':'计时'}</button><button onClick={()=>{setTimerOn(false);setSeconds((task==='task2'?40:20)*60)}}>重置</button></div></div><p>{practicePrompt}</p><div className="practice-rule"><span>!</span><p>这一题只提供题目，不提供思路或范文。先限时完成，再回到同类范文检查结构、衔接和词汇迁移。</p></div><button className="copy-button" onClick={copyPrompt}>{copied?'✓ 已复制':'复制练习题'}</button></div>}
          </div>
          <div className="lesson-nav"><button disabled={typeTopics.findIndex(item=>item.id===topic.id)===0} onClick={()=>selectTopic(typeTopics[typeTopics.findIndex(item=>item.id===topic.id)-1]?.id)}>← 上一题</button><span>{String(typeTopics.findIndex(item=>item.id===topic.id)+1).padStart(2,'0')} / 10</span><button disabled={typeTopics.findIndex(item=>item.id===topic.id)===9} onClick={()=>selectTopic(typeTopics[typeTopics.findIndex(item=>item.id===topic.id)+1]?.id)}>下一题 →</button></div>
        </section>
      </div>
    </section>

    <section className="sources"><div><p>SOURCE & SCOPE</p><h2>关于“真实考题”的说明</h2></div><p>本站的 100 个主题来自 IELTS 官方样题、公开出版真题与考生回忆题库；为避免死记题面并便于教学，题干做了轻度规范化改写。小作文图形依据公开题面与数据结构进行教学性重绘，并非原卷截图。所有范文均为本站原创，不代表官方评分样本。</p><div className="source-links">{sourceLinks.map(link=><a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}<span>↗</span></a>)}</div></section>
    <footer><a className="brand" href="#top"><span className="brand-mark">M</span><span>墨题 · IELTS</span></a><p>为写作者而做，不隶属于 IELTS、British Council、IDP 或 Cambridge。</p><a href="#top">回到顶部 ↑</a></footer>
  </main>;
}
