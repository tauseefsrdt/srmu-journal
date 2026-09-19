import React from 'react';
import { Link } from 'react-router-dom';
import {
  Globe,
  ShieldCheck,
  BookOpen,
  Download,
  Share2,
  FileCheck,
  DollarSign,
  Database,
  Search,
  Sparkles,
  Lock,
  RefreshCw,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { journalInfo } from '../data/journalDocData';

export default function OpenAccessPolicy() {
  const sections = [
    {
      num: '01',
      title: 'Policy Statement',
      icon: <Globe className="w-5 h-5" />,
      color: 'blue',
      content: (
        <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
          <p>
            The <span className="font-bold text-[#0f4a85]">{journalInfo.fullName} ({journalInfo.acronym})</span> is committed to the free and unrestricted dissemination of scholarly research. The journal operates under an <span className="font-bold text-[#0f4a85]">Open Access publishing model</span>, ensuring that all published articles are freely available online immediately upon publication without subscription or paywall barriers.
          </p>
          <p>
            The objective of the journal is to maximize the visibility, accessibility, and impact of high-quality research in science, engineering, and emerging technologies by enabling unrestricted access to published content for researchers, educators, students, industry professionals, policymakers, and the general public worldwide.
          </p>
        </div>
      )
    },
    {
      num: '02',
      title: 'Open Access Principles',
      icon: <Sparkles className="w-5 h-5" />,
      color: 'amber',
      content: (
        <div className="space-y-3">
          <p className="text-sm text-slate-700 leading-relaxed mb-2">
            {journalInfo.acronym} strictly adheres to the following Open Access core principles:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
            {[
              'Immediate and permanent free access to all published articles.',
              'No registration or paid subscription required to read or download content.',
              'Equal, barrier-free access to research for readers worldwide.',
              'Promotion of open knowledge sharing and international scientific collaboration.',
              'Enhanced visibility, discoverability, and citation potential of published research.'
            ].map((principle, idx) => (
              <div key={idx} className="flex items-start space-x-2 p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{principle}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      num: '03',
      title: 'Reader Rights',
      icon: <BookOpen className="w-5 h-5" />,
      color: 'blue',
      content: (
        <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
          <p>All users may access published articles without charge and are permitted to:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
            {[
              { label: 'Read Full-Text', desc: 'Instant access to all HTML/PDF articles' },
              { label: 'Download PDFs', desc: 'Free personal & educational downloads' },
              { label: 'Print Copies', desc: 'For academic, research, or classroom use' },
              { label: 'Share Direct Links', desc: 'Disseminate work across scholarly networks' },
              { label: 'Search & Browse', desc: 'Full indexing across journal archives' },
              { label: 'Academic Citation', desc: 'Cite under standard referencing conventions' }
            ].map((item, idx) => (
              <div key={idx} className="p-3 bg-blue-50/60 border border-blue-200/70 rounded-2xl">
                <span className="font-bold text-[#0f4a85] block mb-0.5">{item.label}</span>
                <span className="text-[11px] text-slate-600">{item.desc}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 italic mt-1">
            Any reuse beyond permissions granted under the journal's licensing terms must comply with the applicable license and copyright policy.
          </p>
        </div>
      )
    },
    {
      num: '04',
      title: 'Author Rights',
      icon: <FileCheck className="w-5 h-5" />,
      color: 'amber',
      content: (
        <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
          <p>
            Authors retain fundamental intellectual rights specified in the journal's Copyright and Licensing Policy. Subject to the applicable license, authors may:
          </p>
          <ul className="space-y-1.5 text-xs text-slate-700 pl-2">
            {[
              'Share and distribute the final published version (Version of Record) of their article.',
              'Deposit the accepted or published version in institutional or subject repositories without embargo.',
              'Include the article in theses, dissertations, monographs, books, or teaching materials with appropriate citation.',
              'Host and share the article on personal, departmental, or institutional academic webpages.'
            ].map((pt, idx) => (
              <li key={idx} className="flex items-start space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      )
    },
    {
      num: '05',
      title: 'Licensing (Creative Commons)',
      icon: <ShieldCheck className="w-5 h-5" />,
      color: 'blue',
      content: (
        <div className="space-y-4">
          <p className="text-sm text-slate-700 leading-relaxed">
            All articles published by {journalInfo.acronym} are distributed under the <span className="font-bold text-[#0f4a85]">Creative Commons Attribution 4.0 International License (CC BY 4.0)</span> or equivalent specified license:
          </p>
          <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-2xl space-y-2 text-xs text-emerald-950">
            <div className="flex items-center space-x-2 font-bold text-emerald-900">
              <span className="px-2 py-0.5 bg-emerald-200 rounded text-[10px] font-mono">CC BY 4.0</span>
              <span>Open Attribution License Terms</span>
            </div>
            <p className="leading-relaxed">
              Anyone is permitted to copy, distribute, display, perform, adapt, remix, transform, and build upon the work for any purpose (even commercially), provided that the original authors and the journal are properly cited and credited.
            </p>
          </div>
        </div>
      )
    },
    {
      num: '06',
      title: 'Copyright',
      icon: <Lock className="w-5 h-5" />,
      color: 'amber',
      content: (
        <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
          <p>
            Copyright ownership and licensing arrangements are governed by the journal's Copyright and Licensing Policy.
          </p>
          <p className="text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-200">
            Authors are responsible for ensuring that all material included in their manuscripts complies with applicable copyright laws and that any necessary third-party copyright permissions have been obtained prior to publication.
          </p>
        </div>
      )
    },
    {
      num: '07',
      title: 'Article Processing Charges (APCs)',
      icon: <DollarSign className="w-5 h-5" />,
      color: 'blue',
      content: (
        <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
          <p>
            Where Article Processing Charges (APCs) are applicable, the fee amount, payment procedures, and any waiver or discount policies will be clearly and transparently displayed on the journal website prior to manuscript submission.
          </p>
          <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs text-[#0f4a85] font-semibold">
            No hidden publication or processing charges will ever be imposed on authors.
          </div>
        </div>
      )
    },
    {
      num: '08',
      title: 'Permanent Availability & Digital Preservation',
      icon: <Database className="w-5 h-5" />,
      color: 'amber',
      content: (
        <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
          <p>
            All published articles remain permanently accessible through the journal's official online platform.
          </p>
          <p className="text-xs text-slate-600">
            The journal supports long-term digital preservation through recognized archiving services, institutional repositories, and digital identifier systems to guarantee continuous, uninterrupted access to the scholarly record for future generations.
          </p>
        </div>
      )
    },
    {
      num: '09',
      title: 'Repository Policy',
      icon: <Download className="w-5 h-5" />,
      color: 'blue',
      content: (
        <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
          <p>Authors are encouraged to deposit their published work in:</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-center font-medium">
            {['Institutional Repositories', 'Subject-Specific Archives', 'Academic Webpages', 'Research Networks'].map((repo, i) => (
              <div key={i} className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800">
                {repo}
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 italic mt-1">
            Deposited versions should include an appropriate formal citation and a direct link to the original publication in {journalInfo.acronym}.
          </p>
        </div>
      )
    },
    {
      num: '10',
      title: 'Indexing and Discoverability',
      icon: <Search className="w-5 h-5" />,
      color: 'amber',
      content: (
        <p className="text-sm text-slate-700 leading-relaxed">
          {journalInfo.acronym} seeks to maximize the discoverability of published research by pursuing inclusion in reputable abstracting and indexing databases, standardizing rich metadata, registering Digital Object Identifiers (DOIs), and employing advanced search engine optimization (SEO) best practices.
        </p>
      )
    },
    {
      num: '11',
      title: 'Benefits of Open Access',
      icon: <Sparkles className="w-5 h-5" />,
      color: 'blue',
      content: (
        <div className="space-y-3">
          <p className="text-sm text-slate-700 leading-relaxed mb-2">
            The Open Access model adopted by {journalInfo.acronym} provides substantial advantages to the scholarly ecosystem:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
            {[
              'Greater global visibility and citation velocity for authors.',
              'Increased readership without financial or institutional barriers.',
              'Faster transfer of scientific knowledge into practical applications.',
              'Enhanced cross-border and interdisciplinary research collaboration.',
              'Improved accessibility for researchers in developing economies.',
              'Full compliance with global open-science mandates and funder requirements.'
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-start space-x-2 p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      num: '12',
      title: 'Ethical Commitment & Peer Review Integrity',
      icon: <ShieldCheck className="w-5 h-5" />,
      color: 'amber',
      content: (
        <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
          <p>
            Open Access does not in any way alter or compromise the journal's editorial standards. Every manuscript submitted to {journalInfo.acronym} undergoes the same rigorous double-blind peer review regardless of author institution, nationality, or funding status.
          </p>
          <p className="text-xs text-slate-600 bg-amber-50/70 p-3 rounded-xl border border-amber-200">
            Editorial decisions are based exclusively on scientific quality, originality, technical merit, scope relevance, and publication ethics.
          </p>
        </div>
      )
    },
    {
      num: '13',
      title: 'Policy Updates',
      icon: <RefreshCw className="w-5 h-5" />,
      color: 'blue',
      content: (
        <p className="text-sm text-slate-700 leading-relaxed">
          This Open Access Policy may be reviewed and updated periodically to reflect developments in scholarly publishing, licensing, copyright law, and digital preservation. Any revisions will be published immediately on the journal's official website.
        </p>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800">
      <PageHero
        title="Open Access Policy"
        subtitle="Unrestricted online access, CC BY 4.0 licensing, author rights, repository permissions, and digital preservation principles."
        badge="Open Science & Global Access"
        breadcrumbs={[
          { name: 'Policies', path: '/open-access-policy' },
          { name: 'Open Access Policy' }
        ]}
      />


      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-8 text-left">
        {sections.map((sec) => (
          <div
            key={sec.num}
            className="academic-card bg-white rounded-3xl p-6 sm:p-8 space-y-4 relative overflow-hidden"
          >
            <div
              className={`absolute top-0 left-6 right-6 h-1 rounded-b-full ${sec.color === 'amber'
                ? 'bg-gradient-to-r from-amber-400 to-amber-600'
                : 'bg-gradient-to-r from-blue-600 to-[#0f4a85]'
                }`}
            />

            <div className="flex items-center space-x-3">
              <div
                className={`w-11 h-11 rounded-2xl flex items-center justify-center border ${sec.color === 'amber'
                  ? 'bg-amber-50 border-amber-200 text-amber-700'
                  : 'bg-blue-50 border-blue-200 text-blue-700'
                  }`}
              >
                {sec.icon}
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-slate-400 block">
                  SECTION {sec.num}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#0f4a85]">{sec.title}</h3>
              </div>
            </div>

            <div className="pl-0 sm:pl-14">{sec.content}</div>
          </div>
        ))}

        {/* CTA Strip */}
        {/* <div className="academic-card rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-[#0f4a85] to-[#0f4a85] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-[#0f4a85]">Publish your research with Open Access</h4>
            <p className="text-xs text-slate-700">
              Submit your paper for rapid, double-blind peer review and immediate global dissemination.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/submit"
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-500 btn-gold-shadow transition-all flex items-center space-x-1.5"
            >
              <span>Submit Manuscript</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
}
