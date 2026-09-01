import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getGuideCourse, guideCourses } from '../../guide-content';

type PageProps = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return guideCourses.map(course=>({ id: course.id }));
}

export async function generateMetadata({params}:PageProps):Promise<Metadata> {
  const {id}=await params;
  const course=getGuideCourse(id);
  if(!course) return { title:'课程未找到｜墨题 IELTS' };
  const title=`${course.name}完整写法｜墨题 IELTS`;
  const description=`${course.en} 系统课程：审题、总体结构、逐段写法、句式词汇、评分标准与考场检查。`;
  return { title, description, openGraph:{title,description,type:'article',images:[]}, twitter:{card:'summary',title,description,images:[]} };
}

export default async function GuideCoursePage({params}:PageProps) {
  const {id}=await params;
  const course=getGuideCourse(id);
  if(!course) notFound();
  const backQuery=course.task==='task1'?`/?task=task1&type=${course.id}#studio`:`/?task=task2&type=${course.id}#studio`;
  const courseNumber=guideCourses.filter(item=>item.task===course.task).findIndex(item=>item.id===course.id)+1;

  return <main className="course-page" style={{'--course-accent':course.accent} as React.CSSProperties}>
    <header className="course-topbar"><Link className="brand" href="/" aria-label="墨题 IELTS 首页"><span className="brand-mark">M</span><span>墨题 · IELTS</span></Link><nav><a href="#structure">总体结构</a><a href="#paragraphs">逐段精讲</a><a href="#language">语言库</a><Link className="course-back" href={backQuery}>返回题库 ↗</Link></nav></header>

    <section className="course-hero">
      <div className="course-kicker"><span>{course.task==='task2'?'TASK 2':'TASK 1'}</span> MASTERCLASS · {course.duration}</div>
      <div className="course-hero-grid"><div><p className="course-number">TYPE / {String(courseNumber).padStart(2,'0')}</p><h1>{course.name}<i>{course.en}</i></h1><p className="course-promise">{course.promise}</p></div><div className="course-brief"><span>本课最终目标</span><strong>{course.targetWords}</strong><p>{course.coreRule}</p></div></div>
      <div className="signal-strip"><b>看到这些问法，立即识别题型</b>{course.questionSignals.map(item=><span key={item}>{item}</span>)}</div>
    </section>

    <div className="course-layout">
      <aside className="course-index"><p>LESSON MAP</p><a href="#workflow"><span>01</span>考场流程</a><a href="#structure"><span>02</span>总体结构</a><a href="#paragraphs"><span>03</span>逐段精讲</a><a href="#language"><span>04</span>语言升级</a><a href="#scoring"><span>05</span>评分突破</a><a href="#check"><span>06</span>检查训练</a></aside>
      <article className="course-content">
        <section className="course-section" id="workflow"><div className="course-section-head"><span>01</span><div><p>EXAM WORKFLOW</p><h2>先管理时间，再管理文字</h2></div></div><div className="exam-flow">{course.examFlow.map(item=><div key={item.time}><b>{item.time}<small>MIN</small></b><h3>{item.action}</h3><p>{item.output}</p></div>)}</div></section>

        <section className="course-section" id="structure"><div className="course-section-head"><span>02</span><div><p>MASTER BLUEPRINT</p><h2>总体结构：每一段只完成一个任务</h2></div></div><div className="blueprint-board">{course.blueprint.map((item,index)=><div key={item.part}><span>{String(index+1).padStart(2,'0')}</span><div><h3>{item.part}</h3><b>{item.words} WORDS</b><p>{item.job}</p></div>{index<course.blueprint.length-1&&<i>↓</i>}</div>)}</div></section>

        <section className="course-section" id="paragraphs"><div className="course-section-head"><span>03</span><div><p>PARAGRAPH LAB</p><h2>逐段精讲：写什么、怎么想、如何表达</h2></div></div><div className="paragraph-lessons">{course.paragraphs.map((paragraph,index)=><section className="paragraph-lesson" key={paragraph.label}>
          <header><div><p>{paragraph.label}</p><h3>{paragraph.title}</h3></div><span>{paragraph.words}</span></header>
          <div className="paragraph-purpose"><b>本段任务</b><p>{paragraph.purpose}</p></div>
          <div className="paragraph-formula"><span>STRUCTURE</span><strong>{paragraph.formula}</strong></div>
          <div className="paragraph-grid"><div><h4><span>A</span> 解题步骤</h4><ol>{paragraph.steps.map(step=><li key={step}>{step}</li>)}</ol></div><div><h4><span>B</span> 可迁移句式</h4><div className="frame-list">{paragraph.sentenceFrames.map(frame=><blockquote key={frame}>{frame}</blockquote>)}</div></div><div><h4><span>C</span> 词汇升级</h4><div className="lesson-word-bank">{paragraph.wordBank.map(word=><span key={word}>{word}</span>)}</div></div></div>
          <div className="model-slice"><span>MODEL SLICE</span><p>{paragraph.example}</p></div><div className="coach-note"><b>✦ 教练提示</b><p>{paragraph.coachNote}</p></div>
        </section>)}</div></section>

        <section className="course-section" id="language"><div className="course-section-head"><span>04</span><div><p>LANGUAGE TOOLKIT</p><h2>按功能记表达，不背孤立“大词”</h2></div></div><div className="language-zones">{course.languageZones.map(zone=><div key={zone.title}><h3>{zone.title}</h3><p>{zone.note}</p>{zone.items.map(item=><blockquote key={item}>{item}</blockquote>)}</div>)}</div></section>

        <section className="course-section" id="scoring"><div className="course-section-head"><span>05</span><div><p>BAND 7+ CONTROL</p><h2>四项评分标准，分别怎么拿分</h2></div></div><div className="score-table">{course.scoreFocus.map(item=><div key={item.criterion}><h3>{item.criterion}</h3><p>{item.target}</p><strong>{item.action}</strong></div>)}</div><div className="pitfall-box"><h3>最常见的失分方式</h3><ol>{course.pitfalls.map(item=><li key={item}>{item}</li>)}</ol></div></section>

        <section className="course-section" id="check"><div className="course-section-head"><span>06</span><div><p>EXAM-DAY SYSTEM</p><h2>最后六分钟检查表与训练法</h2></div></div><div className="closing-grid"><div className="checklist"><h3>交卷前逐项确认</h3>{course.checklist.map(item=><label key={item}><span>□</span>{item}</label>)}</div><div className="drill-list"><h3>把方法练成反应</h3>{course.drills.map((item,index)=><div key={item}><span>{String(index+1).padStart(2,'0')}</span><p>{item}</p></div>)}</div></div></section>
      </article>
    </div>
    <section className="course-cta"><p>方法读完，只完成了一半。</p><h2>回到题库，用一篇真题把结构写出来。</h2><Link href={backQuery}>开始练习 <span>→</span></Link></section>
    <footer><Link className="brand" href="/"><span className="brand-mark">M</span><span>墨题 · IELTS</span></Link><p>{course.name} · SYSTEMATIC WRITING COURSE</p><a href="#top">回到顶部 ↑</a></footer>
  </main>;
}
