import type { Metadata } from 'next';
import './globals.css';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://moti-ielts-writing-lab.shuaishi79.chatgpt.site').replace(/\/$/, '');

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: '墨题 IELTS｜雅思写作实验室',
  description: '从真实雅思写作考题出发，系统学习大作文与小作文的题型方法、地道表达和高分范文。',
  openGraph: {
    title: '墨题 IELTS｜把雅思写作拆成可以练会的能力',
    description: '10 类题型、100 个实考母题、200 篇原创范文与限时练习。',
    type: 'website',
    url: siteUrl,
    images: [{ url: `${siteUrl}/og.png`, width: 1731, height: 909, alt: '墨题 IELTS 雅思写作实验室' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '墨题 IELTS｜雅思写作实验室',
    description: '10 类题型、100 个实考母题、200 篇原创范文与限时练习。',
    images: [`${siteUrl}/og.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
