import React from 'react';
import { Link } from 'react-router-dom';
import {
  FileSearch,
  ShieldCheck,
  CheckCircle2,
  Scale,
  AlertTriangle,
  RefreshCw,
  UserCheck,
  Lock,
  Bot,
  BookOpen,
  ArrowUpRight
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { journalInfo } from '../data/journalDocData';

const plagiarismSections = [
  {
    num: '01',
    title: 'Policy Statement',
    icon: <ShieldCheck className="w-5 h-5" />,
    color: 'blue',
    content: (
      <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
        <p>
          The <span className="font-bold text-[#0f4a85]">{journalInfo.fullName} ({journalInfo.acronym})</span> is committed to maintaining the highest standards of academic integrity and publication ethics. The journal publishes only original research that has not been plagiarized, fabricated, falsified, or previously published without proper acknowledgment.
        </p>
        <p>
          {journalInfo.acronym} follows internationally accepted publication ethics and editorial best practices. All submitted manuscripts are screened for plagiarism before they are considered for peer review. Suspected cases of plagiarism are handled in accordance with internationally recognized publication ethics guidelines.
        </p>
      </div>
    )
  },
  {
    num: '02',
    title: 'Definition of Plagiarism',
    icon: <BookOpen className="w-5 h-5" />,
    color: 'amber',
    content: (
      <div className="space-y-3">
        <p className="text-sm text-slate-700 leading-relaxed">
          Plagiarism is the presentation of another person's ideas, words, figures, tables, data, algorithms, software, or research findings as one's own without proper acknowledgment. It includes, but is not limited to:
        </p>
        <div className="space-y-2 text-xs text-slate-700">
          {[
            'Copying text verbatim without quotation marks and appropriate citation.',
            "Paraphrasing another author's work without proper attribution.",
            'Copying figures, tables, images, or illustrations without explicit permission or citation.',
            "Using another researcher's experimental ideas or methodologies without acknowledgment.",
            "Submitting another person's work under one's own name.",
            'Translation plagiarism (translating published work into English without attribution).',
            'Mosaic plagiarism (piecing together copied text fragments from multiple sources).',
            'Self-plagiarism or text recycling without proper disclosure.',
            'Duplicate or redundant publication across different venues.'
          ].map((pt, i) => (
            <div key={i} className="flex items-start space-x-2.5 p-2 bg-slate-50 rounded-xl border border-slate-100">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
              <span>{pt}</span>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    num: '03',
    title: 'Originality Requirement',
    icon: <FileSearch className="w-5 h-5" />,
    color: 'blue',
    content: (
      <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
        <p>Authors submitting manuscripts to {journalInfo.acronym} certify that:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          {[
            'The manuscript is completely original and authentic.',
            'The work has not been published previously in any form.',
            'The manuscript is not under concurrent consideration elsewhere.',
            'All borrowed material has been properly and accurately cited.',
            'Necessary permissions have been obtained for any copyrighted third-party material.'
          ].map((pt, i) => (
            <div key={i} className="flex items-start space-x-2 p-2.5 bg-blue-50/50 rounded-xl border border-blue-100">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
              <span>{pt}</span>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    num: '04',
    title: 'Similarity Screening Tools',
    icon: <FileSearch className="w-5 h-5" />,
    color: 'amber',
    content: (
      <div className="space-y-3">
        <p className="text-sm text-slate-700 leading-relaxed">
          Every submitted manuscript is screened using recognized plagiarism detection software systems prior to editorial assignment:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {['iThenticate (Crossref Similarity Check)', 'Turnitin Academic Plagiarism Suite', 'Grammarly & Automated Integrity Checks'].map((tool, i) => (
            <div key={i} className="flex items-center space-x-2.5 p-3 bg-amber-50/70 border border-amber-200 rounded-xl text-xs font-semibold text-amber-950">
              <span className="w-2 h-2 rounded-full bg-[#0f4a85] shrink-0" />
              <span>{tool}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-600 leading-relaxed">
          The similarity report is thoroughly evaluated by the editorial office. Excluded sections during screening include bibliographic references, author names/affiliations, standard equation notation, and commonly used mathematical methodology descriptions.
        </p>
      </div>
    )
  },
  {
    num: '05',
    title: 'Similarity Thresholds & Benchmarks',
    icon: <Scale className="w-5 h-5" />,
    color: 'blue',
    content: (
      <div className="space-y-4">
        <p className="text-sm text-slate-700 leading-relaxed">
          {journalInfo.acronym} applies the following similarity index thresholds:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-[#0f4a85] text-white">
                <th className="px-4 py-3 font-bold uppercase tracking-wider">Overall Similarity Index (Normal & AI)</th>
                <th className="px-4 py-3 font-bold uppercase tracking-wider">Editorial Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { range: 'Below 10%–15%', action: 'Normally acceptable, subject to editorial evaluation.', color: 'emerald' },
                { range: '15%–25%', action: 'Returned to the author for revision and reduction of text similarity.', color: 'amber' },
                { range: 'Above 25%', action: 'Normally rejected due to excessive text similarity and potential plagiarism.', color: 'red' },
                { range: 'Any Single Source Exceeding 5%', action: 'Requires written explanation and extensive rewording or removal.', color: 'orange' }
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-slate-50/70' : 'bg-white'}>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={`px-2.5 py-1 rounded-lg font-bold font-mono text-[11px] ${row.color === 'emerald' ? 'bg-emerald-100 text-emerald-800' :
                      row.color === 'amber' ? 'bg-amber-100 text-amber-800' :
                        row.color === 'red' ? 'bg-red-100 text-red-800' :
                          'bg-orange-100 text-orange-800'
                      }`}>
                      {row.range}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-700">{row.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-400 italic">
          The Editor-in-Chief retains absolute discretion to make the final editorial decision based on the qualitative context of overlap.
        </p>
      </div>
    )
  },
  {
    num: '06',
    title: 'Self-Plagiarism & Text Recycling',
    icon: <RefreshCw className="w-5 h-5" />,
    color: 'amber',
    content: (
      <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
        <p>
          Authors should avoid substantial reuse of their own previously published material without appropriate citation. Acceptable reuse includes:
        </p>
        <ul className="space-y-1.5 text-xs text-slate-600 pl-2">
          {[
            'Properly cited conference proceedings expanded with substantial new data into a full journal article.',
            'Reuse of standard methodology descriptions where unavoidable.',
            'Dissemination of preprints where permitted by journal policy.'
          ].map((pt, i) => (
            <li key={i} className="flex items-start space-x-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
              <span>{pt}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  },
  {
    num: '07',
    title: 'Sanctions & Consequences of Plagiarism',
    icon: <AlertTriangle className="w-5 h-5" />,
    color: 'blue',
    content: (
      <div className="space-y-3">
        <p className="text-sm text-slate-700 leading-relaxed">
          Confirmed plagiarism may result in one or more of the following formal actions:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          {[
            'Immediate manuscript rejection and withdrawal from review.',
            'Formal retraction of published articles with public notice.',
            'Temporary submission ban (typically 2–5 years).',
            "Formal notification to the authors' institution or funding agency.",
            'Removal of the article from journal indexing databases.'
          ].map((action, i) => (
            <div key={i} className="flex items-center space-x-2.5 p-2.5 bg-red-50 border border-red-200 rounded-xl text-red-900 font-medium">
              <AlertTriangle className="w-4 h-4 text-red-500 shrink-0" />
              <span>{action}</span>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    num: '08',
    title: 'Artificial Intelligence (AI) and Similarity',
    icon: <Bot className="w-5 h-5" />,
    color: 'amber',
    content: (
      <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
        <p>
          The use of generative AI tools for language improvement is permitted only if authors remain fully responsible for the manuscript, AI tools are not listed as authors, and all AI use is transparently disclosed. AI-generated text must not reproduce unattributed or copyrighted content.
        </p>
      </div>
    )
  },
  {
    num: '09',
    title: 'Appeals',
    icon: <Scale className="w-5 h-5" />,
    color: 'blue',
    content: (
      <p className="text-sm text-slate-700 leading-relaxed">
        Authors may appeal editorial decisions related to plagiarism by submitting a written explanation and evidence within <span className="font-bold text-[#0f4a85]">30 days of notification</span>. The appeal will be reviewed by the Editor-in-Chief and the decision shall be final.
      </p>
    )
  }
];

export default function PlagiarismPolicy() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800">
      <PageHero
        title="Plagiarism Policy"
        subtitle="Similarity screening benchmarks, detection software, self-plagiarism rules, editorial actions, and sanctions against misconduct."
        badge="Research Integrity & Screening"
        breadcrumbs={[
          { name: 'Policies', path: '/plagiarism-policy' },
          { name: 'Plagiarism Policy' }
        ]}
      />

      {/* Policy Sections */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-8 text-left">
        {plagiarismSections.map((sec) => (
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
            <h4 className="text-base sm:text-lg font-bold text-[#0f4a85]">Review our Publication Ethics Policy</h4>
            <p className="text-xs text-slate-700">
              Explore our complete COPE compliance, authorship rules, and ethical standards.
            </p>
          </div>
          <Link
            to="/ethics-policy"
            className="px-6 py-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-500 btn-gold-shadow shrink-0 transition-all flex items-center space-x-2"
          >
            <span>Publication Ethics</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div> */}
      </div>
    </div>
  );
}
