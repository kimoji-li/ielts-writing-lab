export type Guide = {
  id: string;
  name: string;
  en: string;
  short: string;
  accent: string;
  tips: string[];
  template: string[];
  sentences: string[];
  vocab: string[];
  expressions: string[];
};

export type Task2Topic = {
  id: string;
  typeId: string;
  title: string;
  prompt: string;
  practice: string;
  stance: string;
  pointA: string;
  pointB: string;
  example: string;
  keywords: string[];
};

export type Fact = { label: string; value: number; unit?: string };

export type Task1Topic = {
  id: string;
  typeId: string;
  title: string;
  prompt: string;
  practice: string;
  overview: string;
  detail: string;
  facts: Fact[];
  keywords: string[];
};

export const task2Guides: Guide[] = [
  {
    id: 'opinion', name: '观点类', en: 'Opinion Essay', short: '明确立场，逐层论证', accent: '#ff745c',
    tips: ['开头必须直接回应 “to what extent”，不要把立场藏到结尾。', '每个主体段只负责一个核心理由：主题句 → 解释 → 例证 → 回扣。', '可以部分同意，但要让两边权重清楚，避免五五开。', '结论只压缩立场与理由，不加入新观点。'],
    template: ['Introduction · 改写背景 + 清晰 thesis', 'Body 1 · 最强理由 + 因果链 + 例子', 'Body 2 · 次强理由 / 有限让步 + 回应', 'Conclusion · 重申立场 + 综合判断'],
    sentences: ['I largely agree with this view because …', 'The strongest argument in favour of this position is that …', 'Admittedly, …; nevertheless, this does not outweigh …', 'For these reasons, I remain convinced that …'],
    vocab: ['compelling rationale 充分理由', 'yield measurable benefits 产生可衡量收益', 'be predicated on 基于', 'a disproportionate burden 不成比例的负担'],
    expressions: ['This argument is persuasive only to the extent that …', 'A more defensible position is that …', 'The long-term gains outweigh the short-term disruption.'],
  },
  {
    id: 'discussion', name: '讨论类', en: 'Discuss Both Views', short: '公平讨论，再给判断', accent: '#a9e6d1',
    tips: ['两种观点都要解释“为什么有人这样想”，而不是只贴标签。', '先讨论较弱或你不支持的一方，后讨论你支持的一方，逻辑更自然。', '个人观点可以放在开头，也可以在第二主体段展开，但必须明确。', '用共同评价标准比较两边，例如公平、效率、长期影响。'],
    template: ['Introduction · 引出分歧 + 文章路线 + 立场', 'Body 1 · View A 的逻辑、价值与局限', 'Body 2 · View B 的逻辑、证据与个人判断', 'Conclusion · 比较后给出最终答案'],
    sentences: ['Proponents of the former view contend that …', 'This perspective rests on the assumption that …', 'Those who favour the latter approach point out that …', 'While both positions have merit, I am more persuaded by …'],
    vocab: ['competing priorities 相互竞争的优先事项', 'social cohesion 社会凝聚力', 'distributive fairness 分配公平', 'strike a balance 取得平衡'],
    expressions: ['Seen through the lens of …', 'The point is valid, but not decisive.', 'A balanced policy need not treat these aims as mutually exclusive.'],
  },
  {
    id: 'advantages', name: '利弊类', en: 'Advantages & Disadvantages', short: '比较影响，判断权重', accent: '#d9ff67',
    tips: ['先界定受影响对象：个人、企业、政府还是环境。', '利与弊都要说明程度和持续时间，不能只列清单。', '若题目问 “outweigh”，结尾必须做权重判断。', '例子用来证明机制，不需要虚构精确研究数据。'],
    template: ['Introduction · 改写趋势 + 回答是否利大于弊', 'Body 1 · 主要优势 + 受益者 + 长期价值', 'Body 2 · 主要劣势 + 风险边界 + 可否缓解', 'Conclusion · 依据影响范围与可逆性称重'],
    sentences: ['One immediate benefit is that …', 'A more far-reaching advantage lies in …', 'The principal drawback, however, is …', 'On balance, the benefits are more substantial because …'],
    vocab: ['far-reaching implications 深远影响', 'lower the barrier to 降低门槛', 'unintended consequence 意外后果', 'a reversible drawback 可逆的弊端'],
    expressions: ['The benefit extends beyond immediate convenience.', 'This cost can be mitigated through …', 'Its advantages are broader in scope and longer in duration.'],
  },
  {
    id: 'problem', name: '问题解决类', en: 'Problem & Solution', short: '找准根因，对症下药', accent: '#ffd36b',
    tips: ['区分“原因”和“问题”：原因解释发生，问题解释伤害。', '解决方案要有实施主体、具体动作与作用机制。', '优先处理根因，而不是只缓解症状。', '一个主体段写问题链，一个主体段写解决链，避免来回跳。'],
    template: ['Introduction · 概括现象 + 指明将分析的问题和对策', 'Body 1 · 根因 / 主要问题 + 后果链', 'Body 2 · 政府、机构、个人的针对性方案', 'Conclusion · 最关键干预点 + 预期结果'],
    sentences: ['This trend can be traced primarily to …', 'The most serious consequence is …', 'A targeted response would be for … to …', 'This would address the root cause by …'],
    vocab: ['underlying driver 深层驱动因素', 'place strain on 对…造成压力', 'targeted intervention 针对性干预', 'enforcement mechanism 执行机制'],
    expressions: ['Treating the symptom alone will have limited effect.', 'Responsibility should be shared, but not diffused.', 'Prevention is both cheaper and more durable than remediation.'],
  },
  {
    id: 'two-part', name: '双问题类', en: 'Two-part Question', short: '两问对齐，篇幅均衡', accent: '#cbbcff',
    tips: ['在草稿上圈出两个问句，确保 thesis 与主体段逐一对应。', '若第一问是原因、第二问是评价，不要用同一种论证方式。', '两问篇幅大致平衡；更复杂的一问可以稍长。', '结论必须同时回收两问的答案。'],
    template: ['Introduction · 改写现象 + 两问的简短答案', 'Body 1 · 回答 Question 1 + 解释 + 例子', 'Body 2 · 回答 Question 2 + 评价 / 建议', 'Conclusion · 一句话合并两项结论'],
    sentences: ['Several factors help to explain why …', 'The most influential of these is …', 'Whether this is positive depends largely on …', 'Overall, this occurs because …, and it should be regarded as …'],
    vocab: ['multifaceted cause 多层原因', 'status incentive 地位激励', 'behavioural shift 行为转变', 'net social impact 社会净影响'],
    expressions: ['The explanation is as much cultural as economic.', 'Its desirability depends on who bears the cost.', 'What appears beneficial at an individual level may be harmful collectively.'],
  },
];

const t2 = (typeId: string, id: string, title: string, prompt: string, practice: string, stance: string, pointA: string, pointB: string, example: string, keywords: string[]): Task2Topic => ({ typeId, id, title, prompt, practice, stance, pointA, pointB, example, keywords });

export const task2Topics: Task2Topic[] = [
  t2('opinion','op1','远程办公', 'Some people believe working from home is beneficial for employees and employers. To what extent do you agree or disagree?', 'More people are choosing to work remotely. Is this a positive or negative development?', '远程办公总体利大于弊，但企业需要用明确的协作制度避免信息孤岛。', '通勤时间被转化为专注工作和家庭照护，员工自主性也能提升留任率。', '完全远程会削弱非正式学习，因此混合办公比“一刀切”更稳健。', '一家跨城设计团队可把固定会议集中在两天，其余时间用于深度工作。', ['autonomy','retention','hybrid work']),
  t2('opinion','op2','学校教授实用技能', 'Schools should teach practical skills such as managing money as well as academic subjects. To what extent do you agree or disagree?', 'Schools should replace some traditional subjects with vocational training. Do you agree or disagree?', '学校应系统教授财务与生活技能，但不应以牺牲基础学科为代价。', '基础理财、合同和数字安全能让学生更安全地进入成年生活。', '学术学科培养可迁移的推理能力，两者应通过项目式学习结合。', '数学课可让学生比较贷款利率并制作真实月度预算。', ['financial literacy','transferable skills','curriculum']),
  t2('opinion','op3','博物馆免费开放', 'All museums and art galleries should be free to the public. To what extent do you agree or disagree?', 'Museums should focus on entertaining visitors rather than educating them. Do you agree or disagree?', '核心常设展应免费，特殊展览可以合理收费以维持质量。', '免费入口扩大低收入家庭接触文化遗产的机会，也提升公共投资回报。', '完全取消收入会挤压保育和策展预算，分层票价更可持续。', '城市博物馆可在工作日免费，并以会员和巡展票补贴维护。', ['cultural access','conservation','tiered pricing']),
  t2('opinion','op4','限制非必要航班', 'A long-distance flight uses as much fuel as a car does in several years. Non-essential flights should be discouraged rather than restricting cars. To what extent do you agree?', 'Individuals should pay the full environmental cost of air travel. Do you agree or disagree?', '应减少不必要航班，但交通减排不能因此忽略数量更大的日常汽车出行。', '航空单次排放高，短途铁路替代和常旅客税能精准减少可避免旅行。', '汽车仍影响城市空气与拥堵，政策必须覆盖整个交通系统。', '高速铁路完善后，企业可限制四小时以内航程的差旅报销。', ['aviation emissions','modal shift','frequent-flyer levy']),
  t2('opinion','op5','公共交通免费', 'Public transport should be free for everyone. To what extent do you agree or disagree?', 'Governments should spend more on railways than roads. Do you agree or disagree?', '与全民免费相比，对低收入者定向补贴并提升班次更有效。', '降价能减少出行障碍，并鼓励部分司机改乘公交。', '若服务稀疏或不可靠，零票价只会加剧拥挤而无法替代汽车。', '城市可向学生和求职者提供通票，同时把收入投入夜班公交。', ['fare subsidy','service frequency','modal shift']),
  t2('opinion','op6','儿童使用智能手机', 'Children should not be allowed to use smartphones until they reach secondary school. To what extent do you agree or disagree?', 'Parents, not schools, should be responsible for controlling children’s screen time. Do you agree?', '按年龄全面禁止并不现实，分阶段权限和数字素养教育更合理。', '过早、无限制使用会挤压睡眠、运动和面对面交流。', '受监督的设备也支持导航、家庭联系与学习，关键是功能和时长。', '家长可启用应用白名单，并和学校统一无手机课堂规则。', ['digital literacy','age-appropriate','screen time']),
  t2('opinion','op7','大学教育的受益者', 'University education benefits individuals more than society, so students should pay the full cost. To what extent do you agree or disagree?', 'Higher education should be free for everyone. To what extent do you agree?', '毕业生确有私人收益，但社会也获得医生、教师与创新，因此应共同承担成本。', '学历通常提升个人收入，合理学费能防止公共资源被过度占用。', '公共回报具有外溢性，收入挂钩还款比全额预付更公平。', '紧缺护理专业可免学费，商科则采用毕业后按收入还款。', ['public good','income-contingent','spillover']),
  t2('opinion','op8','名人隐私', 'The media should be allowed to report details of famous people’s private lives. To what extent do you agree or disagree?', 'Famous people have no right to privacy because they choose public careers. Do you agree?', '媒体只能在明确涉及公共利益时报道私人生活，单纯猎奇不构成正当理由。', '揭露利益冲突或违法行为能维护问责。', '家庭、健康与儿童信息通常与公共职责无关，曝光会造成不可逆伤害。', '报道官员隐瞒资产有公共价值，但偷拍演员子女没有。', ['public interest','intrusion','accountability']),
  t2('opinion','op9','广告的社会影响', 'Advertising has a negative influence on society. To what extent do you agree or disagree?', 'Advertising aimed at children should be banned. Do you agree or disagree?', '广告并非天然有害，但对儿童、健康和虚假环保宣称必须严格监管。', '广告能传递产品信息并支持免费媒体和新品牌进入市场。', '操纵性定向投放会制造焦虑与过度消费，弱势群体尤其易受影响。', '平台应公开赞助关系并禁止向儿童推送高糖食品广告。', ['consumer choice','targeted advertising','greenwashing']),
  t2('opinion','op10','商业与历史专业', 'Society would benefit more if more people studied business than history. To what extent do you agree or disagree?', 'Students should choose university subjects according to job prospects. Do you agree?', '社会不应以短期就业率给学科排座次；商业与历史提供不同但互补的公共价值。', '商业教育能提升组织效率、创业和资源配置。', '历史训练证据判断与制度记忆，可防止政策重复旧错误。', '城市更新团队同时需要财务模型和对社区历史的理解。', ['disciplinary value','historical literacy','labour market']),

  t2('discussion','di1','学习期间获得工作经验', 'Some people think students should gain work experience during their studies, while others think they should focus entirely on academic work. Discuss both views and give your opinion.', 'Some believe teenagers should have part-time jobs; others say this distracts from school. Discuss both views.', '结构化、限时的实习最理想，它把理论转化为判断，又不挤压核心学习。', '专注学业能建立完整知识体系，尤其适合医学和工程等高风险专业。', '真实工作暴露沟通、时间管理和职业匹配问题，使学习目标更具体。', '大学可把每周八小时的带导师实习纳入学分。', ['work-integrated learning','academic depth','mentoring']),
  t2('discussion','di2','艺术与公共服务预算', 'Some people think governments should spend money on the arts, while others believe public services should receive priority. Discuss both views and give your opinion.', 'Public money should support artists rather than be spent on other services. Discuss both views.', '基本服务必须优先，但稳定且透明的小比例文化预算仍值得保留。', '医疗、住房和教育直接关系生存与机会，短缺时具有更高紧迫性。', '艺术保存共同记忆、改善公共空间，并能带动本地经济。', '预算可先设公共服务底线，再用文化基金配对社会资本。', ['fiscal priority','cultural capital','public value']),
  t2('discussion','di3','竞争还是合作', 'Some people believe children should be encouraged to compete, while others think cooperation is more important. Discuss both views and give your opinion.', 'Competitive sports should be compulsory at school. Discuss both views.', '孩子需要有边界的竞争来学习韧性，但合作应是课堂的默认结构。', '竞争提供清晰反馈，并能激发努力和承受失败的能力。', '合作更接近现实工作，也训练倾听、协商与共同责任。', '科学课可用团队项目评分，同时给个人反思分数。', ['healthy competition','collaboration','resilience']),
  t2('discussion','di4','监狱还是教育', 'Some people think prison is the best way to reduce crime, while others believe education and job training are more effective. Discuss both views and give your opinion.', 'Longer prison sentences are the best way to reduce crime. Discuss both views.', '对暴力罪需要拘禁保护公众，但多数再犯预防依赖教育、治疗与就业。', '监禁能即时隔离危险者，也表达社会谴责。', '若释放后仍无技能、住所或支持，威慑无法改变犯罪条件。', '监狱内职业证书与释放后雇主合作可降低重犯风险。', ['deterrence','rehabilitation','recidivism']),
  t2('discussion','di5','全球援助优先顺序', 'Some think charities should help people in their own country, while others say they should assist whoever is in greatest need. Discuss both views and give your opinion.', 'Governments should only provide foreign aid after solving domestic problems. Discuss both views.', '援助应以需要和可产生的影响为核心，同时保留对本地捐赠者的透明责任。', '本地优先能增强信任，捐赠者也更容易监督结果。', '灾难与极端贫困不受国界限制，同样资金在更贫困地区可挽救更多生命。', '慈善机构可公开将六成预算按全球需要分配、四成用于本地。', ['effective altruism','donor trust','humanitarian need']),
  t2('discussion','di6','纸质书还是电子资源', 'Some people prefer printed books, while others believe digital materials are better for learning. Discuss both views and give your opinion.', 'Libraries are no longer necessary because information is online. Discuss both views.', '数字资料提升可及性，纸质阅读则更适合深度学习，两者应按任务组合。', '纸张减少通知干扰，并提供稳定的空间记忆线索。', '数字文本便于搜索、更新、辅助阅读和低成本分发。', '课程可用电子资料预习，在研讨课提供纸质核心章节。', ['deep reading','accessibility','information retrieval']),
  t2('discussion','di7','本地商店与大型商场', 'Some people prefer shopping in large malls, while others support small local shops. Discuss both views and give your opinion.', 'Large supermarkets are replacing local shops. Is this positive or negative?', '大型零售提供价格与品类优势，但城市政策应保护能形成社区网络的小店。', '规模采购降低价格，并让消费者一次完成多种需求。', '小店把收入留在当地，也为老人和无车居民提供步行可达服务。', '规划部门可限制核心街区大型店面积，并给独立店共享物流。', ['economies of scale','local multiplier','walkability']),
  t2('discussion','di8','专业化还是全面发展', 'Some people think schools should help students specialise early, while others favour a broad curriculum. Discuss both views and give your opinion.', 'Students should study only subjects useful for their future careers. Discuss both views.', '中学阶段应保持广度，后期再逐步增加选修深度。', '早期专攻能让有明确天赋的学生获得更高水平训练。', '青少年兴趣仍在变化，广泛课程能建立跨学科思考并避免过早锁定。', '学校可在共同核心课程外设置占三成课时的专业路径。', ['specialisation','broad curriculum','premature tracking']),
  t2('discussion','di9','个人还是政府负责健康', 'Some people think individuals are responsible for their health, while others believe governments should ensure healthy lifestyles. Discuss both views and give your opinion.', 'Obesity is a personal problem, not a government responsibility. Discuss both views.', '个人做日常选择，但政府决定食物、街道与信息环境，因此责任必须共享。', '饮食、运动和就医最终由个人行为构成，完全外包责任会削弱自主性。', '价格、广告和安全步行空间深刻影响可选择范围。', '政府可给食品清晰标签并建设步道，个人仍决定如何使用。', ['personal agency','choice architecture','preventive health']),
  t2('discussion','di10','面试还是其他招聘方式', 'Some employers consider interviews the best way to select staff, while others prefer tests and work samples. Discuss both views and give your opinion.', 'Qualifications are more important than social skills when hiring. Discuss both views.', '结构化面试应与匿名工作样本结合，单一面试容易奖励表演而非能力。', '面试能观察表达、价值判断和团队互动。', '实际任务更接近岗位表现，也能减少第一印象偏差。', '编辑岗位可先盲审一页改稿，再用统一问题面试。', ['structured interview','work sample','selection bias']),

  t2('advantages','ad1','国际旅游增长', 'International tourism is growing rapidly. Do the advantages outweigh the disadvantages?', 'More people travel abroad than in the past. What are the advantages and disadvantages?', '若征收环境成本并让收益留在社区，国际旅游的文化和经济收益更大。', '游客支出支持就业、遗产修复和跨文化理解。', '过度旅游抬高租金、挤压公共空间并增加排放。', '古城可预约限流，把门票专款用于公交和居民住房。', ['overtourism','cultural exchange','visitor levy']),
  t2('advantages','ad2','在线购物', 'Online shopping is replacing shopping in stores. Do the advantages outweigh the disadvantages?', 'More people buy goods online. Discuss the advantages and disadvantages.', '便利、选择和无障碍优势更广，但需治理包装浪费和平台垄断。', '偏远地区、行动不便者和小众需求都能获得更大市场。', '本地街区客流下降，配送与退货也带来资源浪费。', '合并配送、可重复包装与平台公平税可降低副作用。', ['e-commerce','last-mile delivery','market access']),
  t2('advantages','ad3','海外留学', 'More students choose to study in another country. Do the advantages outweigh the disadvantages?', 'Universities are becoming increasingly international. Discuss the benefits and drawbacks.', '学术和跨文化收益通常大于成本，前提是学生获得财务和心理支持。', '海外学习扩大专业选择，训练独立性与跨文化沟通。', '高费用、孤独与人才流失可能扩大不平等。', '双学位与带薪实习能降低风险并连接两地知识网络。', ['academic mobility','brain drain','intercultural competence']),
  t2('advantages','ad4','人口老龄化', 'In many countries, the proportion of older people is increasing. Do the advantages outweigh the disadvantages?', 'An ageing population creates problems for society. To what extent do you agree?', '老龄化带来财政压力，但健康长寿和丰富经验并非净负担，制度适应是关键。', '老年人通过照护、志愿服务和专业指导贡献大量非市场价值。', '养老金、医疗和劳动力供给面临压力。', '弹性退休与预防医疗可延长健康工作年限。', ['ageing society','dependency ratio','healthy longevity']),
  t2('advantages','ad5','自动驾驶汽车', 'All vehicles may become driverless in the future. Do the advantages outweigh the disadvantages?', 'Driverless cars will improve transport. Discuss the advantages and disadvantages.', '安全和无障碍潜力更大，但必须先解决系统责任和过渡期混合交通。', '自动系统不疲劳、不酒驾，并能给老人和残障人士独立出行。', '软件失误规模化、网络安全和司机失业是重大风险。', '高风险场景应保留人工接管并要求透明事故审计。', ['autonomous vehicles','liability','mobility access']),
  t2('advantages','ad6','开放式办公室', 'Many companies use open-plan offices instead of separate rooms. Do the advantages outweigh the disadvantages?', 'Modern workplaces are becoming less private. Discuss the advantages and disadvantages.', '开放空间节省成本并促进接触，但对知识工作者而言噪声与注意力损失往往更大。', '灵活座位让团队更容易临时交流，也提高空间利用率。', '持续干扰降低深度工作，隐私不足还会增加压力。', '设置安静区、电话间和团队日能保留协作而减少干扰。', ['open-plan office','cognitive load','space utilisation']),
  t2('advantages','ad7','全球销售相同商品', 'Countries are becoming more similar because people can buy the same products everywhere. Is this a positive or negative development?', 'Globalisation is causing cultures to become similar. Discuss the advantages and disadvantages.', '商品可得性提升是优势，但若本地生产者被挤出，长期文化与市场韧性会下降。', '全球供应让消费者获得可靠标准、更低价格和创新产品。', '同质化削弱地方工艺，也让市场依赖少数跨国企业。', '零售商可为本地品牌预留货架，并标明产地故事。', ['cultural homogenisation','consumer access','local enterprise']),
  t2('advantages','ad8','间隔年', 'Some students take a gap year before university. Do the advantages outweigh the disadvantages?', 'Young people should work or travel before starting university. Discuss the benefits and drawbacks.', '有目标且有时间边界的间隔年通常有益，无计划的停顿则可能加剧不平等。', '工作、服务或旅行能澄清专业选择并建立成熟度。', '部分学生失去学习节奏，低收入家庭也难承担无薪经历。', '大学可提供有津贴的社区项目和延期入学保障。', ['gap year','purposeful experience','access gap']),
  t2('advantages','ad9','独居增加', 'More people are choosing to live alone. Is this a positive or negative development?', 'Single-person households are increasing. Discuss the advantages and disadvantages.', '个人自主性是积极变化，但住房成本和孤独风险要求城市重新设计服务。', '独居让人掌控时间、空间和职业迁移。', '单位能耗与住房需求上升，社会联系也可能减弱。', '共享公共空间、小户型和社区活动能兼顾隐私与连接。', ['single-person household','autonomy','social isolation']),
  t2('advantages','ad10','短期合同与频繁换工作', 'People increasingly change jobs and careers during their working lives. Is this a positive or negative development?', 'Temporary work contracts are becoming common. Discuss the advantages and disadvantages.', '职业流动提升匹配与学习，但保障不足会把风险单方面转给劳动者。', '换工作能提高工资、技能组合和对技术变化的适应力。', '不稳定收入削弱住房、育儿和长期培训规划。', '可携带福利账户能让保障跟随个人而不是单一雇主。', ['career mobility','portable benefits','job insecurity']),

  t2('problem','pr1','城市交通拥堵', 'Traffic congestion is becoming worse in many cities. What problems does this cause, and what solutions can be introduced?', 'Many cities suffer from heavy traffic. What are the causes and possible solutions?', '拥堵源于低密度规划与驾车成本被低估，应以可靠公交和道路定价共同处理。', '延误损失生产时间，污染又集中伤害道路附近居民。', '拥堵费只有在公交频密、步行和骑行安全时才公平有效。', '高峰收费收入可专门增加郊区快速公交。', ['congestion pricing','induced demand','mass transit']),
  t2('problem','pr2','家庭垃圾增加', 'Household waste is increasing in many countries. What are the causes, and what measures can reduce it?', 'The amount of rubbish produced by consumers is rising. Why, and how can it be solved?', '廉价一次性商品与生产者无回收责任共同推动垃圾增长。', '产品寿命短、包装过度，处理成本却由公众承担。', '延伸生产者责任、维修权和按量收费能改变激励。', '电子企业可回收旧设备并对可更换电池提供更长保修。', ['extended producer responsibility','right to repair','single-use']),
  t2('problem','pr3','淡水短缺', 'Demand for fresh water is increasing worldwide. What causes this, and how can governments and individuals respond?', 'Lack of fresh water is becoming a global problem. What are the causes and solutions?', '农业低效、城市泄漏与错误定价比家庭饮水本身更关键。', '缺水威胁粮食、卫生与地区稳定，并最先影响低收入群体。', '政府应修复管网、推广滴灌并保护基本用水配额。', '城市可给基本用量低价、对泳池和过量灌溉分级收费。', ['water scarcity','drip irrigation','tiered pricing']),
  t2('problem','pr4','儿童肥胖', 'Childhood obesity is increasing. What are the causes, and what solutions can address it?', 'Many children are overweight and unfit. What problems does this create and how can it be solved?', '高糖食品环境与运动空间不足让健康选择变难，不能只责怪家庭。', '肥胖提高慢性病风险，也可能影响自信和课堂参与。', '限制儿童广告、改善校餐并建设安全步行路线能改变环境。', '学校周边可禁售超大杯含糖饮料并开设每日活动时段。', ['obesogenic environment','food marketing','active travel']),
  t2('problem','pr5','乡村人口流失', 'Young people are leaving rural areas for cities. What problems does this cause, and what solutions are possible?', 'Rural communities are declining in many countries. Why is this happening and what can be done?', '就业、教育和连接性集中在城市，导致乡村服务与人口互相萎缩。', '劳动力和税基流失使学校、诊所和公共交通更难维持。', '宽带、区域院校与远程岗位激励可创造不必迁移的机会。', '公共部门可把部分后台岗位设在小城并配套职业学院。', ['rural depopulation','regional development','digital infrastructure']),
  t2('problem','pr6','青少年犯罪', 'Youth crime is rising in some places. What are the causes, and how can it be reduced?', 'Many young offenders commit crimes again. Why, and what measures can prevent this?', '学校脱离、家庭压力与缺少合法机会相互叠加，单纯加刑效果有限。', '犯罪记录会切断教育与就业，形成再犯循环。', '早期导师、家庭支持和恢复性司法应与必要执法结合。', '社区项目可让少年犯完成职业证书并修复对受害者的损害。', ['youth offending','restorative justice','early intervention']),
  t2('problem','pr7','生物多样性下降', 'Many animal and plant species are declining. What are the causes, and what solutions can protect biodiversity?', 'The loss of species is a serious environmental problem. Why is it happening and what can be done?', '栖息地破碎化和不可持续生产是主因，保护区必须与经济政策连接。', '物种丧失削弱授粉、水土保持和生态系统韧性。', '生态走廊、供应链追踪与对社区的保育收益共享更有效。', '公路可设置野生动物通道，农户因保留湿地获得补偿。', ['habitat fragmentation','ecological corridor','ecosystem services']),
  t2('problem','pr8','塑料包装', 'Plastic packaging is increasingly common. What problems does it cause, and how can its use be reduced?', 'Shops and manufacturers should reduce packaging. What measures would be effective?', '低价一次性塑料把清理和污染成本转嫁给社会。', '塑料长期残留并进入食物链，混合材料还难以回收。', '押金返还、重复使用标准和生产者费用能推动重新设计。', '饮料瓶统一规格后可跨品牌清洗循环使用。', ['deposit return','reusable packaging','externalised cost']),
  t2('problem','pr9','住房负担能力', 'Housing is becoming unaffordable in many cities. What problems does this cause, and what solutions can governments adopt?', 'Many workers cannot afford to live near their jobs. Why, and what can be done?', '供应受限、土地增值和投资需求共同推高住房成本。', '长途通勤、延迟成家与关键岗位流失削弱城市功能。', '交通节点增密、社会住房与闲置税应同时推进。', '城市可要求大型新盘提供固定比例长期可负担住房。', ['housing affordability','inclusionary zoning','vacancy tax']),
  t2('problem','pr10','睡眠不足', 'Many people do not get enough sleep. Why is this happening, and what problems can it cause?', 'Modern lifestyles are reducing sleep time. What are the causes and possible solutions?', '延长工时、夜间屏幕和不规律排班把睡眠当作可压缩时间。', '疲劳降低判断与生产力，并增加道路和工作场所事故。', '雇主应限制深夜消息和倒班连排，个人建立稳定停机习惯。', '医院可减少连续夜班并提供班后安全交通。', ['sleep deprivation','shift work','cognitive performance']),

  t2('two-part','tw1','为什么有人更努力', 'In education and employment, some people work harder than others. Why is this? Is working hard always a good thing?', 'Many people compete intensely at school and work. Why, and is this positive?', '努力差异来自目标、资源与地位激励；努力有价值，但不能替代方向和恢复。', '清晰回报、家庭期待和自我效能会放大投入。', '长期过度努力可能损害健康，并让“忙碌”掩盖低效率。', '团队以成果而非在线时长评价，可减少表演性加班。', ['achievement motivation','status incentive','burnout']),
  t2('two-part','tw2','更长的工作时间', 'People in some countries work longer hours than elsewhere. Why is this? Is this a positive development?', 'Many employees work overtime regularly. Why, and what effects does this have?', '长工时常由收入压力与组织文化驱动，整体上是负面发展。', '低工资、岗位不安全和管理者示范形成加班规范。', '边际产出递减，长期疲劳反而增加错误和离职。', '公司公开团队工时与结果后，能识别“超时但低效”的流程。', ['long-hours culture','presenteeism','diminishing returns']),
  t2('two-part','tw3','城市生活压力', 'City life is becoming more stressful. Why is this, and what can be done to improve urban well-being?', 'Why do many people still move to stressful cities, and how can city life be improved?', '住房、通勤与感官过载共同制造压力；更近的服务和公共空间能缓解。', '高薪、教育和社交机会仍吸引人口集中。', '十五分钟社区、安静绿地与住房保障比一般减压宣传更根本。', '把托儿、诊所和超市设在步行范围内能直接减少日常摩擦。', ['urban stress','sensory overload','15-minute city']),
  t2('two-part','tw4','科学的首要目的', 'The most important aim of science should be to improve people’s lives. To what extent do you agree, and who should decide research priorities?', 'Why do governments fund scientific research, and should all results be public?', '改善生活应是总体方向，但基础研究的价值常无法预先预测，优先级需多方决定。', '公共资金理应回应疾病、环境和基础设施等社会需要。', '只资助短期应用会错过长期突破，科学家、公众和政府应共同治理。', '独立委员会可把预算分为任务型研究和自由探索两部分。', ['basic research','research governance','public benefit']),
  t2('two-part','tw5','本地人不参观博物馆', 'Museums are often visited by tourists but not local people. Why does this happen, and how can locals be encouraged to visit?', 'Why do young people visit museums less often, and what can museums do?', '本地人把固定展览视为“一次性体验”，门票与开放时间也构成障碍。', '缺少轮换内容和社区代表性降低重复访问动机。', '晚间免费时段、居民共创展览和学校合作能建立持续关系。', '博物馆可让居民用家庭物件策划街区历史季展。', ['repeat visitation','community curation','cultural participation']),
  t2('two-part','tw6','网络影响者', 'Social media influencers are becoming important to young people. Why is this, and is their influence positive or negative?', 'Why do people follow celebrities online, and how does this affect society?', '亲密感与算法放大使影响者有吸引力，其影响取决于透明度与媒体素养。', '日常化内容制造像朋友一样的单向关系，也提供身份参照。', '隐性广告和极端形象会扭曲消费与自我评价。', '平台应强制醒目标注付费推广，学校教授商业内容识别。', ['parasocial relationship','algorithmic reach','sponsorship disclosure']),
  t2('two-part','tw7','一次性消费社会', 'People throw away items and buy new ones more often than before. Why is this? What effects does it have?', 'Why has society become more wasteful, and how can consumer behaviour change?', '低价、难维修和更新营销驱动替换，后果是资源压力与家庭隐性支出。', '产品设计和保修政策让维修比购买更麻烦。', '垃圾出口与采矿影响由远离消费者的社区承担。', '耐用度标签和维修评分能让长期成本在购买时可见。', ['throwaway culture','planned obsolescence','durability label']),
  t2('two-part','tw8','动物灭绝是否自然', 'Some species become extinct naturally. Why are people concerned about extinction, and should humans intervene?', 'Why is wildlife conservation important, and how much should society spend on it?', '当前灭绝速度受人类活动加速，因此担忧合理，干预应优先修复生态系统。', '物种相互依赖，丧失可能触发无法预测的生态连锁。', '保护栖息地通常同时保障水、气候和当地生计。', '恢复湿地既保护鸟类，也降低洪水风险。', ['extinction rate','trophic cascade','ecosystem restoration']),
  t2('two-part','tw9','儿童活动减少', 'Children spend less time outdoors than in the past. Why is this, and how can they be encouraged to be more active?', 'Why are children less physically active, and who should solve the problem?', '屏幕吸引、安全担忧与汽车化街区共同减少户外时间。', '家长缺少安全独立活动空间，只能以室内娱乐替代。', '学校每日活动、慢速街道和近家游戏空间能让运动回归日常。', '放学时段封闭校门前车道，可形成安全步行和玩耍区。', ['independent mobility','active play','safe streets']),
  t2('two-part','tw10','频繁改变职业', 'People no longer expect to have the same job for life. Why is this, and how should individuals prepare?', 'Why are traditional career paths disappearing, and is this a positive change?', '技术、组织重组和价值观变化使职业更流动，个人需建立可迁移技能与安全垫。', '自动化改变任务，劳动者也更重视意义与弹性。', '持续学习、专业网络和可携带资历比预测单一“未来职业”可靠。', '会计人员学习数据可视化，可把领域经验迁移到分析岗位。', ['career transition','transferable skills','lifelong learning']),
];

export const task1Guides: Guide[] = [
  {
    id: 'line', name: '折线图', en: 'Line Graph', short: '抓趋势、拐点与交叉', accent: '#ff745c',
    tips: ['先看时间范围和单位，再找整体上升、下降、波动或稳定。', 'Overview 只写两到三个最显著趋势，不堆具体数字。', '主体段按趋势相近的线分组，而不是机械地一条线一段。', '起点、终点、峰值、谷值和交叉点优先于逐年报数。'],
    template: ['Introduction · 改写图题、时间和单位', 'Overview · 总趋势 + 最高/最低或交叉', 'Details 1 · 第一组趋势 + 关键数据', 'Details 2 · 第二组趋势 + 有意义比较'],
    sentences: ['X rose steadily from … to …', 'After peaking at …, the figure fell back to …', 'The two series followed contrasting trajectories.', 'By the end of the period, X had overtaken Y.'],
    vocab: ['trajectory 走势', 'plateau at 稳定在', 'fluctuate within 在…间波动', 'a threefold increase 增至三倍'],
    expressions: ['The most striking feature is the reversal in …', 'Growth was initially modest before accelerating.', 'The gap narrowed progressively over the period.'],
  },
  {
    id: 'bar', name: '柱状图', en: 'Bar Chart', short: '做排序、倍数与分组', accent: '#a9e6d1',
    tips: ['先按类别还是年份决定分组方式，避免逐柱流水账。', 'Overview 指出最高、最低及是否存在统一模式。', '用 roughly twice、marginally higher 等比较语言代替重复数字。', '若类别很多，合并相近值并突出异常值。'],
    template: ['Introduction · 改写对象、地点与单位', 'Overview · 极值 + 总体差异', 'Details 1 · 高值组 / 第一时期', 'Details 2 · 低值组 / 第二时期 + 比较'],
    sentences: ['X recorded the highest figure, at …', 'The value for A was roughly double that for B.', 'Figures were broadly comparable in …', 'By contrast, only a small minority …'],
    vocab: ['rank first 位居首位', 'outstrip 超过', 'comparable figures 相近数值', 'a narrow margin 小幅差距'],
    expressions: ['One category stands out clearly from the rest.', 'The pattern was broadly consistent across …', 'The disparity was most pronounced in …'],
  },
  {
    id: 'pie', name: '饼图', en: 'Pie Chart', short: '看占比、组合与结构变化', accent: '#d9ff67',
    tips: ['把小项合并成有意义的组，避免每个扇区写一句。', '两张饼图先判断结构是否更集中或更均衡。', '优先写最大份额、最小份额和变化最大的类别。', 'percentage points 用于份额差，percent 用于相对变化。'],
    template: ['Introduction · 改写主题、地区与年份', 'Overview · 主导类别 + 结构变化', 'Details 1 · 大份额组及组合占比', 'Details 2 · 小份额组与增减幅度'],
    sentences: ['X accounted for the largest share, at …', 'Together, A and B made up nearly two thirds of …', 'The proportion of X increased by 10 percentage points.', 'The distribution became noticeably more balanced.'],
    vocab: ['account for 占比', 'constitute 构成', 'combined share 合计份额', 'percentage point 百分点'],
    expressions: ['The composition shifted away from … towards …', 'No other category represented more than …', 'The two sources dominated the overall mix.'],
  },
  {
    id: 'table', name: '表格', en: 'Table', short: '横纵筛选，建立比较', accent: '#ffd36b',
    tips: ['先横看国家/类别，再纵看指标，找出能讲故事的组合。', '不要复制每个单元格；每段选择二到四个关键数字。', '单位不同的列不能直接比较大小，要比较排名或模式。', 'Overview 可写一个对象“多项领先”或某指标差距最大。'],
    template: ['Introduction · 说明表格比较对象与指标', 'Overview · 整体领先者 + 显著模式', 'Details 1 · 按对象比较一组指标', 'Details 2 · 按指标比较其余对象'],
    sentences: ['X led the table in terms of …', 'A similar ranking can be seen for …', 'The corresponding figure for Y was …', 'There was little variation in …'],
    vocab: ['corresponding figure 对应数据', 'indicator 指标', 'rank 排名', 'variation 差异'],
    expressions: ['Performance was uneven across the indicators.', 'The lead was substantial rather than marginal.', 'This was the only measure on which X did not rank first.'],
  },
  {
    id: 'process-map', name: '流程 / 地图', en: 'Process & Map', short: '流程讲阶段，地图讲变化', accent: '#cbbcff',
    tips: ['流程图先数阶段、找起终点，并判断是线性还是循环。', '地图题先定方位与基准物，再按功能区或时间分段。', '流程多用被动语态；地图多用被替换、扩建、改造等变化动词。', 'Overview 说明阶段数量 / 地图总体从何种功能转向何种功能。'],
    template: ['Introduction · 改写制造过程或地点变化', 'Overview · 起终点 + 阶段数 / 总体改造方向', 'Details 1 · 前半流程 / 北部或核心区变化', 'Details 2 · 后半流程 / 南部或外围变化'],
    sentences: ['The process begins with … and culminates in …', 'At the next stage, the material is …', 'The former X was converted into Y.', 'The site became more accessible and recreational.'],
    vocab: ['undergo 经历', 'be fed into 被送入', 'be converted into 被改建为', 'remain intact 保持不变'],
    expressions: ['Overall, this is a linear, seven-stage process.', 'The area underwent substantial redevelopment.', 'The central feature was retained while the surroundings were modernised.'],
  },
];

const t1 = (typeId: string, id: string, title: string, prompt: string, practice: string, overview: string, detail: string, facts: Fact[], keywords: string[]): Task1Topic => ({ typeId, id, title, prompt, practice, overview, detail, facts, keywords });
const f = (label: string, value: number, unit = ''): Fact => ({ label, value, unit });

export const task1Topics: Task1Topic[] = [
  t1('line','l1','全球电话订阅量', 'The line graph shows global landline and mobile phone subscriptions from 1995 to 2004.', 'The graph shows mobile phone subscriptions in four countries between 2000 and 2010.', '移动订阅从低位急升并在末期超过固定电话；固定电话只缓慢增长。', '移动电话增长最集中在 1999 年后，而固定线路在后半段接近平台期。', [f('1995 移动',9,'/百人'),f('2004 移动',67,'/百人'),f('1995 固话',40,'/百人'),f('2004 固话',49,'/百人')], ['surge','overtake','subscription']),
  t1('line','l2','地区石油消费', 'The graph compares oil consumption in the US, China, the Middle East and Europe from 2000 with projections to 2030.', 'The graph shows energy demand in five regions between 1990 and 2040.', '美国始终最高但趋于下降；中国和中东上升，其中中国增幅最大。', '欧洲缓慢下滑，增长地区与成熟经济体形成鲜明对比。', [f('美国 2000',20,'mb/d'),f('美国 2030',17,'mb/d'),f('中国 2000',5,'mb/d'),f('中国 2030',15,'mb/d')], ['projected','decline','consumption']),
  t1('line','l3','英国铁路乘客', 'The graph shows the number of passengers travelling by rail in Great Britain from 1950 to 2004.', 'The graph shows journeys made by three forms of public transport from 1970 to 2010.', '铁路客流先下降后显著回升，末期达到全段最高。', '最低点出现在八十年代初，随后二十多年持续增长。', [f('1950',1000,'m'),f('1982',650,'m'),f('1995',900,'m'),f('2004',1250,'m')], ['bottom out','recover','ridership']),
  t1('line','l4','三类博物馆访客', 'The graph shows visitors to three types of museums in a city between 2000 and 2020.', 'The graph compares visitors to four attractions over a 20-year period.', '科学馆增长最快并最终领先；历史馆温和下降，艺术馆相对稳定。', '三条线在中期接近，但结尾形成明显分化。', [f('科学馆 2000',0.8,'m'),f('科学馆 2020',2.4,'m'),f('历史馆 2020',1.1,'m'),f('艺术馆 2020',1.5,'m')], ['attendance','diverge','remain stable']),
  t1('line','l5','中美出生率', 'The graph compares birth rates in China and the USA from 1920 to 2000.', 'The graph shows birth and death rates in one country from 1900 to 2000.', '两国出生率都大幅波动并长期下降，美国多数年份高于中国。', '中国在五十年代出现更尖锐的峰谷，之后两者差距收窄。', [f('中国峰值',20,'%'),f('中国谷值',5,'%'),f('美国峰值',15,'%'),f('2000 两国约',7,'%')], ['birth rate','fluctuation','converge']),
  t1('line','l6','三家公司废物产量', 'The graph shows waste produced by three companies from 2000 to 2015.', 'The graph compares industrial waste in four sectors over two decades.', 'A、B 公司废物减少，而 C 持续增加并在最后成为最大来源。', 'A 的降幅最大；B 在初期小升后转为下降。', [f('A 2000',12,'t'),f('A 2015',8,'t'),f('B 2015',3,'t'),f('C 2015',10,'t')], ['waste output','reverse','largest producer']),
  t1('line','l7','老年人口比例', 'The graph shows the proportion of people aged 65 and over in the USA, Sweden and Japan from 1940 to 2040.', 'The graph shows the percentage of elderly people in four countries from 1960 to 2050.', '三国老年人口均上升；日本早期最低但预计在末期跃居首位。', '美国和瑞典增长较平稳，日本则在 2030 年后快速上扬。', [f('美国 2040',23,'%'),f('瑞典 2040',25,'%'),f('日本 2000',5,'%'),f('日本 2040',27,'%')], ['ageing','projection','sharp upswing']),
  t1('line','l8','酸雨排放', 'The graph shows emissions of acid-rain pollutants from transport, electricity, industry and households in the UK from 1990 to 2007.', 'The graph shows carbon emissions from four sectors between 1990 and 2020.', '总排放明显下降，电力行业的降幅远大于其他部门。', '交通是唯一略有上升的来源，并在末期接近工业。', [f('电力 1990',3.3,'mt'),f('电力 2007',0.5,'mt'),f('工业 2007',0.6,'mt'),f('交通 2007',0.7,'mt')], ['emissions','plummet','sector']),
  t1('line','l9','旅游咨询方式', 'The graph shows enquiries received by a tourist information office by telephone, letter/email and in person over six months.', 'The graph shows customer enquiries through three channels over one year.', '当面咨询增长最明显并成为主要渠道，信件/邮件持续下降。', '电话咨询先稳定后增长，最终位居第二。', [f('当面 1月',400),f('当面 6月',1900),f('电话 6月',1600),f('信件 6月',400)], ['enquiry','in person','channel']),
  t1('line','l10','澳洲城乡失业率', 'The graph shows unemployment rates in rural and urban Australia during 2012.', 'The graph compares rural and urban employment rates over four quarters.', '乡村失业率整体下降，城市失业率波动上升，两者在年末接近。', '年初差距最大；城市线在中间季度出现两次明显波动。', [f('乡村 Q1',6.5,'%'),f('乡村 Q4',5,'%'),f('城市 Q1',2.5,'%'),f('城市 Q4',5,'%')], ['unemployment','rural','converge']),

  t1('bar','b1','英法家庭支出', 'The bar chart compares household spending on five consumer goods in the UK and France in 2010.', 'The chart compares family spending in Germany and Italy across six categories.', '英国总支出较高并在汽车上领先，法国只有电脑和香水略高。', '两国都把最多资金用于汽车，摄影器材的两国差距最大。', [f('英国汽车',450,'£k'),f('法国汽车',400,'£k'),f('英国相机',350,'£k'),f('法国相机',150,'£k')], ['expenditure','consumer goods','outspend']),
  t1('bar','b2','男女体育参与', 'The chart shows male and female participation in six sports in one country.', 'The chart compares participation in five activities by age group.', '男性在足球和篮球占优，女性在瑜伽和游泳人数更多。', '跑步的性别差距最小，而足球差距最明显。', [f('男足',52,'%'),f('女足',18,'%'),f('男瑜伽',12,'%'),f('女瑜伽',45,'%')], ['participation','gender gap','popular']),
  t1('bar','b3','可再生电力生产', 'The chart compares electricity generated from renewable sources in four countries in 1990 and 2010.', 'The chart shows electricity production by source in five countries.', '四国可再生发电均增加，其中德国增幅最大，挪威始终最高。', '英国仍处最低组，但二十年间接近翻倍。', [f('挪威 2010',95,'%'),f('德国 1990',15,'%'),f('德国 2010',45,'%'),f('英国 2010',18,'%')], ['renewable','generation','nearly double']),
  t1('bar','b4','大学学科毕业生', 'The chart compares male and female graduates in six subjects at a UK university.', 'The chart shows graduates in seven subjects by gender in one year.', '女性在人文和教育占多数，男性在工程和计算机明显更多。', '商业最均衡，工程的性别差距最大。', [f('男工程',80,'%'),f('女工程',20,'%'),f('男教育',28,'%'),f('女教育',72,'%')], ['graduates','discipline','disparity']),
  t1('bar','b5','澳洲城市饮品习惯', 'The chart shows coffee and tea buying and drinking habits in five Australian cities.', 'The chart compares three café habits in six cities.', '过去四周去咖啡馆在多数城市最普遍，购买速溶咖啡通常高于现磨咖啡。', '墨尔本和霍巴特的咖啡馆比例最高，阿德莱德最低。', [f('墨尔本咖啡馆',64,'%'),f('霍巴特咖啡馆',63,'%'),f('阿德莱德咖啡馆',49,'%'),f('布里斯班速溶',53,'%')], ['café','instant coffee','habit']),
  t1('bar','b6','亚洲城市汽车拥有量', 'The chart shows the number of cars per 1,000 people in five Asian cities in 2000 and 2020.', 'The chart compares vehicle ownership in six cities across two years.', '所有城市汽车拥有量都上升，首尔始终最高，上海增幅最大。', '低基数城市增长更快，因此城市间差距有所缩小。', [f('首尔 2020',520,'/千人'),f('上海 2000',60,'/千人'),f('上海 2020',310,'/千人'),f('河内 2020',120,'/千人')], ['car ownership','per capita','gap']),
  t1('bar','b7','不同年龄休闲活动', 'The chart compares leisure activities among three age groups in Canada.', 'The chart shows preferred free-time activities among four age groups.', '年轻组偏好游戏和社交，老年组更多阅读与园艺。', '看电视在各年龄层都较普遍，是差异最小的活动。', [f('16–24 游戏',68,'%'),f('55+ 游戏',12,'%'),f('16–24 园艺',15,'%'),f('55+ 园艺',61,'%')], ['age group','preference','leisure']),
  t1('bar','b8','澳洲出口收入', 'The chart shows export earnings in five product categories in 2015 and 2016.', 'The chart compares the value of six exports over two consecutive years.', '除宝石首饰外，其余类别收入均增长；石油产品收入最高。', '纺织品增幅最大，但绝对金额仍最低。', [f('石油 2016',63,'bn'),f('工程 2016',62,'bn'),f('纺织增幅',15,'%'),f('珠宝增幅',-5,'%')], ['export earnings','category','percentage change']),
  t1('bar','b9','三座城市交通方式', 'The chart compares commuting modes in London, New York and Tokyo.', 'The chart shows transport used by workers in four cities.', '东京公共交通占比最高，纽约驾车最普遍，伦敦分布较均衡。', '步行和骑行在三市都不是主导方式。', [f('东京公共交通',65,'%'),f('纽约驾车',58,'%'),f('伦敦公共交通',45,'%'),f('伦敦骑行',8,'%')], ['commute','mode share','dominant']),
  t1('bar','b10','人口年龄结构', 'The chart shows the population of New Zealand by age group in 2011 and projections for 2061.', 'The chart compares age structures in two countries now and in 2050.', '儿童和劳动年龄人口占比预计下降，65 岁以上人口显著增加。', '老年组将超过儿童组，反映整体人口老龄化。', [f('0–14 2011',20,'%'),f('0–14 2061',16,'%'),f('65+ 2011',14,'%'),f('65+ 2061',27,'%')], ['age structure','projection','proportion']),

  t1('pie','p1','四国电力来源', 'The pie charts show electricity production by energy source in four countries in 2008.', 'The charts compare electricity sources in three countries in 1995 and 2015.', '不同国家能源结构差异巨大：一国以煤为主，另一国几乎依赖水电。', '核电在两个国家占重要份额，风光等其他来源当时仍较小。', [f('A国煤',76,'%'),f('B国水电',86,'%'),f('C国核电',49,'%'),f('D国燃气',42,'%')], ['energy mix','account for','dominant']),
  t1('pie','p2','六地区水资源用途', 'The charts show water used for agriculture, industry and households in six world regions.', 'The charts compare water use in four regions by sector.', '农业在非洲、亚洲和南美占主导，工业在欧洲和北美份额最大。', '家庭用水在所有地区都不是最大用途。', [f('中亚农业',88,'%'),f('非洲农业',84,'%'),f('欧洲工业',53,'%'),f('北美工业',48,'%')], ['water use','agriculture','industrial']),
  t1('pie','p3','世界人口与资源', 'The charts compare world population, spending and resource consumption.', 'The charts show global wealth and population shares by region.', '亚洲拥有最多人口，而北美和欧洲消费了不成比例的资源。', '全球支出以食物为最大项，教育所占份额最小。', [f('亚洲人口',57,'%'),f('欧美资源',60,'%'),f('食物支出',24,'%'),f('教育支出',6,'%')], ['resource consumption','disproportionate','global share']),
  t1('pie','p4','两国家庭开支', 'The charts compare average household expenditure in Japan and Malaysia in 2010.', 'The charts show family budgets in two countries in 2000 and 2020.', '马来西亚住房占比最大，日本则把最多资金用于其他商品与服务。', '两国交通和食品份额相近，医疗都是最小项。', [f('马来西亚住房',34,'%'),f('日本其他',29,'%'),f('马来西亚食品',27,'%'),f('日本医疗',6,'%')], ['household budget','housing','share']),
  t1('pie','p5','城市通勤方式变化', 'The charts show how people travelled to work in a city in 1990 and 2020.', 'The charts compare transport modes before and after a new metro opened.', '驾车份额下降，公共交通和骑行合计明显上升。', '步行变化不大，交通结构整体更均衡。', [f('驾车 1990',55,'%'),f('驾车 2020',38,'%'),f('公交轨道 2020',35,'%'),f('骑行 2020',12,'%')], ['modal shift','commuting','composition']),
  t1('pie','p6','学生第二语言', 'The charts show second languages spoken by students at an Australian school in 2000 and 2010.', 'The charts compare languages spoken at a school across two years.', '只说英语的学生比例下降，中文和阿拉伯语份额增长。', '越南语和其他语言相对稳定，校园语言构成更多元。', [f('仅英语 2000',45,'%'),f('仅英语 2010',32,'%'),f('中文 2010',18,'%'),f('阿拉伯语 2010',14,'%')], ['language diversity','proportion','multilingual']),
  t1('pie','p7','土地退化原因', 'The charts show causes of agricultural land degradation in North America, Europe and Oceania.', 'The charts compare reasons for land damage in three regions.', '欧洲总体退化最严重，主因是砍伐；大洋洲主要受过度放牧影响。', '北美受影响最小，过度耕作是其最大原因。', [f('欧洲总退化',23,'%'),f('大洋洲总退化',13,'%'),f('北美总退化',5,'%'),f('大洋洲过牧',11,'%')], ['land degradation','deforestation','overgrazing']),
  t1('pie','p8','澳法发电结构', 'The charts compare electricity generation in Australia and France in 1980 and 2000.', 'The charts show energy production in two countries over two years.', '澳大利亚越来越依赖煤，法国则从较均衡结构转向核电主导。', '两国水电份额变化有限，法国石油和燃气明显下降。', [f('澳煤 2000',130,'units'),f('法核 2000',126,'units'),f('澳核 2000',0,'units'),f('法煤 2000',25,'units')], ['electricity generation','nuclear','shift']),
  t1('pie','p9','家庭食物预算', 'The charts show how a household food budget was divided in 2005 and 2025.', 'The charts compare food spending categories in two households.', '外出就餐和即食食品份额增加，新鲜肉类和蔬菜占比下降。', '家庭的饮食支出明显从食材转向便利服务。', [f('外食 2005',18,'%'),f('外食 2025',34,'%'),f('肉类 2025',20,'%'),f('蔬果 2025',17,'%')], ['food budget','convenience','composition']),
  t1('pie','p10','游客目的地', 'The charts show destinations chosen by international tourists in 2000 and 2020.', 'The charts compare reasons for travel in two years.', '海滨仍是最大类别但份额下降，城市和生态目的地增长。', '山区变化最小，选择整体比二十年前分散。', [f('海滨 2000',46,'%'),f('海滨 2020',34,'%'),f('城市 2020',29,'%'),f('生态 2020',18,'%')], ['destination','tourism','distribution']),

  t1('table','tb1','地下铁路系统', 'The table compares underground railway systems in six cities by opening date, route length and annual passengers.', 'The table gives information about metro systems in five Asian cities.', '伦敦系统最早且线路最长，东京年客流最高；洛杉矶最新且最短。', '系统年龄与客流或长度并不完全对应。', [f('伦敦线路',394,'km'),f('东京客流',1927,'m'),f('巴黎线路',199,'km'),f('洛杉矶线路',28,'km')], ['underground','route length','passengers']),
  t1('table','tb2','四国国际学生', 'The table shows international student enrolment in four countries in 2010 and 2020 and the percentage change.', 'The table compares overseas students in five universities across two years.', '四国人数都增长，加拿大增速最快，美国绝对人数始终最多。', '英国增幅较温和，澳大利亚相对本国人口的国际学生比例最高。', [f('美国 2020',1075,'k'),f('加拿大增幅',119,'%'),f('英国增幅',35,'%'),f('澳洲 2020',463,'k')], ['enrolment','percentage change','international']),
  t1('table','tb3','世界大城市人口', 'The table shows the populations of the five largest cities in 1950, 2000 and projected 2030.', 'The table compares populations of six capital cities across three years.', '排名从欧美城市转向亚洲和拉美城市，且最大城市规模大幅增长。', '纽约在 1950 年领先，但到 2030 年预计被东京、德里等远超。', [f('纽约 1950',12,'m'),f('东京 2000',27,'m'),f('德里 2030',36,'m'),f('上海 2030',30,'m')], ['urban population','ranking','projected']),
  t1('table','tb4','手机功能使用', 'The table shows percentages of mobile phone users using six features in 2006, 2008 and 2010.', 'The table compares how smartphone functions were used across four years.', '打电话始终接近普及；上网和拍照增长最快，新功能在后期迅速扩散。', '短信保持第二普遍，音乐功能使用率相对最低。', [f('通话 2010',99,'%'),f('短信 2010',79,'%'),f('上网 2006',41,'%'),f('上网 2010',73,'%')], ['feature','usage rate','increase']),
  t1('table','tb5','四国社会经济指标', 'The table compares annual income, life expectancy and daily calorie supply in four countries.', 'The table gives four quality-of-life indicators for five countries.', '收入较高的国家通常寿命和热量供应也更高，但指标之间并非完全线性。', '加拿大多项领先，秘鲁与扎伊尔在所有指标上明显较低。', [f('加拿大收入',11100,'$'),f('加拿大寿命',76,'年'),f('秘鲁收入',160,'$'),f('扎伊尔寿命',47,'年')], ['indicator','life expectancy','correlation']),
  t1('table','tb6','中学出勤率', 'The table shows secondary school attendance in four countries by gender in 2000 and 2020.', 'The table compares school completion rates for boys and girls.', '所有国家出勤率上升，女生进步更明显，性别差距普遍缩小。', '最高收入国家变化有限，最低起点国家提升最大。', [f('A国 2020',96,'%'),f('B国女生增幅',28,'pp'),f('C国男生 2000',54,'%'),f('C国男生 2020',78,'%')], ['attendance','gender gap','percentage point']),
  t1('table','tb7','城市气候数据', 'The table gives average monthly temperature, rainfall and sunshine in three cities.', 'The table compares climate data for four tourist destinations.', '悉尼温度最稳定，伦敦降雨分布均匀，迪拜夏季最热且少雨。', '日照与降雨大体呈反向关系，但伦敦的季节差异较温和。', [f('迪拜夏温',41,'°C'),f('悉尼年雨',1215,'mm'),f('伦敦日照',1633,'h'),f('迪拜年雨',95,'mm')], ['climate','rainfall','seasonal']),
  t1('table','tb8','电影院观众', 'The table shows cinema attendance by age group in 1990, 2000 and 2010.', 'The table compares theatre visits among four age groups over time.', '所有年龄组观影率上升，最年轻组始终最高，老年组相对增长最快。', '年龄差距仍存在，但到 2010 年明显缩小。', [f('15–24 2010',85,'%'),f('55+ 1990',18,'%'),f('55+ 2010',52,'%'),f('全体 2000',58,'%')], ['attendance','age group','relative growth']),
  t1('table','tb9','各国工作时长', 'The table compares average weekly working hours and paid leave in five countries.', 'The table shows annual working hours in six economies.', '工时最长的国家通常带薪假最少，但生产率并未随工时同步上升。', '荷兰工时最短、假期较多，日本工时最长。', [f('日本',44,'h'),f('荷兰',30,'h'),f('法国假期',30,'天'),f('美国假期',12,'天')], ['working hours','paid leave','average']),
  t1('table','tb10','三家医院服务', 'The table compares three hospitals by waiting time, patient satisfaction and annual cost.', 'The table gives performance data for four clinics.', 'B 医院等待最短且满意度最高，但运营成本也最大。', 'A 成本最低但等待最长，C 在多数指标居中。', [f('A 等待',55,'min'),f('B 等待',18,'min'),f('B 满意度',91,'%'),f('C 成本',48,'m')], ['waiting time','satisfaction','operating cost']),

  t1('process-map','pm1','水泥与混凝土制造', 'The diagrams show how cement is produced and how it is then used to make concrete.', 'The diagram shows the manufacture of ceramic pots.', '水泥生产是多阶段热处理流程；混凝土则把四种材料按比例直接混合。', '石灰石和黏土先粉碎、混合、加热，最后研磨并装袋。', [f('石灰石',50,'%'),f('砂',25,'%'),f('水泥',15,'%'),f('水',10,'%')], ['crusher','rotating heater','mixture']),
  t1('process-map','pm2','玻璃瓶回收', 'The diagram shows the process used to recycle glass bottles.', 'The diagram illustrates how aluminium cans are recycled.', '这是一个循环流程，从收集旧瓶开始，以新瓶重新进入商店结束。', '玻璃经过分类、清洗、粉碎和熔化，再与新原料一起塑形。', [f('收集',1,'阶段'),f('清洗分类',2,'阶段'),f('熔化塑形',3,'阶段'),f('再配送',4,'阶段')], ['recycling','cullet','mould']),
  t1('process-map','pm3','鲑鱼生命周期', 'The diagram shows the life cycle of a salmon from egg to mature fish.', 'The diagram shows the life cycle of a frog.', '鲑鱼经历三种主要生长阶段并在不同水域迁移，完整周期约十年。', '鱼卵在上游孵化，幼鱼转移到下游，成鱼在海洋成长后逆流繁殖。', [f('鱼卵',5,'月'),f('fry',4,'年'),f('smolt',5,'年'),f('成鱼',70,'cm')], ['life cycle','upstream','mature']),
  t1('process-map','pm4','雨水净化成饮用水', 'The diagram shows how rainwater is collected and treated for drinking in an Australian town.', 'The diagram illustrates domestic grey-water recycling.', '屋顶雨水先集中、过滤和化学处理，最后回流居民家中。', '整个系统由收集与处理两部分组成，供水形成社区级闭环。', [f('屋顶收集',1),f('过滤',2),f('储水',3),f('处理供水',4)], ['rainwater','filtration','treatment']),
  t1('process-map','pm5','砖块制造', 'The diagram shows the process by which bricks are manufactured for the building industry.', 'The diagram shows how paper is made from timber.', '制砖是从挖掘黏土到运输成品的线性七阶段流程。', '砖坯经成形、干燥、两级窑烧和冷却后包装。', [f('挖掘筛选',1),f('成形',2),f('干燥烧制',3),f('冷却运输',4)], ['kiln','mould','cooling chamber']),
  t1('process-map','pm6','海滨村庄改造', 'The maps show a coastal village in 1995 and after redevelopment as a tourist resort.', 'The maps show a fishing village before and after tourism development.', '村庄从渔业为主转向旅游功能，住宿和娱乐设施明显增加。', '港口被码头和水上活动区取代，农地改为酒店，但主路保留。', [f('住宅',18,'栋'),f('酒店',3,'座'),f('码头',1),f('停车场',2)], ['redevelopment','coastal','convert']),
  t1('process-map','pm7','公共公园变化', 'The maps show changes made to a public park between 1980 and the present.', 'The maps compare a city park in 1920 and today.', '公园变得更适合休闲与家庭活动，出入口和路径增加。', '部分花园改成游乐场与咖啡区，中央水景保留并扩建。', [f('入口',3),f('游乐区',1),f('咖啡馆',1),f('保留水景',1)], ['landscaping','playground','retain']),
  t1('process-map','pm8','图书馆平面改造', 'The plans show a public library twenty years ago and how it looks today.', 'The plans show changes to a university library floor.', '图书馆从藏书导向转为多功能社区空间，数字、自助与活动区域增加。', '报刊区变成计算机区，旧咨询台缩小，儿童角和咖啡点扩展。', [f('电脑区',12,'台'),f('自助机',4,'台'),f('活动室',2,'间'),f('咖啡点',1)], ['floor plan','self-service','multipurpose']),
  t1('process-map','pm9','无人岛度假区', 'The maps show an island before and after the construction of tourist facilities.', 'The maps show an undeveloped island transformed for visitors.', '岛屿在保留海滩和树木的同时新增住宿、餐厅、码头与步道。', '建筑集中在中西部，东部自然区基本未变。', [f('住宿屋',15,'间'),f('餐厅',1),f('接待处',1),f('码头',1)], ['accommodation','footpath','remain intact']),
  t1('process-map','pm10','市中心交通规划', 'The maps show a town centre now and a proposed traffic plan.', 'The maps show a city centre before and after pedestrianisation.', '方案将核心道路步行化，并把车流引向外围环路和停车换乘点。', '商店区更连贯，公交站集中迁移，河桥与主要建筑保留。', [f('步行街',2),f('环路',1),f('停车场',3),f('公交枢纽',1)], ['pedestrianise','ring road','traffic plan']),
];

export const sourceLinks = [
  { label: 'IELTS 官方写作考试格式', href: 'https://ielts.org/take-a-test/test-types/ielts-academic-test/ielts-academic-format-writing' },
  { label: 'IELTS 官方样题与考官评语', href: 'https://ielts.org/cdn/computer-delivered-sample-tests-academic-writing/ielts-academic-writing-example-responses-to-parts-1-and-2-with-band-scores-and-examiner-comments.pdf' },
  { label: '2026 Task 1 近期考场回忆', href: 'https://www.ieltsupdatesandrecentexams.com/2026/06/ielts-writing-recent-actual-test.html' },
  { label: '近年 Task 1 图表与地图题库', href: 'https://howtodoielts.com/ielts-writing-task-1/' },
  { label: '近期 Task 2 考场回忆汇总', href: 'https://ieltsmaterial.com/recent-ielts-topics-in-writing-task-2/' },
  { label: '近期 Academic Writing 考场回忆', href: 'https://ieltsactualtests.com/writing' },
];
