import React from 'react';
import { Link } from 'react-router-dom';
import {
  RefreshCw,
  AlertTriangle,
  FileText,
  AlertOctagon,
  Scale,
  ShieldCheck,
  CheckCircle2,
  FileSearch,
  MessageSquare,
  Lock,
  ArrowUpRight,
  Database,
  ExternalLink
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { journalInfo } from '../data/journalDocData';

export default function RetractionPolicy() {
  const sections = [
    {
      num: '01',
      title: 'Policy Statement & Purpose',
      icon: <ShieldCheck className="w-5 h-5" />,
      color: 'blue',
      content: (
        <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
          <p>
            The <span className="font-bold text-[#0f4a85]">{journalInfo.fullName} ({journalInfo.acronym})</span> is committed to preserving the accuracy, integrity, transparency, and reliability of the scholarly record. When errors or concerns are identified in published articles, the journal takes prompt, transparent, and fair corrective action in compliance with the Committee on Publication Ethics (COPE) guidelines.
          </p>
          <div className="p-4 bg-blue-50/80 border border-blue-200 rounded-2xl space-y-2">
            <span className="text-xs font-bold text-[#0f4a85] uppercase tracking-wider block">Objectives</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              {[
                'Correcting published errors promptly and accurately',
                'Addressing allegations of research or publication misconduct',
                'Retracting unreliable, invalid, or unethical publications',
                'Informing readers and databases of post-publication updates',
                'Preserving the permanent historical record with full transparency'
              ].map((obj, idx) => (
                <div key={idx} className="flex items-center space-x-2 bg-white/80 p-2 rounded-lg border border-blue-100">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{obj}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      num: '02',
      title: 'Guiding Principles',
      icon: <Scale className="w-5 h-5" />,
      color: 'amber',
      content: (
        <div className="space-y-3">
          <p className="text-sm text-slate-700 leading-relaxed">
            In managing corrections and retractions, {journalInfo.acronym} adheres strictly to these core tenets:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
            {[
              'Fair and impartial investigation procedures',
              'Full transparency in editorial decisions and public notices',
              'Due process and reasonable opportunity for authors to respond',
              'Timely correction of the published scholarly record',
              'Permanent preservation of the article version history',
              'Compliance with COPE Retraction Guidelines and international standards'
            ].map((principle, idx) => (
              <div key={idx} className="flex items-start space-x-2 p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="font-medium text-slate-800">{principle}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      num: '03',
      title: 'Types of Post-Publication Notices',
      icon: <FileText className="w-5 h-5" />,
      color: 'blue',
      content: (
        <div className="space-y-4">
          <p className="text-sm text-slate-700 leading-relaxed">
            Depending on the nature and severity of the issue, the journal issues four standardized categories of notices:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {/* Erratum */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
              <div className="flex items-center justify-between pb-1 border-b border-slate-200">
                <span className="font-bold text-[#0f4a85] text-xs uppercase">3.1 Correction (Erratum)</span>
                <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-semibold text-[10px]">Publisher Error</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Issued when an error is introduced during editing, formatting, typesetting, or publication that affects the accuracy or clarity of the article.
              </p>
              <ul className="text-[11px] text-slate-500 space-y-1 list-disc pl-4">
                <li>Typographical errors altering meaning or data</li>
                <li>Incorrect author affiliation or misspelled name</li>
                <li>Omitted figures, tables, or corrupted equation symbols</li>
              </ul>
            </div>

            {/* Corrigendum */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
              <div className="flex items-center justify-between pb-1 border-b border-slate-200">
                <span className="font-bold text-[#0f4a85] text-xs uppercase">3.2 Author Correction (Corrigendum)</span>
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold text-[10px]">Author Error</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Issued when authors identify a significant error in their published work that does not invalidate the article's core scientific conclusions.
              </p>
              <ul className="text-[11px] text-slate-500 space-y-1 list-disc pl-4">
                <li>Incorrect numerical parameters or equation coefficients</li>
                <li>Inadvertently omitted funding or acknowledgements</li>
                <li>Minor methodological clarifications or graph label updates</li>
              </ul>
            </div>

            {/* Expression of Concern */}
            <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-2xl space-y-2">
              <div className="flex items-center justify-between pb-1 border-b border-amber-200">
                <span className="font-bold text-amber-900 text-xs uppercase">3.3 Expression of Concern</span>
                <span className="px-2 py-0.5 rounded bg-amber-200 text-amber-900 font-semibold text-[10px]">Under Investigation</span>
              </div>
              <p className="text-amber-950 leading-relaxed">
                Published when credible evidence indicates potential serious issues or misconduct, but investigation is ongoing or conclusive evidence is unavailable.
              </p>
              <ul className="text-[11px] text-amber-900/80 space-y-1 list-disc pl-4">
                <li>Ongoing institutional or independent misconduct inquiry</li>
                <li>Suspected image manipulation or unverified datasets</li>
                <li>Undisclosed material conflicts of interest</li>
              </ul>
            </div>

            {/* Retraction */}
            <div className="p-4 bg-red-50/70 border border-red-200 rounded-2xl space-y-2">
              <div className="flex items-center justify-between pb-1 border-b border-red-200">
                <span className="font-bold text-red-900 text-xs uppercase">3.4 Formal Retraction</span>
                <span className="px-2 py-0.5 rounded bg-red-200 text-red-900 font-semibold text-[10px]">Invalid Findings</span>
              </div>
              <p className="text-red-950 leading-relaxed">
                Issued when an article's findings are fundamentally unreliable or when severe ethical/scientific misconduct has taken place.
              </p>
              <ul className="text-[11px] text-red-900/80 space-y-1 list-disc pl-4">
                <li>Plagiarism, fabricated or falsified datasets</li>
                <li>Major methodological errors destroying findings</li>
                <li>Duplicate publication or fraudulent peer review</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      num: '04',
      title: 'Grounds for Retraction vs. Correction',
      icon: <AlertOctagon className="w-5 h-5" />,
      color: 'amber',
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 bg-red-50 border border-red-200 rounded-2xl space-y-2">
              <span className="font-bold text-red-900 text-xs uppercase block">Grounds for Retraction</span>
              <ul className="space-y-1.5 text-red-950">
                {[
                  'Confirmed plagiarism or substantial copyright infringement',
                  'Fabricated, falsified, or manipulated scientific data',
                  'Duplicate or redundant publication across journals',
                  'Critical methodological failures invalidating findings',
                  'Unethical research conduct or absence of required ethical approval',
                  'Compromised or fraudulent peer-review process',
                  'Undisclosed conflicts of interest fundamentally affecting conclusions'
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-1.5">
                    <span className="text-red-600 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-2">
              <span className="font-bold text-emerald-950 text-xs uppercase block">Grounds for Correction (Not Retraction)</span>
              <ul className="space-y-1.5 text-emerald-950">
                {[
                  'Article remains scientifically valid and reproducible',
                  'Errors are honest, unintentional, and isolated',
                  'Core findings and principal conclusions are unaffected',
                  'Minor data presentation or labeling discrepancies',
                  'Missing funding, acknowledgment, or affiliation updates',
                  'Author order adjustments with consensus of all co-authors'
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-1.5">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      num: '05',
      title: 'Investigation Procedure & Author Right of Reply',
      icon: <FileSearch className="w-5 h-5" />,
      color: 'blue',
      content: (
        <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
          <p>
            When concerns are formally raised by authors, readers, reviewers, editors, or institutions, the Editorial Office follows a structured, confidential COPE-aligned investigation protocol:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs text-slate-800">
            {[
              { step: '1. Receipt & Assessment', desc: 'Editorial desk logs complaint and conducts preliminary scope assessment.' },
              { step: '2. Author Consultation', desc: 'Corresponding and co-authors are invited to provide explanations and raw data.' },
              { step: '3. Expert Evaluation', desc: 'Independent reviewers or subject matter specialists assess evidence.' },
              { step: '4. Editorial Decision', desc: 'Editor-in-Chief issues fair decision: Dismiss, Correct, or Retract.' }
            ].map((st, idx) => (
              <div key={idx} className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <span className="font-bold text-[#0f4a85] block">{st.step}</span>
                <span className="text-slate-600 text-[11px] leading-snug">{st.desc}</span>
              </div>
            ))}
          </div>

          <div className="p-3.5 bg-blue-50 border border-blue-200 rounded-2xl text-xs text-blue-950">
            <strong>Author Response:</strong> Authors are always given a fair opportunity to respond and present supporting data within a specified timeframe prior to any final retraction decision.
          </div>
        </div>
      )
    },
    {
      num: '06',
      title: 'Retraction Notice & Article Version Integrity',
      icon: <Database className="w-5 h-5" />,
      color: 'amber',
      content: (
        <div className="space-y-4">
          <p className="text-sm text-slate-700 leading-relaxed">
            To preserve scholarly transparency, the published <strong>Version of Record is never silently deleted or removed</strong> from the web.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
              <span className="font-bold text-[#0f4a85] block">Permanent Watermark</span>
              <p className="text-slate-600">The original PDF and HTML are permanently watermarked as "RETRACTED" across all pages.</p>
            </div>
            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
              <span className="font-bold text-[#0f4a85] block">Linked Retraction Notice</span>
              <p className="text-slate-600">A separate, citable retraction notice details the reasons, who initiated it, and full references.</p>
            </div>
            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
              <span className="font-bold text-[#0f4a85] block">Indexing Notifications</span>
              <p className="text-slate-600">Crossref DOI metadata, digital archives, and indexing databases are updated immediately.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      num: '07',
      title: 'Misconduct Reporting & Appeals Process',
      icon: <MessageSquare className="w-5 h-5" />,
      color: 'blue',
      content: (
        <div className="space-y-4">
          <p className="text-sm text-slate-700 leading-relaxed">
            Anyone may report concerns regarding published articles with substantiated evidence to the Editorial Office.
          </p>
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2 text-xs">
            <h4 className="font-bold text-[#0f4a85] uppercase tracking-wider">Appeals Protocol</h4>
            <p className="text-slate-600">
              Authors who disagree with a correction or retraction decision may lodge a written appeal within <strong>30 days</strong> of formal notification.
            </p>
            <ul className="text-slate-600 space-y-1 list-disc pl-4">
              <li>Must cite the specific article DOI and reference number.</li>
              <li>Must provide point-by-point rebuttal with verifiable supporting evidence.</li>
              <li>Appeals are reviewed by the Editor-in-Chief and independent senior board members not involved in the initial determination.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      num: '08',
      title: 'Confidentiality & Periodic Review',
      icon: <RefreshCw className="w-5 h-5" />,
      color: 'amber',
      content: (
        <p className="text-sm text-slate-700 leading-relaxed">
          All investigations are conducted strictly confidentially. This Retraction & Correction Policy is reviewed periodically to ensure continuous adherence to international publishing ethics and COPE standards.
        </p>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800">
      <PageHero
        title="Retraction & Correction Policy"
        subtitle="Transparent procedures for Errata, Corrigenda, Expressions of Concern, and COPE-compliant Retractions to safeguard scholarly record integrity."
        badge="Publication Integrity & COPE Guidelines"
        breadcrumbs={[
          { name: 'Policies', path: '/ethics-policy' },
          { name: 'Retraction & Correction Policy' }
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-8 text-left">
        {sections.map((sec) => (
          <div
            key={sec.num}
            className="academic-card bg-white rounded-3xl p-6 sm:p-8 space-y-4 relative overflow-hidden"
          >
            <div
              className={`absolute top-0 left-6 right-6 h-1 rounded-b-full ${
                sec.color === 'amber'
                  ? 'bg-gradient-to-r from-amber-400 to-amber-600'
                  : 'bg-gradient-to-r from-blue-600 to-[#0f4a85]'
              }`}
            />

            <div className="flex items-center space-x-3">
              <div
                className={`w-11 h-11 rounded-2xl flex items-center justify-center border ${
                  sec.color === 'amber'
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
      </div>
    </div>
  );
}
