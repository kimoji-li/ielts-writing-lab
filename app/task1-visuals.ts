export type Series = { name: string; values: number[]; color?: string };
export type LineSpec = { kind: 'line'; title: string; labels: string[]; unit: string; series: Series[] };
export type BarSpec = { kind: 'bar'; title: string; categories: string[]; unit: string; layout: 'grouped' | 'horizontal' | 'stacked'; series: Series[] };
export type PieSegment = { name: string; value: number; color?: string };
export type PieSpec = { kind: 'pie'; title: string; unit: string; pies: { title: string; segments: PieSegment[] }[] };
export type TableSpec = { kind: 'table'; title: string; subtitle?: string; columns: string[]; rows: (string | number)[][]; unit?: string };
export type ProcessStage = { label: string; note?: string; icon?: string };
export type ProcessSpec = { kind: 'process'; title: string; variant: 'linear' | 'cycle' | 'branched' | 'system'; stages: ProcessStage[]; branch?: ProcessStage[] };
export type MapFeature = { label: string; type: 'building' | 'green' | 'water' | 'road' | 'path' | 'sand' | 'parking'; x: number; y: number; w: number; h: number; rotate?: number };
export type MapSpec = { kind: 'map'; title: string; panels: { title: string; features: MapFeature[] }[] };
export type VisualSpec = LineSpec | BarSpec | PieSpec | TableSpec | ProcessSpec | MapSpec;

const palette = ['#ff745c','#d9ff67','#64cbb0','#9b88e8','#ffd36b','#6ca6d9'];
const s = (name: string, values: number[], color?: string): Series => ({ name, values, color });
const line = (title: string, labels: string[], unit: string, series: Series[]): LineSpec => ({ kind:'line', title, labels, unit, series });
const bar = (title: string, categories: string[], unit: string, layout: BarSpec['layout'], series: Series[]): BarSpec => ({ kind:'bar', title, categories, unit, layout, series });
const seg = (name: string, value: number, color?: string): PieSegment => ({ name, value, color });
const pie = (title: string, unit: string, pies: PieSpec['pies']): PieSpec => ({ kind:'pie', title, unit, pies });
const table = (title: string, columns: string[], rows: (string|number)[][], unit?: string, subtitle?: string): TableSpec => ({ kind:'table', title, columns, rows, unit, subtitle });
const stage = (label: string, note?: string, icon?: string): ProcessStage => ({ label, note, icon });
const process = (title: string, variant: ProcessSpec['variant'], stages: ProcessStage[], branch?: ProcessStage[]): ProcessSpec => ({ kind:'process', title, variant, stages, branch });
const feature = (label: string, type: MapFeature['type'], x: number, y: number, w: number, h: number, rotate?: number): MapFeature => ({ label, type, x, y, w, h, rotate });
const map = (title: string, panels: MapSpec['panels']): MapSpec => ({ kind:'map', title, panels });

export const task1Visuals: Record<string,VisualSpec> = {
  l1: line('Global telephone subscriptions, 1995–2004',['1995','1997','1999','2001','2003','2004'],'subscriptions per 100 people',[
    s('Mobile',[9,16,29,46,61,67],palette[0]),s('Fixed line',[40,43,46,48,49,49],palette[2])
  ]),
  l2: line('Daily oil consumption by region',['2000','2005','2010','2015','2020','2025*','2030*'],'million barrels per day',[
    s('USA',[20,21,20,19,18,17.5,17],palette[0]),s('China',[5,7,9,11,12.5,14,15],palette[2]),s('Europe',[15,15,14,13,12,11,10],palette[3]),s('Middle East',[4,5,6,7,8.5,9.5,10.5],palette[4])
  ]),
  l3: line('Rail passenger journeys in Great Britain',['1950','1960','1970','1980','1990','2000','2004'],'million journeys',[
    s('Passengers',[1000,920,780,650,760,1080,1250],palette[0])
  ]),
  l4: line('Visitors to three city museums',['2000','2005','2010','2015','2020'],'millions',[
    s('Science',[0.8,1.0,1.35,1.85,2.4],palette[0]),s('Art',[1.4,1.48,1.55,1.46,1.5],palette[2]),s('History',[1.8,1.65,1.48,1.3,1.1],palette[3])
  ]),
  l5: line('Birth rates in China and the USA',['1920','1930','1940','1950','1960','1970','1980','1990','2000'],'births per 1,000 people',[
    s('China',[10,12,5,20,14,10,9,8,7],palette[0]),s('USA',[11,13,10,15,13,11,9,8,7],palette[2])
  ]),
  l6: line('Waste produced by three companies',['2000','2005','2010','2015'],'tonnes',[
    s('Company A',[12,11,9,8],palette[0]),s('Company B',[8,10,7,3],palette[3]),s('Company C',[4,6,8,10],palette[2])
  ]),
  l7: line('Population aged 65 and over',['1940','1960','1980','2000','2020','2040*'],'%',[
    s('USA',[9,10,15,14,18,23],palette[0]),s('Sweden',[7,9,13,15,20,25],palette[2]),s('Japan',[5,4,3,5,10,27],palette[3])
  ]),
  l8: line('UK acid-rain emissions by source',['1990','1994','1998','2002','2007'],'million tonnes',[
    s('Electricity',[3.3,2.6,1.6,0.8,0.5],palette[0]),s('Industry',[2.0,1.7,1.2,0.8,0.6],palette[3]),s('Transport',[0.7,0.75,0.8,0.78,0.7],palette[4]),s('Households',[0.6,0.5,0.4,0.25,0.2],palette[2])
  ]),
  l9: line('Enquiries received by a tourist office',['Jan','Feb','Mar','Apr','May','Jun'],'enquiries',[
    s('In person',[400,600,800,1200,1600,1900],palette[0]),s('Telephone',[900,800,1000,1000,1400,1600],palette[2]),s('Letter / email',[750,700,700,550,350,400],palette[3])
  ]),
  l10: line('Australian unemployment during 2012',['Q1','Q2','Q3','Q4'],'%',[
    s('Rural',[6.5,5.5,5.0,5.0],palette[0]),s('Urban',[2.5,4.0,3.0,5.0],palette[2])
  ]),

  b1: bar('Household spending in the UK and France',['Cars','Computers','Books','Perfume','Cameras'],'£ thousand','grouped',[
    s('UK',[450,350,400,150,350],palette[0]),s('France',[400,380,300,200,150],palette[2])
  ]),
  b2: bar('Participation in six sports',['Football','Basketball','Running','Swimming','Yoga','Cycling'],'%','horizontal',[
    s('Men',[52,43,38,31,12,35],palette[0]),s('Women',[18,25,36,47,45,28],palette[2])
  ]),
  b3: bar('Electricity generated from renewable sources',['Norway','Germany','Spain','United Kingdom'],'%','grouped',[
    s('1990',[88,15,28,10],palette[3]),s('2010',[95,45,52,18],palette[0])
  ]),
  b4: bar('Graduates by subject at a UK university',['Engineering','Computing','Business','Science','Humanities','Education'],'%','horizontal',[
    s('Men',[80,72,51,58,35,28],palette[0]),s('Women',[20,28,49,42,65,72],palette[2])
  ]),
  b5: bar('Coffee and tea habits in Australian cities',['Sydney','Melbourne','Brisbane','Adelaide','Hobart'],'%','grouped',[
    s('Fresh coffee',[44,43,34,35,38],palette[0]),s('Instant coffee',[46,48,53,50,54],palette[4]),s('Went to café',[61,64,55,49,63],palette[2])
  ]),
  b6: bar('Cars per 1,000 people in Asian cities',['Seoul','Tokyo','Shanghai','Bangkok','Hanoi'],'cars per 1,000','grouped',[
    s('2000',[390,360,60,130,28],palette[3]),s('2020',[520,465,310,280,120],palette[0])
  ]),
  b7: bar('Leisure activities by age group',['Gaming','Socialising','Television','Reading','Gardening'],'%','horizontal',[
    s('16–24',[68,72,64,35,15],palette[0]),s('25–54',[36,54,70,48,42],palette[2]),s('55+',[12,38,73,62,61],palette[3])
  ]),
  b8: bar('Australian export earnings',['Petroleum','Engineering','Gems','Agriculture','Textiles'],'AUD billion','grouped',[
    s('2015',[61,58,43,31,25],palette[3]),s('2016',[63,62,41,32,29],palette[0])
  ]),
  b9: bar('Commuting modes in three cities',['London','New York','Tokyo'],'%','stacked',[
    s('Car',[32,58,18],palette[0]),s('Public transport',[45,31,65],palette[2]),s('Walk',[15,8,12],palette[4]),s('Cycle',[8,3,5],palette[3])
  ]),
  b10: bar('New Zealand population by age',['0–14','15–39','40–64','65+'],'%','grouped',[
    s('2011',[20,34,32,14],palette[3]),s('2061 projection',[16,28,29,27],palette[0])
  ]),

  p1: pie('Electricity production by source in 2008','%',[
    {title:'Country A',segments:[seg('Coal',76),seg('Gas',12),seg('Hydro',7),seg('Nuclear',3),seg('Other',2)]},
    {title:'Country B',segments:[seg('Hydro',86),seg('Gas',7),seg('Coal',4),seg('Other',3)]},
    {title:'Country C',segments:[seg('Nuclear',49),seg('Coal',25),seg('Gas',18),seg('Hydro',8)]},
    {title:'Country D',segments:[seg('Gas',42),seg('Coal',34),seg('Nuclear',16),seg('Other',8)]},
  ]),
  p2: pie('Water use by sector in six regions','%',[
    {title:'North America',segments:[seg('Agriculture',39),seg('Industry',48),seg('Domestic',13)]},
    {title:'South America',segments:[seg('Agriculture',71),seg('Industry',10),seg('Domestic',19)]},
    {title:'Europe',segments:[seg('Agriculture',32),seg('Industry',53),seg('Domestic',15)]},
    {title:'Africa',segments:[seg('Agriculture',84),seg('Industry',7),seg('Domestic',9)]},
    {title:'Central Asia',segments:[seg('Agriculture',88),seg('Industry',5),seg('Domestic',7)]},
    {title:'SE Asia',segments:[seg('Agriculture',81),seg('Industry',12),seg('Domestic',7)]},
  ]),
  p3: pie('World population, spending and resource use','%',[
    {title:'Population by region',segments:[seg('Asia',57),seg('Europe',14),seg('Americas',14),seg('Africa',10),seg('Other',5)]},
    {title:'Global spending',segments:[seg('Food',24),seg('Transport',18),seg('Housing',12),seg('Clothing',6),seg('Other',40)]},
    {title:'Resource consumption',segments:[seg('USA & Europe',60),seg('Asia',24),seg('Africa',6),seg('Other',10)]},
  ]),
  p4: pie('Average household expenditure in 2010','%',[
    {title:'Japan',segments:[seg('Housing',21),seg('Food',24),seg('Transport',20),seg('Healthcare',6),seg('Other',29)]},
    {title:'Malaysia',segments:[seg('Housing',34),seg('Food',27),seg('Transport',15),seg('Healthcare',3),seg('Other',21)]},
  ]),
  p5: pie('How people travelled to work','%',[
    {title:'1990',segments:[seg('Car',55),seg('Bus / rail',25),seg('Walk',13),seg('Cycle',7)]},
    {title:'2020',segments:[seg('Car',38),seg('Bus / rail',35),seg('Walk',15),seg('Cycle',12)]},
  ]),
  p6: pie('Second languages spoken at an Australian school','%',[
    {title:'2000',segments:[seg('English only',45),seg('Chinese',10),seg('Arabic',8),seg('Vietnamese',14),seg('Other',23)]},
    {title:'2010',segments:[seg('English only',32),seg('Chinese',18),seg('Arabic',14),seg('Vietnamese',13),seg('Other',23)]},
  ]),
  p7: pie('Causes of agricultural land degradation','% of degraded land',[
    {title:'North America',segments:[seg('Over-cultivation',3.3),seg('Overgrazing',1.5),seg('Deforestation',0.2)]},
    {title:'Europe',segments:[seg('Deforestation',9.8),seg('Over-cultivation',7.7),seg('Overgrazing',5.5)]},
    {title:'Oceania',segments:[seg('Overgrazing',11.3),seg('Deforestation',1.7),seg('Over-cultivation',0)]},
  ]),
  p8: pie('Electricity generation in Australia and France','units',[
    {title:'Australia · 1980',segments:[seg('Coal',50),seg('Oil',10),seg('Gas',20),seg('Hydro',20)]},
    {title:'Australia · 2000',segments:[seg('Coal',130),seg('Oil',2),seg('Gas',2),seg('Hydro',36)]},
    {title:'France · 1980',segments:[seg('Coal',25),seg('Oil',20),seg('Gas',25),seg('Hydro',15),seg('Nuclear',15)]},
    {title:'France · 2000',segments:[seg('Coal',25),seg('Oil',25),seg('Gas',2),seg('Hydro',2),seg('Nuclear',126)]},
  ]),
  p9: pie('Division of a household food budget','%',[
    {title:'2005',segments:[seg('Dining out',18),seg('Convenience',12),seg('Meat',29),seg('Fruit & veg',24),seg('Other',17)]},
    {title:'2025',segments:[seg('Dining out',34),seg('Convenience',20),seg('Meat',20),seg('Fruit & veg',17),seg('Other',9)]},
  ]),
  p10: pie('International tourist destinations','%',[
    {title:'2000',segments:[seg('Beach',46),seg('City',21),seg('Mountains',18),seg('Eco',9),seg('Other',6)]},
    {title:'2020',segments:[seg('Beach',34),seg('City',29),seg('Mountains',16),seg('Eco',18),seg('Other',3)]},
  ]),

  tb1: table('Underground railway systems',['City','Opened','Route (km)','Passengers / year (m)'],[
    ['London',1863,394,775],['Paris',1900,199,1191],['Tokyo',1927,155,1927],['Washington DC',1976,126,144],['Kyoto',1981,11,45],['Los Angeles',2001,28,50]
  ]),
  tb2: table('International student enrolment',['Country','2010 (000s)','2020 (000s)','Change'],[
    ['United States',691,1075,'+56%'],['United Kingdom',405,547,'+35%'],['Australia',335,463,'+38%'],['Canada',178,388,'+119%']
  ],'students'),
  tb3: table('Population of the world’s largest cities',['City','1950','2000','2030 projection'],[
    ['New York',12.3,17.8,19.9],['Tokyo',11.3,26.4,28.2],['Delhi',1.4,15.7,36.1],['Shanghai',4.3,14.2,30.8],['São Paulo',2.3,18.0,23.8]
  ],'millions'),
  tb4: table('Mobile phone features used',['Feature','2006','2008','2010'],[
    ['Make calls','100%','100%','99%'],['Send texts','73%','75%','79%'],['Take photos','66%','71%','76%'],['Play games','17%','42%','41%'],['Play music','12%','18%','26%'],['Use internet','41%','57%','73%']
  ]),
  tb5: table('Social and economic indicators',['Country','Income / person ($)','Life expectancy','Calories / day'],[
    ['Canada',11100,76,3326],['Japan',15760,78,2846],['Peru',160,51,1927],['Zaire',130,47,1749]
  ],undefined,'Annual figures'),
  tb6: table('Secondary school attendance',['Country','Boys 2000','Girls 2000','Boys 2020','Girls 2020'],[
    ['A','94%','93%','97%','97%'],['B','72%','61%','89%','89%'],['C','54%','42%','78%','76%'],['D','68%','57%','84%','82%']
  ]),
  tb7: table('Climate indicators in three cities',['City','Jan temp','Jul temp','Rainfall / year','Sunshine / year'],[
    ['London','5°C','19°C','601 mm','1,633 h'],['Sydney','23°C','13°C','1,215 mm','2,640 h'],['Dubai','19°C','41°C','95 mm','3,570 h']
  ]),
  tb8: table('Cinema attendance by age group',['Age','1990','2000','2010'],[
    ['15–24','65%','76%','85%'],['25–34','52%','64%','77%'],['35–54','39%','55%','69%'],['55+','18%','34%','52%']
  ]),
  tb9: table('Working time and paid leave',['Country','Hours / week','Paid leave','Output / hour index'],[
    ['Japan',44,10,92],['United States',41,12,108],['United Kingdom',37,28,101],['France',35,30,106],['Netherlands',30,25,110]
  ]),
  tb10: table('Performance of three hospitals',['Hospital','Waiting time','Satisfaction','Annual cost'],[
    ['A','55 min','62%','$35m'],['B','18 min','91%','$61m'],['C','32 min','78%','$48m']
  ],undefined,'Latest reporting year'),

  pm1: process('How cement is produced and used to make concrete','branched',[
    stage('Limestone + clay','raw materials','◫'),stage('Crushing','fine powder','✦'),stage('Mixing','homogeneous blend','⇄'),stage('Rotating heater','high temperature','♨'),stage('Grinding','cement','◎'),stage('Bagging','finished product','▤')
  ],[stage('Cement · 15%'),stage('Water · 10%'),stage('Sand · 25%'),stage('Gravel · 50%'),stage('Concrete mixer','final concrete','⟳')]),
  pm2: process('The glass bottle recycling cycle','cycle',[
    stage('Used bottles','collection point','♲'),stage('Transport','to recycling plant','▰'),stage('Sort by colour','clear · green · brown','◉'),stage('Wash','remove residue','≈'),stage('Crush','glass cullet','✦'),stage('Melt','high-temperature furnace','♨'),stage('Mould','new containers','◫'),stage('Fill & deliver','back to shops','→')
  ]),
  pm3: process('Life cycle of a salmon','cycle',[
    stage('Eggs','upper river · 5–6 months','•'),stage('Fry','3–8 cm','≈'),stage('Lower river','about 4 years','↓'),stage('Smolt','12–15 cm','›'),stage('Open sea','about 5 years','≈'),stage('Adult salmon','70–76 cm','≫'),stage('Return upstream','spawn again','↑')
  ]),
  pm4: process('Rainwater collection and drinking-water treatment','system',[
    stage('House roofs','collect rainfall','⌂'),stage('Street drains','shared pipe','═'),stage('Water filter','remove solids','▥'),stage('Storage tank','hold filtered water','◉'),stage('Treatment tank','add chemicals','✦'),stage('Supply pipe','return to homes','↺')
  ]),
  pm5: process('Manufacturing bricks for the building industry','linear',[
    stage('Dig clay','mechanical digger','⌄'),stage('Metal grid','break large pieces','▦'),stage('Roller','fine clay','◎'),stage('Mould / wire cutter','shape bricks','▥'),stage('Drying oven','24–48 hours','☼'),stage('Kiln','200–1,300°C','♨'),stage('Cooling chamber','48–72 hours','❄'),stage('Package & deliver','finished bricks','▰')
  ]),
  pm6: map('Seaville: from coastal village to tourist resort',[
    {title:'1995 · fishing village',features:[
      feature('Sea','water',0,0,100,23),feature('Beach','sand',0,23,100,10),feature('Harbour','water',10,21,22,18),feature('Fish market','building',13,45,21,12),feature('Homes','building',47,42,16,12),feature('Homes','building',68,54,16,12),feature('Farmland','green',45,70,42,19),feature('Main road','road',0,62,100,5),feature('Pier','road',21,18,4,28)
    ]},
    {title:'2010 · tourist resort',features:[
      feature('Sea','water',0,0,100,23),feature('Public beach','sand',0,23,100,10),feature('Marina','water',8,18,27,23),feature('Hotel A','building',13,45,21,14),feature('Hotel B','building',43,43,18,14),feature('Villas','building',67,42,19,12),feature('Water sports','green',68,16,24,16),feature('Parking','parking',68,67,20,14),feature('Main road','road',0,62,100,5),feature('Promenade','path',0,34,100,3)
    ]}
  ]),
  pm7: map('Public park: 1980 and today',[
    {title:'1980 · formal gardens',features:[
      feature('Rose garden','green',7,8,27,25),feature('Pond','water',62,10,27,24),feature('Central fountain','water',40,39,20,20),feature('Trees','green',8,66,30,23),feature('Flower beds','green',62,66,28,21),feature('North path','path',0,48,100,5),feature('South path','path',48,0,5,100)
    ]},
    {title:'Today · recreation park',features:[
      feature('Playground','sand',6,7,31,28),feature('Café','building',64,8,27,22),feature('Lake','water',38,35,28,27),feature('Picnic lawn','green',7,67,31,23),feature('Outdoor gym','green',64,66,27,22),feature('Main walk','path',0,48,100,6),feature('Cycle path','road',48,0,6,100),feature('Entrance','parking',2,43,13,14)
    ]}
  ]),
  pm8: map('Public library floor plan: twenty years ago and today',[
    {title:'20 years ago',features:[
      feature('Adult fiction','building',4,7,28,25),feature('Reference','building',36,7,27,25),feature('Newspapers','building',68,7,28,25),feature('Reading tables','green',22,42,55,19),feature('Children','building',4,70,30,23),feature('Enquiry desk','building',64,70,32,23),feature('Entrance','road',43,92,14,8)
    ]},
    {title:'Today',features:[
      feature('Quiet study','building',4,7,28,25),feature('Computers','building',36,7,27,25),feature('Media studio','building',68,7,28,25),feature('Flexible event space','green',28,40,44,23),feature('Children + stories','sand',4,70,35,23),feature('Café','building',68,70,28,23),feature('Self-service','parking',44,72,17,18),feature('Entrance','road',43,92,14,8)
    ]}
  ]),
  pm9: map('Island before and after tourist development',[
    {title:'Before construction',features:[
      feature('Sea','water',0,0,100,100),feature('Island','sand',8,21,84,58),feature('Trees','green',20,32,20,18),feature('Trees','green',62,31,18,18),feature('Beach','sand',6,48,19,20)
    ]},
    {title:'After construction',features:[
      feature('Sea','water',0,0,100,100),feature('Island','sand',8,21,84,58),feature('Beach','sand',6,48,19,20),feature('Accommodation','building',25,31,16,12),feature('Accommodation','building',25,55,16,12),feature('Accommodation','building',64,31,16,12),feature('Accommodation','building',64,55,16,12),feature('Reception','building',46,45,13,13),feature('Restaurant','building',46,27,16,12),feature('Pier','road',50,67,5,31),feature('Footpath','path',22,49,62,4)
    ]}
  ]),
  pm10: map('Town centre: current layout and proposed traffic plan',[
    {title:'Current',features:[
      feature('High Street','road',3,45,94,8),feature('North Road','road',48,0,7,100),feature('Shops','building',8,24,30,14),feature('Shops','building',61,62,30,14),feature('Bus stops','parking',40,35,17,9),feature('Car park','parking',7,68,25,19),feature('River','water',0,86,100,14)
    ]},
    {title:'Proposed',features:[
      feature('Pedestrian zone','path',24,43,52,12),feature('Ring road','road',5,7,90,7),feature('Ring road','road',5,80,90,7),feature('West link','road',5,7,7,80),feature('East link','road',88,7,7,80),feature('Shops','building',27,24,46,14),feature('Shops','building',27,62,46,14),feature('Bus hub','parking',8,25,15,19),feature('Park & ride','parking',76,57,18,19),feature('River','water',0,87,100,13)
    ]}
  ]),
};
