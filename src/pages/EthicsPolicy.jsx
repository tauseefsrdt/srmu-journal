import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Award,
  UserCheck,
  Eye,
  Scale,
  Lock,
  AlertTriangle,
  RefreshCw,
  Bot,
  FileText,
  MessageSquare,
  Database,
  CheckCircle2,
  BookOpen,
  ArrowUpRight,
  HelpCircle
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { journalInfo } from '../data/journalDocData';

export default function EthicsPolicy() {
  const sections = [
    {
      num: '01',
      title: 'Introduction',
      icon: <ShieldCheck className="w-5 h-5" />,
      color: 'blue',
      content: (
        <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
          <p>
            The <span className="font-bold text-[#0f4a85]">{journalInfo.fullName} ({journalInfo.acronym})</span> is committed to maintaining the highest standards of integrity, transparency, fairness, and ethical conduct in scholarly publishing. The journal expects all participants in the publication process—including authors, editors, reviewers, and publishers—to adhere to internationally recognized ethical principles.
          </p>
          <div className="p-3.5 bg-blue-50/80 border border-blue-200 rounded-2xl flex items-start space-x-3 text-xs text-blue-950">
            <Award className="w-4 h-4 text-[#0f4a85] shrink-0 mt-0.5" />
            <span>
              <strong>International Standards:</strong> {journalInfo.acronym} follows the ethical standards and best practices recommended by the <strong>Committee on Publication Ethics (COPE)</strong>, the <strong>International Committee of Medical Journal Editors (ICMJE)</strong> (where applicable), and the <strong>Core Practices of scholarly publishing ethics</strong>.
            </span>
          </div>
        </div>
      )
    },
    {
      num: '02',
      title: 'Ethical Principles',
      icon: <Award className="w-5 h-5" />,
      color: 'amber',
      content: (
        <div className="space-y-3">
          <p className="text-sm text-slate-700 leading-relaxed mb-2">
            {journalInfo.acronym} is steadfastly committed to:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
            {[
              'Promoting originality, creativity, and technical innovation in research.',
              'Ensuring a fair, unbiased, and confidential peer-review process.',
              'Preventing plagiarism, data fabrication, and academic misconduct.',
              'Maintaining strict editorial independence from commercial influences.',
              'Protecting intellectual property rights and author copyright.',
              'Publishing corrections, retractions, or expressions of concern whenever necessary.',
              'Encouraging transparency, open data, and reproducibility of scientific research.'
            ].map((pt, idx) => (
              <div key={idx} className="flex items-start space-x-2 p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{pt}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      num: '03',
      title: 'Responsibilities of Authors',
      icon: <UserCheck className="w-5 h-5" />,
      color: 'blue',
      content: (
        <div className="space-y-6">
          <p className="text-sm text-slate-700 leading-relaxed">
            Authors submitting manuscripts to {journalInfo.acronym} must adhere to the following scholarly responsibilities:
          </p>

          <div className="space-y-4">
            {/* 3.1 Originality */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
              <h4 className="text-xs font-bold text-[#0f4a85] uppercase tracking-wider">3.1 Originality</h4>
              <ul className="space-y-1 text-xs text-slate-600 pl-2">
                {[
                  'Submitted work is original and authentic.',
                  'The manuscript has not been published elsewhere in any language.',
                  'The manuscript is not currently under consideration by any other journal.',
                  'Proper citations and attribution are provided for all borrowed ideas, figures, tables, and data.'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3.2 Authorship */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
              <h4 className="text-xs font-bold text-[#0f4a85] uppercase tracking-wider">3.2 Authorship Criteria</h4>
              <p className="text-xs text-slate-700">
                Only individuals who have made significant scholarly contributions should be listed as authors, having contributed substantially to:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                {['1. Research conception & design', '2. Data collection', '3. Analysis & interpretation', '4. Manuscript drafting', '5. Final approval'].map((crit, idx) => (
                  <div key={idx} className="p-2 bg-white rounded-lg border border-slate-200 font-medium text-slate-800">
                    {crit}
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-slate-500 italic mt-1">
                Individuals providing purely technical or financial support should be acknowledged rather than listed as co-authors.
              </p>
            </div>

            {/* 3.3 Corresponding Author */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
              <h4 className="text-xs font-bold text-[#0f4a85] uppercase tracking-wider">3.3 Corresponding Author Responsibilities</h4>
              <p className="text-xs text-slate-600">
                Responsible for ensuring all co-authors approve the submission, managing communication with the editorial office, coordinating revisions, and confirming data accuracy.
              </p>
            </div>

            {/* 3.4 Data Integrity */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
              <h4 className="text-xs font-bold text-[#0f4a85] uppercase tracking-wider">3.4 Data Integrity</h4>
              <p className="text-xs text-slate-600">
                Authors must present data honestly and accurately, avoiding fabrication, falsification, or image manipulation, and retain research data for a reasonable period after publication.
              </p>
            </div>

            {/* 3.5 & 3.6 Plagiarism & Redundant Publication */}
            <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-2xl space-y-2">
              <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider">3.5 & 3.6 Plagiarism & Redundant Submission</h4>
              <p className="text-xs text-amber-950 leading-relaxed">
                Duplicate or simultaneous submission to multiple journals is strictly unethical. Authors must avoid all forms of direct plagiarism, self-plagiarism, mosaic plagiarism, and translation plagiarism. All manuscripts undergo automated similarity screening prior to peer review.
              </p>
            </div>

            {/* 3.7 & 3.8 & 3.9 Citations, COI & Ethical Approval */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <span className="font-bold text-[#0f4a85] block">3.7 Citation Practices</span>
                <span className="text-slate-600">Avoid excessive self-citation and citation manipulation schemes.</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <span className="font-bold text-[#0f4a85] block">3.8 Conflicts of Interest</span>
                <span className="text-slate-600">Disclose all funding, employment, consultancy, patent, and personal ties.</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <span className="font-bold text-[#0f4a85] block">3.9 Ethical Approval</span>
                <span className="text-slate-600">Include IRB / Ethics committee approval for human or animal studies.</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      num: '04',
      title: 'Responsibilities of Editors',
      icon: <Scale className="w-5 h-5" />,
      color: 'amber',
      content: (
        <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
          <p>
            Editors are responsible for maintaining the scientific quality and integrity of {journalInfo.acronym}. Editors evaluate manuscripts solely on scholarly merit, maintain strict confidentiality, manage unbiased peer review, and investigate ethical complaints promptly.
          </p>
          <div className="p-3.5 bg-blue-50/70 border border-blue-200 rounded-2xl">
            <span className="text-xs font-bold text-[#0f4a85] block mb-1">Non-Discrimination Policy</span>
            <p className="text-xs text-slate-600">
              Editors shall not discriminate based on nationality, gender, race, religion, institutional affiliation, or political beliefs.
            </p>
          </div>
        </div>
      )
    },
    {
      num: '05',
      title: 'Responsibilities of Reviewers',
      icon: <UserCheck className="w-5 h-5" />,
      color: 'blue',
      content: (
        <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
          <p>Peer reviewers play a critical role in scholarly quality assurance. Reviewers must:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
            {[
              'Review objectively, constructively, and impartially.',
              'Maintain confidentiality of the unpublished manuscript.',
              'Promptly declare any conflicts of interest and recuse if needed.',
              'Complete reviews within the requested timeframe.',
              'Identify relevant uncited published literature.',
              'Report suspected plagiarism, duplicate publication, or ethical violations.'
            ].map((pt, idx) => (
              <div key={idx} className="flex items-start space-x-2 p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{pt}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 italic mt-1">
            Reviewers must not contact authors directly or use unpublished findings for personal benefit.
          </p>
        </div>
      )
    },
    {
      num: '06',
      title: 'Peer Review Process',
      icon: <Eye className="w-5 h-5" />,
      color: 'amber',
      content: (
        <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
          <p>
            {journalInfo.acronym} employs a <span className="font-bold text-[#0f4a85]">Double-Blind Peer Review</span> process in which reviewers and authors do not know each other's identities. Each manuscript is generally evaluated by at least two independent expert referees.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-center font-bold">
            <div className="p-2.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl">Accept</div>
            <div className="p-2.5 bg-blue-50 text-blue-800 border border-blue-200 rounded-xl">Minor Revision</div>
            <div className="p-2.5 bg-amber-50 text-amber-800 border border-amber-200 rounded-xl">Major Revision</div>
            <div className="p-2.5 bg-red-50 text-red-800 border border-red-200 rounded-xl">Reject</div>
          </div>
          <p className="text-xs text-slate-500 italic">
            The Editor-in-Chief makes the final publication decision on all submissions.
          </p>
        </div>
      )
    },
    {
      num: '07',
      title: 'Editorial Independence',
      icon: <Scale className="w-5 h-5" />,
      color: 'blue',
      content: (
        <p className="text-sm text-slate-700 leading-relaxed">
          Editorial decisions are based solely on scientific quality, originality, technical merit, scope relevance, and ethical compliance. Commercial interests, sponsorships, or institutional funding shall never influence editorial outcomes.
        </p>
      )
    },
    {
      num: '08',
      title: 'Confidentiality',
      icon: <Lock className="w-5 h-5" />,
      color: 'amber',
      content: (
        <p className="text-sm text-slate-700 leading-relaxed">
          Editors and reviewers must not disclose manuscript content, author identities, referee identities, or editorial discussions to any unauthorized third parties. Information obtained during review must not be used for personal advantage.
        </p>
      )
    },
    {
      num: '09',
      title: 'Conflicts of Interest',
      icon: <Scale className="w-5 h-5" />,
      color: 'blue',
      content: (
        <div className="space-y-2 text-sm text-slate-700 leading-relaxed">
          <p>
            Editors, reviewers, and authors must disclose any actual or potential conflicts of interest. Individuals with conflicts are recused from handling or reviewing the manuscript.
          </p>
          <Link
            to="/conflict-of-interest-policy"
            className="inline-flex items-center space-x-1 text-xs font-bold text-[#0f4a85] hover:underline"
          >
            <span>View Full Conflict of Interest Policy</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )
    },
    {
      num: '10',
      title: 'Research Misconduct',
      icon: <AlertTriangle className="w-5 h-5" />,
      color: 'amber',
      content: (
        <div className="space-y-3">
          <p className="text-sm text-slate-700 leading-relaxed">
            {journalInfo.acronym} maintains zero tolerance for research misconduct, which encompasses:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
            {[
              'Plagiarism & self-plagiarism',
              'Data fabrication',
              'Data falsification',
              'Duplicate publication',
              'Image manipulation',
              'Citation manipulation',
              'Undisclosed conflicts',
              'Fake peer review',
              'Inappropriate authorship'
            ].map((violation, idx) => (
              <div key={idx} className="p-2.5 bg-red-50 text-red-900 border border-red-200 rounded-xl font-medium">
                {violation}
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 italic mt-1">
            Allegations of misconduct are investigated thoroughly, fairly, and confidentially in accordance with COPE flowcharts.
          </p>
        </div>
      )
    },
    {
      num: '11',
      title: 'Corrections and Retractions',
      icon: <RefreshCw className="w-5 h-5" />,
      color: 'blue',
      content: (
        <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
          <p>
            When significant errors or ethical misconduct are identified post-publication, {journalInfo.acronym} may issue Corrections (Errata), Corrigenda, Expressions of Concern, or formal Retractions to preserve the scholarly record.
          </p>
        </div>
      )
    },
    {
      num: '12',
      title: 'Artificial Intelligence (AI) Policy',
      icon: <Bot className="w-5 h-5" />,
      color: 'amber',
      content: (
        <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
          <p>
            Authors may use AI-assisted tools for language editing or formatting, provided that:
          </p>
          <ul className="space-y-1.5 text-xs text-slate-700 pl-2">
            {[
              'Authors remain fully responsible for all submitted text, analysis, and conclusions.',
              'AI-generated content is thoroughly verified for factual and technical accuracy.',
              'AI tools are NOT credited or listed as authors or co-authors.',
              'Any substantive AI use is transparently disclosed in the manuscript.',
              'AI tools do not replace human responsibility for originality and scientific validity.'
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
      num: '13',
      title: 'Copyright and Intellectual Property',
      icon: <FileText className="w-5 h-5" />,
      color: 'blue',
      content: (
        <p className="text-sm text-slate-700 leading-relaxed">
          Authors must ensure that all copyrighted material has appropriate permissions, third-party content is properly acknowledged, and all applicable copyright laws are respected.
        </p>
      )
    },
    {
      num: '14',
      title: 'Complaints and Appeals',
      icon: <MessageSquare className="w-5 h-5" />,
      color: 'amber',
      content: (
        <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
          <p>
            {journalInfo.acronym} welcomes constructive complaints regarding editorial decisions, publication ethics, peer review, or research misconduct. Complaints should be submitted in writing to the Editor-in-Chief with supporting documentation.
          </p>
          <p className="text-xs text-slate-600 bg-blue-50 p-3 rounded-xl border border-blue-200">
            Appeals will be reviewed impartially by the Editorial Board, and final decisions will be communicated in a timely manner.
          </p>
        </div>
      )
    },
    {
      num: '15',
      title: 'Archiving and Record Integrity',
      icon: <Database className="w-5 h-5" />,
      color: 'blue',
      content: (
        <p className="text-sm text-slate-700 leading-relaxed">
          {journalInfo.acronym} is committed to preserving the scholarly record by maintaining permanent publication archives, clearly marking corrected or retracted articles, and ensuring published content remains accessible worldwide.
        </p>
      )
    },
    {
      num: '16',
      title: 'Policy Review',
      icon: <RefreshCw className="w-5 h-5" />,
      color: 'amber',
      content: (
        <p className="text-sm text-slate-700 leading-relaxed">
          This Publication Ethics Policy is reviewed periodically and updated as necessary to reflect evolving international standards in scholarly publishing and research integrity.
        </p>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800">
      <PageHero
        title="Publication Ethics Policy"
        subtitle="Comprehensive ethical standards for authors, editors, reviewers, and publishers adhering to COPE and international publication integrity best practices."
        badge="Publication Ethics & COPE Compliance"
        breadcrumbs={[
          { name: 'Policies', path: '/ethics-policy' },
          { name: 'Publication Ethics Policy' }
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
            <h4 className="text-base sm:text-lg font-bold text-[#0f4a85]">Need to review Author Guidelines?</h4>
            <p className="text-xs text-slate-700">
              Check formatting rules, citation formats, and manuscript structure requirements.
            </p>
          </div>
          <Link
            to="/guidelines"
            className="px-6 py-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-500 btn-gold-shadow shrink-0 transition-all flex items-center space-x-2"
          >
            <span>Author Guidelines</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div> */}
      </div>
    </div>
  );
}
